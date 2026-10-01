/* "More Works" dropdown, shared with the StepCAD page. */
(function () {
  function init() {
    var mw = document.getElementById('moreWorks'), btn = document.getElementById('moreWorksBtn'), drop = document.getElementById('moreWorksDropdown');
    if (!mw || !btn || !drop) return;
    function set(open) { drop.classList.toggle('show', open); btn.setAttribute('aria-expanded', open); }
    btn.addEventListener('click', function () { set(!drop.classList.contains('show')); });
    document.getElementById('moreWorksClose').addEventListener('click', function () { set(false); });
    document.addEventListener('click', function (e) { if (!mw.contains(e.target)) set(false); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape') set(false); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
