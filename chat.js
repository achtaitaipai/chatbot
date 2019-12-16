	function send() {
		if(document.getElementById("msg").value != ""){
			var txt = document.createElement("span");
			var requete = document.getElementById("msg").value;
			txt.innerHTML =requete;
			txt.id = "humain";
			document.getElementById("txt").appendChild(txt);
			document.getElementById("msg").value="";


			var reponse=chercher(requete);
			var txt = document.createElement("span");
			var requete = document.getElementById("msg").value;
			txt.innerHTML =reponse;
			txt.id = "bot";
			document.getElementById("txt").appendChild(txt);
			updateScroll()
		}
	}

	function enter() {
	    var key = window.event.keyCode;

	    // If the user has pressed enter
	    if (key === 13) {
	    	send();
	        event.preventDefault();
	        event.stopPropagation();
	    }
	    else {
	        return true;
	    }
	}

	$('#inp').on( 'change keyup keydown paste cut', 'textarea', function (){	
    	if(this.scrollHeight<200&&window.event.keyCode!==13){
    		$(this).height(0).height(this.scrollHeight);
    	}
	}).find( 'textarea' ).change();
	updateScroll()

	
	function updateScroll(){
	    var element = document.getElementById("txt");
	    element.scrollTop = element.scrollHeight;
	}