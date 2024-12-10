"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[232],{25763:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docs/topics/environcfg","title":"Environment Configuration File","description":"The environment configuration file (env.yml) contains secret values that are NOT part of the codebase for the Squirrels project. It may contain any of the following sections:","source":"@site/versioned_docs/version-0.4.x/docs/topics/environcfg.md","sourceDirName":"docs/topics","slug":"/docs/topics/environcfg","permalink":"/docs/docs/topics/environcfg","draft":false,"unlisted":false,"tags":[],"version":"0.4.x","frontMatter":{},"sidebar":"docs","previous":{"title":"Squirrels Project Settings","permalink":"/docs/docs/topics/settings"},"next":{"title":"Database Connections","permalink":"/docs/docs/topics/connections"}}');var i=n(74848),r=n(28453);const o={},a="Environment Configuration File",c={},l=[{value:"users",id:"users",level:3},{value:"env_vars",id:"env_vars",level:3},{value:"credentials",id:"credentials",level:3},{value:"secrets",id:"secrets",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"environment-configuration-file",children:"Environment Configuration File"})}),"\n",(0,i.jsxs)(s.p,{children:["The environment configuration file (",(0,i.jsx)(s.code,{children:"env.yml"}),") contains secret values that are NOT part of the codebase for the Squirrels project. It may contain any of the following sections:"]}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"users"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"env_vars"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"credentials"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.strong,{children:"secrets"})}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"env.yml"})," file can either be saved in the ",(0,i.jsx)(s.code,{children:"$HOME/.squirrels/"})," folder (to share values across Squirrels projects), or in the project folder. If the file is available in both folders, the values in the ",(0,i.jsx)(s.code,{children:"env.yml"})," file in the project folder will overwrite values in the same file in the ",(0,i.jsx)(s.code,{children:"$HOME/.squirrels/"})," folder."]}),"\n",(0,i.jsxs)(s.p,{children:["This file is included in ",(0,i.jsx)(s.code,{children:".gitignore"}),". NEVER COMMIT THIS FILE TO SOURCE CONTROL!"]}),"\n",(0,i.jsx)(s.p,{children:"You can create a sample env.yml file by running:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-bash",children:"sqrl get-file env.yml\n"})}),"\n",(0,i.jsx)(s.p,{children:"The sections are described in detail below. Use the right sidebar to jump to a specific section."}),"\n",(0,i.jsx)(s.h3,{id:"users",children:"users"}),"\n",(0,i.jsxs)(s.p,{children:["This section lets you specify mock users for local development testing (see page on ",(0,i.jsx)(s.a,{href:"./auth",children:"Authentication"})," for integrating your authentication system in Python to validate real users). An example may look like this:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"users:\n  my_user:\n    password: MyPassword\n    is_internal: False\n    custom_field: Some Value\n"})}),"\n",(0,i.jsxs)(s.p,{children:["Each user must specify fields for ",(0,i.jsx)(s.strong,{children:"password"})," and ",(0,i.jsx)(s.strong,{children:"is_internal"}),". The ",(0,i.jsx)(s.strong,{children:"is_internal"})," field must be a boolean, and if set to true, allows the user to access all datasets including private ones (if set to false, cannot access private ones, but can still access protected ones)."]}),"\n",(0,i.jsxs)(s.p,{children:["If a ",(0,i.jsx)(s.code,{children:"pyconfigs/auth.py"})," file is used containing a user model with additional user attributes, then those attributes should also be specified as fields for each user."]}),"\n",(0,i.jsx)(s.h3,{id:"env_vars",children:"env_vars"}),"\n",(0,i.jsxs)(s.p,{children:["This section lets you specify custom variables used in the Squirrels project (including the ",(0,i.jsx)(s.a,{href:"../topics/project-file",children:"squirrels.yml"})," file), but should not be included in source control. Database connection strings is a good use case for this. Below is an example:"]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"env_vars:\n  db_conn_str: sqlite://{username}:{password}@/mydatabase.db\n  another_env_var: my_secret_value\n"})}),"\n",(0,i.jsx)(s.h3,{id:"credentials",children:"credentials"}),"\n",(0,i.jsx)(s.p,{children:"This section lets you specify credential objects as username and password pairs for authenticating with external systems such as databases and REST APIs. This can, for instance, avoid repeating the same username and password for connection strings of databases in the same database server. Below is an example of the credentials section:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"credentials:\n  my_db_user:\n    username: user1\n    password: pass1\n"})}),"\n",(0,i.jsx)(s.h3,{id:"secrets",children:"secrets"}),"\n",(0,i.jsx)(s.p,{children:"This section contains secret settings for Squirrels where you would not want to expose the value to source control."}),"\n",(0,i.jsxs)(s.p,{children:["Currently, the only secret setting available is ",(0,i.jsx)(s.strong,{children:"jwt_secret"}),". Squirrels uses jwt (JSON Web Tokens) for authentication and authorization. More information on this can be found ",(0,i.jsx)(s.a,{href:"https://jwt.io/introduction",children:"here"}),'. Quoting the page, "the signature is used to verify the message wasn\'t changed along the way, and, in the case of tokens signed with a private key, it can also verify that the sender of the JWT is who it says it is". The ',(0,i.jsx)(s.strong,{children:"jwt_secret"}),' lets you define your own "private key". If no value is provided, Squirrels will generate a random 32 byte hash for the private key when the API server starts, which means that if the API server has to restart, all non-expired jwt tokens of authenticated users would be invalidated.']}),"\n",(0,i.jsxs)(s.p,{children:["The following is an example for this section. DO NOT use the jwt_secret value below in your project. One way to generate your own 32 byte hash, is to run ",(0,i.jsx)(s.code,{children:"openssl rand -hex 32"})," in bash."]}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-yaml",children:"secrets:\n  jwt_secret: 205bfb156f6b71c8219ee937a1c791296e57450edc465ce7f54e1b226b70365f\n"})})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>a});var t=n(96540);const i={},r=t.createContext(i);function o(e){const s=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);