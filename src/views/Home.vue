<template>
  <div class="home">
    <meteo/>
  </div>
</template>


<script>
// @ is an alias to /src
import meteo from '@/components/meteo.vue'

export default {
  name: 'home',
  components: {
    meteo
  },
}
</script>
