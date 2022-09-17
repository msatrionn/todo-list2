(function(){"use strict";var t={977:function(t,e,a){var i=a(963),o=a(252);const s=(0,o._)("div",{"data-cy":"header-background",class:"navbar"},[(0,o._)("h2",{"data-cy":"header-title",class:"nav-title container"},"TO DO LIST APP")],-1);function c(t,e){const a=(0,o.up)("router-view");return(0,o.wg)(),(0,o.iD)(o.HY,null,[s,(0,o.Wm)(a)],64)}var l=a(744);const n={},d=(0,l.Z)(n,[["render",c]]);var r=d,u=a(201),h=a(577);const p={class:""},y={class:"home"},g=(0,o._)("h2",{class:"activity"},"Activity",-1),m={"data-cy":"container-top",class:"container-top"},v=(0,o._)("div",{class:"container-button"},[(0,o._)("span",{class:"plus alt"}),(0,o._)("span",{style:{fontSize:"16px",paddingLeft:"6px"}}," Tambah ")],-1),b=[v],k={key:0,class:"activity","data-cy":"activity"},f=["src"],w={key:1,"data-cy":"body-content",class:"body-content"},_=["onClick"],D={"data-cy":"title-date",class:"title-date"},C={"data-cy":"date"},M=["onClick"],T=(0,o.uE)('<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7H20" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10 11V17" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14 11V17" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5 7L6 19C6 19.5304 6.21071 20.0391 6.58579 20.4142C6.96086 20.7893 7.46957 21 8 21H16C16.5304 21 17.0391 20.7893 17.4142 20.4142C17.7893 20.0391 18 19.5304 18 19L19 7" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9 7V4C9 3.73478 9.10536 3.48043 9.29289 3.29289C9.48043 3.10536 9.73478 3 10 3H14C14.2652 3 14.5196 3.10536 14.7071 3.29289C14.8946 3.48043 15 3.73478 15 4V7" stroke="#888888" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>',1),A=[T],x={class:"modal-backdrop"},S={class:"modal-delete",role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},j=["src"],$={class:"ask-modal"},q={"data-cy":"button-model",class:"button-modal"};function I(t,e,a,s,c,l){const n=(0,o.up)("SuccessDeleted");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",p,[(0,o._)("div",y,[g,(0,o._)("span",m,[(0,o._)("button",{"data-cy":"button-plus",class:"button-tambah",onClick:e[0]||(e[0]=(...t)=>l.createActivity&&l.createActivity(...t))},b)])]),0==s.showData?((0,o.wg)(),(0,o.iD)("div",k,[(0,o._)("img",{"data-cy":"img-activity",src:`${c.Activity}`,alt:"",class:"activity-img"},null,8,f)])):(0,o.kq)("",!0),s.showData?((0,o.wg)(),(0,o.iD)("div",w,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.showGetData.data,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{"data-cy":"square-content",class:"square-content",key:e},[(0,o._)("div",{"data-cy":"title-content",class:"title-content",onClick:e=>l.detail(t.id)},(0,h.zw)(t.title),9,_),(0,o._)("div",D,[(0,o._)("span",C,(0,h.zw)(t.created_at),1),(0,o._)("span",{"data-cy":"trash-button",onClick:e=>l.showModalDelete(t.id,t.title),class:"trash-button"},A,8,M)])])))),128))])):(0,o.kq)("",!0)]),c.isModalVisibleDelete?((0,o.wg)(),(0,o.j4)(i.uT,{key:0,"data-cy":"transition-modal",name:"modal-fade"},{default:(0,o.w5)((()=>[(0,o._)("div",x,[(0,o._)("div",S,[(0,o._)("img",{src:`${c.DeleteModal}`,alt:"",class:"delete-icon"},null,8,j),(0,o._)("div",$,"Apakah anda yakin menghapus List Item “"+(0,h.zw)(t.getTitle)+"”? ",1),(0,o._)("div",q,[(0,o._)("button",{class:"button-default",onClick:e[1]||(e[1]=(...t)=>l.closeModal&&l.closeModal(...t))},"Batal"),(0,o._)("button",{class:"button-danger",onClick:e[2]||(e[2]=t=>l.deleteData(c.getIdForDelete))},"Hapus")])])])])),_:1})):(0,o.kq)("",!0),c.SuccessDel?((0,o.wg)(),(0,o.j4)(n,{key:1,onClick:t.dellSuccess},null,8,["onClick"])):(0,o.kq)("",!0)],64)}var V=a.p+"img/activity.8335b35d.svg",L=a.p+"img/modal-delete.5307d7ca.svg";const O={"data-cy":"modal-backdrop",class:"modal-backdrop"},H={"data-cy":"modal-delete-success",class:"modal-delete-success",role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},P={"data-cy":"delete-img-container"},z=["src"],E=(0,o._)("span",{"data-cy":"infobox",class:"infobox"}," Activity Berhasil DIhapus ",-1);function Y(t,e,a,s,c,l){return(0,o.wg)(),(0,o.j4)(i.uT,{"data-cy":"modal-success",name:"modal-fade"},{default:(0,o.w5)((()=>[(0,o._)("div",O,[(0,o._)("div",H,[(0,o._)("span",P,[(0,o._)("img",{"data-cy":"deleted-imgs",src:`${c.SuccessDelete}`,alt:"",class:"delete-img"},null,8,z)]),E])])])),_:1})}var G=a.p+"img/modal-delete-success.030fdca5.svg",B={name:"SuccessDelete",data(){return{SuccessDelete:G}}};const F=(0,l.Z)(B,[["render",Y]]);var Z=F,U=a(262),W=a(484),N=a.n(W),Q={name:"HomeView",setup(){const t=(0,U.iH)([]),e=(0,U.iH)([]),a={method:"get",headers:{"content-type":"application/json"}};async function i(){await fetch("https://todo.api.devcode.gethired.id/activity-groups",a).then((t=>t.json())).then((e=>{t.value=e,t.value.data.forEach((t=>{const e=N()(t.created_at),a=e.format("D MMMM YYYY");t.created_at=a}))})),t.value.data.length>=1?e.value=!0:e.value=!1}return(0,o.bv)((()=>{i()})),{showData:e,showGetData:t,getActivityAll:i}},data(){return{Deleted:!1,Activity:V,getIdForDelete:"",DeleteModal:L,SuccessDel:!1,isModalVisibleDelete:!1}},components:{SuccessDeleted:Z},methods:{showModalDelete:function(t,e){this.getIdForDelete=t,this.getTitle=e,this.isModalVisibleDelete=!0},deleteData:async function(t){const e={method:"delete",headers:{"content-type":"application/json"}};await fetch(`https://todo.api.devcode.gethired.id/activity-groups/${t}`,e).then((t=>t.json())).then((t=>{this.getActivityAll(),this.isModalVisibleDelete=!1,this.SuccessDel=!0,setTimeout((()=>{this.SuccessDel=!1}),1e3)}))},closeModal:function(){this.isModalVisibleDelete=!1},close:function(){this.$emit("close")},createActivity:async function(){const t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:"test",email:"wow@gmail.com"})};await fetch("https://todo.api.devcode.gethired.id/activity-groups",t).then((t=>t.json())).then((t=>{this.getActivityAll()}))},detail:function(t){this.$router.push({path:"/detail",query:{id:t}})}}};const R=(0,l.Z)(Q,[["render",I]]);var J=R;const K={class:"home","data-cy":"detail"},X={class:"inputActivity"},tt={class:"back-button","data-cy":"back-button"},et=(0,o._)("svg",{width:"35",height:"35",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[(0,o._)("path",{d:"M6.66675 16L14.6667 24",stroke:"#111111","stroke-width":"5","stroke-linecap":"square"}),(0,o._)("path",{d:"M6.66675 16L14.6667 8",stroke:"#111111","stroke-width":"5","stroke-linecap":"square"})],-1),at={key:0,"data-cy":"title-new",class:"title-new-activity"},it={key:1,"data-cy":"active"},ot=["value"],st=["src"],ct={class:"container-top","data-cy":"container-top"},lt=(0,o.uE)('<div data-cy="plus" class="container-button"><div class="" data-cy="svg-btn"><svg width="22" data-cy="figma-first" height="20" viewBox="0 0 22 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6L6 2M6 2L10 6M6 2V16" stroke="#888888" stroke-width="1.5" stroke-linecap="square"></path><path d="M20 12L16 16M16 16L12 12M16 16V2" stroke="#888888" stroke-width="1.5" stroke-linecap="square"></path></svg></div></div>',1),nt=[lt],dt={key:0,class:"card-sort","data-cy":"card-sort"},rt=["src"],ut=(0,o.Uk)("Terbaru "),ht={key:0,class:"check-class"},pt=["src"],yt=["src"],gt=(0,o.Uk)("Terlama "),mt={key:0,class:"check-class"},vt=["src"],bt=["src"],kt=(0,o.Uk)("A-Z "),ft={key:0,class:"check-class"},wt=["src"],_t=["src"],Dt=(0,o.Uk)("Z-A "),Ct={key:0,class:"check-class"},Mt=["src"],Tt=["src"],At=(0,o.Uk)("Belum Selesai "),xt={key:0,class:"check-class"},St=["src"],jt=(0,o._)("div",{"data-cy":"plus",class:"container-button"},[(0,o._)("span",{class:"plus alt","data-cy":"plus-alt"}),(0,o._)("span",{"data-cy":"pluss",style:{fontSize:"16px",paddingLeft:"6px"}}," Tambah ")],-1),$t=[jt],qt={key:0,class:"activity","data-cy":"activity"},It=["src"],Vt={"data-cy":"list-container",class:"list-container"},Lt={"data-cy":"inner-list",class:"inner-list"},Ot=(0,o._)("label",{"data-cy":"container-check",class:"container-checkbox"},[(0,o._)("input",{"data-cy":"checkbox",type:"checkbox"}),(0,o._)("span",{"data-cy":"bench",class:"checkmark"})],-1),Ht={"data-cy":"contents",class:"center-content list-content"},Pt={"data-cy":"name-content",class:"name-content"},zt=["src","onClick"],Et={"data-cy":"trash-content",class:"center-content trash"},Yt=["src","onClick"],Gt={"data-cy":"modal-back",class:"modal-backdrop"},Bt={"data-cy":"modal-common",class:"modal",role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},Ft={"data-cy":"modal-head",class:"modal-header",id:"modalTitle"},Zt=(0,o.Uk)(" Tambah List Item "),Ut={"data-cy":"modal-body",class:"modal-body",id:"modalDescription"},Wt={action:"","data-cy":"forms"},Nt=(0,o._)("label",{for:"","data-cy":"nama-list"},"NAMA LIST ITEM",-1),Qt=(0,o._)("label",{for:"","data-cy":"label-priority"},"PRIORITY",-1),Rt={class:"modal-footer","data-cy":"modal-footer"},Jt={class:"footer-modal-inner","data-cy":"footer-moddal"},Kt={"data-cy":"plus",class:"container-button"},Xt={"data-cy":"plus",class:"container-button"},te={key:0,"data-cy":"btn-new",style:{fontSize:"16px",paddingLeft:"6px"},class:"saveBtn"},ee={class:"modal-backdrop","data-cy":"backdrop-modal"},ae={class:"modal","data-cy":"titlenew",role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},ie={"data-cy":"modal-header",class:"modal-header",id:"modalTitle"},oe=(0,o.Uk)(" Edit List Item "),se={"data-cy":"modal-body",class:"modal-body",id:"modalDescription"},ce={action:""},le=(0,o._)("label",{for:""},"NAMA LIST ITEM",-1),ne=["value"],de=(0,o._)("label",{for:""},"PRIORITY",-1),re={class:"modal-footer"},ue={class:"footer-modal-inner"},he={"data-cy":"plus",class:"container-button"},pe={"data-cy":"plus",class:"container-button"},ye={key:0,style:{fontSize:"16px",paddingLeft:"6px"},class:"saveBtn"},ge={"data-cy":"modal-backdrop",class:"modal-backdrop"},me={"data-cy":"modal-delete",class:"modal-delete",role:"dialog","aria-labelledby":"modalTitle","aria-describedby":"modalDescription"},ve=["src"],be={"data-cy":"ask-modal",class:"ask-modal"},ke={"data-cy":"button-modal",class:"button-modal"};function fe(t,e,a,s,c,l){const n=(0,o.up)("router-link"),d=(0,o.up)("CustomSelect"),r=(0,o.up)("SuccessDeleted");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",null,[(0,o._)("div",K,[(0,o._)("span",X,[(0,o._)("span",tt,[(0,o.Wm)(n,{to:"/home","data-cy":"to-home"},{default:(0,o.w5)((()=>[et])),_:1})]),c.isActive?((0,o.wg)(),(0,o.iD)("span",at,(0,h.zw)(s.showGetOne.title),1)):(0,o.kq)("",!0),0==c.isActive?((0,o.wg)(),(0,o.iD)("span",it,[(0,o._)("input",{type:"text","data-cy":"update-change",class:"input-data",value:s.showGetOne.title,onInput:e[0]||(e[0]=e=>t.text=e.target.value),autofocus:"",onChange:e[1]||(e[1]=t=>l.updateChange())},null,40,ot)])):(0,o.kq)("",!0),(0,o._)("span",{onClick:e[2]||(e[2]=(...t)=>l.editActivity&&l.editActivity(...t)),class:"editActivity","data-cy":"editActivity"},[(0,o._)("img",{src:`${c.Edit}`,alt:"",class:"action-svg-img","data-cy":"img-edit"},null,8,st)])]),(0,o._)("span",ct,[(0,o._)("button",{"data-cy":"button",class:"button-filter",onClick:e[3]||(e[3]=t=>l.showCard())},nt),c.sort_card?((0,o.wg)(),(0,o.iD)("div",dt,[(0,o._)("div",{"data-cy":"sort-list",class:"sort-list",onClick:e[4]||(e[4]=t=>l.terbaru(1))},[(0,o._)("img",{src:`${c.New}`,alt:"",class:"action-svg-img list-icon"},null,8,rt),ut,1==c.check?((0,o.wg)(),(0,o.iD)("span",ht,[(0,o._)("img",{src:s.Check,alt:"",srcset:""},null,8,pt)])):(0,o.kq)("",!0)]),(0,o._)("div",{"data-cy":"sort-list",class:"sort-list",onClick:e[5]||(e[5]=t=>l.terlama(2))},[(0,o._)("img",{src:`${c.Last}`,alt:"",class:"action-svg-img list-icon"},null,8,yt),gt,2==c.check?((0,o.wg)(),(0,o.iD)("span",mt,[(0,o._)("img",{src:s.Check,alt:"",srcset:""},null,8,vt)])):(0,o.kq)("",!0)]),(0,o._)("div",{"data-cy":"sort-list",class:"sort-list",onClick:e[6]||(e[6]=t=>l.aToZFilter(3))},[(0,o._)("img",{src:`${c.aToZ}`,alt:"",class:"action-svg-img list-icon"},null,8,bt),kt,3==c.check?((0,o.wg)(),(0,o.iD)("span",ft,[(0,o._)("img",{src:s.Check,alt:"",srcset:""},null,8,wt)])):(0,o.kq)("",!0)]),(0,o._)("div",{"data-cy":"sort-list",class:"sort-list",onClick:e[7]||(e[7]=t=>l.zToAFilter(4))},[(0,o._)("img",{src:`${c.zToA}`,alt:"",class:"action-svg-img list-icon"},null,8,_t),Dt,4==c.check?((0,o.wg)(),(0,o.iD)("span",Ct,[(0,o._)("img",{src:s.Check,alt:"",srcset:""},null,8,Mt)])):(0,o.kq)("",!0)]),(0,o._)("div",{"data-cy":"sort-list",class:"sort-list",onClick:e[8]||(e[8]=t=>l.BelumSelesai(5))},[(0,o._)("img",{src:`${c.Yet}`,alt:"",class:"action-svg-img list-icon"},null,8,Tt),At,5==c.check?((0,o.wg)(),(0,o.iD)("span",xt,[(0,o._)("img",{src:s.Check,alt:"",srcset:""},null,8,St)])):(0,o.kq)("",!0)])])):(0,o.kq)("",!0),(0,o._)("button",{"data-cy":"button",class:"button-tambah",onClick:e[9]||(e[9]=(...t)=>l.showModal&&l.showModal(...t))},$t)])]),0==s.showData?((0,o.wg)(),(0,o.iD)("div",qt,[(0,o._)("img",{src:`${c.Activity}`,alt:"","data-cy":"activity-img",class:"activity-img"},null,8,It)])):(0,o.kq)("",!0),(0,o._)("div",Vt,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.showGetData,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{"data-cy":"list",class:"list",key:e},[(0,o._)("span",Lt,[Ot,(0,o._)("span",Ht,[(0,o._)("span",{"data-cy":"color",class:"color",style:(0,h.j5)("very-high"==`${t.priority}`?{background:"#ed4c5c"}:"high"==`${t.priority}`?{background:"#f8a540"}:"normal"==`${t.priority}`?{background:"#00a790"}:"low"==`${t.priority}`?{background:"#418bc1"}:"very-low"==`${t.priority}`?{background:"#8942c1"}:"")},null,4),(0,o._)("span",Pt,(0,h.zw)(t.title)+" "+(0,h.zw)(t.id),1),(0,o._)("img",{"data-cy":"action-svg",src:`${c.Edit}`,alt:"",class:"action-svg-img",onClick:e=>l.showModalEdit(t.id,t)},null,8,zt)])]),(0,o._)("span",Et,[(0,o._)("img",{"data-cy":"trash-img",src:`${c.Delete}`,alt:"",class:"action-svg-img",onClick:e=>l.showModalDelete(t.id,t.title)},null,8,Yt)])])))),128))]),c.isModalVisible?((0,o.wg)(),(0,o.j4)(i.uT,{key:1,"data-cy":"modals",name:"modal-fade"},{default:(0,o.w5)((()=>[(0,o._)("div",Gt,[(0,o._)("div",Bt,[(0,o._)("header",Ft,[(0,o.WI)(t.$slots,"header",{dataCy:"header"},(()=>[Zt])),(0,o._)("button",{"data-cy":"button-close",type:"button",class:"btn-close",onClick:e[10]||(e[10]=(...t)=>l.closeModal&&l.closeModal(...t)),"aria-label":"Close modal"}," x ")]),(0,o._)("section",Ut,[(0,o.WI)(t.$slots,"body",{dataCy:"body-out"},(()=>[(0,o._)("form",Wt,[Nt,(0,o.wy)((0,o._)("input",{type:"text",class:"input-modal",name:"","onUpdate:modelValue":e[11]||(e[11]=t=>c.createText=t),id:"",placeholder:"Tambahkan nama list item",onKeyup:e[12]||(e[12]=t=>l.buttonSaveCheck())},null,544),[[i.nr,c.createText]]),Qt,(0,o.Wm)(d,{options:[{color:"#ed4c5c",priority:"very-high",caption:"Very High"},{color:"#f8a540",priority:"high",caption:"High"},{color:"#00a790",priority:"normal",caption:"Medium"},{color:"#418bc1",priority:"low",caption:"Low"},{color:"#8942c1",priority:"very-low",caption:"Very Low"}],class:"select-custom",onInput:l.customColor,"data-cy":"custom-select"},null,8,["onInput"])])]))]),(0,o._)("footer",Rt,[(0,o.WI)(t.$slots,"footer",{dataCy:"footer"},(()=>[(0,o._)("div",Jt,[c.valCreate?((0,o.wg)(),(0,o.iD)("button",{key:0,"data-cy":"button",class:"button-tambah",onClick:e[14]||(e[14]=(...t)=>l.showModal&&l.showModal(...t))},[(0,o._)("div",Kt,[(0,o._)("span",{"data-cy":"create-list",style:{fontSize:"16px",paddingLeft:"6px"},onClick:e[13]||(e[13]=t=>l.createList())}," Simpan ")])])):(0,o.kq)("",!0),c.valCreate?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:1,"data-cy":"button",class:"button-tambah-disabled",onClick:e[15]||(e[15]=(...t)=>l.showModal&&l.showModal(...t))},[(0,o._)("div",Xt,[c.valCreate?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",te," Simpan "))])]))])]))])])])])),_:3})):(0,o.kq)("",!0),c.isModalVisibleEdit?((0,o.wg)(),(0,o.j4)(i.uT,{key:2,"data-cy":"transition-modal",name:"modal-fade"},{default:(0,o.w5)((()=>[(0,o._)("div",ee,[(0,o._)("div",ae,[(0,o._)("header",ie,[(0,o.WI)(t.$slots,"header",{dataCy:"header"},(()=>[oe])),(0,o._)("button",{"data-cy":"btn-close",type:"button",class:"btn-close",onClick:e[16]||(e[16]=(...t)=>l.closeModal&&l.closeModal(...t)),"aria-label":"Close modal"}," x ")]),(0,o._)("section",se,[(0,o.WI)(t.$slots,"body",{dataCy:"modal-header"},(()=>[(0,o._)("form",ce,[le,(0,o._)("input",{type:"text",class:"input-modal",value:c.showTitle,onInput:e[17]||(e[17]=t=>c.createText=t.target.value),autofocus:"",placeholder:"Tambahkan nama list item",onChange:e[18]||(e[18]=t=>l.buttonSaveCheck())},null,40,ne),de,(0,o.Wm)(d,{options:[{color:"#ed4c5c",priority:"very-high",caption:"Very High"},{color:"#f8a540",priority:"high",caption:"High"},{color:"#00a790",priority:"normal",caption:"Medium"},{color:"#418bc1",priority:"low",caption:"Low"},{color:"#8942c1",priority:"very-low",caption:"Very Low"}],class:"select-custom",onInput:l.customColor},null,8,["onInput"])])]))]),(0,o._)("footer",re,[(0,o.WI)(t.$slots,"footer",{},(()=>[(0,o._)("div",ue,[c.valCreate?((0,o.wg)(),(0,o.iD)("button",{key:0,"data-cy":"button",class:"button-tambah",onClick:e[20]||(e[20]=(...t)=>l.showModal&&l.showModal(...t))},[(0,o._)("div",he,[(0,o._)("span",{style:{fontSize:"16px",paddingLeft:"6px"},onClick:e[19]||(e[19]=t=>l.updateList(c.getEditId))}," Simpan ")])])):(0,o.kq)("",!0),c.valCreate?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("button",{key:1,"data-cy":"button",class:"button-tambah-disabled",onClick:e[21]||(e[21]=(...t)=>l.showModal&&l.showModal(...t))},[(0,o._)("div",pe,[c.valCreate?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",ye," Simpan "))])]))])]))])])])])),_:3})):(0,o.kq)("",!0)]),c.isModalVisibleDelete?((0,o.wg)(),(0,o.j4)(i.uT,{key:0,"data-cy":"modal-fade",name:"modal-fade"},{default:(0,o.w5)((()=>[(0,o._)("div",ge,[(0,o._)("div",me,[(0,o._)("img",{"data-cy":"delete-icon",src:`${c.DeleteModal}`,alt:"",class:"delete-icon"},null,8,ve),(0,o._)("div",be,"Apakah anda yakin menghapus List Item “"+(0,h.zw)(c.getTitle)+"”? ",1),(0,o._)("div",ke,[(0,o._)("button",{"data-cy":"button-default",class:"button-default",onClick:e[22]||(e[22]=(...t)=>l.closeModal&&l.closeModal(...t))},"Batal"),(0,o._)("button",{"data-cy":"button-danger",class:"button-danger",onClick:e[23]||(e[23]=t=>l.deleteData(c.getIdForDelete))},"Hapus")])])])])),_:1})):(0,o.kq)("",!0),c.SuccessDel?((0,o.wg)(),(0,o.j4)(r,{key:1,"data-cy":"success-deleted",onClick:l.dellSuccess},null,8,["onClick"])):(0,o.kq)("",!0)],64)}var we=a.p+"img/detail.2aa44541.svg",_e=a.p+"img/edit.4015fbb4.svg",De=a.p+"img/delete.a6cb7992.svg",Ce=a.p+"img/sort.6463abb1.svg",Me=a.p+"img/a-z.3b67309a.svg",Te=a.p+"img/z-a.aa8dec14.svg",Ae=a.p+"img/terbaru.c2882709.svg",xe=a.p+"img/terlama.c59f76c0.svg",Se=a.p+"img/belum.5268e083.svg";const je=t=>((0,o.dD)("data-v-0f19619e"),t=t(),(0,o.Cn)(),t),$e=["tabindex"],qe={key:1,"data-cy":"get-caption"},Ie={key:2,"data-cy":"priority"},Ve=["onClick"],Le=je((()=>(0,o._)("div",{"data-cy":"line",class:"line"},null,-1)));function Oe(t,e,a,i,s,c){return(0,o.wg)(),(0,o.iD)("div",{"data-cy":"custom-select",class:"custom-select",tabindex:a.tabindex,onBlur:e[1]||(e[1]=t=>s.open=!1)},[(0,o._)("div",{"data-cy":"selected-open",class:(0,h.C_)(["selected",{open:s.open}]),onClick:e[0]||(e[0]=t=>s.open=!s.open)},[s.open?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",{key:0,"data-cy":"color-custom",class:"color-custom",style:(0,h.j5)("very-high"==`${s.getDefault}`?{background:"#ed4c5c"}:"high"==`${s.getDefault}`?{background:"#f8a540"}:"normal"==`${s.getDefault}`?{background:"#00a790"}:"low"==`${s.getDefault}`?{background:"#418bc1"}:"very-low"==`${s.getDefault}`?{background:"#8942c1"}:"")},null,4)),s.open?(0,o.kq)("",!0):((0,o.wg)(),(0,o.iD)("span",qe,(0,h.zw)(s.getCaption),1)),s.open?((0,o.wg)(),(0,o.iD)("span",Ie,"Pilih Priority")):(0,o.kq)("",!0)],2),(0,o._)("div",{"data-cy":"items-data",class:(0,h.C_)(["items",{selectHide:!s.open}])},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.options,((t,e)=>((0,o.wg)(),(0,o.iD)("div",{"data-cy":"looping-options",key:e},[(0,o._)("span",{"data-cy":"getPriority",onClick:e=>c.getPriority(t.priority,t.caption)},[(0,o._)("span",{"data-cy":"color-custom",class:"color-custom",style:(0,h.j5)({padding:"0px 7px",borderRadius:"100%",background:`${t.color}`,color:"red",fontSize:"10px",marginLeft:"10px",marginRight:"20px"})},null,4),(0,o.Uk)(" "+(0,h.zw)(t.caption)+" ",1),Le],8,Ve)])))),128))],2)],40,$e)}var He={props:{options:{type:Array,required:!0},default:{type:String,required:!1,default:null},tabindex:{type:Number,required:!1,default:0}},data(){return{getDefault:"very-high",getCaption:"Very High",selected:this.default?this.default:this.options.length>0?this.options[0].priority:null,open:!1}},methods:{getPriority:function(t,e){this.getDefault=t,this.getCaption=e,this.open=!1,this.$emit("input",this.getDefault)}}};const Pe=(0,l.Z)(He,[["render",Oe],["__scopeId","data-v-0f19619e"]]);var ze=Pe,Ee=a.p+"img/check.78ba853f.svg",Ye={name:"HomeView",setup(){const t=(0,U.iH)([]),e=(0,U.iH)([]),a=(0,U.iH)([]),i=(0,U.iH)(""),s={method:"get",headers:{"content-type":"application/json"}},c=(0,u.yj)(),l=c.query.id;async function n(){const t={method:"get",headers:{"content-type":"application/json"}};await fetch(`https://todo.api.devcode.gethired.id/activity-groups/${l}`,t).then((t=>t.json())).then((t=>{a.value=t}))}async function d(){await fetch(`https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${l}`,s).then((t=>t.json())).then((e=>{t.value=e.data})),t.value.length>=1?e.value=!0:e.value=!1}return i.value=l,(0,o.bv)((()=>{d(),n()})),{Check:Ee,showData:e,showGetOne:a,showGetData:t,getQueryParam:i,getActivityAll:d,getOneActivity:n}},data(){return{Activity:we,Edit:_e,Delete:De,showTitle:"",Sort:Ce,aToZ:Me,zToA:Te,New:Ae,Last:xe,DeleteModal:L,Yet:Se,check:"",getEditId:"",SuccessDel:!1,getIdForDelete:"",getPriority:"very-high",valCreate:!1,sort_card:!1,isModalVisibleDelete:!1,isModalVisible:!1,isModalVisibleEdit:!1,isActive:!0,createText:"",getTitle:""}},components:{CustomSelect:ze,SuccessDeleted:Z},methods:{customColor:function(t){this.getPriority=t},terlama:async function(t){this.check=t;const e={method:"get",headers:{"content-type":"application/json"}};await fetch(`https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${this.getQueryParam}`,e).then((t=>t.json())).then((t=>{this.showGetData=t.data.reverse(),this.sort_card=!1}))},terbaru:async function(t){this.check=t;const e={method:"get",headers:{"content-type":"application/json"}};await fetch(`https://todo.api.devcode.gethired.id/todo-items?activity_group_id=${this.getQueryParam}`,e).then((t=>t.json())).then((t=>{this.showGetData=t.data.sort(((t,e)=>e.created_at-t.created_at)),this.sort_card=!1}))},aToZFilter:async function(t){function e(t,e){return t.title<e.title?-1:t.title>e.title?1:0}this.check=t,this.showGetData=this.showGetData.sort(e),this.sort_card=!1},zToAFilter:async function(t){function e(t,e){return t.title>e.title?-1:t.title<e.title?1:0}this.check=t,this.showGetData=this.showGetData.sort(e),this.sort_card=!1},BelumSelesai:function(t){console.log(t),this.sort_card=!1},buttonSaveCheck:function(){this.createText?this.valCreate=!0:this.valCreate=!1},showModalDelete:function(t,e){this.getIdForDelete=t,this.isModalVisibleDelete=!0,this.getTitle=e},editActivity:function(){this.isActive=!this.isActive},showModal:function(){this.isModalVisible=!0},closeModal:function(){this.isModalVisible=!1,this.isModalVisibleEdit=!1,this.isModalVisibleDelete=!1},showModalEdit:function(t,e){this.getEditId=t,this.showTitle=e.title,this.isModalVisibleEdit=!0},close:function(){this.$emit("close")},showCard:function(){this.sort_card=!this.sort_card},createList:function(){const t=this.createText;console.log(this.getPriority);const e={method:"post",headers:{"content-type":"application/json"},body:JSON.stringify({title:t,activity_group_id:this.getQueryParam,priority:this.getPriority})};fetch("https://todo.api.devcode.gethired.id/todo-items",e).then((t=>t.json())).then((t=>{this.getActivityAll(),this.getOneActivity(),this.isModalVisible=!1,this.getPriority="very-high"}))},updateList:function(t){const e=this.createText,a={method:"PUT",headers:{"content-type":"application/json"},body:JSON.stringify({title:e,priority:this.getPriority,is_active:1,activity_group_id:this.getQueryParam,created_at:Date.now(),updated_at:Date.now()})};fetch(`https://todo.api.devcode.gethired.id/todo-items/${t}`,a).then((t=>t.json())).then((t=>{this.getActivityAll(),this.getOneActivity(),this.isModalVisible=!1,this.isModalVisibleEdit=!1}))},deleteData:function(t){const e={method:"delete",headers:{"content-type":"application/json"}};fetch(`https://todo.api.devcode.gethired.id/todo-items/${t}`,e).then((t=>t.json())).then((t=>{this.getActivityAll(),this.getOneActivity(),this.isModalVisibleDelete=!1,this.SuccessDel=!0,setTimeout((()=>{this.SuccessDel=!1}),1e3)}))},dellSuccess:function(){this.SuccessDel=!1},updateChange:async function(){const t={method:"put",headers:{"content-type":"application/json"},body:JSON.stringify({title:this.text,created_at:Date.now(),updated_at:Date.now()})};await fetch(`https://todo.api.devcode.gethired.id/activity-groups/${this.getQueryParam}`,t).then((t=>t.json())).then((t=>{this.getActivityAll(),this.getOneActivity()}))}}};const Ge=(0,l.Z)(Ye,[["render",fe]]);var Be=Ge;const Fe=[{path:"/home",name:"home",component:J},{path:"/detail",name:"detail",component:Be}],Ze=(0,u.p7)({history:(0,u.r5)(),routes:Fe});var Ue=Ze;(0,i.ri)(r).use(Ue).mount("#app")}},e={};function a(i){var o=e[i];if(void 0!==o)return o.exports;var s=e[i]={exports:{}};return t[i].call(s.exports,s,s.exports,a),s.exports}a.m=t,function(){var t=[];a.O=function(e,i,o,s){if(!i){var c=1/0;for(r=0;r<t.length;r++){i=t[r][0],o=t[r][1],s=t[r][2];for(var l=!0,n=0;n<i.length;n++)(!1&s||c>=s)&&Object.keys(a.O).every((function(t){return a.O[t](i[n])}))?i.splice(n--,1):(l=!1,s<c&&(c=s));if(l){t.splice(r--,1);var d=o();void 0!==d&&(e=d)}}return e}s=s||0;for(var r=t.length;r>0&&t[r-1][2]>s;r--)t[r]=t[r-1];t[r]=[i,o,s]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/todo_list/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var o,s,c=i[0],l=i[1],n=i[2],d=0;if(c.some((function(e){return 0!==t[e]}))){for(o in l)a.o(l,o)&&(a.m[o]=l[o]);if(n)var r=n(a)}for(e&&e(i);d<c.length;d++)s=c[d],a.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return a.O(r)},i=self["webpackChunktodo_list"]=self["webpackChunktodo_list"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(977)}));i=a.O(i)})();
//# sourceMappingURL=app.6db068dd.js.map