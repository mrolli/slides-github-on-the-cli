import{_ as r}from"./slidev/CodeBlockWrapper.vue_vue_type_script_setup_true_lang-B62FGUhr.js";import{b as o,o as u,w as e,g as s,e as c,m as f,ad as n,v as m,x as d,T as l}from"./modules/vue-DByOMjEs.js";import{I as h}from"./slidev/default-DVw1G8JL.js";import{u as _,f as k}from"./slidev/context-q-q4eqiC.js";import"./modules/unplugin-icons-DZNbtrmZ.js";import"./index-CehRXoAj.js";import"./modules/shiki-BTOgqa3m.js";const N={__name:"slides.md__slidev_23",setup(g){const{$clicksContext:t,$frontmatter:i}=_();return t.setup(),(b,a)=>{const p=r;return u(),o(h,m(d(l(k)(l(i),22))),{default:e(()=>[a[1]||(a[1]=s("h1",null,"GitHub REST API Usage",-1)),c(p,f({},{title:"",ranges:[]}),{default:e(()=>a[0]||(a[0]=[s("pre",{class:"shiki shiki-themes vitesse-dark vitesse-light slidev-code",style:{"--shiki-dark":"#dbd7caee","--shiki-light":"#393a34","--shiki-dark-bg":"#121212","--shiki-light-bg":"#ffffff"}},[s("code",{class:"language-text"},[s("span",{class:"line"},[s("span",null,"function setup_snow_autolinkref {")]),n(`
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
`),s("span",{class:"line"},[s("span",null,"}")])])],-1)])),_:1},16),a[2]||(a[2]=s("p",null,[n("See "),s("a",{href:"https://docs.github.com/en/rest",target:"_blank"},"https://docs.github.com/en/rest")],-1))]),_:1},16)}}};export{N as default};
