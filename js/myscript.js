// Esercizio:
// - creare una lista di cose da fare e mostrarla in pagina con Vue;
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.
// - Oltre al click sul pulsante, consentire l'inserimento del nuovo item anche premendo il tasto Invio della tastiera, dopo aver scritto il testo nel campo di input.


var app = new Vue ({
  el: '#app',
  data:{
    title: "ToDo List",
    list: [
     {message:"fare la spesa"},
     {message:"dare la pappa al cane"},
     {message:"programmare"},
     {message:"mangiare"},
     {message:"dormire"}
   ],
    inputVal: "",
  },
  methods: {
    // CREO FUNZIONE
    pushInArray: function () {
      // PUSHO NELLA LIST L'OGGETTO + VALORE DELL' INPUT
      this.list.push({message: this.inputVal}),
      this.inputVal = ""
    },
    // CREO FUNZIONE
    removeFromArray: function (index) {
      // RIMUOVO DALLA LIST L'OGGETTO
      this.$delete(this.list, index);
    },
  }
})
