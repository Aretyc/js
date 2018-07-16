

class Standard_animation_1{
    
    constructor(id,top,opacity,time,delay)
    {
        this.id = id;           // id, class or tag element 
        this.top = top +"px";   // start top 
        this.opacity=opacity;   // start opacity 
        this.time = time;       // time animation in ms 
        this.delay = delay;     // delay time in ms 
        this.status =  false;   // animation run ones 
        this.sittings()
    }

    sittings()
    {
        $(this.id).css({top: this.top ,opacity: this.opacity}); 
    }
    animation()
    {
        if (this.status == false)
        {
            this.sittings();
            $(this.id).delay(this.delay).animate({top: "0",opacity: "1"},this.time);
            this.status=true;
        }
        
    }
};