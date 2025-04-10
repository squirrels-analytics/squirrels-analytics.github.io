"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4147],{8268:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"references/cli/deps","title":"sqrl deps","description":"The deps command loads all packages specified in the squirrels.yml file from their Git repositories.","source":"@site/docs/references/cli/deps.md","sourceDirName":"references/cli","slug":"/references/cli/deps","permalink":"/docs/references/cli/deps","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"references","previous":{"title":"sqrl get-file","permalink":"/docs/references/cli/get-file"},"next":{"title":"sqrl compile","permalink":"/docs/references/cli/compile"}}');var r=n(4848),c=n(8453);const l={},o="sqrl deps",a={},d=[{value:"Usage",id:"usage",level:2},{value:"Description",id:"description",level:2},{value:"Package Configuration",id:"package-configuration",level:2},{value:"Examples",id:"examples",level:2},{value:"Notes",id:"notes",level:2}];function t(e){const s={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,c.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"sqrl-deps",children:"sqrl deps"})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"deps"})," command loads all packages specified in the ",(0,r.jsx)(s.code,{children:"squirrels.yml"})," file from their Git repositories."]}),"\n",(0,r.jsx)(s.h2,{id:"usage",children:"Usage"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sqrl deps\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"This command:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Reads the ",(0,r.jsx)(s.code,{children:"packages"})," section from your ",(0,r.jsx)(s.code,{children:"squirrels.yml"})," file"]}),"\n",(0,r.jsx)(s.li,{children:"Downloads each package from its Git repository"}),"\n",(0,r.jsxs)(s.li,{children:["Stores the packages in the ",(0,r.jsx)(s.code,{children:"sqrl_packages"})," directory"]}),"\n",(0,r.jsx)(s.li,{children:"Makes the packages available for use in your project"}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"package-configuration",children:"Package Configuration"}),"\n",(0,r.jsxs)(s.p,{children:["Packages are configured in the ",(0,r.jsx)(s.code,{children:"squirrels.yml"})," file under the ",(0,r.jsx)(s.code,{children:"packages"})," section. Each package should specify:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-yaml",children:"packages:\n  - git: https://github.com/owner/repo.git\n    revision: v1.0.0  # Optional: tag, branch, or commit hash\n    directory: custom_name  # Optional: custom directory name\n"})}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.p,{children:"Load all packages specified in squirrels.yml:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:"sqrl deps\n"})}),"\n",(0,r.jsx)(s.h2,{id:"notes",children:"Notes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Packages are downloaded into the ",(0,r.jsx)(s.code,{children:"sqrl_packages"})," directory"]}),"\n",(0,r.jsxs)(s.li,{children:["The ",(0,r.jsx)(s.code,{children:"sqrl_packages"})," directory should be added to ",(0,r.jsx)(s.code,{children:".gitignore"})]}),"\n",(0,r.jsx)(s.li,{children:"Each package must be a valid Git repository"}),"\n",(0,r.jsx)(s.li,{children:"If no revision is specified, the default branch will be used"}),"\n",(0,r.jsx)(s.li,{children:"The directory name defaults to the repository name if not specified"}),"\n",(0,r.jsx)(s.li,{children:"Packages can be used to share common macros or Python functions across projects"}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,c.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>o});var i=n(6540);const r={},c=i.createContext(r);function l(e){const s=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(c.Provider,{value:s},e.children)}}}]);