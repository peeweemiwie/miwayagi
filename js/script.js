$(function(){

var d = document;

// Make header narrower when page is scrolled
window.addEventListener('scroll', function(){
  var pageY = window.pageYOffset;
    if(pageY > 100){
      d.querySelector('header').classList.add('narrow');
    } else if (pageY < 100) {
      d.querySelector('header').classList.remove('narrow');
    }
 });

 var topoffset = 100;
 var hash = $(this).find('li.active a').attr('href');

     $(document).ready(function(){
       console.log(topoffset);
     });

 //Use smooth scrolling when clicking on navigation
  $('.nav-wrapper a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') ===
      this.pathname.replace(/^\//,'') &&
      location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset+2
        }, 500);
        return false;
      } //target.length
    } //click function
  }); //smooth scrolling

});
