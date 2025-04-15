const tempInput = document.getElementById("tempInput");
const  toFahrenheit =document.getElementById("toFahrenheit");
const toCelcius = document.getElementById("toCelcius");
const result = document.getElementById("result");

let temp;

function tempConversion(){
    if(toFahrenheit.checked){
        temp = Number(tempInput.value)
        temp= temp*9/5+32;
        result.textContent=temp.toFixed(2)+"⁰F";

    }
    else if(toCelcius.checked){
        temp = Number(tempInput.value);
        temp=(temp-32)*(5/9);
        result.textContent=temp.toFixed(2)+"⁰C";

    }
    else{
        result.textContent ="Select an unit";
    }
}
