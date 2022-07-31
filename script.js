$(document).ready(function(){
    $('.question').on('click', function(){
        if($(this).hasClass('active')){
            $(this).siblings().slideUp(250)
            $(this).removeClass('active')
        } else {
            $('.response').slideUp()
            $('.question').removeClass('active')
            $(this).siblings().slideToggle(250)
            $(this).toggleClass('active')
        }
    })
})