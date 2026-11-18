// Picks light or dark mode from the visitor's own clock: dark after sunset,
// light after sunrise. The browser reports local time (daylight saving
// included), so no location lookup or permission is needed. Loaded before the
// page renders so there is no flash of the wrong theme.
(function () {
  // Approximate [sunrise, sunset] in local clock hours for each month, Jan–Dec,
  // based on the US East Coast (around Richmond, VA).
  var SUN = [
    [7.3, 17.25], [6.9, 17.8], [7.3, 19.25], [6.6, 19.75],
    [6.0, 20.25], [5.8, 20.6], [6.0, 20.5], [6.4, 20.0],
    [6.8, 19.25], [7.3, 18.5], [6.8, 17.0], [7.25, 16.9],
  ];
  var KEY = "theme-override";

  function darkByClock(date) {
    var d = date || new Date();
    var hour = d.getHours() + d.getMinutes() / 60;
    var sun = SUN[d.getMonth()];
    return hour < sun[0] || hour >= sun[1];
  }

  // A manual toggle wins for the rest of the visit, then the clock takes over again.
  function override() {
    try {
      var v = sessionStorage.getItem(KEY);
      return v === "dark" || v === "light" ? v : null;
    } catch (e) {
      return null;
    }
  }

  function isDarkNow() {
    var o = override();
    return o ? o === "dark" : darkByClock();
  }

  window.__siteTheme = {
    isDarkNow: isDarkNow,
    darkByClock: darkByClock,
    setOverride: function (dark) {
      try {
        sessionStorage.setItem(KEY, dark ? "dark" : "light");
      } catch (e) {
        /* the choice still applies to this page */
      }
    },
  };

  // The site used to remember a permanent choice here; clear it so the clock applies.
  try {
    localStorage.removeItem("theme");
  } catch (e) {
    /* ignore */
  }

  document.documentElement.classList.toggle("dark", isDarkNow());
})();
