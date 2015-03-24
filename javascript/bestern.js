window.onload = function() {
	document.getElementById('button').onclick = (function() {
		var s =document.getElementById('bitches'); 
    	if( s.innerHTML = 'Hello bitches!'){
    		document.getElementsByTagName('audio')[0].play();
    		s.textContent = 'Hello bitchception!';   	
    	}
    	else if (s.innerHTML = 'Hello bitchception!') {
    		s.textContent = 'Hello bitches!';
   		
		}
		return false;
	});
};