// Esercizio:
// - creare una lista di cose da fare e mostrarla in pagina con Vue;
// - aggiungere un campo di input e un pulsante per aggiungere nuove cose da fare alla lista;
// - cancellare un item dalla lista, al click sulla relativa icona 'X'.


var app = new Vue({
  el: '#app',
  data:{
    title: "ToDo List",
    list: [
      "fare la spesa",
      "dare da mangiare al cane",
      "programmare",
      "mangiare",
      "dormire",
    ]
  }
})
