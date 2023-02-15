const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
  if (!hasMeeting) {
    const meetingDetails = {
      name: "Technical Meeting",
      location: "Google Meet",
      time: "10:00 PM",
    };
    resolve(meetingDetails);
  } else {
    reject(new Error("Meeting already scheduled!"));
  }
});


const addToCalendar = (meetingDetails) => {
        const calendar = `${meetingDetails.name} has been on ${meetingDetails.location} at ${meetingDetails.time}`;
        const details = JSON.stringify(meetingDetails);
        const obj = [calendar,details];
      return Promise.resolve(obj); 
}



async function myMeeting(){

    try{
        const meetingDetails = await meeting;
        const calendar = await addToCalendar(meetingDetails);
        console.log(calendar);
    }
   catch{
    console.log(`Something wrong happened`);
   }
}

myMeeting();