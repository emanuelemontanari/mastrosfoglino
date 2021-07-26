$(document).on("scroll", function() {
    if (
      $(document).scrollTop() > 50) {
      $(".icon-sfoglia").addClass("icon-sfoglia-ghost");
      $(".icon-cartouche").addClass("icon-cartouche-ghost");
    } else {
      $(".icon-sfoglia").removeClass("icon-sfoglia-ghost");
      $(".icon-cartouche").removeClass("icon-cartouche-ghost");
    }
  });
  
  $('#checkbox-menuanchor').change(function() {
    if ($(this).is(":checked")) {
      $('html').addClass('noscroll');
      $('html').addClass('noscroll-long');
    } else {
      $('html').removeClass('noscroll');
      $('html').removeClass('noscroll-long');
    }
  });
