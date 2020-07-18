function generateFooter()
{
    /* A function that generates the HTML for a footer on a webpage */
    /* <script src="footer.js"></script> should be added to the <head> */
    /* <div id="footerLoc"></div> and <script>generateFooter();</script> should be added as the last elements in <body> */
    var y = document.getElementById("footerLoc");
    var d = new Date();
    var n = d.getFullYear();
    y.insertAdjacentHTML('afterbegin',`<footer id="footer">© David Redd ${n}</footer>`);
    document.getElementById("footer").style.backgroundColor = "#333";
    document.getElementById("footer").style.color = "white";
    document.getElementById("footer").style.padding = "5px";
    document.getElementById("footer").style.display = "block";
    document.getElementById("footer").style.bottom = "0";
}
