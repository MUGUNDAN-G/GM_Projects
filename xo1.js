function mine(){
  var b1,b2,b3,b4,b5,b6,b7,b8,b9;
  b1 = document.querySelector('.b1').innerHTML;
  b2 = document.querySelector('.b2').innerHTML;
  b3 = document.querySelector('.b3').innerHTML;
  b4 = document.querySelector('.b4').innerHTML;
  b5 = document.querySelector('.b5').innerHTML;
  b6 = document.querySelector('.b6').innerHTML;
  b7 = document.querySelector('.b7').innerHTML;
  b8 = document.querySelector('.b8').innerHTML;
  b9 = document.querySelector('.b9').innerHTML;

  var b1btn,b2btn,b3btn,b4btn,b5btn,b6btn,b7btn,b8btn,b9btn;
  b1btn = document.querySelector('.b1');
  b2btn = document.querySelector('.b2');
  b3btn = document.querySelector('.b3');
  b4btn = document.querySelector('.b4');
  b5btn = document.querySelector('.b5');
  b6btn = document.querySelector('.b6');
  b7btn = document.querySelector('.b7');
  b8btn = document.querySelector('.b8');
  b9btn = document.querySelector('.b9');

  if(b1==='x' && b2==='x' && b3==='x'){
    document.querySelector('.res').innerHTML = 'Player 1 won';
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.backgroundColor = 'red';
    b2btn.style.backgroundColor = 'red';
    b3btn.style.backgroundColor = 'red';
  }else if(b1==='x' && b4==='x' && b7==='x'){
    document.querySelector('.res').innerHTML = 'Player 1 won';
    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.backgroundColor = 'red';
    b4btn.style.backgroundColor = 'red';
    b7btn.style.backgroundColor = 'red';
  }else if(b7==='x' && b8==='x' && b9==='x'){
    document.querySelector('.res').innerHTML = 'Player 1 won';
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.style.backgroundColor = 'red';
    b8btn.style.backgroundColor = 'red';
    b9btn.style.backgroundColor = 'red';
  }else if(b9==='x' && b6==='x' && b3==='x'){
    document.querySelector('.res').innerHTML = 'Player 1 won';
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.style.backgroundColor = 'red';
    b6btn.style.backgroundColor = 'red';
    b9btn.style.backgroundColor = 'red';
  }else if(b2==='x' && b5==='x' && b8==='x'){
    document.querySelector('.res').innerHTML = 'Player 1 won';
    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.style.backgroundColor = 'red';
    b5btn.style.backgroundColor = 'red';
    b8btn.style.backgroundColor = 'red';
  }else if(b4==='x' && b5==='x' && b6==='x'){
    document.querySelector('.res').innerHTML = 'Player 1 won';
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b4btn.style.backgroundColor = 'red';
    b5btn.style.backgroundColor = 'red';
    b6btn.style.backgroundColor = 'red';
  }else if(b1==='x' && b5==='x' && b9==='x'){
    document.querySelector('.res').innerHTML = 'Player 1 won';
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b1btn.style.backgroundColor = 'red';
    b5btn.style.backgroundColor = 'red';
    b9btn.style.backgroundColor = 'red';
  }else if(b3==='x' && b5==='x' && b7==='x'){
    document.querySelector('.res').innerHTML = 'Player 1 won';
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.style.backgroundColor = 'red';
    b5btn.style.backgroundColor = 'red';
    b7btn.style.backgroundColor = 'red';
  } else if(b1==='o' && b2==='o' && b3==='o'){
    document.querySelector('.res').innerHTML = 'Player 2 won';
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.backgroundColor = 'green';
    b2btn.style.backgroundColor = 'green';
    b3btn.style.backgroundColor = 'green';
  }else if(b1==='o' && b4==='o' && b7==='o'){
    document.querySelector('.res').innerHTML = 'Player 2 won';
    b2btn.disabled = true;
    b3btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b1btn.style.backgroundColor = 'green';
    b4btn.style.backgroundColor = 'green';
    b7btn.style.backgroundColor = 'green';
  }else if(b7==='o' && b8==='o' && b9==='o'){
    document.querySelector('.res').innerHTML = 'Player 2 won';
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b6btn.disabled = true;

    b7btn.style.backgroundColor = 'green';
    b8btn.style.backgroundColor = 'green';
    b9btn.style.backgroundColor = 'green';
  }else if(b9==='o' && b6==='o' && b3==='o'){
    document.querySelector('.res').innerHTML = 'Player 2 won';
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b5btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b3btn.style.backgroundColor = 'green';
    b6btn.style.backgroundColor = 'green';
    b9btn.style.backgroundColor = 'green';
  }else if(b2==='o' && b5==='o' && b8==='o'){
    document.querySelector('.res').innerHTML = 'Player 2 won';
    b1btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b9btn.disabled = true;

    b2btn.style.backgroundColor = 'green';
    b5btn.style.backgroundColor = 'green';
    b8btn.style.backgroundColor = 'green';
  }else if(b4==='o' && b5==='o' && b6==='o'){
    document.querySelector('.res').innerHTML = 'Player 2 won';
    b1btn.disabled = true;
    b2btn.disabled = true;
    b3btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b4btn.style.backgroundColor = 'green';
    b5btn.style.backgroundColor = 'green';
    b6btn.style.backgroundColor = 'green';
  }else if(b1==='o' && b5==='o' && b9==='o'){
    document.querySelector('.res').innerHTML = 'Player 2 won';
    b2btn.disabled = true;
    b3btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b7btn.disabled = true;
    b8btn.disabled = true;

    b1btn.style.backgroundColor = 'green';
    b5btn.style.backgroundColor = 'green';
    b9btn.style.backgroundColor = 'green';
  }else if(b3==='o' && b5==='o' && b7==='o'){
    document.querySelector('.res').innerHTML = 'Player 2 won';
    b1btn.disabled = true;
    b2btn.disabled = true;
    b4btn.disabled = true;
    b6btn.disabled = true;
    b8btn.disabled = true;
    b9btn.disabled = true;

    b3btn.style.backgroundColor = 'green';
    b5btn.style.backgroundColor = 'green';
    b7btn.style.backgroundColor = 'green';
  }else if((b1==='x' || b1==='o') && (b2==='x' || b2==='o') && (b3==='x' || b3==='o') && (b4==='x' || b4==='o') && (b5==='x' || b5==='o') && (b6==='x' || b6==='o') && (b7==='x' || b7==='o') && (b8==='x' || b8==='o') && (b9==='x' || b9==='o')){
    document.querySelector('.res').innerHTML = 'Tie';
  }
}
var flag = 1;
function m1(){
  if(flag===1){
    document.querySelector('.b1').innerHTML = 'x';
    document.querySelector('.b1').disabled = true;
    flag = 0;
  }else{
    document.querySelector('.b1').innerHTML = 'o';
    document.querySelector('.b1').disabled = true;
    flag = 1;
  }
}
function m2(){
  if(flag===1){
    document.querySelector('.b2').innerHTML = 'x';
    document.querySelector('.b2').disabled = true;
    flag = 0;
  }else{
    document.querySelector('.b2').innerHTML = 'o';
    document.querySelector('.b2').disabled = true;
    flag = 1;
  }
}
function m3(){
  if(flag===1){
    document.querySelector('.b3').innerHTML = 'x';
    document.querySelector('.b3').disabled = true;
    flag = 0;
  }else{
    document.querySelector('.b3').innerHTML = 'o';
    document.querySelector('.b3').disabled = true;
    flag = 1;
  }
}
function m4(){
  if(flag===1){
    document.querySelector('.b4').innerHTML = 'x';
    document.querySelector('.b4').disabled = true;
    flag = 0;
  }else{
    document.querySelector('.b4').innerHTML = 'o';
    document.querySelector('.b4').disabled = true;
    flag = 1;
  }
}
function m5(){
  if(flag===1){
    document.querySelector('.b5').innerHTML = 'x';
    document.querySelector('.b5').disabled = true;
    flag = 0;
  }else{
    document.querySelector('.b5').innerHTML = 'o';
    document.querySelector('.b5').disabled = true;
    flag = 1;
  }
}
function m6(){
  if(flag===1){
    document.querySelector('.b6').innerHTML = 'x';
    document.querySelector('.b6').disabled = true;
    flag = 0;
  }else{
    document.querySelector('.b6').innerHTML = 'o';
    document.querySelector('.b6').disabled = true;
    flag = 1;
  }
}
function m7(){
  if(flag===1){
    document.querySelector('.b7').innerHTML = 'x';
    document.querySelector('.b7').disabled = true;
    flag = 0;
  }else{
    document.querySelector('.b7').innerHTML = 'o';
    document.querySelector('.b7').disabled = true;
    flag = 1;
  }
}
function m8(){
  if(flag===1){
    document.querySelector('.b8').innerHTML = 'x';
    document.querySelector('.b8').disabled = true;
    flag = 0;
  }else{
    document.querySelector('.b8').innerHTML = 'o';
    document.querySelector('.b8').disabled = true;
    flag = 1;
  }
}
function m9(){
  if(flag===1){
    document.querySelector('.b9').innerHTML = 'x';
    document.querySelector('.b9').disabled = true;
    flag = 0;
  }else{
    document.querySelector('.b9').innerHTML = 'o';
    document.querySelector('.b9').disabled = true;
    flag = 1;
  }
}
function reload(){
  location.reload();
}
