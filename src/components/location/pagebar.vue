<template>
    <v-toolbar
        dark
        color="blue darken-3"
        >
        <v-toolbar-title style="margin-left:20px; font-size:30px; font-weight: bold;">
            LOCATION
        </v-toolbar-title>

        <v-spacer></v-spacer>
        <v-btn icon ><v-icon>mdi-magnify</v-icon></v-btn>
        <v-btn icon @click="onClickhome"><v-icon>mdi-home</v-icon></v-btn>
    </v-toolbar>
</template>

<script>
export default {
  name: 'pagebar',
  methods: {
    onClickhome () {
      this.$router.push({
        name: 'mystory'
      })
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
