<template>
  <div class="center_container">
    <v-container fluid>
      <template v-if="$vuetify.breakpoint.smAndUp">
          <v-card class="niaps_container_card">
            <v-toolbar flat color="#072F5F" dark>
                <v-toolbar-title><h4 class="toolTitle">NIAPS ORGANIZATION - High Level</h4></v-toolbar-title>
            </v-toolbar>
            <div class="title_buffer">
                <v-row>                
                    <v-col cols="11">
                        <p>
                            NIAPS is managed by the Naval Information Warfare (NAVWAR) Program Executive Office - Enterprise Information Systems (PEO-EIS) Enterprise Services and Systems Program (PMW 250).
                        </p>
                    </v-col>
                    <v-col cols="1">
                        <v-img class="niapsImg" src="/PublishingImages/page_images2/OrganizationIcon.gif"></v-img>
                    </v-col>
                </v-row>
            </div>
            <div class="row_two_container">
                <v-row>
                    <v-col cols="6">
                        <v-card class="high_level_card">
                            <v-toolbar flat color="#072F5F" dark>
                                <v-toolbar-title><h4 class="toolTitle">Major Team Players</h4></v-toolbar-title>
                            </v-toolbar>
                            <div class="card_buffer">
                            <ul>
                                <li>Distance Support/NIAPS Program Manager - NAVWAR PEO-EIS PMW 250</li>
                                <li>Distance Support/NIAPS Assistant Program Manager - NAVWAR PEO-EIS PMW 250</li>
                                <li>NIAPS Software Support Activity (SSA) Project Director - NIWC Pacific</li>
                                <li>NIAPS System Engineer - NIWC Pacific</li>
                                <li>
                                    NAIPS Technical Lead Activity - NIWC Pacific
                                    <ul>
                                        <li>Testing and other technical questions related to NIAPS should be directed to the NIAPS Technical Lead Activity, NIWC Pacific.</li>
                                        <li>Starting Point - Lead System Engineer: 619-553-6117</li>
                                    </ul>
                                </li>
                                <li>
                                    NAIPS Fleet Support - NIWC Pacific
                                    <ul>
                                        <li>Question related to NIAPS fleet support should be directed to the NIWC Pacific Fleet Support Lead.</li>
                                        <li>Starting Point - Fleet Support Lead: 619-553-0808</li>
                                    </ul>
                                </li>
                                <li>
                                    NIAPS Installations/Advance Planning - NIWC Pacific 
                                    <ul>
                                        <li>Questions related to NIAPS installations and scheduling should be directed to the NIWC Pacific Advanced Planning Lead.</li>
                                        <li>Starting Point - Advanced Lead Planning: 619-553-0808</li>
                                    </ul>
                                </li>
                                <li>
                                    NAIPS Training Support Agent - NIWC Pacific 
                                    <ul>
                                        <li>Questions related to NIAPS training or application training development should be directed to the NIWC Pacific Fleet Support Lead.</li>
                                        <li>Starting Point - Training Lead: 619-553-0808</li>
                                        <li>Alternate Training POC: 757-537-8048</li>
                                    </ul>
                                </li>
                            </ul>
                            </div>
                        </v-card>
                    </v-col>
                    <v-col cols="6">
                        <v-card>
                            <v-toolbar flat color="#072F5F" dark>
                                <v-toolbar-title><h4 class="toolTitle">Contact Info</h4></v-toolbar-title>
                            </v-toolbar>
                            <v-simple-table>
                            <thead>
                                <tr>
                                    <th style="min-width:150px" class="text-left">Contact</th>
                                    <th class="text-left">Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NIAPS Lead System Engineer</td>
                                    <td>619-553-6117</td>
                                </tr>
                                <tr>
                                    <td>Fleet Support Lead</td>
                                    <td>619-553-0808</td>
                                </tr>
                                <tr>
                                    <td>Advanced Planning Lead</td>
                                    <td>619-553-2265</td>
                                </tr>
                                <tr>
                                    <td>Training Lead</td>
                                    <td>619-553-0808</td>
                                </tr>
                                <tr>
                                    <td>Alternate Training POC</td>
                                    <td>757-537-8048</td>
                                </tr>
                                <tr>
                                    <td>Other NIAPS Questions</td>
                                    <td>
                                        <p>Phone: 1-833-637-3669</p>
                                        <p>Email: NESD NIAPS.fct@navy.mil</p>
                                    </td>
                                </tr>
                            </tbody>
                            </v-simple-table>
                        </v-card>
                        <v-card class="other_info">
                            <v-toolbar flat color="#072F5F" dark>
                                <v-toolbar-title><h4 class="toolTitle">Other NIAPS Questions</h4></v-toolbar-title>
                            </v-toolbar>
                            <div class="card_buffer">
                                <p>
                                    Questions not answered here or any other general questions related to NIAPS program can be direced to the NAVY Enterprise Service Desk (NESD).
                                </p>
                                <ul>
                                    <li>Phone: 1-833-NESD NOW (637-3669)</li>
                                    <li>Email NESD NIAPS.fct.navy.mil</li>
                                </ul>
                            </div>
                        </v-card>
                    </v-col>
                </v-row>
            </div>
          </v-card>
      </template>
      <template v-else>
         <v-row>
             <v-col cols="12">
                 <v-card>
                     <v-toolbar flat color="#072F5F" dark>
                        <v-toolbar-title><h4 class="toolTitle">NIAPS Overview</h4></v-toolbar-title>
                     </v-toolbar>
                     <div class="title_buffer_mobile">
                     <p>
                        NIAPS is managed by the Naval Information Warfare (NAVWAR) Program Executive Office - Enterprise Information Systems (PEO-EIS) Enterprise Services and Systems Program (PMW 250).
                    </p>
                    </div>
                 </v-card>
             </v-col>
         </v-row>
         <v-row>
             <v-col cols="12">
                 <v-card>
                     <v-toolbar flat color="#072F5F" dark>
                        <v-toolbar-title><h4 class="toolTitle">Major Team Players</h4></v-toolbar-title>
                     </v-toolbar>
                     <div class="card_buffer">
                            <ul>
                                <li>Distance Support/NIAPS Program Manager - NAVWAR PEO-EIS PMW 250</li>
                                <li>Distance Support/NIAPS Assistant Program Manager - NAVWAR PEO-EIS PMW 250</li>
                                <li>NIAPS Software Support Activity (SSA) Project Director - NIWC Pacific</li>
                                <li>NIAPS System Engineer - NIWC Pacific</li>
                                <li>
                                    NAIPS Technical Lead Activity - NIWC Pacific
                                    <ul>
                                        <li>Testing and other technical questions related to NIAPS should be directed to the NIAPS Technical Lead Activity, NIWC Pacific.</li>
                                        <li>Starting Point - Lead System Engineer: 619-553-6117</li>
                                    </ul>
                                </li>
                                <li>
                                    NAIPS Fleet Support - NIWC Pacific
                                    <ul>
                                        <li>Question related to NIAPS fleet support should be directed to the NIWC Pacific Fleet Support Lead.</li>
                                        <li>Starting Point - Fleet Support Lead: 619-553-0808</li>
                                    </ul>
                                </li>
                                <li>
                                    NIAPS Installations/Advance Planning - NIWC Pacific 
                                    <ul>
                                        <li>Questions related to NIAPS installations and scheduling should be directed to the NIWC Pacific Advanced Planning Lead.</li>
                                        <li>Starting Point - Advanced Lead Planning: 619-553-0808</li>
                                    </ul>
                                </li>
                                <li>
                                    NAIPS Training Support Agent - NIWC Pacific 
                                    <ul>
                                        <li>Questions related to NIAPS training or application training development should be directed to the NIWC Pacific Fleet Support Lead.</li>
                                        <li>Starting Point - Training Lead: 619-553-0808</li>
                                        <li>Alternate Training POC: 757-537-8048</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                 </v-card>
             </v-col>
         </v-row>
         <v-row>
             <v-col cols="12">
                 <v-card>
                     <v-toolbar flat color="#072F5F" dark>
                        <v-toolbar-title><h4 class="toolTitle">Other NIAPS Questions</h4></v-toolbar-title>
                     </v-toolbar>
                     <div class="card_buffer">
                        <p>
                            Questions not answered here or any other general questions related to NIAPS program can be direced to the NAVY Enterprise Service Desk (NESD).
                        </p>
                        <ul>
                            <li>Phone: 1-833-NESD NOW (637-3669)</li>
                            <li>Email NESD NIAPS.fct.navy.mil</li>
                        </ul>
                    </div>
                 </v-card>
             </v-col>
         </v-row>
         <v-row>
             <v-col cols="12">
                 <v-card>
                     <v-toolbar flat color="#072F5F" dark>
                        <v-toolbar-title><h4 class="toolTitle">Contact Info</h4></v-toolbar-title>
                     </v-toolbar>
                     <v-simple-table>
                            <thead>
                                <tr>
                                    <th style="min-width:150px" class="text-left">Contact</th>
                                    <th class="text-left">Information</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>NIAPS Lead System Engineer</td>
                                    <td>619-553-6117</td>
                                </tr>
                                <tr>
                                    <td>Fleet Support Lead</td>
                                    <td>619-553-0808</td>
                                </tr>
                                <tr>
                                    <td>Advanced Planning Lead</td>
                                    <td>619-553-2265</td>
                                </tr>
                                <tr>
                                    <td>Training Lead</td>
                                    <td>619-553-0808</td>
                                </tr>
                                <tr>
                                    <td>Alternate Training POC</td>
                                    <td>757-537-8048</td>
                                </tr>
                                <tr>
                                    <td>Other NIAPS Questions</td>
                                    <td>
                                        <p>Phone: 1-833-637-3669</p>
                                        <p>Email: NESD NIAPS.fct@navy.mil</p>
                                    </td>
                                </tr>
                            </tbody>
                    </v-simple-table>
                 </v-card>
             </v-col>
         </v-row>
      </template>
    </v-container>
    <h1 class="wdn-text-hidden">Resources Page</h1>
  </div>
</template>

<script>
export default {
    name: 'NIAPSPage',
    methods: {
      show: function () {
        window.open(this.selected.value);
      }
    },
    data: function () {
      return {
        
      }
    }
}
</script>
<style lang="scss">
.title_buffer_mobile{
    margin: 10px;
}
.title_buffer{
    text-align: center;
    margin-left: 40px;
    margin-right: 40px;
}
.high_level_card{
    padding-bottom: 10px;
}
.other_info{
    margin-top: 15px;
    padding-bottom: 10px;
}
.card_buffer{
    margin: 10px;
}
.row_two_container{
    margin-left: 20px;
    margin-right: 20px;
}
.niaps_container{
    text-align: center;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 20px;
}
.wdn-text-hidden{
  visibility: hidden;
}
.center_container{
    max-width: 1000px;
    margin: 0 auto;
}
.toolTitle{
  font-weight: 400;
}
</style>