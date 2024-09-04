// To accessing the buttons of start and stop and restart buttons
let startTag = document.getElementById('start')
let stopTag = document.getElementById('stop')
let RestartTag = document.getElementById('restart')
// To get the second and minutes and milseconds
let minuteTag = document.getElementById('min')
let secondTag = document.getElementById('sec')
let milsecTag = document.getElementById("milsec")

let minutes =0;
let seconds =0;
let milseconds =0;
 
let flag = true;

function  timer()
{
    milseconds +=10;
    if (milseconds==1000)
    {
        seconds +=1
        milseconds =0;
        if(seconds==60)
        {
            minutes +=1;
            seconds =0;
        }
    }
    minuteTag.textContent=ConcatZero(minutes);
    secondTag.textContent=ConcatZero(seconds);
    milsecTag.textContent=ConcatZero(milseconds);
}
function ConcatZero(time)
{
    if(time<=9) return "0"+time;
    else return time;
}
let interval = null;
startTag.addEventListener('click',function()
{
    if(flag)
    {
        interval = setInterval(timer,10);
        falg =false
    }
});
 stopTag.addEventListener("click",function()
{
    if(!flag)
    {
        clearInterval(interval);
        flag=true;
    }
});
RestartTag.addEventListener("click",function()
{
    if(!flag)
    {
        clearInterval(interval);
        flag=true;
    }

minuteTag.textContent="00";
secondTag.textContent="00";
milsecTag.textContent="00";
 milseconds=0
 minutes=0
 seconds=0;
});



