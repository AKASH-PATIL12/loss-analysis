var target = 0;
var cylTime = 0;


function calculateTar(){

    //LOGIC FOR GET TARGET 
    cylTime = document.getElementById("cylTime").value
    target = Math.floor(43200 / cylTime); 
    
    let machine = document.getElementById("machine").value
    console.log(machine)

    // SHOWING TARGATE
    document.getElementById("target").innerHTML += machine +"&nbsp &nbsp:"+ target + "<br>"

}




