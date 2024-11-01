"use strict";(self.webpackChunktemplatiq=self.webpackChunktemplatiq||[]).push([[637],{3513:(e,t,a)=>{a.d(t,{A:()=>M});var l=a(1609),i=a(125),n=a(484),_=a(4581),m=a(9548),o=a(7143),r=a(6087),s=a(7723),c=a(5604);const p="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyMS4wODciIHZpZXdCb3g9IjAgMCAyNCAyMS4wODciPgogIDxwYXRoIGlkPSJoZWFydCIgZD0iTTE3LjQ5MywxLjkxN2E2LjQsNi40LDAsMCwwLTUuNSwzLjMsNi40LDYuNCwwLDAsMC01LjUtMy4zQTYuOCw2LjgsMCwwLDAsMCw4Ljk2NGMwLDQuNTQ1LDQuNzg0LDkuNTA5LDguOCwxMi44NzVhNC45NzIsNC45NzIsMCwwLDAsNi40LDBjNC4wMTItMy4zNjYsOC44LTguMzMsOC44LTEyLjg3NWE2LjgsNi44LDAsMCwwLTYuNS03LjA0N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDA1IC0xLjkxNykiIGZpbGw9IiNhMmEyYTIiLz4KPC9zdmc+Cg==";var g=a(5511);const M=e=>{let{template_id:t,slug:a,number_of_bookmarks:M}=e.item;const[d,u]=(0,r.useState)(e.type?e.type:""),{isLoggedIn:N,bookmarks:j}=(0,o.select)(m.A).getUserInfo(),x=j&&j.includes(t),[D,q]=(0,r.useState)(!1),[y,I]=(0,r.useState)(M),[E,h]=(0,r.useState)(x),[b,A]=(0,r.useState)(!1),z=a=>{if(a.preventDefault(),A(!0),E)(e=>{(0,_.A)("templatiq/bookmark/remove",{template_id:e}).then((e=>{(0,o.dispatch)(m.A).setBookmark(e.body.bookmarks)}))})(t),I(M),h(!1);else{(e=>{(0,_.A)("templatiq/bookmark/add",{template_id:e}).then((e=>{(0,o.dispatch)(m.A).setBookmark(e.body.bookmarks)}))})(t);const e=Number(y)+1;I(e),h(!0)}setTimeout((()=>{A(!1)}),300),e.onFavoriteCountUpdate?.(E)};return(0,r.useEffect)((()=>{I(E?Number(M)+1:M)}),[]),(0,l.createElement)(l.Fragment,null,"single"===d?(0,l.createElement)("a",{href:"#",className:`templatiq__details__header__action__link add-to-favorite templatiq-btn templatiq-btn-white ${E?"active":""} ${b?"disabled":""} `,onClick:e=>z(e)},(0,l.createElement)(c.A,{src:E?p:g.A,width:16,height:16}),b&&(0,l.createElement)("span",{className:"image-loader"})):N?(0,l.createElement)("a",{href:"#",className:`templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip ${E?"active":""}\n\t\t\t\t\t\t${b?"disabled":""}\n\t\t\t\t\t`,"data-info":E?(0,s.__)("Click to Unfavorite","templatiq"):(0,s.__)("Add to Favourite","templatiq"),onClick:z},(0,l.createElement)(c.A,{src:E?p:g.A,width:14,height:14}),y||"",b&&(0,l.createElement)("span",{className:"image-loader"})):(0,l.createElement)(l.Fragment,null,D?(0,l.createElement)(i.A,{slug:a,modalEnable:!0,onClose:()=>{q(!1)}}):"",(0,l.createElement)("a",{href:"#",className:"templatiq__template__single__quickmeta__item favorite-btn templatiq-tooltip","data-info":(0,s.__)("Add to Favourite","templatiq"),onClick:e=>{e.preventDefault(),document.querySelector(".templatiq").classList.add("templatiq-overlay-enable"),q(!0)}},(0,l.createElement)(c.A,{src:g.A,width:14,height:14}),M?(0,n.A)(M):"")))}},8449:(e,t,a)=>{a.d(t,{A:()=>y});var l=a(1609),i=a(125),n=a(4581),_=a(9548),m=a(7143),o=a(6087),r=a(7723),s=a(5604),c=a(6311),p=a(4839);const g="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgY2xpcC1wYXRoPSJ1cmwoI2NsaXAwXzE3MzdfMzQ2MikiPgo8cGF0aCBkPSJNMTIgMEM1LjM3MjU4IDAgMCA1LjM3MjU4IDAgMTJDMCAxOC42Mjc0IDUuMzcyNTggMjQgMTIgMjRDMTguNjI3NCAyNCAyNCAxOC42Mjc0IDI0IDEyQzIzLjk5MjggNS4zNzU1MyAxOC42MjQ1IDAuMDA3MTcxODcgMTIgMFpNMTIgMjFDNy4wMjk0MiAyMSAzIDE2Ljk3MDYgMyAxMkMzIDcuMDI5NDIgNy4wMjk0MiAzIDEyIDNDMTYuOTcwNiAzIDIxIDcuMDI5NDIgMjEgMTJDMjAuOTk0NSAxNi45NjgzIDE2Ljk2ODMgMjAuOTk0NSAxMiAyMVoiIGZpbGw9IiM2QzNBRjgiLz4KPHBhdGggZD0iTTEyIDE1LjA5MUMxMi44Mjg0IDE1LjA5MSAxMy41IDE0LjQxOTQgMTMuNSAxMy41OTFWNi41OTFDMTMuNSA1Ljc2MjU4IDEyLjgyODQgNS4wOTEgMTIgNS4wOTFDMTEuMTcxNiA1LjA5MSAxMC41IDUuNzYyNTggMTAuNSA2LjU5MVYxMy41OTFDMTAuNSAxNC40MTk0IDExLjE3MTYgMTUuMDkxIDEyIDE1LjA5MVoiIGZpbGw9IiM2QzNBRjgiLz4KPHBhdGggZD0iTTEyLjAwNDkgMTguOTk5OUMxMi44MzMzIDE4Ljk5OTkgMTMuNTA0OSAxOC4zMjg0IDEzLjUwNDkgMTcuNDk5OUMxMy41MDQ5IDE2LjY3MTUgMTIuODMzMyAxNS45OTk5IDEyLjAwNDkgMTUuOTk5OUMxMS4xNzY1IDE1Ljk5OTkgMTAuNTA0OSAxNi42NzE1IDEwLjUwNDkgMTcuNDk5OUMxMC41MDQ5IDE4LjMyODQgMTEuMTc2NSAxOC45OTk5IDEyLjAwNDkgMTguOTk5OVoiIGZpbGw9IiM2QzNBRjgiLz4KPC9nPgo8ZGVmcz4KPGNsaXBQYXRoIGlkPSJjbGlwMF8xNzM3XzM0NjIiPgo8cmVjdCB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIGZpbGw9IndoaXRlIi8+CjwvY2xpcFBhdGg+CjwvZGVmcz4KPC9zdmc+Cg==",M=({item:e,onClose:t})=>{const{template_id:a}=e,[i,_]=(0,o.useState)(!1),m=templatiq_obj?.builder,M=templatiq_obj?.pixetiq_status,d="Bricks"===templatiq_obj?.current_theme||"Bricks Child Theme"===templatiq_obj?.current_theme,u=async e=>{_(!0),(0,n.A)("templatiq/dependency/activate-theme").then((t=>{_(!1),t.success?(N(e),window.location.href=`?page=templatiq-library&template_id=${a}`):console.error("Installation failed")}))},N=e=>{e.preventDefault();let a=document.querySelector(".templatiq");a&&a.classList.remove("templatiq-overlay-enable"),t()};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.uq,{className:"templatiq__modal templatiq__modal--install"},"bricks"!==m||d?(0,l.createElement)("div",{className:"templatiq__modal__content"},(0,l.createElement)("h2",{className:"templatiq__modal__title"},(0,l.createElement)(s.A,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjkiIHZpZXdCb3g9IjAgMCAyOCAyOSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04Ljc3MzcxIDIwLjAyMDlIMTAuMTE4N0MxMC4yOTc3IDIwLjAyMDkgMTAuNDQ0MSAxOS44NzQ2IDEwLjQ0NDEgMTkuNjk1N1YxMy4wNDM0QzEwLjQ0NDEgMTIuODY0NSAxMC4yOTc3IDEyLjcxODIgMTAuMTE4NyAxMi43MTgySDguNzczNzFDOC41OTQ3MyAxMi43MTgyIDguNDQ4MzIgMTIuODY0NSA4LjQ0ODMyIDEzLjA0MzRWMTkuNjk1N0M4LjQ0ODMyIDE5Ljg3NDcgOC41OTQ3MyAyMC4wMjA5IDguNzczNzEgMjAuMDIwOVpNMTEuNjIxNCAxOS44MTQ3TDEyLjAxNDUgMjAuMDIxSDE3LjE2ODFDMTcuNjkxNiAyMC4wMjEgMTguMTIgMTkuNTkyOSAxOC4xMiAxOS4wNjk0QzE4LjEyIDE4LjU0NjEgMTcuNjkxNiAxOC4xMTc5IDE3LjE2ODEgMTguMTE3OUgxNy42NDUzQzE4LjE2ODggMTguMTE3OSAxOC41OTcyIDE3LjY4ODQgMTguNTk3MiAxNy4xNjM1QzE4LjU5NzIgMTYuNjM4NSAxOC4xNjg4IDE2LjIwOSAxNy42NDUzIDE2LjIwOUgxOC4xMjI2QzE4LjY0NjEgMTYuMjA5IDE5LjA3NDQgMTUuNzc5NiAxOS4wNzQ0IDE1LjI1NDZDMTkuMDc0NCAxNC43Mjk2IDE4LjY0NjEgMTQuMzAwMSAxOC4xMjI2IDE0LjMwMDFIMTguNTk5OEMxOS4xMjMzIDE0LjMwMDEgMTkuNTUxNyAxMy44NzA3IDE5LjU1MTcgMTMuMzQ1N0MxOS41NTE3IDEyLjgyMDcgMTkuMTIzMyAxMi4zOTEyIDE4LjU5OTggMTIuMzkxMkwxNS4yMDEyIDEyLjQwODRDMTUuNTYzNSAxMC45OTggMTYuMTUwOSA5LjEzMTQxIDE2LjIwNjIgOC41MzYzN0MxNi4zMzM2IDcuMTYzMTQgMTUuMTk2MSA2LjE5MTExIDE0LjU0NjggNy4yNzA1OEwxMS40NzI4IDEyLjM4MkMxMS41NzA5IDEyLjU4MTggMTEuNjI2MiAxMi44MDYzIDExLjYyNiAxMy4wNDM1TDExLjYyMTQgMTkuODE0N1pNMjUuNjA0MSAyMS4zNTg0QzI3LjczNDQgMjAuNjIxMSAyOC43MTA0IDE3LjYxODMgMjcuNDIwNSAxNS43N0MyNi44Nzc4IDE0Ljk5MjQgMjYuODc3NyAxNC4wMDc3IDI3LjQyMDQgMTMuMjMwMUMyOC43MTA0IDExLjM4MTkgMjcuNzM0NSA4LjM3OTA4IDI1LjYwNDIgNy42NDE3M0MyNC43MDc5IDcuMzMxNTggMjQuMTI4OCA2LjUzNDg2IDI0LjExMDcgNS41ODY5MUMyNC4wNjc2IDMuMzMzNjcgMjEuNTEyNSAxLjQ3Nzc4IDE5LjM1NTQgMi4xMzMwMUMxOC40NDc5IDIuNDA4NjggMTcuNTExMSAyLjEwNDUxIDE2LjkzOSAxLjM0ODI2QzE1LjU3OTQgLTAuNDQ5MzU4IDEyLjQyMDkgLTAuNDQ5NDMyIDExLjA2MTIgMS4zNDgxMUMxMC40ODkxIDIuMTA0MzYgOS41NTIyMiAyLjQwODgzIDguNjQ0ODEgMi4xMzMwOUM2LjQ4NzgyIDEuNDc3NzEgMy45MzI1MyAzLjMzMzUyIDMuODg5MzkgNS41ODY3NkMzLjg3MTIyIDYuNTM0NzEgMy4yOTIzMSA3LjMzMTUgMi4zOTYwNSA3LjY0MTY2QzAuMjY1NjU3IDguMzc4OTMgLTAuNzEwMzggMTEuMzgxNyAwLjU3OTUyNyAxMy4yM0MxLjEyMjI1IDE0LjAwNzYgMS4xMjIzMiAxNC45OTIzIDAuNTc5NjAxIDE1Ljc2OTlDLTAuNzEwNDU0IDE3LjYxODEgMC4yNjU1MDggMjAuNjIxIDIuMzk1ODMgMjEuMzU4NEMzLjI5MjA5IDIxLjY2ODUgMy44NzEyMiAyMi40NjUxIDMuODg5MzIgMjMuNDEzMUMzLjkzMjM5IDI1LjY2NjMgNi40ODc1MyAyNy41MjIyIDguNjQ0NTIgMjYuODY3QzkuNTUyIDI2LjU5MTMgMTAuNDg4OSAyNi44OTU1IDExLjA2MDkgMjcuNjUxN0MxMi40MjA2IDI5LjQ0OTQgMTUuNTc5MiAyOS40NDk0IDE2LjkzODkgMjcuNjUxOEMxNy41MTA5IDI2Ljg5NTYgMTguNDQ3NyAyNi41OTEzIDE5LjM1NTIgMjYuODY3QzIxLjUxMjIgMjcuNTIyMyAyNC4wNjc0IDI1LjY2NjQgMjQuMTEwNSAyMy40MTMyQzI0LjEyODggMjIuNDY1MiAyNC43MDc4IDIxLjY2ODYgMjUuNjA0MSAyMS4zNTg0Wk0xNCA1LjAzMTU5QzE5LjIzMSA1LjAzMTU5IDIzLjQ3MTYgOS4yNzA3NiAyMy40NzE2IDE0LjVDMjMuNDcxNiAxOS43MjkzIDE5LjIzMSAyMy45Njg1IDE0IDIzLjk2ODVDOC43NjkwNiAyMy45Njg1IDQuNTI4NTEgMTkuNzI5MyA0LjUyODUxIDE0LjVDNC41Mjg1MSA5LjI3MDc2IDguNzY5MDYgNS4wMzE1OSAxNCA1LjAzMTU5WiIgZmlsbD0iIzg5NDFGRiIvPgo8L3N2Zz4K",width:30,height:30}),(0,r.__)("Recommendation","templatiq")),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("We recommend using the Pixetiq theme to fully experience the design and features of this template. While other themes are compatible, they might not match the demo.","templatiq")),(0,l.createElement)("div",{className:"templatiq__modal__actions"},(0,l.createElement)("button",{className:"templatiq-btn templatiq-btn-primary",onClick:"not-installed"===M?async e=>{_(!0),(await wp.updates.installTheme({slug:"pixetiq"})).customizeUrl&&await u(e)}:"installed-but-inactive"===M?u:null,disabled:i},"not-installed"===M?i?(0,r.__)("Installing...","templatiq"):(0,r.__)("Yes, Install","templatiq"):i?(0,r.__)("Activating...","templatiq"):(0,r.__)("Yes, Activate","templatiq")),!i&&(0,l.createElement)("button",{className:"templatiq-btn",onClick:e=>{window.location.href=`?page=templatiq-library&template_id=${a}&ci=1`,N(e)}},(0,r.__)("Continue without ","templatiq")," ","not-installed"===M?"installing":"activating"))):(0,l.createElement)("div",{className:"templatiq__modal__content"},(0,l.createElement)("h2",{className:"templatiq__modal__title"},(0,l.createElement)(s.A,{src:g,width:30,height:30}),(0,r.__)("Required","templatiq")),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Bricks Theme Must be Installed","templatiq"))),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:N},(0,l.createElement)(s.A,{src:p.A,width:20,height:20}))))};var d=a(3557),u=a(5568);const N=({item:e,onClose:t,onLoginClick:a})=>{const{isLoggedIn:i}=(0,m.select)(_.A).getUserInfo(),{template_id:n,slug:o}=e;return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.uq,{className:"templatiq__modal templatiq__modal--pro"},(0,l.createElement)("div",{className:"templatiq__modal__content"},(0,l.createElement)("h2",{className:"templatiq__modal__title"},(0,r.__)("Liked This Template?","templatiq")),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("This is a premium template. Get access to this premium template.","templatiq")),(0,l.createElement)("a",{href:(0,u.A)(o,n),target:"_blank",className:"templatiq-btn templatiq-btn-warning templatiq-btn-full semi-bold"},(0,l.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16.417",height:"16.5",viewBox:"1063.75 119.75 16.417 16.5"},(0,l.createElement)("path",{d:"M1065.75 119.756c.1.008.24.028.39.096.2.09.37.234.48.415.09.139.13.274.15.372.02.083.03.177.04.255 0 .005.01.01.01.015l.26 1.841h11.71c.11 0 .23 0 .34.009.12.011.3.038.48.144.23.134.41.346.5.597.07.199.06.381.05.501-.01.107-.04.227-.06.332l-1 5.257c-.06.325-.11.609-.18.843-.06.248-.15.49-.31.718a2.2 2.2 0 0 1-.94.783c-.26.112-.51.154-.77.173-.24.018-.53.018-.86.018h-6.47c-.35 0-.65 0-.9-.019a2.297 2.297 0 0 1-.8-.186 2.26 2.26 0 0 1-.96-.839c-.15-.243-.23-.5-.29-.762a10.8 10.8 0 0 1-.14-.893l-.79-5.822-.34-2.354h-.85a.753.753 0 0 1-.75-.75c0-.414.34-.75.75-.75h1c.07 0 .17 0 .25.006Zm1.54 4.494.67 4.947c.05.38.09.622.13.806.03.175.07.24.09.274.07.122.19.219.32.28.03.016.1.039.28.053.19.014.43.015.82.015h6.41c.37 0 .6 0 .78-.014.17-.012.24-.034.27-.05a.75.75 0 0 0 .32-.261c.02-.032.05-.093.1-.257.04-.173.09-.401.15-.759l.96-5.034h-11.3Zm.96 10.5a1.5 1.5 0 1 1 2.999-.001 1.5 1.5 0 0 1-2.999.001Zm6 0a1.5 1.5 0 1 1 2.999-.001 1.5 1.5 0 0 1-2.999.001Z",fill:"#0b0d15",fillRule:"evenodd","data-name":"Path 1659"})),(0,r.__)("Buy This Item","templatiq")),!i&&(0,l.createElement)("div",{className:"templatiq__modal__pro-auth"},(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Already a Premium Member?","templatiq")),(0,l.createElement)("a",{href:(0,d.A)(o),target:"_blank",className:"templatiq__auth__btn templatiq-btn templatiq-btn-primary"},(0,r.__)("Connect Account","templatiq")))),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:e=>{e.preventDefault();let a=document.querySelector(".templatiq");a&&a.classList.remove("templatiq-overlay-enable"),t()}},(0,l.createElement)(s.A,{src:p.A,width:20,height:20}))))},j=({item:e,onClose:t,required_plugins:a,not_installable_plugins:i})=>{const{template_id:_,builder:m,directory_page_type:M}=e,d=templatiq_obj?.directory_types,u=templatiq_obj?.builder,N="Bricks"===templatiq_obj?.current_theme||"Bricks Child Theme"===templatiq_obj?.current_theme;let[j,x]=(0,o.useState)([]),[D,q]=(0,o.useState)([]),[y,I]=(0,o.useState)([]),[E,h]=(0,o.useState)(!0),[b,A]=(0,o.useState)(""),[z,T]=(0,o.useState)(!1),[L,w]=(0,o.useState)(!1);const[k,f]=(0,o.useState)(a||[]),[v,S]=(0,o.useState)([]),[O,C]=(0,o.useState)([]),[Y,U]=(0,o.useState)(!1),[Q,Z]=(0,o.useState)(!0),[P,F]=(0,o.useState)(!1),[G,R]=(0,o.useState)(!1);let B=e=>{e&&e.preventDefault();let a=document.querySelector(".templatiq");a&&a.classList.remove("templatiq-overlay-enable"),t()};const W=async e=>{T(!0),U(!0),S((t=>[...t,e.slug]));try{await new Promise(((t,a)=>{(0,n.A)("templatiq/dependency/install",{plugin:e}).then((l=>{T(!1),l.success?(C((t=>[...t,e.slug])),t(l)):a(new Error("Installation failed"))}))}))}catch(e){T(!1)}},H=async e=>{await(async(e,t)=>{var a={unique_id:e,data:{edit_mode:!0,display:!0,template_id:e}};t&&jQuery.extend(!0,a,t),elementorCommon.ajax.addRequest("get_templatiq_template_data",a)})(e,{success:function(e){const t=e.data,a=Backbone.Model.extend({defaults:{title:"",type:""}});$e.run("document/elements/import",{model:new a,data:t})},error:function(e){console.error("Error: ",e)},complete:function(e){B();const t=document.getElementById("tmTemplateLibrary__modal");t&&(t.style.display="none")}})},X=()=>{const e=k.filter((e=>e.update_required)).map((e=>e.slug));if(U(0!==e?.length),k&&0===k?.length)Z(!0),x([]);else{const e=k&&k.every((e=>O.includes(e.slug))),t=k.filter((e=>!O.includes(e.slug)||e.update_required));e?(Z(!0),x([])):(f(t),Z(!1))}};return(0,o.useEffect)((()=>{X()}),[O]),(0,o.useEffect)((()=>{X(),f(a);const e=document.body.classList.contains("elementor-editor-active");R(e),e&&0===k?.length&&H(_)}),[]),(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.uq,{className:"templatiq__modal templatiq__modal--required "+(z&&Q?"templatiq__loading":"")},"bricks"!==u||N?(0,l.createElement)("form",{className:"templatiq__modal__form",onSubmit:async e=>{e.preventDefault();for(const e of k)await W(e);G&&H(_)}},(0,l.createElement)("div",{className:"templatiq__modal__content"},P||L?P?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h2",{className:"templatiq__modal__title"},"Congratulations!"),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("You've successfully imported your page. You can now edit and customize it as needed.","templatiq")),(0,l.createElement)("div",{className:"templatiq__modal__actions"},(0,l.createElement)("a",{href:P.edit_link,target:"_blank",className:"templatiq-btn templatiq-btn-primary"},(0,r.__)("Edit Template","templatiq")),(0,l.createElement)("a",{href:P.visit,target:"_blank",className:"templatiq-btn templatiq-btn-primary"},(0,r.__)("View Template","templatiq")))):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h2",{className:"templatiq__modal__title text-center"},(0,r.__)("Error","templatiq")),(0,l.createElement)("p",{className:"templatiq__modal__desc text-danger text-center"},L)):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h2",{className:"templatiq__modal__title"},Q?d?.length>1&&!y?.length>0&&!G&&"none"!==M&&""!==M?(0,r.__)("Available Directory Type","templatiq"):G?(0,r.__)("Importing...","templatiq"):(0,r.__)("Enter Page Title","templatiq"):(0,r.__)("Required Plugins","templatiq")),Q&&!d?.length>1&&!G&&"none"!==M&&""!==M?(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("To import this item you need to install all the Plugin listed below.","templatiq")):null,(0,l.createElement)("div",{className:"templatiq__modal__plugins"},Q||G?d?.length>1&&!y?.length>0&&!G&&"none"!==M&&""!==M?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Choose the directories where you'd like to include this page. You can choose multiple directories.","templatiq")),(0,l.createElement)("div",{className:"templatiq__modal__plugins"},d.map(((e,t)=>(0,l.createElement)("div",{key:t,className:"templatiq__modal__plugin templatiq__checkbox"},(0,l.createElement)("input",{id:"type_"+_+"_"+t,name:"type_"+_+"_"+t,type:"checkbox",className:"templatiq__modal__plugin__checkbox templatiq__checkbox__input",onChange:()=>(e=>{const t=D.includes(e)?D.filter((t=>t!==e)):[...D,e];return q(t),h(0===t?.length),t})(e)}),(0,l.createElement)("label",{htmlFor:"type_"+_+"_"+t,className:"templatiq__modal__plugin__label templatiq__checkbox__label"},(0,l.createElement)("a",{href:"#",className:"templatiq__modal__plugin__link"},e.name))))))):(0,l.createElement)("div",{className:"templatiq__modal__page"},G?(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Elementor Content Importing...","templatiq")):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("input",{type:"text",className:"templatiq__modal__page__title",placeholder:(0,r.__)("Enter Page Title","templatiq"),onChange:e=>(e=>{e.preventDefault(),A(e.target.value)})(e)}),(0,l.createElement)("button",{type:"button",className:"templatiq__modal__page__button templatiq-btn templatiq-btn-primary",onClick:()=>(async(e,t,a,l,i)=>{T(!0),(0,n.A)("templatiq/template/import-as-page",{title:e,template_id:t,builder:a,pageType:l,directoryTypes:i}).then((e=>{T(!1),e.post_id&&F(e)}))})(b,_,m,M,{submittedTypes:y.length>0?y:d}),disabled:""===b},(0,r.__)("Create a Page","templatiq")))):(0,l.createElement)("div",{className:"templatiq__modal__plugins"},k&&k.map(((e,t)=>{let a=v.includes(e.slug),i="";return O.includes(e.slug)?i=(0,r.__)("Installed","templatiq"):a&&(i=(0,r.__)("Installing...","templatiq")),(0,l.createElement)("div",{key:t,className:"templatiq__modal__plugin templatiq__checkbox "+(e.update_required?"update_required":"")},(0,l.createElement)("input",{id:"plugin_"+_+"_"+t,name:"plugin_"+_+"_"+t,type:"checkbox",className:"templatiq__modal__plugin__checkbox templatiq__checkbox__input",checked:!0,readOnly:!0}),(0,l.createElement)("label",{htmlFor:"plugin_"+_+"_"+t,className:"templatiq__modal__plugin__label templatiq__checkbox__label"},(0,l.createElement)("a",{href:"#",className:"templatiq__modal__plugin__link"},e.name),e.update_required&&(0,l.createElement)("div",{className:"templatiq__modal__plugin__label__required"},(0,l.createElement)(s.A,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik02IDBDNi4zNjgxOSAwIDYuNjY2NjcgMC4yOTg0NzcgNi42NjY2NyAwLjY2NjY2N1Y0LjM5MDUyTDkuNTI4NiAxLjUyODZDOS43ODg5NSAxLjI2ODI1IDEwLjIxMTEgMS4yNjgyNSAxMC40NzE0IDEuNTI4NkMxMC43MzE4IDEuNzg4OTUgMTAuNzMxOCAyLjIxMTA2IDEwLjQ3MTQgMi40NzE0TDcuNjA5NDggNS4zMzMzM0gxMS4zMzMzQzExLjcwMTUgNS4zMzMzMyAxMiA1LjYzMTgxIDEyIDZDMTIgNi4zNjgxOSAxMS43MDE1IDYuNjY2NjcgMTEuMzMzMyA2LjY2NjY3SDcuNjA5NDhMMTAuNDcxNCA5LjUyODZDMTAuNzMxOCA5Ljc4ODk1IDEwLjczMTggMTAuMjExMSAxMC40NzE0IDEwLjQ3MTRDMTAuMjExMSAxMC43MzE4IDkuNzg4OTUgMTAuNzMxOCA5LjUyODYgMTAuNDcxNEw2LjY2NjY3IDcuNjA5NDhWMTEuMzMzM0M2LjY2NjY3IDExLjcwMTUgNi4zNjgxOSAxMiA2IDEyQzUuNjMxODEgMTIgNS4zMzMzMyAxMS43MDE1IDUuMzMzMzMgMTEuMzMzM1Y3LjYwOTQ4TDIuNDcxNCAxMC40NzE0QzIuMjExMDYgMTAuNzMxOCAxLjc4ODk1IDEwLjczMTggMS41Mjg2IDEwLjQ3MTRDMS4yNjgyNSAxMC4yMTExIDEuMjY4MjUgOS43ODg5NSAxLjUyODYgOS41Mjg2TDQuMzkwNTIgNi42NjY2N0gwLjY2NjY2N0MwLjI5ODQ3NyA2LjY2NjY3IDAgNi4zNjgxOSAwIDZDMCA1LjYzMTgxIDAuMjk4NDc3IDUuMzMzMzMgMC42NjY2NjcgNS4zMzMzM0g0LjM5MDUyTDEuNTI4NiAyLjQ3MTRDMS4yNjgyNSAyLjIxMTA2IDEuMjY4MjUgMS43ODg5NSAxLjUyODYgMS41Mjg2QzEuNzg4OTUgMS4yNjgyNSAyLjIxMTA2IDEuMjY4MjUgMi40NzE0IDEuNTI4Nkw1LjMzMzMzIDQuMzkwNTJWMC42NjY2NjdDNS4zMzMzMyAwLjI5ODQ3NyA1LjYzMTgxIDAgNiAwWiIgZmlsbD0iI0ZCM0QzOCIvPgo8L3N2Zz4K",width:12,height:12,className:"templatiq__modal__plugin__label__required__icon"}),(0,l.createElement)("span",{className:"templatiq__modal__plugin__label__required__text"},(0,r.__)("Update Required","templatiq")))),e.is_pro&&(0,l.createElement)("span",{className:"templatiq__modal__plugin__type"},(0,r.__)("(Pro)","templatiq")),i&&(0,l.createElement)("span",{className:"templatiq__modal__plugin__status"},i))})),i&&i.map(((e,t)=>(0,l.createElement)("div",{key:t,className:"templatiq__modal__plugin templatiq__checkbox"},(0,l.createElement)("input",{id:"plugin_"+_+"_pro_"+t,name:"plugin_"+_+"_pro_"+t,type:"checkbox",className:"templatiq__modal__plugin__checkbox templatiq__checkbox__input",disabled:!0}),(0,l.createElement)("label",{htmlFor:"plugin_"+_+"_pro_"+t,className:"templatiq__modal__plugin__label templatiq__checkbox__label"},(0,l.createElement)("a",{href:"#",className:"templatiq__modal__plugin__link"},e.name)),(0,l.createElement)("span",{className:"templatiq__modal__plugin__type"},(0,r.__)("(Pro)","templatiq"))))))),Q&&!d?.length>1&&!G?(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,l.createElement)("strong",null,(0,r.__)("Note:","templatiq")),(0,r.__)(" Make sure you have manually installed & activated the Pro Plugin listed above.","templatiq")):"",(0,l.createElement)("div",{className:"templatiq__modal__actions"},Q?!y?.length&&d?.length>1&&!G&&"none"!==M&&""!==M?(0,l.createElement)("button",{disabled:E,className:"templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-success",onClick:e=>(e=>{e.preventDefault(),I(D)})(e)},(0,r.__)("Insert Page","templatiq")):null:(0,l.createElement)(l.Fragment,null,(0,l.createElement)("button",{type:"submit",disabled:Y,className:"templatiq__modal__action templatiq__modal__action--import templatiq-btn  templatiq-btn-primary"},(0,r.__)("Install and Proceed to Import","templatiq")),(0,l.createElement)("button",{className:"templatiq__modal__action templatiq__modal__action--cancel templatiq-btn",onClick:B},(0,r.__)("Cancel","templatiq"))))))):(0,l.createElement)("div",{className:"templatiq__modal__content required-items-center"},(0,l.createElement)("h2",{className:"templatiq__modal__title"},(0,l.createElement)(s.A,{src:g,width:30,height:30}),(0,r.__)("Required","templatiq")),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Bricks Theme Must be Installed","templatiq"))),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:B},(0,l.createElement)(s.A,{src:p.A,width:20,height:20}))))},x="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNC42NDQiIGhlaWdodD0iMjUuNTI4IiB2aWV3Qm94PSIwIDAgMzQuNjQ0IDI1LjUyOCI+CiAgPHBhdGggaWQ9IlBhdGhfNiIgZGF0YS1uYW1lPSJQYXRoIDYiIGQ9Ik0xNjEuNTc4LDEzNy4wN2EzLjY0NiwzLjY0NiwwLDAsMC01LjE1NywwbC0xNS42NTYsMTUuNjU0LTYuNTM5LTYuNTM3YTMuNjQ2LDMuNjQ2LDAsMSwwLTUuMTU3LDUuMTU3bDkuMTE3LDkuMTE3YTMuNjQ1LDMuNjQ1LDAsMCwwLDUuMTU3LDBsMTguMjM0LTE4LjIzNEEzLjY0NiwzLjY0NiwwLDAsMCwxNjEuNTc4LDEzNy4wN1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjguMDAyIC0xMzYuMDAyKSIgZmlsbD0iI2ZmZiIvPgo8L3N2Zz4K",D=({onClose:e,install_directorist:t})=>{let[a,i]=(0,o.useState)(!1),[_,m]=(0,o.useState)(!1),g=t=>{t&&t.preventDefault();let a=document.querySelector(".templatiq");a&&a.classList.remove("templatiq-overlay-enable"),e()};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(c.uq,{className:"templatiq__modal templatiq__modal--install"},(0,l.createElement)("form",{className:"templatiq__modal__form",onSubmit:async e=>{e.preventDefault(),await(async e=>{i(!0),(0,n.A)("templatiq/dependency/install",{plugin:e}).then((e=>{i(!1),console.log("installDirectorist",e),e.success?(m(!0),setTimeout((()=>{window.location.reload(),g()}),600)):console.error("Installation failed")}))})(t)}},(0,l.createElement)("div",{className:"templatiq__modal__content"},_?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"templatiq__modal__icon templatiq__modal__icon--success"},(0,l.createElement)(s.A,{src:x,width:30,height:30})),(0,l.createElement)("h2",{className:"templatiq__modal__title"},(0,l.createElement)("span",{className:"text-success"},(0,r.__)("Success!","templatiq"))),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Directorist successful installed & activated","templatiq")),(0,l.createElement)("button",{disabled:!0,className:"templatiq__modal__action templatiq__modal__action--install templatiq-btn  templatiq-btn-primary"},(0,l.createElement)(s.A,{src:x,width:16,height:16}),(0,r.__)("Installed & Activated","templatiq"))):a?(0,l.createElement)(l.Fragment,null,(0,l.createElement)("h2",{className:"templatiq__modal__title templatiq__modal__title--installing"},(0,r.__)("Installing the directorist Plugin","templatiq")),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("Installing directorist you need to install directorist. Installing directorist you need to install directorist.","templatiq")),(0,l.createElement)("button",{disabled:!0,className:"templatiq__modal__action templatiq__modal__action--install templatiq-btn templatiq-btn-primary templatiq-btn-loading"},(0,r.__)("Installing","templatiq"))):(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{className:"templatiq__modal__icon templatiq__modal__icon--warning"},(0,l.createElement)(s.A,{src:"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjgzMzMgMTUuMTY2NlY4LjE2NjYzQzEyLjgzMzMgNy41MjQ5NiAxMy4zNTgzIDYuOTk5OTYgMTQgNi45OTk5NkMxNC42NDE2IDYuOTk5OTYgMTUuMTY2NiA3LjUyNDk2IDE1LjE2NjYgOC4xNjY2M1YxNS4xNjY2QzE1LjE2NjYgMTUuODA4MyAxNC42NDE2IDE2LjMzMzMgMTQgMTYuMzMzM0MxMy4zNTgzIDE2LjMzMzMgMTIuODMzMyAxNS44MDgzIDEyLjgzMzMgMTUuMTY2NlpNMTQgMTcuNUMxMy4wMzE2IDE3LjUgMTIuMjUgMTguMjgxNiAxMi4yNSAxOS4yNUMxMi4yNSAyMC4yMTgzIDEzLjAzMTYgMjEgMTQgMjFDMTQuOTY4MyAyMSAxNS43NSAyMC4yMTgzIDE1Ljc1IDE5LjI1QzE1Ljc1IDE4LjI4MTYgMTQuOTY4MyAxNy41IDE0IDE3LjVaTTI3LjUxIDIzLjE5MzNDMjYuNjkzMyAyNC43NjgzIDI0Ljk3ODMgMjUuNjY2NiAyMi44MzE2IDI1LjY2NjZINS4xNzk5N0MzLjAyMTY0IDI1LjY2NjYgMS4zMTgzIDI0Ljc2ODMgMC41MDE2MzYgMjMuMTkzM0MtMC4zMjY2OTcgMjEuNjA2NiAtMC4wOTMzNjM3IDE5LjU3NjYgMS4wODQ5NyAxNy44NzMzTDEwLjQ2NSAzLjAzMzI5QzExLjI5MzMgMS44NDMyOSAxMi42IDEuMTY2NjMgMTQgMS4xNjY2M0MxNS40IDEuMTY2NjMgMTYuNzA2NiAxLjg0MzI5IDE3LjUgMi45OTgyOUwyNi45MjY2IDE3Ljg5NjZDMjguMTA1IDE5LjYgMjguMzI2NiAyMS42MTgzIDI3LjQ5ODMgMjMuMTkzM0gyNy41MVpNMjUuMDAxNiAxOS4yMDMzQzI1LjAwMTYgMTkuMjAzMyAyNC45NzgzIDE5LjE4IDI0Ljk3ODMgMTkuMTU2NkwxNS41NjMzIDQuMjgxNjNDMTUuMjI1IDMuODAzMjkgMTQuNjQxNiAzLjQ5OTk2IDE0IDMuNDk5OTZDMTMuMzU4MyAzLjQ5OTk2IDEyLjc3NSAzLjgwMzI5IDEyLjQxMzMgNC4zMjgyOUwzLjAyMTY0IDE5LjE1NjZDMi4yOTgzIDIwLjE4MzMgMi4xMzQ5NyAyMS4zMDMzIDIuNTU0OTcgMjIuMTA4M0MyLjk2MzMgMjIuOTAxNiAzLjg5NjY0IDIzLjMzMzMgNS4xNjgzIDIzLjMzMzNIMjIuODA4M0MyNC4wOCAyMy4zMzMzIDI1LjAxMzMgMjIuOTAxNiAyNS40MjE2IDIyLjEwODNDMjUuODQxNiAyMS4zMDMzIDI1LjY3ODMgMjAuMTgzMyAyNC45OSAxOS4yMDMzSDI1LjAwMTZaIiBmaWxsPSIjRjE3RDBFIi8+Cjwvc3ZnPgo=",width:30,height:30})),(0,l.createElement)("h2",{className:"templatiq__modal__title"},(0,r.__)("Oops!","templatiq")," ",(0,l.createElement)("span",{className:"text-warning"},(0,r.__)("Directorist Plugin is Required","templatiq"))),(0,l.createElement)("p",{className:"templatiq__modal__desc"},(0,r.__)("To insert this template, please complete the installation and setup of the Directorist plugin first.","templatiq")),(0,l.createElement)("button",{type:"submit",className:"templatiq__modal__action templatiq__modal__action--install templatiq-btn  templatiq-btn-primary"},(0,r.__)("Install Now","templatiq"))))),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:g},(0,l.createElement)(s.A,{src:p.A,width:20,height:20}))))};var q=a(5651);const y=({item:e,isPro:t,templateRef:a,className:c,innerText:p,solidIcon:g})=>{let{template_id:d,slug:u,type:x,required_plugins:y,is_directorist_required:I}=e;const E=y.filter((e=>e?.init)),h=templatiq_obj?.builder,b="installed-and-active"===templatiq_obj?.pixetiq_status,A="Bricks"===templatiq_obj?.current_theme||"Bricks Child Theme"===templatiq_obj?.current_theme,z="pack"===x,T=`?page=templatiq-library&template_id=${d}&ci=0`,{isLoggedIn:L,purchased:w,unlocked:k,hasAllAccess:f}=(0,m.select)(_.A).getUserInfo(),[v,S]=(0,o.useState)(!1),[O,C]=(0,o.useState)(!1),[Y,U]=(0,o.useState)(!1),[Q,Z]=(0,o.useState)(!1),[P,F]=(0,o.useState)(E),[G,R]=(0,o.useState)(E),[B,W]=(0,o.useState)(!1),H=e=>w&&w.some((t=>e in t)),X=e=>k&&k.some((t=>e in t)),J=e=>{e.stopPropagation(),document.querySelector(".templatiq").classList.add("templatiq-overlay-enable"),U(!1),Z(!0)},V=()=>{U(!1)},K=async e=>{const t=await(0,n.A)("templatiq/dependency/required-plugins",{plugins:e});if(t){const{active:e,inactive:a,notinstalled:l}=t.required_plugins,i=e.filter((e=>e.update_required)),n=l.filter((e=>!e.is_pro||e.pro_unlocked)),_=l.filter((e=>e.is_pro&&!e?.pro_unlocked)),m=[...i,...a,...n];F(m),R(_)}};return(0,o.useEffect)((()=>{if(I){const e=P.length>0&&P.find((e=>"directorist"===e.slug));W(e||!1)}}),[P,Y]),(0,l.createElement)(l.Fragment,null,Y?!t||v||O||f?z?(0,l.createElement)(M,{item:e,onClose:V}):B?(0,l.createElement)(D,{install_directorist:B,onClose:V}):(0,l.createElement)(j,{item:e,required_plugins:P,not_installable_plugins:G,installed_directorist:!B,onClose:V}):(0,l.createElement)(N,{item:e,onClose:V,onLoginClick:J}):null,Q&&(0,l.createElement)(i.A,{slug:u,modalEnable:!0,onClose:()=>{Z(!1)}}),(0,l.createElement)("button",{id:d,className:c||"templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button",onClick:e=>L||t?(async e=>{e.stopPropagation();const l=()=>{document.querySelector(".templatiq").classList.add("templatiq-overlay-enable"),a&&a.current&&a.current.classList.add("insert-modal-open"),U(!0)};if(S(H(d)),C(X(d)),await K(E),z)!t||H(d)||X(d)||b?"bricks"!==h?b?window.location.href=T:l():A?window.location.href=T:l():l();else if(t||B)l();else try{l()}catch(e){console.error("Error fetching installable plugins:",e)}})(e):J(e)},(0,l.createElement)(s.A,{src:g?"data:image/svg+xml;base64,PHN2ZyBpZD0iZG93bmxvYWQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjEyIiBoZWlnaHQ9IjEyIiB2aWV3Qm94PSIwIDAgMTIgMTIiPgogIDxwYXRoIGlkPSJQYXRoXzE1NTYiIGRhdGEtbmFtZT0iUGF0aCAxNTU2IiBkPSJNMTEzLjEzNCw4Ljg0YTIuMjU1LDIuMjU1LDAsMCwwLDMuMTg1LDBoMGwxLjYwNy0xLjZhLjc1Ljc1LDAsMSwwLTEuMDQzLTEuMDc4bC0uMDE4LjAxOC0xLjM5MywxLjM4OUwxMTUuNDYxLjc0OUEuNzUuNzUsMCwwLDAsMTE0LjcxLDBoMGEuNzUuNzUsMCwwLDAtLjc1MS43NDlsLjAxLDYuODA2LTEuMzgyLTEuMzc5YS43NS43NSwwLDAsMC0xLjA2MSwxLjA1OVoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMDguNzEpIiBmaWxsPSIjNmU2ZTZlIi8+CiAgPHBhdGggaWQ9IlBhdGhfMTU1NyIgZGF0YS1uYW1lPSJQYXRoIDE1NTciIGQ9Ik0xMS4yNSwzMDkuMzMzYS43NS43NSwwLDAsMC0uNzUuNzQ5djIuMjkzYS4yLjIsMCwwLDEtLjIuMkgxLjdhLjIuMiwwLDAsMS0uMi0uMnYtMi4yOTNhLjc1Ljc1LDAsMCwwLTEuNSwwdjIuMjkzYTEuNzA2LDEuNzA2LDAsMCwwLDEuNywxLjdIMTAuM2ExLjcwNSwxLjcwNSwwLDAsMCwxLjctMS43di0yLjI5M0EuNzUuNzUsMCwwLDAsMTEuMjUsMzA5LjMzM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwMi4wNzgpIiBmaWxsPSIjNmU2ZTZlIi8+Cjwvc3ZnPgo=":q.A,width:14,height:14}),p||(0,r.__)("Insert","templatiq")))}},125:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(1609),i=a(9880),n=a(7148),_=a(6087),m=a(5604),o=a(6311),r=a(4839);const s=({slug:e,onClose:t})=>{const[a,s]=(0,_.useState)(!1),[c,p]=(0,_.useState)(!1);return(0,l.createElement)(o.jL,{className:"templatiq__modal"},a?(0,l.createElement)(n.A,{setIsSignedUp:p}):(0,l.createElement)(i.A,{slug:e}),(0,l.createElement)("button",{className:"templatiq__modal__cancel__button",onClick:()=>{let e=document.querySelector(".templatiq");e&&e.classList.remove("templatiq-overlay-enable"),t()}},(0,l.createElement)(m.A,{src:r.A,width:20,height:20})))}},6311:(e,t,a)=>{a.d(t,{jL:()=>n,uq:()=>i});var l=a(8267);l.Ay.div`
    width: 100%;
    max-width: 500px;
    border-radius: 12px;
    padding: 26px 32px 32px;
    background-color: var(--templatiq-white-color);
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s ease, visibility 0.3s ease, transform 0.3s ease;
    .templatiq__modal__title {
        display: flex;
        gap: 14px;
        align-items: center;
        font-size: 21px;
        line-height: 25px;
        font-weight: 600;
        margin: 0 0 20px;
        text-align: start;
        color: var(--templatiq-black-color);
    }
    .templatiq__modal__desc {
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        margin: 0;
        color: var(--templatiq-body-color);
        strong {
            font-weight: 600;
            color: var(--templatiq-dark-color);
        }
    }
    .templatiq__modal__plugins {
        margin: 20px 0;
        .install_status {
            &.installed {
                color: var(--templatiq-success-color);
            }
        }
        a {
            position: relative;
            top: -2px;
            font-size: 15px;
            line-height: 20px;
            font-weight: 600;
            color: var(--templatiq-primary-color);
            z-index: -1;
        }
    }
    .templatiq__modal__page {
        display: flex;
        align-items: center;
        gap: 15px;
        .templatiq__modal__page__title {
            flex: 1;
            height: 36px;
            padding: 0 20px;
            border: 1px solid #9f9f9f;
        }
    }
    .templatiq__modal__actions {
        display: flex;
        gap: 12px;
        margin: 20px 0 0;
    }
    .templatiq__modal__action {
        height: 40px;
        padding: 0 20px;
    }
    .templatiq__modal__cancel__button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        position: absolute;
        top: 20px;
        inset-inline-end: 20px;
        cursor: pointer;
        background-color: var(--templatiq-sec-color);
        transition: background-color 0.3s ease;
        path {
            fill: var(--templatiq-dark-color);
            transition: fill 0.3s ease;
        }
        &:hover {
            background-color: var(--templatiq-primary-color);
            path {
                fill: var(--templatiq-white-color);
            }
        }
    }
`;const i=l.Ay.div`
    .templatiq__modal__title {
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 21px;
        line-height: 25px;
        font-weight: 600;
        margin: 0 0 15px;
        text-align: start;
        color: var(--templatiq-black-color);
    }
    .templatiq__modal__desc {
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        margin: 0;
        color: var(--templatiq-body-color);
        strong {
            font-weight: 600;
            color: var(--templatiq-dark-color);
        }
    }
    .templatiq__modal__plugins {
        margin: 20px 0;
        .install_status {
            &.installed {
                color: var(--templatiq-success-color);
            }
        }
        a {
            position: relative;
            top: -2px;
            font-size: 15px;
            line-height: 20px;
            font-weight: 600;
            color: var(--templatiq-primary-color);
            z-index: -1;
        }
    }
    .templatiq__modal__page {
        display: flex;
        align-items: center;
        gap: 15px;
        .templatiq__modal__page__title {
            flex: 1;
            height: 36px;
            padding: 0 20px;
            border: 1px solid #9f9f9f;
        }
    }
    .templatiq__modal__actions {
        display: flex;
        gap: 12px;
        margin: 20px 0 0;
    }
    .templatiq__modal__action {
        height: 40px;
        padding: 0 20px;
    }
    .templatiq__modal__plugin__label {
        display: flex;
        gap: 6px;
        .templatiq__modal__plugin__label__required {
            display: flex;
            position: relative;
            top: 3px;
            padding-right: 10px;
            cursor: help;
            &:hover {
                .templatiq__modal__plugin__label__required__text {
                    opacity: 1;
                    visibility: visible;
                }
            }
            .templatiq__modal__plugin__label__required__text {
                position: absolute;
                top: -10px;
                left: 100%;
                width: max-content;
                font-size: 12px;
                line-height: 18px;
                font-weight: 600;
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-dark-color);
                padding: 8px 12px;
                border-radius: 8px;
                opacity: 0;
                visibility: hidden;
                transition: opacity 0.3s ease, visibility 0.3s ease;
                &:before {
                    content: '';
                    position: absolute;
                    right: 100%;
                    top: 50%;
                    transform: translateY(-50%);
                    border-right: 6px solid var(--templatiq-dark-color);
                    border-top: 6px solid transparent;
                    border-bottom: 6px solid transparent;
                }
            }
        }
    }

    &.templatiq__modal--install {
        text-align: center;
        .templatiq__modal__title {
            text-align: center;
            justify-content: center;
        }
        .templatiq__modal__actions {
            justify-content: center;
        }
        .templatiq__modal__title--installing {
            margin-top: 50px;
        }
        .templatiq__modal__icon {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 60px;
            height: 60px;
            margin: 0 auto 20px;
            border-radius: 100%;
            svg {
                max-width: 40px;
            }
            &--warning {
                background-color: var(--templatiq-warning-color2);
                svg {
                    fill: var(--templatiq-warning-color);
                }
            }
            &--success {
                background-color: var(--templatiq-success-color);
                svg {
                    fill: var(--templatiq-success-color);
                }
            }
        }
        .templatiq__modal__progressbar {
            display: flex;
            position: relative;
            margin: 20px 0 0;
            width: 100%;
            height: 4px;
            background-color: #f3f3f3;
            border-radius: 6px;
            &:before {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 30px;
                height: 100%;
                border-radius: 6px;
                background-color: var(--templatiq-primary-color);
                transition: width 2s;
            }
        }
        .templatiq__modal__action--install {
            margin: 20px 0 0;
            svg {
                width: 16px;
                height: 16px;
            }
        }
    }
    &.templatiq__modal--pro {
        text-align: center;
        padding: 60px 70px;
        .templatiq__modal__title {
            text-align: center;
            justify-content: center;
        }
        .templatiq__modal__content {
            .templatiq-btn {
                height: 40px;
                max-width: 275px;
                margin: 20px 0 0;
            }
            .templatiq__modal__pro-auth {
                margin: 30px 0 0;
                .templatiq-btn {
                    margin: 10px 0 0;
                }
            }
        }
    }
    .templatiq__modal__plugin__type {
        font-weight: 600;
        color: var(--templatiq-danger-color);
    }
    .required-items-center {
        text-align: center;
        .templatiq__modal__title {
            justify-content: center;
        }
    }
`,n=l.Ay.div`
    width: 500px;
    .templatiq__auth {
        height: auto;
        padding: 0;
    }
    .templatiq__auth__wrapper {
        width: auto;
        padding: 0;
        margin: 0;
    }
    .templatiq__auth__actions {
        .templatiq__auth__desc {
            display: none;
        }
    }

    .templatiq__modal__bottom {
        font-size: 14px;
        line-height: 22px;
        font-weight: 500;
        text-align: center;
        margin-top: 20px;
        color: var(--templatiq-body-color);
        a {
            color: var(--templatiq-primary-color);
        }
    }
`},3637:(e,t,a)=>{a.r(t),a.d(t,{default:()=>N});var l=a(1609),i=a(3513),n=a(7867),_=a(8449),m=a(484),o=a(9548),r=a(7143),s=a(6087),c=a(7723),p=a(5604),g=a(4976);const M=a(8267).Ay.div`
    display: flex;
    gap: 20px;
    flex-direction: column;
    background: var(--templatiq-white-color);
    padding: 8px;
    border-radius: 20px;
    box-shadow: var(--templatiq-box-shadow);
    .templatiq__template__single__img {
        display: flex;
        position: relative;
        min-height: 212px;
        background: var(--templatiq-primary-100);
        padding: 20px 20px 0;
        border-radius: 16px;
        img {
            width: 100%;
            object-fit: cover;
            border-radius: 12px 12px 0 0;
            @media screen and (max-width: 1660px) {
                max-height: 350px;
            }
        }
    }
    
    .templatiq__template__single__content {
        padding: 0 12px 16px;
    }

    .templatiq__template__single__overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background: #00000070;
            border-radius: 16px;
        }
    }
    .templatiq__template__single__info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 20px;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        border-radius: 16px;
        box-sizing: border-box;
    }

    &:hover {
        .templatiq__template__single__overlay,
        .templatiq__template__single__info__action,
        .templatiq__template__single__info__required {
            opacity: 1;
            visibility: visible;
        }
    }

    .templatiq__template__single__info__meta {
        display: flex;
        gap: 10px;
    }

    .templatiq__template__single__info__meta__item {
        display: inline-flex;
        gap: 6px;
        align-items: center;
        height: 32px;
        padding: 0 12px;
        border-radius: 8px;
        color: var(--templatiq-pro-color);
        background: var(--templatiq-dark-color);
        font-size: 13px;
        line-height: 20px;
        font-weight: 600;
        transition: background 0.3s ease;
        path {
            fill: var(--templatiq-pro-color);
        }
        &.unlocked-item {
            color: #ffffff;
            background-color: #26A764;
        }
        &.purchased-item {
            color: #ffffff;
            background-color: #26A764;
        }
    }
    .templatiq__template__single__info__action {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        justify-content: center;
        visibility: hidden;
        transition: visibility 0.3s ease;
        .templatiq__template__single__info__action__link {
            display: flex;
            gap: 8px;
            align-items: center;
            font-size: 13px;
            line-height: 20px;
            font-weight: 600;
            height: 36px;
            padding: 0 16px;
            border-radius: 8px;
            box-shadow: none;
            cursor: pointer;
            color: var(--templatiq-btn-color);
            background-color: var(--templatiq-white-color);
            &.purchase-btn {
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-primary-color);
                path {
                    fill: var(--templatiq-white-color);
                }
            }
            &.insert-btn {
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-success-color);
                path {
                    fill: var(--templatiq-white-color);
                }
            }
        }
    }
    .templatiq__template__single__info__required {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
        .templatiq__template__single__info__required__item {
            position: relative;
            display: inline-flex;
            padding: 4px;
            border-radius: 8px;
            background-color: var(--templatiq-white-color);
            white-space: nowrap;
            &.loading {
                background: var(--templatiq-primary-100);
            }
        }
    }

    .templatiq__template__single__title {
        font-size: 18px;
        line-height: 22px;
        font-weight: 600;
        margin: 0 0 4px;
        text-align: start;
        a {
            color: var(--templatiq-dark-color);
            &:hover {
                color: var(--templatiq-primary-color);
            }
        }
    }
    .templatiq__template__single__cat {
        display: flex;
        gap: 8px;
        margin: 0 0 16px;
    }
    .templatiq__template__single__cat__link {
        font-size: 13px;
        line-height: 20px;
        font-weight: 500;
        color: var(--templatiq-gray-color);
        &:hover {
            color: var(--templatiq-primary-color);
        }
        &:not(:last-of-type) {
            position: relative;
            padding-inline-end: 12px;
            &:after {
                content: '';
                width: 4px;
                height: 4px;
                border-radius: 50%;
                background-color: #D1D1D7;
                position: absolute;
                inset-inline-end: 0;
                top: 9px;
            }
        }
    }

    .templatiq__template__single__cat__dropdown {
        position: relative;
        .templatiq__template__single__cat__link::after {
            display: none;
        }
    }
    .templatiq__template__single__cat__button {
        padding: 0;
        line-height: 1;
        cursor: pointer;
        background: transparent;
    }
    .templatiq__template__single__cat__dropdown-content {
        position: absolute;
        bottom: 100%;
        right: 0;
        padding: 10px 15px;
        background: var(--templatiq-white-color);
        box-shadow: 0 5px 10px rgba(0,0,0,0.15);
        min-width: 120px;
        display: flex;
        gap: 10px;
        flex-direction: column;
    }

    .templatiq__template__single__quickmeta-wrapper {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;
        justify-content: space-between;
        .templatiq-btn {
            height: 40px;
            padding: 0 14px;
            font-size: 14px;
            font-weight: 600;
            border-radius: 10px;
            color: var(--templatiq-primary-color);
            background-color: var(--templatiq-primary-100);
            &:hover {
                color: var(--templatiq-white-color);
                background-color: var(--templatiq-primary-color);
            }
            &.templatiq__loading--btn {
                &:after {
                    top: 10px;
                }
            }
        }
    }
    .templatiq__template__single__quickmeta {
        display: flex;
        gap: 6px;
        align-items: center;
    }
    .templatiq__template__single__quickmeta__item {
        display: flex;
        gap: 6px;
        width: 65px;
        justify-content: center; 
        align-items: center;
        height: 28px;
        padding: 0 12px;
        border-radius: 8px;
        color: var(--templatiq-body-color);
        background: var(--templatiq-sec-color);
        box-shadow: none;
        box-sizing: border-box; 
        transition: background 0.3s ease;
        svg {
            min-width: 14px;
        }
        path {
            fill: var(--templatiq-gray-color);
        }
        &.pro-item {
            color: var(--templatiq-primary-color);
            background-color: #F2ECFF;
        }
        &.unlocked-item {
            color: #ffffff;
            background-color: #26A764;
        }
        &.free-item {
            color: #26A764;
            background-color: #E1F6EC;
        }
        &.favorite-btn {
            width: auto;
            &:hover {
                background-color: #F2ECFF;
                path {
                    fill: var(--templatiq-primary-color);
                }
            }
            &.active {
                path {
                    fill: var(--templatiq-danger-color);
                }
            }
        }
        &.disabled {
            pointer-events: none;
            opacity: 0.5;
        }
    }

    .templatiq-tooltip {
        position: relative;
        &:before {
            content: attr(data-info);
            position: absolute;
            top: -45px;
            left: 50%;
            transform: translateX(-50%);
            min-width: max-content;
            text-align: center;
            color: var(--templatiq-white-color);
            font-size: 13px;
            font-weight: 600;
            padding: 8px 12px;
            border-radius: 8px;
            background-color: var(--templatiq-dark-color);
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        &:after {
            content: '';
            position: absolute;
            top: -12px;
            left: 50%;
            transform: translateX(-50%);
            border-top: 10px solid var(--templatiq-dark-color);
            border-left: 10px solid transparent;
            border-right: 10px solid transparent;
            opacity: 0;
            visibility: hidden;
            transition: opacity 0.3s ease, visibility 0.3s ease;
        }
        &:hover {
            &:before,
            &:after {
                opacity: 1;
                visibility: visible;
            }
        }
    }

    &.background-1 {
        .templatiq__template__single__img {
            background: #D444F120;
        }
    }
    &.background-2 {
        .templatiq__template__single__img {
            background: #6C3AF820;
        }
    }
    &.background-3 {
        .templatiq__template__single__img {
            background: #00A96320;
        }
    }
    &.background-4 {
        .templatiq__template__single__img {
            background: #009AE520;
        }
    }
    &.background-5 {
        .templatiq__template__single__img {
            background: #FF9E2F20;
        }
    }
    &.background-6 {
        .templatiq__template__single__img {
            background: #FB3D3820;
        }
    }
`;var d=a(7262),u=a(5651);const N=e=>{let{template_id:t,slug:a,type:N,preview_link:j,thumbnail:x,title:D,price:q,number_of_downloads:y,categories:I,bgClass:E}=e;const{purchased:h,unlocked:b,hasAllAccess:A}=(0,r.select)(o.A).getUserInfo(),[z,T]=(0,s.useState)(!1),[L,w]=(0,s.useState)(!1),[k,f]=(0,s.useState)(!1),[v,S]=(0,s.useState)(!1),O=(0,s.useRef)(null);return(0,s.useEffect)((()=>{var e;S((e=t,b&&b.some((t=>e in t)))),f((e=>h&&h.some((t=>e in t)))(t))}),[t]),(0,l.createElement)(M,{className:`templatiq__template__single ${E}`,ref:O},(0,l.createElement)("div",{className:"templatiq__template__single__img"},L?(0,l.createElement)("img",{src:x,alt:D}):(0,l.createElement)(l.Fragment,null,(0,l.createElement)(n.A,{style:{margin:0,minHeight:"unset"}}),(0,l.createElement)("img",{src:x,alt:D,onLoad:()=>{w(!0)},style:{display:"none"}})),(0,l.createElement)("div",{className:"templatiq__template__single__overlay"}),(0,l.createElement)("div",{className:"templatiq__template__single__info"},(0,l.createElement)("div",{className:"templatiq__template__single__info__meta"},q>0&&!k&&!v&&!A?(0,l.createElement)("span",{className:"templatiq__template__single__info__meta__item pro-item"},(0,l.createElement)(p.A,{src:d.A,width:16,height:16}),(0,c.__)("Pro","templatiq")):""),(0,l.createElement)("div",{className:"templatiq__template__single__info__action"},(0,l.createElement)("a",{href:j,target:"_blank",className:"templatiq__template__single__info__action__link"},(0,c.__)("Live Demo","templatiq")),(0,l.createElement)(_.A,{item:e,isPro:parseFloat(q)>0,templateRef:O,className:"templatiq__template__single__info__action__link insert-btn tmTemplateLibrary__insert-button",innerText:"pack"===N?"Insert Full Site":"Insert"})),(0,l.createElement)("div",{className:"templatiq__template__single__info__required"}))),(0,l.createElement)("div",{className:"templatiq__template__single__content"},(0,l.createElement)("h3",{className:"templatiq__template__single__title"},(0,l.createElement)(g.N_,{to:`/template/${a}`},D||(0,c.__)("dDoctors","templatiq"))),I.length>0&&(0,l.createElement)("div",{className:"templatiq__template__single__cat"},I.map(((e,t)=>(0,l.createElement)("a",{key:t,href:"#",className:"templatiq__template__single__cat__link"},e))).slice(0,2),I.length>2&&(0,l.createElement)("div",{className:"templatiq__template__single__cat__dropdown"},(0,l.createElement)("button",{className:"templatiq__template__single__cat__button",onClick:()=>T(!z)},"..."),z&&(0,l.createElement)("div",{className:"templatiq__template__single__cat__dropdown-content"},I.map(((e,t)=>(0,l.createElement)("a",{key:t,href:"#",className:"templatiq__template__single__cat__link"},e))).slice(2)))),(0,l.createElement)("div",{className:"templatiq__template__single__quickmeta-wrapper"},(0,l.createElement)("div",{className:"templatiq__template__single__quickmeta"},q>0?(0,l.createElement)("span",{className:"templatiq__template__single__quickmeta__item pro-item"},q?"$"+q:""):(0,l.createElement)("span",{className:"templatiq__template__single__quickmeta__item free-item"},(0,c.__)("Free","templatiq")),(0,l.createElement)("span",{className:"templatiq__template__single__quickmeta__item total-download templatiq-tooltip","data-info":(0,c.__)("Total Downloads","templatiq")},(0,l.createElement)(p.A,{src:u.A,width:14,height:14}),y?(0,m.A)(y):""),(0,l.createElement)(i.A,{item:e})),(0,l.createElement)(g.N_,{to:`/template/${a}`,className:"templatiq-btn templatiq-btn-primary-transparent"},(0,c.__)("View Details","templatiq")))))}},484:(e,t,a)=>{function l(e){return e>999?`${(e/1e3).toFixed(1)}k`:e}a.d(t,{A:()=>l})},5568:(e,t,a)=>{function l(e,t){const a=`${templatiq_obj.cloud_checkout}?edd_action=add_to_cart&download_id=${t}`,l=templatiq_obj.dashboard_url+(e?"&templateSlug="+e:"");return a+"?connect=true&return_to="+btoa(l)}a.d(t,{A:()=>l})},9880:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(1609),i=a(3557),n=(a(4581),a(6883)),_=a(7143),m=a(6087),o=a(7723),r=a(7767),s=a(9548);function c({slug:e}){const t=(0,r.Zp)();let[a,c]=(0,m.useState)(!1),[p,g]=(0,m.useState)(!1);const{isLoggedIn:M}=(0,_.select)(s.A).getUserInfo(),[d,u]=(0,m.useState)({authorEmail:"",authorPassword:""});return(0,m.useEffect)((()=>{M&&t("/")}),[]),(0,l.createElement)(n.S_,{className:"templatiq__auth"},(0,l.createElement)("h3",{className:"templatiq__auth__title"},"Sign in to your templatiq.com account"),(0,l.createElement)("a",{href:(0,i.A)(e),target:"_blank",className:"templatiq__auth__btn templatiq-btn templatiq-btn-primary"},(0,o.__)("Connect Account","templatiq")))}},7148:(e,t,a)=>{a.d(t,{A:()=>p});var l=a(1609),i=a(4581),n=a(6883),_=a(6087),m=a(7723),o=a(7767),r=a(4976),s=a(9548),c=a(7143);function p({setIsSignedUp:e}){const t=(0,o.Zp)();let[a,p]=(0,_.useState)(!1);const[g,M]=(0,_.useState)(!1);let[d,u]=(0,_.useState)("");const[N,j]=(0,_.useState)({authorFullName:"",authorEmail:""}),{isLoggedIn:x}=(0,c.select)(s.A).getUserInfo(),D=e=>{j({...N,[e.target.name]:e.target.value})};return(0,_.useEffect)((()=>{x&&t("/dashboard/purchase")}),[]),(0,l.createElement)(n.S_,{className:"templatiq__auth"},(0,l.createElement)("h3",{className:"templatiq__auth__title"}," Sign up your account"),g?(0,l.createElement)("div",{className:"templatiq__auth__wrapper notification-wrapper"},(0,l.createElement)("p",null,(0,m.__)("Successfully Registered. Check Your Email to Complete Registration.","templatiq")),(0,l.createElement)("div",{className:"templatiq__auth__btn_wrapper"},(0,l.createElement)(r.N_,{to:"/",className:"templatiq__auth__btn templatiq-btn templatiq-btn-primary"},(0,m.__)(" Go to Home","templatiq")),(0,l.createElement)(r.N_,{to:"/signin",className:"templatiq__auth__btn templatiq-btn"},(0,m.__)("Sign in","templatiq")))):(0,l.createElement)("form",{className:"templatiq__auth__wrapper",onSubmit:t=>{t.preventDefault(),(async t=>{(0,i.A)("templatiq/account/create",t).then((t=>{if(t?.body?.token)M(!0),e(!0);else{const e=t.message||(0,m.__)("Something went wrong","templatiq");u(e)}p(!1)}))})({name:authorFullName.value,user_email:authorEmail.value})}},(0,l.createElement)("div",{className:"templatiq__auth__info"},(0,l.createElement)("div",{className:"templatiq__auth__info__single"},(0,l.createElement)("label",{htmlFor:"authorFullName"},"Name"),(0,l.createElement)("input",{type:"text",id:"authorFullName",name:"authorFullName",value:N.authorFullName,onChange:D})),(0,l.createElement)("div",{className:"templatiq__auth__info__single"},(0,l.createElement)("label",{htmlFor:"authorEmail"},"Email Address"),(0,l.createElement)("input",{type:"email",id:"authorEmail",name:"authorEmail",value:N.authorEmail,onChange:D}))),(0,l.createElement)("div",{className:"templatiq__auth__actions"},(0,l.createElement)("button",{type:"submit",onClick:()=>{p(!0)},className:"templatiq__auth__btn templatiq-btn templatiq-btn-primary "+(a?"templatiq__loading templatiq__loading--btn":"")},a?null:(0,m.__)("Sign Up","templatiq")),d&&(0,l.createElement)("p",{className:"text-danger"},d),(0,l.createElement)("span",{className:"templatiq__auth__desc"},(0,m.__)("Already have an account?","templatiq"),(0,l.createElement)(r.N_,{to:"/signin",className:"templatiq__auth__link"},(0,m.__)("Sign in","templatiq"))))))}}}]);