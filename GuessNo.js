
 tick=new Audio("play.mp3");
    succ=new Audio("congrat.mp3");

    let gift=["100 cash","sunGlass","toy","mouse","keyboard","pen","pencil","box"," bottle","mask","cap","keychain","book","shirt","ballon","light","speaker","phone","earphones","buds","rubber","eraser","tubelight","headlight","nailcutter","headset","jacket","white nar","black box","shoes","slipper","pouch","darkhead","ribbon","tubepipe","facecloth","charger","Adapter","biscuit packet","chocolate","colorpens ","perfumes","vim wash","room perfumes","cycle","rubbon pencil","milkybite","eclairs","buuble cum","mini-bus"];
       document.getElementById("disp").addEventListener("click",function pick(){
       
        for(let i=1;i<=50;i++){
            document.getElementById(i).classList.remove("winner");
            document.getElementById(i).classList.remove("highlight");

        }
        document.getElementById("dis").innerHTML="please Wait";
           
        let count=0;
        tick.pause();
            const fr=setInterval(function(){
                tick.play();
              count=count+1;
                const dur=Math.floor(Math.random()* 50 +1);
                console.log(dur)
                for(i=1;i<=50;i++){

                if(i===dur){
                document.getElementById(dur).classList.add("highlight");
                }else{
                document.getElementById(i).classList.remove("highlight");

                }}

                if(count==5){
      result=Math.floor(Math.random()*50 +1);
        document.getElementById("dis").innerHTML=`You got the ${result} and  you Won  the  ${gift[result-1]}`;
        document.getElementById(dur).classList.remove("highlight");

        document.getElementById(result).classList.add("winner");
        succ.play(); 
                         clearInterval(fr);
 
                }
            },2000);

           
           
        });

gift.forEach(function(value,index){
    
    result=`
        <div class="box " id=${index+1}> ${index+1} . ${value}</div>`;
var In=document.getElementById("inner");
In.insertAdjacentHTML("beforeend",result);
});
