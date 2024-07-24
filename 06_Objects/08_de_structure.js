const course={
    id:1,
    title:'JavaScript',
    instructor:'John Doe',
    students:200
}

//console.log(course.students)
const {students} = course
console.log(students) //200

//updating the value
course.students=300
console.log(course.students) //300

//update the name 
const {students: std}=course





 