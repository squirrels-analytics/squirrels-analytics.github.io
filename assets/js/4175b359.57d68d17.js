"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4709],{73984:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"references/python/dateutils/DayIdxOfMonthsCycle","title":"DayIdxOfMonthsCycle","description":"The class to get the i-th day of a predefined cycle of months. See [_DayIdxOfCalendarUnit] for more details.","source":"@site/versioned_docs/version-0.3.x/references/python/dateutils/DayIdxOfMonthsCycle.md","sourceDirName":"references/python/dateutils","slug":"/references/python/dateutils/DayIdxOfMonthsCycle","permalink":"/docs/0.3.x/references/python/dateutils/DayIdxOfMonthsCycle","draft":false,"unlisted":false,"tags":[],"version":"0.3.x","frontMatter":{},"sidebar":"references","previous":{"title":"_DayIdxOfCalendarUnit (abstract)","permalink":"/docs/0.3.x/references/python/dateutils/DayIdxOfCalendarUnit"},"next":{"title":"DayIdxOfYear","permalink":"/docs/0.3.x/references/python/dateutils/DayIdxOfYear"}}');var s=t(74848),o=t(28453);const a={},c="DayIdxOfMonthsCycle",i={},d=[{value:"Constructor",id:"constructor",level:3}];function l(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"dayidxofmonthscycle",children:"DayIdxOfMonthsCycle"})}),"\n",(0,s.jsxs)(n.p,{children:["The class to get the i-th day of a predefined cycle of months. See ",(0,s.jsx)(n.a,{href:"./DayIdxOfCalendarUnit",children:"_DayIdxOfCalendarUnit"})," for more details."]}),"\n",(0,s.jsxs)(n.p,{children:["Can be found in the classpath ",(0,s.jsx)(n.code,{children:"squirrels.dateutils.DayIdxOfMonthsCycle"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"constructor",children:"Constructor"}),"\n",(0,s.jsx)(n.p,{children:"Creates a DayIdxOfMonthsCycle object."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Required Arguments:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"idx"}),": See ",(0,s.jsx)(n.a,{href:"./DayIdxOfCalendarUnit",children:"_DayIdxOfCalendarUnit"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"num_months_in_cycle"}),": An integer for the number of months per cycle. This must go into 12 evenly such that the cycle fits evenly in a year"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"first_month_of_cycle"}),": A ",(0,s.jsx)(n.a,{href:"./Month",children:"Month"})," for the first month of the cycle (January, February, March, etc.). Optional, default is January"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.p,{children:'Suppose you have 4-month "trimesters" starting in either March, July, or November. Given an input date, you want to find the 66th day of the current trimester. This can be done as follows:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from squirrels.dateutils import DayIdxOfMonthsCycle, Month\n...\ndate_modifier = sr.dateutils.DayIdxOfMonthsCycle(66, 4, first_month_of_cycle=Month.March)\noutput_date = date_modifier.modify(input_date)\n"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>c});var r=t(96540);const s={},o=r.createContext(s);function a(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);