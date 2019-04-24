$(document).ready(function (){
    $(".navbar-toggler").on("click",function(){
        $(".overlap").toggleClass("active");
        $(this).find("i").toggleClass("fa-times fa-bars");
    });
});
