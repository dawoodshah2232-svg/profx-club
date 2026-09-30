/* ProFX Club — admin shell: PIN guard + sidebar + global search */
(function () {
  "use strict";
  try {
    if (!JSON.parse(sessionStorage.getItem("profx_admin"))) { location.href = "login.html"; return; }
  } catch (e) { location.href = "login.html"; return; }
  var page = document.body.dataset.page || "";
  /* small style for the JS-generated search box (keeps css/style.css untouched) */
  var _css = document.createElement("style");
  _css.textContent = ".adm-search{position:relative;padding:0 .9rem .8rem}.adm-search input{width:100%;font-size:.85rem}" +
    ".adm-searchres{position:absolute;top:100%;left:.6rem;right:.6rem;background:#fff;border:1px solid var(--line,#e5e7eb);border-radius:.6rem;box-shadow:0 12px 28px rgba(0,20,40,.14);z-index:60;max-height:320px;overflow:auto}" +
    ".sr-group{padding:.5rem .8rem .2rem;font-size:.68rem;font-weight:700;letter-spacing:.06em;text-transform:uppercase;color:#64748b}" +
    ".sr-item{display:block;padding:.5rem .8rem;font-size:.85rem;color:#0f172a;text-decoration:none;border-top:1px solid #f1f5f9}" +
    ".sr-item .meta{display:block;font-size:.72rem;color:#64748b}" +
    ".sr-item:hover{background:#f8fafc}" +
    ".flash{animation:flashhl 2.4s ease-out 1}@keyframes flashhl{0%,40%{box-shadow:0 0 0 3px rgba(40,192,112,.55)}100%{box-shadow:none}}";
  document.head.appendChild(_css);
  /* inline SVG icon set (feather-style, .ni class in css) */
  var ICON = {
    dash: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><rect x='3' y='3' width='7' height='9' rx='1'/><rect x='14' y='3' width='7' height='5' rx='1'/><rect x='14' y='12' width='7' height='9' rx='1'/><rect x='3' y='16' width='7' height='5' rx='1'/></svg>",
    users: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2'/><circle cx='9' cy='7' r='4'/><path d='M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75'/></svg>",
    learn: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M22 10 12 5 2 10l10 5 10-5z'/><path d='M6 12v5c3 3 9 3 12 0v-5'/></svg>",
    events: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><rect x='3' y='4' width='18' height='18' rx='2'/><path d='M16 2v4M8 2v4M3 10h18'/></svg>",
    community: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'/></svg>",
    help: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10'/><path d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/><path d='M12 17h.01'/></svg>",
    mega: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='m3 11 18-8-8 18-2.5-7.5L3 11z'/></svg>",
    trend: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M23 6l-9.5 9.5-5-5L1 18'/><path d='M17 6h6v6'/></svg>",
    edit: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7'/><path d='M18.5 2.5a2.12 2.12 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z'/></svg>",
    file: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/><path d='M14 2v6h6M16 13H8M16 17H8M10 9H8'/></svg>",
    cog: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><circle cx='12' cy='12' r='3'/><path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51h.09a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z'/></svg>",
    search: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><circle cx='11' cy='11' r='8'/><path d='m21 21-4.35-4.35'/></svg>",
    globe: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/></svg>",
    power: "<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M18.36 6.64a9 9 0 1 1-12.73 0'/><path d='M12 2v10'/></svg>"
  };
  var MODS = [
    ["Dashboard", "index.html", "dashboard", "dash"],
    ["Members", "members.html", "members", "users"],
    ["Education", "education.html", "education", "learn"],
    ["Events", "events.html", "events", "events"],
    ["Community", "community.html", "community", "community"],
    ["Assistance", "assistance.html", "assistance", "help"],
    ["Campaigns", "campaigns.html", "campaigns", "mega"],
    ["Reports", "reports.html", "reports", "trend"],
    ["Content", "content.html", "content", "edit"],
    ["Settings", "settings.html", "settings", "cog"],
    ["Audit log", "audit.html", "audit", "file"]
  ];
  var side = document.getElementById("adminSide");
  side.innerHTML =
    '<div class="member-chip"><b>Admin CRM</b><span>DEMO · PIN session</span></div>' +
    '<div class="adm-search"><input type="search" id="admSearch" placeholder="Search members, events, cases…" aria-label="Global admin search"><div class="adm-searchres" id="admSearchRes" style="display:none"></div></div>' +
    MODS.map(function (m) {
      return '<a class="slink' + (m[2] === page ? " active" : "") + '" href="' + m[1] + '">' + ICON[m[3]] + " " + m[0] + "</a>";
    }).join("") +
    '<div class="side-group">Site</div>' +
    '<a class="slink" href="../index.html">' + ICON.globe + ' Public site</a>' +
    '<a class="slink" href="#" id="adminOut">' + ICON.power + ' Sign out</a>';
  document.getElementById("adminOut").addEventListener("click", function (e) {
    e.preventDefault();
    sessionStorage.removeItem("profx_admin");
    location.href = "login.html";
  });
  /* global admin search — dropdown linking to deep records (highlighted via ?id=) */
  var searchInput = document.getElementById("admSearch"),
      searchRes = document.getElementById("admSearchRes");
  function renderSearch() {
    var q = searchInput.value.trim();
    var r = PFX.adminSearch(q);
    var n = r.members.length + r.events.length + r.assistance.length;
    if (!n) { searchRes.style.display = "none"; searchRes.innerHTML = ""; return; }
    var h = "";
    if (r.members.length) h += '<div class="sr-group">Members</div>' + r.members.map(function (m) {
      return '<a class="sr-item" href="members.html?id=' + m.id + '">' + PFX.esc(m.name) + '<span class="meta">' + PFX.esc(m.email) + "</span></a>";
    }).join("");
    if (r.events.length) h += '<div class="sr-group">Events</div>' + r.events.map(function (e) {
      return '<a class="sr-item" href="events.html?id=' + e.id + '">' + PFX.esc(e.title) + '<span class="meta">' + PFX.fmtDate(e.startsAt) + "</span></a>";
    }).join("");
    if (r.assistance.length) h += '<div class="sr-group">Assistance</div>' + r.assistance.map(function (a) {
      var m = PFX.memberById(a.memberId);
      return '<a class="sr-item" href="assistance.html?id=' + a.id + '">' + PFX.esc(a.category) + '<span class="meta">' + PFX.esc(m ? m.name : a.memberId) + " · " + PFX.esc(a.status) + "</span></a>";
    }).join("");
    searchRes.innerHTML = h; searchRes.style.display = "block";
  }
  searchInput.addEventListener("input", renderSearch);
  document.addEventListener("click", function (e) {
    if (!e.target.closest(".adm-search")) { searchRes.style.display = "none"; }
  });
  /* helper: staff-only sensitive access log wrapper */
  window.ADM = {
    viewSensitive: function (kind, id) { PFX.audit("admin.sensitive_view", kind + " " + id, "admin"); }
  };
})();
