var triangleTracker = function(x,y,z) {

   if ((x+y) > z && (x+z) > y && (y+z) > x) {

     if ((x===y) && (y===z)) {
     return 'an equilateral';
     }

     else if (x === (y || z) || y===z) {
       return "an isoceles";
     }

     else {
       return "a scalene";
     }
 }

  else {
    return "not a valid";
  }
}

$(document).ready(function() {

  $("form#triangle-tracker").submit(function(event) {

    var x = parseInt($("input#x").val());
    var y = parseInt($("input#y").val());
    var z = parseInt($("input#z").val());
    var result = triangleTracker(x,y,z);
    $(".not").text("");

    $(".x").text(x);
    $(".y").text(y);
    $(".z").text(z);
    $(".result").text(result);

    if (!result) {
      $(".not").text("not");
    }

    $("#result").show();
    event.preventDefault(); // so that it does not submit to a server anywhere

    $("input#x").val("");
    $("input#y").val("");
    $("input#z").val("");
    });
  });
