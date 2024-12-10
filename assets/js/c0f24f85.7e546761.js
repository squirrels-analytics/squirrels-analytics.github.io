"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[69],{95388:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"releases/version-0.4","title":"What\'s New in v0.4 (2024-10-06)","description":"The following are changes and new features introduced in v0.4 of Squirrels when compared to v0.3.","source":"@site/docs/releases/98-version-0.4.md","sourceDirName":"releases","slug":"/releases/version-0.4","permalink":"/docs/next/releases/version-0.4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":98,"frontMatter":{},"sidebar":"releases","next":{"title":"What\'s New in v0.3 (2024-07-01)","permalink":"/docs/next/releases/version-0.3"}}');var r=i(74848),t=i(28453);const a={},o="What's New in v0.4 (2024-10-06)",l={},c=[{value:"Project Changes for Version Compatibility",id:"project-changes-for-version-compatibility",level:2},{value:"New Features",id:"new-features",level:2},{value:"Dashboard APIs",id:"dashboard-apis",level:3},{value:"Settings for Cache Size and TTL",id:"settings-for-cache-size-and-ttl",level:3},{value:"SquirrelsProject Class in Python",id:"squirrelsproject-class-in-python",level:3},{value:"CLI Options for File Logging",id:"cli-options-for-file-logging",level:3},{value:"CLI Command for Getting Example Files",id:"cli-command-for-getting-example-files",level:3},{value:"Changes to the <code>sqrl init</code> CLI",id:"changes-to-the-sqrl-init-cli",level:3},{value:"Automatically Imported Jinja Macros for SQL Models",id:"automatically-imported-jinja-macros-for-sql-models",level:3},{value:"Fixes in v0.3.1",id:"fixes-in-v031",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"whats-new-in-v04-2024-10-06",children:"What's New in v0.4 (2024-10-06)"})}),"\n",(0,r.jsx)(s.p,{children:"The following are changes and new features introduced in v0.4 of Squirrels when compared to v0.3."}),"\n",(0,r.jsxs)(s.p,{children:["Note that Squirrels Analytics is committed to minimizing breaking changes across major versions of the Squirrels library, except for the version compatibility project changes specified below. If you encounter any problems when upgrading, please raise an issue ",(0,r.jsx)(s.a,{href:"https://github.com/squirrels-analytics/squirrels/issues",children:"here"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"project-changes-for-version-compatibility",children:"Project Changes for Version Compatibility"}),"\n",(0,r.jsx)(s.p,{children:'The filename "environcfg.yml" was deprecated in v0.3.1 and replaced with "env.yml" instead. As of v0.4.0, the "environcfg.yml" file is no longer supported. Any existing files named "environcfg.yml" must be renamed to "env.yml".'}),"\n",(0,r.jsx)(s.p,{children:'In addition, the "datasets catalog API" is now known as the "data catalog API" to include dashboards as well (See new feature "Dashboard APIs" below). Before v0.4.0, the endpoint use to be like this:'}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.code,{children:"/squirrels-v0/{project_name}/v{major_version}/datasets"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Now, the endpoint is like this:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:"/squirrels-v0/{project_name}/v{major_version}/data-catalog"})}),"\n",(0,r.jsx)(s.h2,{id:"new-features",children:"New Features"}),"\n",(0,r.jsx)(s.h3,{id:"dashboard-apis",children:"Dashboard APIs"}),"\n",(0,r.jsxs)(s.p,{children:["In addition to creating APIs for datasets, we now also support creating APIs for dashboards! Dashboards metadata can be configured in the ",(0,r.jsx)(s.a,{href:"../docs/topics/project-file",children:"squirrels.yml"}),' file for things like dashboard name and parameters used. The dashboard content is defined in Python files under the "dashboards" folder by creating them with your favourite data visualization library (such as matplotlib or plotly).']}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"../references/cli/init",children:"sqrl init"})," command has been enhanced to create an example dashboard as well."]}),"\n",(0,r.jsxs)(s.p,{children:["See the ",(0,r.jsx)(s.a,{href:"../docs/topics/dashboards",children:"Dashboards"})," page for more details."]}),"\n",(0,r.jsx)(s.h3,{id:"settings-for-cache-size-and-ttl",children:"Settings for Cache Size and TTL"}),"\n",(0,r.jsx)(s.p,{children:'Settings for "results.cache.size" and "results.cache.ttl_minutes" have been deprecated and replaced with new settings called "datasets.cache.size" and "datasets.cache.ttl_minutes" respectively. The old settings will continue to work, and the new settings will override the old ones if both are defined.'}),"\n",(0,r.jsx)(s.p,{children:'Settings for "dashboards.cache.size" and "dashboards.cache.ttl_minutes" have also been added.'}),"\n",(0,r.jsxs)(s.p,{children:["See the ",(0,r.jsx)(s.a,{href:"../docs/topics/settings",children:"Settings"})," page for more details."]}),"\n",(0,r.jsx)(s.h3,{id:"squirrelsproject-class-in-python",children:"SquirrelsProject Class in Python"}),"\n",(0,r.jsxs)(s.p,{children:["You can now interact with the Squirrels project in Python by creating a ",(0,r.jsx)(s.a,{href:"../references/python/project/SquirrelsProject",children:"SquirrelsProject"})," object. This allows you to access the Squirrels project's datasets, dashboards, or other resources programmatically. This makes it easier to experiment with the Squirrels project in a Jupyter notebook or a Python script."]}),"\n",(0,r.jsxs)(s.p,{children:["See the ",(0,r.jsx)(s.a,{href:"../docs/topics/interact-in-python",children:"Interact with Squirrels in Python"})," page for more details."]}),"\n",(0,r.jsx)(s.h3,{id:"cli-options-for-file-logging",children:"CLI Options for File Logging"}),"\n",(0,r.jsxs)(s.p,{children:["New CLI options have been added to all command to allow logging to a file. See ",(0,r.jsx)(s.a,{href:"../references/cli/sqrl",children:"this page"})," for more details."]}),"\n",(0,r.jsx)(s.h3,{id:"cli-command-for-getting-example-files",children:"CLI Command for Getting Example Files"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.a,{href:"../references/cli/get-file",children:"sqrl get-file"})," command has been introduced to get a single example file that is common for Squirrels projects. See the ",(0,r.jsx)(s.a,{href:"../references/cli/get-file",children:"sqrl get-file"})," page for more details."]}),"\n",(0,r.jsxs)(s.h3,{id:"changes-to-the-sqrl-init-cli",children:["Changes to the ",(0,r.jsx)(s.code,{children:"sqrl init"})," CLI"]}),"\n",(0,r.jsxs)(s.p,{children:["Due to the addition of the ",(0,r.jsx)(s.a,{href:"../references/cli/get-file",children:"sqrl get-file"})," command, the ",(0,r.jsx)(s.a,{href:"../references/cli/init",children:"sqrl init"})," command has been changed to always create a fully working Squirrels project."]}),"\n",(0,r.jsxs)(s.p,{children:["For example, before v0.4.0, running ",(0,r.jsx)(s.code,{children:"sqrl init --auth"})," meant only creating the ",(0,r.jsx)(s.code,{children:"auth.py"})," file in the ",(0,r.jsx)(s.code,{children:"pyconfigs/"})," folder. Now, it creates the full Squirrels project with the ",(0,r.jsx)(s.code,{children:"auth.py"})," file."]}),"\n",(0,r.jsxs)(s.p,{children:["See the ",(0,r.jsx)(s.a,{href:"../references/cli/init",children:"sqrl init"})," page for more details."]}),"\n",(0,r.jsx)(s.h3,{id:"automatically-imported-jinja-macros-for-sql-models",children:"Automatically Imported Jinja Macros for SQL Models"}),"\n",(0,r.jsxs)(s.p,{children:["Before v0.4.0, you had to explicitly import Jinja macros in SQL models using ",(0,r.jsx)(s.a,{href:"https://ttl255.com/jinja2-tutorial-part-6-include-and-import/",children:"Jinja's import statement"}),". Now, the Jinja macros can be called directly (in any SQL model) as long as they are in the ",(0,r.jsx)(s.code,{children:"macros/"})," folder in a file with one of these extensions: ",(0,r.jsx)(s.code,{children:".sql"}),", ",(0,r.jsx)(s.code,{children:".j2"}),", ",(0,r.jsx)(s.code,{children:".jinja"}),", or ",(0,r.jsx)(s.code,{children:".jinja2"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:['See the "Using Custom Jinja Macros" section of the ',(0,r.jsx)(s.a,{href:"../docs/topics/models-sql#using-custom-jinja-macros",children:"SQL Models"})," page for more details."]}),"\n",(0,r.jsx)(s.h2,{id:"fixes-in-v031",children:"Fixes in v0.3.1"}),"\n",(0,r.jsx)(s.p,{children:"The following fix was applied in the 0.4.1 release:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Fixed a Testing UI issue where it was not working when a dataset contained a date range parameter without a min date or max date."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,s,i)=>{i.d(s,{R:()=>a,x:()=>o});var n=i(96540);const r={},t=n.createContext(r);function a(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);