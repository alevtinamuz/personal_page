<template>
  <section>
    <scroll-parallax :speed="0.9">
      <img
        class="img_background"
        :src="static1"
      />
    </scroll-parallax>
    <scroll-parallax
      :speed="0.2"
    >
    <div class="img_title" style="display: flex; justify-content: flex-end; align-item: center;">
      <img :src="static2" alt="">
    </div>
    <div class="img_title">
      <code>
        <h3>2nd year student of applied mathematics and computer science.</h3>
        <h3>Phone number: +79294287110</h3>
      </code>
    </div>
    </scroll-parallax>
  </section>
  <div class="spacing"></div>
  <section class="horizontal_content">
    <scroll-parallax :speed="0.15" :left="true" direction="x">
      <div style="display: flex; justify-content: flex-end;">
        <img
          class="img_background"
          :src="static3"
        />
      </div>
    </scroll-parallax>
    <div class="horizontal_elements">
      <scroll-parallax
        :speed="0.15"
        direction="x"

      >
      <div style="display: flex; align-item: center;">
        <div class="img_title">
          <img :src="back2" alt="">
        </div>
        <div class="img_title" style="">
          <code>
              {{ scrollX }}
          </code>
        </div>
      </div>
      </scroll-parallax>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      static1: require('@/static/back1.jpg'),
      static2: require('@/static/back2.gif'),
      static3: require('@/static/back3.gif')
    }
  }
}
</script>

<style>
body {
    margin: 0;
    padding: 0;
    font-family: Helvetica;
  }
  .img_background {
    width: 100%;
    top: 0;
  }
  .img_title {
    position: relative;
    bottom: 30em;
    color: white;
    margin-right: 32px;
  }
  .img_title img {
    width: 350px;
  }
  code {
    color: rgb(33, 45, 176);
    padding: 5px 15px;
    border-radius: 4px;
    text-shadow: none;
    margin-left: 30px;
    font-size: 16px;
  }
  .horizontal_content {
    overflow: hidden;
  }
</style>