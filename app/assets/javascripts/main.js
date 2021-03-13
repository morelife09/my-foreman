// alert('Hello')

//  var, let, const

// let name = 'Tom';
// name = 'Tim';
// console.log('Hello' + name);

// function hello(name, age) {
//   // let name = 'Code Mafia';
//   console.log('Hello ' + name + age);
//   return name + age;
// }

// hello('Code Mafia ', 10);
// const returnval = hello('Code Mafia2 ', 20);
// console.log(returnval);

// let hello = 'hello world';
// console.log(hello.length;

// const arry = [1, 2, 3, 4, 5, 6, 'moji', false];
// arry.unshift('new item');
// console.log(arry);

// const person = {
//   name: ['code', 'Mafia'],
//   age: 32,
//   gender: 'male',
//   interests: {
//     sports: 'soccer',
//     music: 'piano'
//   }
//   getFullName: function () {
//     console.log(this.name[0] + this.name[1])
//   }
// };

// const agekey = 'age';
// person[agekey] = 12;
// console.log(person.age);
// person.getFullName();

// const arry = [1,2,3,4,5,6];

// for (let i = 0; i < arry.length; i++) {
//   console.log(arry[i]);
// }


// const todos = [
//   {
//     id: 1,
//     title: 'Go to school',
//     completed: true
//   },
//   {
//     id: 2,
//     title: 'Got o museum',
//     completed: true
//   },
//   {
//     id: 3,
//     title: 'Go to shopping',
//     completed: true
//   },
// ]

// for (let i in todos) {
//   let todo = todos[i];
//   if (todo.completed === true) {
//     console.log(i, todo.title);
//   }
// }

// if (0 == '0' && 0 === '0') {
//   console.log('this is true');
// } else {
//   console.log('this is in false');
// }

// function hello(callback) {
//   console.log(callback);
//   console.log('hello ' + callback());
// }

// function getName() {
//   return 'Code Mafia';
// }
// const getFirstNme = function () {
//   return 'Code ';
// }

// hello(function (name) {
//   return 'Code ' + name;
// });

// const btn = document.querySelector('%btn');
// const h1 = document.querySelector('h1');
// h1.style.color = 'red';

// function hello() {
// };

// btn.addEventListener('click', hello);
// btn.removeEventListener('click', hello);

document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('#btn');
    const ta = new TextAnimation('.animate-title');
    const ta2 = new TextAnimation('.animate-title-2');
    setTimeout(() => {
        ta.animate();
        ta2.animate();
      btn.addEventListener('click', ta.animate.bind(ta));
    });
});

class TextAnimation {
    constructor(el) {
        this.el = document.querySelector(el);
        this.chars = this.el.innerHTML.trim().split("");
        this.el.innerHTML = this._splitText();
    }
    _splitText() {
        return this.chars.reduce((acc, curr) => {
            curr = curr.replace(/\s+/, '&nbsp;');
            return `${acc}<span class="char">${curr}</span>`;
        }, "");
    }
    animate() {
        this.el.classList.toggle('inview');
    }
}
