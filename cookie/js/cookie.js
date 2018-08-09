class Cookie 
{
    constructor()
    {
      // localStorage.setItem('cookie', true);
        const html = 
        `
        <div class="cookie">
        <p>
            Ten serwis wykorzystuje pliki cookies. Korzystanie z witryny oznacza zgodę na ich zapis lub odczyt wg ustawień przeglądarki.
        </p>
        <div>
            <a href="http://cookiealert.sruu.pl/o-ciasteczkach"> <img  src="../cookie/icon/1.png" alt="more"></a>
            <img class="cookie_close" src="../cookie/icon/2.png" alt="cookie_close">
        </div>
        <div>
        `;

       let element =  localStorage.getItem('cookie');
       if(element)
       {
         if(element == 'true')
         {
            $('body').append(html);
         }
       }
       else
       {
          localStorage.setItem('cookie', true);
          $('body').append(html);
       }
    }

    close ()
    {
        $(".cookie").css(
            {
                display: "none",
            }
        )
        localStorage.setItem('cookie', false);
    }


}