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
	      { //MICHELE
		      name: 'Michele',
		      avatar: 'img/avatar-1.webp',
          messages: [

            {
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane?',
      				status: 'sent'
      			},

      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent'
      			},

      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto! ciao asasda asdasda asdasdas asdasdasd asdasdas asdasdas asdasdas dasdasdad asasdasd asdasdsad asdasdsad asdsadd asdsadasd asdasdsa dasdsad sadasd asda sda sdas asdas assdas asdasdas asdasdsa',
      				status: 'received'
      			}
          ],
        }, //FINE MICHELE

        { //FABIO
          name: 'Fabio',
          avatar: 'img/avatar-2.webp',
          messages: [
      			{
      				date: '20/03/2020 16:30:00',
      				text: 'Ciao come stai?',
      				status: 'sent'
      			},
      			{
      				date: '20/03/2020 16:30:55',
      				text: 'Bene grazie! Stasera ci vediamo?',
      				status: 'received'
      			},
      			{
      				date: '20/03/2020 16:35:00',
      				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      				status: 'sent'
      			}
      		],
	      }, //FINE FABIO

        { //SAMUELE
          name: "Samuele",
          avatar: 'img/avatar-3.png',
          messages: [
            {
              date: '28/03/2020 10:10:40',
      				text: 'La Marianna va in campagna',
      				status: 'received'
      			},
      			{
      				date: '28/03/2020 10:20:10',
      				text: 'Sicuro di non aver sbagliato chat?',
      				status: 'sent'
      			},
      			{
      				date: '28/03/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received'
            }
          ],
        }, //FINE SAMUELE

        { //LUISA
          name: "Luisa",
          avatar: 'img/avatar-4.jpg',
          messages: [
            {
              date: '10/01/2020 15:30:55',
      				text: 'Lo sai che ha aperto una nuova pizzeria?',
      				status: 'sent'
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Si, ma preferirei andare al cinema',
      				status: 'received'
            }
          ],
        } //FINE LUISA
      ],
      active: 0
    },

    methods: {
      selectedContact: function(element, i){
        if(this.contacts[i] == element){
          this.active = i;
        }
      },
      changeAvatar: function(){
        return this.contacts[this.active]['avatar'];
      },
      changeName: function(){
        return this.contacts[this.active].name;
      }
    }
  }
)
