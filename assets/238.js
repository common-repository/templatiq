"use strict";(self.webpackChunktemplatiq=self.webpackChunktemplatiq||[]).push([[238],{6238:(e,t,a)=>{a.r(t),a.d(t,{default:()=>w});var l=a(1609),m=a(7867),s=a(1455),i=a.n(s),n=a(4581),c=a(6087),r=a(2619),p=a(4976),o=a(7767),f=a(8267),h=a(9548),d=a(7143);const E=(0,c.lazy)((()=>Promise.all([a.e(604),a.e(695)]).then(a.bind(a,5695)))),g=(0,c.lazy)((()=>Promise.all([a.e(604),a.e(403)]).then(a.bind(a,1403)))),q=(0,c.lazy)((()=>Promise.all([a.e(604),a.e(152)]).then(a.bind(a,152)))),y=(0,c.lazy)((()=>Promise.all([a.e(604),a.e(442)]).then(a.bind(a,9442)))),N=(0,c.lazy)((()=>Promise.all([a.e(604),a.e(319)]).then(a.bind(a,5319)))),u=(0,c.lazy)((()=>Promise.all([a.e(604),a.e(473)]).then(a.bind(a,8391)))),x=(0,c.lazy)((()=>Promise.all([a.e(604),a.e(378)]).then(a.bind(a,6048)))),_=(0,c.lazy)((()=>Promise.all([a.e(604),a.e(900)]).then(a.bind(a,3900))));function w(){const[e,t]=(0,c.useState)("ltr"),[a,s]=(0,c.useState)(!1),[w,S]=(0,c.useState)(!1),A={direction:e};(0,c.useEffect)((()=>{const e=document.body.classList.contains("elementor-editor-active");let t="library",a=e?"elementor":"";"elementor"===a&&(t=`editor-library?builder=${a}`),(0,n.A)(`templatiq/template/${t}`).then((e=>{(0,d.dispatch)(h.A).setTemplates(e.templates),(0,d.dispatch)(h.A).setLibraryData(e)})).then((()=>{(async function(){return await i()({path:"templatiq/account/data"}).then((e=>e)).catch((e=>{throw e}))})().then((e=>{const t=e,a={isLoggedIn:!!t.token,userEmail:t.user_email,userDisplayName:t.user_display_name,bookmarks:t.bookmarks,downloads:t.downloads,purchased:t.purchased,unlocked:t.unlocked_by_directorist,hasAllAccess:t.has_all_access_pass};(0,d.dispatch)(h.A).setUserInfo(a),s(!0)}))})),S(e)}),[]);const v=(0,r.applyFilters)("templatiq_admin_routes",[{path:"/*",element:(0,l.createElement)(E,null)},{path:"/template/:slug",element:(0,l.createElement)(g,null)},{path:"/signin",element:(0,l.createElement)(q,null)},{path:"/signup",element:(0,l.createElement)(y,null)},{path:"/dashboard",element:(0,l.createElement)(N,null)},{path:"/dashboard/favorites",element:(0,l.createElement)(N,null)},{path:"/dashboard/downloads",element:(0,l.createElement)(u,null)},{path:"/dashboard/purchase",element:(0,l.createElement)(x,null)},{path:"/dashboard/account",element:(0,l.createElement)(_,null)}]),b={maxHeight:"unset",margin:w?"0":"0 -10px"};return(0,l.createElement)(l.Fragment,null,(0,l.createElement)(p.I9,null,(0,l.createElement)(c.Suspense,{fallback:(0,l.createElement)(m.A,{type:"full",style:b})},a?(0,l.createElement)(f.NP,{theme:A},(0,l.createElement)(o.BV,null,v.map(((e,t)=>(0,l.createElement)(o.qh,{key:t,path:e.path,element:e.element}))))):(0,l.createElement)(m.A,{type:"full",style:b}))))}},8078:(e,t,a)=>{a.d(t,{v:()=>l});const l=a(8267).Ay.div`
    &.templatiq-content-loading{
        display: flex;
        flex-direction: column;
        width: 100%;
        max-width: 100%;
        min-height: 150px;
        padding: 0;
        border-radius: 10px;
        margin: 0;
        box-sizing: border-box;
        background-color: var(--templatiq-color-white);
        flex: 1 1 0%;
        .templatiq-shimmer-effect{
            display: block;
            height: 16px;
            width: 100%;
            text-align: left;
            background: #cccccc;
            mask: linear-gradient(-90deg, #000 10%, #0005, #000 70%) right/350% 100%;
            animation: shimmerEffect 2s infinite;
            display: inline-block;
            position: relative;
            &:not(:last-child){
                margin-bottom: 15px;
            }
        }
        .templatiq-content-loading__image {
            height: 200px;
        }
        .templatiq-content-loading__single {
            height: 32px;
        }
    }
`},7867:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(1609),m=a(8078);const s=e=>{const{style:t,type:a}=e,s={minHeight:"150px"},i=t?{...s,...t}:s;return(0,l.createElement)(m.v,{style:i,className:"templatiq-content-loading"},(e=>{switch(e){case"single":return(0,l.createElement)("span",{className:"templatiq-content-loading__single templatiq-shimmer-effect"});case"image":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect"}));case"full":return(0,l.createElement)("div",{className:"templatiq-row"},(0,l.createElement)("div",{className:"templatiq-col-12",style:{marginTop:"25px"}},(0,l.createElement)("div",{className:"templatiq-row"},(0,l.createElement)("div",{className:"templatiq-col-4"},(0,l.createElement)("span",{className:"templatiq-content-loading__single templatiq-shimmer-effect"})),(0,l.createElement)("div",{className:"templatiq-col-4"},(0,l.createElement)("span",{className:"templatiq-content-loading__single templatiq-shimmer-effect"})),(0,l.createElement)("div",{className:"templatiq-col-4"},(0,l.createElement)("span",{className:"templatiq-content-loading__single templatiq-shimmer-effect"})))),(0,l.createElement)("div",{className:"templatiq-col-3",style:{marginTop:"24px"}},(0,l.createElement)("div",{style:{marginBottom:"70px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{style:{marginBottom:"70px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{style:{marginBottom:"70px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{style:{marginBottom:"70px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{style:{marginBottom:"70px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}}))),(0,l.createElement)("div",{className:"templatiq-col-9"},(0,l.createElement)("div",{className:"templatiq-row"},(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})))));case"sidebar":return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("div",{style:{marginBottom:"70px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{style:{marginBottom:"70px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{style:{marginBottom:"70px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{style:{marginBottom:"70px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{style:{marginBottom:"70px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})));case"allTemplate":return(0,l.createElement)("div",{className:"templatiq-row"},(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})),(0,l.createElement)("div",{className:"templatiq-col-xxl-4 templatiq-col-6",style:{marginBottom:"24px",textAlign:"left"}},(0,l.createElement)("span",{className:"templatiq-content-loading__image templatiq-shimmer-effect",style:{marginBottom:"20px"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}})));default:return(0,l.createElement)(l.Fragment,null,(0,l.createElement)("span",{className:"templatiq-shimmer-effect"}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"75%"}}),(0,l.createElement)("span",{className:"templatiq-shimmer-effect",style:{width:"50%"}}))}})(a))}},4581:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(1455),m=a.n(l);async function s(e,t,a){return a=a||{},await m()({path:e,method:"POST",data:t,...a}).then((e=>e)).catch((e=>e))}},9548:(e,t,a)=>{a.d(t,{A:()=>n});var l=a(7143);const m={getIsLoading(e){const{isLoading:t}=e;return t},getLibraryData(e){const{libraryData:t}=e;return t},getTemplates(e){const{templates:t}=e;return t},getUserInfo(e){const{userInfo:t}=e;return t},getSearchQuery(e){const{searchQuery:t}=e;return t},getFilterSearch(e){const{filterSearch:t}=e;return t}},s={isLoading:!1,userInfo:{loggedIn:"",userName:"",userEmail:"",bookmarks:[],downloads:[],purchased:[],userDisplayName:""},allTemplates:[],searchQuery:"",filterData:[],favCounts:{},templateStatus:{}},i=(0,l.createReduxStore)("templatiq-stores",{reducer(e=s,t){switch(t.type){case"SET_IS_LOADING":const a={...e,isLoading:t.loadingStatus};return localStorage.setItem("templatiq-stores",JSON.stringify(a)),a;case"SET_TEMPLATES":const l={...e,templates:t.templates};return localStorage.setItem("templatiq-stores",JSON.stringify(l)),l;case"SET_LIBRARY":const m={...e,libraryData:t.data};return localStorage.setItem("templatiq-stores",JSON.stringify(m)),m;case"SET_BOOKMARK":const s={...e,userInfo:{...e.userInfo,bookmarks:t.bookmark}};return localStorage.setItem("templatiq-stores",JSON.stringify(s)),s;case"SET_USER_INFO":const i={...e,userInfo:t.userInfo};return localStorage.setItem("templatiq-stores",JSON.stringify(i)),i;case"SET_SEARCH_QUERY":const n={...e,searchQuery:t.searchQuery};return localStorage.setItem("templatiq-stores",JSON.stringify(n)),n;case"SET_FILTER_SEARCH":const c={...e,filterSearch:t.filterSearch};return localStorage.setItem("templatiq-stores",JSON.stringify(c)),c;case"LOG_OUT":const r={...e,userInfo:{isLoggedIn:!1,userName:"",userEmail:"",userDisplayName:""}};return localStorage.setItem("templatiq-stores",JSON.stringify(r)),r}return e},actions:{setIsLoading:e=>({type:"SET_IS_LOADING",loadingStatus:e}),setLibraryData:e=>({type:"SET_LIBRARY",data:e}),setTemplates:e=>({type:"SET_TEMPLATES",templates:e}),setBookmark:e=>({type:"SET_BOOKMARK",bookmark:e}),setUserInfo:e=>({type:"SET_USER_INFO",userInfo:e}),logOut:()=>({type:"LOG_OUT"}),setSearchQuery:e=>({type:"SET_SEARCH_QUERY",searchQuery:e}),setFilterSearch:e=>({type:"SET_FILTER_SEARCH",filterSearch:e})},selectors:m});(0,l.register)(i);const n=i}}]);