(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[26],{6117:function(n,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/dashboard",function(){return r(5214)}])},5214:function(n,e,r){"use strict";r.r(e),r.d(e,{default:function(){return bn}});var t=r(5893),o=r(9008),a=r.n(o),c=r(2734),i=r(7357),s=r(1796),l=r(5697),d=r.n(l),p=r(7294),h=r(6658);function u(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function x(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var f=function(n){n.className;var e=n.children,r=x(n,["className","children"]),o=(0,c.Z)();return(0,t.jsx)(h.$B,function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){u(n,e,r[e])}))}return n}({autoHide:!0,universal:!0,renderThumbVertical:function(){return(0,t.jsx)(i.Z,{sx:{width:5,background:"".concat(o.colors.alpha.black[10]),borderRadius:"".concat(o.general.borderRadiusLg),transition:"".concat(o.transitions.create(["background"])),"&:hover":{background:"".concat(o.colors.alpha.black[30])}}})}},r,{children:e}))};f.propTypes={children:d().node,className:d().string};var g=f,m=r(131),b=r(948),j=r(1519),v=r(3321),Z=r(7533),y=r(1163),w=r(8462),k=r(891),O=r(5438),P=r(1664),S=r.n(P),M=r(4870),C=r(5972),W=r(6971),N=r(4879),R=(0,b.ZP)(i.Z)((function(n){var e=n.theme;return"\n  .MuiList-root {\n    padding: ".concat(e.spacing(1),";\n\n    & > .MuiList-root {\n      padding: 0 ").concat(e.spacing(0)," ").concat(e.spacing(1),";\n    }\n  }\n\n    .MuiListSubheader-root {\n      text-transform: uppercase;\n      font-weight: bold;\n      font-size: ").concat(e.typography.pxToRem(12),";\n      color: ").concat(e.colors.alpha.trueWhite[50],";\n      padding: ").concat(e.spacing(0,2.5),";\n      line-height: 1.4;\n    }\n")})),I=(0,b.ZP)(i.Z)((function(n){var e=n.theme;return"\n    .MuiList-root {\n\n      .MuiListItem-root {\n        padding: 1px 0;\n\n        .MuiBadge-root {\n          position: absolute;\n          right: ".concat(e.spacing(3.2),";\n\n          .MuiBadge-standard {\n            background: ").concat(e.colors.primary.main,";\n            font-size: ").concat(e.typography.pxToRem(10),";\n            font-weight: bold;\n            text-transform: uppercase;\n            color: ").concat(e.palette.primary.contrastText,";\n          }\n        }\n    \n        .MuiButton-root {\n          display: flex;\n          color: ").concat(e.colors.alpha.trueWhite[70],";\n          background-color: transparent;\n          width: 100%;\n          justify-content: flex-start;\n          padding: ").concat(e.spacing(1.2,3),";\n\n          .MuiButton-startIcon,\n          .MuiButton-endIcon {\n            transition: ").concat(e.transitions.create(["color"]),";\n\n            .MuiSvgIcon-root {\n              font-size: inherit;\n              transition: none;\n            }\n          }\n\n          .MuiButton-startIcon {\n            color: ").concat(e.colors.alpha.trueWhite[30],";\n            font-size: ").concat(e.typography.pxToRem(20),";\n            margin-right: ").concat(e.spacing(1),";\n          }\n          \n          .MuiButton-endIcon {\n            color: ").concat(e.colors.alpha.trueWhite[50],";\n            margin-left: auto;\n            opacity: .8;\n            font-size: ").concat(e.typography.pxToRem(20),";\n          }\n\n          &.active,\n          &:hover {\n            background-color: ").concat((0,s.Fq)(e.colors.alpha.trueWhite[100],.06),";\n            color: ").concat(e.colors.alpha.trueWhite[100],";\n\n            .MuiButton-startIcon,\n            .MuiButton-endIcon {\n              color: ").concat(e.colors.alpha.trueWhite[100],";\n            }\n          }\n        }\n\n        &.Mui-children {\n          flex-direction: column;\n\n          .MuiBadge-root {\n            position: absolute;\n            right: ").concat(e.spacing(7),";\n          }\n        }\n\n        .MuiCollapse-root {\n          width: 100%;\n\n          .MuiList-root {\n            padding: ").concat(e.spacing(1,0),";\n          }\n\n          .MuiListItem-root {\n            padding: 1px 0;\n\n            .MuiButton-root {\n              padding: ").concat(e.spacing(.8,3),";\n\n              .MuiBadge-root {\n                right: ").concat(e.spacing(3.2),";\n              }\n\n              &:before {\n                content: ' ';\n                background: ").concat(e.colors.alpha.trueWhite[100],";\n                opacity: 0;\n                transition: ").concat(e.transitions.create(["transform","opacity"]),";\n                width: 6px;\n                height: 6px;\n                transform: scale(0);\n                transform-origin: center;\n                border-radius: 20px;\n                margin-right: ").concat(e.spacing(1.8),";\n              }\n\n              &.active,\n              &:hover {\n\n                &:before {\n                  transform: scale(1);\n                  opacity: 1;\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n")}));var T=function(){var n=(0,p.useContext)(m.l).closeSidebar,e=(0,y.useRouter)().pathname;return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(R,{children:[(0,t.jsx)(w.Z,{component:"div",children:(0,t.jsx)(I,{children:(0,t.jsx)(w.Z,{component:"div",children:(0,t.jsx)(k.ZP,{component:"div",children:(0,t.jsx)(S(),{href:"/dashboard",passHref:!0,children:(0,t.jsx)(v.Z,{className:'="/'===e?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,t.jsx)(M.Z,{}),children:"Overview"})})})})})}),(0,t.jsx)(w.Z,{component:"div",subheader:(0,t.jsx)(O.Z,{component:"div",disableSticky:!0,children:"Management"}),children:(0,t.jsx)(I,{children:(0,t.jsxs)(w.Z,{component:"div",children:[(0,t.jsx)(k.ZP,{component:"div",children:(0,t.jsx)(S(),{href:"/accounts",passHref:!0,children:(0,t.jsx)(v.Z,{className:'"/accounts'===e?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,t.jsx)(C.Z,{}),children:"Accounts"})})}),(0,t.jsx)(k.ZP,{component:"div",children:(0,t.jsx)(S(),{href:"/users",passHref:!0,children:(0,t.jsx)(v.Z,{className:"/users"===e?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,t.jsx)(W.Z,{}),children:"Users"})})})]})})}),(0,t.jsx)(w.Z,{component:"div",subheader:(0,t.jsx)(O.Z,{component:"div",disableSticky:!0,children:"Accounts"}),children:(0,t.jsx)(I,{children:(0,t.jsx)(w.Z,{component:"div",children:(0,t.jsx)(k.ZP,{component:"div",children:(0,t.jsx)(S(),{href:"/management/profile",passHref:!0,children:(0,t.jsx)(v.Z,{className:"/management/profile"===e?"active":"",disableRipple:!0,component:"a",onClick:n,startIcon:(0,t.jsx)(N.Z,{}),children:"User Profile"})})})})})})]})})},z=r(4757),B=(0,b.ZP)(i.Z)((function(n){var e=n.theme;return"\n        width: ".concat(e.sidebar.width,";\n        min-width: ").concat(e.sidebar.width,";\n        color: ").concat(e.colors.alpha.trueWhite[70],";\n        position: relative;\n        z-index: 7;\n        height: 100%;\n        padding-bottom: 68px;\n")}));var F=function(){var n=(0,p.useContext)(m.l),e=n.sidebarToggle,r=n.toggleSidebar,o=(0,c.Z)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(B,{sx:{display:{xs:"none",lg:"inline-block"},position:"fixed",left:0,top:0,background:"dark"===o.palette.mode?(0,s.Fq)((0,s.$n)(o.header.background,.1),.5):(0,s._j)(o.colors.alpha.black[100],.5),boxShadow:"dark"===o.palette.mode?o.sidebar.boxShadow:"none"},children:[(0,t.jsxs)(g,{children:[(0,t.jsx)(i.Z,{mt:3,children:(0,t.jsx)(i.Z,{mx:2,sx:{width:52},children:(0,t.jsx)(z.Z,{})})}),(0,t.jsx)(j.Z,{sx:{mt:o.spacing(3),mx:o.spacing(2),background:o.colors.alpha.trueWhite[10]}}),(0,t.jsx)(T,{})]}),(0,t.jsx)(j.Z,{sx:{background:o.colors.alpha.trueWhite[10]}}),(0,t.jsx)(i.Z,{p:2,children:(0,t.jsx)(v.Z,{href:"https://bloomui.com",target:"_blank",rel:"noopener noreferrer",variant:"contained",color:"success",size:"small",fullWidth:!0,children:"Upgrade to PRO"})})]}),(0,t.jsx)(Z.ZP,{sx:{boxShadow:"".concat(o.sidebar.boxShadow)},anchor:"rtl"===o.direction?"right":"left",open:e,onClose:function(){return r()},variant:"temporary",elevation:9,children:(0,t.jsx)(B,{sx:{background:"dark"===o.palette.mode?o.colors.alpha.white[100]:(0,s._j)(o.colors.alpha.black[100],.5)},children:(0,t.jsxs)(g,{children:[(0,t.jsx)(i.Z,{mt:3,children:(0,t.jsx)(i.Z,{mx:2,sx:{width:52},children:(0,t.jsx)(z.Z,{})})}),(0,t.jsx)(j.Z,{sx:{mt:o.spacing(3),mx:o.spacing(2),background:o.colors.alpha.trueWhite[10]}}),(0,t.jsx)(T,{})]})})})]})},_=r(6447),E=r(2989),L=r(3946),q=r(5196),A=r(3419);var H=function(){return(0,t.jsx)(i.Z,{sx:{mr:1}})},D=r(5861),$=r(9661),U=r(6853),X=r(4564),V=r(9953),G=r(8847),J=r(9126),K=r(6754),Q=r(2321),Y=r(7227),nn=(0,b.ZP)(v.Z)((function(n){var e=n.theme;return"\n        padding-left: ".concat(e.spacing(1),";\n        padding-right: ").concat(e.spacing(1),";\n")})),en=(0,b.ZP)(i.Z)((function(n){var e=n.theme;return"\n        background: ".concat(e.colors.alpha.black[5],";\n        padding: ").concat(e.spacing(2),";\n")})),rn=(0,b.ZP)(i.Z)((function(n){var e=n.theme;return"\n        text-align: left;\n        padding-left: ".concat(e.spacing(1),";\n")})),tn=(0,b.ZP)(D.Z)((function(n){var e=n.theme;return"\n        font-weight: ".concat(e.typography.fontWeightBold,";\n        color: ").concat(e.palette.secondary.main,";\n        display: block;\n")})),on=(0,b.ZP)(D.Z)((function(n){var e=n.theme;return"\n        color: ".concat((0,s.$n)(e.palette.secondary.main,.5),"\n")}));var an=function(){var n="Catherine Pike",e="/static/images/avatars/1.jpg",r="Project Manager",o=(0,p.useRef)(null),a=(0,p.useState)(!1),c=a[0],s=a[1];return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(nn,{color:"secondary",ref:o,onClick:function(){s(!0)},children:[(0,t.jsx)($.Z,{variant:"rounded",alt:n,src:e}),(0,t.jsx)(U.Z,{mdDown:!0,children:(0,t.jsxs)(rn,{children:[(0,t.jsx)(tn,{variant:"body1",children:n}),(0,t.jsx)(on,{variant:"body2",children:r})]})}),(0,t.jsx)(U.Z,{smDown:!0,children:(0,t.jsx)(J.Z,{sx:{ml:1}})})]}),(0,t.jsxs)(X.ZP,{anchorEl:o.current,onClose:function(){s(!1)},open:c,anchorOrigin:{vertical:"top",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:[(0,t.jsxs)(en,{sx:{minWidth:210},display:"flex",children:[(0,t.jsx)($.Z,{variant:"rounded",alt:n,src:e}),(0,t.jsxs)(rn,{children:[(0,t.jsx)(tn,{variant:"body1",children:n}),(0,t.jsx)(on,{variant:"body2",children:r})]})]}),(0,t.jsx)(j.Z,{sx:{mb:0}}),(0,t.jsxs)(w.Z,{sx:{p:1},component:"nav",children:[(0,t.jsx)(S(),{href:"/management/profile",passHref:!0,children:(0,t.jsxs)(k.ZP,{button:!0,children:[(0,t.jsx)(K.Z,{fontSize:"small"}),(0,t.jsx)(V.Z,{primary:"My Profile"})]})}),(0,t.jsx)(S(),{href:"/applications/messenger",passHref:!0,children:(0,t.jsxs)(k.ZP,{button:!0,children:[(0,t.jsx)(G.Z,{fontSize:"small"}),(0,t.jsx)(V.Z,{primary:"Messenger"})]})}),(0,t.jsx)(S(),{href:"/management/profile/settings",passHref:!0,children:(0,t.jsxs)(k.ZP,{button:!0,children:[(0,t.jsx)(Y.Z,{fontSize:"small"}),(0,t.jsx)(V.Z,{primary:"Account Settings"})]})})]}),(0,t.jsx)(j.Z,{}),(0,t.jsx)(i.Z,{sx:{m:1},children:(0,t.jsxs)(v.Z,{color:"primary",fullWidth:!0,children:[(0,t.jsx)(Q.Z,{sx:{mr:1}}),"Sign out"]})})]})]})},cn=(0,b.ZP)(i.Z)((function(n){var e=n.theme;return"\n        height: ".concat(e.header.height,";\n        color: ").concat(e.header.textColor,";\n        padding: ").concat(e.spacing(0,2),";\n        right: 0;\n        z-index: 6;\n        background-color: ").concat((0,s.Fq)(e.header.background,.95),";\n        backdrop-filter: blur(3px);\n        position: fixed;\n        justify-content: space-between;\n        width: 100%;\n        @media (min-width: ").concat(e.breakpoints.values.lg,"px) {\n            left: ").concat(e.sidebar.width,";\n            width: auto;\n        }\n")}));var sn=function(){var n=(0,p.useContext)(m.l),e=n.sidebarToggle,r=n.toggleSidebar,o=(0,c.Z)();return(0,t.jsxs)(cn,{display:"flex",alignItems:"center",sx:{boxShadow:"dark"===o.palette.mode?"0 1px 0 ".concat((0,s.Fq)((0,s.$n)(o.colors.primary.main,.7),.15),", 0px 2px 8px -3px rgba(0, 0, 0, 0.2), 0px 5px 22px -4px rgba(0, 0, 0, .1)"):"0px 2px 8px -3px ".concat((0,s.Fq)(o.colors.alpha.black[100],.2),", 0px 5px 22px -4px ").concat((0,s.Fq)(o.colors.alpha.black[100],.1))},children:[(0,t.jsx)(_.Z,{direction:"row",divider:(0,t.jsx)(j.Z,{orientation:"vertical",flexItem:!0}),alignItems:"center",spacing:2}),(0,t.jsxs)(i.Z,{display:"flex",alignItems:"center",children:[(0,t.jsx)(H,{}),(0,t.jsx)(an,{}),(0,t.jsx)(i.Z,{component:"span",sx:{ml:2,display:{lg:"none",xs:"inline-block"}},children:(0,t.jsx)(E.Z,{arrow:!0,title:"Toggle Menu",children:(0,t.jsx)(L.Z,{color:"primary",onClick:r,children:e?(0,t.jsx)(A.Z,{fontSize:"small"}):(0,t.jsx)(q.Z,{fontSize:"small"})})})})]})]})};var ln=function(n){var e,r,o,a=n.children,l=(0,c.Z)();return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(i.Z,{sx:{flex:1,height:"100%",".MuiPageTitle-wrapper":{background:"dark"===l.palette.mode?l.colors.alpha.trueWhite[5]:l.colors.alpha.white[50],marginBottom:"".concat(l.spacing(4)),boxShadow:"dark"===l.palette.mode?"0 1px 0 ".concat((0,s.Fq)((0,s.$n)(l.colors.primary.main,.7),.15),", 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)"):"0px 2px 4px -3px ".concat((0,s.Fq)(l.colors.alpha.black[100],.1),", 0px 5px 12px -4px ").concat((0,s.Fq)(l.colors.alpha.black[100],.05))}},children:[(0,t.jsx)(sn,{}),(0,t.jsx)(F,{}),(0,t.jsx)(i.Z,{sx:(e={position:"relative",zIndex:5,display:"block",flex:1,pt:"".concat(l.header.height)},r=l.breakpoints.up("lg"),o={ml:"".concat(l.sidebar.width)},r in e?Object.defineProperty(e,r,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[r]=o,e),children:(0,t.jsx)(i.Z,{display:"block",children:a})})]})})};ln.propTypes={children:d().node};var dn=ln,pn=r(6886);var hn=function(){var n="Catherine Pike",e="/static/images/avatars/1.jpg",r=(0,c.Z)();return(0,t.jsxs)(pn.ZP,{container:!0,alignItems:"center",children:[(0,t.jsx)(pn.ZP,{item:!0,children:(0,t.jsx)($.Z,{sx:{mr:2,width:r.spacing(8),height:r.spacing(8)},variant:"rounded",alt:n,src:e})}),(0,t.jsxs)(pn.ZP,{item:!0,children:[(0,t.jsxs)(D.Z,{variant:"h3",component:"h3",gutterBottom:!0,children:["Welcome, ",n,"!"]}),(0,t.jsx)(D.Z,{variant:"subtitle2",children:"Today is a good day to start trading crypto assets!"})]})]})},un=r(9520),xn=(0,b.ZP)(i.Z)((function(n){var e=n.theme;return"\n        padding: ".concat(e.spacing(4),";\n")})),fn=function(n){var e=n.children;return(0,t.jsx)(xn,{className:"MuiPageTitle-wrapper",children:(0,t.jsx)(un.Z,{maxWidth:"lg",children:e})})};fn.propTypes={children:d().node.isRequired};var gn=fn;function mn(){return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a(),{children:(0,t.jsx)("title",{children:"Admin Dashboard"})}),(0,t.jsx)(gn,{children:(0,t.jsx)(hn,{})})]})}mn.getLayout=function(n){return(0,t.jsx)(dn,{children:n})};var bn=mn},8586:function(n,e,r){"use strict";var t=r(5893),o=r(7294),a=r(6010),c=r(1163),i=r(1664),s=r.n(i),l=r(3795);function d(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function p(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){d(n,e,r[e])}))}return n}function h(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var u=(0,r(948).ZP)("a")({}),x=o.forwardRef((function(n,e){var r=n.to,o=n.linkAs,a=n.replace,c=n.scroll,i=n.shallow,l=n.prefetch,d=n.locale,x=h(n,["to","linkAs","replace","scroll","shallow","prefetch","locale"]);return(0,t.jsx)(s(),{href:r,prefetch:l,as:o,replace:a,scroll:c,shallow:i,passHref:!0,locale:d,children:(0,t.jsx)(u,p({ref:e},x))})})),f=o.forwardRef((function(n,e){var r=n.activeClassName,o=void 0===r?"active":r,i=n.as,s=n.className,f=n.href,g=n.linkAs,m=n.locale,b=n.noLinkStyle,j=n.prefetch,v=n.replace,Z=(n.role,n.scroll),y=n.shallow,w=h(n,["activeClassName","as","className","href","linkAs","locale","noLinkStyle","prefetch","replace","role","scroll","shallow"]),k=(0,c.useRouter)(),O="string"===typeof f?f:f.pathname,P=(0,a.Z)(s,d({},o,k.pathname===O&&o));if("string"===typeof f&&(0===f.indexOf("http")||0===f.indexOf("mailto:")))return b?(0,t.jsx)(u,p({className:P,href:f,ref:e},w)):(0,t.jsx)(l.Z,p({className:P,href:f,ref:e},w));var S={to:f,linkAs:g||i,replace:v,scroll:Z,shallow:y,prefetch:j,locale:m};return b?(0,t.jsx)(x,p({className:P,ref:e},S,w)):(0,t.jsx)(l.Z,p({component:x,className:P,ref:e},S,w))}));e.C=f},4757:function(n,e,r){"use strict";var t=r(5893),o=r(948),a=r(7357),c=r(2989),i=r(8999),s=r(2734),l=r(1594),d=r(8586);function p(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function h(n,e){if(null==n)return{};var r,t,o=function(n,e){if(null==n)return{};var r,t,o={},a=Object.keys(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||(o[r]=n[r]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(t=0;t<a.length;t++)r=a[t],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(o[r]=n[r])}return o}var u=(0,o.ZP)(d.C)((function(n){var e=n.theme;return"\n          color: ".concat(e.palette.text.primary,";\n          display: flex;\n          text-decoration: none;\n          width: 53px;\n          margin: 0 auto;\n          font-weight: ").concat(e.typography.fontWeightBold,";\n  ")})),x=(0,o.ZP)(a.Z)((function(){return"\n          width: 52px;\n          height: 38px;\n  "})),f=(0,o.ZP)(a.Z)((function(n){var e=n.theme;return"\n          background: ".concat(e.general.reactFrameworkColor,";\n          width: 18px;\n          height: 18px;\n          border-radius: ").concat(e.general.borderRadiusSm,';\n          position: relative;\n          transform: rotate(45deg);\n          top: 3px;\n          left: 17px;\n  \n          &:after, \n          &:before {\n              content: "";\n              display: block;\n              width: 18px;\n              height: 18px;\n              position: absolute;\n              top: -1px;\n              right: -20px;\n              transform: rotate(0deg);\n              border-radius: ').concat(e.general.borderRadiusSm,";\n          }\n  \n          &:before {\n              background: ").concat(e.palette.primary.main,";\n              right: auto;\n              left: 0;\n              top: 20px;\n          }\n  \n          &:after {\n              background: ").concat(e.palette.secondary.main,";\n          }\n  ")})),g=(0,o.ZP)(a.Z)((function(n){var e=n.theme;return"\n          width: 16px;\n          height: 16px;\n          position: absolute;\n          top: 12px;\n          left: 12px;\n          z-index: 5;\n          border-radius: ".concat(e.general.borderRadiusSm,";\n          background: ").concat(e.header.background,";\n  ")})),m=(0,o.ZP)((function(n){var e=n.className,r=h(n,["className"]);return(0,t.jsx)(c.Z,function(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{},t=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(t=t.concat(Object.getOwnPropertySymbols(r).filter((function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})))),t.forEach((function(e){p(n,e,r[e])}))}return n}({},r,{classes:{popper:e}}))}))((function(n){var e,r=n.theme;return p(e={},"& .".concat(i.Z.tooltip),{backgroundColor:r.colors.alpha.trueWhite[100],color:r.palette.getContrastText(r.colors.alpha.trueWhite[100]),fontSize:r.typography.pxToRem(12),fontWeight:"bold",borderRadius:r.general.borderRadiusSm,boxShadow:"0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)"}),p(e,"& .".concat(i.Z.arrow),{color:r.colors.alpha.trueWhite[100]}),e}));e.Z=function(){var n=(0,s.Z)();return(0,t.jsx)(m,{title:"Tokyo Free White Next.js Typescript Admin Dashboard",arrow:!0,children:(0,t.jsx)(u,{href:"/",children:(0,t.jsx)(l.Z,{sx:{".MuiBadge-badge":{fontSize:n.typography.pxToRem(11),right:-2,top:8}},overlap:"circular",color:"success",badgeContent:"1.0",children:(0,t.jsx)(x,{children:(0,t.jsx)(f,{children:(0,t.jsx)(g,{})})})})})})}}},function(n){n.O(0,[779,221,713,328,774,888,179],(function(){return e=6117,n(n.s=e);var e}));var e=n.O();_N_E=e}]);