
<script>
// importo il mio store
import {store} from '../components/store.js'

import AppElementItems from '../components/AppElementItems.vue'

import AppSerieTv from '../components/AppSerieTv.vue'
export default{
  name:'AppFilmList',
  data(){
    return{
      store,
      

    }
  },
    components:{
      AppElementItems,
      AppSerieTv,
      
  },
  created(){
   
   
  },

  methods: {


    
    
  },
}


</script>

<template>
    <div id="container_risultati">
      <div class="sezionefilm">
        <h2>Risultati Film</h2>
        <ul id="container_film">
                <AppElementItems v-for="currentFilm in store.films" :card="currentFilm"></AppElementItems>
        </ul>
      </div>
      
      <div class="sezioneserie">
        <h2>Risultati serie tv</h2>
        <ul id="container_Serie_tv">
        <AppSerieTv v-for="currentserie in store.Serie_tv" :serie="currentserie"></AppSerieTv>
      </ul>
      </div>
      
    </div>

</template>
<style lang="scss">
@use '../components/style/variables.scss' as *;
#container_risultati{
    
    max-width: $misura;
    background-color:$colore_sfondo;
    h2{
      text-align: center;
      text-transform: uppercase;
      padding: 12px 0;
      color: rgb(150, 206, 225);
    }
      #container_film{
        margin-bottom: 30px;
      }
      .sezioneserie{
        margin-bottom: 30px;
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
