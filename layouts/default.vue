<template>
  <div class="app">
    <header>
      <div class="gnb">
        <div class="gnb-wrapper">
          <div class="gnb-logo">
            <span class="logo"><a href="/">shift 4</a></span>
          </div>
          <div class="gnb-nav">
            <div class="gnb-nav-item">
              <nuxt-link to="blog">blog</nuxt-link>
            </div>
            <div class="gnb-nav-item">|</div>
            <div class="gnb-nav-item">
              <nuxt-link to="portfolio">portfolio</nuxt-link>
            </div>
            <div class="gnb-nav-item">|</div>
            <div class="gnb-nav-item">
              <nuxt-link to="service">service</nuxt-link>
            </div>
            <div class="gnb-nav-item">|</div>
            <div class="gnb-nav-item">
              <nuxt-link to="wiki">wiki</nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </header>
  <div>
    <nuxt />
  </div>
  
  <footer>
    <div class="fnb">
      <div class="fnb-wrapper">
        <div class="fnb-logo"><span class="logo">shift 4</span></div>
        <div class="fnb-info">
          Copyright 2023 SHIFT 4 All Rights Reserved.<br/>
          ShifT 4 Team leader : Jungin Kim ｜ Email : 99JunginKim@gmail.com<br/>
          TEL : 010-7008-0801｜ ADDRESS : 대구광역시 동구 신암로 16길 16
        </div>
      </div>
    </div>
  </footer>
</div>
</template>

<style>
@import url("https://webfontworld.github.io/NexonLv1Gothic/NexonLv1Gothic.css");
@font-face {
  font-family: 'barcode';
  src: url('@/static/LibreBarcode39Text-Regular.ttf');
}

*{margin: 0; border: 0;}
a{
    text-decoration: none;
    color: black;
}
.app {
  font-family: "NexonLv1Gothic", -apple-system, BlinkMacSystemFont,
    "Apple SD Gothic Neo", "Noto Sans KR", "Segoe UI", "Malgun Gothic",
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  .gnb {
  position: relative;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 80px;
  margin-bottom: 10px;
  box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.3);
}
.logo{
  font-size: 50px;
  font-family: 'barcode';
}
.gnb-wrapper {
  position: absolute;
  width: 1100px;
  height: 80px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}

.gnb-logo {
  position: absolute;
  left: 0px;
  display: inline-block;
  width: 200px;
  height: 80px;
  padding: 10px;
}

.gnb-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.gnb-nav {
  position: absolute;
  left: calc(100% - 800px);
  width: 800px;
  height: 80px;
}

.gnb-nav-item {
  position: relative;
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 25px 21px 0px 21px;
}

.fnb {
  position: relative;
  width: 100vw;
  height: 160px;
}

.fnb-wrapper {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 1100px;
  height: 160px;
  padding-top: 40px;
}

.fnb-logo {
  position: absolute;
  left: 0px;
  display: inline-block;
  width: 200px;
  height: 80px;
  padding: 10px;
}

.fnb-logo img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.fnb-info {
  position: absolute;
  top: 54px;
  left: calc(100% - 700px);
  display: inline-block;
  width: 700px;
  text-align: left;
  font-size: 16px;
  font-weight: 400;
  line-height: 21px;
}

</style>
<script>
export default {
  name: "IndexPage",
};
</script>
