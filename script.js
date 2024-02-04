    //changes the background image to either dark or light
    let darkMode = false;
    document.getElementById("btn").addEventListener("click", function() {
        var text = this.innerHTML;
        darkMode = !darkMode;
        if (darkMode) {
            document.body.style.backgroundImage = "url('B2.png')";
            document.body.style.color = "#F2F3F5";
            currentIcon.classList.remove('fa-moon');
            currentIcon.classList.add('fa-sun');
        } else {
            document.body.style.backgroundImage = "url('B1.png')";
            document.body.style.color = "#1E3050";
            currentIcon.classList.remove('fa-sun');
            currentIcon.classList.add('fa-moon');
        }
        
    });


    //changes the button text color to either dark or light
       document.getElementById("btn").addEventListener("click", function() {
        var button = document.getElementById("btn");
        if (button.style.color === "rgb(30, 48, 80)") {
           button.style.color = "#F2F3F5";
        } else {
           button.style.color = "#1E3050";
        }
       });


    //changes the search bar color to either dark or light
       document.getElementById("btn").addEventListener("click", function() {
        var input = document.getElementById("searchInput");
        if (searchInput.style.backgroundColor === "rgb(242, 243, 245)") {
            searchInput.style.backgroundColor = "#1E3050";
        } else {
            searchInput.style.backgroundColor = "#F2F3F5";
        }
    });


    //changes the search btn color to either dark or light
    document.getElementById("btn").addEventListener("click", function() {
        var input = document.getElementById("searchBtn");
        if (searchBtn.style.backgroundColor === "rgb(242, 243, 245)") {
            searchBtn.style.backgroundColor = "#1E3050";
        } else {
            searchBtn.style.backgroundColor = "#F2F3F5";
        }
    });


    //changes the search btn text color to either dark or light
    document.getElementById("btn").addEventListener("click", function() {
        var input = document.getElementById("searchBtn");
        if (searchBtn.style.color === "rgb(30, 48, 80)") {
            searchBtn.style.color = "#F2F3F5";
        } else {
            searchBtn.style.color = "#1E3050";
        }
       });

    
    //changes the footer color to either light or dark
       document.getElementById("btn").addEventListener("click", function() {
        var input = document.getElementById("foot");
        if (foot.style.backgroundColor === "rgb(242, 243, 245)") {
            foot.style.backgroundColor = "#1E3050";
        } else {
            foot.style.backgroundColor = "#F2F3F5";
        }
       });


    //changes the footer text color to either light or dark
       document.getElementById("btn").addEventListener("click", function() {
        var fa = document.getElementById("fa");
        var links = document.querySelectorAll("a");
        var color = (fa.style.color === "rgb(30, 48, 80)") ? "#F2F3F5" : "#1E3050";
        
        fa.style.color = color;
        
        links.forEach(function(link) {
            link.style.color = color;
        });
    });
       

    //changes the footer Link color to either light or dark
    document.getElementById("btn").addEventListener("click", function() {
        var ft = document.getElementById("ft");
        var links = document.querySelectorAll("p");
        var color = (ft.style.color === "rgb(30, 48, 80)") ? "#F2F3F5" : "#1E3050";
        
        ft.style.color = color;
        
        links.forEach(function(link) {
            link.style.color = color;
        });
    });