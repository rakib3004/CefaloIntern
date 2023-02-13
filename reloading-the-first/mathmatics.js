while(0){
    console.log(Math.random()*77-101)

}

const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' :: ' );
console.log(madeAString);
// returns 'I love chocolate frogs'

const madeAnotherString = myArray.join();
console.log(madeAnotherString);

function picnicInvitation(batch = 'BSSE 12') {
    console.log(`Assalamu alaikum vai, I am from ${batch} batch!`);
  }
  
  picnicInvitation('BSSE 13'); // Hello Ari!
  picnicInvitation();      // Hello Chris!