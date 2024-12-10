"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[1235],{43259:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"references/cli/sqrl","title":"sqrl [...]","description":"After pip installing Squirrels, the sqrl command can be used to run the Squirrels CLI.","source":"@site/docs/references/cli/sqrl.md","sourceDirName":"references/cli","slug":"/references/cli/sqrl","permalink":"/docs/next/references/cli/sqrl","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"references","previous":{"title":"CLI References","permalink":"/docs/next/references/cli"},"next":{"title":"sqrl init","permalink":"/docs/next/references/cli/init"}}');var t=r(74848),l=r(28453);const i={},o="sqrl [...]",c={},a=[];function d(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"sqrl-",children:"sqrl [...]"})}),"\n",(0,t.jsxs)(n.p,{children:["After pip installing Squirrels, the ",(0,t.jsx)(n.code,{children:"sqrl"})," command can be used to run the Squirrels CLI."]}),"\n",(0,t.jsxs)(n.p,{children:["Running ",(0,t.jsx)(n.code,{children:"sqrl --help"})," or ",(0,t.jsx)(n.code,{children:"sqrl -h"})," lets you see the available commands and options that are applicable to all commands."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'usage: sqrl [-h] [-V] [--log-level {DEBUG,INFO,WARNING}] [--log-format {text,json}] [--log-file LOG_FILE] {init,get-file,deps,compile,run} ...\n\nCommand line utilities from the squirrels python package\n\noptions:\n  -h, --help            Show this help message and exit\n  -V, --version         Show the version and exit\n  --log-level {DEBUG,INFO,WARNING}\n                        Level of logging to use\n  --log-format {text,json}\n                        Format of the log records\n  --log-file LOG_FILE   Name of log file to write to in the "logs/" folder. Default is squirrels.log. If name is empty, then file logging is disabled\n\ncommands:\n  {init,get-file,deps,compile,run}\n    init                Initialize a squirrels project\n    get-file            Get a sample file for the squirrels project. If the file name already exists, it will be prefixed with a timestamp.\n    deps                Load all packages specified in squirrels.yml (from git)\n    compile             Create rendered SQL files in the folder "./target/compile"\n    run                 Run the API server\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For the logging levels, the scope of records logged is more for DEBUG, less for INFO, and even less for WARNING. For instance, using ",(0,t.jsx)(n.code,{children:"sqrl --log-level DEBUG run"})," will log more information than using ",(0,t.jsx)(n.code,{children:"sqrl --log-level INFO run"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"The format of the logged records can be either text or json. The default is text if it's not provided. Although the text format is more human-readable, the json format is easier for machines to read, which can be useful to integrate with other programs."})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(96540);const t={},l=s.createContext(t);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);