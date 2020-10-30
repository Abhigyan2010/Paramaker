function P1(){
    var input1=[];
     for(var i=1; i<=6; i++){
         input1.push(document.getElementById("para1_input_box"+i).value);
         input1.join(". ");
         document.getElementById("S1P").innerHTML=input1.join(". ");
     }
}
function P2(){
    var input2=[];
     for(var j=1; j<=6; j++){
         input2.push(document.getElementById("para2_input_box"+j).value);
         input2.join(". ");
         document.getElementById("S2P").innerHTML=input2.join(". ");
     }
}