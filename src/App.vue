<template>
  <v-app>
    <v-app-bar app height="65px" style="background: #002e56" id='top-header'>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <img height="55px" src="./assets/Navy311_logo_transparent.png" v-on:click="navigate('/home')" alt="NAVY 311">
        <div class="flex-grow-1"></div>
        <div class="flex-grow-1"></div>
        <a v-on:click="navigate('/home')" class="nav-link">Home</a>
        <span class="nav-separator">|</span>
        <a v-on:click="navigate('/service')" class="nav-link">Services</a>
        <span class="nav-separator">|</span>
        <a v-on:click="navigate('/niaps')" class="nav-link">NIAPS</a>
        <span class="nav-separator">|</span>
        <a v-on:click="navigate('/resources')" class="nav-link">Resources</a>
        <span class="nav-separator">|</span>
        <a v-on:click="navigate('/faqs')" class="nav-link"> FAQs</a>
      </template>
      <template v-else>
        <div class="flex-grow-2"></div>
        <v-btn icon>
          <v-icon color="grey" size="55" title="Home" @click.stop="drawer = !drawer">mdi-reorder-horizontal</v-icon>
        </v-btn>
        <h1 class="mobile_web_toolbar">NAVY 311</h1>
        <div class="flex-grow-1"></div>
        <div class="flex-grow-2"></div>
        <v-navigation-drawer v-model="drawer" absolute temporary width="200px" height="402px">
          <div class="header">Menu</div>
          <v-list-item-group v-model="item" color="grey" aria-label="Page Navigation" role="listbox">
            <v-divider></v-divider>
            <router-link class="nav-link" tag="none" to="/">
              <v-list-item role="option" tabindex="0">
                <v-icon class="menuIcon" color="black" size="30" title="Home" large>mdi-home</v-icon>
                <p class="buttontext">Home</p>
              </v-list-item>
            </router-link>
            <v-divider></v-divider>
            <router-link class="nav-link" tag="none" to="/service">
              <v-list-item role="option" tabindex="0">
                <v-icon class="menuIcon" color="black" size="30" title="Home" large>mdi-wallet-travel</v-icon>
                <p class="buttontext">Services</p>
              </v-list-item>
            </router-link>
            <v-divider></v-divider>
            <router-link class="nav-link" tag="none" to="/niaps">
              <v-list-item role="option" tabindex="0">
                <v-icon class="menuIcon" color="black" size="30" title="Home" large>mdi-lan-connect</v-icon>
                <p class="buttontext">NIAPS</p>
              </v-list-item>
            </router-link>
            <v-divider></v-divider>
            <router-link class="nav-link" tag="none" to="/resources">
              <v-list-item role="option" tabindex="0">
                <v-icon class="menuIcon" color="black" size="30" title="Home" large>mdi-clipboard-text</v-icon>
                <p class="buttontext">Resources</p>
              </v-list-item>
            </router-link>
            <v-divider></v-divider>
            <router-link class="nav-link" tag="none" to="/faqs">
              <v-list-item role="option" tabindex="0">
                <v-icon class="menuIcon" color="black" size="30" title="Home" large>mdi-help-circle-outline</v-icon>
                <p class="buttontext">FAQs</p>
              </v-list-item>
            </router-link>
          </v-list-item-group>
        </v-navigation-drawer>
      </template>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>

    <footer>
      <div class="footer-container">
        <div class="footer-table">
          <table border="0" width="100%" class="bottom" id="table6" cellspacing="10" cellpadding="0" bordercolorlight="#808080" bordercolor="#E6E6E6" bgcolor="#383645">
            <div class="tblrow">
              <tr>
                <td width="500" height="145" valign="top">
                  <div class="footer-header">Quick Links</div>
                  <div class="footer-links">
                    <div class="" v-for="(item, idx) in footer_links" :key="idx">
                      <div v-if="0 != item.num % 4">
                        <a class="footerlink" target="_blank" :href="item.link">{{ item.title }}</a>
                        <br>
                      </div>
                      <div v-else>
                        <a class="footerlink" target="_blank" :href="item.link">{{ item.title }}</a>
                        <br>
                        <br>
                      </div>
                    </div>
                    <div class="footerlink">Phone: 1-855-628-9311</div>
                    <div class="footerlink">DSN: 510-628-9311</div>
                  </div>
                </td>
                <td height="140" width="1000" valign="top">
                  <p class="footer-message" face="Verdana" size="1" color="#CCCCCC">
                    This US Government system is subject to monitoring. Please review the
                    <a class="footerlink" target="_blank" href="https://www.navy.com/privacy-policy"><b>Privacy Policy</b></a>
                    <br>
                    <br>
                    The appearance of external hyperlinks does not constitute endorsement by the United States Department of Defense, the United States Department of the Navy and the Space and Naval Warfare Systems Command (SPAWAR) of the linked web sites, or the information, products or services contained therein. For other than authorized activities such as military exchanges and Morale, Welfare and Recreation (MWR) sites, the United States Department of Defense, the Department of the Navy and the Space and Naval Warfare Systems Command does not exercise any editorial control over the information you may find at these locations. Such links are provided consistent with the stated purpose of this DoD web site.
                    <br>
                    <br>
                    In order to provide our customers with the best information more effectively, the SPAWAR Enterprise Public Website has undergone several recent revisions. We welcome your comments regarding revisions or other issues.&nbsp; Please send us your <a class="footerlink" href="/redirectChat"><b>feedback</b></a>.
                  </p>
                  <a class="footerlink" target="_blank" href="http://www.navy.mil">This is an official United States Navy Website.</a>
                </td>
              </tr>
            </div>
          </table>
        </div>
      </div>
    </footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods: {
    navigate: function (link) {
      this.$router.push(link);
    },
  },
  data: function () {
    return {
      color: 'red',
      drawer: null,
      about: false,
      home: true,
      footer_links: [
        { num: 1, title: "No Fear Act", link: "http://www.secnav.navy.mil/donhr/Site/Pages/No-Fear-Act.aspx" },
        { num: 2, title: "FOIA", link: "https://www.secnav.navy.mil/foia/Pages/default.aspx" },
        { num: 3, title: "Security & Privacy", link: "https://www.navwar.navy.mil/privacy-policy-2" },
        { num: 4, title: "Accessibility/Section 508", link: "https://www.section508.gov/" },
        { num: 5, title: "Fraud, Waste & Abuse", link: "https://www.navwar.navy.mil/navwar-office-of-inspector-general" },
        { num: 6, title: "Suicide Prevention", link: "https://www.veteranscrisisline.net/" },
        { num: 7, title: "Navy Jobs", link: "https://www.navy.com" },
        { num: 8, title: "USA.gov", link: "https://www.usa.gov" },
        { num: 9, title: "Contact Webmaster", link: "mailto:Navy311@navy.mil?subject=NAVY 311 Website Inquiry or Trouble Report" }
      ]
    }  //
  }
};
</script>
<style lang="scss">
.mobile_web_toolbar {
  margin-left: 20px;
  font-size: 40px;
  color: white;
  font-weight: 400;
}

