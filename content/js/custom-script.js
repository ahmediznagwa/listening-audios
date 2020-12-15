$(document).ready(function () {
    var bodyDirection = getComputedStyle(
        document.getElementsByTagName("BODY")[0]
    ).direction;

    (function () {
        var backToTop = $("a.back-to-top");

        backToTop.on("click", function (event) {
            $("html, body").animate(
                {
                    scrollTop: 0,
                },
                300
            );

            event.preventDefault();
        });

        $(window).on("scroll", function () {
            var self = $(this),
                height = self.height() / 8,
                top = self.scrollTop();

            if (top > height) {
                if (!backToTop.hasClass("show")) {
                    backToTop.addClass("show");
                }
            } else {
                backToTop.removeClass("show");
            }
        });
    })();
    //Back to top button

    (function () {
        if ($("a.toggle-mobile-nav").length) {
            $("a.toggle-mobile-nav").on("click", function (event) {
                event.preventDefault();
                event.stopPropagation();

                $("body").toggleClass("show-mobile-nav");
                $("html").toggleClass("show-mobile-nav");
            });
        }
    })();
    //toggle Mobile Nav

    // (function() {
    //     if ($(".answers").length) {
    //         $(".type-answer").keypress(function(e) {
    //             if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) {
    //                 $(".type-answer")
    //                     .addClass("animated shake")
    //                     .parent()
    //                     .find(".error, .answer-unit")
    //                     .addClass("animated shake")
    //                     .css("display", "block");
    //                 setTimeout(function() {
    //                     $(".type-answer").removeClass("animated shake");
    //                     $(".error").removeClass("animated shake");
    //                     $(".answer-unit").removeClass("animated shake");
    //                 }, 750);
    //                 return false;
    //             } else {
    //                 $(".type-answer")
    //                     .parent()
    //                     .find(".error")
    //                     .css("display", "none");
    //             }
    //         });
    //         $(".submit-answer").on("click", function() {
    //             $(".type-answer")
    //                 .addClass("animated shake")
    //                 .parent()
    //                 .find(".error, .answer-unit")
    //                 .addClass("animated shake")
    //                 .css("display", "block");
    //             setTimeout(function() {
    //                 $(".type-answer").removeClass("animated shake");
    //                 $(".error").removeClass("animated shake");
    //                 $(".answer-unit").removeClass("animated shake");
    //             }, 750);
    //         });
    //     }
    // })();
    // Answer Button Shake

    (function () {
        if ($("div.videoButton").length) {
            $("div.videoButton a").magnificPopup({
                type: "iframe",
            });
        }
    })();
    //magnificPopup (iframe)

    (function () {
        if ($("div.photosGrid").length) {
            $("div.photosGrid a.galleryItem").magnificPopup({
                type: "image",
                gallery: {
                    enabled: true,
                },
            });
        }
    })();
    //magnificPopup (Photo Gallery)

    (function () {
        if ($("a.popup-link").length) {
            $("a.popup-link").magnificPopup({
                type: "inline",
                preloader: false,
                focus: "#name",

                removalDelay: 500, //delay removal by X to allow out-animation

                // When elemened is focused, some mobile browsers in some cases zoom in
                // It looks not nice, so we disable it:
                callbacks: {
                    open: function () {
                        if (
                            !navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)
                        ) {
                            $("html").css("margin-right", 17);
                        } else {
                            $("html").css("margin-right", 0);
                        }
                    },
                    close: function () {
                        $("html").css("padding-right", 0);
                    },
                    beforeOpen: function () {
                        if ($(window).width() < 700) {
                            this.st.focus = false;
                        } else {
                            this.st.focus = "#name";
                        }

                        this.st.mainClass = this.st.el.attr("data-effect");
                    },
                },

                midClick: true, // allow opening popup on middle mouse click. Always set
            });
        }
    })();
    //magnificPopup (Form)

    (function () {
        if ($("form.reportForm, form#organizeForm").length) {
            $("#datePicker").datetimepicker({
                timepicker: false,
                format: "d/m/Y",
            });

            $("#timePicker").datetimepicker({
                datepicker: false,
                format: "H:i",
            });
        }
    })();
    //Date Time Picker

    (function () {
        if ($("#ourLocation").length) {
            function initialize() {
                var mapCanvas = document.getElementById("ourLocation");
                var LatLng = {
                    lat: 27.281027,
                    lng: 33.773775,
                };
                var mapOptions = {
                    center: new google.maps.LatLng(27.281027, 33.773775),
                    zoom: 14,
                    mapTypeId: google.maps.MapTypeId.TERRAIN,
                    backgroundColor: "#DD4140",
                    scrollwheel: false,
                };
                var map = new google.maps.Map(mapCanvas, mapOptions);

                var marker = new google.maps.Marker({
                    position: LatLng,
                    map: map,
                    title: "HEPCA",
                    icon: "images/ui/Pin-Hepca.png",
                });
            }

            initialize();
        }
    })();
    //Contact Us map

    (function () {
        $("a.delete").on("click", function (event) {
            event.preventDefault();
            swal({
                title: "Error!",
                text: "Here's my error message!",
                type: "error",
                confirmButtonText: "Cool",
            });
        });
    })();
    //Sweet Alert Plugin

    (function () {
        if (window.location.hash != "") {
            var element = window.location.hash;

            if (element.indexOf("#_=_") >= 0) {
                return false;
            } else {
                if ($(element).length && $(element).hasClass("mfp-with-anim")) {
                    openMagnificPopup(window.location.hash, false);
                }
            }
        }
    })();
    //Open the popup if the hashtag is not empty and the popup exist

    (function () {
        $(".top-header .search > button").on("click", function (event) {
            event.stopPropagation();
            event.preventDefault();

            $(".top-header .logo").addClass("search-active");
            $(".top-header .search").addClass("active");
            $(".top-header .search input").focus();
        });

        $(".top-header .search").click(function (event) {
            event.stopPropagation();
        });

        $("body,html").on("click", function () {
            $(".top-header .search").removeClass("active");
            $(".top-header .logo").removeClass("search-active");
        });
    })();
    //Header Search

    (function () {
        $(".choose-country .dropdown > a").on("click", function (event) {
            event.stopPropagation();
            event.preventDefault();

            $(this).closest(".dropdown").toggleClass("open");

            $(this)
                .closest("div")
                .siblings(".dropdown")
                .removeClass("open")
                .find(" > a")
                .removeClass("active");

            $(".top-header .dropdown").removeClass("open");

            $(this).toggleClass("active");
        });

        $("body,html").click(function (e) {
            if (
                $(e.target).is(".dropdown-menu") ||
                $(e.target).is(".search-countries input") ||
                $(e.target).is(".search-countries")
            ) {
                e.preventDefault();
                return;
            }
            $(".choose-country .dropdown").removeClass("open");
            $(".choose-country .dropdown > a").removeClass("active");
        });

        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                $(".choose-country .dropdown").removeClass("open");
                $(".choose-country .dropdown > a").removeClass("active");
            }
        });

        $(".toggle-countries").on("click", function (e) {
            $(this).next(".dropdown-menu").find("input.form-control").focus();
        });
    })();
    //Message choose country dropdown list

    (function () {
        $(".top-header .dropdown > a").on("click", function (event) {
            event.stopPropagation();
            event.preventDefault();

            $(this).closest(".dropdown").toggleClass("open");
            $(this).closest("li").siblings(".dropdown").removeClass("open");

            $(".choose-country .dropdown").removeClass("open");
            $(".choose-country .dropdown > a").removeClass("active");
        });

        $(".change-settings .dropdown > a").on("click", function (event) {
            event.stopPropagation();
            event.preventDefault();

            $(this).closest(".dropdown").toggleClass("open");
            $(this).closest("li").siblings(".dropdown").removeClass("open");
        });

        $("body,html").click(function (e) {
            if (
                $(e.target).is(".dropdown-menu") ||
                $(e.target).is(".search-countries input") ||
                $(e.target).is(".search-countries")
            ) {
                e.preventDefault();
                return;
            }
            $(".top-header .dropdown").removeClass("open");
            $(".change-settings .dropdown").removeClass("open");
        });

        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                $(".top-header .dropdown").removeClass("open");
                $(".change-settings .dropdown").removeClass("open");
            }
        });

        $(".toggle-countries").on("click", function (e) {
            $(this).next(".dropdown-menu").find("input.form-control").focus();
        });
    })();
    //User actions dropdown menu

    (function () {
        $(".search-countries input").keyup(function () {
            // Set needded variables
            var input = $(this).val().toLowerCase();
            var inputLength = input.length;

            // Add custom search attribute and replace with lowercase text.
            $(".countries-list li a").each(function () {
                var name = $(this).text();
                var name = name.toLowerCase();
                $(this).attr("data-search", name);
            });

            //Show or Hide (No Rusults) div
            setTimeout(function () {
                if ($(".countries-list li:not(.no-results)").is(":visible")) {
                    $(".countries-list li.no-results").hide();
                } else {
                    $(".countries-list li.no-results").show();
                }
            }, 1);

            // Hide or show results
            $(".countries-list li").removeClass("show hide");
            $(
                '.countries-list li:not(.no-results) a[data-search*="' +
                    input +
                    '"]'
            )
                .closest("li")
                .addClass("show");
            $(
                '.countries-list li:not(.no_results) a:not([data-search*="' +
                    input +
                    '"])'
            )
                .closest("li")
                .addClass("hide");

            // Show all results if no search is done
            if (inputLength === 0) {
                $(".countries-list li").removeClass("show hide");
            }
        });
    })();
    //Search countries in the dropdown

    (function () {
        $(".main-nav .dashboard > a").on("click", function (event) {
            event.stopPropagation();
            event.preventDefault();

            $(".main-nav .dashboard").toggleClass("open");
        });

        $("body,html").click(function () {
            $(".main-nav .dashboard").removeClass("open");
        });

        $(document).keyup(function (e) {
            if (e.keyCode == 27) {
                $(".main-nav .dashboard").removeClass("open");
            }
        });
    })();
    //User dashboard dropdown menu

    (function () {
        if ($(".grade-alignments").length) {
            var figureHeight;
            var biggestHeight;
            var heightsArray = [];

            // if ($(window).width() > 375) {
            //     calculateFigureHeight();
            //     calculateImageHeight();
            //     getBiggestHeight();
            //     adjustTitleMargin();
            // }

            function calculateFigureHeight() {
                figureHeight =
                    $("ul.alignments li > a").height() -
                    10 -
                    $("ul.alignments h4").height();
            }

            function calculateImageHeight() {
                $(".grade-alignments ul.alignments figure img").each(
                    function () {
                        heightsArray.push($(this).height());
                    }
                );

                console.log(heightsArray);
            }

            function getBiggestHeight() {
                biggestHeight = Math.ceil(Math.max.apply(null, heightsArray));
                console.log(biggestHeight);
            }

            function adjustTitleMargin() {
                if (biggestHeight > figureHeight) {
                    var margin = 40 + (biggestHeight - figureHeight);
                    $(".grade-alignments .section-title").css(
                        "margin-bottom",
                        margin + "px"
                    );
                }
            }
        }
    })();
    //Adjust alignment height issue

    (function () {
        if ($(".alert").length) {
            $(".alert .close").click(function () {
                // $(this)
                //     .closest(".alert")
                //     .removeClass("visible");

                $(this).closest(".alert").slideUp(150);
            });
        }

        // $(".right").on("click", function(e) {
        //     e.preventDefault();
        //     $(".alert").slideDown(150, function() {
        //         if ($(this).is(":visible")) {
        //             $(this).css("display", "flex");
        //         }
        //     });
        // });
    })();
    //Hide alerts

    (function () {
        if ($(".senior-sales-landing").length) {
            $(".apply-now").on("click", function (e) {
                e.preventDefault();
                console.log("test");
                $([document.documentElement, document.body]).animate(
                    {
                        scrollTop: $(".page-header").offset().top - 100,
                    },
                    700
                );
            });
        }
    })();

    (function () {
        if ($(".input-file").length) {
            $(".input-file").each(function () {
                var label = $(this).find("label");
                var labelVal = label.find("span").html();
                $(this)
                    .find('input[type="file"]')
                    .on("change", function (e) {
                        console.log("test");
                        if (e.target.value) {
                            label
                                .find("span")
                                .html(e.target.value.split("\\").pop());
                        }
                    });
            });
        }
    })();

    // (function() {
    //     if ($(".practice-page").length) {
    //         var correctPopup = $("#correct-popup");
    //         var incorrectPopup = $("#incorrect-popup");

    //         $(".submit-answer").on("click", function(event) {
    //             event.preventDefault();

    //             openMagnificPopup(correctPopup, false);
    //             $(".correct-sound")[0].play();

    //             openMagnificPopup(incorrectPopup, false);
    //             $(".incorrect-sound")[0].play();
    //         });
    //     }
    // })();
    // Fire Answer popup with sound

    // (function() {
    //     if ($(".error-note").length) {
    //         $(".submit-answer").on("click", function(event) {
    //             event.preventDefault();
    //             $(".error-note").slideDown(300);
    //         });
    //     }
    // })();
    // Open error-note on submit

    (function () {
        if ($(".restricted-video").length) {
            $(".video-player.restricted figure").on("click", function (event) {
                event.preventDefault();

                openMagnificPopup(
                    ".restricted-video",
                    false,
                    ".restricted-video"
                );
            });
        }
    })();
    // Fire Restricted Videos Popups

    (function () {
        if ($(".close-popup").length) {
            $(".close-popup").on("click", function (event) {
                event.preventDefault();
                $.magnificPopup.close();
                if (!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
                    setTimeout(() => {
                        $("html").css("margin-right", 0);
                    }, 500);
                }
            });
        }
    })();
    //Close Popup

    (function () {
        if ($("#data-chart").length) {
            var breakPoint = true;
            var correct = parseInt($("li.correct .num").text());
            var incorrect = parseInt($("li.incorrect .num").text());
            var unanswered = parseInt($("li.skipped .num").text());

            var canvas = document.getElementById("data-chart");

            var config = {
                type: "doughnut",
                data: {
                    labels: ["Correct", "Incorrect", "Unanswered"],
                    datasets: [
                        {
                            data: [correct, incorrect, unanswered],
                            backgroundColor: [
                                "rgba(119, 180, 23, 1)",
                                "rgba(240, 65, 36, 1)",
                                "rgba(200, 200, 200, 1)",
                            ],
                            borderWidth: 0,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutoutPercentage: 80,
                    legend: {
                        display: false,
                    },
                    animation: {
                        onComplete: function (animation) {
                            $(
                                ".chart-wrapper .total-questions .num, .chart-wrapper .total-questions .title"
                            ).addClass("animate");
                        },
                    },
                    hover: {
                        mode: null,
                    },
                    tooltips: {
                        enabled: false,
                    },
                },
            };

            var visualChart = new Chart(canvas, config);
        }
    })();
    //Report Chart using Chart.js

    (function () {
        if ($("#questions-chart").length) {
            var breakPoint = true;
            var correct = parseInt($(".all-questions li.correct .num").text());
            var incorrect = parseInt(
                $(".all-questions li.incorrect .num").text()
            );
            var unanswered = parseInt(
                $(".all-questions li.skipped .num").text()
            );

            var canvas = document.getElementById("questions-chart");

            var config = {
                type: "doughnut",
                data: {
                    labels: ["Correct", "Incorrect", "Unanswered"],
                    datasets: [
                        {
                            data: [correct, incorrect, unanswered],
                            backgroundColor: [
                                "rgba(119, 180, 23, 1)",
                                "rgba(240, 65, 36, 1)",
                                "rgba(200, 200, 200, 1)",
                            ],
                            borderWidth: 0,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutoutPercentage: 80,
                    legend: {
                        display: false,
                    },
                    animation: {
                        onComplete: function (animation) {
                            $(".chart-wrapper .total-number .num").addClass(
                                "animate"
                            );
                        },
                    },
                    hover: {
                        mode: null,
                    },
                    tooltips: {
                        enabled: false,
                    },
                },
            };

            var visualChart = new Chart(canvas, config);
        }
    })();
    //All Questions Chart using Chart.js

    (function () {
        if ($("#worksheets-chart").length) {
            var breakPoint = true;
            var notStarted = parseInt(
                $(".worksheets li.not-started .num").text()
            );
            var inProgress = parseInt(
                $(".worksheets li.in-progress .num").text()
            );
            var closed = parseInt($(".worksheets li.closed .num").text());

            var canvas = document.getElementById("worksheets-chart");

            var config = {
                type: "doughnut",
                data: {
                    labels: ["Not Started", "In Progress", "Closed"],
                    datasets: [
                        {
                            data: [notStarted, inProgress, closed],
                            backgroundColor: [
                                "rgba(200, 200, 200, 1)",
                                "rgba(245, 170, 0, 1)",
                                "rgba(119, 180, 23, 1)",
                            ],
                            borderWidth: 0,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutoutPercentage: 80,
                    legend: {
                        display: false,
                    },
                    animation: {
                        onComplete: function (animation) {
                            $(".chart-wrapper .total-number .num").addClass(
                                "animate"
                            );
                        },
                    },
                    hover: {
                        mode: null,
                    },
                    tooltips: {
                        enabled: false,
                    },
                },
            };

            var visualChart = new Chart(canvas, config);
        }
    })();
    //Worksheets Chart using Chart.js

    (function () {
        if ($("#assessments-chart").length) {
            var breakPoint = true;

            var notStarted = parseInt(
                $(".assessments li.not-started .num").text()
            );
            var inProgress = parseInt(
                $(".assessments li.in-progress .num").text()
            );
            var closed = parseInt($(".assessments li.closed .num").text());

            var canvas = document.getElementById("assessments-chart");

            var config = {
                type: "doughnut",
                data: {
                    labels: ["Not Started", "In Progress", "Closed"],
                    datasets: [
                        {
                            data: [notStarted, inProgress, closed],
                            backgroundColor: [
                                "rgba(200, 200, 200, 1)",
                                "rgba(245, 170, 0, 1)",
                                "rgba(119, 180, 23, 1)",
                            ],
                            borderWidth: 0,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutoutPercentage: 80,
                    legend: {
                        display: false,
                    },
                    animation: {
                        onComplete: function (animation) {
                            $(".chart-wrapper .total-number .num").addClass(
                                "animate"
                            );
                        },
                    },
                    hover: {
                        mode: null,
                    },
                    tooltips: {
                        enabled: false,
                    },
                },
            };

            var visualChart = new Chart(canvas, config);
        }
    })();
    //Assessments Chart using Chart.js

    // (function() {
    //     if ($(".assessment-chart").length) {
    //         Chart.defaults.global.legend.display = false;
    //         $(".assessmentChart").each(function(index, element) {
    //             var ctx = element.getContext("2d");
    //             // $(".myChart").attr("height", dataSet.length * 20);
    //             // Colors
    //             const red = "#e74c3c",
    //                 green = "#78b517",
    //                 grey = "#c8c8c8",
    //                 blue = "#026bb0",
    //                 darkRed = "#cf2a19",
    //                 darkGreen = "#6ca214",
    //                 darkGrey = "#b4b4b4",
    //                 darkBlue = "#01609e";

    //             // Data Array

    //             var data;

    //             if ($(element).data("type") == "horizontalBar") {
    //                 data = [
    //                     {
    //                         type: "horizontalBar",
    //                         data: {
    //                             labels: ["Opened", "In Progress", "Closed"],
    //                             datasets: [
    //                                 {
    //                                     backgroundColor: [green, blue, grey],
    //                                     hoverBackgroundColor: [
    //                                         darkGreen,
    //                                         darkBlue,
    //                                         darkGrey
    //                                     ],
    //                                     borderWidth: 0,
    //                                     data: [
    //                                         $(element).data("opened"),
    //                                         $(element).data("inprogress"),
    //                                         $(element).data("closed")
    //                                     ]
    //                                 }
    //                             ]
    //                         },
    //                         options: {
    //                             responsive: true,
    //                             maintainAspectRatio: false,
    //                             scales: {
    //                                 xAxes: [
    //                                     {
    //                                         display: true,
    //                                         ticks: {
    //                                             display: false,
    //                                             beginAtZero: true,
    //                                             max: $(element).data("total")
    //                                         }
    //                                     }
    //                                 ],
    //                                 yAxes: [
    //                                     {
    //                                         ticks: {
    //                                             display: false
    //                                         }
    //                                     }
    //                                 ]
    //                             },
    //                             tooltips: {
    //                                 yAlign: "top",
    //                                 xAlign: "center",
    //                                 callbacks: {
    //                                     title: function() {},
    //                                     label: function(tooltipItem, data) {
    //                                         return (
    //                                             " " +
    //                                             tooltipItem.yLabel +
    //                                             ": " +
    //                                             tooltipItem.xLabel
    //                                         );
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 ];
    //             } else if ($(element).data("type") == "doughnut") {
    //                 data = [
    //                     {
    //                         type: "doughnut",
    //                         data: {
    //                             labels: ["Correct", "Incorrect", "Unanswered"],
    //                             datasets: [
    //                                 {
    //                                     backgroundColor: [green, red, grey],
    //                                     hoverBackgroundColor: [
    //                                         darkGreen,
    //                                         darkRed,
    //                                         darkGrey
    //                                     ],
    //                                     borderWidth: 0,
    //                                     data: [
    //                                         $(element).data("correct"),
    //                                         $(element).data("incorrect"),
    //                                         $(element).data("unanswered")
    //                                     ]
    //                                 }
    //                             ]
    //                         },
    //                         options: {
    //                             responsive: true,
    //                             maintainAspectRatio: false,
    // layout: {
    //                                 padding: {
    //                                     top:15
    //                                 }
    //                             },
    //                             tooltips: {
    //                                 yAlign: "bottom",
    //                                 xAlign: "center",
    //                                 callbacks: {
    //                                     title: function() {},
    //                                     label: function(tooltipItem, data) {
    //                                         var indice = tooltipItem.index;
    //                                         return (
    //                                             " " +
    //                                             data.labels[indice] +
    //                                             ": " +
    //                                             data.datasets[0].data[indice]
    //                                         );
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 ];
    //             }

    //             // create new Chart
    //             var chart = new Chart(ctx, data[0]);
    //         });
    //     }
    // })();
    // // Student Dashboard Assessment Charts

    // (function() {
    //     if ($(".worksheet-chart").length) {
    //         Chart.defaults.global.legend.display = false;
    //         $(".worksheetChart").each(function(index, element) {
    //             var ctx = element.getContext("2d");
    //             // $(".myChart").attr("height", dataSet.length * 20);
    //             // Colors
    //             const red = "#e74c3c",
    //                 green = "#78b517",
    //                 grey = "#c8c8c8",
    //                 blue = "#026bb0",
    //                 darkRed = "#cf2a19",
    //                 darkGreen = "#6ca214",
    //                 darkGrey = "#b4b4b4",
    //                 darkBlue = "#01609e";

    //             // Data Array

    //             var data;

    //             if ($(element).data("type") == "horizontalBar") {
    //                 data = [
    //                     {
    //                         type: "horizontalBar",
    //                         data: {
    //                             labels: ["Completed", "Uncompleted"],
    //                             datasets: [
    //                                 {
    //                                     backgroundColor: [green, grey],
    //                                     hoverBackgroundColor: [
    //                                         darkGreen,
    //                                         darkGrey
    //                                     ],
    //                                     borderWidth: 0,
    //                                     data: [
    //                                         $(element).data("completed"),
    //                                         $(element).data("uncompleted")
    //                                     ]
    //                                 }
    //                             ]
    //                         },
    //                         options: {
    //                             responsive: true,
    //                             maintainAspectRatio: false,
    //                             scales: {
    //                                 xAxes: [
    //                                     {
    //                                         display: true,
    //                                         ticks: {
    //                                             display: false,
    //                                             beginAtZero: true,
    //                                             max: $(element).data("total")
    //                                         }
    //                                     }
    //                                 ],
    //                                 yAxes: [
    //                                     {
    //                                         ticks: {
    //                                             display: false
    //                                         }
    //                                     }
    //                                 ]
    //                             },
    //                             tooltips: {
    //                                 yAlign: "top",
    //                                 xAlign: "center",
    //                                 callbacks: {
    //                                     title: function() {},
    //                                     label: function(tooltipItem, data) {
    //                                         return (
    //                                             " " +
    //                                             tooltipItem.yLabel +
    //                                             ": " +
    //                                             tooltipItem.xLabel
    //                                         );
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 ];
    //             } else if ($(element).data("type") == "doughnut") {
    //                 data = [
    //                     {
    //                         type: "doughnut",
    //                         data: {
    //                             labels: ["Correct", "Incorrect", "Unanswered"],
    //                             datasets: [
    //                                 {
    //                                     backgroundColor: [green, red, grey],
    //                                     hoverBackgroundColor: [
    //                                         darkGreen,
    //                                         darkRed,
    //                                         darkGrey
    //                                     ],
    //                                     borderWidth: 0,
    //                                     data: [
    //                                         $(element).data("correct"),
    //                                         $(element).data("incorrect"),
    //                                         $(element).data("unanswered")
    //                                     ]
    //                                 }
    //                             ]
    //                         },
    //                         options: {
    //                             responsive: true,
    //                             maintainAspectRatio: false,
    // layout: {
    //                                 padding: {
    //                                     top:15
    //                                 }
    //                             },
    //                             tooltips: {
    //                                 yAlign: "bottom",
    //                                 xAlign: "center",
    //                                 callbacks: {
    //                                     title: function() {},
    //                                     label: function(tooltipItem, data) {
    //                                         var indice = tooltipItem.index;
    //                                         return (
    //                                             " " +
    //                                             data.labels[indice] +
    //                                             ": " +
    //                                             data.datasets[0].data[indice]
    //                                         );
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 ];
    //             }

    //             // create new Chart
    //             var chart = new Chart(ctx, data[0]);
    //         });
    //     }
    // })();
    // // Student Dashboard worksheet Charts

    // (function() {
    //     if ($(".student-assessments-reports-chart").length) {
    //         Chart.defaults.global.legend.display = false;
    //         $(".myChart").each(function(index, element) {
    //             var ctx = element.getContext("2d");

    //             // Colors
    //             const red = "#e74c3c",
    //                 green = "#78b517",
    //                 grey = "#c8c8c8",
    //                 darkRed = "#cf2a19",
    //                 darkGreen = "#6ca214",
    //                 darkGrey = "#b4b4b4";

    //             // Data Array

    //             var data;

    //             if ($(element).data("type") == "horizontalBar") {
    //                 data = [
    //                     {
    //                         type: "horizontalBar",
    //                         data: {
    //                             labels: ["Correct", "Incorrect", "Unanswered"],
    //                             datasets: [
    //                                 {
    //                                     backgroundColor: [green, red, grey],
    //                                     hoverBackgroundColor: [
    //                                         darkGreen,
    //                                         darkRed,
    //                                         darkGrey
    //                                     ],
    //                                     borderWidth: 0,
    //                                     data: [
    //                                         $(element).data("correct"),
    //                                         $(element).data("incorrect"),
    //                                         $(element).data("unanswered")
    //                                     ]
    //                                 }
    //                             ]
    //                         },
    //                         options: {
    //                             responsive: true,
    //                             maintainAspectRatio: false,
    //                             scales: {
    //                                 xAxes: [
    //                                     {
    //                                         display: true,
    //                                         ticks: {
    //                                             display: false,
    //                                             beginAtZero: true,
    //                                             max: $(element).data("total")
    //                                         }
    //                                     }
    //                                 ],
    //                                 yAxes: [
    //                                     {
    //                                         ticks: {
    //                                             display: false
    //                                         }
    //                                     }
    //                                 ]
    //                             },
    //                             tooltips: {
    //                                 yAlign: "top",
    //                                 xAlign: "center",
    //                                 callbacks: {
    //                                     title: function() {},
    //                                     label: function(tooltipItem, data) {
    //                                         return (
    //                                             " " +
    //                                             tooltipItem.yLabel +
    //                                             ": " +
    //                                             tooltipItem.xLabel
    //                                         );
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 ];
    //             } else if ($(element).data("type") == "doughnut") {
    //                 data = [
    //                     {
    //                         type: "doughnut",
    //                         data: {
    //                             labels: ["Correct", "Incorrect", "Unanswered"],
    //                             datasets: [
    //                                 {
    //                                     backgroundColor: [green, red, grey],
    //                                     hoverBackgroundColor: [
    //                                         darkGreen,
    //                                         darkRed,
    //                                         darkGrey
    //                                     ],
    //                                     borderWidth: 0,
    //                                     data: [
    //                                         $(element).data("correct"),
    //                                         $(element).data("incorrect"),
    //                                         $(element).data("unanswered")
    //                                     ]
    //                                 }
    //                             ]
    //                         },
    //                         options: {
    //                             responsive: true,
    //                             maintainAspectRatio: false,
    // layout: {
    //                                 padding: {
    //                                     top:15
    //                                 }
    //                             },
    //                             tooltips: {
    //                                 yAlign: "bottom",
    //                                 xAlign: "center",
    //                                 callbacks: {
    //                                     title: function() {},
    //                                     label: function(tooltipItem, data) {
    //                                         var indice = tooltipItem.index;
    //                                         return (
    //                                             " " +
    //                                             data.labels[indice] +
    //                                             ": " +
    //                                             data.datasets[0].data[indice]
    //                                         );
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 ];
    //             }

    //             // create new Chart
    //             var chart = new Chart(ctx, data[0]);
    //         });
    //         $(".myPerformanceChart").each(function(index, element) {
    //             var ctx = element.getContext("2d");

    //             // Colors
    //             const mathematics = "#026bb0",
    //                 chemistry = "#78b517",
    //                 physics = "#e51d74",
    //                 biology = "#f5aa00",
    //                 science = "#72429a";

    //             var datasetArray = $(element).data("dataset");

    //             // Assessment Title
    //             var tooltipsLabel1 = $(element).data("assessment1");
    //             var tooltipsLabel2 = $(element).data("assessment2");
    //             var tooltipsLabel3 = $(element).data("assessment3");
    //             var tooltipsLabel4 = $(element).data("assessment4");

    //             // // colorDetector
    //             // function colorDetector() {
    //             //     var subject = $(element).data("subject");
    //             //     if (subject == "mathematics") {
    //             //         return mathematics;
    //             //     } else if (subject == "chemistry") {
    //             //         return chemistry;
    //             //     } else if (subject == "physics") {
    //             //         return physics;
    //             //     } else if (subject == "biology") {
    //             //         return biology;
    //             //     } else if (subject == "science") {
    //             //         return science;
    //             //     }
    //             // }

    //             var data;
    //             var timeFormat = "DD/MM/YYYY";

    //             if ($(element).data("type") == "line") {
    //                 data = [
    //                     {
    //                         type: "line",
    //                         data: {
    //                             datasets: [
    //                                 {
    //                                     data: $(element).data("dataset1"),
    //                                     fill: false,
    //                                     borderColor: mathematics,
    //                                     backgroundColor: mathematics
    //                                 },
    //                                 {
    //                                     data: $(element).data("dataset2"),
    //                                     fill: false,
    //                                     borderColor: chemistry,
    //                                     backgroundColor: chemistry
    //                                 },
    //                                 {
    //                                     data: $(element).data("dataset3"),
    //                                     fill: false,
    //                                     borderColor: physics,
    //                                     backgroundColor: physics
    //                                 },
    //                                 {
    //                                     data: $(element).data("dataset4"),
    //                                     fill: false,
    //                                     borderColor: biology,
    //                                     backgroundColor: biology
    //                                 }
    //                             ]
    //                         },
    //                         options: {
    //                             responsive: true,
    //                             maintainAspectRatio: true,
    //                             tooltips: {
    //                                 displayColors: false,
    //                                 callbacks: {
    //                                     beforeTitle: function(
    //                                         tooltipItem,
    //                                         data
    //                                     ) {
    //                                         if (
    //                                             tooltipItem[0].datasetIndex ===
    //                                             0
    //                                         ) {
    //                                             return tooltipsLabel1[
    //                                                 tooltipItem[0].index
    //                                             ];
    //                                         } else if (
    //                                             tooltipItem[0].datasetIndex ===
    //                                             1
    //                                         ) {
    //                                             return tooltipsLabel2[
    //                                                 tooltipItem[0].index
    //                                             ];
    //                                         } else if (
    //                                             tooltipItem[0].datasetIndex ===
    //                                             2
    //                                         ) {
    //                                             return tooltipsLabel3[
    //                                                 tooltipItem[0].index
    //                                             ];
    //                                         } else if (
    //                                             tooltipItem[0].datasetIndex ===
    //                                             3
    //                                         ) {
    //                                             return tooltipsLabel4[
    //                                                 tooltipItem[0].index
    //                                             ];
    //                                         }
    //                                     },
    //                                     label: function(tooltipItem, data) {
    //                                         return (
    //                                             "Average Score: " +
    //                                             tooltipItem.yLabel +
    //                                             "%"
    //                                         );
    //                                     }
    //                                 }
    //                             },
    //                             scales: {
    //                                 yAxes: [
    //                                     {
    //                                         ticks: {
    //                                             min: 0,
    //                                             max: 100
    //                                         },
    //                                         scaleLabel: {
    //                                             display: true
    //                                         }
    //                                     }
    //                                 ],
    //                                 xAxes: [
    //                                     {
    //                                         type: "time",
    //                                         time: {
    //                                             format: timeFormat,
    //                                             tooltipFormat: "YYYY-MM-DD",
    //                                             unit: "month"
    //                                         },
    //                                         scaleLabel: {
    //                                             display: true
    //                                         }
    //                                     }
    //                                 ]
    //                             }
    //                         }
    //                     }
    //                 ];
    //             }

    //             // create new Chart
    //             var chart = new Chart(ctx, data[0]);
    //         });
    //     }
    // })();
    // // Assessment Report Charts page

    // (function() {
    //     if ($(".student-lessons-reports-chart").length) {
    //         Chart.defaults.global.legend.display = false;
    //         $(".myChart").each(function(index, element) {
    //             var ctx = element.getContext("2d");

    //             // Colors
    //             const red = "#e74c3c",
    //                 green = "#78b517",
    //                 grey = "#c8c8c8",
    //                 darkRed = "#cf2a19",
    //                 darkGreen = "#6ca214",
    //                 darkGrey = "#b4b4b4";

    //             // Data Array

    //             var data;

    //             if ($(element).data("type") == "horizontalBar") {
    //                 data = [
    //                     {
    //                         type: "horizontalBar",
    //                         data: {
    //                             labels: ["Correct", "Incorrect", "Unanswered"],
    //                             datasets: [
    //                                 {
    //                                     backgroundColor: [green, red, grey],
    //                                     hoverBackgroundColor: [
    //                                         darkGreen,
    //                                         darkRed,
    //                                         darkGrey
    //                                     ],
    //                                     borderWidth: 0,
    //                                     data: [
    //                                         $(element).data("correct"),
    //                                         $(element).data("incorrect"),
    //                                         $(element).data("unanswered")
    //                                     ]
    //                                 }
    //                             ]
    //                         },
    //                         options: {
    //                             responsive: true,
    //                             maintainAspectRatio: false,
    //                             scales: {
    //                                 xAxes: [
    //                                     {
    //                                         display: true,
    //                                         ticks: {
    //                                             display: false,
    //                                             beginAtZero: true,
    //                                             max: $(element).data("total")
    //                                         }
    //                                     }
    //                                 ],
    //                                 yAxes: [
    //                                     {
    //                                         ticks: {
    //                                             display: false
    //                                         }
    //                                     }
    //                                 ]
    //                             },
    //                             tooltips: {
    //                                 yAlign: "top",
    //                                 xAlign: "center",
    //                                 callbacks: {
    //                                     title: function() {},
    //                                     label: function(tooltipItem, data) {
    //                                         return (
    //                                             " " +
    //                                             tooltipItem.yLabel +
    //                                             ": " +
    //                                             tooltipItem.xLabel
    //                                         );
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 ];
    //             } else if ($(element).data("type") == "doughnut") {
    //                 data = [
    //                     {
    //                         type: "doughnut",
    //                         data: {
    //                             labels: ["Correct", "Incorrect", "Unanswered"],
    //                             datasets: [
    //                                 {
    //                                     backgroundColor: [green, red, grey],
    //                                     hoverBackgroundColor: [
    //                                         darkGreen,
    //                                         darkRed,
    //                                         darkGrey
    //                                     ],
    //                                     borderWidth: 0,
    //                                     data: [
    //                                         $(element).data("correct"),
    //                                         $(element).data("incorrect"),
    //                                         $(element).data("unanswered")
    //                                     ]
    //                                 }
    //                             ]
    //                         },
    //                         options: {
    //                             responsive: true,
    //                             maintainAspectRatio: false,
    // layout: {
    //                                 padding: {
    //                                     top:15
    //                                 }
    //                             },
    //                             tooltips: {
    //                                 yAlign: "bottom",
    //                                 xAlign: "center",
    //                                 callbacks: {
    //                                     title: function() {},
    //                                     label: function(tooltipItem, data) {
    //                                         var indice = tooltipItem.index;
    //                                         return (
    //                                             " " +
    //                                             data.labels[indice] +
    //                                             ": " +
    //                                             data.datasets[0].data[indice]
    //                                         );
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 ];
    //             }

    //             // create new Chart
    //             var chart = new Chart(ctx, data[0]);
    //         });
    //         $(".myPerformanceChart").each(function(index, element) {
    //             var ctx = element.getContext("2d");

    //             // Colors
    //             const mathematics = "#026bb0",
    //                 chemistry = "#78b517",
    //                 physics = "#e51d74",
    //                 biology = "#f5aa00",
    //                 science = "#72429a";

    //             var datasetArray = $(element).data("dataset");

    //             // Assessment Title
    //             var tooltipsLabel1 = $(element).data("assessment1");
    //             var tooltipsLabel2 = $(element).data("assessment2");
    //             var tooltipsLabel3 = $(element).data("assessment3");
    //             var tooltipsLabel4 = $(element).data("assessment4");

    //             // colorDetector
    //             // function colorDetector() {
    //             //     var subject = $(element).data("subject");
    //             //     if (subject == "mathematics") {
    //             //         return mathematics;
    //             //     } else if (subject == "chemistry") {
    //             //         return chemistry;
    //             //     } else if (subject == "physics") {
    //             //         return physics;
    //             //     } else if (subject == "biology") {
    //             //         return biology;
    //             //     } else if (subject == "science") {
    //             //         return science;
    //             //     }
    //             // }

    //             var data;
    //             var timeFormat = "DD/MM/YYYY";

    //             if ($(element).data("type") == "line") {
    //                 data = [
    //                     {
    //                         type: "line",
    //                         data: {
    //                             datasets: [
    //                                 {
    //                                     data: $(element).data("dataset1"),
    //                                     fill: false,
    //                                     borderColor: mathematics,
    //                                     backgroundColor: mathematics
    //                                 },
    //                                 {
    //                                     data: $(element).data("dataset2"),
    //                                     fill: false,
    //                                     borderColor: chemistry,
    //                                     backgroundColor: chemistry
    //                                 },
    //                                 {
    //                                     data: $(element).data("dataset3"),
    //                                     fill: false,
    //                                     borderColor: physics,
    //                                     backgroundColor: physics
    //                                 },
    //                                 {
    //                                     data: $(element).data("dataset4"),
    //                                     fill: false,
    //                                     borderColor: science,
    //                                     backgroundColor: science
    //                                 }
    //                             ]
    //                         },
    //                         options: {
    //                             responsive: true,
    //                             maintainAspectRatio: true,
    //                             tooltips: {
    //                                 displayColors: false,
    //                                 callbacks: {
    //                                     beforeTitle: function(
    //                                         tooltipItem,
    //                                         data
    //                                     ) {
    //                                         if (
    //                                             tooltipItem[0].datasetIndex ===
    //                                             0
    //                                         ) {
    //                                             return tooltipsLabel1[
    //                                                 tooltipItem[0].index
    //                                             ];
    //                                         } else if (
    //                                             tooltipItem[0].datasetIndex ===
    //                                             1
    //                                         ) {
    //                                             return tooltipsLabel2[
    //                                                 tooltipItem[0].index
    //                                             ];
    //                                         } else if (
    //                                             tooltipItem[0].datasetIndex ===
    //                                             2
    //                                         ) {
    //                                             return tooltipsLabel3[
    //                                                 tooltipItem[0].index
    //                                             ];
    //                                         } else if (
    //                                             tooltipItem[0].datasetIndex ===
    //                                             3
    //                                         ) {
    //                                             return tooltipsLabel4[
    //                                                 tooltipItem[0].index
    //                                             ];
    //                                         }
    //                                     },
    //                                     label: function(tooltipItem, data) {
    //                                         return (
    //                                             "Average Score: " +
    //                                             tooltipItem.yLabel +
    //                                             "%"
    //                                         );
    //                                     }
    //                                 }
    //                             },
    //                             scales: {
    //                                 yAxes: [
    //                                     {
    //                                         ticks: {
    //                                             min: 0,
    //                                             max: 100
    //                                         },
    //                                         scaleLabel: {
    //                                             display: true
    //                                         }
    //                                     }
    //                                 ],
    //                                 xAxes: [
    //                                     {
    //                                         type: "time",
    //                                         time: {
    //                                             format: timeFormat,
    //                                             tooltipFormat: "YYYY-MM-DD",
    //                                             unit: "month"
    //                                         },
    //                                         scaleLabel: {
    //                                             display: true
    //                                         }
    //                                     }
    //                                 ]
    //                             }
    //                         }
    //                     }
    //                 ];
    //             }

    //             // create new Chart
    //             var chart = new Chart(ctx, data[0]);
    //         });
    //     }
    // })();
    // // Lessons Report Charts page

    //GDPR popup
    // if ($("#gdpr-popup").length) {
    //     openMagnificPopup("#gdpr-popup", false, "#gdpr-popup", false, false);
    // }

    //Time Out popup
    // if ($("#timeout-popup").length) {
    //     openMagnificPopup(
    //         "#timeout-popup",
    //         false,
    //         "#timeout-popup",
    //         false,
    //         false
    //     );
    // }

    //Session ended popup
    // if ($("#session-ended-popup").length) {
    //     openMagnificPopup(
    //         "#session-ended-popup",
    //         false,
    //         "#session-ended-popup",
    //         false,
    //         false
    //     );
    // }

    //Warning popup
    // if ($("#warning-popup").length) {
    //     openMagnificPopup("#warning-popup", false, "#warning-popup");
    // }

    //Start Quiz popup
    // if ($("#quiz-popup").length) {
    //     openMagnificPopup("#quiz-popup", false, "#quiz-popup");
    // }

    //Bett Event popup
    if ($("#bett-popup").length) {
        openMagnificPopup("#bett-popup", false, "#bett-popup", false, false);
    }

    // Choose From Library popup
    if ($("#choose-from-library-popup").length) {
        $(".choose-from-library-popup").on("click", function (event) {
            event.preventDefault();
            openMagnificPopup(
                "#choose-from-library-popup",
                false,
                "#choose-from-library-popup"
            );
        });
    }

    if ($("a.open-thumbnail-popup").length) {
        $("a.open-thumbnail-popup").magnificPopup({
            type: "image",
            gallery: {
                enabled: false,
            },
            mainClass: "image-thumbnail-popup",
            callbacks: {
                open: function () {
                    if (!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
                        $("html").css("margin-right", 17);
                    } else {
                        $("html").css("margin-right", 0);
                    }
                    $("body").removeClass("mfp-zoom-out-cur");
                },
            },
        });
    }

    (function () {
        if ($(" .banner").length) {
            $(" .banner")
                .find(".close")
                .on("click", function (e) {
                    e.preventDefault();
                    $(this).parent().parent().slideUp(200);
                });
        }
    })();
    // Nagwa Study iPhone Carousel

    (function () {
        if ($(".post-area").length) {
            $(".share").on("click", function (e) {
                e.stopPropagation();
                $(".post-area").addClass("active");
                $(".post-area textarea").focus();
            });

            $(".post-area").on("click", function (e) {
                e.stopPropagation();
            });

            $(document).click(function () {
                $(".post-area").removeClass("active");
            });
        }
    })();

    // Wall Post Area

    (function () {
        if ($(".post-card").length) {
            $(".post-actions-btn").each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    e.stopPropagation();
                    if ($(".dropdown").hasClass("opened")) {
                        $(".dropdown").removeClass("opened");
                    }
                    $(this).next(".dropdown").toggleClass("opened");
                });
            });
            $("body").on("click", function (event) {
                if (!$(event.target).is(".post-actions-btn opened")) {
                    $(".post-actions-btn ")
                        .next(".dropdown")
                        .removeClass("opened");
                }
            });
            $(document).bind("keydown", function (e) {
                if (e.which == 27) {
                    $(".post-actions-btn")
                        .next(".dropdown")
                        .removeClass("opened");
                }
            });
        }
    })();
    // Wall Dropdown

    (function () {
        if ($(".post-card").length) {
            $(".edit-post").each(function () {
                $(this).on("click", function (e) {
                    e.preventDefault();
                    var postContent = $(this)
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .find(".post-body .post-content")
                        .text();

                    postContent = postContent.replace(/\s\s+/g, "");
                    $(this)
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .find(".post-body .post-content")
                        .remove();
                    $(this)
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .parent()
                        .find(".post-body .edit")
                        .show()
                        .find("textarea")
                        .val(postContent)
                        .focus();
                });
            });
        }
    })();
    // Wall Edit Post

    (function () {
        if ($(".wall .tabs").length) {
            $(".tabs .files-tab").on("click", function (e) {
                e.preventDefault();
                $(".files-tab")
                    .parent()
                    .addClass("active")
                    .parent()
                    .find(".messages-tab")
                    .parent()
                    .removeClass("active")
                    .parent()
                    .parent()
                    .parent()
                    .find(".files")
                    .addClass("active-tab")
                    .parent()
                    .parent()
                    .parent()
                    .find(".posts")
                    .removeClass("active-tab");
            });

            $(".tabs .messages-tab").on("click", function (e) {
                e.preventDefault();
                $(".messages-tab")
                    .parent()
                    .addClass("active")
                    .parent()
                    .find(".files-tab")
                    .parent()
                    .removeClass("active")
                    .parent()
                    .parent()
                    .parent()
                    .find(".posts")
                    .addClass("active-tab")
                    .parent()
                    .parent()
                    .parent()
                    .find(".files")
                    .removeClass("active-tab");
            });
        }
    })();
    // Wall Tabs Toggle

    (function () {
        if ($(".wall").length) {
            var myClassesAccordion = $(".my-classes").find("h4");

            $(myClassesAccordion).on("click", function (e) {
                var width = $(document).width();
                e.stopPropagation();
                if (width <= 766) {
                    e.stopPropagation();
                    $(myClassesAccordion)
                        .next("ul")
                        .finish()
                        .slideToggle(300)
                        .parent()
                        .find("h4")
                        .toggleClass("opened");
                } else {
                    $(myClassesAccordion).next("ul").show();
                }
            });

            $(window).on("resize", function (e) {
                var width = $(document).width();
                if (width > 766) {
                    $(myClassesAccordion).next("ul").css("display", "flex");
                } else {
                    $(myClassesAccordion)
                        .removeClass("opened")
                        .next("ul")
                        .css("display", "none");
                }
            });
        }
    })();
    // Wall My Classes Accordion Panel

    (function () {
        if ($(".nagwa-study").length) {
            if (bodyDirection === "ltr") {
                $(".nagwa-study .iphone-carousel").slick({
                    speed: 600,
                    touchThreshold: 10,
                    swipeToSlide: true,
                    centerMode: true,
                    centerPadding: "750px",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false,
                    infinite: true,
                    autoplay: false,
                    responsive: [
                        {
                            breakpoint: 2300,
                            settings: {
                                centerPadding: "650px",
                            },
                        },
                        {
                            breakpoint: 2050,
                            settings: {
                                centerPadding: "550px",
                            },
                        },
                        {
                            breakpoint: 1900,
                            settings: {
                                centerPadding: "500px",
                            },
                        },
                        {
                            breakpoint: 1750,
                            settings: {
                                centerPadding: "400px",
                            },
                        },
                        {
                            breakpoint: 1550,
                            settings: {
                                centerPadding: "300px",
                            },
                        },
                        {
                            breakpoint: 1350,
                            settings: {
                                centerPadding: "200px",
                            },
                        },
                        {
                            breakpoint: 1150,
                            settings: {
                                centerPadding: "100px",
                            },
                        },
                        {
                            breakpoint: 950,
                            settings: {
                                centerPadding: "0",
                            },
                        },
                        {
                            breakpoint: 750,
                            settings: {
                                centerMode: false,
                                slidesToShow: 1,
                            },
                        },
                        {
                            breakpoint: 322,
                            settings: {
                                centerMode: false,
                                slidesToShow: 1,
                                arrows: false,
                            },
                        },
                    ],
                    nextArrow:
                        '<a href="#" class="prev"><i class="f-icon chevron-left-icon"></i></a>',
                    prevArrow:
                        '<a href="#" class="next"><i class="f-icon chevron-right-icon"></i></a>',
                });
            }

            if (bodyDirection === "rtl") {
                $(".nagwa-study .iphone-carousel").slick({
                    speed: 600,
                    touchThreshold: 10,
                    swipeToSlide: true,
                    centerMode: true,
                    centerPadding: "750px",
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    // arrows: false,
                    infinite: true,
                    autoplay: false,
                    rtl: true,
                    responsive: [
                        {
                            breakpoint: 2300,
                            settings: {
                                centerPadding: "650px",
                            },
                        },
                        {
                            breakpoint: 2050,
                            settings: {
                                centerPadding: "550px",
                            },
                        },
                        {
                            breakpoint: 1900,
                            settings: {
                                centerPadding: "500px",
                            },
                        },
                        {
                            breakpoint: 1750,
                            settings: {
                                centerPadding: "400px",
                            },
                        },
                        {
                            breakpoint: 1550,
                            settings: {
                                centerPadding: "300px",
                            },
                        },
                        {
                            breakpoint: 1350,
                            settings: {
                                centerPadding: "200px",
                            },
                        },
                        {
                            breakpoint: 1150,
                            settings: {
                                centerPadding: "100px",
                            },
                        },
                        {
                            breakpoint: 950,
                            settings: {
                                centerPadding: "0",
                            },
                        },
                        {
                            breakpoint: 750,
                            settings: {
                                centerMode: false,
                                slidesToShow: 1,
                            },
                        },
                        {
                            breakpoint: 322,
                            settings: {
                                centerMode: false,
                                slidesToShow: 1,
                                arrows: false,
                            },
                        },
                    ],
                    nextArrow:
                        '<a href="#" class="prev"><i class="f-icon chevron-right-icon"></i></a>',
                    prevArrow:
                        '<a href="#" class="next"><i class="f-icon chevron-left-icon"></i></a>',
                });
            }
        }
    })();
    // Nagwa Study iPhone Carousel

    (function () {
        if ($(".testimonials").length) {
            if (bodyDirection === "ltr") {
                $(".testimonials-list").slick({
                    dots: true,
                    infinite: true,
                    speed: 600,
                    slidesToShow: 1,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                            },
                        },
                    ],
                    prevArrow:
                        '<a href="#" class="prev"><i class="f-icon arrow-left-icon"></i></a>',
                    nextArrow:
                        '<a href="#" class="next"><i class="f-icon arrow-right-icon"></i></a>',
                });
            }

            if (bodyDirection === "rtl") {
                $(".testimonials-list").slick({
                    dots: true,
                    infinite: true,
                    speed: 600,
                    slidesToShow: 1,
                    rtl: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                arrows: false,
                            },
                        },
                    ],
                    prevArrow:
                        '<a href="#" class="prev"><i class="f-icon arrow-right-icon"></i></a>',
                    nextArrow:
                        '<a href="#" class="next"><i class="f-icon arrow-left-icon"></i></a>',
                });
            }
        }
    })();
    // Testimonials

    //Payment in Progress
    // if ($(".payment-progress").length) {
    //     openMagnificPopup(
    //         ".payment-progress",
    //         false,
    //         ".payment-progress",
    //         false,
    //         false
    //     );
    // }

    // (function() {
    //     if ($(".steps").length) {
    //         $(".step-1 .btn").on("click", function(e) {
    //             e.preventDefault();
    //             $(".steps .step-1").addClass("loading");

    //             setTimeout(() => {
    //                 $(".steps").addClass("next-step");
    //             }, 1000);

    //             setTimeout(() => {
    //                 $(".user-name").slideDown(200);

    //                 // $(".user-name").slideDown(200, function() {
    //                 // 	if ($(this).is(":visible")) {
    //                 // 		$(this).css("display", "flex");
    //                 // 	}
    //                 // });
    //             }, 1300);
    //         });

    //         $(".user-name a").on("click", function(e) {
    //             e.preventDefault();
    //             $(".user-name").slideUp(200);
    //             $(".steps").removeClass("next-step");
    //             $(".steps .step-1").removeClass("loading");
    //         });
    //     }
    // })();
    //Trigger the next steps in sign in pages (for demo purposes)

    (function () {
        if ($(".drop-file").length) {
            var fileInput = $(".file-input");
            var droparea = $(".uploader-wrapper");

            // highlight drag area
            fileInput.on("dragenter ", function () {
                fileInput.addClass("is-active").css("opacity", "1");
            });

            // back to normal state
            fileInput.on("drop", function () {
                fileInput.removeClass("is-active").css("opacity", "0");
            });
        }
    })();

    // Library Drop file

    (function () {
        if ($(".video-player").length) {
            var player = new Plyr.setup(".player-agent", {
                captions: {
                    active: true,
                    language: "auto",
                },
                fullscreen: {
                    enabled: true,
                    fallback: true,
                    iosNative: false,
                },
                ratio: "16:9",
                controls: [
                    "play-large",
                    "play",
                    "progress",
                    "current-time",
                    "duration",
                    "mute",
                    "volume",
                    "captions",
                    "settings",
                    // "pip",
                    "fullscreen",
                ],
            });

            $(player).each(function () {
                this.on("ready", (event) => {
                    $(".video-player").addClass("remove-ratio");
                });

                this.on("enterfullscreen", (event) => {
                    $(".plyr").css("position", "fixed");
                });

                this.on("exitfullscreen", (event) => {
                    $(".plyr").css("position", "relative");
                });
            });

            $(".seek-time").each(function () {
                $(this).on("click", function (e) {
                    var time = $(this).data("seek");
                    e.preventDefault();
                    document.querySelector(".player-agent").currentTime = $(
                        this
                    ).data("seek");
                    document.querySelector(".player-agent").play();
                });
            });
        }
    })();
    //plyr.js init

    (function () {
        if ($(".session-player").length) {
            var player = new Plyr.setup(".session-agent", {
                captions: {
                    active: true,
                    language: "auto",
                },
                fullscreen: {
                    enabled: true,
                    fallback: true,
                    iosNative: false,
                },
                controls: [
                    "play-large",
                    "play",
                    "progress",
                    "current-time",
                    "duration",
                    "mute",
                    "volume",
                    "captions",
                    "settings",
                    // "pip",
                    "fullscreen",
                ],
            });

            $(window).on("load", function () {
                setTimeout(function () {
                    var originalVideoHeight = $(".session-agent").height();

                    $(".plyr__video-wrapper").css(
                        "padding-bottom",
                        originalVideoHeight
                    );
                }, 100);
            });

            $(".session-agent").on("ready", function (e) {
                $(".session-player").addClass("remove-ratio");
                $(".plyr__volume").removeAttr("hidden");
                $(".plyr__volume").prop("hidden", false);
            });

            $(".session-agent").on("play", function (e) {
                $(".plyr__volume").removeAttr("hidden");
                $(".plyr__control").prop("hidden", false);
            });

            $(".session-agent").on("enterfullscreen", function (e) {
                $(".plyr").css("position", "fixed");
            });

            $(".session-agent").on("exitfullscreen", function (e) {
                $(".plyr").css("position", "relative");
            });
        }
    })();
    //session plyr.js init

    (function () {
        if ($("table").length) {
            if ($("table").width() > 1140) {
                $("body,html").css("overscroll-behavior-x", "none");
            }
        }
    })();
    // Prevent Chrome Mac gesture conflict with horizontal scrolling

    (function () {
        if ($(".table-nav").length) {
            var tableWrapper = $(".table-wrapper");
            var tableWrapperWidth = tableWrapper.width();
            var table = $(".table");
            var tableWidth = table.width();

            // Table Scroll to Right

            $(".table-nav-right").on("click", function (e) {
                e.preventDefault();
                var rightPos = $(".table-wrapper").scrollLeft();
                if (!$(".table-wrapper").is(":animated")) {
                    $(".table-wrapper").animate(
                        {
                            scrollLeft: rightPos + tableWrapperWidth,
                        },
                        1000
                    );
                }
            });

            // Table Scroll to Left

            $(".table-nav-left").on("click", function (e) {
                e.preventDefault();
                var leftPos = $(".table-wrapper").scrollLeft();
                if (!$(".table-wrapper").is(":animated")) {
                    $(".table-wrapper").animate(
                        {
                            scrollLeft: leftPos - tableWrapperWidth,
                        },
                        1000
                    );
                }
            });

            // Table Disable arrows

            tableWrapper.scroll(function () {
                if (
                    tableWrapper.scrollLeft() + tableWrapper.width() ==
                    table.width()
                ) {
                    $(".table-nav-right").addClass("disabled");
                    $(".table-nav-left").removeClass("disabled");
                }
                if (tableWrapper.scrollLeft() == 0) {
                    $(".table-nav-left").addClass("disabled");
                    $(".table-nav-right").removeClass("disabled");
                } else if (
                    tableWrapper.scrollLeft() + tableWrapper.width() <
                    table.width()
                ) {
                    $(".table-nav-right").removeClass("disabled");
                    $(".table-nav-left").removeClass("disabled");
                }
            });

            // Table Disable Nav Indecator if it doesn't overflow horizontally
            if (tableWrapperWidth >= tableWidth) {
                $(".table-nav")
                    .find(".table-nav-right, .table-nav-left")
                    .addClass("disabled");
            }

            if (bodyDirection === "rtl") {
                if (
                    navigator.userAgent.indexOf("Firefox") != -1 ||
                    (navigator.userAgent.indexOf("Safari") != -1 &&
                        navigator.userAgent.indexOf("Chrome") == -1 &&
                        navigator.userAgent.indexOf("CriOS/") == -1)
                ) {
                    // $(".table-nav-right").css({
                    //     opacity: 1,
                    //     pointerEvents: "all"
                    // });
                    // $(".table-nav-left").css({
                    //     opacity: 1,
                    //     pointerEvents: "all"
                    // });

                    tableWrapper.scroll(function () {
                        if (
                            tableWrapper.scrollLeft() + tableWrapper.width() ==
                            table.width()
                        ) {
                            $(".table-nav-left").addClass("disabled");
                            $(".table-nav-right").removeClass("disabled");
                        }
                        if (tableWrapper.scrollLeft() == 0) {
                            $(".table-nav-right").addClass("disabled");
                            $(".table-nav-left").removeClass("disabled");
                        } else if (
                            tableWrapper.scrollLeft() + tableWrapper.width() <
                            table.width()
                        ) {
                            $(".table-nav-left").removeClass("disabled");
                            $(".table-nav-right").removeClass("disabled");
                        }
                    });
                }
            }

            // on Resize
            $(window).on("resize", function () {
                var tableWrapper = $(".table-wrapper");
                var tableWrapperWidth = tableWrapper.width();
                var table = $(".table");
                var tableWidth = table.width();

                if (tableWrapperWidth < tableWidth) {
                    $(".table-nav")
                        .find(".table-nav-right, .table-nav-right")
                        .removeClass("disabled");
                } else {
                    $(".table-nav")
                        .find(".table-nav-right, .table-nav-right")
                        .addClass("disabled");
                }
            });
        }
    })();
    // Showing Table Indecator if the table overflows

    // (function() {
    //     if ($(".free-form").length) {
    //         $(".type-answer").keypress(function(e) {
    //             if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) {
    //                 $(this)
    //                     .addClass("animated shake")
    //                     .parent()
    //                     .find(".error, .answer-unit")
    //                     .addClass("animated shake")
    //                     .css("display", "block");
    //                 setTimeout(function() {
    //                     $(".type-answer").removeClass("animated shake");
    //                     $(".error, .answer-unit").removeClass("animated shake");
    //                 }, 750);
    //                 return false;
    //             } else {
    //                 $(this)
    //                     .parent()
    //                     .find(".error")
    //                     .css("display", "none");
    //             }
    //         });
    //     }
    // })();
    // Answer Button Shake (Old before adding the .input-with-unit div)

    // (function() {
    //     if ($(".free-form").length) {
    //         $(".type-answer").keypress(function(e) {
    //             e.stopPropagation();
    //             if (String.fromCharCode(e.keyCode).match(/[^0-9]/g)) {
    //                 $(this)
    //                     .addClass("animated shake")
    //                     .parent()
    //                     .addClass("animated shake")
    //                     .find(".error, .answer-unit")
    //                     .addClass("animated shake")
    //                     .css("display", "block");
    //                 setTimeout(function() {
    //                     $(
    //                         ".type-answer, .input-with-unit, .error, .answer-unit"
    //                     ).removeClass("animated shake");
    //                 }, 750);
    //                 return false;
    //             } else {
    //                 $(this)
    //                     .parent()
    //                     .find(".error")
    //                     .css("display", "none");
    //             }
    //         });
    //     }
    // })();
    // Answer Button Shake

    //Add custom padding to the input based on the width of the answer-unit.
    // if (document.querySelector("span.answer-unit")) {
    //     const selectedAnswerUnits = document.querySelectorAll(
    //         "span.answer-unit"
    //     );

    //     selectedAnswerUnits.forEach(element => {
    //         var paddingWidth = element.offsetWidth + 20;
    //         element.nextElementSibling.style.paddingRight = `${paddingWidth}px`;
    //     });
    // }

    (function () {
        if ($(".useSameCredentials").length) {
            $(".useSameCredentials").on("change", function () {
                if ($(this).is(":checked")) {
                    $(".user-info").slideUp(300);
                } else {
                    $(".user-info").slideDown(300);
                }
            });
        }
    })();
    //Annula pass user-info inputs step 2

    (function () {
        if ($(".memberships-page-new").length) {
            var pricePerStudent = $(".quantity").data("price");
            console.log(pricePerStudent);

            if ($(".quantity").val() == 20) {
                $(".sub").addClass("disabled");
            }

            function disableSub() {
                if ($(".quantity").val() == 20) {
                    $(".sub").addClass("disabled");
                } else {
                    $(".sub").removeClass("disabled");
                }
            }

            $(".add").click(function () {
                var value = $(".quantity").val();
                var priceNumber = $(this)
                    .closest(".package-calculator")
                    .find(".price")
                    .text();
                if (value && value >= 20) {
                    $(this)
                        .prev()
                        .find("input")
                        .val(Number(value) + 1);

                    var quantity = $(".quantity").val();
                    $(this)
                        .closest(".package-calculator")
                        .find(".price")
                        .text(quantity * pricePerStudent);

                    $(this)
                        .closest(".package-calculator")
                        .find(".price")
                        .prop("Counter", priceNumber)
                        .animate(
                            {
                                Counter:
                                    $(this).prev().find("input").val() *
                                    pricePerStudent,
                            },
                            {
                                duration: 400,
                                easing: "linear",
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                },
                            }
                        );
                } else {
                    value = 20;
                    $(this)
                        .prev()
                        .find("input")
                        .val(Number(value) + 1);
                    var quantity = $(".quantity").val();
                    $(this)
                        .closest(".package-calculator")
                        .find(".price")
                        .text(quantity * pricePerStudent);
                    $(".quantity")
                        .removeClass("error")
                        .parent()
                        .find(".error-message")
                        .hide();
                }
                disableSub();
            });
            $(".sub").click(function () {
                var value = $(".quantity").val();
                var priceNumber = $(this)
                    .closest(".package-calculator")
                    .find(".price")
                    .text();
                if (value > 20) {
                    $(this)
                        .next()
                        .find("input")
                        .val(Number(value) - 1);
                    var quantity = $(".quantity").val();
                    $(this)
                        .closest(".package-calculator")
                        .find(".price")
                        .text(quantity * pricePerStudent);
                    $(this)
                        .closest(".package-calculator")
                        .find(".price")
                        .prop("Counter", priceNumber)
                        .animate(
                            {
                                Counter:
                                    $(this).next().find("input").val() *
                                    pricePerStudent,
                            },
                            {
                                duration: 400,
                                easing: "linear",
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                },
                            }
                        );
                }
                disableSub();
            });
            $(".quantity").on("change", function () {
                var value = $(".quantity").val();
                var priceNumber = $(this)
                    .closest(".package-calculator")
                    .find(".price")
                    .text();
                if (value >= 20) {
                    var quantity = $(".quantity").val();
                    $(this)
                        .closest(".package-calculator")
                        .find(".price")
                        .text(quantity * pricePerStudent);
                    $(this)
                        .removeClass("error")
                        .parent()
                        .parent()
                        .find(".error-message")
                        .hide();
                    $(".sub").removeClass("disabled");
                    $(this)
                        .closest(".package-calculator")
                        .find(".price")
                        .prop("Counter", priceNumber)
                        .animate(
                            {
                                Counter: $(this).val() * pricePerStudent,
                            },
                            {
                                duration: 400,
                                easing: "linear",
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                },
                            }
                        );
                } else {
                    $(this)
                        .addClass("error")
                        .parent()
                        .parent()
                        .find(".error-message")
                        .show();
                    $(".sub").addClass("disabled");
                }
            });
        }
    })();
    // Memberships Calculator

    (function () {
        if ($(".sort-answers-h").length) {
            $(".sort-answers-h").sortable({
                axis: "x",
                revert: 200,
                // forcePlaceholderSize: true,
                // forceHelperSize: true,
                // cancel: ".unsortable-item",
                placeholder: "placeholder",
                start: function (e, ui) {
                    var itemWidth = ui.item[0].offsetWidth;
                    var itemHeight = ui.item[0].offsetHeight;
                    var widthRound = parseInt(itemWidth);

                    $(".placeholder")
                        .width(widthRound - 2)
                        .height(itemHeight - 12);
                    $(ui.helper[0]).css("width", widthRound);

                    console.log(ui.helper);
                },
            });
        }
    })();
    // Sort Answers Horizontally question

    (function () {
        if ($(".sort-answers-v").length) {
            $(".sort-answers-v").sortable({
                axis: "y",
                revert: 200,
                // forcePlaceholderSize: true,
                // forceHelperSize: true,
                // cancel: ".unsortable-item",
                placeholder: "placeholder",
                start: function (e, ui) {
                    var itemWidth = ui.item[0].offsetWidth;
                    var itemHeight = ui.item[0].offsetHeight;

                    $(".placeholder")
                        .width(itemWidth - 2)
                        .height(itemHeight - 12);
                },
            });
        }
    })();
    // Sort Answers vertically question

    (function () {
        if ($(".match-answers").length) {
            var maxWidth = 0;
            var widestDraggable = null;
            var $element;

            $(".match-answers li").each(function () {
                $element = $(this);
                if ($element.outerWidth() > maxWidth) {
                    maxWidth = $element.outerWidth();
                    widestDraggable = $element;
                }
            });

            var dropAreaWidth = widestDraggable.outerWidth();

            $(".drop-area").each(function () {
                $(this).width(dropAreaWidth);
            });

            $(".drop-area").droppable({
                // accept: ".draggable",
                // tolerance: "fit",
                // tolerance: "intersect",
                tolerance: "intersect",
                accept: function (draggable) {
                    if (
                        !$(this).hasClass("dropped") ||
                        draggable.hasClass("dropped")
                    ) {
                        return true;
                    }
                    return false;
                },
                drop: function (event, ui) {
                    $(this).addClass("dropped");
                    ui.draggable.addClass("dropped");
                    var $this = $(this);
                    ui.draggable.position({
                        my: "center",
                        at: "center",
                        of: $this,
                        using: function (pos) {
                            $(this).animate(
                                { top: pos.top + 5, left: pos.left },
                                200,
                                "linear"
                            );
                            console.log(pos.top);
                        },
                    });
                },
                out: function (event, ui) {
                    $(this).removeClass("dropped");
                    ui.draggable.removeClass("dropped");
                },
            });

            $(".match-answers > li").draggable({
                snap: ".drop-area",
                snapMode: "inner",
                // revert: "invalid",
                revert: function (event, ui) {
                    // on older version of jQuery use "draggable"
                    // $(this).data("draggable")
                    // on 2.x versions of jQuery use "ui-draggable"
                    // $(this).data("ui-draggable")

                    if (!event) {
                        $(this).removeClass("dropped");
                        $(this).removeClass("moved");
                    }

                    // $(this).data("uiDraggable").originalPosition = {
                    $(this).data("ui-draggable").originalPosition = {
                        top: 0,
                        left: 0,
                    };
                    // return boolean
                    return !event;
                    // that evaluate like this:
                    // return event !== false ? false : true;
                },
                start: function (event, ui) {
                    ui.helper[0].classList.add("moved");
                },
                // connectToSortable: ".drop-area",
                // helper: "clone",
                // stop: function(event, ui) {
                //     console.log(ui);

                //     if (
                //         ui.originalPosition.top !== 0 &&
                //         ui.originalPosition.left !== 0
                //     ) {
                //         console.log("Moved");
                //         // cl
                //         ui.helper.context.classList.add("moved");
                //     }
                // }
            });
        }
    })();
    // Matching Answers question

    (function () {
        if ($(".questions-nums-2").length) {
            var pos = $(".questions-nums-2 .active").offset();

            console.log(pos.top);

            $(".questions-nums-2").scrollTop(pos.top - 300);
        }
    })();
    // Scroll to active question

    (function () {
        if ($(".show-lesson-plan").length) {
            $(".show-lesson-plan").on("click", function (event) {
                event.preventDefault();
                $(".lesson-plan").slideDown();
                $(this).hide();
                $(".hide-lesson-plan").show();
            });

            $(".hide-lesson-plan").on("click", function (event) {
                event.preventDefault();
                $(".lesson-plan").slideUp();
                $(this).hide();
                $(".show-lesson-plan").show();
            });
        }
    })();
    // lesson plan
});

