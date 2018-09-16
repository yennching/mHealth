<?php
include 'stats.php';
?>

<head>
  
<button class = "round" onclick="location.href = 'checkin.html';" >Click to Stay in Check</button>
<link href="https://fonts.googleapis.com/css?family=Abel" rel="stylesheet">
<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<link rel="stylesheet" type="text/css" href="graph.css">
</head>

<div class="container">
  <div class="graph">
<canvas id="myCanvas" width="800" height="840"></canvas>
  </div>

  <div class="months">
<table>
  <tr>
    <td>     
<button onclick="analyize('happiness',1)">Jan</button>
</td>
  
    <td>     
<button onclick="analyize('happiness',2)" >Feb</button>
</td>
    
 
    <td>     
<button onclick="analyize('happiness',3)" >Mar</button>
</td>
    
  <td>     
<button onclick="analyize('happiness',4)" >Apr</button>
</td>
    <td>     
<button onclick="analyize('happiness',5)" >May</button>
</td>
    
  
    <td>     
<button onclick="analyize('happiness',6)" >Jun</button>
</td>

    <td>     
<button onclick="analyize('happiness',7)" >Jul</button>
</td>
    <td>     
<button onclick="analyize('happiness',8)" >Aug</button>
</td>
    <td>     
<button onclick="analyize('happiness',9)" >Sep</button>
</td>
    
 
    <td>     
<button onclick="analyize('happiness',10)" >Oct</button>
</td>
  
    <td>     
<button onclick="analyize('happiness',11)" >Nov</button>
</td>
    
   
    <td>     
<button onclick="analyize('happiness',12)" >Dec</button>
</td>
  </tr>
    </table>
</div>

  <div class="well">
<button onclick="analyize('vices')" >Vices</button>
<button onclick="analyize('social')" >Social</button>
<button onclick="analyize('exercise')" >Exercise</button>
<button onclick="analyize('happiness')" >Happiness</button>
 <button onclick="analyize('all')" >All</button>
  </div>

</div>

<script > 
    
    var happy_score = <?php echo json_encode($happy); ?>;
    var phys_score = <?php echo json_encode($phys); ?>;
    var social_score = <?php echo json_encode($social); ?>;
    var vice_score = <?php echo json_encode($vice); ?>;
    var date = <?php echo json_encode($date); ?>;

</script>

   
<script src="gr3.js"></script>
    


