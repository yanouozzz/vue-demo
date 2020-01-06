<template>
  <router-link tag="div" :to='`/drama/${geju[nuber].showOID}`' class="column-5" v-if="geju[2]">
    <div class="budazhe" v-if="geju[nuber].discount >= 1 ? false : geju[nuber].discount">
      {{(geju[nuber].discount*10).toFixed(1)}}
      <br>
      折起
    </div>
    <div class="hiddenw" v-if="geju[nuber].minPrice >= 1 ? true : false">
      <div class="xishizhenbao" :style="`background-image: url(${geju[nuber].posterURL})`">
      </div>
        <div class="yangcolor">{{geju[nuber].showName.slice(5)}}</div>
        <div class="whitecolor">{{geju[nuber].shortShowDate}}</div>
        <div class="duoshao">{{geju[nuber].minPrice}}<span> 起</span></div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'YinYue',
  props: {
    geju: {
      type: Array
    },
    nuber: {
      type: Number
    }
  }
}
</script>

<style lang="scss">
.column-5 {
  width: 105px;
  position: relative;
  height: 197px;
  .budazhe {
    color: white;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    line-height: 150%;
    width: 32%;
    height: 22%;
    background: linear-gradient(180deg,#ee0e87,#ff1d41);
    top: -5%;
    margin-left: 6%;
    position: absolute;
    z-index: 10;
  }
  .hiddenw {
    width: 100%;
    height: 100%;
    .xishizhenbao {
    background-size: cover;
    width: 100%;
    height: 147px;
  }
  .yangcolor {
    height: 20px;
    font-size: 13px;
    padding-top: 8px;
    font-weight: 700;
    color: black;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .whitecolor {
    padding: 2px 0;
    color: #95949d;
    z-index: 88;
  }
  .duoshao {
    color: #ff505e;
    font-size: 18px;
    span {
      font-size: 12px;
    }
  }
  }
}
</style>
