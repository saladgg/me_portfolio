$(function() {
  let showMenu = false;
  $(".menu-btn").click(function() {
    if (!showMenu) {
      $(".menu-btn").addClass("close");
      $(".menu").addClass("show");
      $(".menu-nav").addClass("show");
      $(".menu-branding").addClass("show");
      $(".nav-item").each(function(index, element) {
        $(element).addClass("show");
        showMenu = true;
      });
    } else {
      $(".menu-btn").removeClass("close");
      $(".menu").removeClass("show");
      $(".menu-nav").removeClass("show");
      $(".menu-branding").removeClass("show");
      $(".nav-item").each(function(index, element) {
        $(element).removeClass("show");
        showMenu = false;
      });
    }
  });
});
