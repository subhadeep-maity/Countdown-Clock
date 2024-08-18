const endDate = "20 AUGUST 2026 10:10 AM";

document.getElementById("end-date").innerText = endDate;
const inputs=document.querySelectorAll("input");

const clock=()=>{
    const end =new Date(endDate);
    const now=new Date();
    // console.log(end);
    // console.log(now);
    const diff=end-now;
    console.log(diff);
    if(diff<0){
        alert("Time's Up!");
        return;
    }
    else{
        //convert into days
    const days=Math.floor(diff/(1000*60*60*24));
    // console.log(days);
    inputs[0].value=days;
    //convert into hours
    const hours=Math.floor((diff%(1000*60*60*24))/(1000*
        60*60));
    // console.log(hours);
    inputs[1].value=hours;
    //convert into minuits
    const minutes=Math.floor((diff%(1000*60*60))/(1000*60));
    // console.log(minutes);
    inputs[2].value=minutes;
    //convert into secounds
    const seconds=Math.floor((diff%(1000*60))/(1000));
    // console.log(seconds);
    inputs[3].value=seconds;
    }
    
    
}
clock();
setInterval(
    ()=>{
        clock();
    },1000
)