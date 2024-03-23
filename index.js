const dec=document.getElementById("decrement");
const inc=document.getElementById("increment");
const clr=document.getElementById("clear");
let inc_count=0;
let dec_count=0;
const container=document.getElementById("counter");
const container1=document.getElementById("error");

dec.addEventListener("click", function(){
    if(dec_count<=0)
    document.getElementById("error").innerHTML = 'Error : Cannot go below 0';
    else{
    dec_count=dec_count-1;
    inc_count=inc_count-1;
    document.getElementById("counter").innerHTML = 'Your Current Count is : '+inc_count;
    }
})
inc.addEventListener("click", function(){
    inc_count++;
    dec_count++;
    document.getElementById("counter").innerHTML = 'Your Current Count is : '+inc_count;
})
clr.addEventListener("click", function(){
    dec_count=0;
    inc_count=0;
    document.getElementById("counter").innerHTML = 'Your Current Count is : '+inc_count;
    document.getElementById("error").innerHTML = '';
})