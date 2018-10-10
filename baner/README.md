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

<aside class="warning">
    script using jquery framework 
</aside>

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

 
<p>
    you must add in your html document container with &amp;img&lt; element and &amp;div&lt; with first text element 
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

<p>
    next create new object 
</p>


```javascript

const baner = new AretycBaner(textArray,conteinerId,imageClassDesktop,imageClassMobile,textContainerId);


```

<p> textArray - array with string / or flase </p>
<p> conteinerId - string </p>
<p> imageClassDesktop - string </p>
<p> imageClassMobile - string / or flase</p>
<p> textContainerId - string / or flase</p>

<h3>
    css (recomended) 
</h3>
```css

    &#35;textContainerId
    {
        font-size: 30px;
		color: white;
		font-weight: bold;
		font-family: Verdana, sans-serif;
    }

```

