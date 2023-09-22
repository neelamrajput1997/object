let address = {
        'House No': 123,
        street: '12C',
        state: 'Rajasthan',
        country: 'India'
    };
    // when To access the property in quotes'' like 'building no' property, you need to use the array-like notation: 
      console.log(address['House No'])
   
    console.log(address)
    //Modifying existing property
    address['House No']=258;

    console.log(address)
     // Deleting an property from object
     delete address.state;

     //Adding a new property
     address['pin code']=342005;
     console.log(address)

     //"in" operator to check a property whether that exist in the object or not (true/false)
     console.log('city' in address);