function openMagnificPopup(
    element,
    checker,
    id,
    closeOnBgClick = true,
    enableEscapeKey = true
) {
    var source, hasEffect;

    // console.log(element);

    if (checker === true) {
        // console.log("link");
        source = element.attr("href");
        hasEffect = true;
    } else {
        // console.log("not alink");
        source = element;
        hasEffect = false;
    }

    if (id) {
        source = id;
        hasEffect = true;
    }

    $.magnificPopup.open({
        items: {
            src: source,
        },
        type: "inline",
        preloader: false,
        focus: "#name",
        closeOnBgClick: closeOnBgClick,
        enableEscapeKey: enableEscapeKey,

        removalDelay: 500, //delay removal by X to allow out-animation

        // When elemened is focused, some mobile browsers in some cases zoom in
        // It looks not nice, so we disable it:
        callbacks: {
            open: function () {
                if (!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
                    $("html").css("margin-right", 17);
                } else {
                    $("html").css("margin-right", 0);
                }
            },
            close: function () {
                $("html").css("padding-right", 0);
            },
            beforeOpen: function () {
                if ($(window).width() < 700) {
                    this.st.focus = false;
                } else {
                    this.st.focus = "#name";
                }

                if (hasEffect && !id) {
                    this.st.mainClass = element.attr("data-effect");
                }

                if (id) {
                    this.st.mainClass = $(element).attr("data-effect");
                }
            },
        },

        midClick: true, // allow opening popup on middle mouse click. Always set
    });
}
//openMagnificPopup

