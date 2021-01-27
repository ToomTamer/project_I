var n= 1;

function plusSlides(){
    var i;
    var dot= document.getElementsByClassName("manual-btn");
  console.log(n);
if(n > 7){n= 1}
if(n < 1){n= 7}

if (n==1) {
    document.getElementById("Twhat").classList.add("AniO-text-whatwedo");
    document.getElementById("Twhat").classList.replace("AniB-text-whatwedo","AniO-text-whatwedo");

    document.getElementById("BD2").classList.replace("BDO","BDB");
    document.getElementById("BD3").classList.replace("BDO","BDB");
    document.getElementById("BD4").classList.replace("BDO","BDB");
    document.getElementById("BD5").classList.replace("BDO","BDB");
    document.getElementById("BD6").classList.replace("BDO","BDB");
    document.getElementById("BD7").classList.replace("BDO","BDB");
    document.getElementById("radio1").checked = true;

        
    }

    if (n==2) {
    document.getElementById("BD2").classList.add("BDO");
    document.getElementById("BD2").classList.replace("BDB","BDO");

    document.getElementById("Twhat").classList.add("AniB-text-whatwedo");
    document.getElementById("Twhat").classList.replace("AniO-text-whatwedo","AniB-text-whatwedo");

    
    document.getElementById("BD3").classList.replace("BDO","BDB");
    document.getElementById("BD4").classList.replace("BDO","BDB");
    document.getElementById("BD5").classList.replace("BDO","BDB");
    document.getElementById("BD6").classList.replace("BDO","BDB");
    document.getElementById("BD7").classList.replace("BDO","BDB");
    document.getElementById("radio2").checked = true;
    
        
    }
    else if(n==3){
    document.getElementById("BD3").classList.add("BDO");
    document.getElementById("BD3").classList.replace("BDB","BDO");

    document.getElementById("Twhat").classList.add("AniB-text-whatwedo");
    document.getElementById("Twhat").classList.replace("AniO-text-whatwedo","AniB-text-whatwedo");

    document.getElementById("BD2").classList.replace("BDO","BDB");
    document.getElementById("BD4").classList.replace("BDO","BDB");
    document.getElementById("BD5").classList.replace("BDO","BDB");
    document.getElementById("BD6").classList.replace("BDO","BDB");
    document.getElementById("BD7").classList.replace("BDO","BDB");
    
    document.getElementById("radio3").checked = true;

}
    else if(n==4){
    document.getElementById("BD4").classList.add("BDO");
    document.getElementById("BD4").classList.replace("BDB","BDO");

    document.getElementById("Twhat").classList.add("AniB-text-whatwedo");
    document.getElementById("Twhat").classList.replace("AniO-text-whatwedo","AniB-text-whatwedo");

    document.getElementById("BD2").classList.replace("BDO","BDB");
    document.getElementById("BD3").classList.replace("BDO","BDB");
    document.getElementById("BD5").classList.replace("BDO","BDB");
    document.getElementById("BD6").classList.replace("BDO","BDB");
    document.getElementById("BD7").classList.replace("BDO","BDB");
    document.getElementById("radio4").checked = true;

}
    else if(n==5){
    document.getElementById("BD5").classList.add("BDO");
    document.getElementById("BD5").classList.replace("BDB","BDO");

    document.getElementById("Twhat").classList.add("AniB-text-whatwedo");
    document.getElementById("Twhat").classList.replace("AniO-text-whatwedo","AniB-text-whatwedo");

    document.getElementById("BD2").classList.replace("BDO","BDB");
    document.getElementById("BD3").classList.replace("BDO","BDB");
    document.getElementById("BD4").classList.replace("BDO","BDB");
    document.getElementById("BD6").classList.replace("BDO","BDB");
    document.getElementById("BD7").classList.replace("BDO","BDB");
    document.getElementById("radio5").checked = true;
}
    else if(n==6){
    document.getElementById("BD6").classList.add("BDO");
    document.getElementById("BD6").classList.replace("BDB","BDO");

    document.getElementById("Twhat").classList.add("AniB-text-whatwedo");
    document.getElementById("Twhat").classList.replace("AniO-text-whatwedo","AniB-text-whatwedo");

    document.getElementById("BD2").classList.replace("BDO","BDB");
    document.getElementById("BD3").classList.replace("BDO","BDB");
    document.getElementById("BD4").classList.replace("BDO","BDB");
    document.getElementById("BD5").classList.replace("BDO","BDB");
    document.getElementById("BD7").classList.replace("BDO","BDB");
    document.getElementById("radio6").checked = true;
    

}
    else if(n==7){
    document.getElementById("BD7").classList.add("BDO");
    document.getElementById("BD7").classList.replace("BDB","BDO");

    document.getElementById("Twhat").classList.add("AniB-text-whatwedo");
    document.getElementById("Twhat").classList.replace("AniO-text-whatwedo","AniB-text-whatwedo");

    document.getElementById("BD2").classList.replace("BDO","BDB");
    document.getElementById("BD3").classList.replace("BDO","BDB");
    document.getElementById("BD4").classList.replace("BDO","BDB");
    document.getElementById("BD5").classList.replace("BDO","BDB");
    document.getElementById("BD6").classList.replace("BDO","BDB");
    document.getElementById("radio7").checked = true;
    

}
    for (i = 0; i < dot.length; i++) {
        console.log(i);
    
        dot[i].className = dot[i].className.replace("active", "");
    }
    dot[n-1].className += " active";

}/*------------------- */
