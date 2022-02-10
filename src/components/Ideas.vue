<template>
  <div>
      <h1>Ideas</h1>   

        <ul>
            <li v-for="idea in ideasNotDone" :key="idea.id">
              <div class="container">
                <div class="title">{{ idea.title }}</div>
              
            <div class="btn" >
              <button class="btn-done" @click="doneIdea(idea.id)">V</button>
            </div>
            <div class="btn" >
             <button class="btn-delete" @click="deleteIdea(idea.id)">X</button>
            </div>
            </div>
            </li>
        </ul>

      <h1>Ideas done</h1>   

        <ul >
            <li v-for="idea in ideasDones" :key="idea.id" >
              <div class="container">
                <div class="done">{{ idea.title }}</div>
                <div class="btn" ><button class="btn-delete" @click="deleteIdea(idea.id)">X</button></div>
              </div>
            
            </li>
        </ul>
  </div>
</template>

<script>

export default {
  computed: {
    allIdeas() {
      return this.$store.getters.allIdeas;
    },
    ideasNotDone() {
      return this.$store.getters.ideasNotDone;
    },
    ideasDones() {
      return this.$store.getters.ideasDones;
    }
  },
  methods: {
    deleteIdea(id) {
      console.log("deleteIdea", id);
      this.$store.dispatch('deleteIdea', id);
    },
    doneIdea(id) {
      console.log("doneIdea", id);
    this.$store.dispatch('doneIdea', id);
    
    }
  },
}
</script>

<style lang="css">
ul {
  list-style: none;
  padding: 0;
  background-color: azure;
  width: 33%;
  margin: auto;
}

ul li {
  list-style: none;
  margin: 10px 0;
  
}

.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  
}
.title{
  flex: 80%;
}
.done {
  flex: 70%;
  text-decoration: line-through;
  color: red;
}
.btn{
  flex: 20%;
}
.btn-delete {

  background: red;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
.btn-done {

  background: green;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
}
</style>