function generateSelectorNavBar() {
    /* - Elements of Navigation bar  (e = Element, edc = dropdown content, dm = dropdown menu)*/
    var x = document.getElementsByTagName("body")[0];
    var e1 = '<li class="navigation-element"><a href="index.html">Home</a></li>';
    var e2 = '<li class="navigation-element"><a href="index.html">New Recipes</a></li>';
    var edc1 = '<a href="list.html">Recipe Index</a>';
    var edc2 = '<a href="glossary.html">Glossary</a>'; 
    var edm = '<div class="dropdown-content">' + edc1 + edc2 + '</div>';
    var e3 = '<li class="navigation-element" id="dropdown"><a href="#">Menu</a>' + edm + '</li>';
    var e4 = '<li class=navigation-element"><label class="switch"><input type="checkbox" checked><span class="slider"></span></label></li>';
    
    x.insertAdjacentHTML('afterbegin','<ul class="navigation-bar" id="nb">' + e1 + e2 + e3 + e4 + '</ul>');
    
    var s = document.getElementsByTagName("style")[0];
    
    /* - Styling of Navigation Bar (sn = Styling Navigation) */
    var sn1 = ' .navigation-bar { list-style-type: none; margin: 0; padding: 0; background-color: #333; position: fixed; top: 0; width: 100%;} ';	
    var sn2 = ' .navigation-element {float: left;}' ;
    var sn3 = ' .navigation-element a{display: inline-block; padding: 10px 6px; text-decoration: none; color: white;}' ;
    var sn4 = ' .navigation-element a:hover{ background-color: #111}'
    var sn5 = ' .dropdown-content {display: none; position: absolute; background-color: #333; min-width: 160px; box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2); z-index: 1; }'
    var sn6 = ' #dropdown:hover .dropdown-content {display: block;}'; /*display menu content on hover */
    var sn7 = ' .dropdown-content a{display: block;}'
    
    /* - Styling of Sliding Switch */
    var selectorStyling = '';
    
    var ss1 = '.switch {position: relative; vertical-align: -12px; display: inline-block; width: 36px; height: 20px; } '
    var ss2 = '.slider {position: absolute; cursor: pointer; top: 0; left: 0; right: 0; bottom: 0; background-color: #CCC; transition: .4s; border-radius: 34px;}'
    var ss3 = '.slider:before {position: absolute; content: ""; height: 16px; width: 16px; left: 2px; bottom: 2px; background-color: white; transition: .4s; border-radius: 50%;}'
    var ss4 = 'input:checked + .slider { background-color: #2196F3; }'
    var ss5 = 'input:checked + .slider:before { transform: translateX(16px); }'
    s.innerHTML = sn1 + sn2 + sn3 + sn4 + sn5 + sn6 + sn7 + ss1 + ss2 + ss3 + ss4 + ss5;
    
}

	