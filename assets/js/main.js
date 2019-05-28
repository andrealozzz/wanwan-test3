$(document).ready(function () {

///Replace all SVG images with inline SVG
    $('img.svg').each(function () {
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function (data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if (typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if (typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass + ' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });



    ////// acordeon account

    $(".acordeon").on("click", ".acordeon-btn", function() {
      $(this).toggleClass("acordeon-activo").next().slideToggle('slow');
    });


    //// page transitions

    Barba.Pjax.start();
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
      
          return $(this.oldContainer).animate({ opacity: 0 }).promise();
        },
      
        fadeIn: function() {
          /**
           * this.newContainer is the HTMLElement of the new Container
           * At this stage newContainer is on the DOM (inside our #barba-container and with visibility: hidden)
           * Please note, newContainer is available just after newContainerLoading is resolved!
           */
      
          var _this = this;
          var $el = $(this.newContainer);
      
          $(this.oldContainer).hide();
      
          $el.css({
            visibility : 'visible',
            opacity : 0
          });
      
          $el.animate({ opacity: 1 }, 400, function() {
            /**
             * Do not forget to call .done() as soon your transition is finished!
             * .done() will automatically remove from the DOM the old Container
             */
      
            _this.done();
          });
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


      ///////



    
});


