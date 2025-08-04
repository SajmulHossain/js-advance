const people = [
    { name: 'Sajmul', designation: 'Developer' },
    { name: 'Hossain', designation: 'Programmer' },
    { name: 'Zihan', designation: 'Programmer' },
    { name: 'Sajmul', designation: 'Developer' },
]

// const group = {};

// people.forEach(pp => {
//     if(!group[pp.designation]) {
//         group[pp.designation] = [];
//     }
//     group[pp.designation].push(pp.name)
// })

// const group = people.reduce((pp, des) => {
//     const gp = des.designation;

//     if(!pp[gp]) {
//         pp[gp] = [];
//     }

//     pp[gp].push(des);
//     return pp;
// }, {})

const group = Object.groupBy(people, p => p.designation);

console.log(group);