function closeMagnificPopup() {
    $.magnificPopup.close();
    if (!navigator.platform.match(/(Mac|iPhone|iPod|iPad)/i)) {
        setTimeout(() => {
            $("html").css("margin-right", 0);
        }, 500);
    }
} //closeMagnificPopup

(function () {
    if ($(".question-actions").length) {
        $(".question-actions .buttons>button").on("click", function () {
            var target = $(this).data("target");

            if (target.length) {
                $(".question-examples > div:not(" + target + ")")
                    .slideUp(300)
                    .removeClass("visible");

                $(this)
                    .closest(".page")
                    .find(target)
                    .addClass("visible")
                    .slideToggle(300);
            }
        });
    }
})();
// Question Examples

(function () {
    if ($(".tabs").length) {
        $(".tab-links>a").on("click", function (e) {
            e.preventDefault();
            var target = $(this).data("target");
            $(".tab-links>a").removeClass("active");
            $(this).addClass("active");
            $(".tabs .tab-body>div").hide();
            $(this).closest(".tabs").find(target).fadeIn(300);
        });
    }
})();
// Tabs

(function () {
    if ($(".video-question").length) {
        $(".btn-link-blue").on("click", function (e) {
            e.preventDefault();
            $("#blue").toggle();
            $(this).toggleClass("hide-icon");
        });
        $(".btn-link-green").on("click", function (e) {
            e.preventDefault();
            $("#green").toggle();
            $(this).toggleClass("hide-icon");
        });
        $(".btn-link-red").on("click", function (e) {
            e.preventDefault();
            $("#red").toggle();
            $(this).toggleClass("hide-icon");
        });
    }
})();
//Toggle question info

