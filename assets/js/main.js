$(function() {

    var header = $("#header");
    var introH = $("#intro").innerHeight();
    var scrollOffset = $(window).scrollTop();
// fixed header
    checkScroll(scrollOffset);

    $(window).on("scroll", function() {
      scrollOffset = $(this).scrollTop();
      checkScroll();
  });

  function checkScroll() {
    if(introH <= scrollOffset) {
      header.addClass ("fixed");
    } else {
      header.removeClass ("fixed");
    }
  }


  // smooth scroll
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
    var blockId = $(this).data('scroll');
    var blockOffset = $(blockId).offset();
  
    
    console.log(top);
    
  })
});