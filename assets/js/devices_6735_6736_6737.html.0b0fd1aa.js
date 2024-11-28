"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[63734],{71251:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>a,data:()=>i});var n=o(6254);const s={},a=(0,o(39583).A)(s,[["render",function(e,t){const o=(0,n.g2)("RouteLink");return(0,n.uX)(),(0,n.CE)("div",null,[t[8]||(t[8]=(0,n.Lk)("h1",{id:"busch-jaeger-6735-6736-6737",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#busch-jaeger-6735-6736-6737"},[(0,n.Lk)("span",null,"Busch-Jaeger 6735/6736/6737")])],-1)),(0,n.Lk)("table",null,[t[6]||(t[6]=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th"),(0,n.Lk)("th")])],-1)),(0,n.Lk)("tbody",null,[t[2]||(t[2]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Model"),(0,n.Lk)("td",null,"6735/6736/6737")],-1)),(0,n.Lk)("tr",null,[t[1]||(t[1]=(0,n.Lk)("td",null,"Vendor",-1)),(0,n.Lk)("td",null,[(0,n.bF)(o,{to:"/supported-devices/#v=Busch-Jaeger"},{default:(0,n.k6)((()=>t[0]||(t[0]=[(0,n.eW)("Busch-Jaeger")]))),_:1})])]),t[3]||(t[3]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Description"),(0,n.Lk)("td",null,"Zigbee Light Link power supply/relay/dimmer/wall-switch")],-1)),t[4]||(t[4]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Exposes"),(0,n.Lk)("td",null,"light (state, brightness), switch (state), action, linkquality")],-1)),t[5]||(t[5]=(0,n.Lk)("tr",null,[(0,n.Lk)("td",null,"Picture"),(0,n.Lk)("td",null,[(0,n.Lk)("img",{src:"https://www.zigbee2mqtt.io/images/devices/6735-6736-6737.png",alt:"Busch-Jaeger 6735/6736/6737"})])],-1))])]),t[9]||(t[9]=(0,n.Fv)('<h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes"><span>Notes</span></a></h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing"><span>Pairing</span></a></h3><ol><li>If there are blinking LEDs wait until they don’t blink anymore — the device is in some mode we don’t want it to be.</li><li>Press both buttons of the top row (or sole row for Model 6735) until the LEDs gleam permanently. They will blink alternately at first but keep the buttons pressed until really both lights are constantly illuminated. Then release the buttons. The LEDs should still glow.</li><li>Now press both buttons again briefly. After about 1..2 seconds they will fade-glow; and your bridge should now instantly find it.</li></ol><h3 id="known-issues" tabindex="-1"><a class="header-anchor" href="#known-issues"><span>Known issues</span></a></h3><h4 id="bottom-row-of-4-gang-device-not-bound" tabindex="-1"><a class="header-anchor" href="#bottom-row-of-4-gang-device-not-bound"><span>Bottom row of 4-gang device not bound</span></a></h4><p>It may occur that the bottom row of the 4-gang device 6737 does not work like the other ones, i.e. does not emit the actions (see related discussion <a href="https://github.com/Koenkk/zigbee2mqtt/discussions/7009" target="_blank" rel="noopener noreferrer">#7009</a>). The reason is not fully understood yet, however it can be worked around by unbinding all four endpoints and re-binding them manually one after another:</p><table><thead><tr><th>Source EP</th><th>Destination</th><th>Destination EP</th><th>Clusters</th></tr></thead><tbody><tr><td><code>10</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td><code>LevelCtrl</code> (only for power supply or battery-operated wall switch)</td></tr><tr><td><code>11</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td><code>LevelCtrl</code></td></tr><tr><td><code>12</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td><code>LevelCtrl</code></td></tr><tr><td><code>13</code></td><td><code>Coordinator</code></td><td><code>1</code></td><td><code>LevelCtrl</code></td></tr></tbody></table><p>*[EP]: Endpoint</p><h4 id="single-endpoint-can-only-be-bound-to-one-destination" tabindex="-1"><a class="header-anchor" href="#single-endpoint-can-only-be-bound-to-one-destination"><span>Single endpoint can only be bound to one destination</span></a></h4><p>By default all bindings should be set up so the device reports button events through Zigbee2MQTT (except top row for dimmers/relays). You may also define custom bindings, but please keep in mind that each source endpoint may only be bound to one destination endpoint. So if you want to change the default binding for an endpoint (which corresponds to a button row) this is the recommended way:</p><ol><li>Unbind current destination of the particular endpoint</li><li>Create a ZigBee group for the binding partners</li><li>Bind the switch endpoint to the ZigBee group</li></ol><p>You should also use a ZigBee group even if you only want to bind to a single light! This way Zigbee2MQTT will continue to publish the button events, even without an explicit binding to the coordinator.</p><h4 id="duplicate-events-for-battery-operated-control-panel" tabindex="-1"><a class="header-anchor" href="#duplicate-events-for-battery-operated-control-panel"><span>Duplicate events for battery-operated control panel</span></a></h4><p>The battery-operated wall switch might be sending duplicate <code>action</code> events. In this case you may want to set up debouncing for the device:</p><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre><code><span class="line"><span class="token key atrule">&#39;0xd85devicemac&#39;</span><span class="token punctuation">:</span></span>\n<span class="line">  <span class="token key atrule">debounce</span><span class="token punctuation">:</span> <span class="token number">0.2</span></span>\n<span class="line">  <span class="token key atrule">debounce_ignore</span><span class="token punctuation">:</span></span>\n<span class="line">    <span class="token punctuation">-</span> <span class="token key atrule">action</span><span class="token punctuation">:</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This introduces a tiny lag after each button press, but you can get rid of the duplicate events if they are occuring in your environment.</p><h4 id="battery-operated-control-panel-is-very-hard-to-wake-up-for-configuration" tabindex="-1"><a class="header-anchor" href="#battery-operated-control-panel-is-very-hard-to-wake-up-for-configuration"><span>Battery-operated control panel is very hard to wake up for configuration</span></a></h4><p>The battery-operated devices are extremely power efficient. After pressing a button they go to deep sleep almost immediately. Therefore it can be quite hard to send a new configuration or to change bindings.</p><p>For the 2-row and 4-row devices the following procedure has proven to be a good option:</p><ol><li>Press both buttons of the top row until the LEDs gleam permanently.</li><li>Press a button in the bottom row at the same time as sending an <em>Unbind</em> request through Zigbee2MQTT for any row. This may take multiple attempts to succeed.</li><li>Important: Keep this endpoint/row unbound until you are done configuring the device!</li><li>Configure the endpoints/bindings according to your needs. For sending a new configuration you need to wake up the device again. Press the button in the bottom (unbound) row and this will keep the device awake for about 2 seconds.</li></ol><p>For single-row devices re-inserting the battery in the very right moment might be required when reconfiguring the switches.</p><h4 id="home-assistant-device-discovered-both-as-light-and-switch" tabindex="-1"><a class="header-anchor" href="#home-assistant-device-discovered-both-as-light-and-switch"><span>Home Assistant: device discovered both as light and switch</span></a></h4><p>If you are using Home Assistant auto-discovery you&#39;ll notice that the device is discovered both as a <code>light</code> entity and as a <code>switch</code> entity.</p><p><strong>Always use the <code>light</code> entity!</strong> The <code>switch</code> entity is only there for historic (compatibility) reasons and can be safely ignored. The main issue with the <code>switch</code> entity is that it does not update it&#39;s state when the Busch-Jaeger device is controlled directly through it&#39;s top-row rockers.</p><h3 id="action-values" tabindex="-1"><a class="header-anchor" href="#action-values"><span>Action values</span></a></h3><p>This device sends the following <code>action</code> values in its payload:</p><table><thead><tr><th>Left buttons</th><th>(long-hold-release)</th><th>Right buttons</th></tr></thead><tbody><tr><td><code>off_row_1</code><br><code>brightness_step_down_row_1</code></td><td><code>brightness_stop_row_1</code></td><td><code>on_row_1</code><br><code>brightness_step_up_row_1</code></td></tr><tr><td><code>off_row_2</code><br><code>brightness_step_down_row_2</code></td><td><code>brightness_stop_row_2</code></td><td><code>on_row_2</code><br><code>brightness_step_up_row_2</code></td></tr><tr><td><code>off_row_3</code><br><code>brightness_step_down_row_3</code></td><td><code>brightness_stop_row_3</code></td><td><code>on_row_3</code><br><code>brightness_step_up_row_3</code></td></tr><tr><td><code>off_row_4</code><br><code>brightness_step_down_row_4</code></td><td><code>brightness_stop_row_4</code></td><td><code>on_row_4</code><br><code>brightness_step_up_row_4</code></td></tr></tbody></table><p>Briefly pressing and releasing a button triggers the <code>off_row_X</code> resp. <code>on_row_X</code> actions for the given row, long-pressing triggers the <code>brightness_step_down_row_X</code>/<code>brightness_step_up_row_X</code> state respectively (after about one second). When releasing the button after a long-press action, a <code>brightness_stop_row_X</code> will be issued with no distinction between the left or right button. Note that the action payload may be different when you have set the <code>legacy</code> flag for the device (not recommended).</p><p>Depending on the device configuration not all actions may be sent.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options"><span>Options</span></a></h2>',30)),(0,n.Lk)("p",null,[(0,n.Lk)("em",null,[(0,n.bF)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,n.k6)((()=>t[7]||(t[7]=[(0,n.eW)("How to use device type specific configuration")]))),_:1})])]),t[10]||(t[10]=(0,n.Fv)('<ul><li><p><code>state_poll_interval</code>: This device does not support state reporting so it is polled instead. The default poll interval is 60 seconds, set to -1 to disable. The value must be a number with a minimum value of <code>-1</code></p></li><li><p><code>transition</code>: Controls the transition time (in seconds) of on/off, brightness, color temperature (if applicable) and color (if applicable) changes. Defaults to <code>0</code> (no transition). The value must be a number with a minimum value of <code>0</code></p></li><li><p><code>state_action</code>: State actions will also be published as &#39;action&#39; when true (default false). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes"><span>Exposes</span></a></h2><h3 id="light-relay-endpoint" tabindex="-1"><a class="header-anchor" href="#light-relay-endpoint"><span>Light (relay endpoint)</span></a></h3><p>This light supports the following features: <code>state</code>, <code>brightness</code>.</p><ul><li><code>state</code>: To control the state publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_relay&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_relay&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_relay&quot;: &quot;TOGGLE&quot;}</code>. To read the state send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_relay&quot;: &quot;&quot;}</code>.</li><li><code>brightness</code>: To control the brightness publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;brightness_relay&quot;: VALUE}</code> where <code>VALUE</code> is a number between <code>0</code> and <code>254</code>. To read the brightness send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;brightness_relay&quot;: &quot;&quot;}</code>.</li></ul><h4 id="moving-stepping" tabindex="-1"><a class="header-anchor" href="#moving-stepping"><span>Moving/stepping</span></a></h4><p>Instead of setting a value (e.g. brightness) directly it is also possible to:</p><ul><li>move: this will automatically move the value over time, to stop send value <code>stop</code> or <code>0</code>.</li><li>step: this will increment/decrement the current value by the given one.</li></ul><p>The direction of move and step can be either up or down, provide a negative value to move/step down, a positive value to move/step up. To do this send a payload like below to <code>zigbee2mqtt/FRIENDLY_NAME/set</code></p><p><strong>NOTE</strong>: brightness move/step will stop at the minimum brightness and won&#39;t turn on the light when it&#39;s off. In this case use <code>brightness_move_onoff</code>/<code>brightness_step_onoff</code></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token operator">-</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token comment">// Starts moving brightness down at 40 units per second</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_move&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token comment">// Stop moving brightness</span></span>\n<span class="line">  <span class="token string-property property">&quot;brightness_step&quot;</span><span class="token operator">:</span> <span class="token number">40</span> <span class="token comment">// Increases brightness by 40</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch"><span>Switch</span></a></h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum"><span>Action (enum)</span></a></h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>row_1_on</code>, <code>row_1_off</code>, <code>row_1_up</code>, <code>row_1_down</code>, <code>row_1_stop</code>, <code>row_2_on</code>, <code>row_2_off</code>, <code>row_2_up</code>, <code>row_2_down</code>, <code>row_2_stop</code>, <code>row_3_on</code>, <code>row_3_off</code>, <code>row_3_up</code>, <code>row_3_down</code>, <code>row_3_stop</code>, <code>row_4_on</code>, <code>row_4_off</code>, <code>row_4_up</code>, <code>row_4_down</code>, <code>row_4_stop</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric"><span>Linkquality (numeric)</span></a></h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17))])}]]),i=JSON.parse('{"path":"/devices/6735_6736_6737.html","title":"Busch-Jaeger 6735/6736/6737 control via MQTT","lang":"en-US","frontmatter":{"pageClass":"device-page","title":"Busch-Jaeger 6735/6736/6737 control via MQTT","description":"Integrate your Busch-Jaeger 6735/6736/6737 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor\'s bridge or gateway.","addedAt":"2020-01-14T19:34:25.000Z"},"headers":[{"level":2,"title":"Notes","slug":"notes","link":"#notes","children":[{"level":3,"title":"Pairing","slug":"pairing","link":"#pairing","children":[]},{"level":3,"title":"Known issues","slug":"known-issues","link":"#known-issues","children":[]},{"level":3,"title":"Action values","slug":"action-values","link":"#action-values","children":[]}]},{"level":2,"title":"Options","slug":"options","link":"#options","children":[]},{"level":2,"title":"Exposes","slug":"exposes","link":"#exposes","children":[{"level":3,"title":"Light (relay endpoint)","slug":"light-relay-endpoint","link":"#light-relay-endpoint","children":[]},{"level":3,"title":"Switch","slug":"switch","link":"#switch","children":[]},{"level":3,"title":"Action (enum)","slug":"action-enum","link":"#action-enum","children":[]},{"level":3,"title":"Linkquality (numeric)","slug":"linkquality-numeric","link":"#linkquality-numeric","children":[]}]}],"git":{"updatedTime":1732812030000},"filePathRelative":"devices/6735_6736_6737.md"}')}}]);