$(".scroll-to-target").on("click", function (e) {
    e.preventDefault();

    var target = "#" + $(this).data("target");
    $("html, body").animate(
        {
            scrollTop: $(target).offset().top,
        },
        800
    );
});
// Scroll to Target

$('[name="payment_method"]').on("change", function () {
    if ($(this).val() === "credit-card") {
        $(".credit-card-form").slideDown(300);
    } else {
        $(".credit-card-form").slideUp(300);
    }
});

$(".show_sign_in_form").on("click", function (e) {
    e.preventDefault();
    $(".payment_sign_in_form").slideDown(300);
    $(".payment_sign_up_form").slideUp(300);
});

$(".show_sign_up_form").on("click", function (e) {
    e.preventDefault();
    $(".payment_sign_up_form").slideDown(300);
    $(".payment_sign_in_form").slideUp(300);
});

function centerContent() {
    if ($("ul.mcq_choices").length) {
        $("ul.mcq_choices li").each(function () {
            if (
                ($(this).find("> .displayed_equation:nth-child(2)").length &&
                    $(this).find("> .displayed_equation:last-child").length) ||
                ($(this).find("> .displayed-text-svg:nth-child(2)").length &&
                    $(this).find("> .displayed-text-svg:last-child").length) ||
                ($(this).find("> .displayed-figure:nth-child(2)").length &&
                    $(this).find("> .displayed-figure:last-child").length) ||
                ($(this).find("> table:nth-child(2)").length &&
                    $(this).find("> table:last-child").length) ||
                ($(this).find("> .h-scroll:nth-child(2)").length &&
                    $(this).find("> .h-scroll:last-child").length) ||
                $(this).find(" > img").length ||
                $(this).find(" > div.image").length
            ) {
                $(this).addClass("center-content");
            }
        });
    }
}

