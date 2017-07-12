"use strict";
// Custom Types
var MyClass = (function () {
    function MyClass(id, ename) {
        this.id = id;
        this.ename = ename;
    }
    return MyClass;
}());
//Using Class
var mc1 = new MyClass(3, "ABC");
console.log(mc1.id, mc1.ename);
var Student = (function () {
    function Student(sid, sname) {
        this.sid = sid;
        this.sname = sname;
    }
    return Student;
}());
var std1 = new Student(12, "Atiksh");
console.log(std1.sid, std1.sname);
