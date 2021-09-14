function Neg(string) {
    let arr  = string.split("");
    let count = 0;
    for (let i = 0; i < arr.length; i++ ){
        switch (arr[i]) {
            case "a":
                count++;
                break;
            case "o":
                count++;
                break;
            case "e":
                count++;
                break;
            case "u":
                count++;
                break;
            case "i":
                count++;
                break;
        }
    }
    return count;
}
let string = prompt("Enter string ")
alert(Neg(string));
