/* ProFX Club — admin shell: PIN guard + sidebar */
(function () {
  "use strict";
  try {
    if (!JSON.parse(sessionStorage.getItem("profx_admin"))) { location.href = "login.html"; return; }
  } catch (e) { location.href = "login.html"; return; }
  var page = document.body.dataset.page || "";
  var MODS = [
    ["Dashboard", "index.html", "dashboard", "📊"],
    ["Members", "members.html", "members", "👥"],
    ["Education", "education.html", "education", "🎓"],
    ["Events", "events.html", "events", "📅"],
    ["Community", "community.html", "community", "💬"],
    ["Assistance", "assistance.html", "assistance", "🛟"],
    ["Campaigns", "campaigns.html", "campaigns", "📣"],
    ["Reports", "reports.html", "reports", "📈"],
    ["Content", "content.html", "content", "✏️"],
    ["Audit log", "audit.html", "audit", "🧾"]
  ];
  var side = document.getElementById("adminSide");
  side.innerHTML =
    '<div class="member-chip"><b>Admin CRM</b><span>DEMO · PIN session</span></div>' +
    MODS.map(function (m) {
      return '<a class="slink' + (m[2] === page ? " active" : "") + '" href="' + m[1] + '">' + m[3] + " " + m[0] + "</a>";
    }).join("") +
    '<div class="side-group">Site</div>' +
    '<a class="slink" href="../index.html">🌐 Public site</a>' +
    '<a class="slink" href="#" id="adminOut">⏻ Sign out</a>';
  document.getElementById("adminOut").addEventListener("click", function (e) {
    e.preventDefault();
    sessionStorage.removeItem("profx_admin");
    location.href = "login.html";
  });
  /* helper: staff-only sensitive access log wrapper */
  window.ADM = {
    viewSensitive: function (kind, id) { PFX.audit("admin.sensitive_view", kind + " " + id, "admin"); }
  };
})();
