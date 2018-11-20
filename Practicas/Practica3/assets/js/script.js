(function() {

    window.addEventListener("load", function(e) {
        document.getElementById("video").play();
    });

    var pulsado = false;

    document.getElementById("botonHeader").addEventListener("click", function(e) {
        e.preventDefault();
        
        if(!pulsado) {

        }
        
        document.getElementById("headerElement1").style.display = "block";
        
        
        document.getElementById("headerElement2").style.display = "block";


        document.getElementById("headerElement3").style.display = "block";


        document.getElementById("headerElement4").style.display = "block";
    });

})();