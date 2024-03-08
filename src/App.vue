<script>
// dichiarazione di axios
import axios from 'axios';

import AppTitle from './components/AppTitle.vue'

import AppFilmList from './components/AppFilmList.vue'
// dichiarazione di store
import {store} from './components/store.js'
export default{
  data(){
    return{
      store,
    }
  },
    components:{
      AppTitle,
      AppFilmList,
      
  },
  created(){
   
   
  },

  methods: {
    // chiamata che viene fatta alla pressione del pulsante
    ChiamataApy(){
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=52d7979549a2ff7c806b67b80cd17c72&query='+ this.store.inputvalue)
      .then(res =>{
        // cerco il percorso giusto per array di film
        
        console.log('film',res.data.results)
        
        // lo salvo all'interno di un array di oggetti
        
        
        this.store.films=res.data.results

        console.log(this.store.films)


      })

    },
    
    
  },
}


</script>

<template>
  <div id="container_totale">
    <AppTitle @RicercaPulsante="ChiamataApy"></AppTitle>
    <AppFilmList></AppFilmList>
  </div> 
  

</template>

<style lang="scss">
#container_totale{
  
  margin:  20px auto;
  max-width: 1400px;


  
}

</style>
