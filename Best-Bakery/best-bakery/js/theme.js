(function ($) {
  "use strict";

  var nav_offset_top = $("header").height();
  /*-------------------------------------------------------------------------------
	  Navbar 
	-------------------------------------------------------------------------------*/

  //* Navbar Fixed
  function navbarFixed() {
    if ($(".main_header_area, .main_header_three, .box_header_four").length) {
      $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".main_header_area, .main_header_three, .box_header_four").addClass(
            "navbar_fixed"
          );
        } else {
          $(
            ".main_header_area, .main_header_three, .box_header_four"
          ).removeClass("navbar_fixed");
        }
      });
    }
  }
  navbarFixed();

  /*----------------------------------------------------*/
  /*  Main Slider js
    /*----------------------------------------------------*/
  function main_slider() {
    if ($("#main_slider").length) {
      $("#main_slider").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 4000000,
        disableProgressBar: "on",
        navigation: {
          onHoverStop: "off",
          touch: {
            touchenabled: "on",
          },
          arrows: {
            style: "zeus",
            enable: true,
            hide_onmobile: true,
            hide_under: 992,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 50,
              v_offset: 0,
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 50,
              v_offset: 0,
            },
          },
        },
        responsiveLevels: [4096, 1199, 992, 767, 480],
        gridwidth: [1170, 970, 750, 700, 400],
        gridheight: [625, 625, 550, 550, 500],
        lazyType: "smart",
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        },
      });
    }
  }
  main_slider();
  /*----------------------------------------------------*/
  /*  Main Slider js
    /*----------------------------------------------------*/
  function main_slider3() {
    if ($("#main_slider3").length) {
      $("#main_slider3").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 4000000,
        disableProgressBar: "on",
        navigation: {
          onHoverStop: "off",
          touch: {
            touchenabled: "on",
          },
          arrows: {
            style: "zeus",
            enable: true,
            hide_onmobile: true,
            hide_under: 992,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 50,
              v_offset: 0,
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 50,
              v_offset: 0,
            },
          },
        },
        responsiveLevels: [4096, 1199, 992, 767, 480],
        gridwidth: [1170, 970, 750, 700, 400],
        gridheight: [798, 798, 600, 600, 500],
        lazyType: "smart",
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        },
      });
    }
  }
  main_slider3();
  /*----------------------------------------------------*/
  /*  Main Slider js
    /*----------------------------------------------------*/
  function main_slider4() {
    if ($("#main_slider4").length) {
      $("#main_slider4").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 4000000,
        disableProgressBar: "on",
        navigation: {
          onHoverStop: "off",
          touch: {
            touchenabled: "on",
          },
          arrows: {
            style: "zeus",
            enable: true,
            hide_onmobile: true,
            hide_under: 767,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 50,
              v_offset: 0,
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 50,
              v_offset: 0,
            },
          },
        },
        responsiveLevels: [4096, 1370, 1199, 992, 767, 480],
        gridwidth: [1170, 1170, 970, 750, 540, 400],
        gridheight: [767, 767, 767, 600, 600, 500],
        lazyType: "smart",
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        },
      });
    }
  }
  main_slider4();
  /*----------------------------------------------------*/
  /*  Main Slider js
    /*----------------------------------------------------*/
  function main_slider5() {
    if ($("#main_slider5").length) {
      $("#main_slider5").revolution({
        sliderType: "standard",
        sliderLayout: "auto",
        delay: 4000000,
        disableProgressBar: "on",
        navigation: {
          onHoverStop: "off",
          touch: {
            touchenabled: "on",
          },
          arrows: {
            style: "zeus",
            enable: true,
            hide_onmobile: true,
            hide_under: 992,
            hide_onleave: true,
            hide_delay: 200,
            hide_delay_mobile: 1200,
            tmp: '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
            left: {
              h_align: "left",
              v_align: "center",
              h_offset: 50,
              v_offset: 0,
            },
            right: {
              h_align: "right",
              v_align: "center",
              h_offset: 50,
              v_offset: 0,
            },
          },
        },
        responsiveLevels: [4096, 1370, 1199, 992, 767, 480],
        gridwidth: [1170, 1170, 970, 750, 700, 400],
        gridheight: [620, 620, 620, 550, 550, 500],
        lazyType: "smart",
        fallbacks: {
          simplifyAll: "off",
          nextSlideOnWindowFocus: "off",
          disableFocusListener: false,
        },
      });
    }
  }
  main_slider5();

  /*----------------------------------------------------*/
  /*  Cake Feature Slider
    /*----------------------------------------------------*/
  function cake_carousel() {
    if ($(".cake_feature_slider").length) {
      $(".cake_feature_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 4,
        nav: true,
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        navContainerClass: "cake_feature_slider",
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          430: {
            items: 2,
          },
          768: {
            items: 3,
          },
          992: {
            items: 4,
          },
        },
      });
    }
  }
  cake_carousel();

  /*----------------------------------------------------*/
  /*  Cake Feature Slider
    /*----------------------------------------------------*/
  function client_say_slider() {
    if ($(".client_says_slider").length) {
      $(".client_says_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 1,
        nav: true,
        autoplay: true,
        smartSpeed: 1500,
        dots: false,
        navContainerClass: "client_says_slider",
        navText: [
          '<i class="fa fa-angle-left" aria-hidden="true"></i>',
          '<i class="fa fa-angle-right" aria-hidden="true"></i>',
        ],
        responsiveClass: true,
      });
    }
  }
  client_say_slider();

  /*----------------------------------------------------*/
  /*  Cake Feature Slider
    /*----------------------------------------------------*/
  function arivals_slider() {
    if ($(".arivals_slider").length) {
      $(".arivals_slider").owlCarousel({
        loop: true,
        margin: 30,
        items: 2,
        nav: false,
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        responsiveClass: true,
        responsive: {
          0: {
            items: 1,
          },
          420: {
            items: 2,
          },
        },
      });
    }
  }
  arivals_slider();

  /*----------------------------------------------------*/
  /*  Special Recipe Slider
    /*----------------------------------------------------*/
  function recipe_slider() {
    if ($(".special_recipe_slider").length) {
      $(".special_recipe_slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: false,
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        responsiveClass: true,
      });
    }
  }
  recipe_slider();

  /*----------------------------------------------------*/
  /*  portfolio_isotope
    /*----------------------------------------------------*/
  function grid_gallery() {
    if ($(".grid_portfolio_area").length) {
      // Activate isotope in container
      $(".grid_portfolio_area").imagesLoaded(function () {
        $(".grid_portfolio_area").isotope({
          layoutMode: "masonry",
          percentPosition: true,
          columnWidth: 1,
        });
      });
    }
  }

  $(function () {
    $("#slider-range").slider({
      range: true,
      min: 0,
      max: 500,
      values: [10, 250],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      },
    });
    $("#amount").val(
      "$" +
        $("#slider-range").slider("values", 0) +
        " - $" +
        $("#slider-range").slider("values", 1)
    );
  });

  /*----------------------------------------------------*/
  /*  Simple LightBox js
    /*----------------------------------------------------*/
  $(".imageGallery1 .light").simpleLightbox();
})(jQuery);

