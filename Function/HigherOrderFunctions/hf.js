function function1(){
    console.log("Hello, World!");
}

function function2(act){
    act();
}

function2(function1);