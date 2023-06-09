$(document).ready(function () {
  $(".banner").owlCarousel({
    items: 1,
    nav: true,
    autoplay: true,
    loop: true,
    smartSpeed: 1000,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
  });

  $(".list-expert").owlCarousel({
    items: 5,
    dots: false,
    nav: true,
    loop: true,
    smartSpeed: 1000,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      767: {
        items: 3,
      },
      992: {
        items: 5,
      },
    },
  });

  $(".list-service").owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    loop: true,
    center: true,
    smartSpeed: 1000,
    margin: 20,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
        center: false,
      },
      767: {
        items: 2,
        center: false,
        margin: 0,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".list-detail").owlCarousel({
    items: 1,
    dots: false,
    loop: true,
    smartSpeed: 500,
    margin: 5,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
  });

  $(".list_member").owlCarousel({
    items: 6,
    dots: false,
    nav: true,
    loop: true,
    smartSpeed: 500,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 2,
      },
      767: {
        items: 4,
      },
      992: {
        items: 6,
      },
    },
  });

  $(".list_member").on("click", ".owl-item", function () {
    var i = $(this).index() - 6;
    $(".list_member").trigger("to.owl.carousel", [i, 1000, true]);
    $(".list-detail").trigger("to.owl.carousel", [i, 1000, true]);
    $(".list_member .owl-item").not($(this)).removeClass("border-active");
    $(this).addClass("border-active");
  });

  var memberIndex = 1;

  $(".list_member").on("changed.owl.carousel", function (event) {
    $(".list-detail").trigger("to.owl.carousel", [
      event.item.index,
      1000,
      true,
    ]);
    for (var i = 0; i < $(".list_member .owl-item").length; i++) {
      $(".list_member .owl-item").eq(i).removeClass("border-active");
    }
    $(".list_member .owl-item").eq(event.item.index).addClass("border-active");
  });

  $(".list-news").owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    loop: true,
    smartSpeed: 1000,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".list-news-action").owlCarousel({
    items: 3,
    dots: false,
    nav: true,
    loop: true,
    smartSpeed: 1000,
    margin: 25,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      579: {
        items: 2,
      },
      769: {
        items: 3,
      },
    },
  });
  $(".menu-item i").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
    } else {
      $(this).addClass("active");
    }

    $(this).next().slideToggle();
  });

  $("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $("#icon_search").click(function () {
    $(".form-search").slideToggle();
  });

  $(".tabbar").click(function () {
    this.classList.toggle("active");
    if (this.classList[1] == "active") {
      $(".header-bottom").toggleClass("open");
    } else {
      $(".header-bottom").removeClass("open");
    }
  });

  $(".langague").click(function () {
    $(".langague .icon .list-langague").slideToggle("slow");
  });

  $(".list-doctor").owlCarousel({
    items: 3,
    smartSpeed: 500,
    nav: true,
    dots: false,
    margin: 35,
    loop: true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 1,
      },
      991: {
        items: 3,
      },
    },
  });
  $(".list-doctor-orther").owlCarousel({
    items: 3,
    smartSpeed: 500,
    nav: true,
    dots: false,
    margin: 50,
    loop: true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  });

  $(".list-doctor-introduction").owlCarousel({
    items: 4,
    smartSpeed: 500,
    nav: true,
    dots: false,
    margin: 50,
    loop: true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      767: {
        items: 2,
      },
      992: {
        items: 4,
      },
    },
  });

  $(".detail-info .info-top").click(function () {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this).next().slideToggle();
    } else {
      $(".detail-info .info-top").not($(this)).next().slideUp();
      $(".detail-info .info-top").not($(this)).removeClass("active");
      $(this).addClass("active");
      $(this).next().slideToggle();
    }
  });
  $(".menu-manual .item").click(function () {
    let index = $(this).data("index");
    $(".menu-manual .item").not($(this)).removeClass("active");
    $(this).addClass("active");
    $(".tab-content")
      .not($("#content-" + index))
      .removeClass("active");
    $("#content-" + index).addClass("active");
  });
  let moduleItem = $(".introduction-menu .about .item");
  let heightModule = $(".introduction-menu .about").outerHeight();
  let heightHeader = $(".header").outerHeight();
  let htmlbody = $("html, body");
  let windows = $(window);
  if (moduleItem.length > 0) {
    windows.scroll(function (event) {
      let scroll = windows.scrollTop();
      let scrollMenu = $(".introduction-menu .about");
      moduleItem.each(function () {
        let id = $(this).attr("data-id");
        let targetItem = $(
          '.introduction-menu .about .item[data-id="' + id + '"]'
        );
        console.log(targetItem.offset().left);
        let offset;
        let offsetMenu;
        let aboutId = $("#about-" + id);
        if (aboutId.length > 0) {
          offset =
            $("#about-" + id).offset().top - heightHeader - heightModule - 40;
          offsetMenu = targetItem.offset().left - 10;
          if (scroll >= offset) {
            moduleItem.removeClass("active");
            $(this).addClass("active");
          }
          if ($(this).hasClass("active")) {
            scrollMenu.scrollLeft(offsetMenu);
          }
        }
      });
    });
  }
  moduleItem.click(function () {
    let scrollMenu = $(".introduction-menu .about");
    let id = $(this).attr("data-id");
    let targetItem = $('.introduction-menu .about .item[data-id="' + id + '"]');
    let offset;
    let offsetMenu;
    let aboutId = $("#about-" + id);
    if (aboutId.length > 0) {
      offset =
        $("#about-" + id).offset().top - heightHeader - heightModule - 30;
      offsetMenu = targetItem.offset().left - 10;
    }
    htmlbody.animate(
      {
        scrollTop: offset,
      },
      600
    );
    scrollMenu.animate(
      {
        scrollLeft: offsetMenu,
      },
      600
    );
  });
});
