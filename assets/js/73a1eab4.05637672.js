"use strict";(self.webpackChunksquirrels_docs=self.webpackChunksquirrels_docs||[]).push([[4947],{10579:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"docs/topics/tips/deployment","title":"Deploy with Docker","description":"In the future, we intend to create our own Cloud platform to host Squirrels projects that comes with infrastructure built-in for \\"project version catalog\\" and maintaining stacks of minor versions. But for the time being, we recommend creating a Docker image, and deploying your image as a container on a hosting platform. Information on deploying Docker containers to your hosting platform is not provided on this page... See the docs for your hosting platform for more details.","source":"@site/docs/docs/topics/tips/deployment.md","sourceDirName":"docs/topics/tips","slug":"/docs/topics/tips/deployment","permalink":"/docs/next/docs/topics/tips/deployment","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{},"sidebar":"docs","previous":{"title":"Versioning Best Practices","permalink":"/docs/next/docs/topics/tips/versioning"},"next":{"title":"Frontend Topics","permalink":"/docs/next/docs/frontend"}}');var r=o(74848),i=o(28453);const s={},c="Deploy with Docker",a={},l=[];function d(e){const n={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"deploy-with-docker",children:"Deploy with Docker"})}),"\n",(0,r.jsx)(n.p,{children:'In the future, we intend to create our own Cloud platform to host Squirrels projects that comes with infrastructure built-in for "project version catalog" and maintaining stacks of minor versions. But for the time being, we recommend creating a Docker image, and deploying your image as a container on a hosting platform. Information on deploying Docker containers to your hosting platform is not provided on this page... See the docs for your hosting platform for more details.'}),"\n",(0,r.jsxs)(n.p,{children:['Typically, a file named "Dockerfile" is needed for creating docker images (which can be stored in your Squirrels project or somewhere in your server). There is no "one size fits all" for the contents of your Dockerfile since it depends on the Python version and package management tool that you use. Assuming Python version 3.11 and the dependencies of your project are provided in a ',(0,r.jsx)(n.code,{children:"requirements.txt"})," file that can be used for pip installs, the Dockerfile can look something like this:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",children:'# Change here to use different python version (ex. 3.11-slim for version 3.11)\nFROM python:3.12-slim\nWORKDIR /app\n\nCOPY . .\n\n# Only needed if there are python dependencies installed using git, or for the\n# "sqrl deps" command if there are packages defined in "squirrels.yml"\nRUN apt-get update && apt-get install -y git\n\nRUN pip install --no-cache-dir -r requirements.txt\n\nRUN squirrels deps\n\nEXPOSE 4465\nCMD ["squirrels", "run", "--host", "0.0.0.0", "--port", "4465"]\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You will want docker to ignore a few files and folders by adding them to ",(0,r.jsx)(n.code,{children:".dockerignore"})," file. The contents should looks similar to your ",(0,r.jsx)(n.code,{children:".gitignore"}),' file except you also want to include the ".git" directory.']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"**/__pycache__/\n.venv/\n.git/\n\n# squirrels files to ignore\nenv.yml\ntarget/\nsqrl_packages/\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In addition to the docker image, a docker volume is also needed store the ",(0,r.jsx)(n.a,{href:"../environcfg",children:"env.yml"})," file. If your ",(0,r.jsx)(n.a,{href:"../environcfg",children:"env.yml"})," is in current directory, you can use the following ",(0,r.jsx)(n.code,{children:"compose.yml"})," file to create a docker container with the volume by running ",(0,r.jsx)(n.code,{children:"docker compose up"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:"services:\n  squirrels:\n    build: /path/to/Dockerfile\n    ports:\n      - 8080:4465\n    volumes:\n      - ./env.yml:/app/env.yml\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>c});var t=o(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);