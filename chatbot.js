var chatbot={
		
		initier : function(donnees){
			this.dialogue=donnees;
			this.data=donnees;
		},

		drapeaux : "",

		si : function(index){
			if(this.dialogue[index].si==null)return true;
			var reg=RegExp(this.dialogue[index].si);
			return reg.test(this.drapeaux);
		},

		sauf : function(index){
			if(this.dialogue[index].sauf==null)return true;
			var reg=RegExp(this.dialogue[index].sauf);
			return !reg.test(this.drapeaux);
		},

		chercher : function(recherche){
			for (i = 0; i < this.dialogue.length; i++) {
				for (j = 0; j < this.dialogue[i].usr.length; j++) {
					var reg=RegExp(this.dialogue[i].usr[j]);
						if(reg.test(recherche)&&this.si(i)&&this.sauf(i)){
							var rand;
							if(Array.isArray(this.dialogue[i].bot))
								rand = this.dialogue[i].bot[Math.floor(Math.random() * this.dialogue[i].bot.length)];
							else  
								rand=this.dialogue[i].bot;

//ajouter drapeaux
							if(this.dialogue[i].drapeau!=null){
								this.drapeaux+=this.dialogue[i].drapeau;
							}

//dialogues imbriqués
							if (this.dialogue[i].suite!=null)
								this.dialogue=this.dialogue[i].suite;
							else 
								this.dialogue =this.data;

							return rand;
						}

				}

			}

		},
	}