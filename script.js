'use strict';
const person = {
    name: 'Alex',
    tel: '+79134445566',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    },
};

const clone = JSON.parse(JSON.stringify(person));
clone.parents.mom = 'Ann';
console.log(person);
console.log(clone);