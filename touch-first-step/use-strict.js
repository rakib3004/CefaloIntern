"use strict"

/* this is a good practice */
function sum(a,a){

   var add = a+20;
   // Duplicate parameter name not allowed in this context ::: this is showed because of use strict
    console.log(add);
}

sum(10,100);

