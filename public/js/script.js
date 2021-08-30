const btn = document.querySelector("button");
const outputme = document.querySelector(".output-you");
const outputBot = document.querySelector(".output-bot");
const socket = io();

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = "en-US";
recognition.interimResults = false;

btn.addEventListener("click", () => {
  recognition.start();
});

recognition.onresult = function (event) {
  const last = event.results.length - 1;
  const text = event.results[last][0].transcript;
  console.log(text);

  outputme.textContent = text;

  socket.emit("chat message", text);
};

const botReply = (text) => {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  utterance.pitch = 1;
  utterance.volume = 1;
  synth.speak(utterance);
};

socket.on("bot reply", (text) => {
  outputBot.textContent = text;
  botReply(text);
  console.log('replyText: ' + text);
  
  if(text == '') text = '(No answer...)';
  outputBot.textContent = text;

  if(text.includes('https')) 
  {
	  	text = '(Opening the March To Zero video now...Excited ? Buckle up !!)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal').modal();
}, 5000);		  
  }		
	

  else if(text.toLowerCase().includes('march to zero')) 
  {
	  	//replyText = '(Opening the March To Zero video now...Excited ? Buckle up !!)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal1').modal();
}, 5000);		  
  }
  
	else  if(text.toLowerCase().includes('business')) 
  {
	  	//replyText = '(Opening the March To Zero video now...Excited ? Buckle up !!)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal2').modal();
}, 5000);		  
  }
	
	 else if(text.toLowerCase().includes('growth')) 
  {
	  	text = '(Opening the growth projectile presentation now..)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal3').modal();
}, 5000);		  
  }
		 else if(text.toLowerCase().includes('projectile')) 
  {
	  	text = '(Opening the growth projectile presentation now..)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal3').modal();
}, 5000);		  
  }
	
	 else if(text.toLowerCase().includes('bpm')) 
  {
	  	text = '(Opening the BPM Morgan presentation now...)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal4').modal();
}, 5000);		  
  }
	
		 else if(text.toLowerCase().includes('morgan')) 
  {
	  	text = '(Opening the BPM Morgan presentation now...)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal4').modal();
}, 5000);		  
  }

	
		
		 else if(text.toLowerCase().includes('voice')) 
  {
	  	text = '(Opening the Voice BOT presentation now...)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal8').modal();
}, 5000);		  
  }
	
	
			 else if(text.toLowerCase().includes('forex rates')) 
  {
	  	text = '(Fetching the realtime available forex rates from exchange market now...)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal5').modal();
}, 5000);		  
  }

				 else if(text.toLowerCase().includes('rates')) 
  {
	  	text = '(Fetching the realtime available forex rates from exchange market now...)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal5').modal();
}, 5000);		  
  }
	
				 else if(text.toLowerCase().includes('forex')) 
  {
	  	text = '(Fetching the realtime available forex rates from exchange market now...)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal5').modal();
}, 5000);		  
  }
	
				 else if(text.toLowerCase().includes('quotes data') || text.toLowerCase().includes('quotes') || text.toLowerCase().includes('quotation') || text.toLowerCase().includes('symbol')) 
  {
	  	text = '(Fetching the latest quotes data for available symbols from exchange market now...)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal6').modal();
}, 5000);		  
  }

				 else if(text.toLowerCase().includes('site reliability') || text.toLowerCase().includes('site') || text.toLowerCase().includes('reliability engineering') || text.toLowerCase().includes('reliability') || text.toLowerCase().includes('site reliability')) 
  {
	  	text = '(Fetching the SRE Implementation Deck now...)'; 
  		outputBot.textContent = text;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal10').modal();
}, 5000);		  
  }	

	else {
	text = '(no response...)'; 
  		outputBot.textContent = text;
	}
});