centerContent();

//Adding click event to the body in IOS using cursor-pointer trick
$(function () {
    // Check if it is iOS
    var isiOS = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? true : false;

    if (isiOS === true) {
        // Store -webkit-tap-highlight-color as this gets set to rgba(0, 0, 0, 0) in the next part of the code
        var tempCSS = $("a").css("-webkit-tap-highlight-color");

        $("body")
            .css("cursor", "pointer") // Make iOS honour the click event on body
            .css("-webkit-tap-highlight-color", "rgba(0, 0, 0, 0)"); // Stops content flashing when body is clicked

        // Re-apply cached CSS
        $("a").css("-webkit-tap-highlight-color", tempCSS);
    }
});

// Countdown
(function () {
    if ($(".time-countdown").length) {
        // class Util {
        //     static convertMS(ms) {
        //         var d, h, m, s;

        //         s = Math.floor(ms / 1000);
        //         m = Math.floor(s / 60);
        //         s = s % 60;
        //         h = Math.floor(m / 60);
        //         m = m % 60;
        //         d = Math.floor(h / 24);
        //         h = h % 24;
        //         return {
        //             d: d,
        //             h: h,
        //             m: m,
        //             s: s,
        //         };
        //     }

        //     static addZ(n) {
        //         if (!n) return "00";
        //         return (n < 10 ? "0" : "") + n;
        //     }

        //     static formatTime(obj) {
        //         if (obj.d > 0) {
        //             return (
        //                 Util.addZ(obj.d) +
        //                 "<span class='counter-label'>d</span> " +
        //                 Util.addZ(obj.h) +
        //                 "<span class='counter-label'>h</span> "
        //             );
        //         }
        //         if (obj.h > 0) {
        //             return (
        //                 Util.addZ(obj.h) +
        //                 "<span class='counter-label'>h</span> " +
        //                 Util.addZ(obj.m) +
        //                 "<span class='counter-label'>m</span> " +
        //                 Util.addZ(obj.s) +
        //                 "<span class='counter-label'>s</span> "
        //             );
        //         }

        //         return (
        //             Util.addZ(obj.h) +
        //             "<span class='counter-label'>h</span> " +
        //             Util.addZ(obj.m) +
        //             "<span class='counter-label'>m</span> " +
        //             Util.addZ(obj.s) +
        //             "<span class='counter-label'>s</span> "
        //         );
        //     }
        // }

        // class Countdown {
        //     constructor(endTime, $element) {
        //         this.now = moment();
        //         this.end = moment().add(endTime);
        //         this.diff = this.end.diff(this.now);
        //         this.$el = $element;
        //         this.$txt = this.$el.find(".c-text");
        //         this.initTimer();
        //     }

        //     initTimer() {
        //         var self = this;
        //         self.timer = setInterval(function () {
        //             self.now = moment();
        //             self.diff = self.end.diff(self.now);
        //             if (self.diff > 0) {
        //                 self.$txt.html(
        //                     Util.formatTime(Util.convertMS(self.diff))
        //                 );
        //             } else {
        //                 clearInterval(self.timer);
        //             }
        //         }, 200);
        //     }
        // }

        // $(function () {
        //     var yeah = new Countdown(
        //         { hours: 0, minutes: 2, seconds: 30 },
        //         $(".c-container")
        //     );
        // });

        // Sticky countdown
        var countDownPosition = $(".time-countdown").offset();

        $(window).scroll(function () {
            if ($(window).scrollTop() >= countDownPosition.top) {
                $(".page").addClass("sticky");
            } else {
                $(".page").removeClass("sticky");
            }
        });
    }
})();

