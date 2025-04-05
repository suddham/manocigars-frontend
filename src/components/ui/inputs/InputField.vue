<template>
  <Fieldset class="fieldset">
    <label class="Label" :for="label"> {{ label }} </label>
    <input :id="label" class="input" :placeholder="placeholder" />
  </Fieldset>
</template>

<script>
import { defineProps } from 'vue'

defineProps({
  label: String,
  placeholder: String,
})
</script>

<style lang="scss" scoped>
.fieldset {
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 15px;
}

.Label {
  font-size: 15px;
  color: var(--grass-11);
  width: 90px;
  text-align: right;
}

.input {
  width: 100%;
  flex: 1;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 10px;
  font-size: 15px;
  line-height: 1;
  color: var(--grass-11);
  box-shadow: 0 0 0 1px var(--grass-7);
  height: 35px;
}
.input:focus {
  box-shadow: 0 0 0 2px var(--grass-8);
}
</style>
