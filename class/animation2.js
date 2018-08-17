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