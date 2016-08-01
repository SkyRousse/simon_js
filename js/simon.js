var idSequence = []
var colors = ["#red", "#green", "#blue", "#yellow"]
var hexArray = ["#ea1d63", "#009688", "#2196f3", "#ffeb3b"]

function Simon() {

}

Simon.prototype.createSequence = function(turn) {
  for (var i = 0; i < turn; i++) {
    var randomNumber = Math.floor(Math.random()*4)
    idSequence.push(randomNumber)
  }
  turn++;
  return idSequence;
}

function changeColor() {
  idSequence.forEach(function(id) {
    $('.tile').css('background-color', 'white');
    $(colors[id]).css('background-color', hexArray[id]);
  });
}
