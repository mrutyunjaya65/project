$(".navbar a").on("click",function () {
    $(".navbar a").removeClass("active");
    $(this).addClass("active")
})

$("header").classList.toggle('sticky', window.scrollY > 100);