let number = 2;
if(number > 0){
    console.log("The number is positive");
    window.alert("The number is positive");
    document.getElementById("demo").innerHTML="The number is positive";
}
else{
    document.getElementById("demo").innerHTML="The number is false";
    console.log("The number is false");
}