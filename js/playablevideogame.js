$(document).ready(function(){
    var clicks = 0;
    $("clickDisplay").text(clicks);
    $("clicker").click(function(){
        clicks += 1;
        $("clickDisplay").text(clicks);
    });
});