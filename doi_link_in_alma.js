$(document).ready(function () {
    var url = window.location.href; // Get the url from the iframe
    var file = url.split('&rft_id=info:doi/')[1]; // Remove everything before and including "&rft_id=info:doi/" - Make sure your openrul contains "&rft_id=info:doi/"
    console.log("I am cutting the firtst part of the URL. This is what remains:", file);
    var doi = file.split("&")[0]; // Remove everything including and after "&"
    console.log("I am removing the second part of the url that we don't need. I now have this DOI:", doi);
    var doiurl = "https://login.ezproxy.leidenuniv.nl:2443/login?URL=http://dx.doi.org/" + doi; // Add your ezproxy and base doi urls here
    console.log("I have now generated this DOI link:", doiurl);
    if (doi.length > 0) { // If there is a doi:
        console.log("Success! The DOI URL is not empty. I will generated a clickable link now.");
        $("ul").last().prepend(
            '<li>DOI Link available: <a href="' + doiurl + '" target="_blank">Access via DOI link</a></li><br/>');
    } else {
        console.log("The DOI URL appears to be empty. The link will not be displayed.");
    }
});