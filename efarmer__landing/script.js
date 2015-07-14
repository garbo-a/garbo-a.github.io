/**
 * Created by Garbovskiy on 13.07.2015.
 */
var img01 = {"background-image": "url(" + $(".slide1").data("img") + ")"};
var img02 = {"background-image": "url(" + $(".slide2").data("img") + ")"};
var img03 = {"background-image": "url(" + $(".slide3").data("img") + ")"};
var bgColorUl = {backgroundColor:"rgba(255,255,255,.4)"};
var bgColorUlActive = { background: "rgba(0,0,0,.6)"};


$(".slide1").css(img01);
$(".slide2").css(img02);
$(".slide3").css(img03);

$("#slide1").click(function(){
    $("ul li").css(bgColorUl);
    $("header").removeClass("black");
    $(".slide2,.slide3").fadeOut();
    $(".slide1").fadeIn();
    $(this).css(bgColorUlActive);
});
$("#slide2").click(function(){
    $("ul li").css(bgColorUl);
    $("header").addClass("black");
    $(".slide1,.slide3").fadeOut();
    $(".slide2").fadeIn();
    $(this).css(bgColorUlActive);
});
$("#slide3").click(function(){
    $("ul li").css(bgColorUl);
    $("header").addClass("black");
    $(".slide1,.slide2").fadeOut();
    $(".slide3").fadeIn();
    $(this).css(bgColorUlActive);
});
