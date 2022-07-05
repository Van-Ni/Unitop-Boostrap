$(function() {
    $(".icon-search").click(function() {
        $("#header form").slideToggle();
    })
    $(".icon-menu").click(function() {
        $(".collapse").slideDown();
        $(".menu-toggle").addClass("active");
    });
    $(".icon-close").click(function() {
        $(".collapse").slideUp();
        $(".menu-toggle").removeClass("active");
    });
    $(".nav-link.active").click(function() {
        $(".dropdown-menu-responsive").slideToggle();
        $(".icon-arrow").toggleClass("active");
    })
    $(window).resize(function() {
        closeDropdown();
    })
    $(window).scroll(function() {
        closeDropdown();
    })
    function closeDropdown() {
        $(".collapse").slideUp();
        $(".dropdown-menu-responsive").slideUp();
        $(".menu-toggle").removeClass("active");
        $(".icon-arrow").removeClass("active");

    }
})