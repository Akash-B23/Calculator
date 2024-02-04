$("h1").css("color", "indigo");
$("button").css("background-color", "red");
//$("button").addClass("btn");
//$("h1").text("HEHEHE");
//$("button").text("poda");
$("a").attr("href", "https://www.yahoo.com");
$("button").click(function () {
    $("button").css("color", "yellow");
})

/*$("input").keypress(function (event) {
    console.log(event.key);
})*/

/*$("input").keypress(function (event) {
    $("h1").text(event.key);
})*/

$("h1").on("mouseover", function () {
    $("h1").css("color", "red");
})

$("h1").on("mouseout", function () {
    $("h1").css("color", "indigo");
})

$("h1").before("<button>BEFORE</button>");
$("h1").after("<button>AFTER</button>");
$("h1").prepend("<button>INSIDE</button>")

//$("button").remove();

$("button").on("click",function(){
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
})
