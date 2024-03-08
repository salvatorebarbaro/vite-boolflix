
<script>
// importo il mio store
import {store} from '../components/store.js'


export default{
  name:'AppElementItems',
  data(){
    return{
      store,
      
      
      

    }
  },
    components:{
      
  },
  created(){
   
   
  },

  methods: {
    
    
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
        <div id="lingua">Lingua: {{ card.original_language }}</div>
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
    
}



</style>
