let number = +prompt("Enter number !")
let array = [1,2,3,4,5,6,7,8,9]

for (let i = 0; i < array.length; i++){
    if (number === array[i]){
        alert("the number " + array[i] + " is at position " + i + " in array")
    }
}