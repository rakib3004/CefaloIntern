
function register_building(){
    throw new Error('Please come after lunch.')
}

function department(){
register_building();
}

function faculty()
{
department();
}

function unit(){
faculty();
}
function university(){
unit();
}

university();

