const bsse1129 = {
 placementDetails: function(){
    return this.companyName+ ' at ' +this.companyAddress+ ' start from '+this.startDate;
 }
}


const rakib = {
    companyName:"Cefalo Bangladesh Ltd.",
    companyAddress:"Dhanmondi",
    startDate:"02Jan2023"
}

var details_info =bsse1129.placementDetails.call(rakib);

console.log(details_info);



const student = {
    roll:"bsse1104",
    positiion: "1st",
    fullName: function () {
      return this.roll + " is " + this.positiion;
    }
  }
  
  const user = {
    roll:"bsse1129",
    positiion: "5th",
  }
  
  let result = student.fullName.bind(user);

  console.log(result());

