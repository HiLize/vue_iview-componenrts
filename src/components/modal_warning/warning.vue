<template>
  <Modal
    v-model="isShow"
    width="400"
    scrollable
    :transfer="true"
    :closable="false"
    :footer-hide="true"
    :mask-closable="false"
    class-name="vertical-center-modal"
    >
        <div>
            <div class="warning_info">
                <Icon type="ios-information-circle" size='100' color='#f90' />
                <h1>提示</h1>
                <h3>{{info}}</h3>
            </div>
            <div class="btnContent" slot="footer">
                <Button type="warning" size='large' style="display: inline-block;margin-right: 3rem;" @click="onSubmit">确认</Button>
                <Button type="primary" size='large' style="display: inline-block;margin-left: 3rem;" @click="onChangeShow(false, $event)">取消</Button>
            </div>
        </div>
  </Modal> 
</template>

<script>
import { Modal, Button, Icon } from "iview";

export default {
  components: { Modal, Button, Icon },
  props: {
    isShow: {
        type: Boolean,
        default: true
    },
    info: {
      type: String,
      default: ''
    },
    onChangeShow: {
      type: Function,
      default: () => {}
    },
    onSubmit: {
      type: Function,
      default: () => {}
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .vertical-center-modal{
    display: flex;
    align-items: center;
    justify-content: center;
    .ivu-modal{
      top: 0;
    }
    .modalContent {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      position: relative;
      min-height: 10rem;
      line-height: 4rem;
      font-size: 1rem;
    }
    .btnContent {
      text-align: center;
    }
    .warning_info {
        text-align: center;
        margin-bottom: 2rem;
    }
    .tipsText {
      display: block;
      width: 80%;
      text-align: center;
    }
  }
</style>
