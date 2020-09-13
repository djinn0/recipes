function generateFooter()
{
    var x = document.getElementsByTagName("body")[0];
    let d = new Date();
    let n = d.getFullYear(); /* Adds current year to footer */
    let f1 = `<li class="footer-element"><a href="https://www.linkedin.com/in/david-redd">&copy David Redd ${n}</a></li>`
    let f2 = '<li class="footer-element"><a href="aboutme.html">About</a></li>'
    let f3 = '<li class="footer-element"><a href="aboutme.html">Contact</a></li>'
    x.insertAdjacentHTML('beforeend','<ul class="footer-bar" id="fb">' + f1 + f2 + f3 + '</ul>');

    /* Styling of Footer Bar (sf = Styling Footer) */
    
    var s = document.getElementsByTagName("style")[0];
    var sf1 = '.footer-bar{ list-style-type: none; margin: 0; padding: 0; background-color: #333; width: 100%; position: relative; top: 50%;}';
    var sf2 = '.footer-element{float: left;}'
    var sf3 = '.footer-element a{display: inline-block; padding: 10px 6px; text-decoration: none; color: white; }'
    var sf4 = ' .footer-element a:hover{ background-color: #111}'
    s.insertAdjacentHTML('beforeend', sf1 + sf2 + sf3 + sf4);


}
