<template>
  <div class="about">
    {{ userInfo }}
    <h1>This is an about page</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('login', [
      'userInfo'
    ])
  }
}
</script>
