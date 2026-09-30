/* ProFX Club — demo data layer (localStorage). Replaces Phase 2 PHP+MySQL API.
   All seeded content is SAMPLE/DEMO data, labelled as such everywhere. */
(function () {
  "use strict";
  var KEY = "profxclub_db_v1";
  function uid(p) { return (p || "id") + "_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 9); }
  function now() { return new Date().toISOString(); }

  /* ---------- seed ---------- */
  function seed() {
    return {
      settings: {
        brand: { name: "ProFX Club", tagline: "Free forex trader community", logo: "" /* owner input pending */ },
        org: { name: "ProFX Media FZ-LLC", entityNote: "Responsible operating entity details to be confirmed by the owner.", supportEmail: "" },
        community: {
          telegramAnnouncements: { url: "", language: "EN", region: "Global", capacityStatus: "open", active: false },
          telegramDiscussion: { url: "", language: "EN", region: "Global", capacityStatus: "not_staffed", active: false },
          whatsapp: { url: "", language: "EN", region: "Dubai/UAE", capacityStatus: "not_staffed", active: false }
        },
        home: {
          heroH1: "Join the free forex trader community.",
          heroLead: "Free beginner classes, live webinars, trader networking and assistance — no deposit, no broker account, no payment required.",
          benefitsTitle: "What you get as a member"
        },
        policyVersions: { membership: "v0.1-demo", privacy: "v0.1-demo", communityRules: "v0.1-demo", riskNotice: "v0.1-demo" }
      },
      /* Events — SAMPLE data. Owner must confirm real sessions before publication. */
      events: [
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
      registrations: [],   /* event registrations */
      educators: [
        { id: "edu_sample_01", name: "Sample Educator", sample: true,
          bio: "SAMPLE profile — the owner will supply real educator biographies.", credentials: "TBC", langs: ["English"], photo: "" }
      ],
      resources: [
        { id: "res_sample_01", title: "Beginner Trading Glossary", kind: "PDF", sample: true,
          summary: "SAMPLE resource — key forex terms explained in plain language.", access: "members" },
        { id: "res_sample_02", title: "Risk-Planning Worksheet", kind: "Worksheet", sample: true,
          summary: "SAMPLE resource — plan position size and risk before any trade.", access: "members" },
        { id: "res_sample_03", title: "Trading Journal Template", kind: "Template", sample: true,
          summary: "SAMPLE resource — track trades, decisions and lessons learned.", access: "members" }
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
      members: [
        { id: "mem_sample_01", membershipId: "PX-2026-000001", name: "Aisha Rahman", email: "aisha@example.com", sample: true,
          status: "active", verified: true, createdAt: "2026-09-28T10:00:00+04:00", source: "seed", referralCode: "",
          city: "Dubai", country: "UAE", experience: "Beginner", language: "English", interests: ["Beginner classes"],
          consent: { terms: true, privacy: true, promoEmail: true, promoWhatsapp: false }, consentHistory: [],
          tags: ["beginner"] },
        { id: "mem_sample_02", membershipId: "PX-2026-000002", name: "Omar Farouk", email: "omar@example.com", sample: true,
          status: "pending", verified: false, createdAt: "2026-09-29T14:30:00+04:00", source: "seed", referralCode: "",
          city: "Sharjah", country: "UAE", experience: "Intermediate", language: "English", interests: [],
          consent: { terms: true, privacy: true, promoEmail: false, promoWhatsapp: false }, consentHistory: [],
          tags: [] }
      ],
      assistance: [
        { id: "asr_sample_01", sample: true, memberId: "mem_sample_01", createdAt: "2026-09-28T12:00:00+04:00",
          category: "Broker dispute", country: "UAE", provider: "Sample Broker Ltd", facts: "SAMPLE request for demo purposes.",
          dates: "Aug 2026", requestedHelp: "Information on complaint preparation", contactPref: "Email",
          status: "reviewing", privateNotes: [{ at: "2026-09-28T13:00:00+04:00", by: "staff", text: "SAMPLE note." }],
          messages: [], referralConsent: null, history: [{ at: "2026-09-28T12:00:00+04:00", by: "member", action: "created" }] }
      ],
      campaigns: [
        { id: "cam_sample_01", name: "Welcome digest — sample", sample: true, audience: "promoEmail opt-in",
          subject: "Your first free class at ProFX Club", status: "draft", createdAt: "2026-09-29T09:00:00+04:00", results: null }
      ],
      referralCodes: [
        { code: "EDU-AISHA", memberId: "mem_sample_01", createdAt: "2026-09-28T10:00:00+04:00", note: "SAMPLE" }
      ],
      audit: [],
      nextMemberSeq: 3,
      travelInterest: []
    };
  }

  /* ---------- store ---------- */
  var db;
  try { db = JSON.parse(localStorage.getItem(KEY)) || seed(); }
  catch (e) { db = seed(); }

  function atomicSave() {
    /* atomic JSON writes: temp file equivalent in browser = single setItem is atomic */
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

  /* ---------- public API ---------- */
  window.PFX = {
    db: db, save: save, audit: audit, uid: uid, now: now,
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
    /* booking with capacity enforcement, re-checked at commit */
    bookEvent: function (memberId, eventId) {
      var ev = db.events.find(function (e) { return e.id === eventId; });
      if (!ev || ev.status !== "published") return { ok: false, error: "This event is not open for booking." };
      var existing = db.registrations.find(function (r) { return r.eventId === eventId && r.memberId === memberId && (r.status === "confirmed" || r.status === "waitlisted"); });
      if (existing) return { ok: false, error: "You already have a place on this event.", reg: existing };
      var seats = PFX.eventSeatsLeft(eventId);
      var status = seats > 0 ? "confirmed" : "waitlisted";
      var reg = { id: uid("reg"), eventId: eventId, memberId: memberId, status: status, createdAt: now(), history: [{ at: now(), action: status, by: "member" }] };
      db.registrations.push(reg); save();
      audit("event.book", ev.title + " → " + status + " (" + memberId + ")", memberId);
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
        /* cancellation releases a place → promote first waitlisted member */
        var first = db.registrations
          .filter(function (r) { return r.eventId === reg.eventId && r.status === "waitlisted"; })
          .sort(function (a, b) { return a.createdAt.localeCompare(b.createdAt); })[0];
        if (first) { first.status = "confirmed"; first.history.push({ at: now(), action: "promoted-from-waitlist", by: "system" }); promoted = first; }
      }
      save();
      audit("event.cancel", regId + (promoted ? " → promoted " + promoted.memberId : ""), memberId);
      return { ok: true, promoted: promoted };
    },
    logConsent: function (member, type, value, note) {
      member.consentHistory = member.consentHistory || [];
      member.consentHistory.push({ at: now(), type: type, value: !!value, note: note || "" });
      member.consent[type] = !!value;
      save();
    }
  };
})();
