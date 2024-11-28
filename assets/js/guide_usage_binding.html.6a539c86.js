"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[14980],{56819:(e,t,o)=>{o.r(t),o.d(t,{comp:()=>d,data:()=>l});var i=o(6254);const n={},d=(0,o(39583).A)(n,[["render",function(e,t){const o=(0,i.g2)("RouteLink");return(0,i.uX)(),(0,i.CE)("div",null,[t[12]||(t[12]=(0,i.Fv)('<h1 id="binding" tabindex="-1"><a class="header-anchor" href="#binding"><span>Binding</span></a></h1><p>Zigbee supports binding, allowing devices to directly control each other without the intervention of Zigbee2MQTT or any home automation software.</p><h2 id="when-to-use-this" tabindex="-1"><a class="header-anchor" href="#when-to-use-this"><span>When to use this</span></a></h2><p>A use case for binding is, for example, the TRADFRI wireless dimmer. Binding the dimmer directly to a bulb or group has the following advantages:</p><ul><li><strong>Smoothness:</strong> Improves dimming feedback by directly controlling the bulb, reducing the need for MQTT/home automation software roundtrip.</li><li><strong>Reliability:</strong> Works even when home automation software, Zigbee2MQTT, or the coordinator is down.</li></ul><h2 id="commands" tabindex="-1"><a class="header-anchor" href="#commands"><span>Commands</span></a></h2><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>All commands below can also be executed via the frontend, click on your device and go to the <em>Bind</em> tab.</p></div><p>Binding can be configured by using either <code>zigbee2mqtt/bridge/request/device/bind</code> to bind and <code>zigbee2mqtt/bridge/request/device/unbind</code> to unbind. The payload should be <code>{&quot;from&quot;: SOURCE, &quot;to&quot;: TARGET}</code> where <code>SOURCE</code> and <code>TARGET</code> can be the <code>friendly_name</code> of a group or device. Example request payload: <code>{&quot;from&quot;: &quot;my_remote&quot;, &quot;to&quot;: &quot;my_bulb&quot;}</code>, example response payload: <code>{&quot;data&quot;:{&quot;from&quot;:&quot;my_remote&quot;,&quot;to&quot;:&quot;my_bulb&quot;,&quot;clusters&quot;:[&quot;genScenes&quot;,&quot;genOnOff&quot;,&quot;genLevelCtrl&quot;],&quot;failed&quot;:[]},&quot;status&quot;:&quot;ok&quot;}</code>. The <code>clusters</code> in the response indicate the bound/unbound clusters, <code>failed</code> indicates any failed to bind/unbind clusters. In case all clusters fail to bind the <code>status</code> is set to <code>error</code>.</p><p>By default all supported clusters are bound. To restrict which clusters are being bound/unbound add <code>clusters</code> to the request payload e.g. <code>{&quot;from&quot;: &quot;my_remote&quot;, &quot;to&quot;: &quot;my_bulb&quot;, &quot;clusters&quot;: [&quot;genOnOff&quot;]}</code>. Possible clusters are: <code>genScenes</code>, <code>genOnOff</code>, <code>genLevelCtrl</code>, <code>lightingColorCtrl</code> and <code>closuresWindowCovering</code>.</p><p>When binding reporting is setup on the target device. This makes the target device update their state when it is changed by the source of the bind. When unbinding this reporting is removed again, if you want to skip this use <code>skip_disable_reporting</code> (e.g. <code>{&quot;from&quot;: &quot;my_remote&quot;, &quot;to&quot;: &quot;my_bulb&quot;, &quot;skip_disable_reporting&quot;: true}</code>).</p><p>When binding/unbinding of a battery powered device fails, this is most of the time caused because the device is sleeping. This can be fixed by waking it up right before sending the MQTT message. To wake it up press a button on the remote.</p><p>In the above example, the TRADFRI wireless dimmer would be the <code>SOURCE</code> device and the bulb the <code>TARGET</code> device. When using a group as target, using the group&#39;s friendly name is mandatory, group ID will not work.</p><h3 id="binding-specific-endpoint" tabindex="-1"><a class="header-anchor" href="#binding-specific-endpoint"><span>Binding specific endpoint</span></a></h3><p><strong>This is not applicable for most users</strong></p><p>By default, the first endpoint is taken. In case your device has multiple endpoints, e.g. <code>left</code> and <code>right</code>. You can specify <code>SOURCE</code> or <code>TARGET</code> as e.g. <code>my_switch/right</code> to bind/unbind the <code>right</code> endpoint.</p><p>It is also possible to specify the endpoints in numeric, use e.g. <code>my_switch/3</code> for the <code>SOURCE</code> or <code>TARGET</code>.</p><h3 id="binding-a-remote-to-a-group" tabindex="-1"><a class="header-anchor" href="#binding-a-remote-to-a-group"><span>Binding a remote to a group</span></a></h3><p>Binding a remote to a group allows a remote to directly control a group of devices without intervention of Zigbee2MQTT.</p><p>When we for example have an IKEA E1743 remote called <code>my_remote</code> and two bulbs called <code>bulb_1</code> and <code>bulb_2</code>, we can control the 2 bulbs with the remote by putting them in the same group and binding the remote to it.</p><p>To do this execute the following steps:</p>',20)),(0,i.Lk)("ol",null,[(0,i.Lk)("li",null,[t[1]||(t[1]=(0,i.eW)("Create a new group in ")),t[2]||(t[2]=(0,i.Lk)("code",null,"configuration.yaml",-1)),t[3]||(t[3]=(0,i.eW)(" and give it a ")),t[4]||(t[4]=(0,i.Lk)("code",null,"friendly_name",-1)),t[5]||(t[5]=(0,i.eW)(" (see ")),(0,i.bF)(o,{to:"/guide/usage/groups.html"},{default:(0,i.k6)((()=>t[0]||(t[0]=[(0,i.eW)("Groups")]))),_:1}),t[6]||(t[6]=(0,i.eW)("). In this example we will set the ")),t[7]||(t[7]=(0,i.Lk)("code",null,"friendly_name",-1)),t[8]||(t[8]=(0,i.eW)(" to ")),t[9]||(t[9]=(0,i.Lk)("code",null,"my_group",-1)),t[10]||(t[10]=(0,i.eW)("."))]),t[11]||(t[11]=(0,i.Fv)("<li>Add the 2 bulbs to the group by sending the following two MQTT messages. <ul><li><code>zigbee2mqtt/bridge/request/group/members/add</code> with payload <code>{&quot;group&quot;:&quot;my_group&quot;,&quot;device&quot;:&quot;bulb_1&quot;}</code></li><li><code>zigbee2mqtt/bridge/request/group/members/add</code> with payload <code>{&quot;group&quot;:&quot;my_group&quot;,&quot;device&quot;:&quot;bulb_2&quot;}</code></li></ul></li><li>Bind the remote to the group by sending the following MQTT message. <ul><li><code>zigbee2mqtt/bridge/request/device/bind</code> with payload <code>{&quot;from&quot;: &quot;my_remote&quot;, &quot;to&quot;: &quot;my_group&quot;}</code></li></ul></li>",2))]),t[13]||(t[13]=(0,i.Fv)('<h2 id="devices" tabindex="-1"><a class="header-anchor" href="#devices"><span>Devices</span></a></h2><p>Not all devices support this, it basically comes down to the Zigbee implementation of the device itself. Check the device specific page for more info (can be reached via the supported devices page)</p><h2 id="state-changes" tabindex="-1"><a class="header-anchor" href="#state-changes"><span>State changes</span></a></h2><p>When a devices is being bound to, Zigbee2MQTT will automatically configure reporting for these devices. This will make the device report state changes when the state is changed through a bound device.</p><p>In order for this feature to work, the device has to support it. As devices from the same manufacturer (mostly) have the same features the table below might help to find out if your device supports it.</p><table><thead><tr><th style="text-align:left;">Brand</th><th style="text-align:center;">On/Off</th><th style="text-align:center;">Brightness</th><th style="text-align:center;">Color</th><th style="text-align:center;">Color temperature</th><th style="text-align:center;">Color Mode</th></tr></thead><tbody><tr><td style="text-align:left;">Philips Hue</td><td style="text-align:center;">N(1)</td><td style="text-align:center;">N(2)</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">Philips Hue (BT)</td><td style="text-align:center;">Y</td><td style="text-align:center;">Y</td><td style="text-align:center;">Y</td><td style="text-align:center;">Y</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">Trådfri(3)</td><td style="text-align:center;">Y</td><td style="text-align:center;">Y</td><td style="text-align:center;">Y</td><td style="text-align:center;">N</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">Innr</td><td style="text-align:center;">Y</td><td style="text-align:center;">Y</td><td style="text-align:center;">Y</td><td style="text-align:center;">Y</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">GLEDOPTO</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td></tr><tr><td style="text-align:left;">OSRAM</td><td style="text-align:center;">Y</td><td style="text-align:center;">Y</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">Y</td></tr><tr><td style="text-align:left;">Müller Licht</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">N</td><td style="text-align:center;">Y</td></tr></tbody></table><ol><li>Bulbs on old firmware (date 20170908 or older) do report On/Off</li><li>Zigbee2MQTT will manual poll for change if a binding updates the bulb.</li><li>The color/brightness of a Trådfri bulb can be changed while the state=off, it also reports back the change.</li></ol><p>If your devices do <strong>not</strong> support reporting put the device in a group and bind the remote to the group instead of directly to the device. This will make Zigbee2MQTT poll the device for updates when the bound remote controls the device. To minimize traffic this has not been enabled for all devices. If this does not work please create an issue for it <a href="https://github.com/Koenkk/zigbee2mqtt/issues" target="_blank" rel="noopener noreferrer">here</a>.</p><p>Any manual setup reportings of the clusters <code>genOnOff</code>, <code>genLevelCtrl</code> <code>lightingColorCtrl</code> and <code>closuresWindowCovering</code> will be removed if there are no binds to the device or group a device is in when unbinding. You have to setup these reportings again.</p>',9))])}]]),l=JSON.parse('{"path":"/guide/usage/binding.html","title":"Binding","lang":"en-US","frontmatter":{"pageClass":"content-page","sidebarDepth":1},"headers":[{"level":2,"title":"When to use this","slug":"when-to-use-this","link":"#when-to-use-this","children":[]},{"level":2,"title":"Commands","slug":"commands","link":"#commands","children":[{"level":3,"title":"Binding specific endpoint","slug":"binding-specific-endpoint","link":"#binding-specific-endpoint","children":[]},{"level":3,"title":"Binding a remote to a group","slug":"binding-a-remote-to-a-group","link":"#binding-a-remote-to-a-group","children":[]}]},{"level":2,"title":"Devices","slug":"devices","link":"#devices","children":[]},{"level":2,"title":"State changes","slug":"state-changes","link":"#state-changes","children":[]}],"git":{"updatedTime":1732812030000},"filePathRelative":"guide/usage/binding.md"}')}}]);