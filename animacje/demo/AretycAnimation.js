class Slide{
    
    constructor(id,top,left,opacity,time,delay)
    {
        this.id = id;           // id, class or tag element 
        this.top = top +"px";   // start top 
        this.left = left +"px"; // start left 
        this.opacity=opacity;   // start opacity 
        this.time = time;       // time animation in ms 
        this.delay = delay;     // delay time in ms 
        this.status =  false;   // animation run ones 
        this.sittings()
    }

    sittings()
    {
        $(this.id).css({top: this.top,left:this.left,opacity: this.opacity}); 
       
    }
    animation()
    {
       
       
        if (this.status == false)
        {
            this.sittings();
            $(this.id).delay(this.delay).animate({top: "0",left:0,opacity: "1"},this.time);
            this.status=true;
        }
        
    }
};

/*
class Standard_animation_2{
    
    constructor(id,left,opacity,time,delay)
    {
        this.id = id;           // id, class or tag element 
        this.left = left +"px";   // start left 
        this.opacity=opacity;   // start opacity 
        this.time = time;       // time animation in ms 
        this.delay = delay;     // delay time in ms 
        this.status =  false;   // animation run ones 
        this.sittings()
    }

    sittings()
    {

        $(this.id).css({position: "relative", left: this.left ,opacity: this.opacity}); 
    }
    animation()
    {
        if (this.status == false)
        {
            this.sittings();
            $(this.id).delay(this.delay).animate({left: "0",opacity: "1"},this.time);
            this.status=true;
        }
        
    }
};

*/

// text animation 

class TextAnimation1 {
    constructor(id,top,left,delay)
    {
        this.id = id;  // id element without 
        this.top = top+'px';
        this.left = left+'px';
        this.delayAnimation=delay;
        this.status =  false;  

        // css option 
        

        // 
        let textPom;
        let element = document.getElementById(this.id);
        let text = element.textContent;

        //Remove whitespace 
        text =  text.trim();

        // Split a string into an array of substrings
        text = text.split(' ');

        // add <span> between elenets 
        textPom="<span>"+text[0]+" </span>";
        for(let i=1; i<text.length;i++)
        {
            textPom = textPom+"<span>"+text[i]+" </span>";     
        }
        // inner html in element 
        element.innerHTML = textPom;
        $("#"+this.id+" span").css({left: "-20px", opacity : 0,});
    }

    animation()
    {
        if( this.status == false)
        {
           
            $("#"+this.id+" span").css({position: 'relative', left:this.left, top: this.top,opacity : 0,});
            

                $("#"+this.id+" span").each(function(i)
                {
                $(this).delay(i*50).animate({top: "0px", left: "0px", opacity: 1,},400);
                 });
            this.status=true;
        }
        
    }
};


class TextAnimation2 {
    constructor(id,top,left,opacity,time,delay)
    {
        this.id = id;  // id element without #
        this.top = top +"px";   // start top 
        this.left = left +"px"; // start left 
        this.opacity=opacity;   // start opacity 
        this.time = time;       // time animation in ms 
        this.delayAnimation=delay;
        this.status =  false;  

        
        let textPom;
        let element = document.getElementById(this.id);
        let text = element.textContent;

       //Remove whitespace 
        text =  text.trim();

        // add <span> between elenets 
        textPom="<span>"+text[0]+"</span>";
        for(let i=1; i<text.length;i++)
        {
            textPom = textPom+"<span>"+text[i]+"</span>";     
        }
        // inner html in element 
        element.innerHTML = textPom;
       
    }

    sittings()
    {
        $("#"+this.id+" span").css({position:'relative', top:this.top, left: this.left, opacity : this.opacity,});
    }

    animation()
    {
        if( this.status == false)
        {
           
         this.sittings();

         let elements = document.querySelectorAll("#"+this.id+" span");

         for(let i = 0; i<elements.length; i++)
        {
            $(elements[i]).delay(i*this.delayAnimation).animate({top: '0px',left: "0px", opacity: 1,},this.animation);
        }
            this.status=true;
        }
        
    }
};

class TextType 
{
    constructor(id,time)
    {
        this.id = id;  // id element without #
        this.time = time;       // time animation in ms 
        this.status =  false;  

        
        let textPom;
        let element = document.getElementById(this.id);
        let text = element.textContent;

       //Remove whitespace 
        text =  text.trim();

        // add <span> between elenets 
        textPom="<span>"+text[0]+"</span>";
        for(let i=1; i<text.length;i++)
        {
            textPom = textPom+"<span>"+text[i]+"</span>";     
        }
        // inner html in element 
        element.innerHTML = textPom;
       
    }

