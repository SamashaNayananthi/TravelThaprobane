   
const livestreamButton = document.getElementById('door');// div that controls the button for the user to click to enter the live stream
document.getElementById('timer').innerHTML =
  01 + ":" + 00;  //setting the timer (minutes : seconds)                                  
    
	                                              
	myVar=startTimer();  //intiaiallasing the variable
   
	  
	//var start;
	//var end;
	//var time;
function startTimer() {
	 //start=new Date();
	  var presentTime = document.getElementById('timer').innerHTML; //getting the present time
	  var timeArray = presentTime.split(/[:]+/);           //splitting the minutes and seconds
	  var m = timeArray[0];                                //first set of values left side of the: is the minutes
	  var s = checkSecond((timeArray[1] - 1));               //Second  set of values left side of the : is the minutes

				if(s==59){ 
					m=m-1;   //if(m<0){alert('timer completed')}
				 }
				document.getElementById('timer').innerHTML =   //displaying the timer in minutes and remainning seconds
				m + ":" + s;
				 t=setTimeout(startTimer, 1000); // get the reading for every second
				
				if(m==0 && s==0){
					
					  clearTimeout(t);             //stop when it becomes zero seconds
				    // alert('Game Over');
			     // myFunction(); 

                 
				    clock.classList.add("hide");// hide the clock div element
			      setTimeout(livestreamButton.classList.remove("hide"),3000);// show the live stream button div element
					

				  
				}
				  
			
	}

function checkSecond(sec) {
	  if (sec < 10 && sec >= 0) {
		  sec = "0" + sec  
		  }; // add zero in front of numbers < 10
	  
	  if (sec < 0) {
		  sec = "59";
		}
	  return sec;
}


//function myFunction() {
  //  alert('Game Over'); //printing game over after reaching zero seconds.
//}





function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;     
	var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
	var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
	var question10 = document.quiz.question10.value;
   


   var correct = 0;


    if (question1 == "Sri Jayawardenepura Kotte") {
        correct+=2;
		txt1="1.Your answer is Correct !";
	
	}else{
		txt1="1.Incorrect answer,capital of Sri Lanka is Sri Jayawardenepura Kotte.";
		correct-=1;
		
		
    }
    if (question2 == "King Wijaya") {
        correct+=2;
		txt2="2.Your answer is Correct !";
	
	}else{
		txt2="2.Incorrect answer,first king of Sri Lanka is King Wijaya.";
		correct-=1;
		
		
    }
    if (question3 == "Mahaweli river") {
        correct+=2;
		txt3="3.Your answer is Correct !";
	
	}else{
		txt3="3.Incorrect answer,longest river in Sri Lanka is Mahaweli river.";
		correct-=1;
		
		
    }
	
	
	
	if (question4 == "1948") {
        correct+=2;
		txt4="4.Your answer is Correct !";
	
	}else{
		txt4="4.Incorrect answer,SriLanka got the independence in 1948.";
		correct-=1;
		
		
    }
    if (question5 == "1996") {
        correct+=2;
		txt5="5.Your answer is Correct !";
	
	}else{
		txt5="5.Incorrect answer,Sri lanka won Cricket World cup in 1996.";
		correct-=1;
		
		
    }
    if (question6 == "VolleyBall") {
        correct+=2;
		txt6="6.Your answer is Correct !";
	
	}else{
		txt6="6.Incorrect answer,national sport of Sri lanka is Volley Ball. ";
		correct-=1;
		
		
    }
	
	
	
	if (question7 == "JungleFowl") {
        correct+=2;
		txt7="7.Your answer is Correct !";
	
	}else{
		txt7="7.Incorrect answer,national bird of Sri lanka is Junglefowl.";
		correct-=1;
		
		
    }
    if (question8 == "DS Senanayaka") {
        correct+=2;
		txt8="8.Your answer is Correct !";
	
	}else{
		txt8="8.Incorrect answer,first prime minister of Sri lanka is DS Senanayaka.";
		correct-=1;
		
		
    }
    if (question9 == "Kandy") {
        correct+=2;
		txt9="9.Your answer is Correct !";
	
	}else{
		txt9="9.Incorrect answer, Temple of Tooth is situated in  Kandy.";
		correct-=1;
		
		
    }
	
	
	 if (question10 == "Sinhala") {
        correct+=2;
		txt10="10.Your answer is Correct !";
	
	}else{
		txt10="10.Incorrect answer,national language of Sri Lanka is Sinhala.";
		correct-=1;
		
		
    }
	
	
	
	

    var pictures = ["win.gif", "meh.jpeg", "lose.gif"];
    var messages = ["<b>Great job!</b>", "<b>That's just okay<b>", "<b>You really need to do better<b>"];
    var score;

    if (correct <= 0) {
        score = 2;
		document.getElementsByTagName("BODY")[0].style.backgroundColor = "#F3F29A";
		document.getElementById("after_submit").style.backgroundColor="#F3F29A"
    }

    else if (correct < 15) {
        score = 1;
		document.getElementsByTagName("BODY")[0].style.backgroundColor = "#C4F39A";
		document.getElementById("after_submit").style.backgroundColor="#C4F39A";
    }

    else if (correct <=20) {
        score = 0;
		document.getElementsByTagName("BODY")[0].style.backgroundColor = "#73BAD5";
		document.getElementById("after_submit").style.backgroundColor="#73BAD5";
    }

    document.getElementById("after_submit").style.visibility = "visible";
	
		
	
	//document.getElementById("timer_set").innerHTML="Time Duration:"+time+"s";
	//console.log('Operation took ' + (end.getTime() - start.getTime()) + ' msec');
		//document.getElementByClassName('questions')("1.What is the capital of New York?");
	document.getElementById("q1").innerHTML=txt1;
	document.getElementById("q2").innerHTML=txt2;
	document.getElementById("q3").innerHTML=txt3;
	document.getElementById("q4").innerHTML=txt4;
	document.getElementById("q5").innerHTML=txt5;
	document.getElementById("q6").innerHTML=txt6;
	document.getElementById("q7").innerHTML=txt7;
	document.getElementById("q8").innerHTML=txt8;
	document.getElementById("q9").innerHTML=txt9;
	document.getElementById("q10").innerHTML=txt10;
	
	
	
	document.getElementById("timer_set").innerHTML="<b>Time Duration: </b>"+t+"s";
	
	

     	
	
    
	//document.getElementById("mc").innerHTML = "yoyo"
    document.getElementById("number_correct").innerHTML = "<b>Score: </b>" + correct ;

	
	document.getElementById("message").innerHTML = messages[score];
	
    document.getElementById("picture").src = pictures[score];

	
	
}

function ask(){
				 clock.classList.add("hide");// hide the clock div element
			      setTimeout(livestreamButton.classList.remove("hide"),3000);// show the live stream button div element
				  t= 60-((m*60)+ s);
				  //end = new Date();
				//time=(end.getTime() - start.getTime());
		
	             
}

























