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
}(), gallery = function () {
    $(document).ready(function () {
        $.getJSON( "/config/ig/ig.json", function( data ) {
            // grab out load more button
            var loadButton = document.getElementById('gallery-load-more');
            var feed = new Instafeed({
                get: 'user',
                userId: data.userId,
                clientId: data.clientId,
                accessToken: data.accessToken,
                resolution: "standard_resolution",
                sortBy: "most-recent",
                limit: 4,
                filter: function (image) {
                    console.log(image);
                    return true;
                },
                template: '<div class="col-lg-3 mb-5 mb-lg-0"> <div data-animate-hover="1" data-toggle="hidden"> ' +
                '<div class="card shadow animate-this card-visi"> <a href="{{image}}" data-caption="{{caption}}">' +
                '<img src="{{image}}" alt="{{caption}}" /></a> </div> </div> </div>',
                after: function() {
                    // disable button if no more results to load
                    if (!this.hasNext()) {
                        loadButton.setAttribute('disabled', 'disabled');
                    }
                }
            });

            // bind the load more button
            loadButton.addEventListener('click', function() {
                feed.next();
            });

            feed.run();

            var loadButtonPengajar = document.getElementById('pengajar-load-more');
            var feedPengajar = new Instafeed({
                get: 'user',
                userId: data.userId,
                clientId: data.clientId,
                accessToken: data.accessToken,
                resolution: "standard_resolution",
                sortBy: "least-recent",
                target: "instafeed-pengajar",
                filter: function (image) {
                    return image.tags.indexOf('pengajar') >= 0;
                },
                template: '<div class="col-lg-3 mb-5 mb-lg-0"> <div data-animate-hover="1" data-toggle="hidden"> ' +
                '<div class="card shadow animate-this card-visi"> <a href="{{image}}" data-caption="{{caption}}">' +
                '<img src="{{image}}" alt="{{caption}}" /></a> </div> </div> </div>',
                after: function() {
                    // disable button if no more results to load
                    if (!this.hasNext()) {
                        loadButton.setAttribute('disabled', 'disabled');
                    }
                }
            });

            // bind the load more button
            loadButtonPengajar.addEventListener('click', function() {
                feedPengajar.next();
            });

            feedPengajar.run();
        });

        function cek_gallery(last_gallery) {

            if ($(".gallery a").length > last_gallery) {
                baguetteBox.run('.gallery');
                last_gallery = $(".gallery a").length;
            }

            setTimeout(function(){
                cek_gallery(last_gallery);
            }, 1000);
        }
        cek_gallery(0);
    });
}();