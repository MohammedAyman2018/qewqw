<template>
  <div class="input-with-icon">
    <span
      :style="{
        color: icon?.color,
      }"
    >
      <Icon v-if="icon && icon.name" :name="icon.name" :size="icon.size" />
      <slot name="icon"></slot>
    </span>
    <div :class="{ error: errors.length > 0 }">
      <input
        :type="input.type"
        class="form-control"
        :class="{
          'is-valid': submitted && errors.length == 0,
          'is-invalid': submitted && errors.length !== 0,
        }"
        :value="modelValue"
        @input="($event: any) => $emit('update:modelValue', $event.target.value)"
        :id="input.id"
        :placeholder="input.placeholder"
      />
      <div class="invalid-feedback" v-for="error of errors" :key="error.$uid">
        <div class="error-msg">{{ error.$message }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineEmits(['update:modelValue']);
interface IInput {
  type: string;
  id: string;
  placeholder: string;
}

interface IIcon {
  name: string;
  size: string;
  color: string;
}

interface IProps {
  icon: null | IIcon;
  input: IInput;
  errors: any[];
  submitted: Boolean;
  modelValue: String;
}

const props = defineProps<IProps>();
</script>

<style scoped lang="scss">
@import '~/assets/scss/bootstrap.scss';
.input-with-icon {
  display: flex;
  align-items: center;
  gap: 20px;

  & > div {
    flex-grow: 1;
  }
  input,
  input:focus,
  input:focus-visible,
  input:active {
    border: none;
    box-shadow: none;
    border-bottom: 1px solid $gray;
    outline: none;
  }

  input {
    border-bottom: 1px solid $gray;

    &.is-invalid {
      border-bottom: 1px solid $danger;
    }
    border-radius: 0;
  }
}
</style>
