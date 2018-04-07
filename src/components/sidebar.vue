<template>
  <div class="sidebar">
    <p class="block-title">Profile</p>
    <!-- 用户头像 -->
    <div class="block-border profile-wrap">
      <div class="profile-pic">
        <img src="../../static/user-pic.jpeg" alt="profile pic">
      </div>
      <!-- 用户简介 -->
      <div class="profile-content">
        <p class="p-name">{{ profile.nick_name }}</p>
        <p class="p-bios">{{ profile.bio }}</p>
        <div class="contact">
          <a :href="profile.github">
            <i class="fa fa-github fa-lg" aria-hidden="true"></i>
          </a>
          <a :href="profile.weibo">
            <i class="fa fa-weibo fa-lg" aria-hidden="true"></i>
          </a>
          <a :href="profile.email">
            <i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
    <!-- search block -->
    <p class="block-title">Search</p>
    <div class="search-wrap">
      <i class="fa fa-search fa-lg" aria-hidden="true"></i>
      <input type="text" placeholder="search...">
      <div class="s-btn">Search</div>
    </div>
    <!-- tags -->
    <p class="block-title">Tags</p>
    <div class="tags-block">
      <span v-for="tag in profile.tags" :key="tag">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'sidebar',
    created () {
      this.fetchData()
    },
    methods: {
      fetchData () {
        this.$http.get('/api/v2/user/profile')
          .then(({data}) => {
            for (const k in data.data) {
              // $set是vue实例都有的方法，用于赋值
              this.$set(this.profile, k, data.data[k])
            }
          })
      }
    },
    data () {
      return {
        profile: {}
      }
    }
  }
</script>

<style lang="stylus">
  light_grey = #ccc
  silver = #c0c0c0
  steel_blue =	#4682B4
  dark_grey = #808080
  light_green = #00b5ad

  .sidebar {
    width 25%
    .profile-wrap {
      margin-bottom 40px
      .profile-pic {
        width 100%
        height 200px
        img {
          width 100%
          height 100%
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
      }
      .profile-content {
        width 100%
        font-family 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
        text-align center
        .p-name {
          font-weight 700
          font-size 1.2rem
          line-height 1.5rem
          margin-top 20px
          margin-bottom 5px
          &:hover {
            cursor pointer
          }
        }
        .p-bios {
          font-size 1rem
          font-weight 100
          color silver
          &:hover {
            cursor pointer
          }
        }
        .contact {
          color steel_blue
          margin 20px 0
          i {
            margin 0 7px
            color dark_grey
            &:link, &:visited, &:hover, &:active {
              color steel_blue
              cursor pointer
            }
          }
        }
      }
    }
    .search-wrap {
      position relative
      width 100%
      margin-bottom 50px
      i {
        position: absolute;
        left: 10px;
        top: 13px;
        color dark_grey
      }
      input {
        width 100%
        height 38px
        padding-left 2.5rem
        font-size 1rem
        border 1px solid light_grey
        border-radius 5px
      }
      .s-btn {
        display inline-block
        position absolute
        top: 0;
        right: 0;
        width 80px
        height 38px
        border-bottom-right-radius: 5px;
        border-top-right-radius: 5px;
        color #fff
        text-align: center;
        line-height: 38px;
        background: light_green;
      }
    }
    .tags-block {
      font-family 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
      span {
        display inline-block
        border 1px solid steel_blue
        border-radius: 5px;
        margin: 4px;
        font-size: 1rem;
        line-height: 1.5rem;
        padding: 5px;
        &:hover {
          cursor pointer
          line-height 2rem
        }
      }
    }
  }
</style>
