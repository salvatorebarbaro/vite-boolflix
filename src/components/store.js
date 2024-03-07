// "Store" è una libreria JavaScript leggera e semplice utilizzata per la memorizzazione di dati nello storage del browser. Questo può includere l'archiviazione di dati come oggetti, array, stringhe e altri tipi di dati JavaScript. La libreria fornisce un'API semplice per memorizzare, recuperare e rimuovere dati dallo storage del browser.
import {reactive} from 'vue'
export const store = reactive({
    // oggetto inserito qui è come se fosse un dato condiviso tra tutti gli oggetti
    // in questo caso avremo films che è l'array vuoto delli nostri film
    films:[],

    inputvalue: '',

})