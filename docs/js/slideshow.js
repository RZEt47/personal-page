$(document).ready(function (){

    showPhotos()

    var slideIndex = 0
    function showPhotos() {

        var i
        var slides = $('.photo img')

        for (i = 0; i < slides.length; i++) {
            $(slides[i]).hide()
        }

        slideIndex++

        if (slideIndex > slides.length) {
            slideIndex = 1
        }

        $(slides[slideIndex - 1]).show()

        setTimeout(showPhotos, 1000)
    }
})