function checkWorkingHours(){var now=new Date();var hours=now.getUTCHours()+5;var minutes=now.getUTCMinutes()+30;if(minutes>=60){hours+=1;minutes-=60;}
var startHour=11;var endHour=18;if(hours>startHour||(hours==startHour&&minutes>=0)){if(hours<endHour||(hours==endHour&&minutes<=0)){document.getElementById("call-working").style.display="none";return;}}
document.getElementById("call-working").style.display="flex";}
checkWorkingHours();setInterval(checkWorkingHours,60000);