// Session Countdown
// if ($(".session-countdown").length) {
//     class Util {
//         static convertMS(ms) {
//             var d, h, m, s;

//             s = Math.floor(ms / 1000);
//             m = Math.floor(s / 60);
//             s = s % 60;
//             h = Math.floor(m / 60);
//             m = m % 60;
//             d = Math.floor(h / 24);
//             h = h % 24;
//             return {
//                 d: d,
//                 h: h,
//                 m: m,
//                 s: s,
//             };
//         }

//         static addZ(n) {
//             if (!n) return "00";
//             return (n < 10 ? "0" : "") + n;
//         }

//         static formatTime(obj) {
//             if (obj.d > 0) {
//                 return (
//                     Util.addZ(obj.d) +
//                     "<span class='counter-label'>d</span> " +
//                     Util.addZ(obj.h) +
//                     "<span class='counter-label'>h</span> "
//                 );
//             }
//             if (obj.h > 0) {
//                 return (
//                     Util.addZ(obj.h) +
//                     "<span class='counter-label'>h</span> " +
//                     Util.addZ(obj.m) +
//                     "<span class='counter-label'>m</span> " +
//                     Util.addZ(obj.s) +
//                     "<span class='counter-label'>s</span> "
//                 );
//             }

//             return (
//                 Util.addZ(obj.h) +
//                 "<span class='counter-label'>h</span> " +
//                 Util.addZ(obj.m) +
//                 "<span class='counter-label'>m</span> " +
//                 Util.addZ(obj.s) +
//                 "<span class='counter-label'>s</span> "
//             );
//         }
//     }

