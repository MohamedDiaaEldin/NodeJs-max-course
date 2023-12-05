// var studentName = 'mohamed' 


// function printName(name) {
//     console.log(name)
// }   

// printName(studentName)

//................ 

// let sName = 'mohamed'
// sName = 'ali'
// console.log(sName)
// // can't assign to constant variable
// const sAge = 10 
// console.log(sAge)
//................ 


// const printName = (name)=>{
//     console.log(name)
// }

// printName('ali')


// // Objects

// const person = {
//     name:'max', 
//     age:20, 
//     greet(){
//         console.log('my name is ', this.name, ' and my age is ', this.age)
//     }
// }
// console.log(person)
// person.greet()

//................ 

// const hobbies = ['Sports', 40]
// console.log(hobbies)


// for (let hobby of hobbies){
//     console.log(hobby)
// }

//...........................


// const newHobbies = hobbies.map(hobby =>hobby + ' ADDED')
// console.log(newHobbies)
// console.log(hobbies)

// const r = hobbies.forEach( hobby =>{
//     console.log(hobby + ' new')
// })
// console.log(hobbies)

//...........................

// const hobbies = ['Sports', 40]

// // const newHobbies = hobbies.slice()
// const newHobbies = [...hobbies]
// newHobbies.push('gym')
// console.log(hobbies)
// console.log(newHobbies)


// const toArray = (...args)=>{
//     return args
// }

// console.log(toArray(1,2,3))

const person = {
    name:'ali', 
    age: 20
}

// const printName = ({name})=>{
//     console.log(name)
// }

// printName(person)
 
// const {name, age} = person
// // const {name:newName, age:newAge} = person
// console.log(newName, newAge)


// const hobbies = ['football' ,'gym', 'sports']
// const [firstHobby, secondHobby] = hobbies
// console.log(firstHobby)
// console.log(secondHobby)


////   Async code 
// const cb = ()=>{
//     console.log('hello there')
// }

// setTimeout(cb, 3000)

// console.log('out the timer')

// const fetchData = callBack =>{
//     setTimeout( ()=>{
//         callBack('data is done')
//     }, 2000 )
// }

// const data = fetchData( data => {console.log(data)})


/// Promises
const fetchData =   async ()=>{
    
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{resolve('done')}, 3000 )
    }) 
    return promise
    // const data =  await promise
    // console.log(data)


}
//  fetchData().then(data => {
//     console.log(data)
// })

// using async await 
fetchData()

