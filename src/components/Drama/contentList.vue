<template>
 <div class="drama-content">
   <router-link :to="`/drama/${showInfo.showOID}`" class="drama-content__list">
     <div class="drama-content__list__left">
       <img :src="`${showInfo.posterURL}`" style="width:90px;height:120px" alt="">
     </div>
     <div class="drama-content__list__right">
       <div class="show-name">{{showInfo.showName}}</div>
       <div class="show-line">
         <div class="show-time">{{showInfo.firstShowTime}}-{{showInfo.lastShowTime}}</div>
         <div class="show-avenue">{{showInfo.venueName}}</div>
         <div class="show-discount" v-show="showInfo.discount < 1 && showInfo.discount !==0 ">
           <h3>{{(showInfo.discount*10).toFixed(1)}}</h3>
           <p>折起</p>
         </div>
       </div>
       <div class="other-detail">
         <div
         :class="{'presale': 2 === showInfo.showStatus.code, 'sale': 3 === showInfo.showStatus.code }">
         {{showInfo.showStatus.displayName}}
         </div>
         <div class="price" v-show="showInfo.minPrice !== 0"><span class="number">{{showInfo.minPrice}}</span>元起</div>
         <div class="advertise" v-if="showInfo.advertise">
           <span class="decorate">
             <img src="../../assets/imgs/dot.png" alt="">
           </span>
           {{showInfo.advertise}}
        </div>
       </div>
     </div>
   </router-link>
 </div>
</template>

<script>
export default {
  name: 'content-list',
  props: {
    showInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang='scss'>
  .drama-content{
    padding: 0 18px;
    &__list{
      display: flex;
      padding: 22px 0;
      &__right{
        padding-left: 18px;
        overflow: hidden;
      .show-name{
        width: 100%;
        color: #000;
        line-height: 24px;
        font-size: 17px;
        font-weight: 700;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      .show-line{
        position: relative;
        padding: 10px 0;
        font-size: 13px;
        color: #323038;
        line-height: 16px;
        .show-avenue{
          padding-top: 2px;
          max-width: 194px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .show-discount{
          position: absolute;
          right: 0;
          top: 10px;
          width: 37px;
          height: 37px;
          color: #fff;
          background-image: linear-gradient(315deg,#ff1d41,#ee0e87);
          box-shadow: 0 2px 8px 0 rgba(250,24,88,.5);
          border-radius: 100%;
          text-align: center;
          h3{
            font-weight: bold;
            padding-top: 2px;
          }
          p{
            font-size: 10px;
          }
        }
      }
      .sale,.presale{
        width: 36px;
        padding: 3px;
        text-align: center;
        border-radius: 2px;
        font-size: 12px;
        margin-top: 6px;
      }
      .presale{
        color: #fb5200;
        border: 1px solid rgba(251,82,0,.3);
      }
      .sale{
        color: #ff1d41;
        border: 1px solid rgba(255,29,65,.3);
      }
      .price{
        padding: 12px 0;
        font-size: 12px;
        color: #ff1d41;
        span{
          font-size: 18px;
          font-weight: 600;
          padding-right: 4px;
        }
      }
      .advertise{
          color: #95949d;
          font-size: 13px;
          line-height: 20px;
          .decorate{
            padding: 0 6px;
            img{
            width: 6px;
            height: 6px;
           }
        }
      }
    }
   }
  }
</style>
