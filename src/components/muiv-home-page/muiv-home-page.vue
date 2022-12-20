<template>
  <div class="main-wrapper">
    <h2 class="header"> Color</h2>
      <div class="btn">
        <MuivButton label="primary"/>
        <MuivButton label="second" color="second"/>
        <MuivButton label="success" color="success"/>
      </div>
    <h2 class="header"> Rounded</h2>
    <div class="btn">
      <MuivButton label="primary" :rounded="true"/>
      <MuivButton label="second" color="second" :rounded="true"/>
      <MuivButton label="success" color="success" :rounded="true"/>
    </div>
    <h2 class="header">Disabled</h2>
    <div class="btn">
      <MuivButton label="primary" :disabled="true"/>
      <MuivButton label="second" color="second" :disabled="true"/>
      <MuivButton label="success" color="success" :disabled="true"/>
    </div>
    <h2 class="header">Outline</h2>
    <div class="btn">
      <MuivButton label="primary" :outlined="true"/>
      <MuivButton label="second" color="second" :outlined="true"/>
      <MuivButton label="success" color="success" :outlined="true"/>
    </div>
    <h2 class="header">Icon</h2>
    <div class="btn">
      <MuivButton label="primary" icon="coffee"/>
      <MuivButton label="second" color="second" icon="cart-shopping"/>
      <MuivButton label="success" color="success" icon="heart"/>
    </div>
    <h2 class="header">Icon text</h2>
    <div class="btn">
      <MuivButton label="Coffee" icontext="coffee"/>
      <MuivButton label="Cart" color="second" icontext="cart-shopping"/>
      <MuivButton label="Coffe" color="success" icontext="heart"/>
    </div>
    <h2 class="header">size</h2>
    <div class="btn">
      <MuivButton label="Coffee" icontext="coffee" size="large"/>
      <MuivButton label="Cart" color="second" icontext="cart-shopping"/>
      <MuivButton label="Coffe" color="success" icontext="heart"/>
    </div>
  </div>

</template>

<script>
import MuivButton from "@/components/muiv-button/muiv-button.vue";

export default {
  name: 'MainWrapper',
  components: {MuivButton}
}

</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.header {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btn {
  padding-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
