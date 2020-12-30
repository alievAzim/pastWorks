<!doctype html>
<html class="no-js" lang="">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <title></title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="apple-touch-icon" href="apple-touch-icon.png">
    <link rel="stylesheet" href="css/normalize.min.css">
    <link rel="stylesheet" href="css/main.css">
    <script src="js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
</head>

<bodyBarba.Pjax.start();

      


var FadeTransition = Barba.BaseTransition.extend({
  start: function() {
    /**
     * This function is automatically called as soon the Transition starts
     * this.newContainerLoading is a Promise for the loading of the new container
     * (Barba.js also comes with an handy Promise polyfill!)
     */

    // As soon the loading is finished and the old page is faded out, let's fade the new page
    Promise
      .all([this.newContainerLoading, this.fadeOut()])
      .then(this.fadeIn.bind(this));
  },

  fadeOut: function() {
    /**
     * this.oldContainer is the HTMLElement of the old Container
     */

      var deferred = Barba.Utils.deferred();
      
      
       
      TweenMax.set(this.oldContainer, {autoAlpha: 0,
          onComplete: function () {
            deferred.resolve();
          }
        });
      return deferred.promise;
    },

  fadeIn: function() {
    /**
     * this.newContainer is the HTMLElement of the new Container
     * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
     * Please note, newContainer is available just after newContainerLoading is resolved!
     */
      



    var nc = $(this.newContainer);
    var title = $(".title");  
      


    nc.css({
      visibility : 'visible',
    });
      
      $(this.oldContainer).hide();
      
      var ncIn = new TimelineMax({onComplete:resetAnim});
      
      ncIn
    .from(nc, 0.1, {autoAlpha: 0})
      
      /**
       * Do not forget to call .done() as soon your transition is finished!
       * .done() will automatically remove from the DOM the old Container
       */


  }
});


/**
 * Next step, you have to tell Barba to use the new Transition
 */

Barba.Pjax.getTransition = function() {
  /**
   * Here you can use your own logic!
   * For example you can use different Transition based on the current page or link...
   */
  return FadeTransition;

};



var Homepage = Barba.BaseView.extend({
  namespace: 'homepage',
  onEnter: function() {

  var redEnter = new TimelineMax();
  
      
    redEnter 
      .staggerTo(".red-wipe", 1, {y:"-100%", ease:Power2.easeIn}, 0.2)
    .from(".title", 0.3, {y:50, autoAlpha: 0, ease:Power2.easeOut}) 

  
  },
  onEnterCompleted: function() {
      // The Transition has just finished.
  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
      
      
      

      
  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
  }
});

// Don't forget to init the view!
Homepage.init();



var secondPage = Barba.BaseView.extend({
  namespace: 'page2',
  onEnter: function() {
      // The new Container is ready and attached to the DOM.
      
    var blackEnter = new TimelineMax();
  
      
    blackEnter 
      .staggerTo(".black-wipe", 1, {y:"-100%", ease:Power2.easeIn}, 0.2)
    .from(".title", 0.3, {y:50, autoAlpha: 0, ease:Power2.easeOut}) 

      
      
  },
  onEnterCompleted: function() {
      // The Transition has just finished.
  },
  onLeave: function() {
      // A new Transition toward a new page has just started.
      
      var page2Enter = new TimelineMax();
      
      page2Enter
    .to(".title", 0.3, {y:50, autoAlpha: 0, ease:Power2.easeOut}) 
      
 .set(".blue-wipe", {y:0})
      
  },
  onLeaveCompleted: function() {
      // The Container has just been removed from the DOM.
  }
});

// Don't forget to init the view!
secondPage.init();

















<div class="wipe-container red-wipes">
                  <div class="bwipe"></div>
                  <div class="bwipe"></div>
                  <div class="bwipe"></div>
                  <div class="bwipe"></div>
                  <div class="bwipe"></div>
              </div>


<div class="screen-wipe-top"></div>
        <div class="screen-wipe-bottom"></div>
  
  <div id="barba-wrapper">
  <div class="barba-container" data-namespace="page2">
          
          
              
              
             <!-- NEW CODE ENDS --> 

            <div class="wrapper">
                <div class="container bgimage2">
                    <nav> 
                    <a href="index.html">Page 01</a> 
                    <a href="page2.html">Page 02</a> 
                    <a href="page3.html">Page 03</a> </nav>
                    <div class="title">
                    <h1>this is page 02</h1> </div>
                </div>
            </div>
            
            
            
      </div>
       </div>


    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script>
        window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')
    </script>
       <script src="js/vendor/barba.min.js" type="text/javascript"></script>
         <script src ="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js"></script>
        <script src="js/main.js"></script>
</body>

</html>