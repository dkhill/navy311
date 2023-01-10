<template>
  <div class="center_container">
    <v-container fluid>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-card>
            <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title><h4 class="toolTitle">Flank Speed Environment</h4></v-toolbar-title>
            </v-toolbar>
            <div class="page_container">
            <v-row>
                <v-col cols="2">
                    <v-img src="../assets/fahtom_full.jpg"></v-img>
                </v-col>
                <v-col cols="10">
                    <p class="card-paragraph">Flank Speed (FS) is the permanent replacement to CVR Teams and the Navy’s previous deployment of NEO365. Flank Speed provides a more secure operating environment and provides OneDrive storage, Microsoft Teams for collaboration, and Microsoft Office 365 productivity tools.</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-toolbar flat color="#072F5F" dark>
                            <v-toolbar-title><h4 class="toolTitle">Flank Speed Support</h4></v-toolbar-title>
                        </v-toolbar>
                        <div class="card-margin">
                            <p class="card-paragraph" style="text-align: center;">For Flank Speed (FS) support, contact your network service desk such as NMCI, One-NET, RDT&E, etc.</p>
                            <div style="text-align: center;">If you need to check the status of your request please use one of the following links.</div>
                            <div style="font-weight: 600; text-align: center;">NOTE: The NMCI Status Checking Tool can only be accessed from an NMCI Computer.</div>
                            <v-row>
                                <v-col cols="6">
                                    <div class="btn_holder">
                                        <v-btn id="service_link_check_status_nmci" @click="visit('https://servman/sm/ess.do'), dialog_support_request = false">
                                            <div>
                                                <div id="service_link_check_status_nmci" class="v-btn_modal">NMCI Check Status</div>
                                            </div>
                                        </v-btn>
                                    </div>
                                </v-col>
                                <v-col cols="6">
                                    <div class="btn_holder">
                                        <v-btn id="service_link_check_status" @click="visit('https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=NAVY311_Catalog&look=table&view=submissions&type=requests#My%20Open%20Requests'), dialog_support_request = false">
                                            <div>
                                                <div id="service_link_check_status" class="v-btn_modal">Navy 311 Check Status</div>
                                                <div id="service_link_check_status" class="v-btn_modal_sub">(CAC Required)</div>
                                            </div>
                                        </v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card class="cvr-support-card">
                        <v-toolbar flat color="#072F5F" dark>
                            <v-toolbar-title><h4 class="toolTitle">Flank Speed Login Guide</h4></v-toolbar-title>
                        </v-toolbar>
                        <div class="page_container">
                            <p class="card-paragraph">NOTE:  Access to Flank Speed is dependent on a properly realigned PIV Authentication certificate.  As of 24 February 2018, all Navy-issued CACs have an active PIV Authentication certificate.  All users with CACs issued before 24 February 2018 must activate their PIV Authentication certificate.  If you have questions or need instructions how to verify or activate your PIV, please go to:</p>
                            <div class="btn_holder"><a href="https://www.homeport.navy.mil/support/articles/activate-piv_auth-cert" target="_blank">https://www.homeport.navy.mil/support/articles/activate-piv_auth-cert</a></div>
                            <ol>
                                <li>From a Department of Defense Information Network (DoDIN) Connected Device (NMCI/RDTE network) - Open MS Edge, Start a new ‘inPrivate’ Window (this is due to having CVR/NEO365 at the same time… not a long term thing).</li>
                                <li>Type https://portal.apps.mil into the Browser Window. Before you hit enter please confirm you are in an “inPrivate” Window.</li>
                                <li>When prompted type your User Persona Name (this is the same as your CVR prefix or UPN in MilConnect), adding on ‘@us.navy.mil’. Click “NEXT”. EXAMPLE: Buzz.A.Lightyear1.mil@us.navy.mil</li>
                                <li>A screen asking for your password will appear. Below the password box select “Sign in with CAC/PIV” option.</li>
                                <li>You will be prompted for your certificate. Select your Authentication Cert (PIV). It may not be the first one shown.</li>
                                <li>Type your PIN. Select “YES”.</li>
                                <li>Stay signed in? Select “YES”.</li>
                            </ol>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-toolbar flat color="#072F5F" dark>
                            <v-toolbar-title><h4 class="toolTitle">Flank Speed FAQ's</h4></v-toolbar-title>
                        </v-toolbar>
                        <div class="card-margin">
                            <p>Flank Speed Frequently Asked Questions (FAQ) – these are posted on the SECNAV SharePoint Flank Speed Portal with additional information related to Flank Speed:</p>
                            <div class="btn_holder"><a href="https://portal.secnav.navy.mil/orgs/OPNAV/N2N6/DDCION/FlankSpeed/SitePages/Home.aspx">https://portal.secnav.navy.mil/orgs/OPNAV/N2N6/DDCION/FlankSpeed/SitePages/Home.aspx</a></div>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            </div>
        </v-card>
      </template>
      <!--  Mobile View  -->
      <template v-else>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-toolbar flat color="#072F5F" dark>
                            <v-toolbar-title><h4 class="toolTitle">Flank Speed Environment</h4></v-toolbar-title>
                        </v-toolbar>
                        <div class="card-margin">
                            <p class="card-paragraph">Flank Speed (FS) is the permanent replacement to CVR Teams and the Navy’s previous deployment of NEO365. Flank Speed provides a more secure operating environment and provides OneDrive storage, Microsoft Teams for collaboration, and Microsoft Office 365 productivity tools.</p>
                        </div>
                    </v-card> 
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-toolbar flat color="#072F5F" dark>
                            <v-toolbar-title><h4 class="toolTitle">Flank Speed Support</h4></v-toolbar-title>
                        </v-toolbar>
                        <div class="card-margin">
                            <p class="card-paragraph" style="text-align: center;">For Flank Speed (FS) support, contact your network service desk such as NMCI, One-NET, RDT&E, etc.</p>
                            <div style="text-align: center;">If you need to check the status of your request please use one of the following links.</div>
                            <div style="font-weight: 600; text-align: center;">NOTE: The NMCI Status Checking Tool can only be accessed from an NMCI Computer.</div>
                            <v-row>
                                <v-col cols="6">
                                    <div class="btn_holder">
                                        <v-btn id="service_link_check_status_nmci" @click="visit('https://servman/sm/ess.do'), dialog_support_request = false">
                                            <div>
                                                <div id="service_link_check_status_nmci" class="v-btn_modal">NMCI Check Status</div>
                                            </div>
                                        </v-btn>
                                    </div>
                                </v-col>
                                <v-col cols="6">
                                    <div class="btn_holder">
                                        <v-btn id="service_link_check_status" @click="visit('https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=NAVY311_Catalog&look=table&view=submissions&type=requests#My%20Open%20Requests'), dialog_support_request = false">
                                            <div>
                                                <div id="service_link_check_status" class="v-btn_modal">Navy 311 Check Status</div>
                                                <div id="service_link_check_status" class="v-btn_modal_sub">(CAC Required)</div>
                                            </div>
                                        </v-btn>
                                    </div>
                                </v-col>
                            </v-row>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card class="cvr-support-card">
                        <v-toolbar flat color="#072F5F" dark>
                            <v-toolbar-title><h4 class="toolTitle">Login Guide</h4></v-toolbar-title>
                        </v-toolbar>
                        <div class="page_container">
                            <p class="card-paragraph">NOTE:  Access to Flank Speed is dependent on a properly realigned PIV Authentication certificate.  As of 24 February 2018, all Navy-issued CACs have an active PIV Authentication certificate.  All users with CACs issued before 24 February 2018 must activate their PIV Authentication certificate.  If you have questions or need instructions how to verify or activate your PIV, please go to:</p>
                            <div class="btn_holder"><a href="https://www.homeport.navy.mil/support/articles/activate-piv_auth-cert" target="_blank">https://www.homeport.navy.mil/support/articles/activate-piv_auth-cert</a></div>
                            <ol>
                                <li>From a Department of Defense Information Network (DoDIN) Connected Device (NMCI/RDTE network) - Open MS Edge, Start a new ‘inPrivate’ Window (this is due to having CVR/NEO365 at the same time… not a long term thing).</li>
                                <li>Type https://portal.apps.mil into the Browser Window. Before you hit enter please confirm you are in an “inPrivate” Window.</li>
                                <li>When prompted type your User Persona Name (this is the same as your CVR prefix or UPN in MilConnect), adding on ‘@us.navy.mil’. Click “NEXT”. EXAMPLE: Buzz.A.Lightyear1.mil@us.navy.mil</li>
                                <li>A screen asking for your password will appear. Below the password box select “Sign in with CAC/PIV” option.</li>
                                <li>You will be prompted for your certificate. Select your Authentication Cert (PIV). It may not be the first one shown.</li>
                                <li>Type your PIN. Select “YES”.</li>
                                <li>Stay signed in? Select “YES”.</li>
                            </ol>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <v-card>
                        <v-toolbar flat color="#072F5F" dark>
                            <v-toolbar-title><h4 class="toolTitle">Flank Speed FAQ's</h4></v-toolbar-title>
                        </v-toolbar>
                        <div class="card-margin">
                            <p>Flank Speed Frequently Asked Questions (FAQ) – these are posted on the SECNAV SharePoint Flank Speed Portal with additional information related to Flank Speed:</p>
                            <a href="https://portal.secnav.navy.mil/orgs/OPNAV/N2N6/DDCION/FlankSpeed/SitePages/Home.aspx">https://portal.secnav.navy.mil/orgs/OPNAV/N2N6/DDCION/FlankSpeed/SitePages/Home.aspx</a>
                        </div>
                    </v-card>
                </v-col>
            </v-row>
      </template>
    </v-container>
    <v-dialog v-model="dialog_mobile_warning" max-width="400">
      <v-card>
        <v-card-title class="headline">WARNING PKI Protected</v-card-title>
        <v-card-text>The resource you are attempting to access requires a CAC card to access. Unless your phone supports this functionality you will not be able to access it.</v-card-text>
        <div class="dialogbuttons">
          <v-btn v-on:click="dialog_mobile_warning = false"><span id="service_link_spd_cac" class="v-btn__content">Go Back</span></v-btn>
          <v-btn v-on:click="visitCacMobile(), dialog_mobile_warning = false"><span class="v-btn__content">Proceed</span></v-btn>
        </div>
      </v-card>
    </v-dialog>
    <h1 class="wdn-text-hidden">CVR (Microsoft Teams) Support Page</h1>
  </div>
