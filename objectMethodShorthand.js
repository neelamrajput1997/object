let fruites = {
        summer: 'Banana',
        winter: 'Grapes',
        monsoon() {
            console.log('Apple');
        }
    };
   // console.log(fruites)
    //fruites.monsoon();
    for(let key in fruites){
        console.log(key+":"+fruites[key])
    }