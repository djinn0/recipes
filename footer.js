function generateFooter()
{
    /* A function that generates the HTML for a footer on a webpage */
    /* <script src="footer.js"></script> should be added to the <head> */
    /* <div id="footerLoc"></div> and <script>generateFooter();</script> should be added as the last elements in <body> */
    let x = document.getElementById("footerLoc");
    let d = new Date();
    let n = d.getFullYear(); /* Adds current year to footer */
    let f1 = `<li class="footer-element"><a href="https://www.linkedin.com/in/david-redd">&copy David Redd ${n}</a></li>`
    let f2 = '<li class="footer-element"><a href="aboutme.html">About</a></li>'
    let f3 = '<li class="footer-element"><a href="aboutme.html">Contact</a></li>'
    x.insertAdjacentHTML('afterend','<ul class="footer-bar" id="fb">' + f1 + f2 + f3 + '</ul>');
    x.insertAdjacentHTML('afterend', '<br><br>')


    /*styling for footer*/
    let f = document.getElementById("fb");
    f.style.backgroundColor="#333";
    f.style.color = "white";
    f.style.padding = "0px";
    f.style.display = "block";
    f.style.bottom = "0";
    f.style.width = "100%";
    f.style.boxShadow = "0px 30px 0px 30px #333";

    
    let fb = document.getElementById("fb");
    fb.style.listStyleType = "none"
    
      /*
          var y = f.getElementsByTagName("a");
          var i;
          for (i = 0; i < y.length; i++) {
          s[i].style.backgroundColor = "red";
          }
        */
    

}
