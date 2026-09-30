/* ProFX Club — demo data layer (localStorage). Replaces Phase 2 PHP+MySQL API.
   All seeded content is SAMPLE/DEMO data, labelled as such everywhere.
   DB v4: ProFX Media products (passes, league, discounts, awards); notifications, learning progress, announcements, discussion prompts,
   assistance reply threads, integrations/social settings, richer sample data. */
(function () {
  "use strict";
  var KEY = "profxclub_db_v4";
  function uid(p) { return (p || "id") + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 9); }
  function now() { return new Date().toISOString(); }

  /* ---------- seed ---------- */
  function seed() {
    return {
      v: 4,
      settings: {
        brand: { name: "ProFX Club", tagline: "Free forex trader community", logo: "" /* owner input pending */ },
        org: { name: "ProFX Media FZ-LLC", entityNote: "Responsible operating entity details to be confirmed by the owner.", supportEmail: "" },
        community: {
          telegramAnnouncements: { url: "", language: "EN", region: "Global", capacityStatus: "open", active: false },
          telegramDiscussion: { url: "", language: "EN", region: "Global", capacityStatus: "not_staffed", active: false },
          whatsapp: { url: "", language: "EN", region: "Dubai/UAE", capacityStatus: "not_staffed", active: false }
        },
        /* Editable social media links — admin UI, empty until owner supplies */
        socials: [
          { id: "soc_telegram", network: "Telegram", label: "Telegram channel", url: "", active: false },
          { id: "soc_whatsapp", network: "WhatsApp", label: "WhatsApp community", url: "", active: false },
          { id: "soc_youtube", network: "YouTube", label: "YouTube channel", url: "", active: false },
          { id: "soc_instagram", network: "Instagram", label: "Instagram", url: "", active: false },
          { id: "soc_x", network: "X", label: "X (Twitter)", url: "", active: false },
          { id: "soc_tiktok", network: "TikTok", label: "TikTok", url: "", active: false }
        ],
        /* Integrations — demo stores locally, clearly marked demo */
        integrations: {
          email: { provider: "", apiKey: "", senderName: "ProFX Club", senderEmail: "", brandColor: "#28c070", demo: true, note: "DEMO — stored locally in this prototype. Production uses the configured provider." },
          sms: { provider: "", apiKey: "", senderId: "", demo: true, note: "DEMO — not connected in this prototype." },
          analytics: { provider: "", measurementId: "", demo: true, note: "DEMO — not connected in this prototype." }
        },
        home: {
          heroH1: "Join the free forex trader community.",
          heroLead: "Free beginner classes, live webinars, trader networking and assistance — no deposit, no broker account, no payment required.",
          benefitsTitle: "What you get as a member"
        },
        policyVersions: { membership: "v0.1-demo", privacy: "v0.1-demo", communityRules: "v0.1-demo", riskNotice: "v0.1-demo" },
        policyNotes: {
          membership: "DEMO text — owner-approved membership terms pending.",
          privacy: "DEMO text — owner-approved privacy notice pending.",
          communityRules: "DEMO text — owner-approved community rules pending.",
          riskNotice: "DEMO text — owner-approved risk notice pending."
        }
      },
      /* Events — SAMPLE data. Owner must confirm real sessions before publication. */
      events: [
 {
  "id": "evt_sample_00",
  "title": "Welcome Orientation: How ProFX Club Works (Online)",
  "sample": true,
  "startsAt": "2026-09-20T18:00:00+04:00",
  "timezone": "Asia/Dubai (GMT+4)",
  "language": "English",
  "host": "ProFX Community Team",
  "kind": "Online class",
  "capacity": 150,
  "cost": "Free",
  "status": "completed",
  "joinUrl": "",
  "description": "SAMPLE past session: orientation for new members."
 },
 {
  "id": "evt_sample_01",
  "title": "Beginner Class: Forex Terminology & Market Structure",
  "sample": true,
  "startsAt": "2026-10-10T11:00:00+04:00",
  "timezone": "Asia/Dubai (GMT+4)",
  "language": "English",
  "host": "ProFX Education Team",
  "kind": "Online class",
  "capacity": 200,
  "cost": "Free",
  "status": "published",
  "joinUrl": "",
  "description": "Week 1 of the beginner path: terminology, market structure and platform navigation with hypothetical examples."
 },
 {
  "id": "evt_sample_02",
  "title": "Expert Webinar: Risk Concepts — Leverage & Margin",
  "sample": true,
  "startsAt": "2026-10-24T19:00:00+04:00",
  "timezone": "Asia/Dubai (GMT+4)",
  "language": "English",
  "host": "ProFX Education Team",
  "kind": "Online webinar",
  "capacity": 25,
  "cost": "Free",
  "status": "published",
  "joinUrl": "",
  "description": "Week 2 of the beginner path: leverage, margin and risk concepts using hypothetical examples."
 },
 {
  "id": "evt_sample_03",
  "title": "Monthly Networking: Traders Meetup (Online)",
  "sample": true,
  "startsAt": "2026-11-07T18:00:00+04:00",
  "timezone": "Asia/Dubai (GMT+4)",
  "language": "English",
  "host": "ProFX Community Team",
  "kind": "Online meetup",
  "capacity": 100,
  "cost": "Free",
  "status": "published",
  "joinUrl": "",
  "description": "Monthly networking session for members: moderated Q&A and peer discussion."
 },
 {
  "id": "evt_sample_04",
  "title": "Beginner Class: Trading Plans, Journaling & Behaviour",
  "sample": true,
  "startsAt": "2026-10-17T11:00:00+04:00",
  "timezone": "Asia/Dubai (GMT+4)",
  "language": "English",
  "host": "ProFX Education Team",
  "kind": "Online class",
  "capacity": 200,
  "cost": "Free",
  "status": "published",
  "joinUrl": "",
  "description": "Week 3 of the beginner path: build a trading plan, start a journal and avoid common behavioural mistakes."
 },
 {
  "id": "evt_sample_05",
  "title": "Expert Webinar: Broker Due-Diligence Checklist",
  "sample": true,
  "startsAt": "2026-10-31T19:00:00+04:00",
  "timezone": "Asia/Dubai (GMT+4)",
  "language": "English",
  "host": "ProFX Education Team",
  "kind": "Online webinar",
  "capacity": 30,
  "cost": "Free",
  "status": "published",
  "joinUrl": "",
  "description": "Week 4 of the beginner path: how to check a broker, keep withdrawal records and spot fraud warning signs."
 },
 {
  "id": "evt_sample_06",
  "title": "Community AMA: Ask the Mentors (Online)",
  "sample": true,
  "startsAt": "2026-11-14T18:00:00+04:00",
  "timezone": "Asia/Dubai (GMT+4)",
  "language": "English",
  "host": "ProFX Community Team",
  "kind": "Online meetup",
  "capacity": 150,
  "cost": "Free",
  "status": "published",
  "joinUrl": "",
  "description": "Open Q&A with the education team — bring your beginner questions."
 },
 {
  "id": "evt_sample_07",
  "title": "September Networking Evening (Online)",
  "sample": true,
  "startsAt": "2026-09-12T18:00:00+04:00",
  "timezone": "Asia/Dubai (GMT+4)",
  "language": "English",
  "host": "ProFX Community Team",
  "kind": "Online meetup",
  "capacity": 80,
  "cost": "Free",
  "status": "completed",
  "joinUrl": "",
  "description": "SAMPLE past session: monthly networking evening."
 }
],
      /* registrations: status confirmed|waitlisted|cancelled|attended|no-show(legacy) — attendance tracked separately */
      registrations: [
 {
  "id": "reg_sample_01",
  "eventId": "evt_sample_00",
  "memberId": "mem_sample_01",
  "status": "confirmed",
  "attendance": "present",
  "createdAt": "2026-09-18T09:00:00+04:00",
  "history": [
   {
    "at": "2026-09-18T09:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   },
   {
    "at": "2026-09-20T19:30:00+04:00",
    "action": "attendance:present",
    "by": "admin"
   }
  ]
 },
 {
  "id": "reg_sample_02",
  "eventId": "evt_sample_00",
  "memberId": "mem_sample_03",
  "status": "confirmed",
  "attendance": "present",
  "createdAt": "2026-09-18T10:00:00+04:00",
  "history": [
   {
    "at": "2026-09-18T10:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   },
   {
    "at": "2026-09-20T19:30:00+04:00",
    "action": "attendance:present",
    "by": "admin"
   }
  ]
 },
 {
  "id": "reg_sample_03",
  "eventId": "evt_sample_00",
  "memberId": "mem_sample_04",
  "status": "confirmed",
  "attendance": "no-show",
  "createdAt": "2026-09-19T11:00:00+04:00",
  "history": [
   {
    "at": "2026-09-19T11:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   },
   {
    "at": "2026-09-20T19:30:00+04:00",
    "action": "attendance:no-show",
    "by": "admin"
   }
  ]
 },
 {
  "id": "reg_sample_04",
  "eventId": "evt_sample_01",
  "memberId": "mem_sample_01",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-25T08:00:00+04:00",
  "history": [
   {
    "at": "2026-09-25T08:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_05",
  "eventId": "evt_sample_01",
  "memberId": "mem_sample_03",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-26T09:00:00+04:00",
  "history": [
   {
    "at": "2026-09-26T09:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_06",
  "eventId": "evt_sample_02",
  "memberId": "mem_sample_01",
  "status": "waitlisted",
  "attendance": null,
  "createdAt": "2026-09-27T10:00:00+04:00",
  "history": [
   {
    "at": "2026-09-27T10:00:00+04:00",
    "action": "waitlisted",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_07",
  "eventId": "evt_sample_01",
  "memberId": "mem_sample_04",
  "status": "waitlisted",
  "attendance": null,
  "createdAt": "2026-09-28T12:00:00+04:00",
  "history": [
   {
    "at": "2026-09-28T12:00:00+04:00",
    "action": "waitlisted",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_08",
  "eventId": "evt_sample_00",
  "memberId": "mem_sample_06",
  "status": "confirmed",
  "attendance": "present",
  "createdAt": "2026-09-18T11:00:00+04:00",
  "history": [
   {
    "at": "2026-09-18T11:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   },
   {
    "at": "2026-09-18T19:30:00+04:00",
    "action": "attendance:present",
    "by": "admin"
   }
  ]
 },
 {
  "id": "reg_sample_09",
  "eventId": "evt_sample_00",
  "memberId": "mem_sample_07",
  "status": "confirmed",
  "attendance": "present",
  "createdAt": "2026-09-19T09:00:00+04:00",
  "history": [
   {
    "at": "2026-09-19T09:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   },
   {
    "at": "2026-09-19T19:30:00+04:00",
    "action": "attendance:present",
    "by": "admin"
   }
  ]
 },
 {
  "id": "reg_sample_10",
  "eventId": "evt_sample_00",
  "memberId": "mem_sample_08",
  "status": "confirmed",
  "attendance": "no-show",
  "createdAt": "2026-09-19T15:00:00+04:00",
  "history": [
   {
    "at": "2026-09-19T15:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   },
   {
    "at": "2026-09-19T19:30:00+04:00",
    "action": "attendance:no-show",
    "by": "admin"
   }
  ]
 },
 {
  "id": "reg_sample_11",
  "eventId": "evt_sample_07",
  "memberId": "mem_sample_01",
  "status": "confirmed",
  "attendance": "present",
  "createdAt": "2026-09-10T09:00:00+04:00",
  "history": [
   {
    "at": "2026-09-10T09:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   },
   {
    "at": "2026-09-10T19:30:00+04:00",
    "action": "attendance:present",
    "by": "admin"
   }
  ]
 },
 {
  "id": "reg_sample_12",
  "eventId": "evt_sample_07",
  "memberId": "mem_sample_03",
  "status": "confirmed",
  "attendance": "present",
  "createdAt": "2026-09-10T10:00:00+04:00",
  "history": [
   {
    "at": "2026-09-10T10:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   },
   {
    "at": "2026-09-10T19:30:00+04:00",
    "action": "attendance:present",
    "by": "admin"
   }
  ]
 },
 {
  "id": "reg_sample_13",
  "eventId": "evt_sample_07",
  "memberId": "mem_sample_06",
  "status": "confirmed",
  "attendance": "present",
  "createdAt": "2026-09-11T09:00:00+04:00",
  "history": [
   {
    "at": "2026-09-11T09:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   },
   {
    "at": "2026-09-11T19:30:00+04:00",
    "action": "attendance:present",
    "by": "admin"
   }
  ]
 },
 {
  "id": "reg_sample_14",
  "eventId": "evt_sample_07",
  "memberId": "mem_sample_14",
  "status": "confirmed",
  "attendance": "no-show",
  "createdAt": "2026-09-11T14:00:00+04:00",
  "history": [
   {
    "at": "2026-09-11T14:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   },
   {
    "at": "2026-09-11T19:30:00+04:00",
    "action": "attendance:no-show",
    "by": "admin"
   }
  ]
 },
 {
  "id": "reg_sample_15",
  "eventId": "evt_sample_07",
  "memberId": "mem_sample_04",
  "status": "confirmed",
  "attendance": "present",
  "createdAt": "2026-09-12T08:00:00+04:00",
  "history": [
   {
    "at": "2026-09-12T08:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   },
   {
    "at": "2026-09-12T19:30:00+04:00",
    "action": "attendance:present",
    "by": "admin"
   }
  ]
 },
 {
  "id": "reg_sample_16",
  "eventId": "evt_sample_01",
  "memberId": "mem_sample_06",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-26T10:00:00+04:00",
  "history": [
   {
    "at": "2026-09-26T10:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_17",
  "eventId": "evt_sample_01",
  "memberId": "mem_sample_07",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-27T09:00:00+04:00",
  "history": [
   {
    "at": "2026-09-27T09:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_18",
  "eventId": "evt_sample_01",
  "memberId": "mem_sample_08",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-28T08:00:00+04:00",
  "history": [
   {
    "at": "2026-09-28T08:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_19",
  "eventId": "evt_sample_01",
  "memberId": "mem_sample_14",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-29T09:00:00+04:00",
  "history": [
   {
    "at": "2026-09-29T09:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_20",
  "eventId": "evt_sample_01",
  "memberId": "mem_sample_16",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-30T08:00:00+04:00",
  "history": [
   {
    "at": "2026-09-30T08:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_21",
  "eventId": "evt_sample_01",
  "memberId": "mem_sample_19",
  "status": "waitlisted",
  "attendance": null,
  "createdAt": "2026-09-30T09:00:00+04:00",
  "history": [
   {
    "at": "2026-09-30T09:00:00+04:00",
    "action": "waitlisted",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_22",
  "eventId": "evt_sample_02",
  "memberId": "mem_sample_03",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-28T10:00:00+04:00",
  "history": [
   {
    "at": "2026-09-28T10:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_23",
  "eventId": "evt_sample_02",
  "memberId": "mem_sample_04",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-28T14:00:00+04:00",
  "history": [
   {
    "at": "2026-09-28T14:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_24",
  "eventId": "evt_sample_02",
  "memberId": "mem_sample_06",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-29T08:00:00+04:00",
  "history": [
   {
    "at": "2026-09-29T08:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_25",
  "eventId": "evt_sample_02",
  "memberId": "mem_sample_11",
  "status": "waitlisted",
  "attendance": null,
  "createdAt": "2026-09-29T16:00:00+04:00",
  "history": [
   {
    "at": "2026-09-29T16:00:00+04:00",
    "action": "waitlisted",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_26",
  "eventId": "evt_sample_02",
  "memberId": "mem_sample_14",
  "status": "waitlisted",
  "attendance": null,
  "createdAt": "2026-09-30T07:00:00+04:00",
  "history": [
   {
    "at": "2026-09-30T07:00:00+04:00",
    "action": "waitlisted",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_27",
  "eventId": "evt_sample_04",
  "memberId": "mem_sample_01",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-29T09:00:00+04:00",
  "history": [
   {
    "at": "2026-09-29T09:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_28",
  "eventId": "evt_sample_04",
  "memberId": "mem_sample_08",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-29T12:00:00+04:00",
  "history": [
   {
    "at": "2026-09-29T12:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_29",
  "eventId": "evt_sample_04",
  "memberId": "mem_sample_13",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-30T08:00:00+04:00",
  "history": [
   {
    "at": "2026-09-30T08:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_30",
  "eventId": "evt_sample_04",
  "memberId": "mem_sample_20",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-30T10:00:00+04:00",
  "history": [
   {
    "at": "2026-09-30T10:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_31",
  "eventId": "evt_sample_05",
  "memberId": "mem_sample_04",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-29T10:00:00+04:00",
  "history": [
   {
    "at": "2026-09-29T10:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_32",
  "eventId": "evt_sample_05",
  "memberId": "mem_sample_11",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-29T15:00:00+04:00",
  "history": [
   {
    "at": "2026-09-29T15:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_33",
  "eventId": "evt_sample_05",
  "memberId": "mem_sample_19",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-30T09:00:00+04:00",
  "history": [
   {
    "at": "2026-09-30T09:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_34",
  "eventId": "evt_sample_05",
  "memberId": "mem_sample_07",
  "status": "waitlisted",
  "attendance": null,
  "createdAt": "2026-09-30T10:30:00+04:00",
  "history": [
   {
    "at": "2026-09-30T10:30:00+04:00",
    "action": "waitlisted",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_35",
  "eventId": "evt_sample_03",
  "memberId": "mem_sample_01",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-29T11:00:00+04:00",
  "history": [
   {
    "at": "2026-09-29T11:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_36",
  "eventId": "evt_sample_03",
  "memberId": "mem_sample_14",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-30T08:30:00+04:00",
  "history": [
   {
    "at": "2026-09-30T08:30:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_37",
  "eventId": "evt_sample_03",
  "memberId": "mem_sample_17",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-30T09:30:00+04:00",
  "history": [
   {
    "at": "2026-09-30T09:30:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_38",
  "eventId": "evt_sample_06",
  "memberId": "mem_sample_08",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-30T09:00:00+04:00",
  "history": [
   {
    "at": "2026-09-30T09:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 },
 {
  "id": "reg_sample_39",
  "eventId": "evt_sample_06",
  "memberId": "mem_sample_10",
  "status": "confirmed",
  "attendance": null,
  "createdAt": "2026-09-30T10:00:00+04:00",
  "history": [
   {
    "at": "2026-09-30T10:00:00+04:00",
    "action": "confirmed",
    "by": "member"
   }
  ]
 }
],
      educators: [
 {
  "id": "edu_sample_01",
  "name": "Sample Educator",
  "sample": true,
  "bio": "SAMPLE profile — the owner will supply real educator biographies.",
  "credentials": "TBC",
  "langs": [
   "English"
  ],
  "photo": ""
 },
 {
  "id": "edu_sample_02",
  "name": "Sample Mentor — Risk",
  "sample": true,
  "bio": "SAMPLE profile — teaches the leverage, margin and risk sessions.",
  "credentials": "TBC",
  "langs": [
   "English",
   "Arabic"
  ],
  "photo": ""
 },
 {
  "id": "edu_sample_03",
  "name": "Sample Mentor — Community",
  "sample": true,
  "bio": "SAMPLE profile — hosts meetups and the monthly AMA.",
  "credentials": "TBC",
  "langs": [
   "English",
   "Hindi"
  ],
  "photo": ""
 }
],
      resources: [
 {
  "id": "res_sample_01",
  "title": "Beginner Trading Glossary",
  "kind": "PDF",
  "sample": true,
  "summary": "SAMPLE resource — key forex terms explained in plain language.",
  "access": "members",
  "file": ""
 },
 {
  "id": "res_sample_02",
  "title": "Risk-Planning Worksheet",
  "kind": "Worksheet",
  "sample": true,
  "summary": "SAMPLE resource — plan position size and risk before any trade.",
  "access": "members",
  "file": ""
 },
 {
  "id": "res_sample_03",
  "title": "Trading Journal Template",
  "kind": "Template",
  "sample": true,
  "summary": "SAMPLE resource — track trades, decisions and lessons learned.",
  "access": "members",
  "file": ""
 },
 {
  "id": "res_sample_04",
  "title": "Leverage & Margin Worked Examples",
  "kind": "Worksheet",
  "sample": true,
  "summary": "SAMPLE resource — hypothetical leverage and margin calculations, step by step.",
  "access": "members",
  "file": ""
 },
 {
  "id": "res_sample_05",
  "title": "Broker Due-Diligence Checklist",
  "kind": "Checklist",
  "sample": true,
  "summary": "SAMPLE resource — what to verify before trusting any broker.",
  "access": "members",
  "file": ""
 },
 {
  "id": "res_sample_06",
  "title": "Withdrawal Record-Keeping Guide",
  "kind": "Guide",
  "sample": true,
  "summary": "SAMPLE resource — how to document deposits and withdrawals properly.",
  "access": "members",
  "file": ""
 },
 {
  "id": "res_sample_07",
  "title": "Fraud Warning Signs One-Pager",
  "kind": "PDF",
  "sample": true,
  "summary": "SAMPLE resource — common scam patterns every beginner should know.",
  "access": "members",
  "file": ""
 }
],
      lessons: [
        { id: "les_01", week: 1, title: "Forex terminology, market structure, platform navigation", outcomes: "Understand core terms and how markets are structured.", recordingUrl: "", sample: true },
        { id: "les_02", week: 2, title: "Leverage, margin and risk concepts (hypothetical examples)", outcomes: "Explain leverage and margin; calculate simple risk examples.", recordingUrl: "", sample: true },
        { id: "les_03", week: 3, title: "Trading plans, journaling and behavioural mistakes", outcomes: "Draft a basic trading plan and start a journal.", recordingUrl: "", sample: true },
        { id: "les_04", week: 4, title: "Broker checks, withdrawal records and fraud awareness", outcomes: "Run broker due-diligence and spot common scams.", recordingUrl: "", sample: true }
      ],
      faqs: [
        { q: "Is membership really free?", a: "Yes. Free membership includes beginner classes, webinars, community access and trader-assistance intake. Travel, third-party professional services and selected physical activities may carry clearly disclosed charges — they are never required to join." },
        { q: "Do I need a broker account to join?", a: "No. No broker account, deposit or trading activity is required to join ProFX Club." },
        { q: "Will I get trading signals or guaranteed profits?", a: "No. We provide education, not signals. We never promise returns — anyone who guarantees profits is someone to avoid." },
        { q: "Do I have to join Telegram or WhatsApp?", a: "No. Community is voluntary. Joining never auto-adds you to any group, and free education is available without joining any chat." },
        { q: "How do I delete my account?", a: "Request deletion any time from your Profile page. We confirm what is removed and what we must keep for legal records." }
      ],
      /* announcements feed + discussion prompts — SAMPLE until owner publishes */
      announcements: [
 {
  "id": "ann_sample_01",
  "title": "Welcome to the new ProFX Club site",
  "sample": true,
  "body": "SAMPLE announcement — the owner will publish real club news here.",
  "at": "2026-09-29T10:00:00+04:00",
  "audience": "all"
 },
 {
  "id": "ann_sample_02",
  "title": "October class schedule is out",
  "sample": true,
  "body": "SAMPLE announcement — beginner classes and the expert webinar are open for booking.",
  "at": "2026-09-30T09:00:00+04:00",
  "audience": "members"
 },
 {
  "id": "ann_sample_03",
  "title": "New worksheet in the learning library",
  "sample": true,
  "body": "SAMPLE announcement — the leverage & margin worked examples are now available to members.",
  "at": "2026-09-29T14:00:00+04:00",
  "audience": "members"
 },
 {
  "id": "ann_sample_04",
  "title": "November AMA — save your seat",
  "sample": true,
  "body": "SAMPLE announcement — the community AMA with the mentors is open for booking.",
  "at": "2026-09-30T10:00:00+04:00",
  "audience": "all"
 },
 {
  "id": "ann_sample_05",
  "title": "Community guidelines reminder",
  "sample": true,
  "body": "SAMPLE announcement — please keep discussions respectful and educational. No signals, no promotions.",
  "at": "2026-09-27T10:00:00+04:00",
  "audience": "all"
 }
],
      discussions: [
 {
  "id": "dis_sample_01",
  "prompt": "What was the hardest forex term to understand when you started?",
  "sample": true,
  "detail": "SAMPLE discussion prompt — share your answer at the next meetup.",
  "at": "2026-09-28T10:00:00+04:00"
 },
 {
  "id": "dis_sample_02",
  "prompt": "One risk-management rule you never break",
  "sample": true,
  "detail": "SAMPLE discussion prompt — moderated peer discussion.",
  "at": "2026-09-30T10:00:00+04:00"
 },
 {
  "id": "dis_sample_03",
  "prompt": "How do you size a position? (hypothetical examples only)",
  "sample": true,
  "detail": "SAMPLE discussion prompt — education only, not financial advice.",
  "at": "2026-09-29T11:00:00+04:00"
 },
 {
  "id": "dis_sample_04",
  "prompt": "Best note-taking habit for your trading journal",
  "sample": true,
  "detail": "SAMPLE discussion prompt — share what works for you.",
  "at": "2026-09-30T08:00:00+04:00"
 },
 {
  "id": "dis_sample_05",
  "prompt": "What would you ask a mentor in the AMA?",
  "sample": true,
  "detail": "SAMPLE discussion prompt — top questions will be covered live.",
  "at": "2026-09-30T11:00:00+04:00"
 }
],
      members: [
 {
  "id": "mem_sample_01",
  "membershipId": "PX-2026-000001",
  "name": "Aisha Rahman",
  "email": "aisha@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-28T10:00:00+04:00",
  "source": "seed",
  "referralCode": "EDU-AISHA",
  "referredBy": "",
  "city": "Dubai",
  "country": "UAE",
  "experience": "Beginner",
  "language": "English",
  "interests": [
   "Beginner classes"
  ],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": true,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": [
   "beginner"
  ]
 },
 {
  "id": "mem_sample_02",
  "membershipId": "PX-2026-000002",
  "name": "Omar Farouk",
  "email": "omar@example.com",
  "sample": true,
  "status": "pending",
  "verified": false,
  "createdAt": "2026-09-29T14:30:00+04:00",
  "source": "seed",
  "referralCode": "",
  "referredBy": "",
  "city": "Sharjah",
  "country": "UAE",
  "experience": "Intermediate",
  "language": "English",
  "interests": [],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": false,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": []
 },
 {
  "id": "mem_sample_03",
  "membershipId": "PX-2026-000003",
  "name": "Sara Iqbal",
  "email": "sara@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-29T09:15:00+04:00",
  "source": "referral",
  "referralCode": "EDU-SARA",
  "referredBy": "EDU-AISHA",
  "city": "Dubai",
  "country": "UAE",
  "experience": "Beginner",
  "language": "English",
  "interests": [
   "Beginner classes",
   "Meetups"
  ],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": true,
   "promoWhatsapp": true
  },
  "consentHistory": [],
  "tags": [
   "beginner"
  ]
 },
 {
  "id": "mem_sample_04",
  "membershipId": "PX-2026-000004",
  "name": "David Chen",
  "email": "david@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-29T16:40:00+04:00",
  "source": "direct",
  "referralCode": "EDU-DAVID",
  "referredBy": "",
  "city": "Abu Dhabi",
  "country": "UAE",
  "experience": "Advanced",
  "language": "English",
  "interests": [
   "Webinars"
  ],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": []
 },
 {
  "id": "mem_sample_05",
  "membershipId": "PX-2026-000005",
  "name": "Layla Haddad",
  "email": "layla@example.com",
  "sample": true,
  "status": "suspended",
  "verified": true,
  "createdAt": "2026-09-27T11:20:00+04:00",
  "source": "direct",
  "referralCode": "",
  "referredBy": "",
  "city": "Dubai",
  "country": "UAE",
  "experience": "Beginner",
  "language": "Arabic",
  "interests": [],
  "avatar": "",
  "preferences": {
   "language": "Arabic",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": false,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": []
 },
 {
  "id": "mem_sample_06",
  "membershipId": "PX-2026-000006",
  "name": "Priya Nair",
  "email": "priya@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-26T09:00:00+04:00",
  "source": "direct",
  "referralCode": "EDU-PRIYA",
  "referredBy": "",
  "city": "Mumbai",
  "country": "India",
  "experience": "Beginner",
  "language": "English",
  "interests": [
   "Beginner classes"
  ],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": true,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": [
   "beginner"
  ]
 },
 {
  "id": "mem_sample_07",
  "membershipId": "PX-2026-000007",
  "name": "James Okafor",
  "email": "james@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-26T14:00:00+04:00",
  "source": "direct",
  "referralCode": "EDU-JAMES",
  "referredBy": "",
  "city": "Lagos",
  "country": "Nigeria",
  "experience": "Intermediate",
  "language": "English",
  "interests": [
   "Webinars"
  ],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": []
 },
 {
  "id": "mem_sample_08",
  "membershipId": "PX-2026-000008",
  "name": "Maria Santos",
  "email": "maria@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-27T08:30:00+04:00",
  "source": "referral",
  "referralCode": "EDU-MARIA",
  "referredBy": "EDU-AISHA",
  "city": "Manila",
  "country": "Philippines",
  "experience": "Beginner",
  "language": "English",
  "interests": [
   "Beginner classes",
   "Meetups"
  ],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": true,
   "promoWhatsapp": true
  },
  "consentHistory": [],
  "tags": [
   "beginner"
  ]
 },
 {
  "id": "mem_sample_09",
  "membershipId": "PX-2026-000009",
  "name": "Ahmed Hassan",
  "email": "ahmed@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-27T16:00:00+04:00",
  "source": "direct",
  "referralCode": "EDU-AHMED",
  "referredBy": "",
  "city": "Cairo",
  "country": "Egypt",
  "experience": "Beginner",
  "language": "Arabic",
  "interests": [],
  "avatar": "",
  "preferences": {
   "language": "Arabic",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": false,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": [
   "beginner"
  ]
 },
 {
  "id": "mem_sample_10",
  "membershipId": "PX-2026-000010",
  "name": "Fatima Al-Zahra",
  "email": "fatima@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-28T11:00:00+04:00",
  "source": "direct",
  "referralCode": "EDU-FATIMA",
  "referredBy": "",
  "city": "Riyadh",
  "country": "Saudi Arabia",
  "experience": "Intermediate",
  "language": "Arabic",
  "interests": [
   "Webinars"
  ],
  "avatar": "",
  "preferences": {
   "language": "Arabic",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": []
 },
 {
  "id": "mem_sample_11",
  "membershipId": "PX-2026-000011",
  "name": "Rajesh Kumar",
  "email": "rajesh@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-28T15:00:00+04:00",
  "source": "direct",
  "referralCode": "EDU-RAJESH",
  "referredBy": "",
  "city": "Delhi",
  "country": "India",
  "experience": "Advanced",
  "language": "Hindi",
  "interests": [
   "Webinars"
  ],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": []
 },
 {
  "id": "mem_sample_12",
  "membershipId": "PX-2026-000012",
  "name": "Sofia Reyes",
  "email": "sofia@example.com",
  "sample": true,
  "status": "pending",
  "verified": false,
  "createdAt": "2026-09-29T10:00:00+04:00",
  "source": "direct",
  "referralCode": "",
  "referredBy": "",
  "city": "Cebu",
  "country": "Philippines",
  "experience": "Beginner",
  "language": "English",
  "interests": [],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": false,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": [
   "beginner"
  ]
 },
 {
  "id": "mem_sample_13",
  "membershipId": "PX-2026-000013",
  "name": "Bilal Ahmed",
  "email": "bilal@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-29T12:00:00+04:00",
  "source": "referral",
  "referralCode": "EDU-BILAL",
  "referredBy": "EDU-SARA",
  "city": "Karachi",
  "country": "Pakistan",
  "experience": "Beginner",
  "language": "Urdu",
  "interests": [],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": [
   "beginner"
  ]
 },
 {
  "id": "mem_sample_14",
  "membershipId": "PX-2026-000014",
  "name": "Emma Wilson",
  "email": "emma@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-29T18:00:00+04:00",
  "source": "direct",
  "referralCode": "EDU-EMMA",
  "referredBy": "",
  "city": "London",
  "country": "UK",
  "experience": "Intermediate",
  "language": "English",
  "interests": [
   "Webinars",
   "Meetups"
  ],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": true,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": []
 },
 {
  "id": "mem_sample_15",
  "membershipId": "PX-2026-000015",
  "name": "Yusuf Ali",
  "email": "yusuf@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-30T08:00:00+04:00",
  "source": "direct",
  "referralCode": "EDU-YUSUF",
  "referredBy": "",
  "city": "Doha",
  "country": "Qatar",
  "experience": "Beginner",
  "language": "English",
  "interests": [],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": false,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": [
   "beginner"
  ]
 },
 {
  "id": "mem_sample_16",
  "membershipId": "PX-2026-000016",
  "name": "Grace Mbeki",
  "email": "grace@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-30T09:30:00+04:00",
  "source": "referral",
  "referralCode": "EDU-GRACE",
  "referredBy": "EDU-DAVID",
  "city": "Johannesburg",
  "country": "South Africa",
  "experience": "Beginner",
  "language": "English",
  "interests": [
   "Beginner classes"
  ],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": [
   "beginner"
  ]
 },
 {
  "id": "mem_sample_17",
  "membershipId": "PX-2026-000017",
  "name": "Daniel Tan",
  "email": "daniel@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-30T10:00:00+04:00",
  "source": "direct",
  "referralCode": "EDU-DANIEL",
  "referredBy": "",
  "city": "Kuala Lumpur",
  "country": "Malaysia",
  "experience": "Intermediate",
  "language": "English",
  "interests": [],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": []
 },
 {
  "id": "mem_sample_18",
  "membershipId": "PX-2026-000018",
  "name": "Hana Youssef",
  "email": "hana@example.com",
  "sample": true,
  "status": "pending",
  "verified": false,
  "createdAt": "2026-09-30T11:00:00+04:00",
  "source": "direct",
  "referralCode": "",
  "referredBy": "",
  "city": "Amman",
  "country": "Jordan",
  "experience": "Beginner",
  "language": "Arabic",
  "interests": [],
  "avatar": "",
  "preferences": {
   "language": "Arabic",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": false,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": [
   "beginner"
  ]
 },
 {
  "id": "mem_sample_19",
  "membershipId": "PX-2026-000019",
  "name": "Kevin D'Souza",
  "email": "kevin@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-30T11:30:00+04:00",
  "source": "direct",
  "referralCode": "EDU-KEVIN",
  "referredBy": "",
  "city": "Toronto",
  "country": "Canada",
  "experience": "Advanced",
  "language": "English",
  "interests": [
   "Webinars"
  ],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": false,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": []
 },
 {
  "id": "mem_sample_20",
  "membershipId": "PX-2026-000020",
  "name": "Ayesha Khan",
  "email": "ayesha@example.com",
  "sample": true,
  "status": "active",
  "verified": true,
  "createdAt": "2026-09-30T12:00:00+04:00",
  "source": "referral",
  "referralCode": "EDU-AYESHA",
  "referredBy": "EDU-AISHA",
  "city": "Lahore",
  "country": "Pakistan",
  "experience": "Beginner",
  "language": "Urdu",
  "interests": [],
  "avatar": "",
  "preferences": {
   "language": "English",
   "timezone": "Asia/Dubai"
  },
  "directoryOptIn": true,
  "consent": {
   "terms": true,
   "privacy": true,
   "promoEmail": true,
   "promoWhatsapp": false
  },
  "consentHistory": [],
  "tags": [
   "beginner"
  ]
 }
],
      assistance: [
 {
  "id": "asr_sample_01",
  "sample": true,
  "memberId": "mem_sample_01",
  "createdAt": "2026-09-28T12:00:00+04:00",
  "category": "Broker dispute",
  "country": "UAE",
  "provider": "Sample Broker Ltd",
  "facts": "SAMPLE request for demo purposes.",
  "dates": "Aug 2026",
  "requestedHelp": "Information on complaint preparation",
  "contactPref": "Email",
  "status": "reviewing",
  "privateNotes": [
   {
    "at": "2026-09-28T13:00:00+04:00",
    "by": "staff",
    "text": "SAMPLE note."
   }
  ],
  "messages": [],
  "replies": [
   {
    "id": "rpl_sample_01",
    "at": "2026-09-28T12:05:00+04:00",
    "author": "member",
    "by": "mem_sample_01",
    "text": "SAMPLE member message: please advise on next steps.",
    "visibleToMember": true
   },
   {
    "id": "rpl_sample_02",
    "at": "2026-09-29T09:00:00+04:00",
    "author": "staff",
    "by": "admin",
    "text": "SAMPLE staff reply: we are reviewing your case and will update you shortly.",
    "visibleToMember": true
   }
  ],
  "referralConsent": null,
  "history": [
   {
    "at": "2026-09-28T12:00:00+04:00",
    "by": "member",
    "action": "created"
   }
  ]
 },
 {
  "id": "asr_sample_02",
  "sample": true,
  "memberId": "mem_sample_03",
  "createdAt": "2026-09-29T15:00:00+04:00",
  "category": "Withdrawal delay",
  "country": "UAE",
  "provider": "Sample Broker Ltd",
  "facts": "SAMPLE request for demo purposes.",
  "dates": "Sep 2026",
  "requestedHelp": "How to document the delay and escalate",
  "contactPref": "Email",
  "status": "new",
  "privateNotes": [],
  "messages": [],
  "replies": [
   {
    "id": "rpl_sample_03",
    "at": "2026-09-29T15:05:00+04:00",
    "author": "member",
    "by": "mem_sample_03",
    "text": "SAMPLE member message: my withdrawal has been pending for two weeks.",
    "visibleToMember": true
   }
  ],
  "referralConsent": null,
  "history": [
   {
    "at": "2026-09-29T15:00:00+04:00",
    "by": "member",
    "action": "created"
   }
  ]
 },
 {
  "id": "asr_sample_03",
  "sample": true,
  "memberId": "mem_sample_04",
  "createdAt": "2026-09-26T10:00:00+04:00",
  "category": "Platform issue",
  "country": "UAE",
  "provider": "Sample Platform Co",
  "facts": "SAMPLE request for demo purposes.",
  "dates": "Sep 2026",
  "requestedHelp": "Understanding an order execution message",
  "contactPref": "Email",
  "status": "resolved",
  "privateNotes": [
   {
    "at": "2026-09-26T11:00:00+04:00",
    "by": "staff",
    "text": "SAMPLE note: explained the message meaning."
   }
  ],
  "messages": [],
  "replies": [
   {
    "id": "rpl_sample_04",
    "at": "2026-09-26T10:05:00+04:00",
    "author": "member",
    "by": "mem_sample_04",
    "text": "SAMPLE member message: what does this execution message mean?",
    "visibleToMember": true
   },
   {
    "id": "rpl_sample_05",
    "at": "2026-09-26T13:00:00+04:00",
    "author": "staff",
    "by": "admin",
    "text": "SAMPLE staff reply: here is what the message means and where to read more.",
    "visibleToMember": true
   },
   {
    "id": "rpl_sample_06",
    "at": "2026-09-27T09:00:00+04:00",
    "author": "member",
    "by": "mem_sample_04",
    "text": "SAMPLE member message: understood, thank you!",
    "visibleToMember": true
   }
  ],
  "referralConsent": null,
  "history": [
   {
    "at": "2026-09-26T10:00:00+04:00",
    "by": "member",
    "action": "created"
   },
   {
    "at": "2026-09-27T10:00:00+04:00",
    "by": "admin",
    "action": "resolved"
   }
  ]
 },
 {
  "id": "asr_sample_04",
  "sample": true,
  "memberId": "mem_sample_08",
  "createdAt": "2026-09-30T09:00:00+04:00",
  "category": "Suspected scam",
  "country": "Philippines",
  "provider": "Unknown promoter",
  "facts": "SAMPLE request for demo purposes.",
  "dates": "Sep 2026",
  "requestedHelp": "Is this offer legitimate?",
  "contactPref": "WhatsApp",
  "status": "reviewing",
  "privateNotes": [
   {
    "at": "2026-09-30T09:30:00+04:00",
    "by": "staff",
    "text": "SAMPLE note: classic guaranteed-returns pattern — prepare warning reply."
   }
  ],
  "messages": [],
  "replies": [
   {
    "id": "rpl_sample_07",
    "at": "2026-09-30T09:05:00+04:00",
    "author": "member",
    "by": "mem_sample_08",
    "text": "SAMPLE member message: someone promised me doubled money in a week.",
    "visibleToMember": true
   }
  ],
  "referralConsent": null,
  "history": [
   {
    "at": "2026-09-30T09:00:00+04:00",
    "by": "member",
    "action": "created"
   }
  ]
 }
],
      campaigns: [
 {
  "id": "cam_sample_01",
  "name": "Welcome digest — sample",
  "sample": true,
  "audience": "promoEmail",
  "subject": "Your first free class at ProFX Club",
  "body": "SAMPLE campaign body.",
  "status": "draft",
  "createdAt": "2026-09-29T09:00:00+04:00",
  "results": null,
  "sendLog": []
 },
 {
  "id": "cam_sample_02",
  "name": "October classes reminder — sample",
  "sample": true,
  "audience": "promoEmail",
  "subject": "October classes are open for booking",
  "body": "SAMPLE campaign body.",
  "status": "sent",
  "createdAt": "2026-09-30T08:00:00+04:00",
  "results": {
   "recipients": 4,
   "delivered": 4
  },
  "sendLog": [
   {
    "at": "2026-09-30T08:00:10+04:00",
    "to": "aisha@example.com",
    "status": "delivered"
   },
   {
    "at": "2026-09-30T08:00:12+04:00",
    "to": "sara@example.com",
    "status": "delivered"
   },
   {
    "at": "2026-09-30T08:00:14+04:00",
    "to": "emma@example.com",
    "status": "delivered"
   },
   {
    "at": "2026-09-30T08:00:16+04:00",
    "to": "ayesha@example.com",
    "status": "delivered"
   }
  ]
 }
],
      referralCodes: [
 {
  "code": "EDU-AISHA",
  "memberId": "mem_sample_01",
  "createdAt": "2026-09-28T10:00:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-SARA",
  "memberId": "mem_sample_03",
  "createdAt": "2026-09-29T09:15:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-DAVID",
  "memberId": "mem_sample_04",
  "createdAt": "2026-09-29T16:40:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-PRIYA",
  "memberId": "mem_sample_06",
  "createdAt": "2026-09-26T09:00:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-JAMES",
  "memberId": "mem_sample_07",
  "createdAt": "2026-09-26T14:00:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-MARIA",
  "memberId": "mem_sample_08",
  "createdAt": "2026-09-27T08:30:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-AHMED",
  "memberId": "mem_sample_09",
  "createdAt": "2026-09-27T16:00:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-FATIMA",
  "memberId": "mem_sample_10",
  "createdAt": "2026-09-28T11:00:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-RAJESH",
  "memberId": "mem_sample_11",
  "createdAt": "2026-09-28T15:00:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-BILAL",
  "memberId": "mem_sample_13",
  "createdAt": "2026-09-29T12:00:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-EMMA",
  "memberId": "mem_sample_14",
  "createdAt": "2026-09-29T18:00:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-YUSUF",
  "memberId": "mem_sample_15",
  "createdAt": "2026-09-30T08:00:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-GRACE",
  "memberId": "mem_sample_16",
  "createdAt": "2026-09-30T09:30:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-DANIEL",
  "memberId": "mem_sample_17",
  "createdAt": "2026-09-30T10:00:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-KEVIN",
  "memberId": "mem_sample_19",
  "createdAt": "2026-09-30T11:30:00+04:00",
  "note": "SAMPLE"
 },
 {
  "code": "EDU-AYESHA",
  "memberId": "mem_sample_20",
  "createdAt": "2026-09-30T12:00:00+04:00",
  "note": "SAMPLE"
 }
],
      /* learning progress: {memberId, lessonId, at} */
      progress: [
 {
  "memberId": "mem_sample_01",
  "lessonId": "les_01",
  "at": "2026-09-29T18:00:00+04:00"
 },
 {
  "memberId": "mem_sample_01",
  "lessonId": "les_02",
  "at": "2026-09-30T08:00:00+04:00"
 },
 {
  "memberId": "mem_sample_03",
  "lessonId": "les_01",
  "at": "2026-09-29T19:00:00+04:00"
 },
 {
  "memberId": "mem_sample_04",
  "lessonId": "les_01",
  "at": "2026-09-27T10:00:00+04:00"
 },
 {
  "memberId": "mem_sample_04",
  "lessonId": "les_02",
  "at": "2026-09-28T10:00:00+04:00"
 },
 {
  "memberId": "mem_sample_04",
  "lessonId": "les_03",
  "at": "2026-09-29T10:00:00+04:00"
 },
 {
  "memberId": "mem_sample_06",
  "lessonId": "les_01",
  "at": "2026-09-30T09:00:00+04:00"
 }
],
      notifications: [
 {
  "id": "ntf_sample_01",
  "memberId": "mem_sample_01",
  "kind": "booking",
  "title": "Booking confirmed",
  "sample": true,
  "body": "SAMPLE — your place at the Welcome Orientation was confirmed.",
  "at": "2026-09-18T09:00:00+04:00",
  "read": true,
  "link": "events.html"
 },
 {
  "id": "ntf_sample_02",
  "memberId": "mem_sample_01",
  "kind": "reminder",
  "title": "Class reminder",
  "sample": true,
  "body": "SAMPLE — the Beginner Class starts on Sat, 10 Oct 2026 at 11:00 (GMT+4).",
  "at": "2026-09-30T08:00:00+04:00",
  "read": false,
  "link": "events.html"
 },
 {
  "id": "ntf_sample_03",
  "memberId": "mem_sample_01",
  "kind": "assistance",
  "title": "New reply on your assistance request",
  "sample": true,
  "body": "SAMPLE — support replied to your broker dispute case.",
  "at": "2026-09-29T09:00:00+04:00",
  "read": false,
  "link": "assistance.html"
 },
 {
  "id": "ntf_sample_04",
  "memberId": "mem_sample_01",
  "kind": "resource",
  "title": "New learning resource",
  "sample": true,
  "body": "SAMPLE — the Risk-Planning Worksheet was added to the library.",
  "at": "2026-09-29T12:00:00+04:00",
  "read": false,
  "link": "learning.html"
 },
 {
  "id": "ntf_sample_05",
  "memberId": "mem_sample_01",
  "kind": "announcement",
  "title": "November AMA announced",
  "sample": true,
  "body": "SAMPLE — the community AMA with the mentors is open for booking.",
  "at": "2026-09-30T10:00:00+04:00",
  "read": false,
  "link": "community.html"
 },
 {
  "id": "ntf_sample_06",
  "memberId": "mem_sample_03",
  "kind": "booking",
  "title": "Booking confirmed",
  "sample": true,
  "body": "SAMPLE — your place at the Beginner Class was confirmed.",
  "at": "2026-09-26T09:00:00+04:00",
  "read": true,
  "link": "events.html"
 },
 {
  "id": "ntf_sample_07",
  "memberId": "mem_sample_03",
  "kind": "booking",
  "title": "Booking confirmed",
  "sample": true,
  "body": "SAMPLE — your place at the Risk Concepts webinar was confirmed.",
  "at": "2026-09-28T10:00:00+04:00",
  "read": false,
  "link": "events.html"
 },
 {
  "id": "ntf_sample_08",
  "memberId": "mem_sample_03",
  "kind": "assistance",
  "title": "Assistance request received",
  "sample": true,
  "body": "SAMPLE — we received your withdrawal delay case and will review it.",
  "at": "2026-09-29T15:00:00+04:00",
  "read": false,
  "link": "assistance.html"
 },
 {
  "id": "ntf_sample_09",
  "memberId": "mem_sample_04",
  "kind": "booking",
  "title": "Booking confirmed",
  "sample": true,
  "body": "SAMPLE — your place at the Broker Due-Diligence webinar was confirmed.",
  "at": "2026-09-29T10:00:00+04:00",
  "read": false,
  "link": "events.html"
 }
],
      audit: [],
      nextMemberSeq: 21,
      travelInterest: [
 {
  "id": "trv_sample_01",
  "sample": true,
  "name": "Aisha Rahman",
  "email": "aisha@example.com",
  "topic": "Trading retreats",
  "note": "SAMPLE interest entry.",
  "at": "2026-09-29T12:00:00+04:00",
  "kind": "interest-only"
 },
 {
  "id": "trv_sample_02",
  "sample": true,
  "name": "Maria Santos",
  "email": "maria@example.com",
  "topic": "City meetups abroad",
  "note": "SAMPLE interest entry.",
  "at": "2026-09-30T09:00:00+04:00",
  "kind": "interest-only"
 },
 {
  "id": "trv_sample_03",
  "sample": true,
  "name": "Emma Wilson",
  "email": "emma@example.com",
  "topic": "Trading retreats",
  "note": "SAMPLE interest entry.",
  "at": "2026-09-30T10:00:00+04:00",
  "kind": "interest-only"
 }
],
      /* ---------- ProFX Media products — SAMPLE data. Real editions, dates, venues and
         prizes are confirmed by the owner before publication. ---------- */
      passes: [
        { "id": "pass_visitor", "name": "Visitor Pass", "price": 0, "currency": "USD", "tagline": "Explore the expo floor", "badge": "Free",
          "perks": ["2-day exhibition access", "Selected conference sessions", "Official networking via the event app", "Business lounge access"], "sample": true },
        { "id": "pass_trader", "name": "Trader Pass", "price": 49, "currency": "USD", "tagline": "Built for active traders", "badge": "Popular",
          "perks": ["Everything in Visitor", "Verified-trader identity", "Dedicated trader lounge", "Trader strategy hub sessions", "Trader's clinic access", "Lucky-draw entry"], "sample": true },
        { "id": "pass_premium", "name": "Premium Pass", "price": 149, "currency": "USD", "tagline": "Learn, network, get seen", "badge": "Best value",
          "perks": ["Everything in Trader", "All workshops & masterclasses", "Priority seating at keynotes", "B2B meeting-zone access", "Expo goodie bag", "Certificate of attendance"], "sample": true },
        { "id": "pass_vip", "name": "VIP Pass", "price": 299, "currency": "USD", "tagline": "The full ProFX experience", "badge": "VIP",
          "perks": ["Everything in Premium", "Awards gala night seat", "VIP networking dinner", "Speaker meet & greet", "Front-row reserved seating", "Concierge support"], "sample": true }
      ],
      discountCodes: [
        { "code": "EARLYBIRD20", "pct": 20, "appliesTo": ["pass", "league"], "maxUses": 200, "used": 34, "active": true, "note": "SAMPLE — early-bird launch offer" },
        { "code": "LEAGUE50", "pct": 50, "appliesTo": ["league"], "maxUses": 100, "used": 12, "active": true, "note": "SAMPLE — league launch" },
        { "code": "EXPO25", "pct": 25, "appliesTo": ["pass"], "maxUses": 150, "used": 41, "active": true, "note": "SAMPLE — expo season" },
        { "code": "MEMBER15", "pct": 15, "appliesTo": ["pass", "league"], "maxUses": 500, "used": 88, "active": true, "note": "SAMPLE — club member benefit" },
        { "code": "SUMMIT20", "pct": 20, "appliesTo": ["pass"], "maxUses": 80, "used": 9, "active": true, "note": "SAMPLE — summit edition" },
        { "code": "AWARDS15", "pct": 15, "appliesTo": ["pass"], "maxUses": 60, "used": 5, "active": true, "note": "SAMPLE — awards gala" },
        { "code": "STUDENT10", "pct": 10, "appliesTo": ["pass", "league"], "maxUses": 300, "used": 22, "active": true, "note": "SAMPLE — student rate" },
        { "code": "GROUP20", "pct": 20, "appliesTo": ["pass"], "maxUses": 40, "used": 3, "active": true, "note": "SAMPLE — group bookings" }
      ],
      leagueDivisions: [
        { "id": "div_qualifier", "name": "Qualifier Division", "entryFee": 25, "currency": "USD", "format": "Online qualifier — top traders advance to the live arena", "maxTraders": 500, "sample": true },
        { "id": "div_pro", "name": "Pro Division", "entryFee": 75, "currency": "USD", "format": "Live arena heats on the expo floor, expert commentary", "maxTraders": 120, "sample": true },
        { "id": "div_elite", "name": "Elite Division", "entryFee": 150, "currency": "USD", "format": "Grand-final championship stage", "maxTraders": 32, "sample": true }
      ],
      leagueRounds: [
        { "id": "rnd_1", "name": "Round 1 — Online Qualifier", "divisionId": "div_qualifier", "status": "open", "note": "SAMPLE — dates to be announced" },
        { "id": "rnd_2", "name": "Semifinal — Live Arena Heats", "divisionId": "div_pro", "status": "upcoming", "note": "SAMPLE — dates to be announced" },
        { "id": "rnd_3", "name": "Grand Final — Championship Stage", "divisionId": "div_elite", "status": "upcoming", "note": "SAMPLE — dates to be announced" }
      ],
      /* SAMPLE leaderboard — illustrative standings, not real results */
      leagueEntries: [
        { "id": "lge_sample_01", "trader": "Omar K.", "country": "UAE", "divisionId": "div_pro", "pnlPct": 18.4, "trades": 24, "winRate": 62, "status": "qualified", "sample": true },
        { "id": "lge_sample_02", "trader": "Priya S.", "country": "India", "divisionId": "div_pro", "pnlPct": 15.1, "trades": 21, "winRate": 57, "status": "qualified", "sample": true },
        { "id": "lge_sample_03", "trader": "Daniel M.", "country": "UK", "divisionId": "div_pro", "pnlPct": 12.8, "trades": 19, "winRate": 58, "status": "qualified", "sample": true },
        { "id": "lge_sample_04", "trader": "Fatima A.", "country": "UAE", "divisionId": "div_pro", "pnlPct": 11.2, "trades": 26, "winRate": 54, "status": "qualified", "sample": true },
        { "id": "lge_sample_05", "trader": "Chen W.", "country": "Singapore", "divisionId": "div_pro", "pnlPct": 9.6, "trades": 22, "winRate": 55, "status": "qualified", "sample": true },
        { "id": "lge_sample_06", "trader": "Lucas R.", "country": "Brazil", "divisionId": "div_pro", "pnlPct": 8.3, "trades": 20, "winRate": 50, "status": "qualified", "sample": true },
        { "id": "lge_sample_07", "trader": "Aisha R.", "country": "Pakistan", "divisionId": "div_qualifier", "pnlPct": 14.7, "trades": 18, "winRate": 61, "status": "active", "sample": true },
        { "id": "lge_sample_08", "trader": "Yuki T.", "country": "Japan", "divisionId": "div_qualifier", "pnlPct": 11.9, "trades": 23, "winRate": 56, "status": "active", "sample": true },
        { "id": "lge_sample_09", "trader": "Marco D.", "country": "Italy", "divisionId": "div_qualifier", "pnlPct": 10.4, "trades": 17, "winRate": 59, "status": "active", "sample": true },
        { "id": "lge_sample_10", "trader": "Sara N.", "country": "Egypt", "divisionId": "div_qualifier", "pnlPct": 8.8, "trades": 25, "winRate": 52, "status": "active", "sample": true },
        { "id": "lge_sample_11", "trader": "Viktor P.", "country": "Georgia", "divisionId": "div_elite", "pnlPct": 21.3, "trades": 15, "winRate": 67, "status": "finalist", "sample": true },
        { "id": "lge_sample_12", "trader": "Nadia H.", "country": "UAE", "divisionId": "div_elite", "pnlPct": 19.0, "trades": 16, "winRate": 63, "status": "finalist", "sample": true }
      ],
      passOrders: [],
      awardCategories: [
        { "id": "awd_1", "name": "Best Forex Broker — MENA", "desc": "Outstanding trading conditions and client service in the region.", "sample": true },
        { "id": "awd_2", "name": "Best Trading Platform", "desc": "Innovation, reliability and trader experience.", "sample": true },
        { "id": "awd_3", "name": "Best Fintech Innovation", "desc": "Breakthrough technology shaping financial markets.", "sample": true },
        { "id": "awd_4", "name": "Best Crypto Exchange", "desc": "Security, liquidity and product depth.", "sample": true },
        { "id": "awd_5", "name": "Best Trading Educator", "desc": "Exceptional contribution to trader education.", "sample": true },
        { "id": "awd_6", "name": "Rising Star Broker", "desc": "Fastest-growing new brokerage brand.", "sample": true },
        { "id": "awd_7", "name": "Best IB / Affiliate Program", "desc": "Partner support, payouts and transparency.", "sample": true },
        { "id": "awd_8", "name": "Trader's Choice Award", "desc": "Voted by the trading community.", "sample": true }
      ],
      awardNominations: [],
      expoAgenda: [
        { "id": "agd_e1", "day": "Day 1", "time": "10:00", "title": "Opening ceremony & keynote", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true },
        { "id": "agd_e2", "day": "Day 1", "time": "11:30", "title": "Live trading: ProFX League arena heats", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true },
        { "id": "agd_e3", "day": "Day 1", "time": "14:00", "title": "Panel: the future of forex & fintech", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true },
        { "id": "agd_e4", "day": "Day 1", "time": "16:00", "title": "Workshop: risk management masterclass", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true },
        { "id": "agd_e5", "day": "Day 2", "time": "10:30", "title": "Keynote: trading psychology at scale", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true },
        { "id": "agd_e6", "day": "Day 2", "time": "13:00", "title": "Startup showcase & B2B networking", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true },
        { "id": "agd_e7", "day": "Day 2", "time": "15:30", "title": "ProFX League grand final — live", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true },
        { "id": "agd_e8", "day": "Day 2", "time": "19:30", "title": "ProFX Awards & gala night", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true }
      ],
      expoSpeakers: [
        { "id": "spk_1", "name": "Keynote Speaker", "role": "Industry leader", "topic": "The future of forex", "note": "SAMPLE — speaker lineup to be confirmed", "sample": true },
        { "id": "spk_2", "name": "Trading Strategist", "role": "Pro trader", "topic": "Live market breakdowns", "note": "SAMPLE — speaker lineup to be confirmed", "sample": true },
        { "id": "spk_3", "name": "Risk Specialist", "role": "Risk manager", "topic": "Risk masterclass", "note": "SAMPLE — speaker lineup to be confirmed", "sample": true },
        { "id": "spk_4", "name": "Fintech Founder", "role": "CEO", "topic": "AI in trading", "note": "SAMPLE — speaker lineup to be confirmed", "sample": true },
        { "id": "spk_5", "name": "Regulatory Expert", "role": "Compliance advisor", "topic": "Regulation outlook", "note": "SAMPLE — speaker lineup to be confirmed", "sample": true },
        { "id": "spk_6", "name": "Psychology Coach", "role": "Performance coach", "topic": "Trading mindset", "note": "SAMPLE — speaker lineup to be confirmed", "sample": true }
      ],
      expoExhibitors: [
        { "id": "exh_1", "name": "Sample Brokerage", "type": "Broker", "note": "SAMPLE — exhibitor list to be confirmed", "sample": true },
        { "id": "exh_2", "name": "Sample Liquidity", "type": "Liquidity provider", "note": "SAMPLE — exhibitor list to be confirmed", "sample": true },
        { "id": "exh_3", "name": "Sample PayTech", "type": "Payments", "note": "SAMPLE — exhibitor list to be confirmed", "sample": true },
        { "id": "exh_4", "name": "Sample Fintech", "type": "Fintech", "note": "SAMPLE — exhibitor list to be confirmed", "sample": true },
        { "id": "exh_5", "name": "Sample Platform", "type": "Technology", "note": "SAMPLE — exhibitor list to be confirmed", "sample": true },
        { "id": "exh_6", "name": "Sample Media", "type": "Media partner", "note": "SAMPLE — exhibitor list to be confirmed", "sample": true }
      ],
      summitAgenda: [
        { "id": "agd_s1", "time": "10:00", "title": "Summit opening & industry outlook", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true },
        { "id": "agd_s2", "time": "11:15", "title": "CEO panel: the business of brokerage", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true },
        { "id": "agd_s3", "time": "13:30", "title": "Institutional roundtable (invite only)", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true },
        { "id": "agd_s4", "time": "15:00", "title": "Regulation & licensing workshop", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true },
        { "id": "agd_s5", "time": "16:30", "title": "Closing keynote & VIP networking", "desc": "SAMPLE agenda — confirmed program to be announced.", "sample": true }
      ],
    };
  }

  /* ---------- store ---------- */
  var db;
  try { db = JSON.parse(localStorage.getItem(KEY)) || seed(); }
  catch (e) { db = seed(); }

  function atomicSave() {
    localStorage.setItem(KEY + "_tmp", JSON.stringify(db));
    localStorage.setItem(KEY, localStorage.getItem(KEY + "_tmp"));
    localStorage.removeItem(KEY + "_tmp");
  }
  function save() { try { atomicSave(); } catch (e) { /* storage full etc */ } }

  function audit(action, detail, actor) {
    db.audit.unshift({ id: uid("aud"), at: now(), actor: actor || "system", action: action, detail: detail || "" });
    if (db.audit.length > 500) db.audit.length = 500;
    save();
  }

  /* ---------- session ---------- */
  var SKEY = "profxclub_session";
  function session() { try { return JSON.parse(localStorage.getItem(SKEY)) || null; } catch (e) { return null; } }
  function setSession(s) { if (s) localStorage.setItem(SKEY, JSON.stringify(s)); else localStorage.removeItem(SKEY); }

  function notify(memberId, kind, title, body, link) {
    db.notifications.unshift({ id: uid("ntf"), memberId: memberId, kind: kind, title: title, body: body, at: now(), read: false, link: link || "" });
    save();
  }

  /* ---------- public API ---------- */
  window.PFX = {
    db: db, save: save, audit: audit, uid: uid, now: now, notify: notify,
    session: session, setSession: setSession,
    esc: function (s) { return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) { return ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]; }); },
    fmtDate: function (iso) {
      try {
        return new Date(iso).toLocaleString("en-GB", { weekday: "short", day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", hour12: false });
      } catch (e) { return iso; }
    },
    memberByEmail: function (email) {
      email = String(email).trim().toLowerCase();
      return db.members.find(function (m) { return m.email && m.email.toLowerCase() === email; }) || null;
    },
    memberById: function (id) { return db.members.find(function (m) { return m.id === id; }) || null; },
    currentMember: function () { var s = session(); return s ? (PFX.memberById(s.memberId) || null) : null; },
    regsForEvent: function (eventId, status) {
      return db.registrations.filter(function (r) {
        return r.eventId === eventId && (!status || r.status === status);
      });
    },
    regsForMember: function (memberId) {
      return db.registrations.filter(function (r) { return r.memberId === memberId; })
        .sort(function (a, b) { return b.createdAt.localeCompare(a.createdAt); });
    },
    eventSeatsLeft: function (eventId) {
      var ev = db.events.find(function (e) { return e.id === eventId; });
      if (!ev) return 0;
      var taken = db.registrations.filter(function (r) { return r.eventId === eventId && r.status === "confirmed"; }).length;
      return Math.max(0, ev.capacity - taken);
    },
    nextMembershipId: function () {
      var seq = String(db.nextMemberSeq).padStart(6, "0");
      db.nextMemberSeq++; save();
      return "PX-2026-" + seq;
    },
    newReferralCode: function (name) {
      var base = "EDU-" + String(name || "MEMBER").trim().toUpperCase().replace(/[^A-Z]/g, "").slice(0, 8);
      if (!base || base === "EDU-") base = "EDU-MEMBER";
      var code = base, n = 2;
      while (db.referralCodes.some(function (c) { return c.code === code; })) { code = base + n; n++; }
      return code;
    },
    /* booking with capacity enforcement, re-checked at commit */
    bookEvent: function (memberId, eventId) {
      var ev = db.events.find(function (e) { return e.id === eventId; });
      if (!ev || ev.status !== "published") return { ok: false, error: "This event is not open for booking." };
      var existing = db.registrations.find(function (r) { return r.eventId === eventId && r.memberId === memberId && (r.status === "confirmed" || r.status === "waitlisted"); });
      if (existing) return { ok: false, error: "You already have a place on this event.", reg: existing };
      var seats = PFX.eventSeatsLeft(eventId);
      var status = seats > 0 ? "confirmed" : "waitlisted";
      var reg = { id: uid("reg"), eventId: eventId, memberId: memberId, status: status, attendance: null, createdAt: now(), history: [{ at: now(), action: status, by: "member" }] };
      db.registrations.push(reg); save();
      audit("event.book", ev.title + " → " + status + " (" + memberId + ")", memberId);
      notify(memberId, "booking", status === "confirmed" ? "Booking confirmed" : "Added to waitlist",
        (status === "confirmed" ? "Your place at " : "You're on the waitlist for ") + ev.title + ".", "events.html");
      return { ok: true, reg: reg };
    },
    cancelBooking: function (regId, memberId) {
      var reg = db.registrations.find(function (r) { return r.id === regId; });
      if (!reg) return { ok: false };
      if (reg.memberId !== memberId && memberId !== "admin") return { ok: false };
      if (reg.status === "cancelled") return { ok: false };
      var wasConfirmed = reg.status === "confirmed";
      reg.status = "cancelled";
      reg.history.push({ at: now(), action: "cancelled", by: memberId });
      var promoted = null;
      if (wasConfirmed) {
        var first = db.registrations
          .filter(function (r) { return r.eventId === reg.eventId && r.status === "waitlisted"; })
          .sort(function (a, b) { return a.createdAt.localeCompare(b.createdAt); })[0];
        if (first) {
          first.status = "confirmed"; first.history.push({ at: now(), action: "promoted-from-waitlist", by: "system" }); promoted = first;
          notify(first.memberId, "booking", "Promoted from waitlist", "A place opened up — you're now confirmed.", "events.html");
        }
      }
      save();
      audit("event.cancel", regId + (promoted ? " → promoted " + promoted.memberId : ""), memberId);
      return { ok: true, promoted: promoted };
    },
    /* admin: mark attendance, promote waitlist, edit capacity */
    markAttendance: function (regId, value) {
      var r = db.registrations.find(function (x) { return x.id === regId; });
      if (!r || (value !== "present" && value !== "no-show" && value !== null)) return { ok: false };
      r.attendance = value;
      r.history.push({ at: now(), action: "attendance:" + (value || "cleared"), by: "admin" });
      save(); audit("event.attendance", regId + " → " + (value || "cleared"), "admin");
      return { ok: true };
    },
    promoteWaitlist: function (eventId) {
      var ev = db.events.find(function (e) { return e.id === eventId; });
      if (!ev) return { ok: false };
      var first = db.registrations
        .filter(function (r) { return r.eventId === eventId && r.status === "waitlisted"; })
        .sort(function (a, b) { return a.createdAt.localeCompare(b.createdAt); })[0];
      if (!first) return { ok: false, error: "No one is on the waitlist." };
      if (PFX.eventSeatsLeft(eventId) <= 0) return { ok: false, error: "Event is full — increase capacity first." };
      first.status = "confirmed";
      first.history.push({ at: now(), action: "promoted-from-waitlist", by: "admin" });
      save(); audit("event.promote", eventId + " → " + first.memberId, "admin");
      notify(first.memberId, "booking", "Promoted from waitlist", "You're now confirmed for " + ev.title + ".", "events.html");
      return { ok: true, reg: first };
    },
    setCapacity: function (eventId, cap) {
      var ev = db.events.find(function (e) { return e.id === eventId; });
      if (!ev) return { ok: false, error: "Event not found." };
      cap = parseInt(cap, 10);
      if (!(cap > 0)) return { ok: false, error: "Capacity must be at least 1." };
      var confirmed = db.registrations.filter(function (r) { return r.eventId === eventId && r.status === "confirmed"; }).length;
      if (cap < confirmed) return { ok: false, error: "Capacity can't be below the " + confirmed + " confirmed booking(s)." };
      var from = ev.capacity; ev.capacity = cap; save();
      audit("event.capacity", ev.title + " " + from + " → " + cap, "admin");
      return { ok: true };
    },
    /* learning progress */
    lessonDone: function (memberId, lessonId) {
      if (!db.progress.some(function (p) { return p.memberId === memberId && p.lessonId === lessonId; })) {
        db.progress.push({ memberId: memberId, lessonId: lessonId, at: now() }); save();
        audit("learning.complete", lessonId, memberId);
      }
    },
    lessonUndone: function (memberId, lessonId) {
      db.progress = db.progress.filter(function (p) { return !(p.memberId === memberId && p.lessonId === lessonId); }); save();
    },
    lessonProgress: function (memberId) {
      var done = db.progress.filter(function (p) { return p.memberId === memberId; }).length;
      return { done: done, total: db.lessons.length };
    },
    /* attendance badges — recognition of attendance, NOT accreditation */
    myBadges: function (memberId) {
      var present = db.registrations.filter(function (r) { return r.memberId === memberId && r.attendance === "present"; }).length;
      var lessons = db.progress.filter(function (p) { return p.memberId === memberId; }).length;
      var badges = [];
      if (present >= 1) badges.push({ id: "first-class", label: "First Class", detail: "Attended your first club session." });
      if (present >= 3) badges.push({ id: "regular", label: "Regular", detail: "Attended 3 club sessions." });
      if (lessons >= 4) badges.push({ id: "path-complete", label: "Path Complete", detail: "Finished all 4 beginner-path lessons." });
      else if (lessons >= 1) badges.push({ id: "learner", label: "Learner", detail: "Completed your first lesson." });
      return badges;
    },
    /* notifications */
    unreadCount: function (memberId) {
      return db.notifications.filter(function (n) { return n.memberId === memberId && !n.read; }).length;
    },
    markRead: function (notifId, memberId) {
      var n = db.notifications.find(function (x) { return x.id === notifId && x.memberId === memberId; });
      if (n) { n.read = true; save(); }
    },
    markAllRead: function (memberId) {
      db.notifications.forEach(function (n) { if (n.memberId === memberId) n.read = true; }); save();
    },
    /* referrals */
    referralUses: function (code) {
      return db.members.filter(function (m) { return m.referredBy === code; }).length;
    },
    /* global admin search */
    adminSearch: function (q) {
      q = String(q || "").trim().toLowerCase();
      if (!q) return { members: [], events: [], assistance: [] };
      return {
        members: db.members.filter(function (m) { return (m.name + " " + m.email + " " + m.membershipId).toLowerCase().indexOf(q) > -1; }).slice(0, 8),
        events: db.events.filter(function (e) { return e.title.toLowerCase().indexOf(q) > -1; }).slice(0, 8),
        assistance: db.assistance.filter(function (a) { return (a.category + " " + a.provider + " " + a.id).toLowerCase().indexOf(q) > -1; }).slice(0, 8)
      };
    },
    /* ---------- ProFX Media products: passes, league, discounts, awards ---------- */
    money: function (n, cur) {
      return (cur || "USD") + " " + (Math.round(n * 100) / 100).toFixed(2).replace(/\.00$/, "");
    },
    /* discount codes — kind is "pass" or "league" */
    validateDiscount: function (code, kind) {
      code = String(code || "").trim().toUpperCase();
      if (!code) return { ok: false, error: "Enter a discount code." };
      var c = db.discountCodes.find(function (d) { return d.code === code; });
      if (!c) return { ok: false, error: "Code not recognized." };
      if (!c.active) return { ok: false, error: "This code is no longer active." };
      if (c.appliesTo.indexOf(kind) < 0) return { ok: false, error: "This code doesn't apply here." };
      if (c.used >= c.maxUses) return { ok: false, error: "This code has reached its usage limit." };
      return { ok: true, pct: c.pct, code: c.code };
    },
    priceAfterDiscount: function (price, pct) {
      return Math.round(price * (1 - pct / 100) * 100) / 100;
    },
    orderPass: function (memberId, passId, code) {
      var me = memberId ? PFX.memberById(memberId) : null;
      if (!me) return { ok: false, error: "Sign in to get a pass." };
      var pass = db.passes.find(function (p) { return p.id === passId; });
      if (!pass) return { ok: false, error: "Pass not found." };
      var pct = 0, usedCode = "";
      if (code) {
        var v = PFX.validateDiscount(code, "pass");
        if (!v.ok) return v;
        pct = v.pct; usedCode = v.code;
      }
      var total = PFX.priceAfterDiscount(pass.price, pct);
      var order = {
        id: uid("ord"), ref: "PFX-" + Date.now().toString(36).toUpperCase(),
        memberId: me.id, passId: pass.id, passName: pass.name,
        price: pass.price, discountPct: pct, code: usedCode, total: total,
        currency: pass.currency, status: "confirmed", createdAt: now(), demo: true
      };
      db.passOrders.push(order);
      if (usedCode) { var c = db.discountCodes.find(function (d) { return d.code === usedCode; }); if (c) c.used++; }
      save();
      audit("pass.order", pass.name + " → " + PFX.money(total, pass.currency) + (usedCode ? " (" + usedCode + ")" : "") + " [" + me.id + "]", me.id);
      notify(me.id, "booking", "Pass confirmed", "Your " + pass.name + " is confirmed. Reference " + order.ref + ". (DEMO — no payment taken.)", "app/passes.html");
      return { ok: true, order: order };
    },
    enterLeague: function (memberId, divisionId, code) {
      var me = memberId ? PFX.memberById(memberId) : null;
      if (!me) return { ok: false, error: "Sign in to enter the league." };
      var div = db.leagueDivisions.find(function (d) { return d.id === divisionId; });
      if (!div) return { ok: false, error: "Division not found." };
      var existing = db.leagueEntries.find(function (e) { return e.memberId === me.id && e.divisionId === divisionId && e.status !== "withdrawn"; });
      if (existing) return { ok: false, error: "You're already entered in this division.", entry: existing };
      var pct = 0, usedCode = "";
      if (code) {
        var v = PFX.validateDiscount(code, "league");
        if (!v.ok) return v;
        pct = v.pct; usedCode = v.code;
      }
      var total = PFX.priceAfterDiscount(div.entryFee, pct);
      var entry = {
        id: uid("lge"), ref: "LG-" + Date.now().toString(36).toUpperCase(),
        memberId: me.id, trader: me.name, country: me.country || "",
        divisionId: div.id, pnlPct: 0, trades: 0, winRate: 0,
        entryFee: div.entryFee, discountPct: pct, code: usedCode, total: total,
        currency: div.currency, status: "entered", createdAt: now(), demo: true
      };
      db.leagueEntries.push(entry);
      if (usedCode) { var c = db.discountCodes.find(function (d) { return d.code === usedCode; }); if (c) c.used++; }
      save();
      audit("league.enter", div.name + " → " + PFX.money(total, div.currency) + (usedCode ? " (" + usedCode + ")" : "") + " [" + me.id + "]", me.id);
      notify(me.id, "booking", "League entry confirmed", "You're in the " + div.name + ". Reference " + entry.ref + ". (DEMO — no payment taken.)", "app/league.html");
      return { ok: true, entry: entry };
    },
    myPasses: function (memberId) {
      return db.passOrders.filter(function (o) { return o.memberId === memberId; })
        .sort(function (a, b) { return b.createdAt.localeCompare(a.createdAt); });
    },
    myLeagueEntries: function (memberId) {
      return db.leagueEntries.filter(function (e) { return e.memberId === memberId; })
        .sort(function (a, b) { return b.createdAt.localeCompare(a.createdAt); });
    },
    leagueLeaderboard: function (divisionId) {
      return db.leagueEntries
        .filter(function (e) { return e.divisionId === divisionId && e.status !== "withdrawn"; })
        .sort(function (a, b) { return b.pnlPct - a.pnlPct; });
    },
    divisionById: function (id) { return db.leagueDivisions.find(function (d) { return d.id === id; }) || null; },
    passById: function (id) { return db.passes.find(function (p) { return p.id === id; }) || null; },
    nominateAward: function (data) {
      data = data || {};
      var nominee = String(data.nominee || "").trim(), categoryId = String(data.categoryId || "").trim();
      if (!nominee || !categoryId) return { ok: false, error: "Nominee and category are required." };
      if (!db.awardCategories.some(function (c) { return c.id === categoryId; })) return { ok: false, error: "Category not found." };
      var n = {
        id: uid("nom"), nominee: nominee, categoryId: categoryId,
        reason: String(data.reason || "").trim(), nominator: String(data.nominator || "").trim(),
        email: String(data.email || "").trim(), status: "received", createdAt: now(), demo: true
      };
      db.awardNominations.push(n); save();
      audit("awards.nominate", nominee + " → " + categoryId, data.memberId || "guest");
      return { ok: true, nomination: n };
    },
    /* admin: discount code management */
    adminAddDiscount: function (d) {
      var code = String(d.code || "").trim().toUpperCase().replace(/[^A-Z0-9-]/g, "");
      var pct = parseInt(d.pct, 10);
      if (!code) return { ok: false, error: "Code is required." };
      if (!(pct > 0 && pct <= 100)) return { ok: false, error: "Discount must be 1–100%." };
      if (db.discountCodes.some(function (x) { return x.code === code; })) return { ok: false, error: "Code already exists." };
      var appliesTo = (d.appliesTo === "pass" || d.appliesTo === "league") ? [d.appliesTo] : ["pass", "league"];
      var maxUses = parseInt(d.maxUses, 10); if (!(maxUses > 0)) maxUses = 100;
      db.discountCodes.push({ code: code, pct: pct, appliesTo: appliesTo, maxUses: maxUses, used: 0, active: true, note: "Added by admin" });
      save(); audit("discount.add", code + " " + pct + "%", "admin");
      return { ok: true };
    },
    adminToggleDiscount: function (code) {
      var c = db.discountCodes.find(function (d) { return d.code === code; });
      if (!c) return { ok: false };
      c.active = !c.active; save();
      audit("discount.toggle", code + " → " + (c.active ? "active" : "inactive"), "admin");
      return { ok: true, active: c.active };
    },
    adminDeleteDiscount: function (code) {
      var i = db.discountCodes.findIndex(function (d) { return d.code === code; });
      if (i < 0) return { ok: false };
      db.discountCodes.splice(i, 1); save();
      audit("discount.delete", code, "admin");
      return { ok: true };
    },
    logConsent: function (member, type, value, note) {
      member.consentHistory = member.consentHistory || [];
      member.consentHistory.push({ at: now(), type: type, value: !!value, note: note || "" });
      member.consent[type] = !!value;
      save();
    }
  };
})();
