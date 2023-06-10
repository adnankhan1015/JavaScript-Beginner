const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    get fullName() {
        return `${person.firstName} ${person.lastName}`
    },
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a String')
        const parts = value.split(' ');
        if (parts.length !== 2)
            throw new Error("Enter First and Last Name")
        this.firstName = parts[0]
        this.lastName = parts[1]
    }
};

try {
    person.fullName = ''
} catch (error) {
    console.log(error)
}

console.log(person.fullName)

// firstName = '', lastName = undefined



/* 
    * getters => Used to access porperties in an object
    * Setters => to change or (MUTATE) them

*/