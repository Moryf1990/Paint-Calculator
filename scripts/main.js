var width = prompt('What is the width of the room?');
var length = prompt('What is the length of the room?');
var answer = parseFloat(length)*parseFloat(width);
var area = Math.ceil(length*width/350);

document.write('<div>How many square feet do you need to paint? '+answer+'</div>')
document.write('You will need to purchase '+area+' '+'gallons of paint to cover '+answer+ ' '+ 'feet.');



