var progA = 19;
var progB = 30;
var progC =75;





function add10A() {
  progA = 29;
  startup();
}

function add30B() {
  progB = 60;
  startup();
}


function changeValA(){
  if(progA <= 25){
    document.getElementById("percentABronze").innerHTML = progA
    document.getElementById("progBarABronze").style = "width: " + (progA*100/25) + "%"
  }
  else if (progA <= 50){
    document.getElementById("progBarABronze").style = "width: 100%"
    document.getElementById("percentABronze").innerHTML = 25
    document.getElementById("progBarASilver").style = "width: " + ((progA-25)*4) + "%"
    document.getElementById("percentASilver").innerHTML = progA
    }
  else{
    document.getElementById("progBarABronze").style = "width: 100%"
      document.getElementById("percentABronze").innerHTML = 25
      document.getElementById("progBarASilver").style = "width: 100%"
      document.getElementById("percentASilver").innerHTML = 50
      document.getElementById("progBarAGold").style = "width: " + ((progA-50)*2) + "%"
      document.getElementById("percentAGold").innerHTML = progA
  }
  
}

function changeValB(){
  if(progB <= 25){
    document.getElementById("percentBBronze").innerHTML = progB
    document.getElementById("progBarBBronze").style = "width: " + (progB*100/25) + "%"
  }
  else if (progB <= 50){
    document.getElementById("progBarBBronze").style = "width: 100%"
    document.getElementById("percentBBronze").innerHTML = 25
    document.getElementById("progBarBSilver").style = "width: " + ((progB-25)*4) + "%"
    document.getElementById("percentBSilver").innerHTML = progB
    }
  else{
    document.getElementById("progBarBBronze").style = "width: 100%"
      document.getElementById("percentBBronze").innerHTML = 25
      document.getElementById("progBarBSilver").style = "width: 100%"
      document.getElementById("percentBSilver").innerHTML = 50
      document.getElementById("progBarBGold").style = "width: " + ((progB-50)*2) + "%"
      document.getElementById("percentBGold").innerHTML = progB
  }
  
}

function changeValC(){
  if(progC <= 25){
    document.getElementById("percentCBronze").innerHTML = progC
    document.getElementById("progBarCBronze").style = "width: " + (progC*100/25) + "%"
  }
  else if (progC <= 50){
    document.getElementById("progBarCBronze").style = "width: 100%"
    document.getElementById("percentCBronze").innerHTML = 25
    document.getElementById("progBarCSilver").style = "width: " + ((progC-25)*4) + "%"
    document.getElementById("percentCSilver").innerHTML = progC
    }
  else{
    document.getElementById("progBarCBronze").style = "width: 100%"
      document.getElementById("percentCBronze").innerHTML = 25
      document.getElementById("progBarCSilver").style = "width: 100%"
      document.getElementById("percentCSilver").innerHTML = 50
      document.getElementById("progBarCGold").style = "width: " + ((progC-50)*2) + "%"
      document.getElementById("percentCGold").innerHTML = progC
  }
  
}

function goBack() {
    window.history.back();
}

changeValA();
changeValB();
changeValC();


