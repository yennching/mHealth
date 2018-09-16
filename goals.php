<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="goals.css">
    
</head>
   <div class="row">
    <button type = "button" onclick = "goBack()" class="col">Back</button>
    <button onclick="add10A()" class="col">Completed today's goal!</button>
  <button onclick="add30B()" class="col">Excelled at today's goal!</button>
  </div>

<div class="contents">
  
<h2 class="header">Exercise</h2>
  <div class="progress">
    <div id="progBarABronze" class="progress-bar bg-success" role="progressbar" aria-valuenow="progA"
    aria-valuemin="0" aria-valuemax="100" style="width:0%">
      <span id="percentABronze">0</span>
    </div>
  </div>
  <div class="progress">
    <div id="progBarASilver" class="progress-bar bg-info" role="progressbar" aria-valuenow="progA"
    aria-valuemin="0" aria-valuemax="100" style="width:0%">
      <span id="percentASilver">0</span>
    </div>
  </div>
  <div class="progress">
    <div id="progBarAGold" class="progress-bar bg-warning" role="progressbar" aria-valuenow="progA"
    aria-valuemin="0" aria-valuemax="100" style="width:0%">
      <span id="percentAGold">0</span>
    </div>
  </div>
  

    
<h2 class="header">Hygene</h2>
  <div class="progress">
    <div id="progBarBBronze" class="progress-bar bg-success" role="progressbar" aria-valuenow="progB"
    aria-valuemin="0" aria-valuemax="100" style="width:0%">
      <span id="percentBBronze">0</span>
    </div>
  </div>
  <div class="progress">
    <div id="progBarBSilver" class="progress-bar bg-info" role="progressbar" aria-valuenow="progB"
    aria-valuemin="0" aria-valuemax="100" style="width:0%">
      <span id="percentBSilver">0</span>
    </div>
  </div>
  <div class="progress">
    <div id="progBarBGold" class="progress-bar bg-warning" role="progressbar" aria-valuenow="progB"
    aria-valuemin="0" aria-valuemax="100" style="width:0%">
      <span id="percentBGold">0</span>
    </div>
  </div>
  
  <h2 class="header">Days away from Vice</h2>
  <div class="progress">
    <div id="progBarCBronze" class="progress-bar bg-success" role="progressbar" aria-valuenow="progC"
    aria-valuemin="0" aria-valuemax="100" style="width:0%">
      <span id="percentCBronze">0</span>
    </div>
  </div>
  <div class="progress">
    <div id="progBarCSilver" class="progress-bar bg-info" role="progressbar" aria-valuenow="progC"
    aria-valuemin="0" aria-valuemax="100" style="width:0%">
      <span id="percentCSilver">0</span>
    </div>
  </div>
  <div class="progress">
    <div id="progBarCGold" class="progress-bar bg-warning" role="progressbar" aria-valuenow="progC"
    aria-valuemin="0" aria-valuemax="100" style="width:0%">
      <span id="percentCGold">0</span>
    </div>
  </div>
</div>


<div class="inputBar">
<label for="goalName"><b id = "goalName">Add new Goal</b></label>
<input type="text" placeholder="Enter name of goal" id="goalName">
</div>

<div class="bottomdiv"></div>
<script src="goals.js"></script>
    