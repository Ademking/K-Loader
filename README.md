## Welcome to K-Loader

K-Loader is a tiny "Script Loader" : (Javascript , Stylesheet & Font Loader) Just by typing the name of dependencies, it can load and execute them in order .

Need to quickly load a JS , CSS or Font file ? No Problem ! 😁

You will not have to search for CDN Links in your html files 😎 Cool !

Using a script loader like K-Loader will improve the speed and quality of your code.

----------

### HOW DO I USE "K-Loader" ?

1. Download K-Loader from Here (This Link) Or Use Our CDN

{% highlight html %}
<script src="https://google.com"></script>
{% endhighlight %}

2. Paste it before </head>

3. To Load Dependecies (Js & CSS) , use this function : <br/><br/>  `loader("<library1>" , "<library2>" , ... );`

+ For Example, I will use "Bootstrap" , "Jquery" and "Animate.CSS" in my project :

```javascript
   loader("bootstrap" , "jquery" , "animate");
```

4. If You Want To Add Fonts in your project, use this function : <br/><br/>  `fontloader("<font1>" , "<font2>" , ...)`

+ For Example, I will use "Cairo" , "Quicksand" and "Pacifico" fonts in my project :

```javascript
   fontloader("Cairo", "Quicksand", "Pacifico");
```

5. Your final code will look like this :

{% highlight html %}
 <html>
 <head>
 <script src="k-loader.min.js"></script>
 <script>
    loader("bootstrap" , "jquery" , "animate");
    fontloader("Cairo", "Quicksand", "Pacifico");
 </script>
 </head>
 <body>
 <!-- Your Website Code -->
 </body>
 </html>
{% endhighlight %}


### 😁😁😁 Easy Peasy ! Right ? 😁😁😁

----------

## List Of JS Dependecies : 

