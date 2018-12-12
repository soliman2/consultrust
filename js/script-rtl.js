$(function () {
    'use strict';
    // Start Navbar Menu

    //Togell Active Class in Menu
    $(".navbar_menu li:first-child").addClass("active");

    $(".navbar_menu li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
    // Fixed navbar
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 80) {
            $(".navbar").addClass("fixed");

        } else {
            $(".navbar").removeClass("fixed");

        }
    });

    // Menu Fore Desck Top


    // Button Togell To Show and Hide Menu
    $(".navbar_button").click(function () {
        $(".navbar_overlay").fadeIn();
        $(".navbar_menu").animate({
            right: 0 //Change
        }, 500);

    });

    // Overlay Click To  Hide Menu
    $(".navbar_overlay").click(function () {
        $(this).fadeOut("slow");
        $(".navbar_menu").animate({
            right: -260 //Change
        }, 500);

    });
    $(" .navbar_overlay").children().click(function (e) {
        e.stopPropagation();
    });


    // Hiden Menu in Mobile By Using Esc Button
    if ($(window).width() <= 992) {
        $(document).keydown(function (e) {
            if (e.keyCode == 27)
                $(".navbar_menu").fadeOut("slow");
        });
    }


    // Start Notificaion 
    $(".notification_button").on('click', function () {
        $(".notification_area-list").slideToggle();
    });

    $(".notification_area-list li ").on('click', function () {
        $(this).removeClass("active");
    });


    // End Notificaion 

    //End Navbar Menu
    // Start Header  Slider
    // =06= Start Testmonial Section
    $('.header_slider-js').slick({
        dots: true,
        arrows: false,
        rtl: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    // =06= End Testmonial Section

    $(".slider_buttonvideo-js").mouseenter(function () {
        $(this).removeClass("animation");
    });
    $(".slider_buttonvideo-js").mouseleave(function () {
        $(this).addClass("animation");
    });


    // End Header Slider
    /*======= Backgrounds ======*/
    $("[data-src]").each(function () {
        var backgroundImage = $(this).attr("data-src");
        $(this).css("background-image", "url(" + backgroundImage + ")");
    });

    // Start Our Best Section

    $(".ourbest-block-js").mouseenter(function () {
        $(this).children(".icon_white").hide();
        $(this).children(".icon_color").show();
    });
    $(".ourbest-block-js").mouseleave(function () {
        $(this).children(".icon_white").show();
        $(this).children(".icon_color").hide();
    });
    // End Our Best Section
    // =06= Start Testmonial Section
    $('.testmonial_slider-js').slick({
        dots: false,
        rtl: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    // =06= End Testmonial Section
    /* Start Profile Coach page*/
    // Start All Tabs "About Coach"
    /****Profile coach Tabs*******/
    $(".tabs li:first-child").addClass("active");

    //Tagle Active Class
    $(".tabs li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        //Hide All Content
        $(".profile_coach-tabs .all_tabs > div").hide();

        //Show Dive With This Link
        $('.' + $(this).data('class')).fadeIn();
    });
    /* End Profile Coach Page*/

    /****Profile coach Registation Seation*******/
    $(".booking_coach-tabs li:first-child").addClass("active");

    //Tagle Active Class
    $(".booking_coach-tabs li").click(function () {
        $(this).addClass("active").siblings().removeClass("active");

        //Hide All Content
        $(".booking_coach-content .all_tabs > div").hide();

        //Show Dive With This Link
        $('.' + $(this).data('class')).fadeIn();
    });
    /* End Profile Coach Page*/


    // Satrt Provider List Doctor Page
    /*advanced Search Hide and Show */
    $(".advanced_search-button").click(function () {
        $(this).toggleClass("active");
        $(".search_advanced").slideToggle();
    });
    //search_advanced

    //Button Go to Top Hidden and Show
    $(window).scroll(function () {

        var buttonUp = $(".go_up-js");

        if ($(window).scrollTop() >= 400) {
            buttonUp.fadeIn(1000);
        } else {
            buttonUp.fadeOut(1000);

        }


    });

    //Button Click To Scroll to top
    $(".go_up-js").on('click', function () {
        $('html,body').animate({
            scrollTop: 0
        }, 1000)
    });

    $(".dropdown_link ").click(function () {
        $(".navbar_dropdown-menu").slideToggle(800);
    });


    /**Start Custum Calender**/
    // Start My Code//
    //End Code//
    var currentMonth = new Date().getMonth();
    var currentYear = new Date().getFullYear();
    var clickedDays = 0;
    var bookingSteps = 0;
    var lastClickedDay;
    var startDate = "";
    var endDate = "";
    var monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
    var monthShortNames = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
    var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    var bookedDates = [];
    var selectedDates = [];

    Date.prototype.addDays = function (days) {
        var dat = new Date(this.valueOf())
        dat.setDate(dat.getDate() + days);
        return dat;
    }

    function clearCalender() {
        clickedDays = 0;
        $(".month div").removeClass("clicked");
        $("#startdate").html("");
        $("#enddate").html("");

        startDate = "";
        endDate = "";
        selectedDates = [];
        bookingSteps = 0;
    }

    function clearBooking() {
        $("#booking-form input").val("");
        $("#booking-form textarea").val("");

        $("#booking-wrapper").removeClass("opened");


    }

    function daysInMonth(month) {
        return new Date(currentYear, month, 0).getDate();
    }
    //
    // function monthClick(e) {
    //   clickedDays += 1;
    //
    //   if (clickedDays == 1) {
    //     $(e).toggleClass("clicked");
    //     startDateIndex = parseInt($(e).attr('id').split('-')[1]);
    //     startDate = new Date(currentYear, currentMonth, startDateIndex);
    //   }
    //   if (clickedDays > 1) {
    //     endDateIndex = parseInt($(e).attr('id').split('-')[1]);
    //     endDate = new Date(currentYear, currentMonth, endDateIndex);
    //   }
    //   if (endDate > startDate) {
    //     var clicked = $(".clicked");
    //     $(clicked).not(clicked[0]).removeClass("clicked");
    //     $(e).toggleClass("clicked");
    //
    //     dateArray = getDates(startDate, endDate);
    //     dateArray = formatDates(dateArray)
    //     selectedDates = dateArray;
    //
    //     for (var i = 0; i < dateArray.length; i++) {
    //       $("#" + dateArray[i]).addClass("clicked");
    //     }
    //   }
    //   $("#startdate").html(startDate.toString().split(' ').slice(0, 4).join(' '));
    //   $("#enddate").html(endDate.toString().split(' ').slice(0, 4).join(' '));
    // }


    function displayCalender() {
        var days = daysInMonth(currentMonth + 1);

        $("#calender-title p").html(monthNames[currentMonth].toUpperCase());
        $("#calender-content").html("");

        for (var i = 1; i < firstDayOffset(new Date()); i++) {
            $("#calender-content").append("<div class='month flex center-vh'></div>");
        }
        for (var i = 1; i <= days; i++) {
            var day = new Date(currentYear, currentMonth, i).getDay(),
                string = "<div class='month'><div id='" + currentYear + "-" + monthShortNames[currentMonth] + "-" + i + "'class='month-selector flex center-vh clickable'><span class='day_avilable '>0</span><p>" + i + "</p></div></div>";
            // My Custum Var

            // var string = "<div class='month'><div id='" + dayNames[day] + "-" + i + "-" + monthNames[currentMonth] + "-" + currentYear + "'class='month-selector flex center-vh clickable' onclick='monthClick(this)'><span class='day_avilable '>5</span><p>" + i + "</p></div></div>";

            $("#calender-content").append(string);


        }

        checkSelected();
        checkBookings();


        /***************** Start MY Pure keyCode*****************/
        $(".month").click(function () {
            $(this).addClass("active").siblings().removeClass("active");
            $(".available_dates-title").text(monthNames[currentMonth] + "-" + currentYear);
            $(".available_dates-list").fadeIn(1000);
            $('html,body').animate({
                scrollTop: $(".available_dates-list").offset().top - 100
            }, 1000);

        });

        /***************** End MY Pure keyCode*****************/
    }
    // Add Selected Date To Date List
    var counter = 0;
    $(".date_selected-js").on('click', function () {

        $(this).prop('disabled', 'true');
        if ($(this).is(':checked')) {
            var selectedDate = $(this).parent(".available_dates-add").siblings(".available_dates-details").html();
            var dateMove = "<li class='selected_dates-content'><aside id='selected_dates-details-" + counter + "'></aside><aside class='selected_dates-add'><i class='fas fa-times date_remove-js'></i><label>حذف من القائمة</label></aside></li>";
            $(dateMove).appendTo(".menu_selected-dates ul");
            $(selectedDate).appendTo("#selected_dates-details-" + counter);
            counter++;
            // Remove Selected Dates
            $(".date_remove-js").on('click', function () {
                $(this).parents(".selected_dates-content").hide();
            });

        } else {
            // $("#selected_dates-content-" + counter).fadeOut();

        }

    });




    function firstDayOffset(date) {
        return new Date(currentYear, currentMonth, 1).getDay();
    }

    function checkBookings() {
        if (bookedDates != null) {
            for (var i = 0; i < bookedDates.length; i++) {
                var inner = bookedDates[i];
                for (var j = 0; j < inner.length; j++) {
                    $("#" + inner[j]).removeClass("clickable").delay(400).addClass("booked");
                }
            }
        }
    }

    function checkSelected() {
        selectedDates = getDates(startDate, endDate);
        selectedDates = formatDates(selectedDates);

        if (selectedDates != null) {
            for (var i = 0; i < selectedDates.length; i++) {
                $("#" + selectedDates[i]).addClass("clicked");
            }
        }
    }

    function addBooking() {
        bookedDates.push(dateArray);
        clearCalender();
        displayCalender();
    }

    function formatDates(dates) {
        if (dates != null) {
            var newDateArray = [];
            for (var i = 0; i < dates.length; i++) {
                var date = "";
                date += dayNames[dates[i].getDay()] + "-";
                date += dates[i].getDate() + "-";
                date += monthNames[dates[i].getMonth()] + "-";
                date += dates[i].getFullYear();
                newDateArray.push(date);
            }
            return newDateArray;
        }
        return null;
    }

    function getDates(startDate, stopDate) {
        if (startDate != "" && endDate != "") {
            var dateArray = new Array();
            var currentDate = startDate;
            while (currentDate <= stopDate) {
                dateArray.push(new Date(currentDate))
                currentDate = currentDate.addDays(1);
            }
            return dateArray;
        }
        return null;
    }

    $(function () {
        displayCalender(currentMonth)
        $("#date").append(new Date);
    });

    $("#left").on("click", function () {
        if (currentMonth > 0)
            currentMonth -= 1;
        else {
            currentMonth = 11;
            currentYear -= 1;
        }
        displayCalender();
    });
    $("#right").on("click", function () {
        if (currentMonth < 11)
            currentMonth += 1;
        else {
            currentMonth = 0;
            currentYear += 1;
        }
        displayCalender();
    });

    $("#remove-booking").on("click", function () {
        if (selectedDates != null && selectedDates.length > 0) {
            bookingSteps += 1;

            if (bookingSteps == 1) {
                clearBooking();
                addBooking();
            }
        }
    });

    /**End Custum Calender**/

    /*Start Payment Form */
    $(".show_form-button").on('click', function () {
        $(".payment_form-js").slideToggle();
        $(this).hide();
    });
    /*End Payment Form */

    /*Start Registration Page*/
    //Close Popup By using Esk Keypord Button
    $(document).keydown(function (e) {
        if (e.keyCode == 27) {
            $(".modal-backdrop").fadeOut();
            $(".modal").removeClass("show");
        }
    });
    /*End Registration Page*/

    /*Start Course Profile Coach*/
    // $(".favorite_buttons li ").on('click', function() {
    //   $(this).toggleClass("active");
    // });
    /*End Course Profile Coach*/

    /*Start Recording Course Page */
    //=01=Toggle Video Description
    $(".description_toggle-js").on('click', function () {
        $(this).siblings(".video_description ").children(".paragraph_global").slideToggle();

    });

    // Diasbled video
    $(".video_list-Content.close_video .button_content button").prop("disabled", "true");
    /*End Recording Course Page */

    /*Start Webinar Details Page */
    $(".remember_me-content").on('click', function () {

        $(this).toggleClass("active");
    });
    /*End Webinar Details Page */


    /*Star tBlog Page*/
    //  Start Articl Slider
    $('.articl_slider-js').slick({
        dots: false,
        arrows: true,
        rtl: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });
    //  End Articl Slider
    /*End Blog Page*/


    /*Satrt Question Page*/
    // Toglle Active Class on Tab List
    $(".question_tab .tab_list li:first-child").addClass("active");
    $(".question_tab .tab_list li").on('click', function () {
        $(this).addClass("active").siblings().removeClass("active");

        //Hide All Content
        $(".all_tabs > div").hide();

        //Show Dive With This Link
        $('#' + $(this).data('id')).fadeIn();

    });


    // Open Answer 
    $(".question_details ul li .question_head ").on('click', function () {
        $(this).parent().toggleClass("open");
        $(this).parent().siblings().removeClass("open");
    });
    /*End Question Page*/


});
