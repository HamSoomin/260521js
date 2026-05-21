$(function () {
    // jQueryを記述
    $("li").each(function() {
        $(this).html("list " + $(this).index());
    });
});