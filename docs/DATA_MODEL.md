# ProFX Club — Data Model (Phase 1 demo → Phase 2 PHP + MySQL)

This document is the contract for the later production backend (PHP + MySQL, per the stack rule).
The Phase 1 prototype implements the same records in `localStorage` (see `js/db.js`).

## ID & timestamp conventions
- Stable string IDs: `<prefix>_<time36><rand>` in demo; in MySQL use `CHAR(36)` UUIDs
  (e.g. `member` → UUID). Client generates IDs (crypto.randomUUID) — never auto-increment.
- All timestamps stored UTC ISO-8601 (`DATETIME` in MySQL). Display converts to event/member timezone.
- Every status change records **who** changed it and **when** (history/audit trail).

## Core records

### member
| field | type | notes |
|---|---|---|
| id | UUID PK | |
| membership_id | VARCHAR(16) UNIQUE | e.g. `PX-2026-000123`, issued on verification |
| name | VARCHAR(120) | |
| email | VARCHAR(190) UNIQUE | duplicate signup → sign-in, never a second record |
| status | ENUM('pending','active','suspended','closed') | default `pending` until email verified |
| verified | TINYINT(1) | email verification distinct from any later professional verification |
| source | VARCHAR(120) | signup source (page/UTM) |
| referral_code_used | VARCHAR(40) NULL | code used at signup |
| city, country, experience, language | VARCHAR(80) NULL | optional onboarding |
| interests | JSON | array of strings |
| whatsapp | VARCHAR(30) NULL | optional, only with consent/service need |
| consent | JSON | `{terms, privacy, promoEmail, promoWhatsapp}` booleans |
| progress | JSON | lesson completion flags `{lessonId: true}` |
| tags | JSON | staff tags |
| deletion_requested_at | DATETIME NULL | |
| created_at / updated_at | DATETIME | |

### consent_history
| field | notes |
|---|---|
| id UUID PK, member_id FK → member.id | |
| at DATETIME | |
| type ENUM('terms','privacy','promoEmail','promoWhatsapp') | |
| value TINYINT(1) | |
| note VARCHAR(255) | e.g. "accepted at registration", "changed in profile" |

### course (Phase 2: structured courses; Phase 1 uses flat lessons)
id, title, description, status, created_at.

### lesson
| field | notes |
|---|---|
| id UUID PK | |
| course_id FK NULL | Phase 1: standalone beginner-path lessons |
| week TINYINT | 1–4 beginner path |
| title, outcomes TEXT | |
| recording_url VARCHAR(500) NULL | only published with permission |
| sample TINYINT(1) | demo label |

### resource
id, title, kind (PDF/Worksheet/Template), summary, file_ref, access ENUM('members','public'), sample.

### event
| field | notes |
|---|---|
| id UUID PK | |
| title VARCHAR(200) | |
| starts_at DATETIME (UTC) + timezone VARCHAR(60) | e.g. `Asia/Dubai` |
| language VARCHAR(40), kind ENUM('online class','online webinar','online meetup','physical seminar') | |
| host VARCHAR(120) | |
| capacity INT | |
| cost VARCHAR(60) | "Free" or disclosed price |
| join_url VARCHAR(500) NULL | only visible to registered attendees |
| description TEXT | |
| status ENUM('draft','published','full','cancelled','completed') | publish ONLY owner-confirmed |
| sample TINYINT(1) | |

### event_registration
| field | notes |
|---|---|
| id UUID PK | |
| event_id FK, member_id FK | UNIQUE(event_id, member_id) for active bookings (one place per event) |
| status ENUM('confirmed','waitlisted','cancelled','attended','no-show') | |
| history JSON | `[{at, action, by}]` |
| created_at | |

Capacity rule (server-enforced in production): booking transaction checks
`confirmed < capacity` before inserting; cancellation of a confirmed booking
promotes the earliest waitlisted registration atomically.

### attendance
Folded into `event_registration.status` (`attended` / `no-show`) + history. A separate
table is only needed for multi-session events (Phase 2).

### community_destination
| field | notes |
|---|---|
| id UUID PK | |
| kind ENUM('telegram_announcements','telegram_discussion','whatsapp') | |
| url VARCHAR(500) NULL | empty until owner supplies — never fabricated |
| language, region VARCHAR(60) | |
| capacity_status ENUM('open','limited','full','not_staffed') | |
| active TINYINT(1) | only active+URL is shown to members |

### assistance_request
| field | notes |
|---|---|
| id UUID PK, member_id FK | |
| category, country, provider, facts TEXT, dates, requested_help TEXT, contact_pref | |
| status ENUM('new','reviewing','awaiting member','referral offered','referred','resolved','closed') | |
| history JSON | who changed status, when |
| referral_consent JSON NULL | `{at, value, note}` — explicit member approval |
| created_at / updated_at | |

### request_message
id, request_id FK, `from` ENUM('member','staff'), text, created_at.
(Member sees only own requests + replies; staff see assigned requests; all access logged.)

### private_note (staff-only)
id, request_id FK, author, text, created_at. Never exposed to member API.

### campaign
id, name, audience ENUM('promoEmail','promoWhatsapp','all-service'), subject, body template,
status ENUM('draft','sent'), results JSON `{recipients, delivered, bounced, unsubscribed}`.
**Rule:** only members with matching consent are recipients; opt-out never cancels membership.

### referral_code
code VARCHAR(40) PK, member_id FK, created_at, note.

### audit_log
id, at, actor (member id / 'admin' / 'system'), action, detail. Immutable append-only; 500-row cap in demo, full retention in production.

## Status definitions (spec)
- Membership: pending → active → suspended → closed
- Events: draft → published → full → cancelled → completed
- Bookings: confirmed → waitlisted → cancelled / attended / no-show
- Assistance: new → reviewing → awaiting member → referral offered → referred → resolved → closed
