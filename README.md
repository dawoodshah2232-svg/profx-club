# ProFX Club — Phase 1 Website + CRM Prototype

Free forex trader membership + community site with admin CRM, built from the spec
`ProFX Club Website and CRM Specification` (30 Sep 2026).

**Live demo:** https://dawoodshah2232-svg.github.io/profx-club/
**Admin CRM:** https://dawoodshah2232-svg.github.io/profx-club/admin/login.html

## What this is
A **static prototype** (plain HTML/CSS/JS, no framework) with a **localStorage data layer**
(`js/db.js`) — the same demo pattern as the bridging-investments and influencer-awards demos.
Production backend later = **PHP + MySQL** (per Dawood's stack rule). The data model for that
build is documented in `docs/DATA_MODEL.md`.

## Demo access
- **Member flow:** open the site → **Join Free** → enter name + email → accept terms →
  enter the **demo verification code shown on screen** → dashboard.
- **Sign in:** email → demo code shown on screen.
- **Admin CRM PIN:** `246810` (demo only; production = staff accounts with roles).

## What's DEMO data
Everything seeded is visibly labelled **SAMPLE / DEMO**: the 3 events, 1 educator,
3 resources, 2 members, 1 assistance request, 1 campaign. Community links are
**empty** — members see a clear "not available yet" message, never a fabricated link.
About page shows owner-fill placeholders, never invented team names. Policies are
**draft v0.1-demo** pending owner approval.

## Public pages
Home (free offer, quick signup, next confirmed session, benefits, 3-step joining, FAQs,
persistent mobile Join Free button) · Learn (Week 1–4 path, classes, educators, resources) ·
Events (date/timezone/language/host/capacity/cost/status) · Community (purpose, rules,
access) · Assistance (scope, process, club-support vs professional services) ·
Travel (interest list only — no bookings) · About & Contact (owner placeholders) ·
Terms · Privacy · Community Rules · Education Risk Notice.

## Member dashboard (`/app/`)
Overview (status, next booking, recommended lesson) · My Learning (path + resources) ·
My Events (book/cancel/waitlist/calendar .ics download) · Community (links or not-available
message) · Assistance (private requests + replies, referral consent) · Profile
(onboarding, comms prefs, referral code, deletion request).

## Admin CRM (`/admin/`)
Dashboard · Members (search/filter/consent/status/tags) · Education · Events
(capacity/registrations/waitlist/attendance) · Community settings · Assistance (full
workflow + private notes) · Campaigns (opt-in audiences only) · Reports (spec metric
definitions) · Content (homepage copy, FAQs, policy versions) · Audit log.

## Honesty rules enforced
No fake counters, no fake testimonials, no unconfirmed sessions as real, no
guaranteed-return language. One place per event, capacity enforced at booking,
waitlist + auto-promotion on cancellation, marketing opt-out never cancels membership,
duplicate signup → sign-in (no duplicate records), no broker credentials ever requested.

## Owner inputs still needed before publication
Logo · approved colours · responsible operating entity + contact details ·
official Telegram/WhatsApp links · 2 confirmed sessions · educator bios ·
first resources · assistance scope + support person + qualified referral partners ·
approved membership terms / privacy / retention / communication texts.

## QA (2026-09-30)
Local end-to-end pass: register → verify (demo code) → dashboard → book free session;
waitlist/capacity/cancellation; marketing opt-out; duplicate-signup redirect;
community "not available yet" message; all pages 200, zero broken links/images;
375px mobile layout checked. See commit history.

## Docs
- `docs/DATA_MODEL.md` — all spec core records for the PHP build.
- `docs/OPERATING_GUIDE.md` — owner can update events/resources/community links/homepage without a developer.
