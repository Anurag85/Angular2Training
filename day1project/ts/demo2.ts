// Custom Types
class MyClass {
    id:number;
    ename:string;

    constructor(id:number, ename:string){
        this.id = id;
        this.ename = ename;
    }
}

//Using Class
let mc1:MyClass = new MyClass(3, "ABC");
console.log(mc1.id, mc1.ename);

class Student {
    constructor(public sid:number, public sname:string) {}
}

let std1:Student = new Student(12, "Atiksh");
console.log(std1.sid, std1.sname);