CSS Dependecies | How To Write function
--- | ---
1140 | loader( "1140");
10up-sanitize.css | loader( "10up-sanitize.css");
16pixels | loader( "16pixels");
960gs | loader( "960gs");
academicons | loader( "academicons");
aegis | loader( "aegis");
allmighty-autocomplete | loader( "allmighty-autocomplete");
angular-material | loader( "angular-material");
angular-motion | loader( "angular-motion");
animate.css | loader( "animate.css");
aurora-grid | loader( "aurora-grid");
authy-forms.css | loader( "authy-forms.css");
avalanche-css | loader( "avalanche-css");
awesome-bootstrap-checkbox | loader( "awesome-bootstrap-checkbox");
balloon-css | loader( "balloon-css");
baseguide | loader( "baseguide");
basics | loader( "basics");
basscss | loader( "basscss");
bigfishtv-turret | loader( "bigfishtv-turret");
blaze | loader( "blaze");
bootflat | loader( "bootflat");
bootstrap-horizon | loader( "bootstrap-horizon");
bootstrap-rtl | loader( "bootstrap-rtl");
bootstrap-social | loader( "bootstrap-social");
bootswatch | loader( "bootswatch");
brand-colors | loader( "brand-colors");
bttn.css | loader( "bttn.css");
bulma | loader( "bulma");
bulmaswatch | loader( "bulmaswatch");
Buttons | loader( "Buttons");
caiuss | loader( "caiuss");
cascade-framework | loader( "cascade-framework");
cc-icons | loader( "cc-icons");
checkbox.css | loader( "checkbox.css");
chrome-bootstrap | loader( "chrome-bootstrap");
clarity-ui | loader( "clarity-ui");
cleanslate | loader( "cleanslate");
colofilter.css | loader( "colofilter.css");
core.css | loader( "core.css");
css-loader | loader( "css-loader");
CSS-Mint | loader( "CSS-Mint");
css-sans | loader( "css-sans");
css-social-buttons | loader( "css-social-buttons");
css-spinning-spinners | loader( "css-spinning-spinners");
cssco | loader( "cssco");
cssgram | loader( "cssgram");
csshake | loader( "csshake");
csspin | loader( "csspin");
currency-flags | loader( "currency-flags");
custommarkup | loader( "custommarkup");
cutestrap | loader( "cutestrap");
design-system | loader( "design-system");
devicon | loader( "devicon");
devicons | loader( "devicons");
DinaKit | loader( "DinaKit");
ember-charts | loader( "ember-charts");
equalizecss | loader( "equalizecss");
flag-icon-css | loader( "flag-icon-css");
flat-ui | loader( "flat-ui");
flex-layout-attribute | loader( "flex-layout-attribute");
flexboxgrid | loader( "flexboxgrid");
flexiblegs-css | loader( "flexiblegs-css");
flexslider | loader( "flexslider");
float-label-css | loader( "float-label-css");
font-awesome-animation | loader( "font-awesome-animation");
font-awesome | loader( "font-awesome");
font-linux | loader( "font-linux");
font-mfizz | loader( "font-mfizz");
formjs | loader( "formjs");
foundation-emails | loader( "foundation-emails");
frappe-charts | loader( "frappe-charts");
froala-design-blocks | loader( "froala-design-blocks");
FrozenUI | loader( "FrozenUI");
fukol-grids | loader( "fukol-grids");
fullPage.js | loader( "fullPage.js");
furtive | loader( "furtive");
gemma | loader( "gemma");
genericons | loader( "genericons");
github-fork-ribbon-css | loader( "github-fork-ribbon-css");
github-markdown-css | loader( "github-markdown-css");
godlike.css | loader( "godlike.css");
grd | loader( "grd");
gridforms | loader( "gridforms");
gridlex | loader( "gridlex");
gridly | loader( "gridly");
gumby | loader( "gumby");
hack | loader( "hack");
hamburgers | loader( "hamburgers");
Han | loader( "Han");
hint.css | loader( "hint.css");
hover.css | loader( "hover.css");
IBM-type | loader( "IBM-type");
icono | loader( "icono");
imagehover.css | loader( "imagehover.css");
ionicons | loader( "ionicons");
jasny-bootstrap | loader( "jasny-bootstrap");
jquery-timepicker | loader( "jquery-timepicker");
jquery-ui-bootstrap | loader( "jquery-ui-bootstrap");
jquery.nanoscroller | loader( "jquery.nanoscroller");
kube | loader( "kube");
kule.lazy | loader( "kule.lazy");
label.css | loader( "label.css");
lemonade | loader( "lemonade");
light7 | loader( "light7");
loaders.css | loader( "loaders.css");
m8tro-bootstrap | loader( "m8tro-bootstrap");
magic | loader( "magic");
marx | loader( "marx");
material-design-iconic-font | loader( "material-design-iconic-font");
material-design-icons | loader( "material-design-icons");
MaterialDesign-Webfont | loader( "MaterialDesign-Webfont");
materialize | loader( "materialize");
meyer-reset | loader( "meyer-reset");
milligram | loader( "milligram");
min | loader( "min");
mini.css | loader( "mini.css");
minireset.css | loader( "minireset.css");
mobi.css | loader( "mobi.css");
mu | loader( "mu");
normalize | loader( "normalize");
octicons | loader( "octicons");
open-color | loader( "open-color");
open-iconic | loader( "open-iconic");
openwebicons | loader( "openwebicons");
overpass | loader( "overpass");
paper-css | loader( "paper-css");
papier | loader( "papier");
paradeiser | loader( "paradeiser");
pavilion | loader( "pavilion");
paymentfont | loader( "paymentfont");
perfundo | loader( "perfundo");
photon | loader( "photon");
picnic | loader( "picnic");
pills | loader( "pills");
pretty-checkbox | loader( "pretty-checkbox");
Primer | loader( "Primer");
pure | loader( "pure");
radiobox.css | loader( "radiobox.css");
rangeslider.js | loader( "rangeslider.js");
react-instantsearch-theme-algolia | loader( "react-instantsearch-theme-algolia");
react-uwp | loader( "react-uwp");
Repaintless.css | loader( "Repaintless.css");
rwdgrid | loader( "rwdgrid");
s3colors | loader( "s3colors");
sanitize.css | loader( "sanitize.css");
sco.js | loader( "sco.js");
select2-bootstrap-css | loader( "select2-bootstrap-css");
select2-bootstrap-theme | loader( "select2-bootstrap-theme");
semantic-ui-calendar | loader( "semantic-ui-calendar");
shoelace-css | loader( "shoelace-css");
simple-hint | loader( "simple-hint");
simple-line-icons | loader( "simple-line-icons");
simpleui | loader( "simpleui");
skeleton-framework | loader( "skeleton-framework");
skeleton | loader( "skeleton");
SlickNav | loader( "SlickNav");
slider-pro | loader( "slider-pro");
social-sharing | loader( "social-sharing");
spectre.css | loader( "spectre.css");
spinkit | loader( "spinkit");
spoqa-han-sans | loader( "spoqa-han-sans");
stackicons | loader( "stackicons");
startbootstrap-landing-page | loader( "startbootstrap-landing-page");
startbootstrap-stylish-portfolio | loader( "startbootstrap-stylish-portfolio");
sweetalert | loader( "sweetalert");
tachyons | loader( "tachyons");
timeline.css | loader( "timeline.css");
tipograf | loader( "tipograf");
titatoggle | loader( "titatoggle");
toast-css | loader( "toast-css");
tocas-ui | loader( "tocas-ui");
topcoat-icons | loader( "topcoat-icons");
topcoat | loader( "topcoat");
tuesday | loader( "tuesday");
tufte-css | loader( "tufte-css");
twbuttons | loader( "twbuttons");
typeahead.js-bootstrap-css | loader( "typeahead.js-bootstrap-css");
typeboost.css | loader( "typeboost.css");
typeplate-starter-kit | loader( "typeplate-starter-kit");
typicons | loader( "typicons");
unsemantic | loader( "unsemantic");
videogular-themes-default | loader( "videogular-themes-default");
w2ui | loader( "w2ui");
weather-icons | loader( "weather-icons");
web-starter-kit | loader( "web-starter-kit");
webicons | loader( "webicons");
WebRupee | loader( "WebRupee");
wenk | loader( "wenk");
weui | loader( "weui");
wingcss | loader( "wingcss");
wuzzle | loader( "wuzzle");
yamlcss | loader( "yamlcss");
zurb-ink | loader( "zurb-ink");



