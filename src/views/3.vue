<template>
    <div>
        <v-card @click="onClick"> 6335435435 </v-card>
    </div>
</template>

<script>
export default {
  name: 'three',
  methods: {
    onClick () {
      this.$router.push({ name: 'location' })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
