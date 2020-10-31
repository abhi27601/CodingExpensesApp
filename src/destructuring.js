console.log("asa");
const person = {
    name:'Abhi',
    age:28,
    location: {
        city:'Bangalore',
        temp:25
    }
}
console.log(`${person.name} is ${person.age}`)
const {name,age} = person;
const {city,temp : temperature} = person.location
console.log(`${name} is ${age}`)
console.log(`${city} ${temperature}`)

const address = ['street','area','pinocde']
const [street,area,pincode] = address;
console.log(`${street}`)