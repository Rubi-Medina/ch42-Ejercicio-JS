let student1Courses = ['Matematica', 'Ingles', 'Programacion'];
let student2Courses = ['Geografia', 'Español', 'Programacion'];

let commonCourses = student1Courses.filter(course => student2Courses.includes(course));

if (commonCourses.length > 0) {
    console.log('Common courses:', commonCourses.join(', '));
} else {
    console.log('No common courses.');
}
