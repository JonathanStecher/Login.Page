document.getElementById("open").style.display = "none";
document.getElementById("backbutton").style.display = "none";
document.getElementById("success").style.display = "none";
document.getElementById("end").style.display = "none";

document.getElementById("close").onclick = function() { 
    document.getElementById("cont").style.display = "none";
    document.getElementById("open").style.display = "block"; 
} 

document.getElementById("open").onclick = function() {
    document.getElementById("cont").style.display = "block";
    document.getElementById("open").style.display = "none"; 
}

document.getElementById("submit").onclick = function() {
    document.getElementById("cont").style.display = "none";
    document.getElementById("backbutton").style.display = "block";
    document.getElementById("success").style.display = "block";
    document.getElementById("end").style.display = "block";
}

document.getElementById("backbutton").onclick = function() {
    document.getElementById("cont").style.display = "block";
    document.getElementById("backbutton").style.display = "none";
    document.getElementById("success").style.display = "none";
    document.getElementById("end").style.display = "none";

}
