"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[2651],{4794:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>c,frontMatter:()=>r,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"docs/topics/dateutils","title":"Modify Dates with dateutils","description":"The Squirrels library has a submodule called dateutils that can be used to transform date variables in Python with ease. To import the dateutils module (preferably in [context.py]), simply do:","source":"@site/versioned_docs/version-0.4.x/docs/topics/dateutils.md","sourceDirName":"docs/topics","slug":"/docs/topics/dateutils","permalink":"/docs/0.4.x/docs/topics/dateutils","draft":false,"unlisted":false,"tags":[],"version":"0.4.x","frontMatter":{},"sidebar":"docs","previous":{"title":"Interacting with Squirrels in Python","permalink":"/docs/0.4.x/docs/topics/interact-in-python"},"next":{"title":"Versioning Best Practices","permalink":"/docs/0.4.x/docs/topics/tips/versioning"}}');var i=s(4848),d=s(8453);const r={},a="Modify Dates with dateutils",o={},l=[{value:"Offset by Time Period",id:"offset-by-time-period",level:2},{value:"Get N-th Day of Calendar Cycle",id:"get-n-th-day-of-calendar-cycle",level:2},{value:"Date Modification Pipeline",id:"date-modification-pipeline",level:2},{value:"Modifying Date Strings or Timestamps",id:"modifying-date-strings-or-timestamps",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"modify-dates-with-dateutils",children:"Modify Dates with dateutils"})}),"\n",(0,i.jsxs)(t.p,{children:["The Squirrels library has a submodule called dateutils that can be used to transform date variables in Python with ease. To import the dateutils module (preferably in ",(0,i.jsx)(t.a,{href:"./context",children:"context.py"}),"), simply do:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from squirrels import dateutils as du\n"})}),"\n",(0,i.jsxs)(t.p,{children:['The examples below demonstrates how to modify a given date by number of time periods and/or get some day of a calendar cycle using classes we call "date modifiers". The format of the date can be datetime objects, string dates, or unix timestamps (as float). Assume we have a datetime variable called ',(0,i.jsx)(t.code,{children:"date_obj"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"offset-by-time-period",children:"Offset by Time Period"}),"\n",(0,i.jsx)(t.p,{children:'The following "offset date modifiers" can be used to offset a datetime object by some time period.'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../../references/python/dateutils/OffsetYears",children:"OffsetYears"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../../references/python/dateutils/OffsetMonths",children:"OffsetMonths"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../../references/python/dateutils/OffsetWeeks",children:"OffsetWeeks"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../../references/python/dateutils/OffsetDays",children:"OffsetDays"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Each of their constructors take an argument ",(0,i.jsx)(t.strong,{children:"offset"})," for the number of time periods to offset by (can be positive or negative), and each class contains a ",(0,i.jsx)(t.strong,{children:"modify"})," method to modify an input date."]}),"\n",(0,i.jsxs)(t.p,{children:["To add 3 weeks to ",(0,i.jsx)(t.code,{children:"date_obj"}),", the code you write can look something like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"new_date = OffsetWeeks(3).modify(date_obj)\n"})}),"\n",(0,i.jsx)(t.h2,{id:"get-n-th-day-of-calendar-cycle",children:"Get N-th Day of Calendar Cycle"}),"\n",(0,i.jsx)(t.p,{children:'The following "day index date modifiers" can be used to get a certain day of some calendar cycle from some datetime object.'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfMonthsCycle",children:"DayIdxOfMonthsCycle"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfYear",children:"DayIdxOfYear"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfQuarter",children:"DayIdxOfQuarter"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfMonth",children:"DayIdxOfMonth"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfWeek",children:"DayIdxOfWeek"})}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Each of their constuctors take an argument ",(0,i.jsx)(t.strong,{children:"idx"})," to specify the day number of cycle. Positive numbers like 1 and 2 represent the first and second day, while negative numbers like -1 and -2 represent the last and second last day. Using 0 is not permitted."]}),"\n",(0,i.jsxs)(t.p,{children:["For ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfMonthsCycle",children:"DayIdxOfMonthsCycle"}),", the length of the cycle in months can be specified with the argument ",(0,i.jsx)(t.strong,{children:"num_months_in_cycle"}),". This is unlike ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfMonth",children:"DayIdxOfMonth"})," where the length of the cycle is always one month. ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfYear",children:"DayIdxOfYear"}),", ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfQuarter",children:"DayIdxOfQuarter"}),", and ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfMonth",children:"DayIdxOfMonth"})," are equivalent to ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfMonthsCycle",children:"DayIdxOfMonthsCycle"})," when the ",(0,i.jsx)(t.strong,{children:"num_months_in_cycle"})," argument is 12, 3, or 1 respectively."]}),"\n",(0,i.jsxs)(t.p,{children:["For DayIdxOfWeek, the first day of the week (using the ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayOfWeek",children:"DayOfWeek"})," enum which contains values Monday, Tuesday, etc. until Sunday) can be specified using the ",(0,i.jsx)(t.strong,{children:"first_day_of_week"})," argument. The first month of the cycle/year/quarter can be specified (using the ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/Month",children:"Month"})," enum which contains values January, February, etc. until December) with the argument ",(0,i.jsx)(t.strong,{children:"first_month_of_cycle"})," for ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfMonthsCycle",children:"DayIdxOfMonthsCycle"}),", ",(0,i.jsx)(t.strong,{children:"first_month_of_year"})," for ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfYear",children:"DayIdxOfYear"}),", and ",(0,i.jsx)(t.strong,{children:"first_month_of_quarter"})," for ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DayIdxOfQuarter",children:"DayIdxOfQuarter"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Each of these classes contain a modify method to modify an input date as well."}),"\n",(0,i.jsx)(t.p,{children:"Here are some problems and solutions in code using these classes."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Problem"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Solution"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get the same or prior Friday"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"du.DayIdxOfWeek(idx=1, first_day_of_week=du.DayOfWeek.Friday).modify(date_obj)"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get the same or next Friday"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"du.DayIdxOfWeek(idx=-1, first_day_of_week=du.DayOfWeek.Saturday).modify(date_obj)"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"If Wednesday to Friday, round up to Friday. Otherwise round down to Friday"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"du.DayIdxOfWeek(idx=3, first_day_of_week=du.DayOfWeek.Wednesday).modify(date_obj)"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get the third last day of month"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"du.DayIdxOfMonth(idx=-3).modify(date_obj)"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:'Suppose a "Third Year" occurs every 4 months from February 1st. Get the beginning of current Third Year'}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"du.DayIdxOfMonthsCycle(idx=1, num_months_in_cycle=4, first_month_of_cycle=du.Month.February).modify(date_obj)"})})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"date-modification-pipeline",children:"Date Modification Pipeline"}),"\n",(0,i.jsxs)(t.p,{children:["A class called ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DateModPipeline",children:"DateModPipeline"})," lets you stitch together multiple instances of the date modification classes above into a single date modification class. Simply specify a sequence of date modifiers in the constructor. Using this pipeline approach allows one to make almost any date transformation possible."]}),"\n",(0,i.jsx)(t.p,{children:"Here are some more examples of problems and solutions."}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Problem"}),(0,i.jsx)(t.th,{style:{textAlign:"left"},children:"Solution"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get the next Friday"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"du.DateModPipeline([du.DayIdxOfWeek(1, du.DayOfWeek.Friday), du.OffsetWeeks(1)]).modify(date_obj)"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get the prior Friday"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"du.DateModPipeline([du.DayIdxOfWeek(-1, du.DayOfWeek.Saturday), du.OffsetWeeks(-1)]).modify(date_obj)"})})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"left"},children:"Get the second Friday of the current quarter. First month of quarter is January"}),(0,i.jsx)(t.td,{style:{textAlign:"left"},children:(0,i.jsx)(t.code,{children:"du.DateModPipeline([du.DayIdxOfQuarter(1), du.DayIdxOfWeek(-1, du.DayOfWeek.Saturday), du.OffsetWeeks(1)]).modify(date_obj)"})})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["In addition to the ",(0,i.jsx)(t.strong,{children:"modify"})," method, this class also lets you get a list of date objects with the method ",(0,i.jsx)(t.strong,{children:"get_date_list"}),'. It takes an input start date and a step (as an "offset date modifier"), modifies the start date to get the end date, and returns the dates from start to end by step. Below is an example of going back every week from "June 15th, 2023" and stopping before we pass the first Friday of the Quarter that "June 15th, 2023" is in (i.e. "April 7th, 2023"). Since "June 15th, 2023" is on a Thursday, the last date in the returned date list would be "April 13th, 2023" (also a Thursday).']}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-python",children:"from datetime import datetime\nfrom squirrels import dateutils as du\n...\nmodifier = du.DateModPipeline([du.DayIdxOfQuarter(1), du.DayIdxOfWeek(-1, du.DayOfWeek.Saturday)])\ndate_list = modifier.get_date_list(datetime(2023, 6, 15), du.OffsetWeeks(-1))\n# date_list == [datetime(2023, 6, 15), datetime(2023, 6, 8), ..., datetime(2023, 4, 13)]\n"})}),"\n",(0,i.jsx)(t.h2,{id:"modifying-date-strings-or-timestamps",children:"Modifying Date Strings or Timestamps"}),"\n",(0,i.jsxs)(t.p,{children:["More often then not, the dates that you're working with are strings or timestamps as floats. Although it should be easy enough to convert to datetime object and back, the dateutils module also provides ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DateStringModifier",children:"DateStringModifier"})," and ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/TimestampModifier",children:"TimestampModifier"})," classes to simplify your code. Just like ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DateModPipeline",children:"DateModPipeline"}),", both these classes have a constructor that takes a sequence of date modification class instances, a ",(0,i.jsx)(t.strong,{children:"modify"})," method, and a ",(0,i.jsx)(t.strong,{children:"get_date_list"})," method."]}),"\n",(0,i.jsxs)(t.p,{children:["For ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/DateStringModifier",children:"DateStringModifier"}),", the constructor also takes an optional ",(0,i.jsx)(t.strong,{children:"date_format"})," argument for the date format of the outputs. The methods ",(0,i.jsx)(t.strong,{children:"modify"})," and ",(0,i.jsx)(t.strong,{children:"get_date_list"})," take an input date as string, and an optional ",(0,i.jsx)(t.strong,{children:"input_format"})," argument for the date format of the input date."]}),"\n",(0,i.jsxs)(t.p,{children:["For ",(0,i.jsx)(t.a,{href:"../../references/python/dateutils/TimestampModifier",children:"TimestampModifier"}),", the input date for methods ",(0,i.jsx)(t.strong,{children:"modify"})," and ",(0,i.jsx)(t.strong,{children:"get_date_list"})," are floats representing the UNIX timestamp of the date. The output dates are also UNIX timestamps."]})]})}function c(e={}){const{wrapper:t}={...(0,d.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>a});var n=s(6540);const i={},d=n.createContext(i);function r(e){const t=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);