document.addEventListener('DOMContentLoaded', function() {
    const coursesList = document.getElementById('courses-list');
    const addCourseButton = document.getElementById('add-course');

    // Sample data
    let courses = [
        { name: 'Course 1', items: ['VIDEO', 'NOTES', 'TEST', 'ASSIGNMENT'] },
        { name: 'Course 2', items: ['VIDEO', 'NOTES', 'TEST', 'ASSIGNMENT'] },
        { name: 'Course 3', items: ['VIDEO', 'NOTES', 'TEST', 'ASSIGNMENT'] }
    ];

    function renderCourses() {
        coursesList.innerHTML = '';
        courses.forEach((course, index) => {
            const courseDiv = document.createElement('div');
            courseDiv.className = 'course';
            courseDiv.innerHTML = `
                <h3>${course.name}</h3>
                <ul>
                    ${course.items.map(item => `<li>${item}</li>`).join('')}
                </ul>
                <button onclick="editCourse(${index})">Edit</button>
                <button onclick="deleteCourse(${index})">Delete</button>
            `;
            coursesList.appendChild(courseDiv);
        });
    }

    window.editCourse = function(index) {
        const newName = prompt('Enter new course name:', courses[index].name);
        if (newName) {
            courses[index].name = newName;
            renderCourses();
        }
    };

    window.deleteCourse = function(index) {
        if (confirm('Are you sure you want to delete this course?')) {
            courses.splice(index, 1);
            renderCourses();
        }
    };

    addCourseButton.addEventListener('click', function() {
        const courseName = prompt('Enter course name:');
        if (courseName) {
            courses.push({ name: courseName, items: ['VIDEO', 'NOTES', 'TEST', 'ASSIGNMENT'] });
            renderCourses();
        }
    });

    renderCourses();
});