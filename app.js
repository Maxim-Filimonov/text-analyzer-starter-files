// your code here!
function countWords(input) {
    return input.split(' ').length;
}

$("form").submit(function(e) {
    e.preventDefault();
    $(".hidden").removeClass("hidden");
    var input = $("#user-text").val();
    var count = countWords(input);
    $("#word-count-label").text(count);
});