'use strict';
const person = {
    name: 'Alex',
    tel: '+79134445566',
    age: 25,
    parents: {
        mom: 'Olga',
        dad: 'Mike',
        married: 20,
    },
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(JSON.stringify(person));
console.log(person);
console.log(JSON.stringify(clone));
console.log(clone);