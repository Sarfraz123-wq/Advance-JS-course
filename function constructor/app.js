// let student1 = {
//     name: "Sarfaraz",
//     id:007,
//     institute:"UBIT"
// }
// let student2 = {
//     name: "Tahir",
//     id:001,
//     institute:"Economics"
// }
// console.log(student1);
// console.log(student1.name);

// console.log(student2);
// console.log(student2.name);
// agar is tarah ka kam karna ho to ham object create nahi krte balke function constructor create krte hain wo as a general kaam krega.

function students(name,id,institute){
    this.Name = name;
    this.Id = id;
    this.Institute = institute;
}
const stud1 = new students("Sarfraz",007,"UBIT");
const stud2 = new students("Tahir",001,"Economics");
console.log(stud1);
console.log(stud1.Name);

console.log(stud2);
console.log(stud2.Name);
// ye code general he. ye sahih way he agar more than one objects create krne hain same ya kuch properties same hon to.
