const myObject = {
    myMethod(items) {
      console.log(this); // logs myObject
      const callback = () => {
        console.log(this); // logs myObject
      };
      items.forEach(callback);
    }
  };
  myObject.myMethod([1, 2, 3]);




  
  setTimeout(function Internship(){
    console.log(`Internship`);

    
  setTimeout(function Graduation(){
    console.log(`Graduation`);
    setTimeout(function Job(){
      console.log(`Job`);
    },20);
  

  },30);

  },40);




  const movies = [
    { title: `A New Hope`, body:`After Princess Leia, the leader of the Rebel Alliance, is held hostage by Darth Vader, Luke and Han Solo must free her and destroy the powerful weapon created by the Galactic Empire.`},
    { title: `The Empire Strikes Back 1`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet A.` },
    { title: `The Empire Strikes Back 2`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet B.` },
    { title: `The Empire Strikes Back 3`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet C.` },
    { title: `The Empire Strikes Back 4`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet D.` },
    { title: `The Empire Strikes Back 5`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet E.` },
    { title: `The Empire Strikes Back 6`, body: `Darth Vader is adamant about turning Luke Skywalker to the dark side. Master Yoda trains Luke to become a Jedi Knight while his friends try to fend off the Imperial fleet F.` },

  ]
    var timer = 1000;
    function getMovies(){
        setTimeout(() => {
            movies.forEach((movie, index) => {

              setTimeout(() => {  

                console.log(movie.title)
              },timer);
              
              timer=timer+1000;

                
        })
    }, 2000);

  }
    
    getMovies();  

  
  


