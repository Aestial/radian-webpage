var fullpage = (function(){
  // TODO: Check important order
  var on_leave = function(index, nextIndex, direction) {
    //console.log("fullPage: onLeave--" + "index: " + index + " nextIndex: " + nextIndex + " direction: " +  direction);
    // TODO: REMOVE THIS DEPENDENCY!!
    popup.set(1);
    if (loader.get_loaded()){
      console.log(loader.get_manager());
        //triggerAnim(1);
    }

  };
  var after_render = function() {
    //console.log("fullPage: afterRender");
  };
  var after_resize = function() {
    //console.log("fullPage: afterResize");
  };
  var after_load = function(anchorLink, index) {
    //console.log("fullPage: afterLoad--" + "anchorLink: " + anchorLink + " index: " + index );
  };
  var params = {
    sectionsColor: ['rgba(0,0,0,0)'],
    anchors: ['aboutus', 'edesign', 'vfx', 'videogames', 'contact'],
    recordHistory: false,
    menu: '#menu',
    scrollingSpeed: 2000,
    onLeave: on_leave,
    afterRender: after_render,
    afterResize: after_resize,
    afterLoad: after_load
  };
  // Public methods
  var init = function () {
    console.log("INIT: fullpage");
    var dom = $('#fullpage');
    dom.fullpage(params);
  };
  return {
    init : init
  };
})();