//     class Countdown {
//         constructor(endTime, $element) {
//             this.now = moment();
//             this.end = moment().add(endTime);
//             this.diff = this.end.diff(this.now);
//             this.$el = $element;
//             this.$txt = this.$el.find(".c-text");
//             this.initTimer();
//         }

//         initTimer() {
//             var self = this;
//             self.timer = setInterval(function () {
//                 self.now = moment();
//                 self.diff = self.end.diff(self.now);
//                 if (self.diff > 0) {
//                     self.$txt.html(Util.formatTime(Util.convertMS(self.diff)));
//                 } else {
//                     clearInterval(self.timer);
//                 }
//             }, 200);
//         }
//     }

//     $(function () {
//         var yeah = new Countdown(
//             { hours: 0, minutes: 2, seconds: 30 },
//             $(".c-container")
//         );
//     });
// }

if ($(".canvas-wrapper").length) {
    var element = document.getElementsByClassName("canvas-wrapper")[0];

    $(".canvas-wrapper .expand a").on("click", function (event) {
        event.preventDefault();
        $(".canvas-wrapper").addClass("full-screen");

        if (screenfull.isEnabled) {
            screenfull.request(element);
        }
    });

    $(".canvas-wrapper .shrink a").on("click", function (event) {
        event.preventDefault();
        $(".canvas-wrapper").removeClass("full-screen");

        if (screenfull.isEnabled) {
            screenfull.exit(element);
        }
    });

    if (screenfull.isEnabled) {
        screenfull.on("change", () => {
            if (!screenfull.isFullscreen) {
                $(".canvas-wrapper").removeClass("full-screen");
            }
        });
    }

    // var element = document.getElementsByClassName("canvas-wrapper")[0];
    // var is_safari = navigator.userAgent.indexOf("Safari") > -1;

    // $(".canvas-wrapper .expand a").on("click", function (event) {
    //     event.preventDefault();
    //     $(".canvas-wrapper").addClass("full-screen");

    //     if (is_safari) {
    //         element.webkitRequestFullScreen();
    //     } else {
    //         element
    //             .requestFullscreen()
    //             .then(function () {})
    //             .catch(function (error) {
    //                 console.log(error.message);
    //             });
    //     }
    // });

    // document.addEventListener("fullscreenchange", function () {
    //     var full_screen_element = document.fullscreenElement;
    //     if (is_safari) {
    //     } else {
    //         if (full_screen_element == null) {
    //             console.log("Shaker");
    //             $(".canvas-wrapper").removeClass("full-screen");
    //         }
    //     }
    // });

    // $(".canvas-wrapper .shrink a").on("click", function (event) {
    //     event.preventDefault();
    //     $(".canvas-wrapper").removeClass("full-screen");

    //     if (is_safari) {
    //         document.webkitCancelFullScreen();
    //     } else {
    //         document
    //             .exitFullscreen()
    //             .then(function () {})
    //             .catch(function (error) {
    //                 console.log(error.message);
    //             });
    //     }
    // });
}

