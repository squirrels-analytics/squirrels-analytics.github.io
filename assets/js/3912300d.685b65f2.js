"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[7083],{28917:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"references/python/user_base/User","title":"User","description":"This class is the base class for creating a custom User model in auth.py.","source":"@site/versioned_docs/version-0.2.x/references/python/user_base/User.md","sourceDirName":"references/python/user_base","slug":"/references/python/user_base/User","permalink":"/docs/0.2.x/references/python/user_base/User","draft":false,"unlisted":false,"tags":[],"version":"0.2.x","frontMatter":{},"sidebar":"references","previous":{"title":"NumberRangeParameter","permalink":"/docs/0.2.x/references/python/parameters/NumberRangeParameter"},"next":{"title":"WrongPassword","permalink":"/docs/0.2.x/references/python/user_base/WrongPassword"}}');var n=t(74848),i=t(28453);const a={},o="User",c={},l=[{value:"Attributes",id:"attributes",level:2},{value:"username",id:"username",level:3},{value:"is_internal",id:"is_internal",level:3},{value:"Methods",id:"methods",level:2},{value:"set_attributes",id:"set_attributes",level:3},{value:"Static or Class Methods",id:"static-or-class-methods",level:2},{value:"Create",id:"create",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsx)(s.h1,{id:"user",children:"User"})}),"\n",(0,n.jsxs)(s.p,{children:["This class is the base class for creating a custom User model in ",(0,n.jsx)(s.a,{href:"../../../docs/topics/auth",children:"auth.py"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Can be found in the classpath ",(0,n.jsx)(s.code,{children:"squirrels.user_base.User"})," or ",(0,n.jsx)(s.code,{children:"squirrels.User"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsx)(s.p,{children:"Attibutes available to the User model by default."}),"\n",(0,n.jsx)(s.h3,{id:"username",children:"username"}),"\n",(0,n.jsx)(s.p,{children:"A string for the username of the user"}),"\n",(0,n.jsx)(s.h3,{id:"is_internal",children:"is_internal"}),"\n",(0,n.jsx)(s.p,{children:"A boolean for whether the user can access private datasets"}),"\n",(0,n.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsx)(s.p,{children:"Methods to overwrite in the custom User model."}),"\n",(0,n.jsx)(s.h3,{id:"set_attributes",children:"set_attributes"}),"\n",(0,n.jsx)(s.p,{children:"Sets custom attributes on the user given a user object as a Python dictionary. Should be overwritten in the custom User model, otherwise does nothing by default."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Required Arguments:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"user_dict"}),": A dictionary representing a user object (such as a row from a database)"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"static-or-class-methods",children:"Static or Class Methods"}),"\n",(0,n.jsx)(s.p,{children:'Methods to use in the "get_user_if_valid" function.'}),"\n",(0,n.jsx)(s.h3,{id:"create",children:"Create"}),"\n",(0,n.jsx)(s.p,{children:'Factory method to create a user if the authentication is valid. This method will create a new User object and call "set_attributes" on it.'}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Required Arguments:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"username"}),": A string for the username for the authenticated user"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"user_dict"}),": A dictionary representation of a user and its attributes"]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.strong,{children:"Optional Keyword Arguments:"})}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.strong,{children:"is_internal"}),": A boolean for whether the user can access private datasets. Default is false."]}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"Returns:"})," User (the one that this class method was called on)"]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var r=t(96540);const n={},i=r.createContext(n);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);