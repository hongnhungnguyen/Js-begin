/**
 * Created by hongnhung on 08/07/2014.
 */
$(function () {
    $("#newsSection").accordion({ header: "h4" });
    setInterval("imgChange()", 2000);
    $("#datepicker").datepicker();
    $(".footer").hide();
    clickHome();
    clickMember();
    clickAbout();
    clickContact()
    show_time();
    $("#draggable").draggable();
    $("#sortable").sortable().disableSelection();
    // run the currently selected effect
    function runEffect() {
        // get effect type from
        var selectedEffect = $("#effectTypes").val();

        // most effect types need no options passed by default
        var options = {};
        // some effects have required parameters
        if (selectedEffect === "scale") {
            options = { percent: 0 };
        } else if (selectedEffect === "transfer") {
            options = { to: "#button", className: "ui-effects-transfer" };
        } else if (selectedEffect === "size") {
            options = { to: { width: 200, height: 60 } };
        }

        // run the effect
        $("#effect").effect(selectedEffect, options, 500, callback);
    }

    // callback function to bring a hidden box back
    function callback() {
        setTimeout(function () {
            $("#effect").removeAttr("style").hide().fadeIn();
        }, 1000);
    }

    // set effect from select menu value
    $("#button").click(function () {
        runEffect();
        return false;
    });
    $("#right").click(function () {
        $("#theDiv").animate({ width: "700px" }, 1000);
    });
    $("#text").click(function () {
        $("#theDiv p").animate({ fontSize: "18pt" }, 1000);
    });
    $("#toggle").click(function () {
        $("#theDiv").animate({ left: "300" }, 1000, "swing");
    });
    $("#back").click(function () {
        $("#theDiv").animate({ left: "0px", width: "500px"}, 1000, "swing");
        $("#theDiv p").animate({ fontSize: "12pt" }, 1000);
    })

});
// Image Rotator
function imgChange() {
    var curPhoto = $(".photoShow div.current");
    var nextPhoto = curPhoto.next();
    if (nextPhoto.length == 0)
        nextPhoto = $(".photoShow div:first");
    curPhoto.removeClass("current").addClass("previous");
    nextPhoto.css({opacity: 0.0}).addClass("current").animate({opacity: 1.0}, 1000, function () {
        curPhoto.removeClass("previous");
    });
}

// Change Bg-Image
//function changeBgImage() {
//    var mau = prompt("Nhap mau nen cua trang","");
//    document.body.style.backgroundColor = mau;
//}


//Menu
function clickHome() {
    $("#home").click(function () {


        $(".aboutContent").hide();
        $("body").removeClass("bg-content").addClass("home-bg");
        $(".memberContent").fadeOut("fast");
        $(".footer").hide();
        $("#audio").addClass("block");
        $(".contactContent").hide();
        $("#marquee").addClass("block");
    })

}
function clickAbout() {
    $("#about").click(function () {
        $(".aboutContent").show();
        $(".contactContent").hide();
        $(".memberContent").hide();
        $(".slide").addClass("none");
        $("#audio").removeClass("block").addClass("none");
        $("body").removeClass("home-bg").addClass("bg-content");
        $("#marquee").removeClass("block").addClass("none");

    })
}
function clickMember() {
    $("#member").click(function () {
        $(".memberContent").fadeIn("fast");
        $(".aboutContent").hide();
        $(".contactContent").hide();
        $(".slide").addClass("none");
        $("body").removeClass("home-bg").addClass("bg-content");
        $(".footer").show();
        $("#audio").removeClass("block").addClass("none");
        $("#marquee").removeClass("block").addClass("none");
    })
}
function clickContact() {
    $("#contact").click(function () {
        $(".contactContent").fadeIn("fast");
        $(".memberContent").hide();
        $(".aboutContent").hide();
        $(".slide").addClass("none");
        $("body").removeClass("home-bg").addClass("bg-content");
        $(".footer").show();
        $("#audio").removeClass("block").addClass("none");
        $("#marquee").removeClass("block").addClass("none");
    })
}
//Show time
function show_time() {
    var date, hour, min, sec, data;
    date = new Date();
    hour = date.getHours();
    if (hour < 10) hour = "0" + hour;
    min = date.getMinutes();
    if (min < 10) min = "0" + min;
    sec = date.getSeconds();
    if (sec < 10) sec = "0" + sec;
    data = hour + ":" + min + ":" + sec;
    document.clock.time.value = data;
    setTimeout("show_time()", 1000);
}