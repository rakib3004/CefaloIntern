function toUpper(positionNames){

    return positionNames.toUpperCase()
}


function softwareDevelopers(roleName){
    return roleName.startsWith('S')
}

const positionNames = ["Trainee Eningeer", "Junior Designer", "Associate Project Manager", "Software Engineer", "Software Engineer: Senior", "Lead Architect", "Software Engineer: Chief"]

const positionStoredOnDataBase = positionNames.map(toUpper)

console.log(positionStoredOnDataBase)

const designation = ["Trainee Eningeer", "Junior Designer", "Associate Project Manager", "Software Engineer", "Senior", "Lead Architect", "Chief Software Engineer"]

const softwareRoles = designation.filter(softwareDevelopers)

console.log(softwareRoles)