
<script>
// importo il mio store
import {store} from '../components/store.js'


export default{
  name:'AppTitle',
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
}


</script>

<template>
  <div id="Container_title">
    <h1>Boolflix</h1>
    <div id="campo_di_ricerca">
      <input type="search" placeholder="Ricerca film" v-model="store.inputvalue">
      <button @click="$emit('RicercaPulsante')">Ricerca</button>
    </div>
    
    
  </div>

</template>

<style lang="scss">
#Container_title{
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
  background-color: #1c1c1c;
  padding: 15px;
  h1{
    text-transform: uppercase;
    font-size: 40px;
    color: red;
  }
  input{
    padding: 8px;
    text-align: center;
    text-transform: uppercase;
    border-radius: 8px;
    border: transparent;
  }
  button{
    height: 100%;
    padding: 8px;
    border-radius: 8px;
    border: transparent;
    cursor: pointer;
  }
}

</style>
