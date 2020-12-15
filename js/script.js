// Milestone 1
// ●	Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// ●	Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Milestone 2
// ●	Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione
// ●	Click sul contatto mostra la conversazione del contatto cliccato

// Milestone 3
// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)

// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato
//
// Visualizzazione ora e ultimo messaggio inviato/ricevuto nella lista dei contatti




var app = new Vue(
  {
    el: "#container",

    data: {
      search: "",
      filteredContacts: [],
      deleted: false,
      contacts: [
	      { //MICHELE
		      name: 'Michele',
		      avatar: 'img/avatar-1.webp',
          inputText: "",
          notEmpty: true,
          messages: [
            {
      				date: '10/01/2020 15:30:55',
      				text: 'Hai portato a spasso il cane? asasa asdsaadsa sadasdsa asdasda asdsdas asasdsa asdas asdasdasdas sdasdasdasdas asdasdsdasdas asdasdsasas sadassdasdasdas sadasdasdasdasdas fasffs asfaasfasfaf asfasfafasf asffsafas s asjlasjlksa jaògjaòegj aeòeòagaòljgae laekfòlekòa aòafòksòfòsfla fkaf òasf',
      				status: 'sent',
              visible: false,
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ricordati di dargli da mangiare',
      				status: 'sent',
              visible: false,
      			},
      			{
      				date: '10/01/2020 16:15:22',
      				text: 'Tutto fatto!',
      				status: 'received',
              visible: false,
      			},
          ],
        }, //FINE MICHELE

        { //FABIO
          name: 'Fabio',
          avatar: 'img/avatar-2.webp',
          inputText: "",
          notEmpty: true,
          messages: [
      			{
      				date: '20/03/2020 16:30:00',
      				text: 'Ciao come stai?',
      				status: 'sent',
              visible: false,
      			},
      			{
      				date: '20/03/2020 16:30:55',
      				text: 'Bene grazie! Stasera ci vediamo?',
      				status: 'received',
              visible: false,
      			},
      			{
      				date: '20/03/2020 16:35:00',
      				text: 'Mi piacerebbe ma devo andare a fare la spesa.',
      				status: 'sent',
              visible: false,
      			}
      		],
	      }, //FINE FABIO

        { //SAMUELE
          name: "Samuele",
          avatar: 'img/avatar-3.png',
          inputText: "",
          notEmpty: true,
          messages: [
            {
              date: '28/03/2020 10:10:40',
      				text: 'La Marianna va in campagna',
      				status: 'received',
              visible: false,
      			},
      			{
      				date: '28/03/2020 10:20:10',
      				text: 'Sicuro di non aver sbagliato chat?',
      				status: 'sent',
              visible: false,
      			},
      			{
      				date: '28/03/2020 16:15:22',
      				text: 'Ah scusa!',
      				status: 'received',
              visible: false,
            }
          ],
        }, //FINE SAMUELE

        { //LUISA
          name: "Luisa",
          avatar: 'img/avatar-4.jpg',
          inputText: "",
          notEmpty: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
      				text: 'Lo sai che ha aperto una nuova pizzeria?',
      				status: 'sent',
              visible: false,
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Si, ma preferirei andare al cinema',
      				status: 'received',
              visible: false,
            }
          ],
        }, //FINE LUISA

        { //CECILIA
          name: "Cecilia",
          avatar: 'img/avatar-4.jpg',
          inputText: "",
          notEmpty: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
      				text: 'Ciao Ceci, ci vediamo oggi dopo pranzo?',
      				status: 'sent',
              visible: false,
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Ok, andiamo a fare una passeggiata!',
      				status: 'received',
              visible: false,
            }
          ],
        }, //FINE CECILIA

        { //MIRCO
          name: "Mirco",
          avatar: 'img/avatar-2.webp',
          inputText: "",
          notEmpty: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
      				text: 'Ciao Mirco, ci sei stasera per vedere la partia?',
      				status: 'sent',
              visible: false,
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Certo! Sono da te alle 20:00',
      				status: 'received',
              visible: false,
            }
          ],
        }, //FINE MIRCO

        { //LUCA
          name: "Luca",
          avatar: 'img/avatar-1.webp',
          inputText: "",
          notEmpty: true,
          messages: [
            {
              date: '10/01/2020 15:30:55',
      				text: 'Hey ciao come stai?',
      				status: 'sent',
              visible: false,
      			},
      			{
      				date: '10/01/2020 15:50:00',
      				text: 'Tutto bene grazie, tu?',
      				status: 'received',
              visible: false,
            }
          ],
        } //FINE LUCA
      ],
      active: 0
    },

    created : function(){
      this.filteredContacts = this.contacts.filter(
        (element) => {
          return true;
        }
      );
      console.log(this.filteredContacts);
    },

    updated: function() {
     this.scrollToEnd();
    },

    methods: {
      selectedContact: function(element, i){
        if(this.filteredContacts[i] == element){
          this.active = i;
        }
      },

      changeAvatar: function(){
        return this.filteredContacts[this.active]['avatar'];
      },

      changeName: function(){
        return this.filteredContacts[this.active].name;
      },

      sendMessage: function(){
        if(event.which == 13){
          var totalDate = this.getMessageDate();
          var textNewMessage = this.filteredContacts[this.active].inputText;
          // NUOVO OGGETTO CON INFORMAZIONI NUOVO MESSAGGIO
          var newMessageObject = {
            date: totalDate,
            text: textNewMessage,
            status: 'sent',
            visible: false
          }
          // PUSH NUOVO OGGETTO IN ARRAY MESSAGGI
          this.filteredContacts[this.active].messages.push(newMessageObject);
          this.filteredContacts[this.active].inputText = "";

          this.answerMessage();
        }
      },

      answerMessage: function(){
        var answer = setTimeout(
          () => {
            var totalDate = this.getMessageDate();
            var newAnswerObject = {
              date: totalDate,
              text: "Prova invio riuscita!",
              status: "received",
              visible: false
            }
            this.filteredContacts[this.active].messages.push(newAnswerObject)
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
      },

      searchContact: function(){
        if(this.search != ""){
          this.filteredContacts = this.contacts.filter(
            (element, index) => {
              return this.contacts[index].name.toUpperCase().includes(this.search.toUpperCase());
            }
          );
        } else{
          this.filteredContacts = this.contacts;
        }
        this.active = 0;
      },

      popupVisibility: function(element, i){
        if(this.deleted == false){
          for(var k = 0; k < this.filteredContacts[this.active].messages.length; k++){
            if(i != k){
              this.filteredContacts[this.active].messages[k].visible = false;
            }
          }
          if(element.visible == false){
            element.visible = true;
          } else {
            element.visible = false;
          }
        } else{
          this.deleted = false;
        }
      },

      deleteMessage: function(element, i){
        this.filteredContacts[this.active].messages.splice(i, 1);
        if(this.filteredContacts[this.active].messages == ""){
          this.filteredContacts[this.active].notEmpty = false;
        }
        this.deleted = true;
      },

      scrollToEnd: function() {
        const chatBox =
        this.$el.querySelector('#clearfix');
        chatBox.scrollTop = chatBox.scrollHeight;
      },
    }
  }
);
