function scuberGreetingForFeet(distance){

let result;

if (distance <= 400) {
  result = 'This one is on me!';
} else if (distance >= 2000 && distance <= 2499) {
  result = 'I will gladly take your thirty bucks.';
} else if (distance >= 2500) {
  result = 'No can do.';
}

return result;

}

function ternaryCheckCity(city){
  
let response;

city === 'NYC' ? response = 'Ok, sounds good.' : response = 'No go.';

return response;

}

function switchOnCharmFromTip(tip){

let reply;

switch (tip) {
  case 'generous':
    return reply = 'Thank you so much.';
  case 'not as generous':
    return reply = 'Thank you.';
  default:
    return reply = 'Bye.';
    break;
}

}