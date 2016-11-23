# Add DOI Link in the Alma "View It" tab

Add a DOI link directly into ExLibris' Alma "View it" tab.

## Requierments

* Jquery (usually already present in your Primo/Alma installation)
* ExLibris ALMA
* _General System Administrator_ or _Fulfillment Administrator_ rights in Alma
 
## Files

* alma_viewIt_DOI.js

This is a verbose version of the code that contains comments and explains how the script works.

* alma_viewIt_DOI.min.js

The minified version of the script. **THIS IS WHAT HAS TO BE USED WHEN INSTALLING THE SCRIPT**.

### How do I install this script?
Alma currently offers no possibility to add scripts directly into the generated View it tab. The scripts cannot be added in Primo either, because the View It tabs are iFrames (a website loaded within a website.)
To circumnavigate this issue, HTML and scripts can be added into the Alma "Labels". Therefore:
* Copy the code contained in alma_viewIt_DOI.min.js (**make sure you are using the minified code** - Alma "minifies" the scripts added in "Labels". The comments in the not-minifed code will break the script.)
* In Alma, navigate to: Fulfillment > Fulfillment Configuration > Configuration Menu > Labels
* Customize the c.uresolver.GeneralElectronicServices line by adding <script></script>
* Add the minified code between <script> and </script> 
* Save
* Test

### Why would I need this?

To give your users another option to access the content they need.
In some rare occasions, the ALMA openURL will not be able to generate a proper link to a resource. A DOI link might be available though, but hidden in the "Details" tab, or not presented at all.

### How does the script work?

1) The script looks into the the openurl of the Iframe
2) If the DOI address field is not empty, the scipt adds its content DOI.org URL base.
3) The generated DOI url is then added to the ALMA view it tab.

## Caveats

In some rare cases the DOI link might not link to an accessible article.
If Exlibris decides to stip labels of any HTML, the script will no longer work.

## Special thanks
The most excellent and revered [Jan Jouke Tjalsma](https://github.com/janjouketjalsma) for improving the code!