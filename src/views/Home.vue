<template>
  <div class="home">
    <h1>Welcom to Ideas.io</h1>

      <IdeaCreate/>
      <Ideas/>
      
    </div>
</template>

<script>
// @ is an alias to /src
import Ideas from '@/components/Ideas.vue';
import IdeaCreate from '@/components/IdeaCreate.vue';


export default {
  name: 'Home',
  components: {
    Ideas,
    IdeaCreate,
  }
}
</script>
