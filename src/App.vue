<template>
  <div id="app">
    {{ say }} 世界
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function () {
    return {
      say: 'Hello'
    }
  }
}
</script>
