"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[548],{4653:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var n=t(5893),i=t(1151);const l={},r="sqrl compile",o={id:"references/cli/compile",title:"sqrl compile",description:"The sqrl compile command is used to facilitate testing of generated SQL queries from SQL templates and parameter selections.",source:"@site/versioned_docs/version-0.2.x/references/cli/compile.md",sourceDirName:"references/cli",slug:"/references/cli/compile",permalink:"/docs/references/cli/compile",draft:!1,unlisted:!1,tags:[],version:"0.2.x",frontMatter:{},sidebar:"references",previous:{title:"sqrl deps",permalink:"/docs/references/cli/deps"},next:{title:"sqrl run",permalink:"/docs/references/cli/run"}},c={},d=[];function a(e){const s={a:"a",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"sqrl-compile",children:"sqrl compile"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"sqrl compile"})," command is used to facilitate testing of generated SQL queries from SQL templates and parameter selections."]}),"\n",(0,n.jsxs)(s.p,{children:["All the details on command line arguments can be found using ",(0,n.jsx)(s.code,{children:"sqrl compile -h"}),". The result is as follows:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:"usage: sqrl compile [-h] [-d DATASET] [-a] [-t TEST_SET] [-s SELECT] [-r]\n\noptional arguments:\n  -h, --help            Show this help message and exit\n  -d DATASET, --dataset DATASET\n                        Select dataset to use for dataset traits. If not specified, all models for all datasets are compiled\n  -a, --all-test-sets   Compile models for all selection test sets\n  -t TEST_SET, --test-set TEST_SET\n                        The selection test set to use. Default selections are used if not specified. Ignored if using --all-test-sets\n  -s SELECT, --select SELECT\n                        Select single model to compile. If not specified, all models for the dataset are compiled. Also, ignored if --dataset is not specified\n  -r, --runquery        Runs all target models, and produce the results as csv files\n"})}),"\n",(0,n.jsxs)(s.p,{children:["All compiled SQL queries (and csv's if ",(0,n.jsx)(s.code,{children:"--runquery"})," is used) are written to some ",(0,n.jsx)(s.code,{children:"target/compile/<test_set>/<dataset>/"})," folder (after deleting all pre-existing files in that folder). The number of folders created depends on the command options specified:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If ",(0,n.jsx)(s.code,{children:"--dataset"})," is ",(0,n.jsx)(s.strong,{children:"not"})," specified, then a ",(0,n.jsx)(s.code,{children:"<dataset>/"})," folder is created for every dataset."]}),"\n",(0,n.jsxs)(s.li,{children:["If ",(0,n.jsx)(s.code,{children:"--test-set"})," is ",(0,n.jsx)(s.strong,{children:"not"})," specified, then the ",(0,n.jsx)(s.code,{children:"<test_set>/"})," folder is simply ",(0,n.jsx)(s.code,{children:"default/"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:["If ",(0,n.jsx)(s.code,{children:"--all-test-sets"})," is specified, then a ",(0,n.jsx)(s.code,{children:"<test_set>/"})," folder is created for all test sets defined in ",(0,n.jsx)(s.code,{children:"squirrels.yml"})," (in addition to ",(0,n.jsx)(s.code,{children:"default/"}),")."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Also, if ",(0,n.jsx)(s.code,{children:"--select"})," is specified (in addition to ",(0,n.jsx)(s.code,{children:"--dataset"}),"), the compiled query of the selected model is printed in terminal. The ",(0,n.jsx)(s.code,{children:"<dataset>/"})," folder will only contain the compiled query of the selected model as well (without the upstream models), unless ",(0,n.jsx)(s.code,{children:"--runquery"})," is specified (since upstream model results must be created first in order to create the selected model result)."]}),"\n",(0,n.jsxs)(s.p,{children:['For more information on using selection test sets, see the "selection_test_sets" section of the ',(0,n.jsx)(s.a,{href:"../../docs/topics/project-file",children:"Squirrels Project File"})," page."]})]})}function f(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,s,t)=>{t.d(s,{Z:()=>o,a:()=>r});var n=t(7294);const i={},l=n.createContext(i);function r(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);