document.getElementById("showCart").style.display = "none";
var giohang = new Array();

function themvaogiohang(x) {
  var boxsp = x.parentElement.children;
  var tensp = boxsp[0].innerText;
  var gia = boxsp[1].innerText;
  var soluong = parseInt(boxsp[2].value);
  var sp = new Array(tensp, gia, soluong);

  var kt = 0;
  for (let i = 0; i < giohang.length; i++) {
    if (giohang[i][0] == tensp) {
      kt = 1;
      console.log(giohang[i][0]);
      soluong += giohang[i][2];
      giohang[i][2] = soluong;
      break;
    }
  }
  if (kt == 0) {
    giohang.push(sp);
    sessionStorage.setItem("giohang", JSON.stringify(giohang));
  }

  console.log(giohang);
}

function showMyCart() {
  var ttgh = "";
  var tong = 0;
  for (let i = 0; i < giohang.length; i++) {
    var total = parseInt(giohang[i][0]) * parseInt(giohang[i][2]);
    console.log(total);
    tong += total;
    ttgh +=
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      giohang[i][1] +
      "</td><td>" +
      giohang[i][0] +
      "</td><td>" +
      giohang[i][2] +
      "</td><td>" +
      total +
      "</td></tr>";
  }
  ttgh += '<tr><th colspan="5">Total price</th><td>' + tong + "</td></tr>";
  console.log(ttgh);
  document.getElementById("mycard").innerHTML = ttgh;
}

function showCart() {
  var x = document.getElementById("showCart");
  if (x.style.display == "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    showMyCart();
  }
}

function showGioHang_TrangThanhToan() {
  var gh = sessionStorage.getItem("giohang");
  var giohang = JSON.parse(gh);
  var ttgh = "";
  var tong = 0;
  for (let i = 0; i < giohang.length; i++) {
    var total = parseInt(giohang[i][0]) * parseInt(giohang[i][2]);
    console.log(total);
    tong += total;
    ttgh +=
      "<tr><td>" +
      (i + 1) +
      "</td><td>" +
      giohang[i][1] +
      "</td><td>" +
      giohang[i][0] +
      "</td><td>" +
      giohang[i][2] +
      "</td><td>" +
      total +
      "</td></tr>";
  }
  ttgh += '<tr><th colspan="5">Total price</th><td>' + tong + "</td></tr>";
  console.log(ttgh);
  document.getElementById("mycard").innerHTML = ttgh;
}

function checkOrder() {
  const fname = document.getElementById("name");
  const address = document.getElementById("address");
  const city = document.getElementById("city");
  const contry = document.getElementById("contry");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  if (
    fname.value == "" ||
    address.value == "" ||
    city.value == "" ||
    contry.value == "" ||
    email.value == "" ||
    phone.value == ""
  ) {
    alert("Please fill full information");
  }
}
