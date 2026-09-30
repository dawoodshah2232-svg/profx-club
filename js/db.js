/* ProFX Club — demo data layer (localStorage). Replaces Phase 2 PHP+MySQL API.
   All seeded content is SAMPLE/DEMO data, labelled as such everywhere.
   DB v2: notifications, learning progress, announcements, discussion prompts,
   assistance reply threads, integrations/social settings, richer sample data. */
(function () {
  "use strict";
  var KEY = "profxclub_db_v2";
  function uid(p) { return (p || "id") + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 9); }
  function now() { return new Date().toISOString(); }

  /* ---------- seed ---------- */
  function seed() {
    return {
      v: 2,
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
        { id: "evt_sample_00", title: "Welcome Orientation: How ProFX Club Works (Online)", sample: true,
          startsAt: "2026-09-20T18:00:00+04:00", timezone: "Asia/Dubai (GMT+4)", language: "English",
          host: "ProFX Community Team", kind: "Online class", capacity: 150, cost: "Free",
          status: "completed", joinUrl: "", description: "SAMPLE past session: orientation for new members." },
        { id: "evt_sample_01", title: "Beginner Class: Forex Terminology & Market Structure", sample: true,
          startsAt: "2026-10-10T11:00:00+04:00", timezone: "Asia/Dubai (GMT+4)", language: "English",
          host: "ProFX Education Team", kind: "Online class", capacity: 200, cost: "Free",
          status: "published", joinUrl: "", description: "Week 1 of the beginner path: terminology, market structure and platform navigation with hypothetical examples." },
        { id: "evt_sample_02", title: "Expert Webinar: Risk Concepts — Leverage & Margin", sample: true,
          startsAt: "2026-10-24T19:00:00+04:00", timezone: "Asia/Dubai (GMT+4)", language: "English",
          host: "ProFX Education Team", kind: "Online webinar", capacity: 25, cost: "Free",
          status: "published", joinUrl: "", description: "Week 2 of the beginner path: leverage, margin and risk concepts using hypothetical examples." },
        { id: "evt_sample_03", title: "Monthly Networking: Traders Meetup (Online)", sample: true,
          startsAt: "2026-11-07T18:00:00+04:00", timezone: "Asia/Dubai (GMT+4)", language: "English",
          host: "ProFX Community Team", kind: "Online meetup", capacity: 100, cost: "Free",
          status: "published", joinUrl: "", description: "Monthly networking session for members: moderated Q&A and peer discussion." }
      ],
      /* registrations: status confirmed|waitlisted|cancelled|attended|no-show(legacy) — attendance tracked separately */
      registrations: [
        { id: "reg_sample_01", eventId: "evt_sample_00", memberId: "mem_sample_01", status: "confirmed", attendance: "present", createdAt: "2026-09-18T09:00:00+04:00", history: [{ at: "2026-09-18T09:00:00+04:00", action: "confirmed", by: "member" }, { at: "2026-09-20T19:30:00+04:00", action: "attendance:present", by: "admin" }] },
        { id: "reg_sample_02", eventId: "evt_sample_00", memberId: "mem_sample_03", status: "confirmed", attendance: "present", createdAt: "2026-09-18T10:00:00+04:00", history: [{ at: "2026-09-18T10:00:00+04:00", action: "confirmed", by: "member" }, { at: "2026-09-20T19:30:00+04:00", action: "attendance:present", by: "admin" }] },
        { id: "reg_sample_03", eventId: "evt_sample_00", memberId: "mem_sample_04", status: "confirmed", attendance: "no-show", createdAt: "2026-09-19T11:00:00+04:00", history: [{ at: "2026-09-19T11:00:00+04:00", action: "confirmed", by: "member" }, { at: "2026-09-20T19:30:00+04:00", action: "attendance:no-show", by: "admin" }] },
        { id: "reg_sample_04", eventId: "evt_sample_01", memberId: "mem_sample_01", status: "confirmed", attendance: null, createdAt: "2026-09-25T08:00:00+04:00", history: [{ at: "2026-09-25T08:00:00+04:00", action: "confirmed", by: "member" }] },
        { id: "reg_sample_05", eventId: "evt_sample_01", memberId: "mem_sample_03", status: "confirmed", attendance: null, createdAt: "2026-09-26T09:00:00+04:00", history: [{ at: "2026-09-26T09:00:00+04:00", action: "confirmed", by: "member" }] },
        { id: "reg_sample_06", eventId: "evt_sample_02", memberId: "mem_sample_01", status: "waitlisted", attendance: null, createdAt: "2026-09-27T10:00:00+04:00", history: [{ at: "2026-09-27T10:00:00+04:00", action: "waitlisted", by: "member" }] },
        { id: "reg_sample_07", eventId: "evt_sample_01", memberId: "mem_sample_04", status: "waitlisted", attendance: null, createdAt: "2026-09-28T12:00:00+04:00", history: [{ at: "2026-09-28T12:00:00+04:00", action: "waitlisted", by: "member" }] }
      ],
      educators: [
        { id: "edu_sample_01", name: "Sample Educator", sample: true,
          bio: "SAMPLE profile — the owner will supply real educator biographies.", credentials: "TBC", langs: ["English"], photo: "" }
      ],
      resources: [
        { id: "res_sample_01", title: "Beginner Trading Glossary", kind: "PDF", sample: true,
          summary: "SAMPLE resource — key forex terms explained in plain language.", access: "members", file: "" },
        { id: "res_sample_02", title: "Risk-Planning Worksheet", kind: "Worksheet", sample: true,
          summary: "SAMPLE resource — plan position size and risk before any trade.", access: "members", file: "" },
        { id: "res_sample_03", title: "Trading Journal Template", kind: "Template", sample: true,
          summary: "SAMPLE resource — track trades, decisions and lessons learned.", access: "members", file: "" }
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
        { id: "ann_sample_01", title: "Welcome to the new ProFX Club site", sample: true,
          body: "SAMPLE announcement — the owner will publish real club news here.", at: "2026-09-29T10:00:00+04:00", audience: "all" },
        { id: "ann_sample_02", title: "October class schedule is out", sample: true,
          body: "SAMPLE announcement — beginner classes and the expert webinar are open for booking.", at: "2026-09-30T09:00:00+04:00", audience: "members" }
      ],
      discussions: [
        { id: "dis_sample_01", prompt: "What was the hardest forex term to understand when you started?", sample: true,
          detail: "SAMPLE discussion prompt — share your answer at the next meetup.", at: "2026-09-28T10:00:00+04:00" },
        { id: "dis_sample_02", prompt: "One risk-management rule you never break", sample: true,
          detail: "SAMPLE discussion prompt — moderated peer discussion.", at: "2026-09-30T10:00:00+04:00" }
      ],
      members: [
        { id: "mem_sample_01", membershipId: "PX-2026-000001", name: "Aisha Rahman", email: "aisha@example.com", sample: true,
          status: "active", verified: true, createdAt: "2026-09-28T10:00:00+04:00", source: "seed", referralCode: "EDU-AISHA", referredBy: "",
          city: "Dubai", country: "UAE", experience: "Beginner", language: "English", interests: ["Beginner classes"],
          avatar: "", preferences: { language: "English", timezone: "Asia/Dubai" }, directoryOptIn: true,
          consent: { terms: true, privacy: true, promoEmail: true, promoWhatsapp: false }, consentHistory: [],
          tags: ["beginner"] },
        { id: "mem_sample_02", membershipId: "PX-2026-000002", name: "Omar Farouk", email: "omar@example.com", sample: true,
          status: "pending", verified: false, createdAt: "2026-09-29T14:30:00+04:00", source: "seed", referralCode: "", referredBy: "",
          city: "Sharjah", country: "UAE", experience: "Intermediate", language: "English", interests: [],
          avatar: "", preferences: { language: "English", timezone: "Asia/Dubai" }, directoryOptIn: false,
          consent: { terms: true, privacy: true, promoEmail: false, promoWhatsapp: false }, consentHistory: [],
          tags: [] },
        { id: "mem_sample_03", membershipId: "PX-2026-000003", name: "Sara Iqbal", email: "sara@example.com", sample: true,
          status: "active", verified: true, createdAt: "2026-09-29T09:15:00+04:00", source: "referral", referralCode: "EDU-SARA", referredBy: "EDU-AISHA",
          city: "Dubai", country: "UAE", experience: "Beginner", language: "English", interests: ["Beginner classes", "Meetups"],
          avatar: "", preferences: { language: "English", timezone: "Asia/Dubai" }, directoryOptIn: true,
          consent: { terms: true, privacy: true, promoEmail: true, promoWhatsapp: true }, consentHistory: [],
          tags: ["beginner"] },
        { id: "mem_sample_04", membershipId: "PX-2026-000004", name: "David Chen", email: "david@example.com", sample: true,
          status: "active", verified: true, createdAt: "2026-09-29T16:40:00+04:00", source: "direct", referralCode: "EDU-DAVID", referredBy: "",
          city: "Abu Dhabi", country: "UAE", experience: "Advanced", language: "English", interests: ["Webinars"],
          avatar: "", preferences: { language: "English", timezone: "Asia/Dubai" }, directoryOptIn: true,
          consent: { terms: true, privacy: true, promoEmail: false, promoWhatsapp: false }, consentHistory: [],
          tags: [] },
        { id: "mem_sample_05", membershipId: "PX-2026-000005", name: "Layla Haddad", email: "layla@example.com", sample: true,
          status: "suspended", verified: true, createdAt: "2026-09-27T11:20:00+04:00", source: "direct", referralCode: "", referredBy: "",
          city: "Dubai", country: "UAE", experience: "Beginner", language: "Arabic", interests: [],
          avatar: "", preferences: { language: "Arabic", timezone: "Asia/Dubai" }, directoryOptIn: false,
          consent: { terms: true, privacy: true, promoEmail: false, promoWhatsapp: false }, consentHistory: [],
          tags: [] }
      ],
      assistance: [
        { id: "asr_sample_01", sample: true, memberId: "mem_sample_01", createdAt: "2026-09-28T12:00:00+04:00",
          category: "Broker dispute", country: "UAE", provider: "Sample Broker Ltd", facts: "SAMPLE request for demo purposes.",
          dates: "Aug 2026", requestedHelp: "Information on complaint preparation", contactPref: "Email",
          status: "reviewing", privateNotes: [{ at: "2026-09-28T13:00:00+04:00", by: "staff", text: "SAMPLE note." }],
          messages: [],
          replies: [
            { id: "rpl_sample_01", at: "2026-09-28T12:05:00+04:00", author: "member", by: "mem_sample_01", text: "SAMPLE member message: please advise on next steps.", visibleToMember: true },
            { id: "rpl_sample_02", at: "2026-09-29T09:00:00+04:00", author: "staff", by: "admin", text: "SAMPLE staff reply: we are reviewing your case and will update you shortly.", visibleToMember: true }
          ],
          referralConsent: null, history: [{ at: "2026-09-28T12:00:00+04:00", by: "member", action: "created" }] }
      ],
      campaigns: [
        { id: "cam_sample_01", name: "Welcome digest — sample", sample: true, audience: "promoEmail",
          subject: "Your first free class at ProFX Club", body: "SAMPLE campaign body.", status: "draft",
          createdAt: "2026-09-29T09:00:00+04:00", results: null, sendLog: [] }
      ],
      referralCodes: [
        { code: "EDU-AISHA", memberId: "mem_sample_01", createdAt: "2026-09-28T10:00:00+04:00", note: "SAMPLE" },
        { code: "EDU-SARA", memberId: "mem_sample_03", createdAt: "2026-09-29T09:15:00+04:00", note: "SAMPLE" },
        { code: "EDU-DAVID", memberId: "mem_sample_04", createdAt: "2026-09-29T16:40:00+04:00", note: "SAMPLE" }
      ],
      /* learning progress: {memberId, lessonId, at} */
      progress: [
        { memberId: "mem_sample_01", lessonId: "les_01", at: "2026-09-29T18:00:00+04:00" }
      ],
      notifications: [
        { id: "ntf_sample_01", memberId: "mem_sample_01", kind: "booking", title: "Booking confirmed", sample: true,
          body: "SAMPLE — your place at the Welcome Orientation was confirmed.", at: "2026-09-18T09:00:00+04:00", read: true, link: "events.html" },
        { id: "ntf_sample_02", memberId: "mem_sample_01", kind: "reminder", title: "Class reminder", sample: true,
          body: "SAMPLE — the Beginner Class starts on Sat, 10 Oct 2026 at 11:00 (GMT+4).", at: "2026-09-30T08:00:00+04:00", read: false, link: "events.html" },
        { id: "ntf_sample_03", memberId: "mem_sample_01", kind: "assistance", title: "New reply on your assistance request", sample: true,
          body: "SAMPLE — support replied to your broker dispute case.", at: "2026-09-29T09:00:00+04:00", read: false, link: "assistance.html" },
        { id: "ntf_sample_04", memberId: "mem_sample_01", kind: "resource", title: "New learning resource", sample: true,
          body: "SAMPLE — the Risk-Planning Worksheet was added to the library.", at: "2026-09-29T12:00:00+04:00", read: false, link: "learning.html" }
      ],
      audit: [],
      nextMemberSeq: 6,
      travelInterest: []
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
    logConsent: function (member, type, value, note) {
      member.consentHistory = member.consentHistory || [];
      member.consentHistory.push({ at: now(), type: type, value: !!value, note: note || "" });
      member.consent[type] = !!value;
      save();
    }
  };
})();
