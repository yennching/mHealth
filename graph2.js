var date = ["01/01/2015","01/02/2015","01/04/2015","01/08/2015","03/15/2015","03/16/2015","03/17/2015","05/17/2015","05/19/2015"];
var social_score = [100,80,85,80,80,70,80,90,100];
var happy_score = [90,80,60,80,100,70,80,60,100];
var vice_score = [100,80,85,60,85,80,60,90,90];
var phys_score = [100,100,85,65,10,20,90,70,100];
    
var happiness = {
  x: date,
  y: happy_score,
  type: 'scatter'
};

var vices = {
  x: date, 
  y: vice_score, 
  type: 'scatter'
};

var health = {
  x: date, 
  y: phys_score, 
  type: 'scatter'
};

var social = {
  x: date, 
  y: social_score, 
  type: 'scatter'
};

var data1 = [happiness];
var data2 = [health];
var data3 = [social];
var data4 = [vices];

var layout1 = {
  yaxis: {rangemode: 'tozero',
          showline: true,
          zeroline: true}
};

var layout2 = {
  yaxis: {rangemode: 'tozero',
          zeroline: true}
};

function plot1(){
  Plotly.newPlot('div1', data1, layout1);
}
function plot2(){
  Plotly.newPlot('div1', data2, layout1);
}

function plot3(){
  Plotly.newPlot('div1', data3, layout1);
}

function plot4(){
  Plotly.newPlot('div1', data4, layout1);
}
