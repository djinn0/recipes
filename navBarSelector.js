function generateSelectorNavBar() {
    var x = document.getElementById("navBarLoc");
    var n1 = '<li class="navigation-element"><a href="index.html">Home</a></li>';
    var n2 = '<li class="navigation-element"><a href="index.html">New Recipes</a></li>';
    var n3 = '<li class="navigation-element"><a href="index.html">Menu</a></li>';
    var n4 = '<li class=navigation-element"><label class="switch"><input type="checkbox" checked><span class="slider"></span></label></li>';
    
    x.insertAdjacentHTML('afterend','<ul class="footer-bar" id="fb">' + n1 + n2 + n3 + n4 + '</ul>');
    





}
