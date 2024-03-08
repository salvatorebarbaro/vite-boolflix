
<script>
// importo il mio store
import {store} from '../components/store.js'

import AppElementItems from '../components/AppElementItems.vue'
export default{
  name:'AppFilmList',
  data(){
    return{
      store,
      

    }
  },
    components:{
      AppElementItems,
      
  },
  created(){
   
   
  },

  methods: {


    
    
  },
}


</script>

<template>
    <div id="container_risultati">
      <h2>Elenco risultati</h2>
      <ul id="container_film">
        <AppElementItems v-for="currentFilm in store.films" :card="currentFilm"></AppElementItems>
      </ul>
    </div>

</template>
<style lang="scss">
@use '../components/style/variables.scss' as *;
#container_risultati{
    height: 100vh;
    // misura di test
    max-width: $misura;
    background-color:$colore_sfondo;
    h2{
      text-align: center;
      text-transform: uppercase;
      padding: 12px 0;
      color: rgb(150, 206, 225);
    }
    ul{
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 30px;
      

       
    }
}



</style>
