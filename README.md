## Welcome to K-Loader

K-Loader is a tiny "Script Loader" : (Javascript , Stylesheet & Font Loader) Just by typing the name of dependencies, it can load and execute them in order .

Need to quickly load a JS , CSS or Font file ? No Problem ! 😁

You will not have to search for CDN Links in your html files 😎 Cool !

Using a script loader like K-Loader will improve the speed and quality of your code.

----------

### HOW DO I USE "K-Loader" ?

1. Download K-Loader from Here (This Link) Or Use Our CDN

```HTML
<script src="https://google.com"></script>
```

2. Paste it before </head>

3. To Load Dependecies (Js & CSS) , use this function : `loader("<library1>" , "<library2>" , ... );`

+ For Example, I will use "Bootstrap" , "Jquery" and "Animate.CSS" in my project :

```javascript
   loader("bootstrap" , "jquery" , "animate");
```

4. If You Want To Add Fonts in your project, use this function : `fontloader("<font1>" , "<font2>" , ...)`

+ For Example, I will use "Cairo" , "Quicksand" and "Pacifico" fonts in my project :

```javascript
   fontloader("Cairo", "Quicksand", "Pacifico");
```

5. Your final code will look like this :

```HTML
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
 
 
 
 
 
```