function adjustChatHeight() {
    if ($(".session").length) {
        var headerHeight = $(".main-header").height();
        var footerHeight = $(".main-footer").height();
        var windowHeight = $(window).height();
        var mainHeight = $(".container main").height();
        var chatBoxHeight = $(".chat-box").height();
        var wrapperHeight = $(".wrapper").height();

        var pageHeight = windowHeight - headerHeight - footerHeight;

        console.log(mainHeight);

        console.log(pageHeight);

        $(".chat-messages").addClass("add-overflow");
        $(".chat-messages").css({
            height: mainHeight - 174,
            // height: mainHeight - 90,
        });
        // $(".chat-messages").css("height", mainHeight - 99);
        // $(".chat-messages").scrollTop(0);

        //Old logic
        // if (pageHeight > mainHeight) {
        //     console.log("Page height is tall");
        //     $(".chat-messages").addClass("add-overflow");
        //     $(".chat-messages").css(
        //         "max-height",
        //         pageHeight - chatBoxHeight - 120
        //     );
        // } else {
        //     console.log("Page height is short");
        //     $(".chat-messages").addClass("add-overflow");
        //     $(".chat-messages").css(
        //         "max-height",
        //         mainHeight - chatBoxHeight - 30
        //     );
        // }
    }
}

adjustChatHeight();

function richTextEditor() {
    if ($(".rich-text-editor").length) {
        var imageUpload = function (context) {
            var ui = $.summernote.ui;

            // create button
            var button = ui.button({
                contents: '<i class="f-icon image-icon"/>',
                container: "body",
                tooltip: "Upload Image",
                className: "upload-image-btn",
                click: function (e) {
                    openMagnificPopup(
                        "#upload-image-popup",
                        false,
                        "#upload-image-popup"
                    );
                },
            });

            return button.render(); // return button as jquery object
        };

        var insertLinkPopup = function (context) {
            var ui = $.summernote.ui;

            // create button
            var button = ui.button({
                contents: '<i class="note-icon-link"/>',
                container: "body",
                tooltip: "Insert Link",
                className: "insert-link-btn",
                click: function (e) {
                    openMagnificPopup(
                        "#insert-link-popup",
                        false,
                        "#insert-link-popup"
                    );
                },
            });

            return button.render(); // return button as jquery object
        };

        var text = $(".text-editor").val();
        var lines = text.split("\n");
        var count = lines.length;
        console.log(count); // Outputs 4

        $(".text-editor").summernote({
            tabsize: 2,
            // height: 125.22,
            // minHeight: 125.22,
            styleTags: ["p", "h2", "h3", "h4", "h5"],

            toolbar: [
                // ["style", ["style"]],
                [
                    "font",
                    [
                        "bold",
                        "italic",
                        "underline",
                        "strikethrough",
                        "superscript",
                        "subscript",
                        "clear",
                    ],
                ],
                ["para", ["ul", "ol", "paragraph"]],
                // ["table", ["table"]],
                ["insert", ["uploadImage"]],
            ],
            // popover: {
            //     link: [["linkCustom", ["linkCustom", "unlink"]]],
            // },
            buttons: {
                uploadImage: imageUpload,
                // linkCustom: insertLinkPopup,
            },
            callbacks: {
                onPaste: function (e) {
                    var bufferText = (
                        (e.originalEvent || e).clipboardData ||
                        window.clipboardData
                    ).getData("Text");
                    e.preventDefault();
                    setTimeout(function () {
                        document.execCommand("insertText", false, bufferText);
                    }, 10);
                },
            },
        });

        // $(".note-editable").on("focus", function (e) {
        //     $(".note-placeholder").addClass("faded");
        // });
        // $(".note-editable").on("focusout", function (e) {
        //     $(".note-placeholder").removeClass("faded");
        // });
    }
}

// richTextEditor();

function smoothScroll() {
    $("html, body").animate(
        {
            scrollTop: $(".smooth-scroll").offset().top,
        },
        1000
    );
}

// Smooth Scroll on Click
$('[data-model="scroll"]').each(function () {
    $(this).on("click", function (e) {
        e.preventDefault();
        const target = `#${$(this).data("target")}`;
        $(".questions-nums li").removeClass("active");
        $(this).parent().addClass("active");
        $("html, body").animate(
            {
                scrollTop: $(target).offset().top - 15,
            },
            500
        );
    });
});

// smoothScroll();

(function () {
    if ($(".audioPlayerSmall").length) {
        const mainColor = "#026bb0",
            secondaryColor = "#dae9f3";
        var wavesurfer = WaveSurfer.create({
            container: ".visualizer",
            barWidth: 1,
            barGap: 1,
            waveColor: secondaryColor,
            progressColor: mainColor,
            barHeight: 2.5, // the height of the wave
            responsive: true,
            mediaType: "audio",
            // rtl: false,
            hideScrollbar: true,
            cursorWidth: 0,
            forceDecode: true,
            partialRender: true,
            pixelRatio: 1,

            plugins: [WaveSurfer.cursor.create()],
        });

        var audioSource = $(".audioPlayerSmall")
            .find(".audioSource")
            .data("src");
        wavesurfer.load(audioSource);
        // Fetch audio source

        const playButton = $(".audioPlayerSmall")
            .find(".togglePlay")
            .find(".play-btn")
            .parent()
            .html();
        function timeformat(timeget) {
            if (!timeget) {
                return "00:00";
            }

            var min = Math.floor(timeget / 60);
            var sec = Math.ceil(timeget) % 60;

            return (
                (min < 10 ? "0" : "") + min + ":" + (sec < 10 ? "0" : "") + sec
            );
        }
        // Time Format Function to Mins and Secs

        wavesurfer.on("ready", function () {
            var total = timeformat(wavesurfer.getDuration()); // get Audio Duration

            $(".audioPlayerSmall").find(".totalTime").html(total); // render Audio Duration into HTML
        });

        $(".play-btn").on("click", function () {
            wavesurfer.play();
            $(".audioPlayerSmall")
                .find(".togglePlay")
                .find(".play-btn")
                .hide()
                .parent()
                .find(".pause-btn")
                .show();
        });
        // Play Event

        $(".pause-btn").on("click", function () {
            wavesurfer.pause();
            $(".audioPlayerSmall")
                .find(".togglePlay")
                .find(".pause-btn")
                .hide()
                .parent()
                .find(".play-btn")
                .show();
        });
        // Pause Event

        wavesurfer.on("audioprocess", function () {
            var timeset = timeformat(wavesurfer.getCurrentTime()); // getCurrent Time
            if (wavesurfer.isPlaying()) {
                $(".audioPlayerSmall").find(".elaspedTime").html(timeset);
            }
        });
        // Remaning Time

        $(
            ".audioOuterWrapper .play-wrapper, .audioOuterWrapper2 .play-wrapper, .audioOuterWrapper3 .play-wrapper, .audioOuterWrapper4 .play-wrapper"
        ).on("click", function (e) {
            e.preventDefault();
            $(".audioOuterWrapper").addClass("showPlayer");
            wavesurfer.play();
            $(".audioPlayerSmall")
                .find(".togglePlay")
                .find(".play-btn")
                .hide()
                .parent()
                .find(".pause-btn")
                .show();

            wavesurfer.on("ready", function () {
                wavesurfer.play();
                $(".audioPlayerSmall")
                    .find(".togglePlay")
                    .find(".play-btn")
                    .hide()
                    .parent()
                    .find(".pause-btn")
                    .show();
            });
        });
    }
})();
// Audio Player Small

// Simple Accordion
$(".simple-explandable .content").each(function () {
    $(this).find('i').on("click", function () {
        const el = $(this).parent();
        if (el.hasClass("expanded")) {
            const actualHeight = el.outerHeight();
            el.attr("data-height", actualHeight);
            el.closest('.simple-explandable').removeClass("expanded");
            el.removeClass("expanded");
            el.animate(
                {
                    height: 55,
                },
                300
            );
        } else {
            el.closest('.simple-explandable').addClass("expanded");
            el.addClass("expanded");
            el.animate(
                {
                    height: el.data("height"),
                },
                300
            );
        }
    });
});


const player = new Plyr('.audio-player');