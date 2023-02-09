// global scope

let expectedCGPA = 3.85;
let currentCGPA = 3.65;
const highestCGPA = 4.00;

console.log(expectedCGPA);
console.log(currentCGPA);
console.log(highestCGPA);



// block scope

{

let marksOnDockerProject = 65;

}

//console.log(marksOnDockerProject);
// not allowed let outside of the block scope





{

    var totalNumberOfStudentAbove55InDS=17;

}


console.log(totalNumberOfStudentAbove55InDS);
//  allowed var outside of the block scope





{

const totalMarksInDistributedSystemLab=70;

}

//console.log(totalMarksInDistributedSystemLab);
// not allowed const outside of the block scope




// function scope

(function primaryFunction(){
 var primary = "department.primary";
 console.log(primary);

 
})();

//console.log(primary);
// not allowed var outside of the function scope



(function secondaryFunction(){
    const secondary = "department.secondary";
    console.log(secondary);

    

})();

//console.log(secondary);
// not allowed const outside of the function scope




(function trinaryFunction(){
    let trinary = "department.trinary";
    console.log(trinary);

    
})();

//console.log(trinary);
// not allowed let outside of the function scope




