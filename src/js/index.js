
// $(document).ready(function() {
//   console.log(1)
// });



    window.onload = function () {
        var btn= document.getElementById('ryle__look'),
        discount = document.getElementById('ryle__discount'),
        ryle= document.getElementById('ryle'),
        close= document.getElementById('ryle__close'),
        box= document.getElementById('js-formRyle').getBoundingClientRect().top;
        media= document.getElementById('ryle__media');

        if (box<= 300) {
            openRyle();
        }

        window.onscroll = function() {
            box = document.getElementById('js-formRyle').getBoundingClientRect().top;
            if (box<= 300) {
                openRyle();
            }
        }

        function openRyle() {
            ryle.classList.add('ryle_active')
            btn.onclick = function () {
                media.classList.add('ryle__media_active');
                setTimeout(function() {
                    discount.classList.add('ryle__discount_active');
                }, 5000);
            }

            close.onclick = function () {
            ryle.classList.remove('ryle_active',setTimeout(function() {
                ryle.parentNode.removeChild(ryle);
                }, 1000));
            }
        }
    }
