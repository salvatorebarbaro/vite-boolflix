
<script>
// importo il mio store
import {store} from '../components/store.js'

import axios from 'axios';

export default{
  name:'AppElementItems',
  data(){
    return{
      store,
      // abbiamo salvato una variabile dove noi andiamo a memorizzare i link delle bandiere
      flagurl:null,

      
      
      

    }
  },
    components:{
      
  },
  created(){
    // andiamo a richiamare la funzione prima che venga "stampata"
    this.bandiera();
    },

  methods: {
    // tramite questa funzione noi siamo andati a correggere le bandiere che non venivano trovate andano a mappare il risultato
    mappatura(){
      const map={
        "en":"gb-eng",
         "ja":"jp",
      }
      // questa linea di codice controlla se la lingua originale della card è mappata in map. Se sì, restituisce il valore mappato, altrimenti restituisce la lingua originale della card stessa essendoci l'operatore or.
      return map[this.card.original_language] || this.card.original_language;
    },

  bandiera(){
    // assegnamo valore lingua mappata a nuova variabile
    const languagecorrect =this.mappatura();
    // richiamo api
    axios.get(`https://flagcdn.com/24x18/${languagecorrect}.png`)
    .then(res =>{
        this.flagurl=`https://flagcdn.com/24x18/${languagecorrect}.png`;
     })
                }
},
    
  
props:{
    card:Object,
  }
}



</script>

<template>
    <li id="Card_films">
        <!-- inseriamo dinamicamente gli elementi che vogliamo -->
        <div id="titolo">Titolo: {{ card.title }}</div>
        <div id="titolo_originale">Titolo Originale: {{ card.original_title }}</div>
<!-- Lingua: {{ card.original_language }} -->
        <div id="lingua">
          <img :src="flagurl" alt="bandiera lingua">
        </div>

        <div id="voto">Voto: {{ card.vote_average }}</div>
        <!-- per commentare questa sezione , quindi io passando le props dell'oggetto card insomma mi trovo all'interno di ogni elemento dell'array cosi da poterlo gestire in modo dinamico molto -->
    </li>
    
</template>
<style lang="scss">
@use '../components/style/variables.scss' as *;
li{
    display: flex;
    flex-direction: column;
    gap: $gap_element;
    border: 1px grey solid;
    padding: 10px;
    width: calc(100% / 5 - $gap_element / 5 * 4);
    align-items: center;
    
}



</style>
