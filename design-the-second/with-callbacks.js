function it_specialist(tag, callback) {
     tag +=" [it-specialist]";
     callback(tag);
  }
  
  function data_engineer(tag, callback) {
     tag +=" [data-engineer]";
     callback(tag);
  }
  
  function security_lead(tag, callback) {
     tag +=" [security-lead]";
     callback(tag);
  }
  
  function addTags() {
    let tag = "";

    it_specialist(tag,(tag1)=>
    {
        data_engineer(tag1,(tag2)=>{
            security_lead(tag2, (tag3)=>{
                console.log(`All tags are: ${tag3}`);
            })

        });
    });

  }
  
  addTags();