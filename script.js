//-------------------------------------------------------CALL--------------------------------------------------
var obj1 = {
    fname : "ayush",
    funprint : function(){
        console.log(this.fname);
    }
}

var obj2 = {
    fname : "keen"
}

//we want to print obj2's fname but we dont want to write funprint again n again, so we can use CALL

obj1.funprint.call(obj2);
//now by above line this points to obj2


function funprint(){
    console.log(this.fname);
}

var obj1 = {
    fname : "ayush",
    
}

var obj2 = {
    fname : "keen"
}

funprint.call(obj2);
funprint.call(obj1);

//we can also pass paramaters

function funprint(age, gender){
    console.log(this.fname, age, gender);
}

var obj1 = {
    fname : "ayush",  
}

funprint.call(obj1, 18, "male");

//-------------------------------------------------------APPLY--------------------------------------------------
// in APPLY we write parameters in array
funprint.apply(obj1, [18, "male"]);

//-------------------------------------------------------BIND--------------------------------------------------
//  BIND converts it into function
var a = funprint.bind(obj1, [18, "male"]);  //typeof a is function