</template>

<script>
export default {
    name: 'FlankSpeedPage',
    beforeDestroy () {
        if (typeof window === 'undefined') return
        window.removeEventListener('resize', this.onResize, { passive: true })
    },
    mounted () {
        this.onResize()
        window.addEventListener('resize', this.onResize, { passive: true })
    },
    methods: {
       visit: function (link) {
         if (this.cac_enabled.includes(link) && this.isMobile === true) {
            this.dialog_mobile_warning = true;
            this.mobileLink = link;
         } else {
            window.open(link);
         }
        },
      visitCacMobile: function () {
        window.open(this.mobileLink);
      },
      onResize () {
        this.isMobile = window.innerWidth < 600
      },
    },
    data: function () {
      return {
        dialog_mobile_warning: false,
        mobileLink: 'None',
        isMobile: false,
        cac_enabled: [
            'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=FS_Request',
            'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=CVR_Request',
            'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=EmailRequest',
            'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=NAVY311_Catalog&look=table&view=submissions&type=requests#My%20Open%20Requests',
            'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=SPD_Search',
            'https://ds-itsmweb.dc3n.navy.mil/arsys/forms/ds-itsmapp/A_SDE+ECRM+Directory+Management+Console/',
            'https://ds-customer.dc3n.navy.mil/navy311/Navy311_Desktop_Icon_Installer.msi',
            'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=FleetCOSAL_Request',
            'https://ds-report.dc3n.navy.mil/BOE/BI/',
            'https://ds-report.dc3n.navy.mil/navy311/docs/NAVY_311_System_Access_Request_External.pdf',
            'https://ds-customer.dc3n.navy.mil/navy311/',
            'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=Customer_Chat',
            'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=AIR_Request',
            'https://ds-report.dc3n.navy.mil/navy311/spd-manager.htm',
            'https://ds-report.dc3n.navy.mil/navy311/collaboration.htm',
            'https://neitsm.dc3n.navy.mil/arsys',
            'https://nsdsa.dc3n.navy.mil/csoss',
            'https://nsdsa.dc3n.navy.mil',
            'https://nossa.dc3n.navy.mil'
        ],
      }
    }
}
</script>
<style lang="scss">
ol {
    margin-top: 15px;
    margin-right: 15px;
    margin-left: 15px;
}
.card-margin{
    padding-right: 10px;
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
}
.page_container{
    padding-left: 15px;
    padding-right: 15px;
}
.mobile_intro{
    padding: 5px;
}
.center_container{
    max-width: 1000px;
    margin: 0 auto;
}
.wdn-text-hidden{
  visibility: hidden;
}
.btn_holder{
    display: flex;
    justify-content: center;
    width: 100%;
  }
.card-paragraph{
    margin-top: 10px;
}
</style>