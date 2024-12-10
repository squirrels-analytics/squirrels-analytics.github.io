"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4195],{29334:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"docs/topics/auth","title":"Authentication","description":"Squirrels lets you integrate with your own user authentication system in Python with a pyconfigs/auth.py file. To create a sample file, simply run:","source":"@site/versioned_docs/version-0.2.x/docs/topics/auth.md","sourceDirName":"docs/topics","slug":"/docs/topics/auth","permalink":"/docs/0.2.x/docs/topics/auth","draft":false,"unlisted":false,"tags":[],"version":"0.2.x","frontMatter":{},"sidebar":"docs","previous":{"title":"Python Models","permalink":"/docs/0.2.x/docs/topics/models-python"},"next":{"title":"Modify Dates with dateutils","permalink":"/docs/0.2.x/docs/topics/dateutils"}}');var t=n(74848),i=n(28453);const a={},o="Authentication",l={},c=[{value:"The User Class",id:"the-user-class",level:2},{value:"The Authentication Function",id:"the-authentication-function",level:2},{value:"Users and Parameters",id:"users-and-parameters",level:2},{value:"Users and Models",id:"users-and-models",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"authentication",children:"Authentication"})}),"\n",(0,t.jsxs)(s.p,{children:["Squirrels lets you integrate with your own user authentication system in Python with a ",(0,t.jsx)(s.code,{children:"pyconfigs/auth.py"})," file. To create a sample file, simply run:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-bash",children:"sqrl init --auth\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"auth.py"})," file lets you define two things:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["A user class called ",(0,t.jsx)(s.strong,{children:"User"})," that lets you define custom attributes on the class using the ",(0,t.jsx)(s.strong,{children:"set_attributes"})," method."]}),"\n",(0,t.jsxs)(s.li,{children:["An authentication function called ",(0,t.jsx)(s.strong,{children:"get_user_if_valid"})," that returns a user if the input username and password are valid."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The sections below provide more details on the ",(0,t.jsx)(s.strong,{children:"User"})," class, the authentication function, and how the user attributes can be used to change behaviour of widget parameters and models."]}),"\n",(0,t.jsx)(s.h2,{id:"the-user-class",children:"The User Class"}),"\n",(0,t.jsxs)(s.p,{children:["Squirrels comes with a default ",(0,t.jsx)(s.a,{href:"../../references/python/user_base/User",children:"User"})," class that can be imported in the ",(0,t.jsx)(s.code,{children:"auth.py"})," file:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"from squirrels import User\n"})}),"\n",(0,t.jsxs)(s.p,{children:["This class already contains attributes for ",(0,t.jsx)(s.strong,{children:"username"})," and ",(0,t.jsx)(s.strong,{children:"is_internal"}),". The ",(0,t.jsx)(s.strong,{children:"is_internal"})," attribute is a boolean that controls the scope of datasets it has access to:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'Datasets with "public" scope can be accessed without authentication'}),"\n",(0,t.jsx)(s.li,{children:'Datasets with "protected" scope can only be accessed by any authenticated user'}),"\n",(0,t.jsxs)(s.li,{children:['Datasets with "private" scope can only be accessed by an authenticated user with ',(0,t.jsx)(s.strong,{children:"is_internal"})," set to True"]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["The scope of the dataset is defined in the datasets section of ",(0,t.jsx)(s.a,{href:"./project-file",children:"squirrels.yml"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["To define your own user class with additional custom attributes, you can extend the one provided by Squirrels and override the ",(0,t.jsx)(s.strong,{children:"set_attributes"})," method. The new user class must also be called ",(0,t.jsx)(s.strong,{children:"User"})," so the one imported from Squirrels should be renamed:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'from squirrels import User as UserBase\nfrom typing import Any\n\nclass User(UserBase):\n    def set_attributes(self, user_dict: dict[str, Any]) -> None:\n        self.department = user_dict["department"]\n'})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"set_attributes"})," method takes an ",(0,t.jsx)(s.strong,{children:"user_dict"})," argument which is a dictionary defined in the authentication function."]}),"\n",(0,t.jsx)(s.h2,{id:"the-authentication-function",children:"The Authentication Function"}),"\n",(0,t.jsxs)(s.p,{children:["The authentication function must be called ",(0,t.jsx)(s.strong,{children:"get_user_if_valid"})," in the ",(0,t.jsx)(s.code,{children:"auth.py"})," file. It takes an argument ",(0,t.jsx)(s.strong,{children:"sqrl"})," of type ",(0,t.jsx)(s.a,{href:"../../references/python/arguments/AuthArgs",children:"AuthArgs"})," which contains member variable strings for ",(0,t.jsx)(s.strong,{children:"sqrl.username"})," and ",(0,t.jsx)(s.strong,{children:"sqrl.password"}),". You can also use ",(0,t.jsx)(s.a,{href:"./database",children:"Database Connections"})," that you've predefined with member variable ",(0,t.jsx)(s.strong,{children:"sqrl.connections"})," (a dictionary of database connection names to SQLAlchemy engines)."]}),"\n",(0,t.jsx)(s.p,{children:"The signature of the function should look like this:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"from squirrels import User as UserBase, AuthArgs, WrongPassword\nfrom typing import Union, Any\n\n...\n\ndef get_user_if_valid(sqrl: AuthArgs) -> Union[User, WrongPassword, None]:\n    ...\n"})}),"\n",(0,t.jsx)(s.p,{children:"Typically, this function would do the following:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Use the input ",(0,t.jsx)(s.strong,{children:"sqrl.username"})," to find the corresponding user in your authentication system.","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If the user is not found, return ",(0,t.jsx)(s.strong,{children:"None"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Turn the user record into a dictionary (let's call it ",(0,t.jsx)(s.code,{children:"user_dict"}),") and validate the input ",(0,t.jsx)(s.strong,{children:"sqrl.password"})," (usually with applying some hashing/encryption before comparing with source of truth).","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If the password is invalid, return ",(0,t.jsx)(s.code,{children:"WrongPassword()"})," (the ",(0,t.jsx)(s.a,{href:"../../references/python/user_base/WrongPassword",children:"WrongPassword"})," class can be imported from squirrels)."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(s.li,{children:["Create a user with the ",(0,t.jsx)(s.strong,{children:"User.Create"})," factory method which takes required arguments for ",(0,t.jsx)(s.strong,{children:"username"})," and ",(0,t.jsx)(s.strong,{children:"user_dict"}),", and option argument for ",(0,t.jsx)(s.strong,{children:"is_internal"})," (which is False by default).","\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["Example: ",(0,t.jsx)(s.code,{children:'user = User.Create(username, user_dict, is_internal=user_dict["is_admin"])'})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(s.li,{children:"Return the user."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["For example, suppose we had existing functions for ",(0,t.jsx)(s.code,{children:"get_user_dict_if_valid(username)"}),", ",(0,t.jsx)(s.code,{children:"get_password(username)"}),", and ",(0,t.jsx)(s.code,{children:"encrypt(password)"}),". Then the authentication function can look something like this:"]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:"def get_user_if_valid(sqrl: AuthArgs) -> Union[User, WrongPassword, None]:\n    user_dict = get_user_dict_if_valid(sqrl.username)\n    if user_dict is None:\n        return None\n    \n    if encrypt(sqrl.password) == get_password(sqrl.username):\n        return User.Create(sqrl.username, user_dict)\n    else:\n        return WrongPassword()\n"})}),"\n",(0,t.jsxs)(s.p,{children:["When ",(0,t.jsx)(s.strong,{children:"None"})," is returned instead of a ",(0,t.jsx)(s.a,{href:"../../references/python/user_base/WrongPassword",children:"WrongPassword"}),' instance, Squirrels will continue looking for the username in the "users" section of ',(0,t.jsx)(s.a,{href:"./environcfg",children:"environcfg.yml"}),". The section is generally used for specifying mock users to test with for the environment. It is represented as a dictionary usernames as keys and a dictionary of user attributes as values. The user attributes dictionary must include ",(0,t.jsx)(s.strong,{children:"password"})," and ",(0,t.jsx)(s.strong,{children:"is_internal"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"users-and-parameters",children:"Users and Parameters"}),"\n",(0,t.jsx)(s.p,{children:"The attributes defined in the User model can be used to change the visible parameters options for different groups of user. This is done using the following parameter arguments:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.strong,{children:"user_attribute"})," argument of the ",(0,t.jsx)(s.strong,{children:"Create"})," or ",(0,t.jsx)(s.strong,{children:"CreateFromSource"})," factory methods of the ",(0,t.jsx)(s.a,{href:"../../references/python/parameters/Parameter",children:"parameter classes"}),". This is an optional string, and defines the attribute of the user model to consider."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.strong,{children:"user_groups"})," argument of the constructor for ",(0,t.jsx)(s.a,{href:"../../references/python/parameter_options/ParameterOption",children:"parameter option classes"}),". This is usually a string or sequence of strings. The parameter option only shows when the value of the specified ",(0,t.jsx)(s.strong,{children:"user_attribute"})," above for the current user is one of the values defined for ",(0,t.jsx)(s.strong,{children:"user_groups"}),"."]}),"\n",(0,t.jsxs)(s.li,{children:["The ",(0,t.jsx)(s.strong,{children:"user_group_col"})," argument of the constructor for ",(0,t.jsx)(s.a,{href:"../../references/python/data_sources/DataSource",children:"parameter datasource classes"}),". This is an optional string, and works similarly to ",(0,t.jsx)(s.strong,{children:"user_groups"})," except it defines the column of a lookup table instead of the the values themselves."]}),"\n"]}),"\n",(0,t.jsx)(s.p,{children:'As an example, suppose that the user model has an attribute defined for "department" with "engineering" and "sales" as possible values. And we want to create a single-select parameter called "region" with choices "San Francisco" and "New York" for "engineering", and choices "Chicago" and "New York" for "sales". Then the constructed parameter may look like this:'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'import squirrels as sr\n\nregion_options = [\n    sr.SelectParameterOption("sf", "San Francisco", user_groups=["engineering"]),\n    sr.SelectParameterOption("ch", "Chicago", user_groups=["sales"]),\n    sr.SelectParameterOption("ny", "New York", user_groups=["engineering", "sales"])\n]\nregion_param = sr.SingleSelectParameter.Create(\n    "region", "Region", region_options, user_attribute="department"\n)\n'})}),"\n",(0,t.jsx)(s.p,{children:"If the options were coming from a lookup table instead, then it may look like this:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'region_datasource = sr.SingleSelectDataSource(\n    "lookup_table", "region_id", "region_values", user_group_col="department_col"\n)\nregion_param = sr.SingleSelectParameter.CreateFromSource(\n    "region", "Region", region_datasource, user_attribute="department"\n)\n'})}),"\n",(0,t.jsx)(s.admonition,{type:"warning",children:(0,t.jsxs)(s.p,{children:["If a parameter is created with ",(0,t.jsx)(s.strong,{children:"user_attribute"}),", the parameter should not be used by public datasets. If an unauthenticated user tries to access a public dataset that uses the parameter, and internal server error is raised."]})}),"\n",(0,t.jsx)(s.h2,{id:"users-and-models",children:"Users and Models"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"user"})," variable (instance of the User model) is available to reference in the models directly."]}),"\n",(0,t.jsx)(s.p,{children:"For example, we can mask column values based on the authenticated user:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-sql",children:"SELECT\n{%- if user.department == \"sales\" %}\n    revenue\n{%- else %}\n    '***' as revenue\n{%- endif %}\nFROM mytable\n"})}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"user"})," is also available as a member variable of the ",(0,t.jsx)(s.strong,{children:"sqrl"})," argument of ",(0,t.jsx)(s.a,{href:"./context",children:"context.py"})," and Python model functions (both ",(0,t.jsx)(s.strong,{children:"dependencies"})," and ",(0,t.jsx)(s.strong,{children:"main"}),"). The example demonstrates setting an ",(0,t.jsx)(s.code,{children:"is_sales"})," context variable."]}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-python",children:'ctx["is_sales"] = (sqrl.user.department == "sales")\n'})}),"\n",(0,t.jsxs)(s.admonition,{type:"warning",children:[(0,t.jsxs)(s.p,{children:["If not authenticated, Jinja will treat both the user object and any attributes on the user object as null in SQL models. So for instance, the condition in ",(0,t.jsx)(s.code,{children:"{% if user.my_attribute %}"})," is evaluated to false if the user is null."]}),(0,t.jsxs)(s.p,{children:["However, in Python models, when the ",(0,t.jsx)(s.code,{children:"sqrl.user"})," is None, accessing an attribute on it will raise an error."]})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var r=n(96540);const t={},i=r.createContext(t);function a(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);