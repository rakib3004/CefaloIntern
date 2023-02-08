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



