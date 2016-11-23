$(document).ready(function () {
    var url = window.location.href; // Get the url from the iframe
    var file = url.split('&rft_id=info:doi/')[1]; // Remove everything before and including &rft_id=info:doi/ - Make sure your openrul contains &rft_id=info:doi/
    console.log(file);
    var doi = file.split("&")[0]; // Remove everything including and after &
    console.log(doi);
    var doiurl = "http://dx.doi.org/" + doi; // Add your ezproxy and base doi urls here
    console.log(doiurl);
    if (doi.length > 0) { // If there is a doi:
        $("ul").last().prepend(
            '<li>DOI Link available: <a href="https://login.ezproxy.leidenuniv.nl:2443/login?URL=' + doiurl + '" target="_blank">Access via DOI link</a></li><br/>');
    }
});