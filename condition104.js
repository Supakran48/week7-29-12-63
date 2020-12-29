let password = 'p@ssword';
console.log(password.Length); //8


if(password.Length>=8 && password.includes('@')){
    let x = password.length;
    console.log("That password is mighty strong" + x);
    document.getElementById("demo").innerHTML="The password is long enough : " + x;
}
else if(password.Length>=8 ){
    let x = password.length;
    console.log("That password is long enough" + x);
    document.getElementById("demo").innerHTML="The password is long enough : " + x;
}