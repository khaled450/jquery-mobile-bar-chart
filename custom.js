var totalVotes = 1;
var votesYes = 0;
var votesNo = 0;

function playVotes() {
    var yesBar =  Math.round(votesYes / totalVotes * 100);
    var noBar =  Math.round(votesNo / totalVotes * 100);

    $(".ui-slider-custom-green > div").css("width", yesBar + "%");
    $(".ui-slider-custom-green > a").css("left", yesBar + "%").text(yesBar + "%");

    $(".ui-slider-custom-red > div").css("width", noBar + "%");
    $(".ui-slider-custom-red > a").css("left", noBar + "%").text(noBar + "%");

}

//demo the change
var go = setInterval(function () {
    votesYes = Math.random();
    votesNo = Math.random();
    totalVotes = votesYes + votesNo;
    playVotes();
}, 2000);

setTimeout(function(){ clearInterval(go); },15000); //clear after 15s

//run auto
var i = 0;
var auto = setInterval(function () {
    if(i >= 100) clearInterval(auto);
    $(".ui-slider-custom-blue > div").css("width", i + "%");
    $(".ui-slider-custom-blue > a").css("left", i + "%").text(i + "%");
    i += 10;
}, 1000);
