"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[2140],{51696:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(74848),i=t(28453);const l={},r="sqrl compile",o={id:"references/cli/compile",title:"sqrl compile",description:"The sqrl compile command is used to facilitate testing of generated SQL queries from SQL templates and parameter selections.",source:"@site/docs/references/cli/compile.md",sourceDirName:"references/cli",slug:"/references/cli/compile",permalink:"/docs/next/references/cli/compile",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"references",previous:{title:"sqrl deps",permalink:"/docs/next/references/cli/deps"},next:{title:"sqrl run",permalink:"/docs/next/references/cli/run"}},d={},c=[];function a(e){const s={a:"a",code:"code",h1:"h1",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"sqrl-compile",children:"sqrl compile"})}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"sqrl compile"})," command is used to facilitate testing of generated SQL queries from SQL templates and parameter selections."]}),"\n",(0,n.jsxs)(s.p,{children:["All the details on command line arguments can be found using ",(0,n.jsx)(s.code,{children:"sqrl compile --help"})," or ",(0,n.jsx)(s.code,{children:"sqrl compile -h"}),". The result is as follows:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-bash",children:'usage: sqrl compile [-h] (-d DATASET | -D) [-t TEST_SET | -T] [-s SELECT] [-r]\n\nCreate rendered SQL files in the folder "./target/compile"\n\noptions:\n  -h, --help            Show this help message and exit\n  -d DATASET, --dataset DATASET\n                        Select dataset to use for dataset traits. Is required, unless using --all-datasets\n  -D, --all-datasets    Compile models for all datasets. Only required if --dataset is not specified\n  -t TEST_SET, --test-set TEST_SET\n                        The selection test set to use. If not specified, default selections are used, unless using --all-test-sets\n  -T, --all-test-sets   Compile models for all selection test sets\n  -s SELECT, --select SELECT\n                        Select single model to compile. If not specified, all models for the dataset are compiled. Ignored if using --all-datasets\n  -r, --runquery        Runs all target models, and produce the results as csv files\n'})}),"\n",(0,n.jsxs)(s.p,{children:["Unless using the ",(0,n.jsx)(s.code,{children:"-h"})," option, only one of ",(0,n.jsx)(s.code,{children:"--dataset"})," and ",(0,n.jsx)(s.code,{children:"--all-datasets"})," options (or ",(0,n.jsx)(s.code,{children:"-d"})," and ",(0,n.jsx)(s.code,{children:"-D"})," for short) can be specified, and both cannot be specified at the same time. Also, ",(0,n.jsx)(s.code,{children:"--test-set"})," and ",(0,n.jsx)(s.code,{children:"--all-test-sets"})," options (or ",(0,n.jsx)(s.code,{children:"-t"})," and ",(0,n.jsx)(s.code,{children:"-T"})," for short) cannot both be specified at the same time."]}),"\n",(0,n.jsx)(s.p,{children:"For each combination of dataset and test set being compiled for, the following files are produced:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"SQL files for the compiled SQL models"}),"\n",(0,n.jsx)(s.li,{children:"A JSON file for the dictionary of placeholder names and values"}),"\n",(0,n.jsx)(s.li,{children:"A PNG file for the lineage of the models"}),"\n",(0,n.jsxs)(s.li,{children:["If running with ",(0,n.jsx)(s.code,{children:"--runquery"})," or ",(0,n.jsx)(s.code,{children:"-r"})," option, CSV files for the result of the models"]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["All files are written to some ",(0,n.jsx)(s.code,{children:"target/compile/<dataset>/<test_set>/"})," folder (after deleting all pre-existing files in that folder). The folders created depends on the command options specified:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["If ",(0,n.jsx)(s.code,{children:"--dataset"})," is specified, then the specified dataset is the name of the ",(0,n.jsx)(s.code,{children:"<dataset>/"})," folder."]}),"\n",(0,n.jsxs)(s.li,{children:["If ",(0,n.jsx)(s.code,{children:"--all-dataset"})," is specified, then a ",(0,n.jsx)(s.code,{children:"<dataset>/"})," folder is created for every dataset."]}),"\n",(0,n.jsxs)(s.li,{children:["If neither ",(0,n.jsx)(s.code,{children:"--test-set"})," or ",(0,n.jsx)(s.code,{children:"--all-test-sets"})," is specified, then the ",(0,n.jsx)(s.code,{children:"<test_set>/"})," folder is simply the default test set for the dataset (typically called ",(0,n.jsx)(s.code,{children:"default/"})," unless specified otherwise)."]}),"\n",(0,n.jsxs)(s.li,{children:["If ",(0,n.jsx)(s.code,{children:"--test-set"})," is specified, then the specified test set is the name of the ",(0,n.jsx)(s.code,{children:"<test_set>/"})," folder"]}),"\n",(0,n.jsxs)(s.li,{children:["If ",(0,n.jsx)(s.code,{children:"--all-test-sets"})," is specified, then a ",(0,n.jsx)(s.code,{children:"<test_set>/"})," folder is created for all test sets applicable to the dataset."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Also, if ",(0,n.jsx)(s.code,{children:"--select"})," is specified (in addition to ",(0,n.jsx)(s.code,{children:"--dataset"}),"), the compiled query of the selected model is printed in terminal. The ",(0,n.jsx)(s.code,{children:"<dataset>/"})," folder will only contain the compiled query of the selected model as well (without the upstream models). An exception to this is when ",(0,n.jsx)(s.code,{children:"--runquery"})," is specified, since upstream model results must be created first in order to create the selected model result."]}),"\n",(0,n.jsxs)(s.p,{children:['For more information on using selection test sets, see the "selection_test_sets" section of the ',(0,n.jsx)(s.a,{href:"../../docs/topics/project-file",children:"Squirrels Project File"})," page."]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>o});var n=t(96540);const i={},l=n.createContext(i);function r(e){const s=n.useContext(l);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(l.Provider,{value:s},e.children)}}}]);