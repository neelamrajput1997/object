address = {
        'House No': 123,
        street: '12C',
        state: 'Rajasthan',
        country: 'India'
    };

    //for loop to iterate each value
    for(let key in address){
        console.log(key)
    }

    //for loop to iterate each property value
    for(let key in address){
        console.log(key+":"+address[key])
    }