    sittings()
    {
        $("#"+this.id+" span").css({position:'relative', opacity : 0,});
    }
    
    

    animation()
    {
        if( this.status == false)
        {
           
         this.sittings();
        
         let elements = document.querySelectorAll("#"+this.id+" span");
         let temp = elements[0].textContent;
        
        
        elements[0].innerHTML=elements[0].textContent+'|';
        $(elements[0]).css({opacity: 1,});

        let i=1;
        let interval =  setInterval(function(){
            
            
            elements[i-1].innerHTML=temp;
            temp=elements[i].textContent;
            elements[i].innerHTML=elements[i].textContent+'|';
            $(elements[i]).css({ opacity: 1,});
            i++;
            if(i>=elements.length)
            {
                elements[i-1].innerHTML=temp;
                clearInterval(interval);
            }
            

         },this.time); 
        console.log(this.time)
        this.status=true;
        }
        
    }
    

}

 class TextRain {
    constructor(id,time)
    {
        this.id = id;  // id element without #
        this.time = time;       // time animation in ms 
        this.status =  false;  

        
        let textPom;
        let element = document.getElementById(this.id);
        let text = element.textContent;

       //Remove whitespace 
        text =  text.trim();

        // add <span> between elenets 
        textPom="<span>"+text[0]+"</span>";
        for(let i=1; i<text.length;i++)
        {
            textPom = textPom+"<span>"+text[i]+"</span>";     
        }
        // inner html in element 
        element.innerHTML = textPom;
       
    }
    animation()
    {

        $("#"+this.id+" span").css({position:'relative', top:'-100px', opacity : 0,});

        let elements = document.querySelectorAll("#"+this.id+" span");
        
        let lengthElements = elements.length;
        let tab = new Array(lengthElements);

        for(let i=0;i<lengthElements;i++)
        {
            tab[i]=i;
        }


          
        let i=0;
        while(lengthElements!=0)
        {
            let temp;
            let randomNumber = Math.floor( Math.random()*lengthElements);
            temp = tab[randomNumber];
          //console.log(tab[randomNumber]);
          console.log(i);
            $(elements[tab[randomNumber]]).delay(i*10).animate({top:'0px',opacity:"1"},1000);

            tab[randomNumber]=tab[lengthElements-1];
            tab[lengthElements-1] = temp;
            lengthElements--;
            i++;
             
        }

       /*
       let interval =  setInterval(function(){
         
           
           if(elements.length==1)
           {
               clearInterval(interval);
           }
        },100);    
*/
    }


 }


// get all element with this same query selector 
// left to right 

class Standard_animation_3 {
    constructor(id,left,opacity,time,delay)
    {
        this.id = id;           // id, class or tag element 
        this.left = left +"px";   // start left 
        this.opacity=opacity;   // start opacity 
        this.time = time;       // time animation in ms 
        this.delay = delay;     // delay time in ms 
        this.status =  false;   // animation run ones 
        this.sittings()
    }

    sittings()
    {

        $(this.id).css({position: "relative", left: this.left ,opacity: this.opacity}); 
    }

    animation()
    {

            $(this.id).css({left: this.left, opacity : this.opacity,});

            
            let elemens = document.querySelectorAll(this.id);
            for(let i = 0 ; i<elemens.length; i++)
            {
                
                $(elemens[i]).delay(i*this.delay).animate({left: "0px", opacity: 1,},this.time);
            }  
    }
};







// get all element with this same query selector 
// left to right 

class Standard_animation_4 {
    constructor(id,top,opacity,time,delay)
    {
        this.id = id;           // class
        this.top = top +"px";   // start left 
        this.opacity=opacity;   // start opacity 
        this.time = time;       // time animation in ms 
        this.delay = delay;     // delay time in ms 
        this.status =  false;   // animation run ones 
        this.sittings()
    }

    sittings()
    {

        $(this.id).css({position: "relative", top: this.top ,opacity: this.opacity}); 
    }

    animation()
    {

            $(this.id).css({top: this.top, opacity : this.opacity,});

            
            let elemens = document.querySelectorAll(this.id);
            for(let i = 0 ; i<elemens.length; i++)
            {
                
                $(elemens[i]).delay(i*this.delay).animate({top: "0px", opacity: 1,},this.time);
            }  
    }
};