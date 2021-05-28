$(document).ready(function(){
  // Smoothly scroll to the anchor on click
  function filterPath(string) {
  return string
   .replace(/^\//,'')
   .replace(/(index|default).[a-zA-Z]{3,4}$/,'')
   .replace(/\/$/,'');
  }
  var locationPath = filterPath(location.pathname);
  var scrollElem = scrollableElement('html', 'body');

  $('.scroll a[href*=#]').each(function() {
   var thisPath = filterPath(this.pathname) || locationPath;
   if (  locationPath == thisPath
   && (location.hostname == this.hostname || !this.hostname)
   && this.hash.replace(/#/,'') ) {
     var $target = $(this.hash), target = this.hash;
     if (target) {
       var targetOffset = $target.offset().top;
       $(this).click(function(event) {
         event.preventDefault();
         $(scrollElem).animate({scrollTop: targetOffset}, 400, function() {
           location.hash = target;
             $('.scroll, .scroll *').hide();
          var linkprev = $(target).prev().attr('id');
          var linknext = $(target).next().attr('id');
          $(target).find('.scroll-up').attr('href',linkprev);
          $(target).find('.scroll-down').attr('href',linknext);
          $(target).find('.scroll, .scroll *').show();
         });
       });
     }
   }
  });
  // Use the first element that is "scrollable"
  function scrollableElement(els) {
   for (var i = 0, argLength = arguments.length; i <argLength; i++) {
     var el = arguments[i],
         $scrollElement = $(el);
     if ($scrollElement.scrollTop()> 0) {
       return el;
     } else {
       $scrollElement.scrollTop(1);
       var isScrollable = $scrollElement.scrollTop()> 0;
       $scrollElement.scrollTop(0);
       if (isScrollable) {
         return el;
       }
     }
   }
   return [];
  }

  // Scroll arrow position and behaviour
  var width1 = $('.menu').outerWidth();
  var width2 = $('#content').outerWidth();
  $('.scroll').css({
    left: ((width2/2) + (width1)) + "px"
  });
  $(window).resize(function() {
    var width1 = $('.menu').outerWidth();
    var width2 = $('#content').outerWidth();
    $('.scroll').css({
      left: ((width2/2) + (width1)) + "px"
    });
  });
  $('.screen').on('scroll mouseenter', function(linkScroll){
    $('.scroll, .scroll *').hide();
    var linkprev = $(this).prev().attr('id');
    var linknext = $(this).next().attr('id');
    $(this).find('.scroll-up').attr('href',linkprev);
    $(this).find('.scroll-down').attr('href',linknext);
    $(this).find('.scroll, .scroll *').show();
  });

});
