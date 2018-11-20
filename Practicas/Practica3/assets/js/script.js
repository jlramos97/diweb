(function() {

    if (document.getElementById("video") !== null) {
        window.addEventListener("load", function(e) {
            document.getElementById("video").play();
        });
    }

})();