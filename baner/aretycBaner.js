(function() {
   
  
    class AretycBaner{

        constructor(text,containerId,deskImgClass,mobImgClass,textContainer)
        {   
            this.text=text; // array or false
            this.containerId = this.checkId(containerId);
            this.deskImgClass = this.checkClass(deskImgClass);
            this.mobImgClass = this.checkClass(mobImgClass);
            this.textContainer= this.checkId(textContainer);
            
            this.imgDesktop 
            this.imgMobile
            this.index= 0;

            window.addEventListener('load',() => this.load());
            window.addEventListener('resize',() => this.resize());
            setInterval(()=>this.loop(), 3000)  ; 
        }

        checkId(string)
        {
          if(string!=false) 
          {
              if(string[0]!='#'){string='#'+string}
          }
            return string;
        }

        checkClass(string)
        {
            if(string!=false) 
            {
                if(string[0]!='.'){string='.'+string}
            }
            return string;  
        }
    
       load()  
       {
            this.imgDesktop = document.querySelectorAll(this.deskImgClass);
            this.imgMobile ;

            if(this.text==false){ console.log("baner: text is false ")}

            if (this.mobImgClass!=false){
                this.imgMobile = document.querySelectorAll(this.mobImgClass);
                if(this.imgMobile[0]==undefined){console.error('wrong class name')}
            }
            if (this.imgDesktop[0]==undefined){console.error('wrong class name');}

    
            $('.aretyc_baner_header, .aretyc_baner_heder_mob').css({
                position : 'absolute',
            });
            this.resize();
            this.text_animation();  
        }

        text_animation()
        {

            if(this.text!=false)
            {
                $(this.textContainer+" p").css({
                    position:'relative',
                    "top": "-200px",
                    opacity: '0',
                    
                    });
                $(this.textContainer+" p").delay(1000).animate({
                    "top": "0px",
                    opacity: '1',
                },500)
            }
        }

        loop()
        {        
            let elements;
            let next
            
            // create temporary table 
            if(window.innerWidth>768&&this.mobImgClass!=false){elements = this.imgDesktop;}else{elements = this.imgMobile;}

            if(this.index>=elements.length){this.index=0}
            next = this.index + 1; 
            if(next>elements.length-1){next=0}

            // inner html in text container 
            if(this.text!=false||this.textContainer!=false)
            {
             
                let container = document.querySelector(this.textContainer);
                if(container==null){
                    console.error("baner: wrong container name ")
                }else
                {
                    container.innerHTML='<p>'+this.text[next]+"<p>";
                }
                
            }
            

            // changing image  
            $(elements[next]).css({"z-index" : 1,});      
            $(elements[next]).animate({ opacity : "1",},1000);
            $(elements[this.index]).delay(1000).animate({ opacity : "0",},1000);
            this.index++;
            
            // text animation 
            this.text_animation();    
        }

        text_position()
        {
            if(window.innerWidth>768||this.mobImgClass==false||this.text==false||this.textContainer==false){
            
                $(this.textContainer).css({
                    "top": $(this.deskImgClass).height()*-0.4+"px",
                    "left" : $(this.deskImgClass).width()*0.1+"px",
                });
                
              
            }
            else
            {
            
                $(this.textContainer).css({
                    "top": $(this.mobImgClass).height()*-0.4+"px",
                    "left" : $(this.mobImgClass).width()*0.1+"px",
                });
           
            }
        }
        
        resize()
        {
            if(window.innerWidth>768||this.mobImgClass==false){

                $(this.containerId).css({
                "height": $(this.deskImgClass).height()+"px",
                });
             
            }else
            {
                $(this.containerId).css({
                        "height": $(this.mobImgClass).height()+"px",
                    });
            }
           this.text_position();
        }
    } // end class 



const text = [
    "PROJEKTOWANIE LOGO",
    "PROJEKTOWANIE STRON WWW",
    "OKLEJANIE POJAZDÓW",
    "REKLAMA ZEWNĘTRZNA",
    "WYDRUKI REKLAMOWE",
    "IDENTYFIKACJA WIZUALNA"
];

const baner = new AretycBaner(text,'#aretyc_baner_container','aretyc_baner_header','aretyc_baner_heder_mob','aretyc_baner_text_container');
 
}());



