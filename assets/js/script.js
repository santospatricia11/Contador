var correntNumberWrapper = document.getElementById("correntNumber");
var correntNumber =0;

function increment(){
    correntNumber = correntNumber+1;
    correntNumberWrapper.innerHTML=correntNumber;
}

function decrement(){
    correntNumber = correntNumber-1;
    correntNumberWrapper.innerHTML=correntNumber;
}
