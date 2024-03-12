
<script>
// importo il mio store
import {store} from '../components/store.js'

import axios from 'axios';

export default{
  name:'AppSerieTv',
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
                  "zh":"cn",
                  "hi":"in",
                  "ko":"kr",
                  "zh":"cn"
                }
                // questa linea di codice controlla se la lingua originale della card è mappata in map. Se sì, restituisce il valore mappato, altrimenti restituisce la lingua originale della card stessa essendoci l'operatore or.
                return map[this.serie.original_language] || this.serie.original_language;
                },

              bandiera(){
                // assegnamo valore lingua mappata a nuova variabile
                const languagecorrect =this.mappatura();
                // richiamo api
                axios.get(`https://flagcdn.com/24x18/${languagecorrect}.png`)
                .then(res =>{
                    this.flagurl=`https://flagcdn.com/24x18/${languagecorrect}.png`;
                })
                // gestiamo gli errori
                .catch(error=>{
                  // bandiera di default
                  this.flagurl=`https://flagcdn.com/24x18/ua.png`;
                })
                            }
          },
// ci siamo dovuti inserire questa sezione che ci permette di inserire i valori che andranno ricalcolati ogni volta perchè dinamici 
computed:{
            voto_medio(){
          // operatore matematico usato per arrotondare l'operazione al numero più vicino
          return Math.ceil(this.serie.vote_average / 2 );
          // cosi otteniamo un vodo da 1 a 5 per eccesso
        },
         stelle(){
          // questa funzione andrà a creare un array della lunghezza del nostro voto medio
          return Array(this.voto_medio).fill('');
          // tramite fil nooi ogni elemento dell'array lo andremo a riempire con una stringa vuota
        },
        Numero_vuote(){
          // abbiamo ottenuto il numero di stelle da inserire per rappresentare quelle vuote
          return (5-this.voto_medio); 
        },
        Stelle_Vuote(){
          // creiamo arrey di stelle vuote
          return Array(this.Numero_vuote).fill('');
        }
          }, 
props:{
    serie:Object,
  }
}



</script>

<template>
    <li id="Card_films">
        <!-- inseriamo dinamicamente gli elementi che vogliamo -->
        <div id="titolo">Titolo: {{ serie.name }}</div>
        <div id="titolo_originale">Titolo Originale: {{ serie.original_title }}</div>
        <div id="immagine_url">link immagine: {{'https://image.tmdb.org/t/p/w342'+serie.poster_path }}</div>
        <div id="lingua">
          <img :src="flagurl" alt="bandiera lingua">
        </div>
        <!-- sezione stelle -->
        <div id="stelle">
          <div id="stella" v-for="stella in stelle">
            <i class="fa-solid fa-star"></i>
          </div>
          <div id="stelle_vuote" v-for="stella_vuota in Stelle_Vuote">
            <i class="fa-regular fa-star"></i>
          </div>
          
        </div>
        <!-- fine sezione stelle -->

        <!-- <div id="voto">Voto: {{ serie.vote_average }}</div> -->
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
