window.onload = function(){

  var clock = document.getElementById('clock');

  window.setInterval(function(){
    writeDate();
    //iga 500millisekundi tagant k2ivitab writedate
  }, 500);
// et ei tekiks alguses 0:0:0
  writeDate();


};

function writeDate(){

  var today = new Date();
  var hours = today.getHours();
  var minutes = today.getMinutes();
  var seconds = today.getSeconds();

  clock.innerHTML = addZeroBefore(hours) + ':' + addZeroBefore(minutes) + ':' + addZeroBefore(seconds);
}

function addZeroBefore(number){

  if(number < 10){
    number = "0" + number;
  }
  return number;
}
