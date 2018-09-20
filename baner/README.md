<h1>
    Aretyc baner
</h1>
<p>
    it's simple baner with opacity image and changing text.
    <br> easy to use     
</p>

<h2>
manual 
</h2>
<h3>
    html configuration
</h3>
<p>
    first you must add in your head jquery and baner script 
</p>
```html

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="./script/aretycBaner.js"></script> 

```
jakiś tekst 
<p>
    you must add in your html document container with <img> element and <div> with first text element 
</p>


```html 
<div id="containerId">

    <img class="imageClassDesktop" src="./img/desk/1.jpg" alt="baner">
    <img class="imageClassDesktop" src="./img/desk/2.jpg" alt="baner">
    <img class="imageClassDesktop" src="./img/desk/3.jpg" alt="baner">
    <img class="imageClassDesktop" src="./img/desk/4.jpg" alt="baner">
        
    <!-- mobile wersion it's optional however you must add class name or false in class     constructor -->
    <img class="imageClassMobile" src="./img/mobile/1.jpg" alt="baner">
    <img class="imageClassMobile" src="./img/mobile/2.jpg" alt="baner">
    <img class="imageClassMobile" src="./img/mobile/3.jpg" alt="baner">
    <img class="imageClassMobile" src="./img/mobile/4.jpg" alt="baner">

    <div id="textContainerId">
        <p >some string </p>
    </div>

</div>   

```

<h3>
    JavaScript configuration
</h3>
<p>
    first on  end baner script you must create array with titles 
<p>

```javascript
const text = [
    "TITLE 1",
    "TITLE 2",
    "TITLE 3",
    "TITLE 4",
];

```




