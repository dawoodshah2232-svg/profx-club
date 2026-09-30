/* ProFX Club — admin shell: PIN guard + sidebar */
(function () {
  "use strict";
  try {
    if (!JSON.parse(sessionStorage.getItem("profx_admin"))) { location.href = "login.html"; return; }
  } catch (e) { location.href = "login.html"; return; }
  var page = document.body.dataset.page || "";
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
    ["Audit log", "audit.html", "audit", "file"]
  ];
  var side = document.getElementById("adminSide");
  side.innerHTML =
    '<div class="member-chip"><b>Admin CRM</b><span>DEMO · PIN session</span></div>' +
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
  /* helper: staff-only sensitive access log wrapper */
  window.ADM = {
    viewSensitive: function (kind, id) { PFX.audit("admin.sensitive_view", kind + " " + id, "admin"); }
  };
})();
