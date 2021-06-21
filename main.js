//--------------------------all sections---------------------------
// Detect request animation frame
var scroll = window.requestAnimationFrame ||
    // IE Fallback
    function (callback) { window.setTimeout(callback, 1000 / 60) };
var elementsToShow = document.querySelectorAll('.show-on-scroll');

function loop() {

    Array.prototype.forEach.call(elementsToShow, function (element) {
        if (isElementInViewport(element)) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });

    scroll(loop);
}

// Call the loop for the first time
loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
    // special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
    return (
        (rect.top <= 0
            && rect.bottom >= 0)
        ||
        (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.top <= (window.innerHeight || document.documentElement.clientHeight))
        ||
        (rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
    );
}

$(document).ready(function () {


    //-------------start secound slider action in page1-----------------------
    $(".slider_images").owlCarousel({
        margin: 10,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
    //-------------end secound slider action-----------------------

    //---------------------start effect grid gallary--------------------//

    /*$(".products .grid_image").mouseover(function (){
        $(this).siblings().fadeIn('slow').removeClass('hide_icon');
        });

    $(".products .grid_image").mouseleave(function () {
        $(this).siblings().fadeOut('slow').addClass('hide_icon');
    });*/
    $(".products .content").mouseenter(function () {
        $(this).closest('div').find('.icons').fadeIn('slow').removeClass('hide_icon');
    }).mouseleave(function () {
        $(this).closest('div').find('.icons').fadeOut('slow').addClass('hide_icon');
    });

    //---------------------start effect grid gallary--------------------//


});

//------------------start search button------------------------
function openSearch() {
    document.getElementById("myOverlay").style.display = "block";
    document.getElementById("slider").style.zIndex = "1";
    document.getElementsByClassName("carousel-caption").style.display = "hidden";
}

function closeSearch() {
    document.getElementById("myOverlay").style.display = "none";
}

//----------------------------end search button--------------------    

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function toggle_dropDown() {
    document.getElementById("myDropdown").classList.toggle("hide_icon");
}

//-------------------------------end page1-------------------------------------



//------------------------------start page2----------------------------------
var a = 0;
$(window).scroll(function () {
    //if (!$("#animation_number").is("#dynamic_number") ) return;
    var oTop = $('#dynamic_number').offset().top - window.innerHeight;
    if (a == 0 && $(window).scrollTop() > oTop) {
        $('.counter').each(function () {
            var $this = $(this),
                countTo = $this.attr('data-target');
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },

                {

                    duration: 4050,   //---------midified attention please--------------------
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.floor(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }

                });
        });
        a = 1;
    }

});
$(document).ready(function () {
    $(".common_details i").click(function () {
        $(this).siblings('p').slideToggle('slow').toggleClass('hide_icon');
    });
});
//------------------------------end pagr2(من نحن)--------------------------------



//---------------------------start page3(انشاء حساب)---------------------------------
$(document).ready(function () {
    $(".show_hide_photo").click(function () {
        var a = document.getElementById("password-input");
        if (a.type === "password") {
            a.type = "text";
        } else {
            a.type = "password";
        }
    });

    $(".hide_show_photo").click(function () {
        var a = document.getElementById("input-password");
        if (a.type === "password") {
            a.type = "text";
        } else {
            a.type = "password";
        }
    });
});


//---------------------------end page3(انشاء حساب)-----------------------------------

//-------------------------------start page6(التصنيفات)-----------------------------*/
var inputLeft = document.getElementById("input-left");
var inputRight = document.getElementById("input-right");

var thumbLeft = document.querySelector(".slider > .thumb.left");
var thumbRight = document.querySelector(".slider > .thumb.right");
var range = document.querySelector(".slider > .range");

var leftSelectValue = document.getElementById("left_select_value");
var rightSelectValue = document.getElementById("right_select_value");

function setLeftValue() {
	var _this = inputLeft,
		min = parseInt(this.min),
		max = parseInt(this.max);

	_this.value = Math.min(parseInt(_this.value), parseInt(inputRight.value) - 1);

	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbLeft.style.left = percent + "%";
	range.style.left = percent + "%";
    leftSelectValue.innerHTML = inputLeft.value;
}

function setRightValue() {
	var _this = inputRight,
		min = parseInt(_this.min),
		max = parseInt(_this.max);

	_this.value = Math.max(parseInt(_this.value), parseInt(inputLeft.value) + 1);
	var percent = ((_this.value - min) / (max - min)) * 100;

	thumbRight.style.right = (100 - percent) + "%";
	range.style.right = (100 - percent) + "%";
    rightSelectValue.innerHTML = inputRight.value;
}

inputLeft.addEventListener("input", setLeftValue);
inputRight.addEventListener("input", setRightValue);

inputLeft.addEventListener("mouseover", function() {
	thumbLeft.classList.add("hover");
});
inputLeft.addEventListener("mouseout", function() {
	thumbLeft.classList.remove("hover");
});
inputLeft.addEventListener("mousedown", function() {
	thumbLeft.classList.add("active");
});
inputLeft.addEventListener("mouseup", function() {
	thumbLeft.classList.remove("active");
});

inputRight.addEventListener("mouseover", function() {
	thumbRight.classList.add("hover");
});
inputRight.addEventListener("mouseout", function() {
	thumbRight.classList.remove("hover");
});
inputRight.addEventListener("mousedown", function() {
	thumbRight.classList.add("active");
});
inputRight.addEventListener("mouseup", function() {
	thumbRight.classList.remove("active");
});

//-------------------------------end page6(التصنيفات)-----------------------------*/

