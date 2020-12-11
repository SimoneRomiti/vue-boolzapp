// Milestone 1
// ●	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// ●	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// ●	Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ●	Click sul contatto mostra la conversazione del contatto cliccato

var app = new Vue(
  {
    el: "#container",
    data: {
      contacts: [
	      {
		      name: 'Michele',
		      avatar: 'img/avatar-1.webp',
        },
        {
          name: 'Fabio',
          avatar: 'img/avatar-2.webp'
        }
      ],
      active: ""
    },
    methods: {
      selectedContact: function(element, i){
        if(this.contacts[i] == element){
          this.active = i
        }
      }
    }
  }
)
