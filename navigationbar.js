function generateNavBar(){
    /* A div with an id of "test" should be added as the first element of the <body> to generate a nav bar at the top of the website */
    var x = document.getElementById("test");
    const n1 = '<li class="navigation-element"><a href="index.html">Home</a>'; /*1st element of Navigation bar */
    const n2 = '</li><li class="navigation-element"><a href="new.html">New Recipes</a></li>' /*2nd element of Navigation bar */
    /*Additional Navigation bar elements can be added here */
    /*<li class="dropdown"><a href="#" class="dropbtn">Dropdown</a><div class="dropdown-content"></div>*/
    const d1 = '<a href=list.html">Recipe Index</a>';
    const d2 = '<a href="glossary.html">Glossary</a>';
    const d3 = '<a href="#">Link 3</a>';

    x.insertAdjacentHTML('afterbegin', '<ul class="navigation-bar">' + n1 + n2 + '<li class="dropdown"><a href="#" class="dropbtn">Menu</a><div class="dropdown-content">' + d1 + d2 + d3 + '</div></ul>')
    }
