"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[7065],{70349:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"docs/frontend/rest-api","title":"REST API Types","description":"When interacting the APIs for a single Squirrels project as a client, a sample workflow may look like this:","source":"@site/versioned_docs/version-0.2.x/docs/frontend/rest-api.md","sourceDirName":"docs/frontend","slug":"/docs/frontend/rest-api","permalink":"/docs/0.2.x/docs/frontend/rest-api","draft":false,"unlisted":false,"tags":[],"version":"0.2.x","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"docs","previous":{"title":"Frontend Topics","permalink":"/docs/0.2.x/docs/frontend"},"next":{"title":"Best Practices","permalink":"/docs/0.2.x/docs/frontend/best-practices"}}');var r=n(74848),i=n(28453);const a={sidebar_position:1},l="REST API Types",d={},o=[{value:"Project Level APIs",id:"project-level-apis",level:2},{value:"Login API",id:"login-api",level:3},{value:"Datasets Catalog API",id:"datasets-catalog-api",level:3},{value:"Dataset Level APIs",id:"dataset-level-apis",level:2},{value:"Parameters API",id:"parameters-api",level:3},{value:"Dataset Result API",id:"dataset-result-api",level:3}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"rest-api-types",children:"REST API Types"})}),"\n",(0,r.jsx)(s.p,{children:"When interacting the APIs for a single Squirrels project as a client, a sample workflow may look like this:"}),"\n",(0,r.jsxs)(s.ol,{children:["\n",(0,r.jsxs)(s.li,{children:["Login with a username and password to retrieve an authorization token for subsequent API calls. This would use the ",(0,r.jsx)(s.strong,{children:"login API"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Retrieve all datasets you have access to for that project. This would use the ",(0,r.jsx)(s.strong,{children:"datasets catalog API"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Pick a dataset and retrieve its parameters. This would use the ",(0,r.jsx)(s.strong,{children:"parameters API"}),"."]}),"\n",(0,r.jsxs)(s.li,{children:["Gather parameter selections, and use them to retrieve the dataset result. This would use the ",(0,r.jsx)(s.strong,{children:"dataset result API"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Depending on the use case, not all API types have to be used. For instance, the datasets may all be public, so using the ",(0,r.jsx)(s.strong,{children:"login API"})," would not be needed. Or your application may use only one of the datasets, assuming that it always exists, so it may not use the ",(0,r.jsx)(s.strong,{children:"datasets catalog API"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Further details of each API type are described in the sections below. All paths are prefixed with ",(0,r.jsx)(s.strong,{children:"/squirrels-v0"}),", and the ",(0,r.jsx)(s.code,{children:"v0"}),' here means "use the API interface corresponding to major version 0 of the squirrels library". All APIs return a JSON response, and when the status code is not 200, the response is a JSON object with only the field ',(0,r.jsx)(s.strong,{children:"detail"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["For example purposes, suppose we have a Squirrels project named ",(0,r.jsx)(s.code,{children:"my_project"}),", its major version is 1, and it contains a dataset named ",(0,r.jsx)(s.code,{children:"my_dataset"}),"."]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["In the future, we plan to have a ",(0,r.jsx)(s.strong,{children:"Projects Catalog API"})," associated to a cloud hosting platform to list all Squirrels projects (and versions) available under one domain. Currently, an example of the response for this API is available under the ",(0,r.jsx)(s.strong,{children:"/squirrels-v0"})," path when running a Squirrels project, which would always show one project name and one associated version. This is only an example and we do not guarantee this path to be available in the future, thus this API type is not described further on this page."]})}),"\n",(0,r.jsx)(s.h2,{id:"project-level-apis",children:"Project Level APIs"}),"\n",(0,r.jsx)(s.p,{children:"There is a single API path for the login API and datasets catalog API per Squirrels project (and major version)."}),"\n",(0,r.jsx)(s.h3,{id:"login-api",children:"Login API"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Request type: ",(0,r.jsx)(s.strong,{children:"POST"})]}),"\n",(0,r.jsxs)(s.li,{children:["Path: ",(0,r.jsx)(s.strong,{children:"/squirrels-v0/{project_name}/v{major_version}/token"})]}),"\n",(0,r.jsxs)(s.li,{children:["Path Example: ",(0,r.jsx)(s.strong,{children:"/squirrels-v0/my-project/v1/token"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:'This API endpoint lets you retrieve an access token by authenticating with credentials. The "username" and "password" fields must be provided as form data to the request body.'}),"\n",(0,r.jsx)(s.p,{children:"If the username and password are correct, a 200 status code is returned, and the response is a JSON object with the following fields:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"access_token"}),": An encoded JSON web token to use subsequent API requests."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"token_type"}),': Currently only outputs "bearer" for Bearer token.']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"username"}),": The username authenticated with from the form data."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"expiry_time"}),": The expiry time of the access token in ",(0,r.jsx)(s.code,{children:"yyyy-MM-dd'T'hh:mm:ss.SSSSSS'+00:00'"})," format. The access token usually expires 30 minutes after creation unless specified otherwise in the Squirrels project ",(0,r.jsx)(s.a,{href:"../topics/settings",children:"settings"})," for ",(0,r.jsx)(s.strong,{children:"auth.token.expire_minutes"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"This is an example of a JSON response with 200 status code:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvaG5kb2UiLCJpc19pbnRlcm5hbCI6dHJ1ZSwib3JnYW5pemF0aW9uIjoib3JnMSIsImV4cCI6MTcwODMwOTIzN30.z3XF7Vp48mITwZECxxjd1JLOCKIURw7CFvWVs7-_vPE",\n    "token_type": "bearer",\n    "username": "johndoe",\n    "expiry_time": "2024-02-19T02:20:37.531776+00:00"\n}\n'})}),"\n",(0,r.jsx)(s.p,{children:"To use the access token for the other API endpoints, simply provide the request header:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:'"Authorization": "Bearer <access_token>"'})}),"\n",(0,r.jsx)(s.p,{children:"If the username or password provided to the Login API are invalid, a 401 status code is returned with the following JSON response."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "detail": "Incorrect username or password"\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"datasets-catalog-api",children:"Datasets Catalog API"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Request type: ",(0,r.jsx)(s.strong,{children:"GET"})]}),"\n",(0,r.jsxs)(s.li,{children:["Path: ",(0,r.jsx)(s.strong,{children:"/squirrels-v0/{project_name}/v{major_version}/datasets"})]}),"\n",(0,r.jsxs)(s.li,{children:["Path Example: ",(0,r.jsx)(s.strong,{children:"/squirrels-v0/my-project/v1/datasets"})]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"This API endpoint retrieves the list of datasets that the user has access to. And only public datasets are provided if the user is not authenticated."}),"\n",(0,r.jsx)(s.p,{children:'This returns a JSON object with a "datasets" field whose value is a list of JSON objects with the following fields:'}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"name"}),": The name of the dataset (usually in snake case)."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"label"}),": The human-friendly display name for the dataset."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"parameters_path"}),": The API path for the dataset's parameters API."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"result_path"}),": The API path for the dataset's result API."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Here is a sample JSON response:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "datasets": [\n        {\n            "name": "my_dataset",\n            "label": "Dataset Example",\n            "parameters_path": "/squirrels-v0/my-project/v1/dataset/my-dataset/parameters",\n            "result_path": "/squirrels-v0/my-project/v1/dataset/my-dataset"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"dataset-level-apis",children:"Dataset Level APIs"}),"\n",(0,r.jsxs)(s.p,{children:["Within a Squirrels project, each dataset has a different API path for the parameters API and dataset result API. Both API types can either be a ",(0,r.jsx)(s.strong,{children:"GET"})," request that takes parameter selections through query parameters, or a ",(0,r.jsx)(s.strong,{children:"POST"})," request that takes parameters selections as a JSON in the request body."]}),"\n",(0,r.jsxs)(s.p,{children:['The input format for the parameter selections depend on the parameter type. More details on identifying the parameter type for a parameter will be discussed soon in the "Parameters API" section. Below are the available parameter types and their input formats for parameter selections. Note that only string inputs are accepts for ',(0,r.jsx)(s.strong,{children:"GET"})," requests, while accepted inputs for ",(0,r.jsx)(s.strong,{children:"POST"})," requests include any valid JSON."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"single_select"}),": A string for the id of the selected option (ex. ",(0,r.jsx)(s.code,{children:"id0"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"multi_select"}),": Either a comma delimited string of the selected options (ex. ",(0,r.jsx)(s.code,{children:"id0,id1,id2"}),"), a JSON list of strings (ex. ",(0,r.jsx)(s.code,{children:'["id0","id1","id2"]'}),"), or a string representation of the JSON list with escaped quotes."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"date"}),': A string with format "yyyy-MM-dd" (ex. ',(0,r.jsx)(s.code,{children:"2024-01-01"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"date_range"}),': Two dates with format "yyyy-MM-dd" as a comma joined string (ex. ',(0,r.jsx)(s.code,{children:"2024-01-01,2024-02-01"}),"), a JSON list of strings (ex. ",(0,r.jsx)(s.code,{children:'["2024-01-01","2024-02-01"]'}),"), or string representation of JSON list with escaped quotes."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"number"}),": A number or string representing a valid decimal number (ex. ",(0,r.jsx)(s.code,{children:"3"})," or ",(0,r.jsx)(s.code,{children:"3.0"}),")."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"number_range"}),": Two decimal numbers as a comma joined string (ex. ",(0,r.jsx)(s.code,{children:"1,10"}),"), a JSON list of strings or numbers (ex. ",(0,r.jsx)(s.code,{children:'["1","10"]'})," or ",(0,r.jsx)(s.code,{children:"[1,10]"}),"), or string representation of the JSON list."]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:['Suppose we want to specify selected values for parameters named "my_single_select", "my_multi_select", and "my_date" with selected values ',(0,r.jsx)(s.code,{children:"id0"}),", ",(0,r.jsx)(s.code,{children:"id00,id02"}),", and ",(0,r.jsx)(s.code,{children:"2024-01-01"})," respectively. The following are few examples of valid inputs:"]}),"\n",(0,r.jsxs)(s.p,{children:["Using query parameters for ",(0,r.jsx)(s.strong,{children:"GET"})," request:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"?my_single_select=id0&my_multi_select=id00,id02&my_date=2024-01-01"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"?my-single-select=id0&my-multi-select=id00,id02&my-date=2024-01-01"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:'?my_single_select=id0&my_multi_select=["id00","id02"]&my_date=2024-01-01'})}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"?my_single_select=id0&my_multi_select=%5B%22id00%22%2C%22id02%22%5D&my_date=2024-01-01"})," (uses URL encoding)"]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Using JSON request body for ",(0,r.jsx)(s.strong,{children:"POST"})," request:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:'{"my_single_select": "id0", "my_multi_select": "id00,id02", "my_date": "2024-01-01"}'})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:'{"my_single_select": "id0", "my_multi_select": ["id00", "id02"], "my_date": "2024-01-01"}'})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:'{"my_single_select": "id0", "my_multi_select": "[\\"id00\\",\\"id02\\"]", "my_date": "2024-01-01"}'})}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"parameters-api",children:"Parameters API"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Request type: ",(0,r.jsx)(s.strong,{children:"GET"})," or ",(0,r.jsx)(s.strong,{children:"POST"})]}),"\n",(0,r.jsxs)(s.li,{children:["Path: ",(0,r.jsx)(s.strong,{children:"/squirrels-v0/{project_name}/v{major_version}/dataset/{dataset_name}/parameters"})]}),"\n",(0,r.jsxs)(s.li,{children:["Path Example: ",(0,r.jsx)(s.strong,{children:"/squirrels-v0/my-project/v1/dataset/my-dataset/parameters"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:['This API endpoint retrieves the widget parameters for a dataset. This endpoint can also be used to get updates for the children parameters when selections change for parent parameters (for instance, selecting a value for a "continent" parameter would change the available options for "country"). This is done by passing the value as a query parameter for ',(0,r.jsx)(s.strong,{children:"GET"})," requests or part of the request body for ",(0,r.jsx)(s.strong,{children:"POST"})," requests. Passing more than one parameter selection to this request is invalid."]}),"\n",(0,r.jsxs)(s.p,{children:['The response is a JSON object with a "parameters" field whose value is a list of parameters as JSON objects. The fields to a parameter JSON object varies based on the parameter type. The following are all possible fields, the parameter type (or ',(0,r.jsx)(s.strong,{children:"widget_type"}),") they are applicable to in brackets, and the field descriptions."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"widget_type"})," (all parameter types): The parameter type."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"name"})," (all parameter types): The name of the parameter. Use this as the key when providing the API request parameters."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"label"})," (all parameter types): The human-friendly display name for the parameter."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"options"})," (",(0,r.jsx)(s.code,{children:"single_select"})," and ",(0,r.jsx)(s.code,{children:"multi_select"}),"): A list of select options as JSON objects containing ",(0,r.jsx)(s.strong,{children:"id"})," and ",(0,r.jsx)(s.strong,{children:"label"})," fields."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"trigger_refresh"})," (",(0,r.jsx)(s.code,{children:"single_select"})," and ",(0,r.jsx)(s.code,{children:"multi_select"}),"): A boolean that's set to true for parent parameters that require a new parameters API call when the selection changes."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"selected_id"})," (",(0,r.jsx)(s.code,{children:"single_select"}),"): The id of the selected option."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"selected_ids"})," (",(0,r.jsx)(s.code,{children:"multi_select"}),"): A list of ids of the selected options."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"show_select_all"})," (",(0,r.jsx)(s.code,{children:"multi_select"}),"): A boolean for whether there should be a way to select all options with one click."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"is_dropdown"})," (",(0,r.jsx)(s.code,{children:"multi_select"}),"): A boolean for whether the parameter should appear as a dropdown with individual select boxes, or a scrollable select box with click and drag selections."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"order_matters"})," (",(0,r.jsx)(s.code,{children:"multi_select"}),"): A boolean for whether the ordering of the input selections would affect the result of the dataset."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"selected_date"})," (",(0,r.jsx)(s.code,{children:"date"}),'): A string in "yyyy-MM-dd" format for the currently selected date.']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"selected_start_date"})," (",(0,r.jsx)(s.code,{children:"date_range"}),'): A string in "yyyy-MM-dd" format for the currently selected start date.']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"selected_end_date"})," (",(0,r.jsx)(s.code,{children:"date_range"}),'): A string in "yyyy-MM-dd" format for the currently selected end date.']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"min_value"})," (",(0,r.jsx)(s.code,{children:"number"})," and ",(0,r.jsx)(s.code,{children:"number_range"}),"): A decimal string for the lower bound of the selectable number."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"max_value"})," (",(0,r.jsx)(s.code,{children:"number"})," and ",(0,r.jsx)(s.code,{children:"number_range"}),"): A decimal string for the upper bound of the selectable number."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"increment"})," (",(0,r.jsx)(s.code,{children:"number"})," and ",(0,r.jsx)(s.code,{children:"number_range"}),"): A decimal string for the selectable increments between the lower bound and upper bound."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"selected_value"})," (",(0,r.jsx)(s.code,{children:"number"}),"): A decimal string for the currently selected number."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"selected_lower_value"})," (",(0,r.jsx)(s.code,{children:"number_range"}),"): A decimal string for the currently selected lower number."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"selected_upper_value"})," (",(0,r.jsx)(s.code,{children:"number_range"}),"): A decimal string for the currently selected upper number."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The following is an example of a simple response with just one single select parameter."}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "parameters": [\n        {\n            "widget_type": "single_select",\n            "name": "group_by",\n            "label": "Group By",\n            "trigger_refresh": false,\n            "options": [\n                {\n                    "id": "0",\n                    "label": "Year"\n                },\n                {\n                    "id": "1",\n                    "label": "Month"\n                }\n            ],\n            "selected_id": "0"\n        }\n    ]\n}\n'})}),"\n",(0,r.jsx)(s.h3,{id:"dataset-result-api",children:"Dataset Result API"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Request type: ",(0,r.jsx)(s.strong,{children:"GET"})," or ",(0,r.jsx)(s.strong,{children:"POST"})]}),"\n",(0,r.jsxs)(s.li,{children:["Path: ",(0,r.jsx)(s.strong,{children:"/squirrels-v0/{project_name}/v{major_version}/dataset/{dataset_name}"})]}),"\n",(0,r.jsxs)(s.li,{children:["Path Example: ",(0,r.jsx)(s.strong,{children:"/squirrels-v0/my-project/v1/dataset/my-dataset"})]}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["This API endpoint retrieves the tabular result of the dataset given parameter selections as query parameters (for ",(0,r.jsx)(s.strong,{children:"GET"})," requests) or JSON request body (for ",(0,r.jsx)(s.strong,{children:"POST"})," requests)."]}),"\n",(0,r.jsxs)(s.p,{children:["The response is a JSON object with fields ",(0,r.jsx)(s.strong,{children:"schema"})," and ",(0,r.jsx)(s.strong,{children:"data"}),". The response format is partially inspired by the JSON output for pandas dataframes when running ",(0,r.jsx)(s.code,{children:'df.to_json(orient="table")'})," in Python. Below are more details of the fields (including nested ones):"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"schema"}),": A JSON object with the following fields:","\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"fields"}),": A list of JSON objects containing the ",(0,r.jsx)(s.strong,{children:"name"})," and ",(0,r.jsx)(s.strong,{children:"type"})," for each of the columns in the result. The possible values of ",(0,r.jsx)(s.strong,{children:"type"}),' are "string", "number", "integer", "boolean", and "datetime".']}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"dimensions"}),": A list of column names (as strings) that serve as the dimensions for the dataset"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"data"}),": A list of JSON objects where each object is a row of the tabular results. The keys and values of the object are column names (described in ",(0,r.jsx)(s.strong,{children:"fields"}),"), and values of the row."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"The following is an example of the JSON response:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "schema": {\n        "fields": [\n            {\n                "name": "year",\n                "type": "string"\n            },\n            {\n                "name": "temperature_C",\n                "type": "number"\n            }\n        ],\n        "dimensions": ["year"]\n    },\n    "data": [\n        {\n            "year": "2012",\n            "temperature_C": 15.3\n        },\n        {\n            "year": "2013",\n            "temperature_C": 16.1\n        },\n        {\n            "year": "2014",\n            "temperature_C": 17.0\n        },\n        {\n            "year": "2015",\n            "temperature_C": 17.4\n        }\n    ]\n}\n'})})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>l});var t=n(96540);const r={},i=t.createContext(r);function a(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);