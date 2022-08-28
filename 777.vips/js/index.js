let txt01 = document.getElementById('section01Txt')
let logo = document.querySelector('.letsgo')

window.addEventListener('load', function () {
    txt01.classList.add('active')
    logo.classList.add('active')
})

let nav = document.querySelectorAll('.nav')
console.log(nav)


$(function () {
    $(window).scroll(function () {
        let scroll = $(window).scrollTop();
        console.log(scroll)
        if (scroll>200) {
            $('#header').css({'background-color':'rgb(255, 255, 255, 0.4)'})
            $('.nav').css('color','#333')

            let head = document.getElementById('header')
            head.addEventListener('mouseover', function() {
                head.style.backgroundColor = 'rgb(255, 255, 255)'
                $('.nav').css('color','#333')
            })
            head.addEventListener('mouseout', function() {
                head.style.backgroundColor = 'rgb(255, 255, 255, 0.4)'
                $('.nav').css('color','#333')
            })

        } else {
            $('#header').css({'background-color':'rgb(255, 255, 255)'})
            $('.nav').css('color','#333')
            
            head.addEventListener('mouseout', function() {
                head.style.backgroundColor = 'rgb(255, 255, 255)'
                $('.nav').css('color','#333')
            })
        }

        /*==---section02------------ */
        let txtTop = $('#section02').offset().top;
        let txtTopScroll = txtTop;

        if(txtTopScroll>=txtTop) {
            $('.section02txt').addClass('active')
            $('.section02ttat').addClass('active')
        }

        /*-----------section03------------------------ */

        let objTop01 = $('.cox01').offset().top;
        let objTop02 = $('.cox03').offset().top;
        let objTop03 = $('.cox05').offset().top;
        let objTop04 = $('.cox07').offset().top;

/*         console.log(objTop01)
        console.log(objTop02) */

        var imgScroll = scroll+720;
        var imgScroll01 = scroll+750;  
        var txtScroll = scroll+670;
        var txtScroll01 = scroll+700;


        if(imgScroll>=objTop01) {
            $('.cox01').addClass('active')
        }
        if(imgScroll>=objTop02) {
            $('.cox03').addClass('active')
        }
        if(imgScroll>=objTop03) {
            $('.cox05').addClass('active')
        }
        if(imgScroll>=objTop04) {
            $('.cox07').addClass('active')
        }

        if(txtScroll>=objTop01) {
            $('.cox02').addClass('active')
        }
        if(txtScroll>=objTop02) {
            $('.cox04').addClass('active')
        }
        if(txtScroll>=objTop03) {
            $('.cox06').addClass('active')
        }
        if(txtScroll01>=objTop04) {
            $('.cox08').addClass('active')
        }

        var legend = $('.legend').offset().top;
        
        if(scroll+450>=legend) {
            $('.legend').addClass('active')
        }
        if(scroll+100>=legend) {
            document.querySelector('.legendimg').src = './img/year/aAllNewVIPS.png'
        }

    }) //scroll
}) // jQB

/*===============Initialize Swiper========================== */

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});