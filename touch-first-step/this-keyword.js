const Engineer = {

    firstName:"rakib",
    lastName:"trofder",
    designation:"Trainee Software Engineer",
    companyDomain:"cefalo.com",
    email: function(){
        return this.firstName
        +"."
        +this.lastName+"@"+this.companyDomain;
    }

};

console.log(Engineer.email());

console.log(this);

const x = this;

console.log(x);


function myFunction(){
    return `pie is equal to: `+3.1416;
}

console.log(myFunction());

function myMethod(){
    return this;
}

console.log(myMethod());
