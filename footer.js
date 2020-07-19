function generateFooter()
{
    /* A function that generates the HTML for a footer on a webpage */
    /* <script src="footer.js"></script> should be added to the <head> */
    /* <div id="footerLoc"></div> and <script>generateFooter();</script> should be added as the last elements in <body> */
    var x = document.getElementById("footerLoc");
    var d = new Date();
    var n = d.getFullYear(); /* Adds current year to footer */
    x.insertAdjacentHTML('afterbegin',`<footer id="footer"><ul class="footer-bar" id="fb"><li class="footer-element">© David Redd ${n}</li><li class="footer-element">about me</li></ul></footer>`);
    
    /*styling for footer*/
    var f = document.getElementById("footer");
    f.style.backgroundColor="#333";
    f.style.color = "white";
    f.style.padding = "5px";
    f.style.display = "block";
    f.style.bottom = "0";

    
    var fb = document.getElementById("fb");
    fb.style.listStyleType = "none"
    
    
    document.getelementById("fe1").style.color = "red";
    document.getelementById("fe2").style.display = "inline-block";
}
