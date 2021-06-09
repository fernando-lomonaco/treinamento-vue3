<template>
  <span
    :class="`bg-${classColor}`"
    class="p-2 text-xs font-black text-white uppercase rounded-full">
    {{ label }}
    </span>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    type: { type: String, required: true }
  },
  setup (props) {
    const label = computed(() => {
      const literalType = {
        ISSUE: 'problema',
        IDEA: 'ideias',
        default: 'outros'
      }

      return literalType[props.type] || literalType.default
    })

    const classColor = computed(() => {
      const literalColor = {
        ISSUE: 'brand-danger',
        IDEA: 'brand-warning',
        default: 'brand-graydark'
      }

      return literalColor[props.type] || literalColor.default
    })

    return {
      label,
      classColor
    }
  }
}
</script>
