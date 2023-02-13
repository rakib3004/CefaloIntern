function it_specialist(tag) {
    return tag +=" [it-specialist]";
  }
  
  function data_engineer(tag) {
    return tag +=" [data-engineer]";
  }
  
  function security_lead(tag) {
    return tag +=" [security-lead]";
  }
  
  function addTags() {
    let tag = "";
    tag = it_specialist(tag);
    tag = data_engineer(tag);
    tag = security_lead(tag);
    console.log(`All tags are: ${tag}`);
  }
  
  addTags();