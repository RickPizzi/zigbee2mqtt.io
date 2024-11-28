"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[19184],{52931:(e,i,t)=>{t.r(i),t.d(i,{comp:()=>o,data:()=>c});var a=t(6254);const n={},o=(0,t(39583).A)(n,[["render",function(e,i){const t=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[i[8]||(i[8]=(0,a.Lk)("h1",{id:"tuya-zy-hps01",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#tuya-zy-hps01"},[(0,a.Lk)("span",null,"Tuya ZY_HPS01")])],-1)),(0,a.Lk)("table",null,[i[6]||(i[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th"),(0,a.Lk)("th")])],-1)),(0,a.Lk)("tbody",null,[i[2]||(i[2]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Model"),(0,a.Lk)("td",null,"ZY_HPS01")],-1)),(0,a.Lk)("tr",null,[i[1]||(i[1]=(0,a.Lk)("td",null,"Vendor",-1)),(0,a.Lk)("td",null,[(0,a.bF)(t,{to:"/supported-devices/#v=Tuya"},{default:(0,a.k6)((()=>i[0]||(i[0]=[(0,a.eW)("Tuya")]))),_:1})])]),i[3]||(i[3]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Description"),(0,a.Lk)("td",null,"mmWave radar 5.8GHz")],-1)),i[4]||(i[4]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Exposes"),(0,a.Lk)("td",null,"illuminance, occupancy, presence_timeout, move_sensitivity, move_minimum_range, move_maximum_range, breath_sensitivity, breath_minimum_range, breath_maximum_range, linkquality")],-1)),i[5]||(i[5]=(0,a.Lk)("tr",null,[(0,a.Lk)("td",null,"Picture"),(0,a.Lk)("td",null,[(0,a.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/ZY_HPS01.png",alt:"Tuya ZY_HPS01"})])],-1))])]),i[9]||(i[9]=(0,a.Lk)("h2",{id:"options",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#options"},[(0,a.Lk)("span",null,"Options")])],-1)),(0,a.Lk)("p",null,[(0,a.Lk)("em",null,[(0,a.bF)(t,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.k6)((()=>i[7]||(i[7]=[(0,a.eW)("How to use device type specific configuration")]))),_:1})])]),i[10]||(i[10]=(0,a.Fv)('<ul><li><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric"><span>Illuminance (numeric)</span></a></h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="occupancy-binary" tabindex="-1"><a class="header-anchor" href="#occupancy-binary"><span>Occupancy (binary)</span></a></h3><p>Indicates whether the device detected occupancy. Value can be found in the published state on the <code>occupancy</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. If value equals <code>true</code> occupancy is ON, if <code>false</code> OFF.</p><h3 id="presence-timeout-numeric" tabindex="-1"><a class="header-anchor" href="#presence-timeout-numeric"><span>Presence timeout (numeric)</span></a></h3><p>Presence timeout. Value can be found in the published state on the <code>presence_timeout</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;presence_timeout&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>180</code>. The unit of this value is <code>s</code>.</p><h3 id="move-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#move-sensitivity-numeric"><span>Move sensitivity (numeric)</span></a></h3><p>sensitivity of the radar. Value can be found in the published state on the <code>move_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>X</code>.</p><h3 id="move-minimum-range-numeric" tabindex="-1"><a class="header-anchor" href="#move-minimum-range-numeric"><span>Move minimum range (numeric)</span></a></h3><p>Movement minimum range. Value can be found in the published state on the <code>move_minimum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_minimum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="move-maximum-range-numeric" tabindex="-1"><a class="header-anchor" href="#move-maximum-range-numeric"><span>Move maximum range (numeric)</span></a></h3><p>Movement maximum range. Value can be found in the published state on the <code>move_maximum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;move_maximum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="breath-sensitivity-numeric" tabindex="-1"><a class="header-anchor" href="#breath-sensitivity-numeric"><span>Breath sensitivity (numeric)</span></a></h3><p>Breath sensitivity of the radar. Value can be found in the published state on the <code>breath_sensitivity</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breath_sensitivity&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>10</code>. The unit of this value is <code>X</code>.</p><h3 id="breath-minimum-range-numeric" tabindex="-1"><a class="header-anchor" href="#breath-minimum-range-numeric"><span>Breath minimum range (numeric)</span></a></h3><p>Breath minimum range. Value can be found in the published state on the <code>breath_minimum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breath_minimum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="breath-maximum-range-numeric" tabindex="-1"><a class="header-anchor" href="#breath-maximum-range-numeric"><span>Breath maximum range (numeric)</span></a></h3><p>Breath maximum range. Value can be found in the published state on the <code>breath_maximum_range</code> property. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;breath_maximum_range&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>600</code>. The unit of this value is <code>cm</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',22))])}]]),c=JSON.parse('{"path":"/devices/ZY_HPS01.html","title":"Tuya ZY_HPS01 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Tuya ZY_HPS01 control via MQTT","description":"Integrate your Tuya ZY_HPS01 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2024-10-01T19:01:34.000Z"},"headers":[{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Illuminance (numeric)","slug":"illuminance-numeric","link":"#illuminance-numeric","children":[]},{"level":3,"title":"Occupancy (binary)","slug":"occupancy-binary","link":"#occupancy-binary","children":[]},{"level":3,"title":"Presence timeout (numeric)","slug":"presence-timeout-numeric","link":"#presence-timeout-numeric","children":[]},{"level":3,"title":"Move sensitivity (numeric)","slug":"move-sensitivity-numeric","link":"#move-sensitivity-numeric","children":[]},{"level":3,"title":"Move minimum range (numeric)","slug":"move-minimum-range-numeric","link":"#move-minimum-range-numeric","children":[]},{"level":3,"title":"Move maximum range (numeric)","slug":"move-maximum-range-numeric","link":"#move-maximum-range-numeric","children":[]},{"level":3,"title":"Breath sensitivity (numeric)","slug":"breath-sensitivity-numeric","link":"#breath-sensitivity-numeric","children":[]},{"level":3,"title":"Breath minimum range (numeric)","slug":"breath-minimum-range-numeric","link":"#breath-minimum-range-numeric","children":[]},{"level":3,"title":"Breath maximum range (numeric)","slug":"breath-maximum-range-numeric","link":"#breath-maximum-range-numeric","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732812030000},"filePathRelative":"devices/ZY_HPS01.md"}')}}]);