<template>
  <div class="page-userLike">
    <userNav title="关注的艺人"></userNav>
      <keep-alive>
        <div class="page-userLike_view">
          <div class="page-userLike_view_artist">
            <artist v-for="item in artists" :key="item.artistOID" :artistInfo="item"></artist>
          </div>
        </div>
      </keep-alive>
  </div>
</template>

<script>
import Axios from 'axios'
import userNav from '@/components/User/UserNav'
import artist from '@/components/User/Artist'
import { mapState } from 'vuex'
export default {
  name: 'UserLike',

  components: {
    userNav,
    artist
  },

  data () {
    return {
      artists: []
    }
  },

  computed: {
    ...mapState(['userInfo'])
  },

  methods: {

  },

  created () {
    Axios.post('http://129.204.85.186:3000/user/like', {
      artistOID: this.userInfo.artistOID
    }).then(response => {
      const { data } = response
      if (data.code === 0) {
        this.artists = data.data.artists.artistOID
      }
    })
  }

}
</script>

<style lang="scss">
@import '~@/assets/styles/mixins.scss';
.page-userLike {
  display: flex;
  flex-direction: column;
  height: 100%;
  &_view {
    flex: 1;
    overflow-y: auto;
    background: #fff;
  }
}
</style>
