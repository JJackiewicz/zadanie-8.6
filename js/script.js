var a = prompt('Number 1' +'');
    
var b = prompt('Number 2' +'');
    
var value = ((a * a) - (2 * a * b) - (b * b));

if ( value < '0' ) {
  alert(value + ' Wynik ujemny ');
  } else if ( value > '0' ) {
  alert(value + ' Wynik dodatni ');
  } else {
    alert(value);
  }
