var inputArray = [1,2,3,4,5,6,7,8,9]
function init(){
   $( 'div.common' ).each( function ( i ) {
          $( this ).text( inputArray[i] );
  });
}

function shuffle(){
   for (let i = inputArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        x = inputArray[i];
        inputArray[i] = inputArray[j];
        inputArray[j] = x;
    }
  init()
}


function sort(){
  inputArray.sort(function(a, b){return a - b});
  console.log(inputArray)
  init();
}