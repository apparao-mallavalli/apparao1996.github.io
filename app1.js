var str;

var start;
//for function setout and set interval variables
var interval;
var ID;
var ID_2;
//used for declaring stringlength based on selection of level

var ans;
//used for string length;
var result =0;
// used for getting the values of question and string 
var par;
var question;
// to coun score
     var count=0;
// used for generating the questions

// function 



/// choose level function ,it selects which level you want and display that html page
function chooselevel()
{
    window.location.href="index2.html";
}



/// It generates random string based on the level selected
function random(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    
    return result;
 }


 //It generates random question from the array 
 function random_2()
 {
    var arr = ["enter the first two characters","enter the last two characters","enter first and last character",
    "enter the last and first character","enter the string "];
     var arrlength=arr.length;
     var result;
     result=arr[Math.floor(Math.random() * arrlength)];
     return result;

 }
 // adding action listener
 

 //// by clicking any level button, it comes to hear
 function letstart()
   {
       
       document.getElementById('para').innerHTML=random(4);
       document.getElementById('quest').innerHTML=random_2();
       document.getElementById('sc').innerHTML="score"+" =    "+count;
       start=3.5;
       
       
       interval=setInterval(timer,1000);
       ID=setTimeout(display,3500);
       
}
function letstart_2()
   {
       
       document.getElementById('para').innerHTML=random(5);
       document.getElementById('quest').innerHTML=random_2();
       document.getElementById('sc').innerHTML="score"+" =    "+count;
       start= 3;
       
       
       interval=setInterval(timer,1000);
       ID=setTimeout(display_2,3000);
       
}
function letstart_3()
   {
       
       document.getElementById('para').innerHTML=random(6);
       document.getElementById('quest').innerHTML=random_2();
       document.getElementById('sc').innerHTML="score"+" =    "+count;
       start=2.5;
       
       
       interval=setInterval(timer,1000);
       ID=setTimeout(display_3,2500);
       
}

function timer()
{
    if(start>0)
    {
        document.getElementById('p').innerHTML=start;
        start -=1;
    }
    else
    {
        clearInterval(interval);
    }
}
// tally function
 
// it changes input area in to submit area
function display()
{
    
    par =document.getElementById('para').textContent;
     question=document.getElementById('quest').textContent;
     
     document.getElementById('quest').innerHTML="";
     document.getElementById('para').innerHTML="";
     document.getElementById('p').innerHTML="";


     var newelement_1 =document.createElement('INPUT');
     newelement_1.setAttribute("type","text");
     newelement_1.setAttribute("id","box_2");
     var element =document.getElementById("box")
     element.appendChild(newelement_1);
     
    

 ID_2= setTimeout(remodel,5000);

     
}
function display_2()
{
    
    par =document.getElementById('para').textContent;
     question=document.getElementById('quest').textContent;
     
     document.getElementById('quest').innerHTML="";
     document.getElementById('para').innerHTML="";
     document.getElementById('p').innerHTML="";


     var newelement_1 =document.createElement('INPUT');
     newelement_1.setAttribute("type","text");
     newelement_1.setAttribute("id","box_2");
     var element =document.getElementById("box")
     element.appendChild(newelement_1);
     
    

 ID_2= setTimeout(remodel_2,5000);

     
}
function display_3()
{
    
    par =document.getElementById('para').textContent;
     question=document.getElementById('quest').textContent;
     
     document.getElementById('quest').innerHTML="";
     document.getElementById('para').innerHTML="";
     document.getElementById('p').innerHTML="";


     var newelement_1 =document.createElement('INPUT');
     newelement_1.setAttribute("type","text");
     newelement_1.setAttribute("id","box_2");
     var element =document.getElementById("box")
     element.appendChild(newelement_1);
     
    

 ID_2= setTimeout(remodel_3,5000);

     
}
function remodel()
{
      ans=document.getElementById("box_2").value;
      var list=document.getElementById("box_2");
      list.parentNode.removeChild(list);
      tally();
      
      
    
     
}
function remodel_3()
{
      ans=document.getElementById("box_2").value;
      var list=document.getElementById("box_2");
      list.parentNode.removeChild(list);
      tally_3();
      
      
    
     
}
function remodel_2()
{
      ans=document.getElementById("box_2").value;
      var list=document.getElementById("box_2");
      list.parentNode.removeChild(list);
      tally_2();
      
      
    
     
}


// it checks the value of user entered
function tally()
 {
    var arr = ["enter the first two characters","enter the last two characters","enter first and last character",
    "enter the last and first character","enter the string"];

    
    if(question==arr[0])
    {
        var a=par[0]+par[1];
        if(a==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score"+"="+count;

    }
    else if(question==arr[1])
    {
        var b=par[par.length-2]+par[par.length-1];
        if(b==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;
    }
    else if(question==arr[2])
    {
        var c=par[0]+par[par.length-1];
        if(c==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;

    }
    else if(question==arr[3])
    {
        var d=par[par.length-1]+par[0];
        if(d==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;
    }
    else 
    {
        
        if(par==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;

    }
    letstart();
    
}
function tally_2()
 {
    var arr = ["enter the first two characters","enter the last two characters","enter first and last character",
    "enter the last and first character","enter the string"];

    
    if(question==arr[0])
    {
        var a=par[0]+par[1];
        if(a==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score"+"="+count;

    }
    else if(question==arr[1])
    {
        var b=par[par.length-2]+par[par.length-1];
        if(b==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;
    }
    else if(question==arr[2])
    {
        var c=par[0]+par[par.length-1];
        if(c==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;

    }
    else if(question==arr[3])
    {
        var d=par[par.length-1]+par[0];
        if(d==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;
    }
    else 
    {
        
        if(par==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;

    }
    letstart_2();
    
}
function tally_3()
 {
    var arr = ["enter the first two characters","enter the last two characters","enter first and last character",
    "enter the last and first character","enter the string"];

    
    if(question==arr[0])
    {
        var a=par[0]+par[1];
        if(a==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score"+"="+count;

    }
    else if(question==arr[1])
    {
        var b=par[par.length-2]+par[par.length-1];
        if(b==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;
    }
    else if(question==arr[2])
    {
        var c=par[0]+par[par.length-1];
        if(c==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;

    }
    else if(question==arr[3])
    {
        var d=par[par.length-1]+par[0];
        if(d==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;
    }
    else 
    {
        
        if(par==ans)
        count ++;
        else
        count --;
        document.getElementById('sc').innerHTML="score" +  "="+count;

    }
    letstart_3();
    
}



 



