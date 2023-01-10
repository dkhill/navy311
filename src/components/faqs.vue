<template>
  <div class="center_container">
    <v-container fluid>
      <template v-if="$vuetify.breakpoint.smAndUp">
        <v-row>
          <v-col cols="12">
            <v-card class="tabs-card">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">A single point of customer service entry into the shore infrastructure and network of Fleet support providers.</h4>
                </v-toolbar-title>
              </v-toolbar>
              <v-tabs class="tabscontainer" background-color="transparent" grow show-arrows>
                <v-tab>What we do</v-tab>
                <v-tab-item class="tabs">
                  <p></p>
                  <ul>
                    <li v-for="(n, idx) in what_we_do_tab" :key="idx">
                      <p class="defaultfont">{{ n.text }}</p>
                    </li>
                  </ul>
                </v-tab-item>
                <v-tab>Why NAVY 311?</v-tab>
                <v-tab-item class="tabs">
                  <div v-for="(n, idx) in why_navy_311_tab" :key="idx">
                    <p class="defaultfont">{{ n.text }}</p>
                    <p></p>
                  </div>
                </v-tab-item>
                <v-tab>Our Service to Sailors</v-tab>
                <v-tab-item class="tabs">
                  <div v-for="(n, idx) in our_service_to_sailors_tab" :key="idx">
                    <p class="defaultfont">{{ n.text }}</p>
                    <p></p>
                  </div>
                </v-tab-item>
                <v-tab>Benefits of NAVY 311</v-tab>
                <v-tab-item class="tabs">
                  <p v-for="(n, idx) in benefits_of_navy_311_description" :key="idx" class="defaultfont">{{ n.text }}</p>
                  <ul>
                    <li v-for="(n, idx) in benefits_of_navy_311_tab" :key="idx">
                      <p class="defaultfont"><strong>{{ n.bold_text }}</strong>
                        {{ n.text }}
                      </p>
                    </li>
                  </ul>
                </v-tab-item>
              </v-tabs>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="4">
            <v-row>
              <!-- Need More Help Card Desktop -->
              <v-col cols="12">
                <v-card>
                  <v-toolbar flat color="#072F5F" dark>
                    <v-toolbar-title>
                      <h4 class="toolTitle">Need More Help?</h4>
                    </v-toolbar-title>
                  </v-toolbar>
                  <!--<v-list shaped>-->
                  <v-list-item-group v-model="item" color="#072F5F" role="listbox" aria-label="More Help List">
                    <v-list-item v-for="(item, idx) in need_more_help" v-on:click="navigate(item.link)" :key="idx" role="option" tabindex="0">
                      <v-list-item-content style="text-align: center;" two-line>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item id="service_link_predictive_email" v-on:click="visit('https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=EmailRequest')">
                      <v-list-item-content style="text-align: center;" id="service_link_predictive_email" two-line>
                        <v-list-item-title id="service_link_predictive_email">Email NAVY 311</v-list-item-title>
                        <v-list-item-subtitle id="service_link_predictive_email">Email us a Question</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                    <v-list-item v-on:click="navigate('/texting')">
                      <v-list-item-content style="text-align: center;" two-line>
                        <v-list-item-title>Text NAVY 311</v-list-item-title>
                        <v-list-item-subtitle>Text us a Question</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                  <!--</v-list>-->
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <!-- Other Methods of Assistance Card Desktop -->
              <v-col cols="12">
                <v-card>
                  <v-toolbar flat color="#072F5F" dark>
                    <v-toolbar-title>
                      <h4 class="toolTitle">Other Methods of Assistance?</h4>
                    </v-toolbar-title>
                  </v-toolbar>
                  <v-list-item-group v-model="item" color="#072F5F" role="listbox" aria-label="Other Methods of Assistance List">
                    <v-list-item style="cursor: default; pointer-events: none;" v-for="(item, idx) in other_methods" :key="idx" role="option" tabindex="0">
                      <v-list-item-content style="text-align: center;" three-line>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                        <v-list-item-subtitle>{{ item.subtitle1 }}</v-list-item-subtitle>
                        <v-list-item-subtitle>{{ item.subtitle2 }}</v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list-item-group>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="8">
            <v-row>
              <!-- NAVY 311 FAQ Desktop -->
              <v-col cols="12">
                <v-card class="serviceCardsMobile">
                  <v-toolbar flat color="#072F5F" dark>
                    <v-toolbar-title>
                      <h4 class="toolTitle">NAVY 311 Frequently Asked Questions (FAQs)</h4>
                    </v-toolbar-title>
                  </v-toolbar>
                  <p></p>
                  <div class="faqexpanList">
                    <v-expansion-panels popout focusable>
                      <v-expansion-panel :id="'faq_id_' + idx" v-for="(question, idx) in faqs" :key="idx">
                        <v-expansion-panel-header :id="'faq_id_' + idx">{{ question.question }}</v-expansion-panel-header>
                        <v-expansion-panel-content :id="'faq_id_' + idx">
                          <p></p>
                          <p>{{ question.answer }}</p>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-expansion-panel id="faq_id_contact">
                        <v-expansion-panel-header id="faq_id_contact">How do I contact NAVY 311?</v-expansion-panel-header>
                        <v-expansion-panel-content id="faq_id_contact">
                          <p></p>
                          <p>
                            Use any NAVY 311 media channel below to get connected to a Navy-wide network of contact centers and support professionals.
                          </p>
                          <v-simple-table>
                            <thead>
                              <tr>
                                <th style="min-width:80px" class="text-left">Method</th>
                                <th class="text-left">Information</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Phone</td>
                                <td>1-855-NAVY311 (1-855-628-9311)</td>
                              </tr>
                              <tr>
                                <td>DSN</td>
                                <td>510-NAVY311 (510-628-9311)</td>
                              </tr>
                              <tr>
                                <td>Email</td>
                                <td>
                                  <p>Navy311@navy.mil (unclassified)</p>
                                  <p>Navy311@navy.smil.mil (classified)</p>
                                </td>
                              </tr>
                              <tr>
                                <td>Web</td>
                                <td>
                                  <p>http://www.Navy311.navy.mil (unclassified)</p>
                                  <p>https://www.Navy311.navy.smil.mil (classified)</p>
                                </td>
                              </tr>
                              <tr>
                                <td>Text</td>
                                <td>Type Navy311@navy.mil into the "TO" line of the text message</td>
                              </tr>
                              <tr>
                                <td>Chat</td>
                                <td>Via NAVY 311 unclassified website</td>
                              </tr>
                              <tr>
                                <td>Fax</td>
                                <td>877-632-4304</td>
                              </tr>
                              <tr>
                                <td>PLAD</td>
                                <td>NAVY THREE ONE ONE NORFOLK VA</td>
                              </tr>
                            </tbody>
                          </v-simple-table>
                          <p>NAVY 311 will ensure your service request is documented, routed to the proper authorized activity/agent, and monitored for problem resolution.</p>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-expansion-panel id="faq_id_navy311_difference">
                        <v-expansion-panel-header id="faq_id_navy311_difference">What is the difference between NAVY 311 and the Navy Information Application Product Suite (NIAPS)?</v-expansion-panel-header>
                        <v-expansion-panel-content id="faq_id_navy311_difference">
                          <p></p>
                          <p>
                            NAVY 311 is dedicated to providing Sailors with one contact center for non-tactical, on-demand informational assistance when
                            other support provisions are unavailable or cannot be identified. NAVY 311 is primarily focused on helping you with your
                            day-to-day Navy work and career questions.
                          </p>
                          <p>
                            The shipboard NIAPS server contains applications that provide Sailors with mission- and personnel-specific data and information.
                            These applications are specifically tailored to individual afloat units for training, career management, maintenance, technical,
                            logistics, human resources, as well as morale and welfare support. NIAPS is available while at sea (an environment disconnected
                            from the Internet) or in port and has the ability to "replicate" data between ship and shore. There are currently more than 40
                            applications and tools available to the shipboard Sailor via NIAPS.
                          </p>
                          <p>
                            In addition, NIAPS provides the ability to contact NAVY 311 via an Afloat Request Form. After the form is submitted, it is held
                            in a queue. When the ship has Internet connectivity, the Afloat Request Form is sent to NAVY 311 for action. The Afloat Request
                            Form is similar to the Support Request Form on the NAVY 311 website (www.Navy311.navy.mil).
                          </p>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-expansion-panel id="faq_id_become_navy311">
                        <v-expansion-panel-header id="faq_id_become_navy311">What will a service provider or help desk have to do differently to become a part of NAVY 311?</v-expansion-panel-header>
                        <v-expansion-panel-content id="faq_id_become_navy311">
                          <p></p>
                          <p>
                            Any Navy help desk can join the NAVY 311 capability. As a help desk, you can determine the amount of service you want NAVY 311 to provide for you.
                            NAVY 311 typically provides Tier 0 and Tier 1 support on your behalf.
                          </p>
                          <p>
                            Tier 0 is automated support where customers can submit simple transaction requests and/or obtain basic information through FAQs, web links, online
                            documentation, and similar resources. This tier is self-service, involves only the customer, and requires no other human intervention.
                          </p>
                          <p>
                            Tier 1 is live support where customers can initiate a service request and obtain assistance, including, but not limited to basic information and
                            standard services. Tier 1 support involves end-to-end responsibility for each customer request, provides the customer with a single contact point
                            and call/contact ownership, and provides documentation for visibility and tracking. Tier 1 will only provide information that has been validated
                            and authorized for distribution by the cognizant technical authority. Tier 1 will vector service requests to cognizant technical authorities for
                            resolution as identified in the NAVY 311 Support Provider Directory (SPD).
                          </p>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                      <v-expansion-panel id="faq_id_pass_information">
                        <v-expansion-panel-header id="faq_id_pass_information">How can another service provider or help desk pass information to NAVY 311 that may be of help to Sailors?</v-expansion-panel-header>
                        <v-expansion-panel-content id="faq_id_pass_information">
                          <p></p>
                          <p>
                            To provide information that you believe Sailors or Fleet representatives need to know, simply contact a NAVY 311 service representative at 1-855-NAVY311
                            (1-855-628-9311) or email Navy311@navy.mil. NAVY 311 maintains a directory of support providers (a.k.a the "Support Provider Directory (SPD)") that links
                            equipment, application support, and various subject areas to the authoritative source of support or subject matter expert. The representative will check
                            the NAVY 311 Support Provider Directory and/or explain the process to validate and capture your information for SPD use.
                          </p>
                          <p>
                            The Support Provider Directory is a valuable data asset to the Navy Enterprise because it is authoritative information provided by the Echelon II/III community
                            of infrastructure service providers. The Support Provider Directory provides points-of-contact for the multiple Personnel, Equipment, Supplies, Training and
                            Ordnance (PESTO) commodities/services/products managed and maintained throughout the Navy. The cataloged data within the Support Provider Directory is maintained
                            by the various service provider organizations. All service providers are encouraged to contribute to the Support Provider Directory, cataloging the skills,
                            resources, and products they manage to contribute to Fleet and Sailor readiness.
                          </p>
                        </v-expansion-panel-content>
                      </v-expansion-panel>
                    </v-expansion-panels>
                  </div>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </template>
      <template v-else>
        <!-- NAVY 311 FAQ Card Mobile -->
        <v-row>
          <v-col cols="12">
            <v-card class="serviceCardsMobile">
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">NAVY 311 Frequently Asked Questions (FAQs)</h4>
                </v-toolbar-title>
              </v-toolbar>
              <p></p>
              <div class="faqexpanList">
                <v-expansion-panels popout focusable>
                  <v-expansion-panel :id="'faq_id_' + idx" v-for="(question, idx) in faqs" :key="idx">
                    <v-expansion-panel-header :id="'faq_id_' + idx">{{ question.question }}</v-expansion-panel-header>
                    <v-expansion-panel-content :id="'faq_id_' + idx">
                      <p></p>
                      <p>{{ question.answer }}</p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel id="faq_id_contact">
                    <v-expansion-panel-header id="faq_id_contact">How do I contact NAVY 311?</v-expansion-panel-header>
                    <v-expansion-panel-content id="faq_id_contact">
                      <p></p>
                      <p>
                        Use any NAVY 311 media channel below to get connected to a Navy-wide network of contact centers and support professionals.
                      </p>
                      <v-simple-table>
                        <thead>
                          <tr>
                            <th style="min-width:80px" class="text-left">Method</th>
                            <th class="text-left">Information</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Phone</td>
                            <td>1-855-NAVY311 (1-855-628-9311)</td>
                          </tr>
                          <tr>
                            <td>DSN</td>
                            <td>510-NAVY311 (510-628-9311)</td>
                          </tr>
                          <tr>
                            <td>Email</td>
                            <td>
                              <p>Navy311@navy.mil (unclassified)</p>
                              <p>Navy311@navy.smil.mil (classified)</p>
                            </td>
                          </tr>
                          <tr>
                            <td>Web</td>
                            <td>
                              <p>http://www.Navy311.navy.mil (unclassified)</p>
                              <p>https://www.Navy311.navy.smil.mil (classified)</p>
                            </td>
                          </tr>
                          <tr>
                            <td>Text</td>
                            <td>Type Navy311@navy.mil into the "TO" line of the text message</td>
                          </tr>
                          <tr>
                            <td>Chat</td>
                            <td>Via NAVY 311 unclassified website</td>
                          </tr>
                          <tr>
                            <td>Fax</td>
                            <td>877-632-4304</td>
                          </tr>
                          <tr>
                            <td>PLAD</td>
                            <td>NAVY THREE ONE ONE NORFOLK VA</td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                      <p>NAVY 311 will ensure your service request is documented, routed to the proper authorized activity/agent, and monitored for problem resolution.</p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel id="faq_id_navy311_difference">
                    <v-expansion-panel-header id="faq_id_navy311_difference">What is the difference between NAVY 311 and the Navy Information Application Product Suite (NIAPS)?</v-expansion-panel-header>
                    <v-expansion-panel-content id="faq_id_navy311_difference">
                      <p></p>
                      <p>
                        NAVY 311 is dedicated to providing Sailors with one contact center for non-tactical, on-demand informational assistance when
                        other support provisions are unavailable or cannot be identified. NAVY 311 is primarily focused on helping you with your
                        day-to-day Navy work and career questions.
                      </p>
                      <p>
                        The shipboard NIAPS server contains applications that provide Sailors with mission- and personnel-specific data and information.
                        These applications are specifically tailored to individual afloat units for training, career management, maintenance, technical,
                        logistics, human resources, as well as morale and welfare support. NIAPS is available while at sea (an environment disconnected
                        from the Internet) or in port and has the ability to "replicate" data between ship and shore. There are currently more than 40
                        applications and tools available to the shipboard Sailor via NIAPS.
                      </p>
                      <p>
                        In addition, NIAPS provides the ability to contact NAVY 311 via an Afloat Request Form. After the form is submitted, it is held
                        in a queue. When the ship has Internet connectivity, the Afloat Request Form is sent to NAVY 311 for action. The Afloat Request
                        Form is similar to the Support Request Form on the NAVY 311 website (www.Navy311.navy.mil).
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel id="faq_id_become_navy311">
                    <v-expansion-panel-header id="faq_id_become_navy311">What will a service provider or help desk have to do differently to become a part of NAVY 311?</v-expansion-panel-header>
                    <v-expansion-panel-content id="faq_id_become_navy311">
                      <p></p>
                      <p>
                        Any Navy help desk can join the NAVY 311 capability. As a help desk, you can determine the amount of service you want NAVY 311 to provide for you.
                        NAVY 311 typically provides Tier 0 and Tier 1 support on your behalf.
                      </p>
                      <p>
                        Tier 0 is automated support where customers can submit simple transaction requests and/or obtain basic information through FAQs, web links, online
                        documentation, and similar resources. This tier is self-service, involves only the customer, and requires no other human intervention.
                      </p>
                      <p>
                        Tier 1 is live support where customers can initiate a service request and obtain assistance, including, but not limited to basic information and
                        standard services. Tier 1 support involves end-to-end responsibility for each customer request, provides the customer with a single contact point
                        and call/contact ownership, and provides documentation for visibility and tracking. Tier 1 will only provide information that has been validated
                        and authorized for distribution by the cognizant technical authority. Tier 1 will vector service requests to cognizant technical authorities for
                        resolution as identified in the NAVY 311 Support Provider Directory (SPD).
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                  <v-expansion-panel id="faq_id_pass_information">
                    <v-expansion-panel-header id="faq_id_pass_information">How can another service provider or help desk pass information to NAVY 311 that may be of help to Sailors?</v-expansion-panel-header>
                    <v-expansion-panel-content id="faq_id_pass_information">
                      <p></p>
                      <p>
                        To provide information that you believe Sailors or Fleet representatives need to know, simply contact a NAVY 311 service representative at 1-855-NAVY311
                        (1-855-628-9311) or email Navy311@navy.mil. NAVY 311 maintains a directory of support providers (a.k.a the "Support Provider Directory (SPD)") that links
                        equipment, application support, and various subject areas to the authoritative source of support or subject matter expert. The representative will check
                        the NAVY 311 Support Provider Directory and/or explain the process to validate and capture your information for SPD use.
                      </p>
                      <p>
                        The Support Provider Directory is a valuable data asset to the Navy Enterprise because it is authoritative information provided by the Echelon II/III community
                        of infrastructure service providers. The Support Provider Directory provides points-of-contact for the multiple Personnel, Equipment, Supplies, Training and
                        Ordnance (PESTO) commodities/services/products managed and maintained throughout the Navy. The cataloged data within the Support Provider Directory is maintained
                        by the various service provider organizations. All service providers are encouraged to contribute to the Support Provider Directory, cataloging the skills,
                        resources, and products they manage to contribute to Fleet and Sailor readiness.
                      </p>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- Need More Help Card Mobile -->
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">Need More Help?</h4>
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item-group v-model="item" color="#072F5F" role="listbox" aria-label="More Help List">
                <v-list-item v-for="(item, idx) in need_more_help" :key="idx" role="option" tabindex="0">
                  <v-list-item-content style="text-align: center;" three-line>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.subtitle }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item id="service_link_predictive_email" v-on:click="visit('https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=EmailRequest')">
                  <v-list-item-content style="text-align: center;" id="service_link_predictive_email" two-line>
                    <v-list-item-title id="service_link_predictive_email">Email NAVY 311</v-list-item-title>
                    <v-list-item-subtitle id="service_link_predictive_email">Email us a Question</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item v-on:click="navigate('/texting')">
                  <v-list-item-content style="text-align: center;" two-line>
                    <v-list-item-title>Text NAVY 311</v-list-item-title>
                    <v-list-item-subtitle>Text us a Question</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-card>
          </v-col>
        </v-row>
        <!-- Other Methods of Assistance Card Mobile -->
        <v-row>
          <v-col cols="12">
            <v-card>
              <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title>
                  <h4 class="toolTitle">Other Methods of Assistance?</h4>
                </v-toolbar-title>
              </v-toolbar>
              <v-list-item-group v-model="item" color="#072F5F" role="listbox" aria-label="Other Methods of Assistance List">
                <v-list-item v-for="(item, idx) in other_methods" :key="idx" role="option" tabindex="0">
                  <v-list-item-content style="text-align: center;" three-line>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                    <v-list-item-subtitle>{{ item.subtitle1 }}</v-list-item-subtitle>
                    <v-list-item-subtitle>{{ item.subtitle2 }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
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
    <h1 class="wdn-text-hidden">Home Page</h1>
  </div>
</template>

<script>
export default {
  name: 'FAQsPage',
  beforeDestroy() {
    if (typeof window === 'undefined') return
    window.removeEventListener('resize', this.onResize, { passive: true })
  },
  mounted() {
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
    onResize() {
      this.isMobile = window.innerWidth < 600
    },
    navigate: function (link) {
      this.$router.push(link);
    }
  },
  data: function () {
    return {
      item: '',
      dialog_mobile_warning: false,
      mobileLink: 'None',
      isMobile: false,
      cac_enabled: [
        'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=EmailRequest',
        'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=NAVY311_Catalog&look=table&view=submissions&type=requests#My%20Open%20Requests',
        'https://ds-itsmweb.dc3n.navy.mil/kinetic/DisplayPage?name=CVR_Request',
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
      faqs: [
        { question: "What is NAVY 311?", answer: "NAVY 311 is not a new service, but rather a new name for the Customer Relationship Management (CRM) component of the Navy's Distance Support (DS) capability. NAVY 311 builds upon the existing Global Distance Support Center (GDSC) infrastructure of networked CRM professionals and authorized support providers.  The NAVY 311 service is available 24/7/365 and gives customers an easy to remember, single point-of-entry to non-tactical, non emergency assistance. The ultimate objective for NAVY 311 is to simplify and streamline support to the Fleet." },
        { question: "How can NAVY 311 help me?", answer: "Have a question about maintenance, ship parts and/or repair, logistics, personnel or career matters, training, IT systems, quality of life, facilities, medical support, chaplain care, ordnance, or other topics?  Then call NAVY 311.  The NAVY 311 team will take immediate action on your request, identify the appropriate source of support, route your service request, and then track your issue through resolution to complete satisfaction. The NAVY 311 capability is available to Sailors (Active and Reserve), all Service members and the extended Navy family (e.g., dependents, veterans, contractors, Navy infrastructure professionals, etc.) for help on any issue." },
        { question: "Why was NAVY 311 created?", answer: "Customers don't have to keep track of many different call center or help desk numbers and email addresses. The NAVY 311 concept follows modern, 21st Century call center practices and is modeled after municipal 3-1-1 city services now accessible in over 300 metropolitan areas worldwide." },
        { question: "Will email that I address to the current AnchorDesk email address (AnchorDesk@navy.mil) be automatically forwarded to the new NAVY 311 email address?", answer: "Yes.  Email messages sent to the current AnchorDesk email address will automatically be redirected to the NAVY 311 email address (Navy311@navy.mil)." },
        { question: "What is the difference between calling NAVY 311 and placing a direct call to a specific help desk for assistance?", answer: "You can still contact any Navy help desk directly, however, NAVY 311 provides one easy to remember phone number and email address. You won't need to search the Web for the right help desk or find necessary contact information.  Instead, NAVY 311 provides One Call Answers All support for any non-tactical, non-emergency request for assistance." },
        { question: "What is the difference between calling 911 and NAVY 311?", answer: "If you have a burning building-call 911, if you have a burning question-call NAVY 311. All real emergencies requiring police, fire, or medical support should be handled by immediately calling 911.  However, when situations arise where you don't know who to call, contact NAVY 311." },
        { question: "Will both the classified (Navy311@navy.smil.mil) and unclassified (Navy311@navy.mil) NAVY 311 email addresses be able to receive encrypted emails?", answer: "Yes, the classified and unclassified NAVY 311 email accounts are able to receive encrypted emails." },
        { question: "Will I receive the same level of support when I call NAVY 311 as I did when I contacted the Global Distance Support Center (GDSC)?", answer: "Absolutely.  Support will remain at the same service excellence standards." },
        { question: "How do I know my request is being supported?", answer: "All inbound customer service requests are recorded and monitored via a modern software tracking system. Your service request is matched to an authorized support provider, you and the provider are given contact information, and NAVY 311 call center professionals continue to follow-up until the request is completed to your satisfaction." }
      ],
      need_more_help: [
        { title: "Ask a Question", subtitle: "Ask your own question", link: "/redirectChat" },
        { title: "NAVY 311 Chat", subtitle: "Chat with a live representative", link: "/redirectChat" }
      ],
      other_methods: [
        { title: "Phone:", subtitle1: "1-855-NAVY-311", subtitle2: "1-855-628-9311" },
        { title: "DSN:", subtitle1: "510-NAVY-311", subtitle2: "510-628-9311" },
        { title: "Naval Message:", subtitle1: "NAVY THREE ONE ONE NORFOLK VA", subtitle2: "" }
      ],
      what_we_do_tab: [
        { text: "Systems and equipment: (e.g., hull, mechanical and electrical, weapon systems, IT, technical data)." },
        { text: "Quality of life: (e.g., medical and chaplain care)." },
        { text: "Personnel: (e.g., career, manpower, training)." },
        { text: "Supply and logistics: (e.g., requisition follow-ups, ordnance, food service, household goods)." },
        { text: "Installations and facilities: (e.g., environmental, public works, community support)." }
      ],
      why_navy_311_tab: [
        { text: "NAVY 311 is not a new service, but rather a new name for the Customer Relationship Management (CRM) component of the Navy's Distance Support (DS) capability.  As such, NAVY 311 simplifies help desk access and easily identifies this assistance from among the many other important Fleet Distance Support services." },
        { text: "Many forward-thinking government organizations and municipalities are using centralized 3-1-1 call centers to cost-effectively expand citizen services and streamline operations.  In the same manner, NAVY 311 is focused on achieving Fleet customer service excellence through modern technology, timely feedback, and increased operational efficiency." }
      ],
      our_service_to_sailors_tab: [
        { text: "Have a question?  Then call NAVY 311.  It's that simple.  NAVY 311 is here to help Sailors perform their daily work and manage their Navy life." },
        { text: "You can call us about maintenance, ship parts and/or repair, personnel or career matters, training, quality of life, facilities, medical support, ordnance, or any other non-emergency, non-tactical topic." },
        { text: "The NAVY 311 service is available to Sailors and other Service members, military families, civilians, veterans, contractors, and the occasional inquisitive citizen." }
      ],
      benefits_of_navy_311_tab: [
        { text: "Provides Fleet access to authoritative information and assistance in near real-time, in port and at sea, and whenever and wherever afloat units are operating.", bold_text: "Reactive Service Delivery:" },
        { text: "Allows providers to push critical information to Fleet customers in anticipation of planned maintenance and/or operations.", bold_text: "Proactive Service Delivery:" },
        { text: "Integrates data from transactional support systems across the Navy to give Fleet customers and program offices a broader view of recurring systemic issues so they can make improved resource decisions.", bold_text: "Predictive Analysis:" },
        { text: "Enables decision makers to determine effectiveness of support community, identify requirements for resource reallocation, analyze return on investment (ROI), and other analyses.", bold_text: "Metrics:" },
        { text: "Supports a collective, modernized approach to data collection and exchange, standards, reporting metrics, and interaction across individual Navy contact centers.", bold_text: "Call Center Optimization:" }
      ],
      benefits_of_navy_311_description: [
        { text: "NAVY 311 aims to provide an enterprise framework for proactive service delivery to the Fleet and past and predictive analysis to leadership for fact-based resource decisions. Some key benefits of NAVY 311 include:" }
      ]
    }
  }
}
</script>
<style lang="scss">
div.v-treeview-node__label {
  height: auto;
  word-wrap: break-word;
}

.center_container {
  max-width: 1000px;
  margin: 0 auto;
}

.serviceCards {
  padding-bottom: 15px;
  margin: 30px;
}

.serviceCardsMobile {
  padding-bottom: 15px;
  margin: 0 auto;
}

.wdn-text-hidden {
  visibility: hidden;
}

.defaultfont {
  font-size: 16px;
  margin-bottom: 0px;
  margin-left: 10px;
  margin-right: 10px;
}

.toolTitle {
  font-weight: 400;
}
</style>
