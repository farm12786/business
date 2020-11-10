<template>
  <div>
    <pagebar></pagebar>
    <toolbar @val="getbutype2"></toolbar>
    <v-container grid-list-xs>
      <GmapMap
        id="map"
        :center="currentPositions"
        :zoom="15"
        map-type-id="terrain"
        min-width="100"
        min-height="100"
        style="min-width: 300px; min-height: 400px"
      >
        <GmapCustomMarker
          v-for="(m, index) in markers"
          :key="index"
          :marker="m.position"
        >
          <v-img @click="onClick(m.id)" src="../../assets/icon/marker.png" height="50" width="50" >
            <v-avatar size="33" color="primary" rounded="circle" style="margin-left:16%; margin-top:7%">
              <v-img :src="
                        'https://s3gw.inet.co.th:8082/static/media/' +
                        m.image
                      "> </v-img>
            </v-avatar>
          </v-img>
        </GmapCustomMarker>

        <!-- <GmapMarker
                v-for="(m, index) in markers"
                :key="index"
                :position="m.position"
                :clickable="true"
                @click="onClick(m.id)"
            /> -->
      </GmapMap>

      <div style="visibility: hidden">
        {{ this.$store.state.butype }}
      </div>
    </v-container>
    <pagefoot />
  </div>
</template>

<script>
import GmapCustomMarker from 'vue2-gmap-custom-marker'
import axios from 'axios'
import toolbar from '@/components/location/toolbar'
import pagebar from '@/components/location/pagebar'
import pagefoot from '@/components/location/footer'

export default {
  name: 'bumap',
  components: {
    toolbar,
    pagebar,
    pagefoot,
    GmapCustomMarker
  },
  data () {
    return {
      butype: 'All',
      currentPositions: { lat: null, lng: null },
      markPoint: { lat: null, lng: null },
      markers: []
    }
  },
  methods: {
    async getMarker (butype) {
      if (butype === 'All') {
        this.$store.state.allBu.forEach((marker) => {
          this.markers.push({
            position: {
              lat: marker.latitude,
              lng: marker.longitude
            },
            id: marker.id,
            image: marker.image
          })
        })
      } else {
        const result = await axios.post(
          'https://testchat.one.th/petdy/get_business_by_type',
          { bu_type: butype }
        )

        result.data.list_business.forEach((marker) => {
          this.markers.push({
            position: {
              lat: marker.latitude,
              lng: marker.longitude
            },
            id: marker.id,
            image: marker.image
          })
        })
      }
    },
    getcurrentPosition () {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          this.currentPositions.lat = position.coords.latitude
          this.currentPositions.lng = position.coords.longitude
          console.log(this.currentPositions)
        },
        (error) => {
          console.log(error.message)
        }
      )
    },
    onClick (buid) {
      this.$router.push({
        name: 'profile',
        query: { id: buid }
      })
      this.$ls.set('buId', JSON.stringify(buid))
    },
    getbutype2 () {
      this.butype = this.$store.state.butype
    },
    clearMarker () {
      this.markers = []
    }
  },
  mounted () {
    this.getcurrentPosition()
    this.clearMarker()

    this.getMarker(this.$store.state.butype)
  },
  updated () {
    this.butype = this.$store.state.butype
  },
  watch: {
    butype (newVal) {
      console.log(newVal)
      this.clearMarker()
      this.getMarker(newVal)
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/style/style.css";
</style>
