<template>
  <div>
    <NavigationBar/>
      <RouterView/>
  </div>
</template>

<script>
  import NavigationBar from '@/components/NavigationBar.vue';
  export default {
    components: {
      NavigationBar
    }
  }
</script>