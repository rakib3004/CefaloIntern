
function sum(i_number,j_number){
    let result=0,i;

    for(i=0;i<j_number;i++){
        result=result+i_number;
    }

    return result;
}



function multiply(i_number,j_number){
    return sum(i_number,j_number)
}

function printSquare(number){
    let ans= multiply(number,number);
    console.log(ans)
}

let a=6;
printSquare(a);