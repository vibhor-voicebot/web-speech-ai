'use strict';

const socket = io();
//const socket = io({transports: ["websocket"], upgrade: false});

const outputYou = document.querySelector('.output-you');
const outputBot = document.querySelector('.output-bot');

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;

document.querySelector('button').addEventListener('click', () => {
  recognition.start();
});

recognition.addEventListener('speechstart', () => {
  console.log('Speech has been detected.');
});

recognition.addEventListener('result', (e) => {
  console.log('Result has been detected.');

  let last = e.results.length - 1;
  let text = e.results[last][0].transcript;

  outputYou.textContent = text;
  console.log('Confidence: ' + e.results[0][0].confidence);

  socket.emit("chat message", text);
	console.log('emitted msg..');
});

recognition.addEventListener('speechend', () => {
  recognition.stop();
});

recognition.addEventListener('error', (e) => {
  outputBot.textContent = 'Error: ' + e.error;
});

function synthVoice(text) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance();
  utterance.text = text;
  console.log('utterance.text..'+text);
  synth.speak(utterance);
}

socket.on('bot reply', function(replyText) {
	console.log('replyText..'+replyText);
  synthVoice(replyText);

  if(replyText == '') replyText = '(No answer...)';
  outputBot.textContent = replyText;
  
  if(replyText.includes('https')) 
  {
	  	replyText = '(Opening the March To Zero video now...Excited ? Buckle up !!)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal').modal();
}, 5000);		  
  }		
	

  else if(replyText.toLowerCase().includes('march to zero')) 
  {
	  	//replyText = '(Opening the March To Zero video now...Excited ? Buckle up !!)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal1').modal();
}, 5000);		  
  }
  
	else  if(replyText.toLowerCase().includes('business')) 
  {
	  	//replyText = '(Opening the March To Zero video now...Excited ? Buckle up !!)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal2').modal();
}, 5000);		  
  }
	
	 else if(replyText.toLowerCase().includes('growth')) 
  {
	  	replyText = '(Opening the growth projectile presentation now..)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal3').modal();
}, 5000);		  
  }
		 else if(replyText.toLowerCase().includes('projectile')) 
  {
	  	replyText = '(Opening the growth projectile presentation now..)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal3').modal();
}, 5000);		  
  }
	
	 else if(replyText.toLowerCase().includes('bpm')) 
  {
	  	replyText = '(Opening the BPM Morgan presentation now...)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal4').modal();
}, 5000);		  
  }
	
		 else if(replyText.toLowerCase().includes('morgan')) 
  {
	  	replyText = '(Opening the BPM Morgan presentation now...)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal4').modal();
}, 5000);		  
  }

	
		
		 else if(replyText.toLowerCase().includes('voice')) 
  {
	  	replyText = '(Opening the Voice BOT presentation now...)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal8').modal();
}, 5000);		  
  }
	
	
			 else if(replyText.toLowerCase().includes('forex rates')) 
  {
	  	replyText = '(Fetching the realtime available forex rates from exchange market now...)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal5').modal();
}, 5000);		  
  }

				 else if(replyText.toLowerCase().includes('rates')) 
  {
	  	replyText = '(Fetching the realtime available forex rates from exchange market now...)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal5').modal();
}, 5000);		  
  }
	
				 else if(replyText.toLowerCase().includes('forex')) 
  {
	  	replyText = '(Fetching the realtime available forex rates from exchange market now...)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal5').modal();
}, 5000);		  
  }
	
				 else if(replyText.toLowerCase().includes('quotes data') || replyText.toLowerCase().includes('quotes') || replyText.toLowerCase().includes('quotation') || replyText.toLowerCase().includes('symbol')) 
  {
	  	replyText = '(Fetching the latest quotes data for available symbols from exchange market now...)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal6').modal();
}, 5000);		  
  }

				 else if(replyText.toLowerCase().includes('site reliability') || replyText.toLowerCase().includes('site') || replyText.toLowerCase().includes('reliability engineering') || replyText.toLowerCase().includes('reliability') || replyText.toLowerCase().includes('site reliability')) 
  {
	  	replyText = '(Fetching the SRE Implementation Deck now...)'; 
  		outputBot.textContent = replyText;
			//alert("bot contains https");
       			//$("#myModal").modal();
	  	    setTimeout(function() {
    $('#myModal10').modal();
}, 5000);		  
  }	

	else {
	replyText = '(no response...)'; 
  		outputBot.textContent = replyText;
	}
});
