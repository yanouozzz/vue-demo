<template>
  <div class="page-chat">
    <div class="page-chat__top">
      聊天页面
    </div>
    <div class="page-chat__body">
      聊天主体 <br>
    </div>
    <div class="page-chat__bottom">
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Chat'
}
</script>

<style lang="scss">
.page-chat {
  width: 100%;
  height: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  &__top {
    height: 3rem;
    background-color: rgb(87, 107, 255);
    text-align: center;
    line-height: 3rem;
    color:pink;
    font-size: 1.2rem;
  }
  &__body {
    overflow-y: auto;
    height: 1000px;
  }
  &__bottom {
    height: 200px;
    border-top: 1px solid #ccc;
    background-color: aquamarine;
    width: 100%;
    bottom: 0;
  }
}
</style>