.tblrow {
  max-width: 1020px;
  margin: 0 auto;
}

.footer-table {
  font-size: 16px;
  color: #c6ccd0;

}

.menuIcon {
  margin-right: 15px;
}

.header {
  text-align: center;
  font-size: 35px;
  margin-bottom: 0px;
}

.navbuttons {
  width: 100%;
}

.buttontext {
  font-size: 25px;
  margin-top: 15px;
}

.image {
  margin: 15px;
}

.search-button {
  margin-left: 13px;
}

.searchbar {
  margin-top: 30px;
}

div.v-toolbar__content {
  display: flex;
  max-width: 1020px;
  align-content: center;
  margin: 0 auto;
}

/* added by jwheat*/

a.nav-link:link {
  font-size: 20px;
  text-decoration: none;
}

#top-header a {
  color: #fff;
}

#top-header a:hover {
  color: #e8b00f;
}

a.nav-link:hover {
  color: yellow;
  text-decoration: none;
}

.footer-header {
  color: #cccccc;
  font-size: 20px;
  border-bottom: solid 1px white;
  width: 60%;
}

.footer-links a {
  font-weight: bold;
  font-size: 14px;
  font-family: Helvetica, sans-serif;
  color: #ffffff !important;
  text-transform: uppercase;
  text-decoration: none;

}

.footerlink {
  color: #ffffff !important;
}

.footer-table a {
  text-decoration: none;
}

.nav-separator {
  color: #cccccc;
  margin-left: 15px;
  margin-right: 15px;
  font-size: 24px;
}

.text-white {
  color: #ffffff;
}
</style>
