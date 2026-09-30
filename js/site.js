/* ProFX Club — public site chrome: nav, footer, join bar, accordions, reveal */
(function () {
  "use strict";
  var page = document.body.dataset.page || "";
  var NAV = [
    ["Home", "index.html", "home"],
    ["Learn", "learn.html", "learn"],
    ["Events", "events.html", "events"],
    ["Community", "community.html", "community"],
    ["Assistance", "assistance.html", "assistance"],
    ["Travel", "travel.html", "travel"],
    ["About", "about.html", "about"]
  ];
  function link(href, label, key) {
    return '<a href="' + href + '" data-nav="' + key + '"' + (key === page ? ' class="active"' : '') + ">" + label + "</a>";
  }
  var navLinks = NAV.map(function (n) { return link(n[1], n[0], n[2]); }).join("");
  var drawerLinks = navLinks + link("join.html", "Join Free", "join") + link("signin.html", "Sign in", "signin");

  document.getElementById("chrome-nav").innerHTML =
    '<div class="container nav-inner">' +
    '<a class="logo" href="index.html" aria-label="ProFX Club home"><img class="logo-img" src="assets/logo-shield.png" alt="ProFX Club"></a>' +
    '<nav class="nav-links" aria-label="Primary">' + navLinks + "</nav>" +
    '<div class="nav-cta"><a class="btn btn-ghost btn-sm" href="signin.html">Sign in</a>' +
    '<a class="btn btn-primary btn-sm" href="join.html">Join Free</a></div>' +
    '<button class="burger" id="burger" aria-label="Menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
    "</div>";

  document.getElementById("chrome-drawer").innerHTML = drawerLinks;

  document.getElementById("chrome-footer").innerHTML =
    '<div class="container"><div class="foot-grid">' +
    '<div><a class="logo" href="index.html" style="margin-bottom:.2rem" aria-label="ProFX Club home"><img class="logo-foot" src="assets/logo-white.png" alt="ProFX Club"></a>' +
    '<div class="tagline">Educate, Entertain &amp; Evolve</div>' +
    '<p style="font-size:.9rem;max-width:34ch">Free forex trader membership: classes, webinars, community and assistance. No deposit, no broker account required.</p></div>' +
    '<div><h4>Explore</h4><a href="learn.html">Learn</a><a href="events.html">Events</a><a href="community.html">Community</a><a href="travel.html">Travel</a></div>' +
    '<div><h4>Support</h4><a href="assistance.html">Trader assistance</a><a href="about.html">About &amp; contact</a><a href="join.html">Join free</a><a href="signin.html">Sign in</a></div>' +
    '<div><h4>Policies</h4><a href="terms.html">Membership terms</a><a href="privacy.html">Privacy notice</a><a href="community-rules.html">Community rules</a><a href="risk.html">Education risk notice</a></div>' +
    "</div>" +
    '<div class="foot-bottom"><span>© ' + new Date().getFullYear() + ' ProFX Club · Demo prototype — sample data</span>' +
    "<span>Education only. Not financial advice. No guaranteed returns.</span></div></div>";

  /* join bar on mobile for public pages that want it */
  if (document.body.dataset.joinbar === "1" && !PFX.currentMember()) {
    var bar = document.createElement("div");
    bar.className = "join-bar";
    bar.innerHTML = '<a class="btn btn-primary" href="join.html">Join Free — no payment</a>';
    document.body.appendChild(bar);
    document.body.classList.add("has-joinbar");
  }

  /* burger */
  var burger = document.getElementById("burger"), drawer = document.getElementById("chrome-drawer");
  if (burger && drawer) burger.addEventListener("click", function () {
    var open = drawer.classList.toggle("open");
    burger.classList.toggle("open", open);
    burger.setAttribute("aria-expanded", open);
  });
  if (drawer) drawer.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { drawer.classList.remove("open"); if (burger) burger.classList.remove("open"); });
  });

  /* accordions */
  document.querySelectorAll(".acc-q").forEach(function (q) {
    q.addEventListener("click", function () {
      var acc = q.parentElement, body = acc.querySelector(".acc-a"), open = acc.classList.toggle("open");
      body.style.maxHeight = open ? body.scrollHeight + "px" : 0;
    });
  });

  /* reveal */
  var io = new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.1 });
  document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });

  var yr = document.getElementById("yr"); if (yr) yr.textContent = new Date().getFullYear();
})();
