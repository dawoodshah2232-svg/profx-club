/* ProFX Club — member app shell: auth guard, sidebar, sign-out */
(function () {
  "use strict";
  var me = PFX.currentMember();
  if (!me) { location.href = "../signin.html"; return; }
  if (me.status !== "active" || !me.verified) { PFX.setSession(null); location.href = "../signin.html"; return; }

  var page = document.body.dataset.page || "";
  var LINKS = [
    ["Overview", "index.html", "overview", "🏠"],
    ["My Learning", "learning.html", "learning", "🎓"],
    ["My Events", "events.html", "events", "📅"],
    ["Community", "community.html", "community", "💬"],
    ["Assistance", "assistance.html", "assistance", "🛟"],
    ["Profile", "profile.html", "profile", "👤"]
  ];
  var side = document.getElementById("appSide");
  side.innerHTML =
    '<div class="member-chip"><b>' + PFX.esc(me.name) + '</b><span>' + PFX.esc(me.membershipId) + ' · Active member</span></div>' +
    LINKS.map(function (l) {
      return '<a class="slink' + (l[2] === page ? " active" : "") + '" href="' + l[1] + '">' + l[3] + " " + l[0] + "</a>";
    }).join("") +
    '<a class="slink" href="../index.html">🌐 Public site</a>' +
    '<a class="slink" href="#" id="signOut">⏻ Sign out</a>';
  document.getElementById("signOut").addEventListener("click", function (e) {
    e.preventDefault();
    PFX.setSession(null);
    location.href = "../index.html";
  });
  window.PFX_ME = me;
})();
