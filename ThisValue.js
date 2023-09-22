// let person = {
//         firstName: 'John',
//         lastName: 'Doe',
//         greet: function () {
//             console.log('Hello, World!');
//         },
//         getFullName: function () {
//             return this.firstName + ' ' + this.lastName;
//         }
//     };
    
    
//     console.log(person.getFullName());
let location={
        country:'India',
        state: 'Rajasthan',
        city:function(){
                console.log(Jodhpur)
        },
        getDetails:function(){
                return this.country+"" + 'and'+ "" +this.state;
        }

} 
console.log(location.getDetails());