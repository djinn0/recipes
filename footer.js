function generateFooter()
{
    /* A function that generates the HTML for a footer on a webpage */
    /* <script src="footer.js"></script> should be added to the <head> */
    /* <div id="footerLoc"></div> and <script>generateFooter();</script> should be added as the last elements in <body> */
    var x = document.getElementById("footerLoc");
    var d = new Date();
    var n = d.getFullYear(); /* Adds current year to footer */
    x.insertAdjacentHTML('afterbegin',`<ul class="footer-bar" id="fb"><li class="footer-element"><a class="flink" href="https://www.linkedin.com/in/david-redd">&copy David Redd ${n}</a></li><li class="footer-element">About this</li></ul>`);
    
    /*styling for footer*/
    var f = document.getElementById("fb");
    f.style.backgroundColor="#333";
    f.style.color = "white";
    f.style.padding = "0px";
    f.style.display = "block";
    f.style.bottom = "0";
    f.style.width = "100%"

    /*
    var a = f.getElementsByClassName("flink");
    a[0].color = "inherit"
    */
   
    
    var fb = document.getElementById("fb");
    fb.style.listStyleType = "none"
    
      /*
          var y = f.getElementsByTagName("a");
          var i;
          for (i = 0; i < y.length; i++) {
          s[i].style.backgroundColor = "red";
          }
        */
    

}
