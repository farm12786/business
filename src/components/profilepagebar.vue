<template>
    <v-toolbar
        dark
        color="blue darken-3"
        >
        <v-btn icon @click="onClickback"><v-icon>mdi-arrow-left</v-icon></v-btn>
        <v-toolbar-title style="font-size:20px; font-weight: bold;">
            {{buName}}
        </v-toolbar-title>

    </v-toolbar>
</template>

<script>
export default {
  name: 'profilepagebar',
  data () {
    return {
      buId: null,
      buName: ''
    }
  },
  mounted () {
    this.buId = this.$route.query.id
    this.$store.state.allBu.forEach(bu => {
      if (bu.id === this.buId) {
        this.buName = bu.first_name_th
      }
    })
  },
  methods: {
    onClickback () {
      window.history.back()
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
