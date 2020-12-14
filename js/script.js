// Milestone 1
// ●	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// ●	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// ●	Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ●	Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.


var app = new Vue(
  {
    el: "#container",

    data: {
      contacts: [
	      { //MICHELE
		      name: 'Michele',
		      avatar: 'img/avatar-1.webp',
          inputText: "",
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
      				text: 'Tutto fatto!',
      				status: 'received'
      			},
          ],
        }, //FINE MICHELE

        { //FABIO
          name: 'Fabio',
          avatar: 'img/avatar-2.webp',
          inputText: "",
          newMessage: {
            date: "",
            text: "",
            status: 'sent'
          },
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
          inputText: "",
          newMessage: {
            date: "",
            text: "",
            status: 'sent'
          },
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
          inputText: "",
          newMessage: {
            date: "",
            text: "",
            status: 'sent'
          },
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
      },
      sendMessage: function(){
        if(event.which == 13){

          var totalDate = this.getMessageDate();
          var textNewMessage = this.contacts[this.active].inputText;

          // NUOVO OGGETTO CON INFORMAZIONI NUOVO MESSAGGIO
          var newMessageObject = {
            date: totalDate,
            text: textNewMessage,
            status: 'sent'
          }

          // PUSH NUOVO OGGETTO IN ARRAY MESSAGGI
          this.contacts[this.active].messages.push(newMessageObject);

          this.contacts[this.active].inputText = "";

          this.answerMessage();
        }
      },
      answerMessage: function(){
        var answer = setTimeout(
          () => {
            var totalDate = this.getMessageDate();
            var newAnswerObject = {
              date: totalDate,
              text: "Ok!",
              status: "received"
            }
            this.contacts[this.active].messages.push(newAnswerObject)
          }, 1000
        );
      },
      getMessageDate: function(){
        // DATA E ORA INVIO MESSAGGIO
        var totalDate = new Date();
        var currentMonth = totalDate.getMonth() + 1;
        var currentDay = totalDate.getDate();
        var currentYear = totalDate.getFullYear();
        var currentHour = totalDate.getHours();
        var currentMinutes = totalDate.getMinutes();

          if(currentMinutes <= 9){
            currentMinutes = "0" + currentMinutes;
          } else{
            currentMinutes;
          }

        totalDate =
        currentDay + "/"+ currentMonth + "/" + currentYear + " " + currentHour + ":" + currentMinutes;
        return totalDate;
        // FINE DATA E ORA INVIO MESSAGGIO
      }
    }
  }
);
