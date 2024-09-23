const person = {
    firstname: 'Grayson',
    lastName:'Hawthorne',
    get fullName() {
        return `${person.firstname} ${person.lastName}`
    },
    set fullName(value){
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');

        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error('Enter a first and last name.');
        this.firstname = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = '';
}
catch(e) {
    alert(e);
}

console.log(person);