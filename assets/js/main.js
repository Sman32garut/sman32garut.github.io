"use strict";
var NavbarCollapse = function () {
    var a = $("#navbar-main"), e = $("#navbar-main-collapse"), t = $("#navbar-top-main");
    e.length && (e.on({
        "show.bs.collapse": function () {
            a.addClass("navbar-collapsed"), t.addClass("navbar-collapsed")
        }
    }), e.on({
        "hide.bs.collapse": function () {
            e.removeClass("collapsing").addClass("collapsing-out"), a.removeClass("navbar-collapsed").addClass("navbar-collapsed-out"), t.removeClass("navbar-collapsed").addClass("navbar-collapsed-out")
        }
    }), e.on({
        "hidden.bs.collapse": function () {
            e.removeClass("collapsing-out"), a.removeClass("navbar-collapsed-out"), t.removeClass("navbar-collapsed-out")
        }
    }))
}(),NavbarSticky = function () {
    var a = $(".navbar-sticky");

    function e(a) {
        var e = $(window).scrollTop();
        t + 200 < e ? a.addClass("sticky") : a.removeClass("sticky")

        t + 200 < e ? $(".navbar-brand img").height("40px") : $(".navbar-brand img").height("60px")
    }

    if (a.length) {
        var t = a.offset().top;
        e(a), $(window).on({
            scroll: function () {
                e(a)
            }
        })
    }
}(), CardActions = function () {
    var a = $(".card"), n = ".card-product-actions";
    a.length && $(n).length && (a.on({
        mouseenter: function () {
            var a, e, t;
            a = $(this), e = a.find(n), t = e.data("animation-in"), e.length && (e.addClass("in animated " + t), e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                e.removeClass("animated " + t)
            }))
        }
    }), a.on({
        mouseleave: function () {
            var a, e, t;
            a = $(this), e = a.find(n), t = e.data("animation-out"), e.length && (e.addClass("animated " + t), e.one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function () {
                e.removeClass("in animated " + t)
            }))
        }
    }))
}(), loading= function () {
    $(document).ready(function() {

        setTimeout(function(){
            $('body').addClass('loaded');
        }, 6000);

    });
}();