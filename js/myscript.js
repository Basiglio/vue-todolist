// Esercizio:
// - creare una lista di cose da fare e mostrarla in pagina con Vue;
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.


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
      this.list.push({message: this.inputVal});
    },
    // CREO FUNZIONE
    removeFromArray: function () {
      // RIMUOVO DALLA LIST L'OGGETTO
      this.list.slice({message:"fare la spesa"});
    },
  }
})
