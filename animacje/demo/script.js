window.addEventListener("load",function(){

    
    document.getElementById("btn1").addEventListener("click",function(){
        const a1_s1 = new Slide("#a1_s1",-100,0,1,1000,0);
        a1_s1.animation();
    });


    document.getElementById("btn2").addEventListener("click",function(){
        const a1_s2 = new Slide("#a1_s2",-100,0,0,500,0);
        a1_s2.animation();
       
    });
    
    document.getElementById("btn3").addEventListener("click",function(){
        const a1_s3 = new Slide("#a1_s3",0,-100,0,500,0);
        a1_s3.animation();
    });

    document.getElementById("btn4").addEventListener("click",function(){
        const a1_s4 = new Slide("#a1_s4",-100,-100,0,500,0);
        a1_s4.animation();
    });
    document.getElementById("btn5").addEventListener("click",function(){
        const a2_s1 = new TextAnimation1("a2_s1",-20,-20,0);
        a2_s1.animation();
    });

    document.getElementById("btn6").addEventListener("click",function(){
        const a2_s2 = new TextAnimation2("a2_s2",-20,-20,0,20,200);
        a2_s2.animation();
    });

    document.getElementById("btn7").addEventListener("click",function(){
        const a2_s3 = new TextType("a2_s3",100);
        a2_s3.animation();
    });
    
    
    });
    
    
    