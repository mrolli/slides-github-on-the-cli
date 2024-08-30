import{_ as p}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-BXKGcHQz.js";import{o as c,c as o,k as a,l as r,m as u,q as _,s as d,B as e,e as s,aa as n}from"./modules/vue-DcZYwP-F.js";import{I as h}from"./slidev/default-BNFXGIVm.js";import{u as f,f as m}from"./slidev/context-CqTOsb2w.js";import"./modules/unplugin-icons-dION4Pcv.js";import"./index-6ItPN6Yx.js";import"./modules/shiki-CsEGx7-V.js";const k=s("h1",null,"GitHub REST API Usage",-1),g=s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"function setup_snow_autolinkref {")]),n(`
`),s("span",{class:"line"},[s("span",null,"  autolinkref=$(gh api --method GET \\")]),n(`
`),s("span",{class:"line"},[s("span",null,'    -H "Accept: application/vnd.github+json" \\')]),n(`
`),s("span",{class:"line"},[s("span",null,'    -H "X-GitHub-Api-Version: 2022-11-28" \\')]),n(`
`),s("span",{class:"line"},[s("span",null,`    "/repos/$1/autolinks" --jq '.[] | select(.key_prefix=="SNOW-")'`)]),n(`
`),s("span",{class:"line"},[s("span",null,"  )")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,'  if [ -n "$autolinkref" ]; then')]),n(`
`),s("span",{class:"line"},[s("span",null,'    success "Autolink reference for SNOW already setup."')]),n(`
`),s("span",{class:"line"},[s("span",null,"    return 0")]),n(`
`),s("span",{class:"line"},[s("span",null,"  fi")]),n(`
`),s("span",{class:"line"},[s("span")]),n(`
`),s("span",{class:"line"},[s("span",null,"  gh api \\")]),n(`
`),s("span",{class:"line"},[s("span",null,"    --method POST \\")]),n(`
`),s("span",{class:"line"},[s("span",null,'    -H "Accept: application/vnd.github+json" \\')]),n(`
`),s("span",{class:"line"},[s("span",null,'    -H "X-GitHub-Api-Version: 2022-11-28" \\')]),n(`
`),s("span",{class:"line"},[s("span",null,'    "/repos/$1/autolinks" \\')]),n(`
`),s("span",{class:"line"},[s("span",null,'    -f key_prefix="SNOW-" \\')]),n(`
`),s("span",{class:"line"},[s("span",null,'   -f url_template="https://serviceportal.unibe.ch/text_search_exact_match.do?sysparm_search=<num>" \\')]),n(`
`),s("span",{class:"line"},[s("span",null,"   -F is_alphanumeric=true")]),n(`
`),s("span",{class:"line"},[s("span",null,"}")])])],-1),$=s("p",null,[n("See "),s("a",{href:"https://docs.github.com/en/rest",target:"_blank"},"https://docs.github.com/en/rest")],-1),b={__name:"slides.md__slidev_23",setup(x){const{$slidev:v,$nav:H,$clicksContext:l,$clicks:S,$page:y,$renderContext:A,$frontmatter:t}=f();return l.setup(),(N,P)=>{const i=p;return c(),o(h,_(d(e(m)(e(t),22))),{default:a(()=>[k,r(i,u({},{ranges:[]}),{default:a(()=>[g]),_:1},16),$]),_:1},16)}}},W=b;export{W as default};
