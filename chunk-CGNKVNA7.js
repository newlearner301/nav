import{a as ue,b as _e,c as ge,d as de}from"./chunk-WCQJTSHE.js";import{c as q,d as H,e as U,f as G}from"./chunk-OY24SAVH.js";import{D as se,E as ce,F as me,c as $,d as R}from"./chunk-ROLDMQLC.js";import{a as ie,e as oe}from"./chunk-B3ZABMDP.js";import{a as J,b as X,c as Y}from"./chunk-TWJKLZQF.js";import"./chunk-JPQUGPY3.js";import{b as Q}from"./chunk-4K5KEZT3.js";import{$a as Z,Bb as re,Eb as le,Fb as ae,Tb as pe,cb as ee,fb as te,pb as ne}from"./chunk-Q4KOEVGC.js";import{$b as D,Ba as p,Ca as u,Dd as A,Gd as B,Hb as f,Hd as W,Ia as N,Id as F,Jb as s,Jd as j,Kd as T,Ld as b,Od as K,Xb as c,Yb as l,Yd as x,Zb as C,_b as L,bc as y,ec as _,gc as r,gd as h,hb as O,lb as t,mb as z,od as k,pc as m,qc as S,rc as g,tb as v,vc as M,wc as I,xc as V,zd as P}from"./chunk-O56GAY6U.js";function Ce(i,a){if(i&1&&(c(0,"p",4),m(1),c(2,"a",5),m(3),l()()),i&2){let e=r(2);t(),g(" ",e.$t("_getToken"),""),t(2),g(" ",e.$t("_readDoc"),"")}}function ze(i,a){if(i&1){let e=y();L(0),c(1,"p"),m(2),l(),c(3,"input",2),V("ngModelChange",function(n){p(e);let d=r();return I(d.token,n)||(d.token=n),u(n)}),_("keyup",function(n){p(e);let d=r();return u(d.onKey(n))}),l(),f(4,Ce,4,2,"p",3),D()}if(i&2){let e=r();t(2),S(e.$t("_inputTokenMsg")),t(),M("ngModel",e.token),t(),s("ngIf",!e.isSelfDevelop)}}var w=class i{constructor(a){this.message=a}visible=!1;onCancel=new N;$t=x;isSelfDevelop=b;token="";submiting=!1;ngOnInit(){}ngAfterViewInit(){this.inputFocus()}hanldeCancel(){this.onCancel.emit()}inputFocus(){setTimeout(()=>{document.getElementById("loginInput")?.focus?.()},300)}onKey(a){a.code==="Enter"&&this.login()}login(){if(!this.token)return this.message.error(x("_pleaseInputToken"));let a=this.token.trim();this.submiting=!0,re(a).then(()=>{B(a),ae({message:"auth",path:".navauth",content:"OK"}).then(()=>{le("image").finally(()=>{this.message.success(x("_tokenVerSuc")),F().finally(()=>{window.location.reload()})})}).catch(()=>{W(),this.submiting=!1})}).catch(()=>{this.submiting=!1})}static \u0275fac=function(e){return new(e||i)(z(pe))};static \u0275cmp=v({type:i,selectors:[["app-login"]],inputs:{visible:"visible"},outputs:{onCancel:"onCancel"},decls:2,vars:3,consts:[[3,"nzVisibleChange","nzOnCancel","nzOnOk","nzVisible","nzTitle","nzOkLoading"],[4,"nzModalContent"],["id","loginInput","autofocus","","nz-input","","autofocus","",3,"ngModelChange","keyup","ngModel"],["style","margin-top: 15px",4,"ngIf"],[2,"margin-top","15px"],["href","https://github.com/xjh22222228/nav#%E9%83%A8%E7%BD%B2","target","_blank"]],template:function(e,o){e&1&&(c(0,"nz-modal",0),V("nzVisibleChange",function(d){return I(o.visible,d)||(o.visible=d),d}),_("nzOnCancel",function(){return o.hanldeCancel()})("nzOnOk",function(){return o.login()}),f(1,ze,5,3,"ng-container",1),l()),e&2&&(M("nzVisible",o.visible),s("nzTitle",o.$t("_authLogin"))("nzOkLoading",o.submiting))},dependencies:[k,h,ne,Z,ee,te,me,ce,se,oe,ie],styles:[".prefix-icon[_ngcontent-%COMP%]{width:20px;height:20px;pointer-events:none}"]})};function ve(i,a){if(i&1){let e=y();c(0,"li",6),_("click",function(){p(e);let n=r(2);return u(n.goRoute("/system/component"))}),m(1),l()}if(i&2){let e=r(2);s("nzSelected",e.currentMenu==="component"),t(),g(" ",e.$t("_components")," ")}}function Se(i,a){if(i&1){let e=y();c(0,"li",6),_("click",function(){p(e);let n=r(2);return u(n.goRoute("/system/bookmarkExport"))}),m(1),l()}if(i&2){let e=r(2);s("nzSelected",e.currentMenu==="bookmarkExport"),t(),g(" ",e.$t("_bookmarkExport")," ")}}function he(i,a){if(i&1){let e=y();c(0,"li",6),_("click",function(){p(e);let n=r(2);return u(n.goRoute("/system/collect"))}),m(1),l()}if(i&2){let e=r(2);s("nzSelected",e.currentMenu==="collect"),t(),g(" ",e.$t("_userCollect")," ")}}function ke(i,a){if(i&1&&(c(0,"span",16),m(1),l()),i&2){let e=r(2);t(),S(e.date)}}function be(i,a){if(i&1){let e=y();c(0,"nz-layout",2)(1,"nz-layout")(2,"nz-sider",3)(3,"ul",4)(4,"li",5)(5,"ul")(6,"li",6),_("click",function(){p(e);let n=r();return u(n.goRoute("/system/web"))}),m(7),l(),c(8,"li",6),_("click",function(){p(e);let n=r();return u(n.goRoute("/system/setting"))}),m(9),l(),c(10,"li",6),_("click",function(){p(e);let n=r();return u(n.goRoute("/system/tag"))}),m(11),l(),c(12,"li",6),_("click",function(){p(e);let n=r();return u(n.goRoute("/system/bookmark"))}),m(13),l(),c(14,"li",6),_("click",function(){p(e);let n=r();return u(n.goRoute("/system/search"))}),m(15),l(),f(16,ve,2,2,"li",7)(17,Se,2,2,"li",7)(18,he,2,2,"li",7),c(19,"li",6),_("click",function(){p(e);let n=r();return u(n.goRoute("/system/vip"))}),m(20),l(),c(21,"li",6),_("click",function(){p(e);let n=r();return u(n.goRoute("/system/info"))}),m(22),l()()()()(),c(23,"nz-layout",8)(24,"nz-content",9)(25,"div")(26,"button",10),_("click",function(){p(e);let n=r();return u(n.goBack())}),m(27),l(),c(28,"button",11),_("click",function(){p(e);let n=r();return u(n.logout())}),m(29),l(),C(30,"img",12),c(31,"a",13),C(32,"img",14),l(),f(33,ke,2,1,"span",15),l(),C(34,"router-outlet"),l()()()()}if(i&2){let e=r();t(6),s("nzSelected",e.currentMenu==="web"),t(),g(" ",e.$t("_websiteMang")," "),t(),s("nzSelected",e.currentMenu==="setting"),t(),g(" ",e.$t("_systemSet")," "),t(),s("nzSelected",e.currentMenu==="tag"),t(),g(" ",e.$t("_tagSettings")," "),t(),s("nzSelected",e.currentMenu==="bookmark"),t(),g(" ",e.$t("_bookmarkImport")," "),t(),s("nzSelected",e.currentMenu==="search"),t(),g(" ",e.$t("_searchEngines")," "),t(),s("ngIf",e.isAuthz||e.isSelfDevelop),t(),s("ngIf",e.isAuthz),t(),s("ngIf",e.isAuthz||e.isSelfDevelop),t(),s("nzSelected",e.currentMenu==="vip"),t(),g(" ",e.$t("_vipAuth")," "),t(),s("nzSelected",e.currentMenu==="info"),t(),g(" ",e.$t("_webInfo")," "),t(5),g(" ",e.$t("_backHome")," "),t(2),g(" ",e.$t("_logout")," "),t(),s("src",e.currentVersionSrc,O),t(3),s("ngIf",!e.isSelfDevelop)}}var E=class i{constructor(a){this.router=a;K()}isSelfDevelop=b;$t=x;isLogin=T;showLoginModal=!T;currentMenu="";date=document.getElementById("META-NAV")?.dataset?.date||"";currentVersionSrc=`https://img.shields.io/badge/current-v${P}-red.svg?longCache=true&style=flat-square`;isAuthz=!!A();ngOnInit(){let a=window.location.href.split("/");this.currentMenu=a.at(-1)}goBack(){this.router.navigate(["/"])}goRoute(a,e=!1){e||this.router.navigate([a])}logout(){j(),this.router.navigate(["/"]),setTimeout(()=>{location.reload()},26)}static \u0275fac=function(e){return new(e||i)(z(R))};static \u0275cmp=v({type:i,selectors:[["app-system"]],decls:2,vars:2,consts:[["class","system-layout",4,"ngIf"],[3,"visible"],[1,"system-layout"],["nzWidth","150px","nzTheme","light",1,"sidebar"],["nz-menu","","nzMode","inline",1,"sider-menu"],["nz-submenu","","nzOpen","","nzTitle","System"],["nz-menu-item","",3,"click","nzSelected"],["nz-menu-item","",3,"nzSelected","click",4,"ngIf"],[1,"inner-layout"],[1,"content"],["nz-button","",2,"margin-bottom","15px",3,"click"],["nz-button","",2,"margin-left","15px",3,"click"],[1,"ml-2.5",3,"src"],["href","https://github.com/xjh22222228/nav/releases","target","_blank"],["src","https://img.shields.io/github/v/release/xjh22222228/nav",1,"ml-2.5"],["class","ml-2.5",4,"ngIf"],[1,"ml-2.5"]],template:function(e,o){e&1&&(f(0,be,35,21,"nz-layout",0),C(1,"app-login",1)),e&2&&(s("ngIf",o.isLogin),t(),s("visible",o.showLoginModal))},dependencies:[k,h,de,ge,ue,_e,G,U,q,H,Y,X,J,Q,w,$],styles:[".system-layout[_ngcontent-%COMP%]{min-height:100vh}.system-layout[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:30px;background-color:#fff}.system-layout[_ngcontent-%COMP%]   .sidebar[_ngcontent-%COMP%]{z-index:3;position:fixed;top:0;left:0;bottom:0;background-color:#fff}.system-layout[_ngcontent-%COMP%]   .inner-layout[_ngcontent-%COMP%]{margin-left:170px}"]})};export{E as default};
