// function(firstName) {
//     return `Dr. ${firstName}`
// }

// //Anon function
// // function (firstName) {
// //     return `Dr. ${firstName}`;
// // }

// //function expression
// const doctorize = function (firstName) {
//     return `Dr. ${firstName}`;
// // }
// console.log('working')
// const inchToCM = (inches) => inches * 2.54;
     
// function add(a,b = 3) {
//     const total = a + b;
//     return total
// } 

// const add = (a, b = 3) => a + b;

// function makeABaby (first, last) {
//     const baby = {
//         name: `${first} ${last}`,
//         age = 0;
//     }
//     return baby;
// }


// const makeABaby = (first, last) => ({ name: `${first} ${last}`, age : 0 });

//IIFE
//Immediately Invoked Function Expression

// (function() {
//     console.log('running the anon function');
//     return 'You ARE COOL!'
// })();

// Methods!!!

const Wes = {
    name: 'sean ruhland',
    sayHi: function() {
        console.log('Hioo')
        return 'Hey Wes'
    },
    yellHi() {
        console.log('HEY SEANNNNNNNN')
    },
    whisperHi: () => {
        console.log('this is a whisper')
    }
}

//callback function
//click callback
const button = document.querySelector('.clickMe')

button.addEventListener('click', Wes.yellHi);

function handleClick() {
    console.log('Great Clicking!')
}
button.addEventListener('click', function() {
    console.log('NIce JOb!');
});
