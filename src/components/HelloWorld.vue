<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>
      My social accounts:
    </h3>
    <p>
      <a href="https://vk.com/alevtinamuz">
        <img src="../static/vk_link.gif"/>
      </a>
      <a href="https://github.com/alevtinamuz">
        <img src="../static/github_link.gif"/>
      </a>
      <a href="https://t.me/alevtinamuz">
        <img src="../static/telegram_link.gif"/>
      </a>
      <a href="https://www.instagram.com/alevtinamuzz">
        <img src="../static/instagram_link.gif"/>
      </a>
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
