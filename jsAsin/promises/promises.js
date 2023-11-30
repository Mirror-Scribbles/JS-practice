let Users = [
{
name: 'carlos',
age: 24,
kids: 0,
}, 
{
    name: 'carlos',
    age: 31,
    kids: 0,
},
{
    name: 'carlos',
    age: 49,
    gender: 'male',
    kids: 0
}
];


console.log(Users);

const printUser1 = () =>{
    console.log(Users);
    console.log('here is the list of user!');

}
printUser1();

const FuntionWithTimeOut = setTimeout(() => {
    console.log(Users);
    console.log('user with time out');

}, 3000);


const promiseFuntion = () => {
    return new Promise((resolve, reject) => {
        if(Users.length == 0){
            reject('No file found')
        }else{
            setTimeout(()=>{
                console.log(Users)
                resolve('The file is being compile')
            }, 3000)
        }
    })
}
promiseFuntion()
.then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});
