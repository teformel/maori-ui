<template>
    <div class="row">
        <mr-button @click="fn">按钮</mr-button>
        <mr-button type="primary">按钮</mr-button>
        <mr-button type="success">按钮</mr-button>
        <mr-button type="info">按钮</mr-button>
        <mr-button type="warning">按钮</mr-button>
        <mr-button type="danger">按钮</mr-button>
    </div>
    <div class="row">
        <mr-button plain>按钮</mr-button>
        <mr-button plain type="primary">按钮</mr-button>
        <mr-button plain type="success">按钮</mr-button>
        <mr-button plain type="info">按钮</mr-button>
        <mr-button plain type="warning">按钮</mr-button>
        <mr-button plain type="danger">按钮</mr-button>
    </div>
    <div class="row">
        <mr-button round plain>按钮</mr-button>
        <mr-button round plain type="primary">按钮</mr-button>
        <mr-button round plain type="success">按钮</mr-button>
        <mr-button round plain type="info">按钮</mr-button>
        <mr-button round plain type="warning">按钮</mr-button>
        <mr-button round plain type="danger">按钮</mr-button>
    </div>
    <div class="row">
        <mr-button circle icon="delete" plain>拆</mr-button>
        <mr-button circle icon="delete" plain type="primary">拆</mr-button>
        <mr-button circle icon="delete" plain type="success">拆</mr-button>
        <mr-button circle icon="delete" plain type="info">拆</mr-button>
        <mr-button circle icon="delete" plain type="warning">拆</mr-button>
        <mr-button circle icon="delete" plain type="danger">拆</mr-button>
    </div>
</template>

<script>
export default {
  methods: {
    fn () {
      console.log(233)
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
    margin-bottom: 20px;

    .mr-button {
        margin-right: 20px;
    }
}
</style>
