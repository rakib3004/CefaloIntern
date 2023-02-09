function getCertificateName(courseName,courseProviderName){

    return `${courseName}-${courseProviderName}`;
}



console.log(getCertificateName('intro-github','coursera'));



var z = function multiply(x,y){
    return x*y;
}


var z = (x,y) =>{
    return x*y;
}


var duration = (start,finish) => finish-start;

console.log(duration(12,44));



const five =5;

console.log(five);

//five = 6;
// unable to redeclear any const

console.log(five);