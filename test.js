let student = {
    name: 'Sarah',
    major: 'CS',
    'Grad Year': '2022',
    greeting: function() { console.log('Hello'); },
    'Fav Teacher': {
        name: 'Thomas',
        course: 'CSE 110'
    },

    courseLoad: ['CSE 110', 'CSE 134', 'VIS 41']
};

console.log(student["Fav Teacher"].name);