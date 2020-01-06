<template>
  <router-link tag="div" :to='`/drama/${yanchenglin[nuber].showOID}`' class="column-5" v-if="yanchenglin[2]">
    <div class="budazhe" v-if="yanchenglin[nuber].discount >= 1 ? false : yanchenglin[nuber].discount">
      {{(yanchenglin[nuber].discount*10).toFixed(1)}}
      <br>
      折起
    </div>
    <div class="xishizhenbao" :style="`background-image: url(${yanchenglin[nuber].posterURL})`">
    </div>
      <div class="yangcolor">{{yanchenglin[nuber].showName.slice(5)}}</div>
      <div class="whitecolor">{{yanchenglin[nuber].shortShowDate}}</div>
  </router-link>
</template>

<script>
export default {
  name: 'Three',
  props: {
    yanchenglin: {
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
    color: black;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    line-height: 150%;
    border-radius: 5px;
    height: 22%;
    width: 32%;
    background: linear-gradient(180deg,#ee0e87,#ff1d41);
    top: -2%;
    margin-left: 6%;
    position: absolute;
    z-index: 10;
  }
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
</style>
