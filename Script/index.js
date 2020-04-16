var c1=0,c2=0,c3=0;
var r;
var cnt=0;
$("#b2").hide();
$("#container").hide();

function selectRound(){
  r=document.getElementById("round").value;
  $("#hide").hide();
  $("#winner").show();
  $("#b2").show();
  $("#container").show();

}

 function play()
 {
      cnt++;
      if(cnt>r){
        return;
      }
       $("#container").hide();
        var num1=Math.floor(Math.random()*6);
        var num2=Math.floor(Math.random()*6);
        num1=num1+1;
        num2=num2+1;
        if(num1>num2){
           c1++;
           document.getElementById("winner").innerHTML="Player1 :"+c1+"           Player2 :"+c2;
          
        }
        else if(num1<num2){
            c2++;
            document.getElementById("winner").innerHTML="Player1 :"+c1+"          Player2 :"+c2;                    
        }
        else{
            document.getElementById("winner").innerHTML="Player1 :"+c1+"          Player2 :"+c2;
            c3++;
        }
        var p1="images/dice"+num1+".png";
        document.getElementById("s1").src=p1;
        var p2="images/dice"+num2+".png";
        document.getElementById("s2").src=p2;
          setTimeout(function(){
            if(c1+c2+c3==r)
            {
              if(c1>c2)
              document.getElementById("winner").innerHTML="Player1 won !!!";
              else if(c1<c2)
                document.getElementById("winner").innerHTML="Player2 won!!!";
              else
                document.getElementById("winner").innerHTML="Match draw";
              $("#hide").show();
              c1=0;c2=0;c3=0;
              $("#round").val("");  
              setTimeout(function(){
                $("#winner").hide();
                $("#b2").hide();

              },2000);    
            }
          },2000); 
         
    }
   
