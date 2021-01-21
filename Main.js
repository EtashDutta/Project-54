function calculate(){
var length=Number(document.getElementById("textinput").value);
var area=length*length;
var perimeter=4*length;
document.getElementById("lablearea").innerHTML=area;
document.getElementById("lableperimetre").innerHTML=perimeter;
    
}
