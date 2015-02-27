$(document).ready(function() {
  	$("#homeTab").attr("class","active");

  	function validateEmail(email) { 
    	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	return re.test(email);
	} 

  	$("#submit").click(function(){

  		var email = document.getElementById('email').value;
  		var feedback = document.getElementById('feedback').value;

  		var result = validateEmail(email);
  		// alert(result);
  		if(result)
  		{

		  		$.ajax({
				  type: "POST",
				  url: "https://mandrillapp.com/api/1.0/messages/send.json",
				  data: {
				    "key": "S9bNgeUvVCup29AiJKvRyQ",
				    "message": {
				      "from_email": email,
				      "to": [
				          {
				            "email": "sankettandulwadkar@gmail.com",
				            "type": "to"
				          }
				        ],
				      "autotext": "true",
				      "subject": "Feedback on website",
				      "html": feedback
				    }
				  }
				 }).done(function(response) {
				 		alert("Thank you for your feedback!");
				 }).fail(function(error) {
		    		alert( "Error : " + error.statusText);
		  		});

		}
		else
		{
			alert("Incorrect Email ID detected! Please enter again");
		}


  	});
        
});