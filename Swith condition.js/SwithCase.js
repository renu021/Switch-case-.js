/*
// Syntax:
   let varname = value;

   switch(varname){
     case "expected value 1": if satisfied this code will be executed
     break;

     case "expected value 1": if satisfied this code will be executed
     break;

     default: if none of the case is true this default code will be executed
   }
*/



/*
// evaluating grade --> S:satisfied, A-excellent, B-Very Good, C- Good, U-unsatisfied

  //If "break statements" is not included  in  switch-case.it will result in "fall-through" behavior.
  //each case "label" is checked one by one from top to bottom,when a matching case is found,it starts executing the code for that case.
  //After that it won't recheck the conditions of subsequent cases once it has found a matching case.It simply continue to  executing (printing) the code of subsequent cases until it reaches a break statement or end of the switch case. 
let Grade = "S";

switch(Grade){
    case "A" :
        console.log("excellent");

    case "B" :
        console.log("Very Good");
    
    case "S" :0
        console.log("satisfied");
        
    case "c" :
        console.log("Good");

    default :
        console.log("unsatisfied");
}
*/



/*
//To prevent from "fall-through" behavior and only execute the matched case code,you should include break statements after each case:
let Grade = "U";

switch (Grade) {
    case "A":
        console.log("excellent");
        break;

    case "B":
        console.log("Very Good");
        break;

    case "S":
        console.log("satisfied");
        break;

    case "c":
        console.log("Good");
        break;

    default:
        console.log("unsatisfied");
}
*/



/*
// if i want to execute single code or statement for multiple cases,i can group those cases. 

const Grade = "renu";  // --> any value apart from label name default code will be executed
  
switch (Grade){
    case "S" :
    case "A" :
    case "B" :
        console.log("Excellent Grade");
    break;   
    
    case "c" :
        console.log("Average Grade");
    break;

    default :
        console.log("Fail Grade")

}
*/


/*
// mark based evaluation --> in case structure it is important give it in order wise to avoid multiple conditions like (greater than and lesser than)

let score = 40;

switch (true) {
    case (score >= 40) :  
       console.log("Pass");
    break;
    
    case (score > 70) :
       console.log("Excellent");
    break;

    case (score > 90) :
        console.log("satisfied");
    break;

    default :
        console.log("Fail");
}
*/


/*
let score = 95;  //output: Excellent --> misordering the case.we can code like this we have to give multiple condition like (>70 && <=90)
// in switch case -> comparison operator we have give (true) 
switch (true) {
    case (score > 70) :
       console.log("Excellent");
    break;

    case (score >= 40) :  
       console.log("Pass");
    break;

    case (score > 90) :
        console.log("satisfied");
    break;

    default :
        console.log("Fail");
}
*/


/*
//mobile buying selection //Amount is 10k buy "Android" // if amount is greater than 60k buy "iphone" // if amount is between 5k to 10k buy "basic mobile"

let Amount = 1000;

switch (true) {
    case (Amount > 5000 && Amount <= 10000) :
        console.log ("BUY Basic Mobile")
    break;

    case (Amount > 10000 && Amount <= 20000) :
        console.log("Buy Android Mobile")
    break;

    case (Amount > 60000) :
        console.log ("BUY iphone Mobile")
    break;

    default:
        console.log("Sorry you can't afford for mobile now!! but definetly in future all the best")
}
*/