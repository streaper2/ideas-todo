<template>
  <div>
      <form @submit.prevent="create" >
          <label for="idea-title">Ideas title</label><br/>
            <input type="text" id="idea-title" v-model="title" placeholder="entrer un titre" />
            <input type="text" name="" id="idea-description" v-model="description" placeholder="entrer une description">
            <button type="submit" >create</button>
      </form>
  </div>
</template>

<script>


export default {
    data(){
        return {
            title:'',
            description:''
        };
    },
    methods: {
        create() {
    
            const idea = {
                id: new Date(),
                title: this.title,
                description: this.description,
                done: false,
            }
            this.$store.dispatch('createIdea', idea);
           
            console.log(this.title);
            this.title="";
            this.description="";
        }
    }
}
</script>

<style>

</style>