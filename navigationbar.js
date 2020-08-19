function generateNavBar(){
    /* A function that generates the HTML for a navigation bar on a webpage */
    /* <script src="navigationbar.js"></script> should be added to the <head> */
    /* <div id="navBarLoc"></div> and <script>generateNavBar();</script> should be added as the first elements in <body> */
    var x = document.getElementById("navBarLoc");
    const n1 = '<li class="navigation-element"><a href="index.html">Home</a>'; /*1st element of Navigation bar */
    const n2 = '<li class="navigation-element"><a href="new.html">New Recipes</a></li>' /*2nd element of Navigation bar */
    /*Additional Navigation bar elements can be added here */
    /*<li class="dropdown"><a href="#" class="dropbtn">Dropdown</a><div class="dropdown-content"></div>*/
    const d1 = '<a href="list.html">Recipe Index</a>';
    const d2 = '<a href="glossary.html">Glossary</a>';
    const d3 = '<a href="jspractice.html">Link 3</a>';
    x.insertAdjacentHTML('afterbegin', '<ul class="navigation-bar">' + n1 + n2 + '<li class="dropdown"><a href="#" class="dropbtn">Menu</a><div class="dropdown-content">' + d1 + d2 + d3 + '</div></ul><br>')
    
    /*
    document.getElementsByClassName("navigation-bar").style.listStyleType = "none";
    document.getElementsByClassName("navigation-bar").style.margin = "0"; 
    document.getElementsByClassName("navigation-bar").style.padding = "0";
    document.getElementsByClassName("navigation-bar").style.backgroundColor = "red";
    document.getElementsByClassName("navigation-bar").style.position = "fixed";
    document.getElementsByClassName("navigation-bar").style.top = "0";
    document.getElementsByClassName("navigation-bar").style.width = "100%";
    */


}
