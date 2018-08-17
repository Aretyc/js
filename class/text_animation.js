// text animation 

class TextAnimation1 {
    constructor(id,delay)
    {
        this.id = id;  // id element without #
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
           
            $("#"+this.id+" span").css({left: "-20px",opacity : 0,});
            

                $("#"+this.id+" span").each(function(i)
                {
                $(this).delay(i*50).animate({left: "0px", opacity: 1,},400);
                 });
            this.status=true;
        }
        
    }
};

