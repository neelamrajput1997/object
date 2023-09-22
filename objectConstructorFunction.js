let student = {
        firstName: 'Neelam', lastName: 'Rajput',age: '26',class: 12,
}

function Student(first, last, age, cls) {
        this.firstName = first;
        this.lastName=last;
        this.age=age;
        this.class=cls;
        this.getName()
}
let student1=new Student("Nicky","Pundir",15,10);
let student2=new Student("Asha","Acharya",27,12)
let student3=new Student("Rahul","Singh",11,5)
student1.name=function(){
       return this.firstName+""+this.lastName;
}

console.log(student1.name())