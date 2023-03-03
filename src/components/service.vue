<template>
  <div class="center_container">
    <v-container fluid>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-card>
          <v-toolbar flat color="#072F5F" dark>
            <v-toolbar-title>
              <h4 class="toolTitle">NAVY 311 Services</h4>
            </v-toolbar-title>
          </v-toolbar>

          <v-tabs color="#072F5F" v-model="tab" background-color="transparent" grow show-arrows>
            <v-tab href="#supportCommunityServices">
              Support Community Services
            </v-tab>
            <v-tab href="#supportRequestManagementServices">
              Support Request Management Services
            </v-tab>
            <v-tab href="#businessIntelligenceAndMetricsServices">
              Business Intelligence and Metrics Services
            </v-tab>
          </v-tabs>

          <v-tabs-items :value="tab">
            <!--Support Community Services Tab Content -->
            <v-tab-item value="supportCommunityServices">
              <v-row>
                <v-col cols="12">
                  <v-card class="serviceCards">
                    <v-toolbar flat color="#072F5F" dark>
                      <v-toolbar-title>
                        <h4 class="toolTitle">Tiered-Level Help Desk Support</h4>
                      </v-toolbar-title>
                    </v-toolbar>
                    <div class="serviceCardContent">
                      <p></p>
                      <p class="wordBody">
                        {{ this.tiered_level_help_desk_support }}
                      </p>
                      <div class="btn_holder"><v-btn @click="visit(tierd_level_help_request_service)">Request a Service</v-btn></div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6">
                  <v-card class="serviceCards">
                    <v-toolbar flat color="#072F5F" dark>
                      <v-toolbar-title>
                        <h4 class="toolTitle">Support Provider Directory Services</h4>
                      </v-toolbar-title>
                    </v-toolbar>
                    <div class="serviceCardContent">
                      <p></p>
                      <p class="wordBody">
                        {{ this.support_provider_directory_services }}
                      </p>
                    </div>
                  </v-card>
                  <v-card class="serviceCards">
                    <v-toolbar flat color="#072F5F" dark>
                      <v-toolbar-title>
                        <h4 class="toolTitle">Integration Support Services</h4>
                      </v-toolbar-title>
                    </v-toolbar>
                    <div class="serviceCardContent">
                      <p></p>
                      <p class="wordBody">
                        {{ this.integration_support_services }}
                      </p>
                    </div>
                  </v-card>
                </v-col>
                <v-col cols="6">
                  <v-card class="serviceCards">
                    <v-toolbar flat color="#072F5F" dark>
                      <v-toolbar-title>
                        <h4 class="toolTitle">Additional SPD Items Of Interest</h4>
                      </v-toolbar-title>
                    </v-toolbar>
                    <div class="additionalSPD">
                      <div v-for="(item, idx) in additional_spd_items" :key="idx">
                        <p></p>
                        <p class="boldBlue">{{ item.title }}</p>
                        <p class="wordBody">{{ item.text }}</p>
                        <div class="btn_holder"><v-btn @click="visit(item.link)">{{ item.btn_title }}</v-btn></div>
                      </div>
                    </div>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
            <!-- Support Request Management Services Tab Desktop-->
            <v-tab-item value="supportRequestManagementServices">
              <v-row>
                <v-col cols="12">
                  <p></p>
                  <p class="wordBody">
                    {{ this.support_request_management_services_intro }}
                  </p>
                  <div class="btn_holder"><v-btn @click="visit(support_request_management_service_link)">Request a Service</v-btn></div>
                </v-col>
              </v-row>
              <v-row>
                <v-col v-for="(item, idx) in support_request_management_services_list" :key="idx" cols="4">
                  <v-card class="serviceCards">
                    <v-toolbar flat height="100px" color="#072F5F" dark>
                      <p class="pHead">{{ item.header }}</p>
                    </v-toolbar>
                    <p></p>
                    <p class="wordBody">{{ item.text }}</p>
                  </v-card>
                </v-col>
              </v-row>
            </v-tab-item>
            <!-- Business Intelligence and Metrics Services tabs -->
            <v-tab-item value="businessIntelligenceAndMetricsServices">
              <p class="wordBody">
                {{ this.metrics_intro }}
              </p>
              <div v-for="(item, idx) in metrics_list" :key="idx">
                <p class="boldBlue">{{ item.title }}</p>
                <p class="wordBody">{{ item.text }}</p>
              </div>
              <div class="btn_holder"><v-btn @click="visit(sde_request_form)">Get Request Form</v-btn></div>
              <v-row>
                <!-- New User Registration Stepper Desktop -->
                <v-col cols="1"></v-col>
                <v-col cols="10">
                  <v-card class="serviceCards">
                    <v-toolbar flat color="#072F5F" dark>
                      <v-toolbar-title>
                        <h4 class="toolTitle">User Registration / Access</h4>
                      </v-toolbar-title>
                    </v-toolbar>
                    <v-stepper v-model="step" vertical>
                      <v-stepper-step step="1" :complete="step > 1">
                        Step 1
                      </v-stepper-step>
                      <v-stepper-content step="1">
                        <v-card outlined class="mb-6">
                          <div class="cardEdgePadding">
                            <p>Click the "Start Registration" button below to download the NAVY 311 System Access Request form.</p>
                            <p>Open the form in a new tab then select continue to move on with the next step.</p>
                            <p>Registered Users should use the Access button to log in to the business intelligence reporting page.</p>
                            <div class="dialogbuttons">
                              <v-btn @click="visit(registration_form)">Start Registration</v-btn>
                              <v-btn @click="visit(registered_user_link)">Access</v-btn>
                            </div>
                          </div>
                        </v-card>
                        <v-btn color="primary" @click="step = 2">Continue</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="2" :complete="step > 2">
                        Step 2
                      </v-stepper-step>
                      <v-stepper-content step="2">
                        <v-card outlined class="mb-6">
                          <div class="cardEdgePadding">
                            <p>Complete and Save the NAVY 311 System Access Request form.</p>
                            <p>For metrics and reports access, be sure to check the "Metrics Suite/Reporting User" checkbox on the form.</p>
                            <p class="centerbut">Select continue when you are done.</p>
                          </div>
                        </v-card>
                        <v-btn color="primary" @click="step = 3">Continue</v-btn>
                        <v-btn text @click="step = 1">Go Back</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="3" :complete="step > 3">
                        Step 3
                      </v-stepper-step>
                      <v-stepper-content step="3">
                        <v-card outlined class="mb-6">
                          <div class="cardEdgePadding">
                            <p class="centerbut">Send this form via email to NAVY311@navy.mil.</p>
                            <p class="centerbut">Select Continue once the email has been sent.</p>
                          </div>
                        </v-card>
                        <v-btn color="primary" @click="step = 4">Continue</v-btn>
                        <v-btn text @click="step = 2">Go Back</v-btn>
                      </v-stepper-content>
                      <v-stepper-step step="4" :complete="step > 3">
                        Finish
                      </v-stepper-step>
                      <v-stepper-content step="4">
                        <v-card outlined class="mb-6">
                          <div class="cardEdgePadding">
                            <p class="centerbut">Congratulations you are done for now!</p>
                            <p>Once your request is processed you will recieve an email with an OPNAV 5239/14(SAAR-N) form attached and instructions for submitting it.</p>
                            <p>Upon Submission of this form your request will be processed.</p>
                            <p>You will recieve an email with your account information and access procedures once your request has been approved.</p>
                            <p>For any questions about your request please contact us via email at NAVY311@navy.mil.</p>
                          </div>
                        </v-card>
                        <v-btn color="primary" @click="step = 5">Continue</v-btn>
                        <v-btn text @click="step = 3">Go Back</v-btn>
                      </v-stepper-content>
                    </v-stepper>
                  </v-card>
                </v-col>
                <v-col cols="1"></v-col>
              </v-row>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </template>
      <template v-else>
        <!-- Support Community Services Mobile -->
        <v-row>
          <v-col cols="12">
            <v-card class="serviceCardsMobile">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">Support Community Services</h4>
                </v-toolbar-title>
              </v-toolbar>
              <p></p>
              <v-expansion-panels popout focusable>
                <v-expansion-panel>
                  <v-expansion-panel-header>Tiered-Level Help Desk Support</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="serviceCardContent">
                      <p></p>
                      <p class="wordBody">
                        {{ this.tiered_level_help_desk_support }}
                      </p>
                      <div class="btn_holder"><v-btn class="gen_btn" @click="visit(tierd_level_help_request_service)">Request a Service</v-btn></div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Support Provider Directory Services</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="serviceCardContent">
                      <p></p>
                      <p class="wordBody">
                        {{ this.support_provider_directory_services }}
                      </p>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Integration Support Services</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="serviceCardContent">
                      <p></p>
                      <p class="wordBody">
                        {{ this.integration_support_services }}
                      </p>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
                <v-expansion-panel>
                  <v-expansion-panel-header>Additional SPD Items Of Interest</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="additionalSPD">
                      <div v-for="(item, idx) in additional_spd_items" :key="idx">
                        <p></p>
                        <p class="boldBlue">{{ item.title }}</p>
                        <p class="wordBody">{{ item.text }}</p>
                        <div class="btn_holder"><v-btn class="gen_btn" @click="visit(item.link)">{{ item.btn_title }}</v-btn></div>
                      </div>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-col>
        </v-row>
        <!-- Support Request Management Services Mobile -->
        <v-row>
          <v-col cols="12">
            <v-card class="serviceCardsMobile">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">Support Request Management Services</h4>
                </v-toolbar-title>
              </v-toolbar>
              <p></p>
              <p class="wordBody">
                {{ this.support_request_management_services_intro }}
              </p>
              <div class="btn_holder">
                <p><v-btn class="gen_btn" @click="visit(support_request_management_service_link)">Request a Service</v-btn></p>
              </div>
              <v-expansion-panels popout focusable>
                <v-expansion-panel v-for="(service, idx) in support_request_management_services_list" :key="idx">
                  <v-expansion-panel-header>{{ service.header }}</v-expansion-panel-header>
                  <v-expansion-panel-content>
                    <div class="serviceCardContent">
                      <p></p>
                      <p class="wordBody">
                        {{ service.text }}
                      </p>
                    </div>
                  </v-expansion-panel-content>
                </v-expansion-panel>
              </v-expansion-panels>
            </v-card>
          </v-col>
        </v-row>
        <!-- Business Intelligence and Metrics Services Mobile-->
        <v-row>
          <v-col cols="12">
            <v-card class="serviceCardsMobile">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">Business Intelligence/Metrics Services</h4>
                </v-toolbar-title>
              </v-toolbar>
              <p></p>
              <p class="wordBody">
                {{ this.metrics_intro }}
              </p>
              <div v-for="(item, idx) in metrics_list" :key="idx">
                <p class="boldBlue">{{ item.title }}</p>
                <p class="wordBody">{{ item.text }}</p>
              </div>
              <div class="btn_holder">
                <p><v-btn @click="visit(sde_request_form)">Get Request Form</v-btn></p>
              </div>
              <v-card class="serviceCards">
                <v-toolbar flat color="#072F5F" dark>
                  <v-toolbar-title>
                    <h4 class="toolTitle">Account Access/Registration</h4>
                  </v-toolbar-title>
                </v-toolbar>
                <p></p>
                <div class="serviceCardContent">
                  <p class="wordBody">
                    To register for these services you must download and complete the NAVY 311 System Access Request Form. This must be done on a desktop computer.
                  </p>
                  <p class="wordBody">
                    Registered Users can access their account by clicking on the "Access" button below.
                  </p>
                  <div class="btn_holder"><v-btn class="gen_btn" @click="visit(registered_user_link)">Access</v-btn></div>
                </div>
              </v-card>
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
    <h1 class="wdn-text-hidden">Services Page</h1>
  </div>
