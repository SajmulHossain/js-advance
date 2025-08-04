let name1 = 'Sajmul', name2 = 'Hossain';

const modifier = (strings, ...value) => {
 return strings.reduce((prev, current) => {
    return prev + current + (value.length ? "Mr " + value.shift() : '')
 }, "")
}

console.log(modifier`My first name is ${name1} and second name is ${name2}`);