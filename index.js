const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error")


function updateResults(){
    if(inputEl.value < 0 || isNan(inputEl.value)){
        errorEl.innerText = "Please enter a valid number"
        setTimeout(()=>{
            errorEl.innerText = "";
        },2000);
    }
};


inputEl.addEventListener("input", updateResults);