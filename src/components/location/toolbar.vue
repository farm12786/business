<template>

      <v-toolbar dark color="#7D7D67" class="mb-1">
        <template>
          <v-col cols="9">
            <v-select
              v-model="butype"
              flat
              solo-inverted
              hide-details
              :items="bu"
              prepend-inner-icon="mdi-magnify"
              label="All"
              text-color="primary"
            >
            </v-select>
          </v-col>
          <v-spacer></v-spacer>

          <v-btn icon color="#8EF948" @click="onClickcontent"
            ><v-icon>mdi-view-grid-outline</v-icon></v-btn
          >
          <v-btn icon color="#8EF948" @click="onClickmap(butype)"
            ><v-icon>mdi-map-marker-radius</v-icon></v-btn
          >
        </template>
      </v-toolbar>

</template>

<script>
export default {
  name: 'toolbar',
  data () {
    return {
      butype: this.$store.state.butype,
      bu: ['All', 'hospital', 'hotel', 'cafe', 'farm', 'salon', 'shop']
    }
  },
  watch: {
    butype (val) {
      this.$store.commit('getButype', val)
    }
  },
  methods: {
    onClickmap () {
      this.$router.push({
        name: 'map'
      })
    },
    onClickcontent () {
      this.$router.push({
        name: 'location'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
