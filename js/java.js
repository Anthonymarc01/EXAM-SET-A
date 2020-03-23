function random(){
    var a = Math.floor(Math.random() *255)
    var b = Math.floor(Math.random() *255)
    var c = Math.floor(Math.random() *255)
    document.getElementById("motor").style.backgroundColor = "rgb("+a+","+b+","+c+")";
}
function randombody(){
    var a = Math.floor(Math.random() *255)
    var b = Math.floor(Math.random() *255)
    var c = Math.floor(Math.random() *255)
    document.getElementById("mbody").style.backgroundColor = "rgb("+a+","+b+","+c+")";
}

function randomrim(){
    var a = Math.floor(Math.random() *255)
    var b = Math.floor(Math.random() *255)
    var c = Math.floor(Math.random() *255)
    document.getElementById("mrim").style.backgroundColor = "rgb("+a+","+b+","+c+")";
    document.getElementById("mrim1").style.backgroundColor = "rgb("+a+","+b+","+c+")";
}
function specif(){
    if (document.getElementById("dropd").value == "yellow"){
        document.getElementById("mbody").style.backgroundColor = "yellow",
        document.getElementById("mrim").style.backgroundColor = "yellow",
        document.getElementById("mrim1").style.backgroundColor = "yellow";
    }
    else if (document.getElementById("dropd").value == "green"){
            document.getElementById("mbody").style.backgroundColor = "green",
            document.getElementById("mrim").style.backgroundColor = "green",
            document.getElementById("mrim1").style.backgroundColor = "green";
    }
    else if (document.getElementById("dropd").value == "blue"){
            document.getElementById("mbody").style.backgroundColor = "blue",
            document.getElementById("mrim").style.backgroundColor = "blue",
            document.getElementById("mrim1").style.backgroundColor = "blue";
    }
    else if (document.getElementById("dropd").value == "lightblue"){
            document.getElementById("mbody").style.backgroundColor = "lightblue",
            document.getElementById("mrim").style.backgroundColor = "lightblue",
            document.getElementById("mrim1").style.backgroundColor = "lightblue";
    }
    else if (document.getElementById("dropd").value == "lightblue"){
            document.getElementById("mbody").style.backgroundColor = "lightblue",
            document.getElementById("mrim").style.backgroundColor = "lightblue",
            document.getElementById("mrim1").style.backgroundColor = "lightblue";
    }
    else if (document.getElementById("dropd").value == "gray"){
            document.getElementById("mbody").style.backgroundColor = "gray",
            document.getElementById("mrim").style.backgroundColor = "gray",
            document.getElementById("mrim1").style.backgroundColor = "gray";
    }
    else if (document.getElementById("dropd").value == "black"){
            document.getElementById("mbody").style.backgroundColor = "black",
            document.getElementById("mrim").style.backgroundColor = "black",
            document.getElementById("mrim1").style.backgroundColor = "black";
    }
   else if (document.getElementById("dropd").value == "orange"){
            document.getElementById("mbody").style.backgroundColor = "orange",
            document.getElementById("mrim").style.backgroundColor = "orange",
            document.getElementById("mrim1").style.backgroundColor = "orange";
}

}
function reset(){
    document.getElementById("mbody").style.backgroundColor = "white",
    document.getElementById("mrim").style.backgroundColor = "white",
    document.getElementById("mrim1").style.backgroundColor = "white";
}


