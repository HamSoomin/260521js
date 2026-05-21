$(function () {
    // jQueryを記述
    $("button").click(function () {
        //$("div").animate({ "left": "600px" }, 500);
        $("div").animate({"left": "+=200px"}, 500);
    });
});