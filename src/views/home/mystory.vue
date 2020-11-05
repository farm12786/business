<template>
  <div>
    <v-toolbar dark color="blue darken-3">
      <v-toolbar-title
        style="margin-left: 20px; font-size: 30px; font-weight: bold"
      >
        My Story
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn icon><v-icon>mdi-magnify</v-icon></v-btn>
      <v-btn icon><v-icon>mdi-home</v-icon></v-btn>
    </v-toolbar>

    <v-bottom-navigation background-color="teal">
      <v-slide-group>
        <v-btn>
          <span>PET</span>
          <a>
            <v-img
              src="../../assets/icon/cat.png"
              max-height="40"
              max-width="40"
            ></v-img>
          </a>
        </v-btn>

        <v-btn>
          <span>Timeline</span>
          <a>
            <v-img
              src="../../assets/icon/timeline.png"
              max-height="40"
              max-width="40"
            ></v-img>
          </a>
        </v-btn>
        <v-btn>
          <span>Community</span>
          <a>
            <v-img
              src="../../assets/icon/blog.png"
              max-height="40"
              max-width="40"
            ></v-img>
          </a>
        </v-btn>
        <v-btn>
          <span>Location</span>
          <a>
            <v-img
              @click="onClicklocation"
              src="../../assets/icon/location.png"
              max-height="40"
              max-width="40"
            ></v-img>
          </a>
        </v-btn>
      </v-slide-group>
    </v-bottom-navigation>

    <v-container grid-list-xs>
      <v-row justify="center" align="center">
        <v-col cols="4">
          <v-avatar color="primary" size="100">
            <v-img src="https://randomuser.me/api/portraits/men/32.jpg">
            </v-img>
          </v-avatar>
        </v-col>

        <v-col cols="7">
          <v-row>
            <v-col> NATAWAT SONGNUAN </v-col>
          </v-row>
          <v-row>
            <v-col cols="3">
              <a>
                {{ numPost }}
              </a>
              <br /><span>Post</span>
            </v-col>
            <v-col cols="5" justify-center>
              <a>
                {{ numFollowing }}
              </a>
              <br /><span>Following</span>
            </v-col>
            <v-col cols="4" justify-center>
              <a>
                {{ numFollower }}
              </a>
              <br /><span>Follower</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>

    <v-row no-gutters>
      <v-col v-for="n in 9" :key="n" cols="4" class="d-flex child-flex">
        <v-card style="border-style: solid; border-color: white;">
          <v-img
            @click="onClickpost($event)"
            src="../../assets/test/dog.jpg"
            aspect-ratio="1"
            class="post white--text align-end"
            gradient="to bottom, rgba(0,0,0,.01), rgba(0,0,0,.7)"
          >
            <div style="font-size: 12px">
              <v-icon
                color="white"
                size="15"
                style="margin-left: 5px; margin-bottom: 5px"
                >mdi-heart</v-icon
              >

              {{ numLike }}
            </div>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'mystory',
  data () {
    return {
      postElement: null,
      numPost: 7,
      numFollowing: 219,
      numFollower: 873,
      numLike: 201
    }
  },
  methods: {
    onClicklocation () {
      this.$router.push({
        name: 'location'
      })
    },
    onClickpost (event) {
      var postId = event.currentTarget.id
      console.log(postId)
      this.$router.push({
        name: 'post',
        query: { id: postId }
      })
    }
  },
  mounted () {
    // console.log(this.$route.query.onechat_token)

    // const result1 = await axios.post(
    //   'https://chat-api.one.th/manage/api/v1/getprofile',
    //   {
    //     headers: {
    //       Authorization:
    //         'Bearer A1f52b98be0f25416a6a9a262d15747cbfa622f189173425aa8b8ba03bf8d67822a6ab46d22c34e21835d0ec2bb50240d'
    //     }
    //   },
    //   {
    //     bot_id: 'B3ab363e4d008522a80e72c94b5ce775b',
    //     source:
    //       this.$route.query.onechat_token
    //   }
    // )

    // console.log(result1)

    this.postElement = document.querySelectorAll('.post')
    for (var i = 0; i < this.postElement.length; i++) {
      this.postElement[i].id = 'post' + i
    }
  }
}
</script>

<style lang="scss">
@import "../../assets/style/style.css";
</style>
