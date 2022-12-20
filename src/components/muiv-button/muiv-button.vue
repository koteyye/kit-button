<template>
  <div class="button-btn"/>
  <button :class="['btn', `btn_${color}`, {'btn_rounded':rounded}, {'btn_outlined': outlined}, {'btn_icon': icon}, {'btn_icontext': icontext}, {'btn_large': size === 'large'}]"
  :disabled="disabled"
  @click="onClick">
    <span v-if="icontext">
      <fa :icon="`${icontext}`"></fa>
    </span>
    <span v-if="icon">
      <fa :icon="`${icon}`" />
    </span>
    <span v-else>{{label}}</span>

  </button>
</template>

<script>
import {computed} from "vue";

export default {
  name: "muiv-button",
  components: {},
  props: {
    label: {
      type: String,
      default: 'Button'
    },
    color: {
      type: String,
      default: 'primary'
    },
    rounded: {
      type: Boolean,
      required: false
    },
    disabled: {
      type: Boolean,
      required: false
    },
    outlined: {
      type: Boolean,
      required: false
    },
    icon: {
      type: String,
      required: false
    },
    icontext: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: 'normal'
    }
  },
  setup(props, ctx){

    function onClick() {
      ctx.emit('click')
    }
    const hasIcon = computed(()=> props.icon.trim() !== '')

    return {
      onClick, hasIcon
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/main.scss';

.btn {
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0 20px;
  height: 40px;
  border-radius: 7px;
  border: none;
  cursor: pointer;
  font-size: 15px;
  transition: .2s;
  &_primary {
    background: $--primary;
    border: 1px solid $--primary;
    &:enabled:hover {
      background: $--primary-hover;
    }
  }
  &_second {
    background: $--second;
    border: 1px solid $--second;
    &:enabled:hover {
      background: $--second-hover;
    }
  }
  &_success {
    background: $--success;
    border: 1px solid $--success;
    &:enabled:hover {
      background: $--success-hover;
    }
  }
  &_info {
    background: $--info;
    border: 1px solid $--info;
    &:enabled:hover {
      background: $--info-hover;
    }
  }
  &_warning {
    background: $--warning;
    border: 1px solid $--warning;
    &:enabled:hover {
      background: $--warning-hover;
    }
  }
  &_danger {
    background: $--danger;
    border: 1px solid $--danger;
    &:enabled:hover {
      background: $--danger-hover;
    }
  }
  &_large {
    height: 48px;
    padding: 0 30px;
  }
  &_rounded {
    border-radius: 15px;
  }
  &_disabled {
    opacity: .6;
    cursor: default;
  }
  &_outlined {
    background: transparent;
    color: #000;
    &:hover {
      color: #ffffff;
    }
  }
  &_icon {
    padding: 0;
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }

}
</style>