"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[6551],{2595:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>a});const r=JSON.parse('{"id":"references/python/dateutils/DayIdxOfMonthsCycle","title":"DayIdxOfMonthsCycle","description":"The class to get the i-th day of a predefined cycle of months. See [DayIdxOf...] for more details.","source":"@site/docs/references/python/dateutils/DayIdxOfMonthsCycle.md","sourceDirName":"references/python/dateutils","slug":"/references/python/dateutils/DayIdxOfMonthsCycle","permalink":"/docs/references/python/dateutils/DayIdxOfMonthsCycle","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"references","previous":{"title":"DayIdxOf...","permalink":"/docs/references/python/dateutils/DayIdxOf"},"next":{"title":"DayIdxOfYear","permalink":"/docs/references/python/dateutils/DayIdxOfYear"}}');var s=t(4848),o=t(8453);const i={},d="DayIdxOfMonthsCycle",c={},a=[{value:"Constructor",id:"constructor",level:2},{value:"Methods",id:"methods",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"dayidxofmonthscycle",children:"DayIdxOfMonthsCycle"})}),"\n",(0,s.jsxs)(n.p,{children:["The class to get the i-th day of a predefined cycle of months. See ",(0,s.jsx)(n.a,{href:"./DayIdxOf",children:"DayIdxOf..."})," for more details."]}),"\n",(0,s.jsx)(n.h2,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsx)(n.p,{children:"Creates a DayIdxOfMonthsCycle object."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Required Arguments:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"idx"}),": See ",(0,s.jsx)(n.a,{href:"./DayIdxOf",children:"DayIdxOf..."})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"num_months_in_cycle"}),": An integer for the number of months per cycle. This must go into 12 evenly such that the cycle fits evenly in a year (i.e., 12, 6, 4, 3, 2, or 1)."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Setting ",(0,s.jsx)(n.code,{children:"num_months_in_cycle"})," to 12 is equivalent to using ",(0,s.jsx)(n.a,{href:"./DayIdxOfYear",children:"DayIdxOfYear"})]}),"\n",(0,s.jsxs)(n.li,{children:["Setting ",(0,s.jsx)(n.code,{children:"num_months_in_cycle"})," to 3 is equivalent to using ",(0,s.jsx)(n.a,{href:"./DayIdxOfQuarter",children:"DayIdxOfQuarter"})]}),"\n",(0,s.jsxs)(n.li,{children:["Setting ",(0,s.jsx)(n.code,{children:"num_months_in_cycle"})," to 1 is equivalent to using ",(0,s.jsx)(n.a,{href:"./DayIdxOfMonth",children:"DayIdxOfMonth"})]}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"first_month_of_cycle"}),": A ",(0,s.jsx)(n.a,{href:"./Month",children:"Month"})," for the first month of the cycle (January, February, March, etc.). Optional, default is January"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,s.jsxs)(n.p,{children:["See ",(0,s.jsx)(n.a,{href:"./DayIdxOf",children:"DayIdxOf..."})," for all methods."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:'Suppose you have 4-month "trimesters" starting in either March, July, or November. Given an input date, you want to find the 66th day of the current trimester. This can be done as follows:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from dateutils import DayIdxOfMonthsCycle, Month\nimport datetime\n\ndate_modifier = DayIdxOfMonthsCycle(idx=95, num_months_in_cycle=4, first_month_of_cycle=Month.March)\n\ninput_date = datetime.date(2025, 4, 5)\noutput_date = date_modifier.modify(input_date)\nprint(output_date) # prints 2025-06-03, 95th day of period "March 1st to June 30th"\n'})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var r=t(6540);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);