</template>

<script>
export default {
  name: 'ServicesPage',
  beforeDestroy() {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  mounted() {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  computed: {
    tab: {
      set(tab) {
        this.$router.replace({ query: { ...this.$route.query, tab } })
      },
      get() {
        return this.$route.query.tab
      }
    }
  },
  methods: {
    visit: function (link) {
      // eslint-disable-next-line no-console
      console.log(this.isMobile);
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
    onResize() {
      this.isMobile = window.innerWidth < 600
    },
  },
  data: function () {
    return {
      dialog_mobile_warning: false,
      mobileLink: 'None',
      isMobile: false,
      cac_enabled: [
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
      support_request_management_service_link: "/Documents/Navy311_Services_Info_Request.pdf",
      tierd_level_help_request_service: "/Documents/Navy311_Services_Info_Request.pdf",
      sde_request_form: "/Documents/DS_SDE_Metrics_Report_Request.pdf",
      registration_form: "https://ds-report.dc3n.navy.mil/navy311/docs/NAVY_311_System_Access_Request_External.pdf",
      registered_user_link: "https://ds-report.dc3n.navy.mil/BOE/BI/",
      step: 1,
      tiered_level_help_desk_support: "Through NAVY 311 via phone, email, web, text, chat, and other channels the Fleet, Sailors, military families, and DoD civilians can get on-demand assistance. Think of NAVY 311 as a gateway to comprehensive customer support. NAVY 311 personnel can lend helpful assistance through the use of provided FAQs, can document and track support requests using a sophisticated eCRM database, can escelate issues beyond the Tier 1 level to Subject Matter Experts and engineers, or designated watch personel, and can provide round-the-clock support tailored to the needs and specifications of individual commands, programs or organizations. Any customer support function, call center, or help desk can be integrated with NAVY 311 whether it be 24/7 coverage, emergency (COOP) staffing, or nights, weekends and holidays. If your organization is in need of Help Desk capabilities please contact NAVY 311 to find out how we can serve you.",
      support_provider_directory_services: "NAVY 311 maintains a Navy-wide directory of organizations and individuals that provide a vast array of non-tactical support to the fleet and shore based support organizations. The directory allows Navy personnel the ability to quickly search for and locate qualified support providers when the need for assistance arises. If you are interested in our Support Provider Directory Services, please contact NAVY 311 to find out how we can serve you.",
      integration_support_services: "NAVY 311 provides integration services for existing Navy call centers to allow seemless interoperability. The NAVY 311 Community currently includes more than a dozen of the Navy's largest support centers. It allows partner support centers to automatically route or transfer support request tickets from one Help Desk to another and provides integrated reporting and metrics across the Navy's communities of practice.",
      additional_spd_items: [
        { title: "Register to access the Support Provider Directory", text: "Register with your CAC (DoD Common Access Card) to search thousands of existing support organizations. Additionally, registered users will be able to request changes to existing support provider and commodity records.", btn_title: "Register", link: "https://ds-itsmweb.dc3n.navy.mil/arsys/forms/ds-itsmapp/A_SDE+ECRM+Directory+Management+Console/" },
        { title: "Add Information to the Support Provider Directory", text: "Request to ADD an organization, activity, product/service or provider contact information to the Support Provider Directory.", btn_title: "Add Information", link: "/Documents/SPD_Activity_Add_Request.pdf" },
        { title: "Request access to advanced user functions", text: "If you manage SPD record information for your organization, you may request access to the advanced user functions of the SPD by clicking on the link to the left and submitting the associated form*. The advanced user functions will allow you to maintain commodity and support provider records for your activity or support group.", btn_title: "Request Access", link: "/Documents/SPD_Access_Request.pdf" }
      ],
      support_request_management_services_intro: "NAVY 311 operates a Navy-wide Enterprise Customer Relationship Management (eCRM) Shared Data Environment (SDE). This environment is a collaborative platform that records, tracks, and delivers requests for customer support to the appropriate support provider. The environment is a collaborative initiative among the NAVY 311 support communities, linking contact centers to support providers, creating a common operating perspective across all support organizations and functional disciplines.",
      support_request_management_services_list: [
        { header: "Shared Data Environment (SDE) Integration Support Services", text: "Request to provide a program/organization the ability to integrate their existing CRM environment with the NAVY 311 eCRM environment (data sharing)." },
        { header: "CRM System Re-Hosting Support Services", text: "Request to provide a program/organization a pathway to re-host their existing CRM aplications and forms in an approved Navy Data Center." },
        { header: "Customer Relationship Management (CRM) Application Support Services", text: "Request to provide a program/organization, which may have no CRM solutions, with an application to record, track, and update their requests for support using an existing eCRM solution." }
      ],
      metrics_intro: "NAVY 311 provides analytical tools and decision-quality data to help the warfare enterprises, resource managers, program officers, and analysts identify recurring issues and make informed business decisions. The BI tool utilizes the SDE repository of all records to enable data mining to identify trends and thereby enable process improvments and total ownership cost reduction analytics.",
      metrics_list: [
        { title: "Business Intelligence Reporting:", text: "Request customized Shared Data Environment (SDE) metrics and reports prepared by NAVY 311 analysts and delivered for your use." },
        { title: "Customized Shared Data Environment (SDE) Reporting:", text: "Request customized Shared Data Environment (SDE) metrics and reports prepared by NAVY 311 analysts and delivered for your use." }
      ]
    }
  },
}
</script>
<style lang="scss">
.gen_btn {
  margin: 0 auto;
}

.cardEdgePadding {
  margin: 20px;
}

.serviceCards {
  padding-bottom: 15px;
  margin: 30px;
}

.serviceCardsMobile {
  padding-bottom: 15px;
  margin: 0 auto;
}

.centerbut {
  text-align: center;
  margin: 0;
  padding: 0;
}

.boldBlue {
  font-weight: 600;
  margin-left: 10px;
  margin-right: 10px;
}

.wordBody {
  margin-left: 20px;
  margin-right: 20px;
}

.center_container {
  max-width: 1000px;
  margin: 0 auto;
}

.wdn-text-hidden {
  visibility: hidden;
}

.dialogbuttons {
  height: 45px;
  display: flex;
  justify-content: space-around;
}

.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active),
.theme--light.v-tabs>.v-tabs-bar .v-tab:not(.v-tab--active)>.v-icon,
.theme--light.v-tabs>.v-tabs-bar .v-tab--disabled {
  color: black;
}

.toolTitle {
  font-weight: 400;
}

.btn_holder {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 15px;
}
</style>
