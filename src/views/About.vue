<template>
  <div class="about">
    <h1>{{result}}</h1>
    <div class="button" @click="add">add</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: 123
    };
  },
  created() {
    //console.log(this);
  },
  mounted() {
    //console.log(this);
    this.printThis();
  },
  computed: {
    result() {
      return this.data * this.data;
    }
  },
  methods: {
    printThis() {
      console.log(this);
    },
    add() {
      this.data++;
    },
  }
}
</script>
<style lang="scss" scoped>
.button {
  width: 40px;
  height: 20px;
  background-color: aquamarine;
}
</style>

