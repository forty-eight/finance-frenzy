(function(){

  var overlay = {};

  overlay.el = document.getElementById('overlay');

  overlay.show = function( id ) {
    // Possible values
    // home
    // betwixt
    // game-over
    this.el.className = 'overlay overlay__show-' + id;
  };

  overlay.hide = function( id ) {
    this.el.className = 'overlay';
  };

  window.overlay = overlay;

})();