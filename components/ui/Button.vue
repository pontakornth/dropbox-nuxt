<template>
  <button :class="styleClasses"><slot></slot></button>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'nuxt-property-decorator'
import { Color, Variant } from '~/@types/ButtonProp'
@Component
class Button extends Vue {
  @Prop({ type: String, default: 'blue' }) color!: Color
  @Prop({ type: String, default: 'normal', required: false }) variant!: Variant
  get styleClasses(): any {
    const style: any = {}
    style.button = true
    style[`button--${this.color}`] = this.variant === 'normal'
    style[`button--outline--${this.color}`] = this.variant === 'outline'
    return style
  }
}
export default Button
</script>

<style lang="postcss" scoped>
.button {
  @apply w-auto text-center text-white font-display mx-auto font-semibold p-2 rounded;
  cursor: pointer;
  &--outline {
    &--blue {
      @apply text-blue-500 bg-white border border-blue-500;
    }
    &--red {
      @apply text-red-500 bg-white border-red-500;
    }
    &--green {
      @apply text-green-500 bg-white border-green-500;
    }
    &--yellow {
      @apply text-yellow-500 bg-white border-yellow-500;
    }
    &--indigo {
      @apply text-indigo-500 bg-white border-indigo-500;
    }
  }
  &--blue {
    @apply bg-blue-500;
  }
  &--red {
    @apply bg-red-500;
  }
  &--green {
    @apply bg-green-500;
  }
  &--yellow {
    @apply bg-yellow-500;
  }
  &--indigo {
    @apply bg-indigo-500;
  }
}
</style>
