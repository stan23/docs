"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[6968],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),u=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=u(e.components);return a.createElement(o.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,h=c["".concat(o,".").concat(m)]||c[m]||p[m]||l;return t?a.createElement(h,i(i({ref:n},d),{},{components:t})):a.createElement(h,i({ref:n},d))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=c;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<l;u++)i[u]=t[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),r=t(67294),l=t(72389),i=t(63725),s=t(86010),o="tabItem_LplD";function u(e){var n,t,l,u=e.lazy,d=e.block,p=e.defaultValue,c=e.values,m=e.groupId,h=e.className,k=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=c?c:k.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),g=(0,i.lx)(v,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var z=null===p?p:null!=(n=null!=p?p:null==(t=k.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=k[0])?void 0:l.props.value;if(null!==z&&!v.some((function(e){return e.value===z})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+z+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var f=(0,i.UB)(),y=f.tabGroupChoices,w=f.setTabGroupChoices,O=(0,r.useState)(z),b=O[0],N=O[1],B=[],W=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=y[m];null!=E&&E!==b&&v.some((function(e){return e.value===E}))&&N(E)}var F=function(e){var n=e.currentTarget,t=B.indexOf(n),a=v[t].value;a!==b&&(W(n),N(a),null!=m&&w(m,a))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=B.indexOf(e.currentTarget)+1;t=B[a]||B[0];break;case"ArrowLeft":var r=B.indexOf(e.currentTarget)-1;t=B[r]||B[B.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":d},h)},v.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:b===n?0:-1,"aria-selected":b===n,key:n,ref:function(e){return B.push(e)},onKeyDown:P,onFocus:F,onClick:F},l,{className:(0,s.Z)("tabs__item",o,null==l?void 0:l.className,{"tabs__item--active":b===n})}),null!=t?t:n)}))),u?(0,r.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==b})}))))}function d(e){var n=(0,l.Z)();return r.createElement(u,(0,a.Z)({key:String(n)},e))}},24529:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return u},default:function(){return k},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return c}});var a,r=t(87462),l=t(63366),i=(t(67294),t(3905)),s=(t(9877),t(58215),["components"]),o={sidebar_position:3},u="Fahrzeuge",d={unversionedId:"devices/vehicles",id:"devices/vehicles",title:"Fahrzeuge",description:"Um die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen, und die meisten Wallboxen diesen nicht kennen, kann evcc direkt mit dem Fahrzeug \xfcber den Fahrzeughersteller kommunizieren.",source:"@site/docs/devices/vehicles.mdx",sourceDirName:"devices",slug:"/devices/vehicles",permalink:"/docs/devices/vehicles",editUrl:"https://github.com/evcc-io/docs/tree/main/docs/devices/vehicles.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Hausinstallation",permalink:"/docs/devices/meters"},next:{title:"\xdcbersicht",permalink:"/docs/reference/overview"}},p={},c=[{value:"Audi",id:"audi",level:2},{value:"andere",id:"andere",level:3},{value:"e-tron",id:"e-tron",level:3},{value:"BMW",id:"bmw",level:2},{value:"Citroen",id:"citroen",level:2},{value:"Dacia",id:"dacia",level:2},{value:"DS",id:"ds",level:2},{value:"Fiat",id:"fiat",level:2},{value:"Ford",id:"ford",level:2},{value:"Hyundai Bluelink",id:"hyundai-bluelink",level:2},{value:"Jaguar",id:"jaguar",level:2},{value:"Kia Bluelink",id:"kia-bluelink",level:2},{value:"Land Rover",id:"land-rover",level:2},{value:"Mini",id:"mini",level:2},{value:"Nissan",id:"nissan",level:2},{value:"Leaf",id:"leaf",level:3},{value:"Leaf (pre 2019)",id:"leaf-pre-2019",level:3},{value:"NIU E-Scooter",id:"niu-e-scooter",level:2},{value:"Opel",id:"opel",level:2},{value:"Peugeot",id:"peugeot",level:2},{value:"Porsche",id:"porsche",level:2},{value:"Renault",id:"renault",level:2},{value:"Seat",id:"seat",level:2},{value:"Cupra",id:"cupra",level:3},{value:"Cupra Born",id:"cupra-born",level:3},{value:"Mii",id:"mii",level:3},{value:"My Cupra",id:"my-cupra",level:3},{value:"Skoda",id:"skoda",level:2},{value:"Citigo",id:"citigo",level:3},{value:"Enyaq",id:"enyaq",level:3},{value:"Smart EQ",id:"smart-eq",level:2},{value:"Tesla",id:"tesla",level:2},{value:"Volkswagen",id:"volkswagen",level:2},{value:"We Connect (legacy)",id:"we-connect-legacy",level:3},{value:"We Connect ID",id:"we-connect-id",level:3},{value:"Volvo",id:"volvo",level:2},{value:"Generische Unterst\xfctzung",id:"generische-unterst\xfctzung",level:2},{value:"manuell",id:"manuell",level:3},{value:"evNotify",id:"evnotify",level:3},{value:"Open Vehicle Monitoring System",id:"open-vehicle-monitoring-system",level:3},{value:"Tronity \ud83d\udc9a",id:"tronity-",level:3}],m=(a="SponsorshipRequired",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),h={toc:c};function k(e){var n=e.components,t=(0,l.Z)(e,s);return(0,i.kt)("wrapper",(0,r.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"fahrzeuge"},"Fahrzeuge"),(0,i.kt)("p",null,"Um die Ladung auf einen bestimmten Ladestand (SoC) zu begrenzen, und die meisten Wallboxen diesen nicht kennen, kann evcc direkt mit dem Fahrzeug \xfcber den Fahrzeughersteller kommunizieren."),(0,i.kt)("p",null,"In der Konfigurationsdatei gibt es hierzu den folgenden Bereich:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicle:\n  - name: ev\n    type: ...\n")),(0,i.kt)("p",null,"Auf dieser Seite findest du die Konfigurationen f\xfcr alle von evcc unterst\xfctzten Fahrzeuge.\nNachdem du das Code-Beispiel f\xfcr dein Fahrzeug angepasst und in die ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc.yaml")," \xfcbernommen hast, kannst du die Verbindung mit dem Befehl ",(0,i.kt)("inlineCode",{parentName:"p"},"evcc vehicle")," testen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ ./evcc vehicle\n\nSoC:           57%\nCharge status: B\nCharged:       4.7kWh\nCapacity:      77kWh\nRange:         280km\nOdometer:      4131km\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Die Qualit\xe4t und Verf\xfcgbarkeit der Fahrzeugschnittstellen variiert von Hersteller zu Hersteller. Solltest du anhaltende Probleme mit dem aktualisieren deiner Fahrzeugdaten haben melde dich bitte in den ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/evcc-io/evcc/discussions"},"GitHub Discussions"),"."))),(0,i.kt)("h2",{id:"audi"},"Audi"),(0,i.kt)("h3",{id:"andere"},"andere"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: audi\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: WAUZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 60 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"e-tron"},"e-tron"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: etron\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: WAUZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 60 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"bmw"},"BMW"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: bmw\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: WBMW... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 65 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"citroen"},"Citroen"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: citroen\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"dacia"},"Dacia"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: dacia\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 27.4 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"ds"},"DS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ds\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"fiat"},"Fiat"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: fiat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: ZFAE... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 42 # Akku-Kapazit\xe4t in kWh # Optional\n    pin: # Optional \n")),(0,i.kt)("h2",{id:"ford"},"Ford"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ford\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: WF0FXX... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"hyundai-bluelink"},"Hyundai Bluelink"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: hyundai\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 64 # Akku-Kapazit\xe4t in kWh # Optional\n    language: en # 'de' f\xfcr Deutsch und 'en' f\xfcr Englisch # Optional \n")),(0,i.kt)("h2",{id:"jaguar"},"Jaguar"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 41.5 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"kia-bluelink"},"Kia Bluelink"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: kia\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 64 # Akku-Kapazit\xe4t in kWh # Optional\n    language: en # 'de' f\xfcr Deutsch und 'en' f\xfcr Englisch # Optional \n")),(0,i.kt)("h2",{id:"land-rover"},"Land Rover"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: jaguar-landrover\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 41.5 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"mini"},"Mini"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: mini\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: WBMW... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 32 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"nissan"},"Nissan"),(0,i.kt)("h3",{id:"leaf"},"Leaf"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: nissan\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 60 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"leaf-pre-2019"},"Leaf (pre 2019)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: carwings\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"niu-e-scooter"},"NIU E-Scooter"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: niu-e-scooter\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    serial: \n")),(0,i.kt)("h2",{id:"opel"},"Opel"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: opel\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: WP0... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"peugeot"},"Peugeot"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: peugeot\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"porsche"},"Porsche"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: porsche\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 83.4 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"renault"},"Renault"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: renault\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: WREN... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 60 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"seat"},"Seat"),(0,i.kt)("h3",{id:"cupra"},"Cupra"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: seat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"cupra-born"},"Cupra Born"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: cupra\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"mii"},"Mii"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: seat\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"my-cupra"},"My Cupra"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: cupra\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"skoda"},"Skoda"),(0,i.kt)("h3",{id:"citigo"},"Citigo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: skoda\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"enyaq"},"Enyaq"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: enyaq\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"smart-eq"},"Smart EQ"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: smart\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 17.6 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"tesla"},"Tesla"),(0,i.kt)("p",null,"Es wird ein ",(0,i.kt)("inlineCode",{parentName:"p"},"access")," und ein ",(0,i.kt)("inlineCode",{parentName:"p"},"refresh")," Token f\xfcr die Kommunikation mit der Tesla API erstellt werden."),(0,i.kt)("p",null,"Folgende Apps erm\xf6glichen das Erstellen von den beiden Tokens:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://apps.apple.com/us/app/auth-app-for-tesla/id1552058613#?platform=iphone"},"Auth app for Tesla (iOS)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://play.google.com/store/apps/details?id=net.leveugle.teslatokens"},"Tesla Tokens (Android)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/adriankumpf/tesla_auth"},"Tesla Auth (macOS, Linux)"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: tesla\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    accessToken: # Siehe https://docs.evcc.io/docs/devices/vehicles#tesla\n    refreshToken: # Siehe https://docs.evcc.io/docs/devices/vehicles#tesla\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 90 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"volkswagen"},"Volkswagen"),(0,i.kt)("h3",{id:"we-connect-legacy"},"We Connect (legacy)"),(0,i.kt)("p",null,"\xe4ltere Modelle wie e-Up, e-Golf, etc."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: vw\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: WVWZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"we-connect-id"},"We Connect ID"),(0,i.kt)("p",null,"ID.3, ID.4 (funktioniert auch f\xfcr e-Golf, e-Up)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: id\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: WVWZZZ... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"volvo"},"Volvo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: volvo\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 50 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h2",{id:"generische-unterst\xfctzung"},"Generische Unterst\xfctzung"),(0,i.kt)("h3",{id:"manuell"},"manuell"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: custom\n    title: Mein Auto # display name for UI\n    capacity: 50 # byttery capacity (kWh)\n    soc: # battery soc (%)\n      source: # plugin type\n      # ...\n    status: # optional charge status (A..F)\n      source: # plugin type\n      # ...\n    range: # optional electric range (km)\n      source: # plugin type\n      # ...\n")),(0,i.kt)("h3",{id:""}),(0,i.kt)("h3",{id:"evnotify"},"evNotify"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: evnotify\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    akey:\n    token:\n    capacity: 64 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"open-vehicle-monitoring-system"},"Open Vehicle Monitoring System"),(0,i.kt)("p",null,"Unterst\xfctzung f\xfcr alle Fahrzeuge via ODB2 Adapter im Fahrzeug. Mehr Infos bei ",(0,i.kt)("a",{parentName:"p",href:"http://api.openvehicles.com/"},"Open Vehicle Monitoring System"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: ovms\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    user: # Benutzername um auf das Ger\xe4t zuzugreifen\n    password: # Passwort des Benutzerkontos\n    vehicleid:\n    capacity: 12 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)("h3",{id:"tronity-"},"Tronity \ud83d\udc9a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"vehicles:\n  - name: my_car\n    type: template\n    template: tronity\n    title: # Wird in der Benutzeroberfl\xe4che angezeigt # Optional\n    userid:\n    secret:\n    vin: W... # Erforderlich, wenn mehrere Fahrzeuge des Herstellers vorhanden sind # Optional\n    capacity: 10 # Akku-Kapazit\xe4t in kWh # Optional \n")),(0,i.kt)(m,{mdxType:"SponsorshipRequired"}))}k.isMDXComponent=!0}}]);