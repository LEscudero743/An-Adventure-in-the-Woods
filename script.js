$(".yes-button").click(function() {
    $(".title").hide();
  $(".no-button").hide();
    $(".Part-Two-Yes").show();
});

$(".button1b").click(function() {
    $(".introduction").hide();
    $(".page2b").show();
});

$(".button2a").dblclick(function() {
    $(".page2a").hide();
    $(".page3a").show();
});

$(".button2b").dblclick(function() {
    $(".page2a").hide();
    $(".page3b").show();
});

$(".button3a").mouseenter(function() {
    $(".page3a").hide();
    $(".page4").show();
});

$(".button3b").mouseenter(function() {
    $(".page3a").hide();
    $(".page3b").show();
});