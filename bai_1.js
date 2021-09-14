let a = 5;
let b = 8;
let x = 0;

if (a === 0 && b === 0){
    alert("Phương trình vô số nghiệm");
}
else if (a !== 0 && b === 0){
    alert("Phương trình có nghiệm x = 0");
}
else if (a === 0 && b !== 0){
    alert("Phương trình vô nhgiệm");
}
else {
    x = -b/a;
    alert("Phương trình có nghiệm x = " + x);
}