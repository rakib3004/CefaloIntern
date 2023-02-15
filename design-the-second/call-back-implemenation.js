function make_array(a,b)
{
console.log(`[${a},${b}]`);
}
function make_set(a,b)
{
    console.log(`{${a},${b}}`);
}
function make_data_strucutre(a,b,make_structure)
{
  make_structure(a,b);
}

make_data_strucutre(3, 3, make_array);
make_data_strucutre(5, 5, make_set); 


function runFunc(){
    console.log("1" + 0);
    console.log("A" - 0);
    console.log(3+2+"7");
    console.log("World" + "World" );
    console.log("Hello"+ "78");
   }
   runFunc();