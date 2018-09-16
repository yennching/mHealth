//global count for index
count_q=0;
type = 0;
social_score=0;
happy_score=0;
vice_score=0;
health_score=0;

base_q= "Over the course of today, how often have you been bothered by the following problems?";

happiness_q=["Feeling nervous, anxious or on edge", "Not being able to stop or control worrying", "Trouble relaxing", "Becoming easily annoyed or irritable", "Little interest or pleasure in doing things", "Trouble falling or staying asleep, or sleeping too much", "Feeling tired or having little energy", "Trouble concentrating on things, such as reading the newspaper or watching television"]

happiness_a = ["Always", "Often", "Sometimes", "Rarely", "Never"]

phys_health_q = ["How long did you excercise for today?", "How productive did you feel today", "How much sleep did you have", "What percentage of your meals were healthy"]

phys_health_a = ["<10 min", "10-20 min", ">20 min", "Not at all", "Somewhat", "Very productive", "<6 hours", "6-9 hours", ">9 hours", "<50%", "50-70%", ">70%"]

social_q = ["Have you done any hobbies today?","Have you seen any of your friends today?"]

social_a = ["No","Yes, but I was not engaged", "Yes"]

vice_q = ["Have you felt the need to take any substances today", "How much control do you feel when drinking/taking drugs"]

vice_a = ["Strongly", "A little", "Not at all", "None/Very little", "Some control", "A lot of control"]

function clear_cont(){
  document.getElementById("question-base").innerHTML = "";
  document.getElementById("question").innerHTML = "";
  document.getElementById("answers").innerHTML = "";
}

function new_happy_q(i){
  clear_cont();
  document.getElementById("question-base").innerHTML = base_q; 
  document.getElementById("question").innerHTML = happiness_q[i];
  for (x = 0; x < happiness_a.length; x++) { 
    var score = x+1;
    $( "#answers" ).append("<input type='radio' name='radAnswer' value = "+score+" data='happy'>"+happiness_a[x]+"<br>");
 }
  
}

function new_phys_health_q(i){
  clear_cont();
  document.getElementById("question").innerHTML = phys_health_q[i];
  for (x = i*3; x < (i+1)*3; x++) { 
    var score = x % 3+1;
    $( "#answers" ).append("<input type='radio' name='radAnswer' value="+score+" data='health'>"+phys_health_a[x]+"<br>");
 }
  
}


function new_social_q(i){
  clear_cont();
  document.getElementById("question").innerHTML = social_q[i];
  for (x = 0; x < social_a.length; x++) { 
    var score = x+1;
    $( "#answers" ).append("<input type='radio' name='radAnswer' value="+score+" data='social'>"+social_a[x]+"<br>");
 }
  
}


function new_vice_q(i){
  clear_cont();
  document.getElementById("question").innerHTML = vice_q[i];
  for (x = i*3; x < (i+1)*3; x++) {
    var score = x % 3+1;
    $("#answers").append("<input type='radio' name='radAnswer' value="+score+" data = 'vice'>"+vice_a[x]+"<br>");
 }
  
}


new_happy_q(count_q);

function getNxt(){
  
  $('input:radio').each(function () {

        var $this = $(this),
            score = $this.attr('value'),
            type = $this.attr('data');

        if ($(this).prop('checked')) {
          
            document.getElementById("score").innerHTML = score + " "+ type;
          
            switch (type){
                
              case "happy":
                happy_score=parseFloat(happy_score)+parseFloat(score);
                break;
                    
              case "health":
                health_score= parseFloat(health_score)+parseFloat(score);
                break;
             
                case "vice":
                vice_score=parseFloat(vice_score)+parseFloat(score);
                break;
             
                case "social":
                social_score=parseFloat(social_score)+parseFloat(score);
                break;
                
            }
        }

    });
  
  count_q++;
  
  if (count_q < happiness_q.length && type == 0 ){
    new_happy_q(count_q);
  }
  
  else if (count_q >= happiness_q.length && type == 0){
    type++;
    count_q=0;
  }
  
  if (count_q < phys_health_q.length && type == 1){
    new_phys_health_q(count_q);
  }
  else if (count_q >= phys_health_q.length && type == 1){
    type++;
    count_q=0;
  }
  if (count_q < social_q.length && type == 2){
    new_social_q(count_q);
  }
  else if (count_q >= social_q.length && type == 2){
    type++;
    count_q=0;
  }
  if (count_q < vice_q.length && type == 3){
    new_vice_q(count_q);
  }
  
  if(count_q == vice_q.length && type==3){
     
      document.getElementById("nxt-bt").innerHTML = "Submit"
      
    
  }
  if(count_q > vice_q.length && type==3){
      
      happy_score= Math.round(happy_score/40*100);
      social_score= Math.round(social_score/6*100);
      vice_score= Math.round(vice_score/9*100);
      health_score= Math.round(health_score/12*100);
      
      document.write (happy_score);
      document.write ("  "+social_score);
      document.write ("  "+vice_score);
      document.write ("  "+health_score);
      
      $.post('survey_back.php', {happy_score:happy_score, social_score:social_score, vice_score: vice_score, health_score: health_score},
    function(data){
          document.write(data);
      });
  }

}




