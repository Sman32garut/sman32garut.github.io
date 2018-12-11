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
}();