<template>
  <div>
    <profilepagebar> </profilepagebar>
    <v-container grid-list-xs>
      <v-row>
        <v-col align="center" justify="center">
          <v-card max-width="350">
            <v-img
              :src="'https://s3gw.inet.co.th:8082/static/media/' + buImage"
            >
            </v-img>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col align="center">
          <v-card max-width="300">
            <v-card-title>
              <div class="my-4 subtitle-1">
                {{ buName }}
              </div>
            </v-card-title>
            <v-divider class="mx-4"></v-divider>
            <v-card-subtitle>
              <div class="my-4 subtitle-1">
                ที่อยู่ : {{ buLocation }} <br />โทรศัพท์ : {{ buPhone }}
                <br />E-mail : {{ buEmail }}
              </div>
            </v-card-subtitle>
          </v-card>

          <v-btn style="margin-top: 10px" color="success">
            <v-icon>mdi-map-search</v-icon>
            <v-spacer></v-spacer>
            VIEW ON MAP
          </v-btn>

        </v-col>
      </v-row>
    </v-container>
    {{buId}}
  </div>
</template>

<script>
import axios from 'axios'
import profilepagebar from '@/components/location/profilepagebar'
export default {
  name: 'profile',
  components: {
    profilepagebar
  },
  data () {
    return {
      buData: [],
      buId: null,
      buName: '',
      buImage: null,
      buLocation: null,
      buPhone: null,
      buEmail: null
    }
  },
  async mounted () {
    // this.$ls.set('buId', JSON.stringify(this.$route.query.id))
    // this.buId = this.$ls.get('buId')
    const result1 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'hospital' }
    )
    const result2 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'cafe' }
    )
    const result3 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'hotel' }
    )
    const result4 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'shop' }
    )
    const result5 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'salon' }
    )
    const result6 = await axios.post(
      'https://testchat.one.th/petdy/get_business_by_type',
      { bu_type: 'farm' }
    )

    result1.data.list_business.forEach((hospital) => {
      this.buData.push(hospital)
    })
    result2.data.list_business.forEach((cafe) => {
      this.buData.push(cafe)
    })
    result3.data.list_business.forEach((hotel) => {
      this.buData.push(hotel)
    })
    result4.data.list_business.forEach((shop) => {
      this.buData.push(shop)
    })
    result5.data.list_business.forEach((salon) => {
      this.buData.push(salon)
    })
    result6.data.list_business.forEach((farm) => {
      this.buData.push(farm)
    })

    this.buData.forEach(bu => {
      if (JSON.stringify(bu.id) === this.$ls.get('buId')) {
        this.buName = bu.first_name_th
        this.buImage = bu.image
        this.buLocation = bu.address
        this.buPhone = bu.telephone_no
        this.buEmail = bu.email
      }
    })
  }
}
</script>

<style lang="scss">
@import "../../assets/style/style.css";
</style>
