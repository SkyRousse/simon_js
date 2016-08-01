$(document).ready(function() {
  var userSequence = []
  $('#start').click(function () {
    $('#start').hide();
    var turn = 5;
    var game = new Simon();
    game.createSequence(turn);
    console.log(idSequence);
    var myColorSequence = setInterval(changeColor, 1000);
    // var myGameColorReset = setInterval(function() {
    //   for (var i = 0; i < 4; i++) {
    //     $(colors[i]).css('background-color', hexArray[i]);
    //   };
    // }, 2000);
  });

  colors.forEach(function(color) {
    $(color).click(function() {
      userSequence.push(color);
      console.log(color);
      console.log(userSequence);
    });
  });
});
