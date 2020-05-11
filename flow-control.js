<<<<<<< HEAD
function basicTeenager(age) {
  if( age >= 13 && age<=19 ) {
    return "You are a teenager!"
=======
var basicTeenager = function(age) {
  if((age >= 13) && (age <= 19)){
    return "You are a teenager!" ;
>>>>>>> 48b89bf14a5e16810b6063ecedc57cd8513e46e6
  }
}


function teenager(age) {
<<<<<<< HEAD
  if( age >= 13 && age<=19 ) {
    return "You are a teenager!"
  }else{
    return "You are not a teenager"
  }
=======
  if(age>=13 && age <=19)
    return "You are a teenager!";
  else {
    return "You are not a teenager";
    }
>>>>>>> 48b89bf14a5e16810b6063ecedc57cd8513e46e6

  return false;
}

function ageChecker(age) {
<<<<<<< HEAD
  if( age >= 13 && age<=19 ) {
    return "You are a teenager!"
  }else if(age <= 12){
    return "You are a kid"
  }else {
    return "You are a grownup"
  }

=======
  if(age>=13 && age <=19)
    return "You are a teenager!"
  else if(age<13){
    return "You are a kid"
  else {
    return "You are a grownup"
  }
return false;
>>>>>>> 48b89bf14a5e16810b6063ecedc57cd8513e46e6
}

function ternaryTeenager(age){
  return ( age >= 13 && age<=19 )  ? "You are a teenager" : "You are not a teenager"
}

function switchAge(age){

  switch(age) {
     case 13:
     case 14:
     case 15:
     case 16:
     case 17:
     case 18:
     case 19:
       return "You are a teenager" ;
       break;

     default:
       return "You have an age" ;
       
  }
}
