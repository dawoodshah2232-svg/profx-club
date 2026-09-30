/* ProFX Club — member app shell: auth guard, sidebar, sign-out */
(function () {
  "use strict";
  var me = PFX.currentMember();
  if (!me) { location.href = "../signin.html"; return; }
  if (me.status !== "active" || !me.verified) { PFX.setSession(null); location.href = "../signin.html"; return; }

  var page = document.body.dataset.page || "";
  var ICON = {"home":"<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'/><path d='M9 22V12h6v10'/></svg>","learn":"<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M22 10 12 5 2 10l10 5 10-5z'/><path d='M6 12v5c3 3 9 3 12 0v-5'/></svg>","events":"<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><rect x='3' y='4' width='18' height='18' rx='2'/><path d='M16 2v4M8 2v4M3 10h18'/></svg>","community":"<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z'/></svg>","help":"<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10'/><circle cx='12' cy='12' r='4'/><path d='M4.93 4.93l4.24 4.24M14.83 14.83l4.24 4.24M14.83 9.17l4.24-4.24M4.93 19.07l4.24-4.24'/></svg>","user":"<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2'/><circle cx='12' cy='7' r='4'/></svg>","globe":"<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><circle cx='12' cy='12' r='10'/><path d='M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'/></svg>","power":"<svg class='ni' aria-hidden='true' viewBox='0 0 24 24'><path d='M18.36 6.64a9 9 0 1 1-12.73 0'/><path d='M12 2v10'/></svg>"};
  var LINKS = [
    ["Overview", "index.html", "overview", "home"],
    ["My Learning", "learning.html", "learning", "learn"],
    ["My Events", "events.html", "events", "events"],
    ["Community", "community.html", "community", "community"],
    ["Assistance", "assistance.html", "assistance", "help"],
    ["Profile", "profile.html", "profile", "user"]
  ];
  var side = document.getElementById("appSide");
  side.innerHTML =
    '<div class="member-chip"><b>' + PFX.esc(me.name) + '</b><span>' + PFX.esc(me.membershipId) + ' · Active member</span></div>' +
    LINKS.map(function (l) {
      return '<a class="slink' + (l[2] === page ? " active" : "") + '" href="' + l[1] + '">' + ICON[l[3]] + " " + l[0] + "</a>";
    }).join("") +
    '<a class="slink" href="../index.html">' + ICON.globe + ' Public site</a>' +
    '<a class="slink" href="#" id="signOut">' + ICON.power + ' Sign out</a>';
  document.getElementById("signOut").addEventListener("click", function (e) {
    e.preventDefault();
    PFX.setSession(null);
    location.href = "../index.html";
  });
  window.PFX_ME = me;
})();
