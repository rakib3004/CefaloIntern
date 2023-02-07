function myFunction(){

    console.table([{'university':'university of dhaka', 'address':'dhaka'},{'university':'university of rajshahi', 'address':'rajshahi'},{'university':'KUET', 'address':'dhaka'},{'university':'SUST', 'address':'sylhet'},{'university':'BAU', 'address':'mymensingh'}])
    console.log(this);
   
}
myFunction();

function myObject = {

    findFullLanguageName(){
        console.table([{'language':'C Programming', 'extension':'.c'},{'language':'Java', 'extension':'.java'},{'language':'Python', 'extension':'.py'},{'language':'Javascript', 'extension':'.js'},{'language':'C Sharp', 'extension':'.cs'} ])
        console.log(this)
    }

}