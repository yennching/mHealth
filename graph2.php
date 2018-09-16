<?php
include 'stats.php';
?>
<head>
    <link href="https://fonts.googleapis.com/css?family=Abel|Asap|Oxygen" rel="stylesheet">

  <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
  <link rel="stylesheet" type="text/css" href="graph2.css">
</head>

<div class="container">
  <h1 class="title">Stay on Track. . .</h1>
  <div class="graph">
    
  <div id="div1"></div>
  <div id="div2"></div>
    
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
<button onclick="analyize('happiness',9)" class="cur" >Sep</button>
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
<button onclick="plot4()" >Vices</button>
<button onclick="plot3()" >Social</button>
<button onclick="plot2()" >Wellness</button>
<button onclick="plot1()" >Happiness</button>
  </div>

</div>


<script > 
    
    var happy_score = <?php echo json_encode($happy_score); ?>;
    var phys_score = <?php echo json_encode($phys_score); ?>;
    var social_score = <?php echo json_encode($social_score); ?>;
    var vice_score = <?php echo json_encode($vice_score); ?>;
    var date = <?php echo json_encode($date); ?>;

</script>

   
<script src="graph2.js"></script>