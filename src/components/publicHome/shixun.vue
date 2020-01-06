<template>
  <router-link tag="div" :to='`/drama/${shixun[nuber].showOID}`' class="column-5" v-if="shixun[2]">
    <div class="budazhe" v-if="shixun[nuber].discount >= 1 ? false : shixun[nuber].discount">
      {{(shixun[nuber].discount*10).toFixed(1)}}
      <br>
      折起
    </div>
    <div class="hiddenw" v-if="shixun[nuber].minPrice >= 1 ? true : false">
      <div class="xishizhenbao" :style="`background-image: url(${shixun[nuber].posterURL})`">
      </div>
        <div class="yangcolor">{{shixun[nuber].showName.slice(5)}}</div>
        <div class="whitecolor">{{shixun[nuber].shortShowDate}}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'Shixun',
  props: {
    shixun: {
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
    padding-top: 4%;
    font-weight: 700;
    color: black;
    font-weight: 700;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .whitecolor {
    padding-top: 4%;
    color: #95949d;
    z-index: 88;
  }
  }
}
</style>
