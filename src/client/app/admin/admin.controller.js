(function($) {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    /* @ngInject */
    function AdminController($state) {
        var vm = this;
        this.sidebarWidth = '250px';
    }

	// this function handles responsive layout on screen size resize or mobile device rotate.
      var handleResponsive = function() {
        var isIE8 = ( navigator.userAgent.match(/msie [8]/i) );
        var isIE9 = ( navigator.userAgent.match(/msie [9]/i) );
        var isIE10 = !! navigator.userAgent.match(/MSIE 10/);

        if (isIE10) {
          $('html').addClass('ie10'); // detect IE10 version
        }

        $('.navbar li.nav-toggle').click(function() {
          $('body').toggleClass('nav-open');
        });

        /**
         * Sidebar-Toggle-Button
         */

        $('.toggle-sidebar').click(function(e) {
          e.preventDefault();

          // Reset manual divider-resize
          $('#sidebar').css('width', '');
          $('#sidebar > #divider').css('margin-left', '');
          $('#content').css('margin-left', '');

          // Toggle class
          $('#container').toggleClass('sidebar-closed');
        });

        var handleElements = function() {
          // First visible childs add .first
          $('.crumbs .crumb-buttons > li').removeClass('first');
          $('.crumbs .crumb-buttons > li:visible:first').addClass('first');

          // Remove phone-navigation
          if ($('body').hasClass('nav-open')) {
            $('body').toggleClass('nav-open');
          }
          // Add additional scrollbars
          handleScrollbars();
        }
      }
      var handleSidebarMenu = function() {
        var arrow_class_open   = 'icon-angle-down',
          arrow_class_closed = 'icon-angle-left';

        $('li:has(ul)', '#sidebar-content ul').each(function() {
          if ($(this).hasClass('current') || $(this).hasClass('open-default')) {
            $('>a', this).append("<i class='arrow " + arrow_class_open + "'></i>");
          } else {
            $('>a', this).append("<i class='arrow " + arrow_class_closed + "'></i>");
          }
        });

        if ($('#sidebar').hasClass('sidebar-fixed')) {
          $('#sidebar-content').append('<div class="fill-nav-space"></div>');
        }

        $('#sidebar-content ul > li > a').on('click', function (e) {

          if ($(this).next().hasClass('sub-menu') == false) {
            return;
          }

          var sub = $(this).next();
          if (sub.is(":visible")) {
            $('i.arrow', $(this)).removeClass(arrow_class_open).addClass(arrow_class_closed);
            $(this).parent().removeClass('open');
            sub.slideUp(200, function() {
              $(this).parent().removeClass('open-fixed').removeClass('open-default');
              calculateHeight();
            });
          } else {
            $('i.arrow', $(this)).removeClass(arrow_class_closed).addClass(arrow_class_open);
            $(this).parent().addClass('open');
            sub.slideDown(200, function() {
              calculateHeight();
            });
          }

          e.preventDefault();
        });
      }
      var handleLayout = function() {
    		// For margin to top, if header is fixed
    		if ($('.header').hasClass('navbar-fixed-top')) {
    			$('#container').addClass('fixed-header');
    		}
    	}

    	var handleScrollbars = function() {
    		var android_chrome = /android.*chrom(e|ium)/.test(navigator.userAgent.toLowerCase());

    		if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) && android_chrome == false) {
    			$('#sidebar').css('overflow-y', 'auto');
    		} else {
    			if ($('#sidebar').hasClass('sidebar-fixed') || $(window).width() <= 767) {

    				// Since Chrome on Android has problems with scrolling only in sidebar,
    				// this is a workaround for this
    				//
    				// Awaiting update from Google

    				if (android_chrome) {
    					var wheelStepInt = 100;
    					$('#sidebar').attr('style', 'position: absolute !important;');

    					// Fix for really high tablet resolutions
    					if ($(window).width() > 979) {
    						$('#sidebar').css('margin-top', '-52px');
    					}

    					// Only hide sidebar on phones
    					if ($(window).width() <= 767) {
    						$('#sidebar').css('margin-left', '-250px').css('margin-top', '-52px');
    					}
    				} else {
    					var wheelStepInt = 7;
    				}
    			}
    		}
    	}

      var handleScrollers = function() {
        $('.scroller').each(function () {
          $(this).slimScroll({
              size: '7px',
              opacity: '0.2',
              position: 'right',
              height: $(this).attr('data-height'),
              alwaysVisible: ($(this).attr('data-always-visible') == '1' ? true : false),
              railVisible: ($(this).attr('data-rail-visible') == '1' ? true : false),
              disableFadeOut: true
            });
        });
      }

      var blockUI = function (el, centerY) {
  			var el = $(el);
  			el.block({
  				message: '<img src="./assets/img/ajax-loading.gif" alt="">',
  				centerY: centerY != undefined ? centerY : true,
  				css: {
  					top: '10%',
  					border: 'none',
  					padding: '2px',
  					backgroundColor: 'none'
  				},
  				overlayCSS: {
  					backgroundColor: '#000',
  					opacity: 0.05,
  					cursor: 'wait'
  				}
  			});
  		}

      // Wrapper function to unblock elements (finish loading)

      var unblockUI = function (el) {
        $(el).unblock({
          onUnblock: function () {
            $(el).removeAttr("style");
          }
        });
      }

      function init(){
        //core handlers
        handleResponsive(); // Checks for IE-version, click-handler for sidebar-toggle-button, Breakpoints
        handleLayout(); // Calls calculateHeight()
        handleSidebarMenu(); // Handles navigation
        handleScrollbars(); // Adds styled scrollbars for sidebar on desktops
        handleScrollers(); // Initializes slimscroll for scrollable widgets
      }
      init();
})(jQuery);
