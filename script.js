const preloader=document.querySelector("#preloader");window.onload=function(){preloader.style.display="none"};const promoBlock=document.querySelector("#promoBlock"),aboutBlock=document.querySelector("#aboutBlock"),isMobile=detectMobile();function detectMobile(){return[/Android/i,/webOS/i,/iPhone/i,/iPad/i,/iPod/i,/BlackBerry/i,/Windows Phone/i].some(o=>navigator.userAgent.match(o))}promoBlock.addEventListener("click",()=>{isMobile||aboutBlock.scrollIntoView({behavior:"smooth",block:"start"})});