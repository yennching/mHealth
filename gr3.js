
var days=[];
var oldex=1;
var oldanal="";
function day(date,vice_score,exercise_score,social_score,happiness_score)
{
   this.date=date;
   this.vices=vice_score;
   this.exercise=exercise_score;
   this.social=social_score;
   this.happiness=happiness_score;
   this.wellness= (exercise_score+social_score+happiness_score-vice_score)/3;
  // each socre is on a score from 1 to 5
}

function getdate(str){
  
  if (str.charAt(0)=="0"){
    
    str=str.slice(1,2);
    
  }
  else{
    str= str.slice(0,2);
  }
  
      var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  
 var num= parseInt(str);
var month=months[num-1];
  return(month);
  
}

function date_convert(date){
    var dates=date.split("-");
    var dstr=dates[1]+"/"+dates[2]+"/"+dates[0];
 
    return dstr;
  
}

function set_m(index){
   var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  var monthstr=months[index-1];
  var monthdata=[monthstr,index];
  return (monthdata);
  
}

function getdate(str){
  if (str.charAt(0)=="0"){
    str=str.slice(1,2);
  }
  else{
    str= str.slice(0,2);
  }
   var months=['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
 var num= parseInt(str);
  var month=months[num-1];
  return(month);
  
}

function analyize(stat_type,monthdex= oldex){
 if (monthdex!=oldex) {
   stat_type=oldanal;
 }
 oldanal=stat_type;
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
  var yellow="#FFFF00";
 var red= "#ff0000";
 var grey= "#e7e7e7";
   var green="#00ff00";
  var blue= "#0000ff";
  var black="#000000";
  var real_x=0;
  var tempday;
  var datestr="";
  var tempval;
  var tempdate;
 var  inital_pos;
  var end_pos;
  var current_step=0;  
  var super_x=0;
  
  var height=800; 
  var width=800;
  ctx.clearRect(0, 0, width+10, height+50);
  var x;
 
 
  
  var offset=30;
  ctx.beginPath();
  ctx.lineWidth=5;
  ctx.moveTo(offset, 0);
 
  ctx.lineTo(offset, height- offset);
 
  ctx.moveTo(offset, height-offset);
  
  ctx.lineTo(width, height-offset);
  ctx.strokeStyle=black;
    ctx.stroke(); 
  ctx.closePath();
  var h=height-offset;
   var length=days.length;
   
  var vstep_size=(height-offset)/100;
  var printval=0;
  var printstr="";
  while(h>=0){
  ctx.font = "10px Arial";
    printstr=printval.toString()+"%";
  ctx.fillText(printstr, 0, h+10);
    h-=vstep_size*10;
    printval+=10;
  }
  

  var monthdata=set_m(monthdex);
 
   ctx.font = "12px Arial";
  oldex=monthdata[1];
 
  ctx.fillText(monthdata[0], (width-offset)/2, height);
  
  var counter=0;
  for (x in days){
    tempday=days[x];
    datestr=tempday.date;
   tempdate= getdate(datestr);
    if (tempdate==monthdata[0]){
      counter+=1;
    }
    
  }
  
   var step_size= (width-offset-5)/(counter-1);
  var heightratio = (height- offset)/100  ;// sets hieght on scale to 5 high
  var total=0;
 
  x=0;
  real_x=0;
  ctx.lineWidth=2;
   
  // #00ff00
 if(stat_type=="wellness") {
    while (x<length){
     if (real_x>0){
       ctx.beginPath();
       inital_pos=height- offset- tempval*heightratio;
       ctx.moveTo(current_step+offset,inital_pos );// sets to the last point it was at since temp val hasn't been overwriten
       tempday=days[x];
       datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
       datestr=tempday.date;
        
       tempval=tempday.wellness;
       current_step=real_x*step_size;
       end_pos=height-offset- tempval*heightratio;
      if (end_pos>inital_pos){
        ctx.strokeStyle=red;
        
        
      }
      else if (inital_pos>end_pos){
        ctx.strokeStyle=green;
        
        
      }
      else{
        ctx.strokeStyle=blue;
        
      }
      ctx.lineTo(current_step+offset, end_pos);
      ctx.stroke(); 
      ctx.closePath();
      total+= tempval; 
          printstr=tempday.date;
       
       ctx.fillText(printstr.slice(3,5), current_step+offset-5, height-10);
          real_x+=1;
        }
     }
      else{
       
        
        
        tempday=days[x];
        datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
        tempval=tempday.wellness;
        total+=tempval ;
          printstr=tempday.date;
       
       ctx.fillText(printstr.slice(3,5), current_step+offset-5, height-10);
          real_x+=1;
        }
        
      }
     
       x+=1;
  
      
  }
  }
  else if (stat_type=="exercise"){
    while (x<length){
     if (real_x>0){
       ctx.beginPath();
       inital_pos=height- offset- tempval*heightratio;
       ctx.moveTo(current_step+offset,inital_pos );// sets to the last point it was at since temp val hasn't been overwriten
       tempday=days[x];
       datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
       datestr=tempday.date;
        
       tempval=tempday.exercise;
       current_step=real_x*step_size;
       end_pos=height-offset- tempval*heightratio;
      if (end_pos>inital_pos){
        ctx.strokeStyle=red;
        
        
      }
      else if (inital_pos>end_pos){
        ctx.strokeStyle=green;
        
        
      }
      else{
        ctx.strokeStyle=blue;
        
      }
      ctx.lineTo(current_step+offset, end_pos);
      ctx.stroke(); 
      ctx.closePath();
      total+= tempval; 
          printstr=tempday.date;
       
       ctx.fillText(printstr.slice(3,5), current_step+offset-5, height-10);
          real_x+=1;
        }
     }
      else{
       
        
        
        tempday=days[x];
        datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
        tempval=tempday.exercise;
        total+=tempval ;
          printstr=tempday.date;
       
       ctx.fillText(printstr.slice(3,5), current_step+offset-5, height-10);
          real_x+=1;
        }
        
      }
     
       x+=1;
      
      
  }
  }
    
 else if (stat_type=="vices"){
      while (x<length){
     if (real_x>0){
       ctx.beginPath();
       inital_pos=height- offset- tempval*heightratio;
       ctx.moveTo(current_step+offset,inital_pos );// sets to the last point it was at since temp val hasn't been overwriten
       tempday=days[x];
       datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
       datestr=tempday.date;
        
       tempval=tempday.vices;
       current_step=real_x*step_size;
       end_pos=height-offset- tempval*heightratio;
      if (end_pos>inital_pos){
        ctx.strokeStyle=red;
        
        
      }
      else if (inital_pos>end_pos){
        ctx.strokeStyle=green;
        
        
      }
      else{
        ctx.strokeStyle=blue;
        
      }
      ctx.lineTo(current_step+offset, end_pos);
      ctx.stroke(); 
      ctx.closePath();
      total+= tempval; 
          printstr=tempday.date;
       
       ctx.fillText(printstr.slice(3,5), current_step+offset-5, height-10);
          real_x+=1;
        }
     }
      else{
       
        
        
        tempday=days[x];
        datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
        tempval=tempday.vices;
        total+=tempval ;
          printstr=tempday.date;
       
       ctx.fillText(printstr.slice(3,5), current_step+offset-5, height-10);
          real_x+=1;
        }
        
      }
     
       x+=1;
      
      
  }
  }
 else if (stat_type=="social"){  
    while (x<length){
     if (real_x>0){
       ctx.beginPath();
       inital_pos=height- offset- tempval*heightratio;
       ctx.moveTo(current_step+offset,inital_pos );// sets to the last point it was at since temp val hasn't been overwriten
       tempday=days[x];
       datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
       datestr=tempday.date;
        
       tempval=tempday.social;
       current_step=real_x*step_size;
       end_pos=height-offset- tempval*heightratio;
      if (end_pos>inital_pos){
        ctx.strokeStyle=red;
        
        
      }
      else if (inital_pos>end_pos){
        ctx.strokeStyle=green;
        
        
      }
      else{
        ctx.strokeStyle=blue;
        
      }
      ctx.lineTo(current_step+offset, end_pos);
      ctx.stroke(); 
      ctx.closePath();
      total+= tempval; 
          printstr=tempday.date;
       
       ctx.fillText(printstr.slice(3,5), current_step+offset-5, height-10);
          real_x+=1;
        }
     }
      else{
       
        
        
        tempday=days[x];
        datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
        tempval=tempday.social;
        total+=tempval ;
          printstr=tempday.date;
       
       ctx.fillText(printstr.slice(3,5), current_step+offset-7, height-10);
          real_x+=1;
        }
        
      }
     
       x+=1;
      
      
  }
  }
 else if (stat_type=="happiness"){
  
   while (x<length){
     if (real_x>0){
       ctx.beginPath();
       inital_pos=height- offset- tempval*heightratio;
       ctx.moveTo(current_step+offset,inital_pos );// sets to the last point it was at since temp val hasn't been overwriten
       tempday=days[x];
       datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
       datestr=tempday.date;
        
       tempval=tempday.happiness;
       current_step=real_x*step_size;
       end_pos=height-offset- tempval*heightratio;
      if (end_pos>inital_pos){
        ctx.strokeStyle=red;
        
        
      }
      else if (inital_pos>end_pos){
        ctx.strokeStyle=green;
        
        
      }
      else{
        ctx.strokeStyle=blue;
        
      }
      ctx.lineTo(current_step+offset, end_pos);
      ctx.stroke(); 
      ctx.closePath();
      total+= tempval; 
          printstr=tempday.date;
       
       ctx.fillText(printstr.slice(3,5), current_step+offset-5, height-10);
          real_x+=1;
        }
     }
      else{
       
        
        
        tempday=days[x];
        datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
        tempval=tempday.happiness;
        total+=tempval ;
          printstr=tempday.date;
       
       ctx.fillText(printstr.slice(3,5), current_step+offset-5, height-10);
          real_x+=1;
        }
        
      }
     
       x+=1;
      
      
  }
  }
  else if(stat_type=="all") {
    while (super_x<5){
    while (x<length){
     if (real_x>0){
       ctx.beginPath();
       inital_pos=height- offset- tempval*heightratio;
       ctx.moveTo(current_step+offset,inital_pos );// sets to the last point it was at since temp val hasn't been overwriten
       tempday=days[x];
       datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
       datestr=tempday.date;
        
       
       
      if (super_x==0){
        ctx.strokeStyle=red;
        tempval=tempday.vices;
        
      }
      else if (super_x==1){
        ctx.strokeStyle=green;
        tempval=tempday.social;
        
      }
      else if(super_x==2){
        ctx.strokeStyle=blue;   
        tempval=tempday.exercise;
      }
          else if(super_x==3){
             ctx.strokeStyle=black; 
            tempval=tempday.wellness;
          }
          else if (super_x==4){
            ctx.strokeStyle=yellow; 
            tempval=tempday.happiness;
          }
       current_step=real_x*step_size;
       end_pos=height-offset- tempval*heightratio;
      ctx.lineTo(current_step+offset, end_pos);
      ctx.stroke(); 
      ctx.closePath();
      total+= tempval; 
          printstr=tempday.date;
       
       ctx.fillText(real_x, current_step+offset-5, height-10);
          real_x+=1;
        }
     }
      else{
       
        
        
        tempday=days[x];
        datestr=tempday.date;
        tempdate=getdate(datestr);
        if (tempdate==monthdata[0]){
        tempval=tempday.wellness;
        total+=tempval ;
          printstr=tempday.date;
       
       ctx.fillText(printstr.slice(3,5), current_step+offset-5, height-10);
          real_x+=1;
        }
        
      }
     
       x+=1;
  
      
  }
      super_x+=1;
      real_x=0;
      x=0;
      current_step=0;
  }
  }
  if (real_x>1){
    printstr="your average "+stat_type+" is "+Math.round(total/real_x).toString()+"%";
    ctx.fillText(printstr, (width-offset)/2-50, height+15);
 
  }
  else{
   // 
    ctx.fillText("Good start but please input more data to be able to graph", (width-offset)/2, height+15);
    if (stat_type=="all"){
      ctx.fillText("yellow= hapiness, black= wellness, blue= exercise, red= vices, green= social", (width-offset)/2-60, height+30);
    }
  
  }
   
}


function add_data(date,vice_ratio,happiness_ratio,exercise_ratio,social_ratio){

// to add day number find number of days previously recorded
today=new day(date,vice_ratio,exercise_ratio,social_ratio,happiness_ratio);

days.push(today);

}


//vice_ratio,happiness_ratio,exercise_ratio,social_ratio

var x;
var temp;
for (x in vice_score){
 temp= date_convert(date[x]);
  
  add_data(temp, vice_score[x],happy_score[x], phys_score[x],social_score[x]);
 
}
