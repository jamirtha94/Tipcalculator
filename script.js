
function totaltip(){   
    var amount = document.getElementById("amount").value;
    var servicequality= document.getElementById("servicequality").value;
    var count= document.getElementById("count").value;


if(amount === "" || servicequality === ""){
    return window.alert("please enter a valid value");
}

if(count == "" || count == 1){
    count = 1;
    document.getElementById("each").style.display="none";
}
else{
    document.getElementById("each").style.display="block";
}

document.getElementById("totaltip").style.display = "block";
var total = (amount*servicequality)/count;
    total = Math.round(total*100)/100;

//document.getElementById("total").style.display = "block";
document.getElementById("tip").innerHTML = total;


}

document.getElementById("calculate").onclick = function() {
    totaltip();
};

document.getElementById("totaltip").style.display="none";
document.getElementById("each").style.display="none";

















    
