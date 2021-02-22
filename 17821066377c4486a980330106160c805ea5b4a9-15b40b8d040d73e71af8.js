(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{0:function(e,t){},1:function(e,t){},2:function(e,t){},D2bS:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return h}));var n=r("cMbP");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function o(e,t){switch(t){case"number":return+e;case"string":return e;case"boolean":return"true"===e.toLowerCase()||0===e.length}throw new Error("Unknown primitive type "+t+" with - "+e)}var s=!1;try{s="undefined"!=typeof localStorage}catch(m){}var a=void 0!==e,l=s&&localStorage.getItem("DEBUG")||a&&{}.DEBUG?console.log:function(e){return""};function u(e){for(var t=[],r=[],n=0,i=0,o=0,s=function(s){var u=e[s],c=function(){i=n,n+=u.length+1},f=function(t){l("Removing line "+s+" for "+t),o++,e.splice(s,1),s--};if(u.includes("//")){var d=/^\s*\/\/\s*\^+( .+)?$/.exec(u),p=/^\s*\/\/\s*\^\?\s*$/.exec(u),g=/^\s*\/\/ prettier-ignore$/.exec(u),h=/^\s*\/\/\s*\^\|$/.exec(u);if(null!==p){var v=u.indexOf("^");r.push({kind:"query",offset:v,text:void 0,docs:void 0,line:s+o-1}),f("having a query")}else if(null!==d){var m=u.indexOf("^"),b=u.lastIndexOf("^")-m+1,y=i+m,w=d[1]?d[1].trim():"";t.push({kind:"highlight",position:y,length:b,description:w,line:s}),f("having a highlight")}else if(null!==g)f("being a prettier ignore");else if(null!==h){var x=u.indexOf("^");r.push({kind:"completion",offset:x,text:void 0,docs:void 0,line:s+o-1}),f("having a completion query")}else c()}else c();a=s},a=0;a<e.length;a++)s(a);return{highlights:t,queries:r}}function c(e,t,r){var n=r.get(t.toLowerCase());if(l("Get "+e+" mapped option: "+t+" => "+n),void 0===n){var i=Array.from(r.keys());throw new Error("Invalid value "+t+" for "+e+". Allowed values: "+i.join(","))}return n}function f(e,t,r,n){l("Setting "+e+" to "+t);var i=function(){if(a){if(u>=s.length)return"break";f=s[u++]}else{if((u=s.next()).done)return"break";f=u.value}var n=f;if(n.name.toLowerCase()===e.toLowerCase()){switch(n.type){case"number":case"string":case"boolean":r[n.name]=o(t,n.type);break;case"list":var i=n.element.type,l=t.split(",");r[n.name]="string"==typeof i?l.map((function(e){return o(e,i)})):l.map((function(e){return c(n.name,e,i)}));break;default:var d=n.type;r[n.name]=c(n.name,t,d)}return{v:void 0}}},s=n.optionDeclarations,a=Array.isArray(s),u=0;for(s=a?s:s[Symbol.iterator]();;){var f,d=i();if("break"===d)break;if("object"==typeof d)return d.v}throw new Error("No compiler setting named '"+e+"' exists!")}var d=/^\/\/\s?@(\w+)$/,p=/^\/\/\s?@(\w+):\s?(.+)$/;var g={errors:[],noErrors:!1,showEmit:!1,showEmittedFile:void 0,noStaticSemanticInfo:!1,emit:!1,noErrorValidation:!1};function h(t,o,s){var a,c,h;void 0===s&&(s={});var m=null!=(a=s.tsModule)?a:r(1),b=null!=(c=s.lzstringModule)?c:r(2),y=t,w=function(e){switch(e){case"js":case"javascript":return"js";case"ts":case"typescript":return"ts";case"tsx":return"tsx";case"jsn":return"json"}throw new Error("Cannot handle the file extension:"+e)}(o),x="index."+w;l("\n\nLooking at code: \n```"+w+"\n"+t+"\n```\n");var E=i({strict:!0,target:m.ScriptTarget.ES2016,allowJs:!0},null!=(h=s.defaultCompilerOptions)?h:{});!function(e){if(e.includes("// @errors "))throw new Error("You have '@errors ' - you're missing the colon after errors");if(e.includes("// @filename "))throw new Error("You have '@filename ' - you're missing the colon after filename")}(t);var S=(t=function(e){return e=(e=e.replace(/¨D/g,"$")).replace(/¨T/g,"~")}(t)).split(/\r\n?|\n/g),F=i({},function(e){for(var t=i({},g),r=0;r<e.length;r++){var n=void 0;(n=d.exec(e[r]))?n[1]in t&&(t[n[1]]=!0,l("Setting options."+n[1]+" to true"),e.splice(r,1),r--):(n=p.exec(e[r]))&&n[1]in t&&(t[n[1]]=n[2],l("Setting options."+n[1]+" to "+n[2]),e.splice(r,1),r--)}return"errors"in t&&"string"==typeof t.errors&&(t.errors=t.errors.split(" ").map(Number),l("Setting options.error to ",t.errors)),t}(S),s.defaultOptions),k=function(e,t,r){for(var n=i({},t),o=0;o<e.length;){var s=void 0;if(s=d.exec(e[o]))n[s[1]]=!0,f(s[1],"true",n,r);else{if(!(s=p.exec(e[o]))){o++;continue}if("filename"===s[1]){o++;continue}f(s[1],s[2],n,r)}e.splice(o,1)}return n}(S,E,m);F.showEmittedFile||(F.showEmittedFile=k.jsx&&k.jsx===m.JsxEmit.Preserve?"index.jsx":"index.js");var j=function(){var t=r("oNVP");return(s.vfsRoot||e.cwd()).split(t.sep).join(t.posix.sep)},P=!!s.fsMap,C=P&&s.fsMap?s.fsMap:new Map,D=P?Object(n.c)(C):Object(n.b)(C,j(),m),A=P?"/":j()+"/",O=Object(n.d)(D,[],m,k,s.customTransformers),N=O.languageService;t=S.join("\n");var T=[],L=[],M=[],I=v(t,x,A),q=["js","jsx","ts","tsx"],V=I.map((function(e){return e[0]})),U=function(){var e,t;if($){if(J>=W.length)return"break";R=W[J++]}else{if((J=W.next()).done)return"break";R=J.value}var r=R,n=r[0],i=r[1],o=n.split(".").pop()||"",s=k.resolveJsonModule&&"json"===o;if(!q.includes(o)&&!s)return"continue";var a=i.join("\n");O.createFile(n,a);var l=u(i);(e=M).push.apply(e,l.highlights);var c=l.queries.map((function(e,t){var r,i,o=O.getSourceFile(n),s=m.getPositionOfLineAndCharacter(o,e.line,e.offset);switch(e.kind){case"query":var a=N.getQuickInfoAtPosition(n,s),l=N.getDefinitionAtPosition(n,s),u="Could not get LSP result: "+[(r=O.getSourceFile(n).text)[(i=s)-3],r[i-2],r[i-1],">",r[i],"<",r[i+1],r[i+2],r[i+3]].filter(Boolean).join(""),c=void 0;return a&&l&&a.displayParts&&(u=a.displayParts.map((function(e){return e.text})).join(""),c=a.documentation?a.documentation.map((function(e){return e.text})).join("<br/>"):void 0),{kind:"query",text:u,docs:c,line:e.line-t,offset:e.offset,file:n};case"completion":var f=N.getCompletionsAtPosition(n,s-1,{});if(!f&&!F.noErrorValidation)throw new Error("Twoslash: The ^| query at line "+e.line+" in "+n+" did not return any completions");var d=function(e,t){e=String(e),t=Number(t)>>>0;var r=e.slice(0,t+1).search(/\S+$/),n=e.slice(t).search(/\s/);return n<0?{word:e.slice(r),startPos:r}:{word:e.slice(r,n+t),startPos:r}}(o.text,s-1),p=o.text.slice(d.startPos,s).split(".").pop()||"";return{kind:"completions",completions:(null==f?void 0:f.entries)||[],completionPrefix:p,line:e.line-t,offset:e.offset,file:n}}}));(t=T).push.apply(t,c);var f=i.join("\n");O.updateFile(n,f)},W=I,$=Array.isArray(W),J=0;for(W=$?W:W[Symbol.iterator]();;){var R,B=U();if("break"===B)break}var G=t.split(/\r\n?|\n/g);u(G),t=G.join("\n"),F.emit&&V.forEach((function(e){var t=e.split(".").pop()||"";q.includes(t)&&N.getEmitOutput(e).outputFiles.forEach((function(e){D.writeFile(e.name,e.text)}))}));var H=[],z=[];V.forEach((function(e){var r=e.split(".").pop()||"";if(q.includes(r)){F.noErrors||(H.push.apply(H,N.getSemanticDiagnostics(e)),H.push.apply(H,N.getSyntacticDiagnostics(e)));var n=O.sys.readFile(e),i=O.getSourceFile(e);if(!i)throw new Error("No sourcefile found for "+e+" in twoslash");if(!F.showEmit){var o=-1==t.indexOf(n)?0:t.indexOf(n),s=t.slice(0,o).split("\n").length-1,a=F.noStaticSemanticInfo?[]:function(e,t){var r=[];return function n(i){e.forEachChild(i,(function(i){if(e.isIdentifier(i)){var o=i.getStart(t,!1);r.push({span:e.createTextSpan(o,i.end-o),text:i.getText(t)})}n(i)}))}(t),r}(m,i),l=Array.isArray(a),u=0;for(a=l?a:a[Symbol.iterator]();;){var c;if(l){if(u>=a.length)break;c=a[u++]}else{if((u=a.next()).done)break;c=u.value}var f=c,d=f.span,p=N.getQuickInfoAtPosition(e,d.start);if(p&&p.displayParts){var g=p.displayParts.map((function(e){return e.text})).join(""),h=f.text,v=p.documentation?p.documentation.map((function(e){return e.text})).join("\n"):void 0,b=d.start+o,y=m.createSourceFile("_.ts",t,m.ScriptTarget.ES2015),w=m.getLineAndCharacterOfPosition(y,b),x=w.line,E=w.character;z.push({text:g,docs:v,start:b,length:d.length,line:x,character:E,targetString:h})}}T.filter((function(t){return t.file===e})).forEach((function(e){var t=m.getPositionOfLineAndCharacter(i,e.line,e.offset)+o;switch(e.kind){case"query":L.push({docs:e.docs,kind:"query",start:t+o,length:e.text.length,text:e.text,offset:e.offset,line:e.line+s+1});break;case"completions":L.push({completions:e.completions,kind:"completions",start:t+o,completionsPrefix:e.completionPrefix,length:1,offset:e.offset,line:e.line+s+1})}}))}}}));var Q=H.filter((function(e){return e.file&&V.includes(e.file.fileName)}));!F.noErrorValidation&&Q.length&&function(e,t,r,n){var i=e.filter((function(e){return!t.errors.includes(e.code)})),o=i.map((function(e){return e.code})).join(" ");if(i.length){var s="// @errors: "+e.map((function(e){return e.code})).join(" "),a=t.errors.length?" - the annotation specified "+t.errors:"\n\nExpected:\n"+s,l=i.map((function(e){var t="string"==typeof e.messageText?e.messageText:e.messageText.messageText;return"["+e.code+"] - "+t})).join("\n  ");throw new Error("Errors were thrown in the sample, but not included in an errors tag: "+o+a+"\n\n  "+l+("\n\n## Code\n\n'''"+r+"\n"+n+"\n'''"))}}(Q,F,o,y);var Y=[],K=Q,_=Array.isArray(K),X=0;for(K=_?K:K[Symbol.iterator]();;){var Z;if(_){if(X>=K.length)break;Z=K[X++]}else{if((X=K.next()).done)break;Z=X.value}var ee=Z,te=O.sys.readFile(ee.file.fileName),re=t.indexOf(te),ne=m.flattenDiagnosticMessageText(ee.messageText,"\n").replace(/</g,"&lt;"),ie="err-"+ee.code+"-"+ee.start+"-"+ee.length,oe=m.getLineAndCharacterOfPosition(ee.file,ee.start),se=oe.line,ae=oe.character;Y.push({category:ee.category,code:ee.code,length:ee.length,start:ee.start?ee.start+re:void 0,line:se,character:ae,renderedMessage:ne,id:ie})}if(F.showEmit){var le=F.showEmittedFile||x,ue=A+le.replace(".jsx","").replace(".js","").replace(".d.ts","").replace(".map",""),ce=V.find((function(e){return e===ue+".ts"||e===ue+".tsx"}));if(!ce&&!k.outFile){var fe=V.join(", ");throw new Error("Cannot find the corresponding **source** file for "+le+" (looking for: "+ue+" in the vfs) - in "+fe)}k.outFile&&(ce=V[0]);var de=N.getEmitOutput(ce),pe=de.outputFiles.find((function(e){return e.name===A+F.showEmittedFile||e.name===F.showEmittedFile}));if(!pe){var ge=de.outputFiles.map((function(e){return e.name})).join(", ");throw new Error("Cannot find the file "+F.showEmittedFile+" (looking for: "+(A+F.showEmittedFile)+" in the vfs) - in "+ge)}t=pe.text,o=pe.name.split(".").pop(),M=[],T=[],z=[]}var he="https://www.typescriptlang.org/play/#code/"+b.compressToEncodedURIComponent(y);if(t.includes("// ---cut---\n")){var ve=t.indexOf("// ---cut---\n")+"// ---cut---\n".length,me=t.substr(0,ve).split("\n").length-1;t=t.split("// ---cut---\n").pop(),z.forEach((function(e){e.start-=ve,e.line-=me})),z=z.filter((function(e){return e.start>-1})),Y.forEach((function(e){e.start&&(e.start-=ve),e.line&&(e.line-=me)})),Y=Y.filter((function(e){return e.start&&e.start>-1})),M.forEach((function(e){e.position-=ve,e.line-=me})),M=M.filter((function(e){return e.position>-1})),L.forEach((function(e){return e.line-=me})),L=L.filter((function(e){return e.line>-1}))}return{code:t,extension:o,highlights:M,queries:L,staticQuickInfos:z,errors:Y,playgroundURL:he}}var v=function(e,t,r){var n=e.split(/\r\n?|\n/g),i=e.includes("@filename: "+t)?"global.ts":t,o=[],s=[],a=n,l=Array.isArray(a),u=0;for(a=l?a:a[Symbol.iterator]();;){var c;if(l){if(u>=a.length)break;c=a[u++]}else{if((u=a.next()).done)break;c=u.value}var f=c;f.includes("// @filename: ")?(s.push([r+i,o]),i=f.split("// @filename: ")[1].trim(),o=[]):o.push(f)}return s.push([r+i,o]),s.filter((function(e){return e[1].length>0&&(e[1].length>1||""!==e[1][0])}))}}).call(this,r("F63i"))},cMbP:function(e,t,r){"use strict";(function(e){function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return h})),r.d(t,"c",(function(){return g})),r.d(t,"d",(function(){return a}));var i=!1;try{i="undefined"!=typeof localStorage}catch(m){}var o=void 0!==e,s=i&&localStorage.getItem("DEBUG")||o&&{}.DEBUG?console.log:function(e){return""};function a(e,t,r,i,o){void 0===i&&(i={});var s=n({},d(r),i),a=function(e,t,r,i,o){var s=[].concat(t),a=v(e,r,i),l=a.compilerHost,u=a.updateFile,c=new Map,f=0;return{languageServiceHost:n({},l,{getProjectVersion:function(){return f.toString()},getCompilationSettings:function(){return r},getCustomTransformers:function(){return o},getScriptFileNames:function(){return s},getScriptSnapshot:function(t){var r=e.readFile(t);if(r)return i.ScriptSnapshot.fromString(r)},getScriptVersion:function(e){return c.get(e)||"0"},writeFile:e.writeFile}),updateFile:function(e){f++,c.set(e.fileName,f.toString()),s.includes(e.fileName)||s.push(e.fileName),u(e)}}}(e,t,s,r,o),l=a.languageServiceHost,u=a.updateFile,c=r.createLanguageService(l),f=c.getCompilerOptionsDiagnostics();if(f.length){var p=v(e,i,r);throw new Error(r.formatDiagnostics(f,p.compilerHost))}return{name:"vfs",sys:e,languageService:c,getSourceFile:function(e){var t;return null==(t=c.getProgram())?void 0:t.getSourceFile(e)},createFile:function(e,t){u(r.createSourceFile(e,t,s.target,!1))},updateFile:function(e,t,n){var i=c.getProgram().getSourceFile(e);if(!i)throw new Error("Did not find a source file for "+e);var o=i.text,s=null!=n?n:r.createTextSpan(0,o.length),a=o.slice(0,s.start)+t+o.slice(s.start+s.length),l=r.updateSourceFile(i,a,{span:s,newLength:t.length});u(l)}}}var l=function(e,t){var r,n=e.target||t.ScriptTarget.ES5,i=e.lib||[],o=["lib.d.ts","lib.dom.d.ts","lib.dom.iterable.d.ts","lib.webworker.d.ts","lib.webworker.importscripts.d.ts","lib.scripthost.d.ts","lib.es5.d.ts","lib.es6.d.ts","lib.es2015.collection.d.ts","lib.es2015.core.d.ts","lib.es2015.d.ts","lib.es2015.generator.d.ts","lib.es2015.iterable.d.ts","lib.es2015.promise.d.ts","lib.es2015.proxy.d.ts","lib.es2015.reflect.d.ts","lib.es2015.symbol.d.ts","lib.es2015.symbol.wellknown.d.ts","lib.es2016.array.include.d.ts","lib.es2016.d.ts","lib.es2016.full.d.ts","lib.es2017.d.ts","lib.es2017.full.d.ts","lib.es2017.intl.d.ts","lib.es2017.object.d.ts","lib.es2017.sharedmemory.d.ts","lib.es2017.string.d.ts","lib.es2017.typedarrays.d.ts","lib.es2018.asyncgenerator.d.ts","lib.es2018.asynciterable.d.ts","lib.es2018.d.ts","lib.es2018.full.d.ts","lib.es2018.intl.d.ts","lib.es2018.promise.d.ts","lib.es2018.regexp.d.ts","lib.es2019.array.d.ts","lib.es2019.d.ts","lib.es2019.full.d.ts","lib.es2019.object.d.ts","lib.es2019.string.d.ts","lib.es2019.symbol.d.ts","lib.es2020.d.ts","lib.es2020.full.d.ts","lib.es2020.string.d.ts","lib.es2020.symbol.wellknown.d.ts","lib.es2020.bigint.d.ts","lib.es2020.promise.d.ts","lib.es2020.sharedmemory.d.ts","lib.es2020.intl.d.ts","lib.esnext.array.d.ts","lib.esnext.asynciterable.d.ts","lib.esnext.bigint.d.ts","lib.esnext.d.ts","lib.esnext.full.d.ts","lib.esnext.intl.d.ts","lib.esnext.symbol.d.ts"],s=t.ScriptTarget[n],a=o.filter((function(e){return e.startsWith("lib."+s.toLowerCase())})),l=o.indexOf(a.pop()),u=i.map((function(e){var t=o.filter((function(t){return t.startsWith("lib."+e.toLowerCase())}));return 0===t.length?0:o.indexOf(t.pop())})),c=((r=u)&&r.length?r.reduce((function(e,t){return t>e?t:e})):void 0)||0,f=Math.max(l,c);return o.slice(0,f+1)},u=function(e,t,r,n,i,o,s){var a=o||fetch,u=s||localStorage,c=new Map,f=l(e,n),d="https://typescript.azureedge.net/cdn/"+t+"/typescript/lib/";return(r?function(){return Object.keys(localStorage).forEach((function(e){e.startsWith("ts-lib-")&&!e.startsWith("ts-lib-"+t)&&u.removeItem(e)})),Promise.all(f.map((function(e){var r,n="ts-lib-"+t+"-"+e,o=u.getItem(n);return o?Promise.resolve((r=o,i?i.decompressFromUTF16(r):r)):a(d+e).then((function(e){return e.text()})).then((function(e){var t;return u.setItem(n,(t=e,i?i.compressToUTF16(t):t)),e}))}))).then((function(e){e.forEach((function(e,t){var r="/"+f[t];c.set(r,e)}))}))}:function(){return Promise.all(f.map((function(e){return a(d+e).then((function(e){return e.text()}))}))).then((function(e){e.forEach((function(e,t){return c.set("/"+f[t],e)}))}))})().then((function(){return c}))};function c(e){throw new Error("Method '"+e+"' is not implemented.")}function f(e,t){return function(){for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];var o=t.apply(void 0,n),a="string"==typeof o?o.slice(0,80)+"...":o;return s.apply(void 0,["> "+e].concat(n)),s("< "+a),o}}var d=function(e){return n({},e.getDefaultCompilerOptions(),{jsx:e.JsxEmit.React,strict:!0,esModuleInterop:!0,module:e.ModuleKind.ESNext,suppressOutputPathCheck:!0,skipLibCheck:!0,skipDefaultLibCheck:!0,moduleResolution:e.ModuleResolutionKind.NodeJs})},p=function(e){return e.replace("/","/lib.").toLowerCase()};function g(e){return{args:[],createDirectory:function(){return c("createDirectory")},directoryExists:f("directoryExists",(function(t){return Array.from(e.keys()).some((function(e){return e.startsWith(t)}))})),exit:function(){return c("exit")},fileExists:f("fileExists",(function(t){return e.has(t)||e.has(p(t))})),getCurrentDirectory:function(){return"/"},getDirectories:function(){return[]},getExecutingFilePath:function(){return c("getExecutingFilePath")},readDirectory:f("readDirectory",(function(t){return"/"===t?Array.from(e.keys()):[]})),readFile:f("readFile",(function(t){return e.get(t)||e.get(p(t))})),resolvePath:function(e){return e},newLine:"\n",useCaseSensitiveFileNames:!0,write:function(){return c("write")},writeFile:function(t,r){e.set(t,r)}}}function h(e,t,n){var i=t+"/vfs",o=r("oNVP"),s=n.sys,a=o.dirname(0);return{name:"fs-vfs",root:i,args:[],createDirectory:function(){return c("createDirectory")},directoryExists:f("directoryExists",(function(t){return Array.from(e.keys()).some((function(e){return e.startsWith(t)}))||s.directoryExists(t)})),exit:s.exit,fileExists:f("fileExists",(function(t){if(e.has(t))return!0;if(t.includes("tsconfig.json")||t.includes("tsconfig.json"))return!1;if(t.startsWith("/lib")){var r=a+"/"+t.replace("/","");return s.fileExists(r)}return s.fileExists(t)})),getCurrentDirectory:function(){return i},getDirectories:s.getDirectories,getExecutingFilePath:function(){return c("getExecutingFilePath")},readDirectory:f("readDirectory",(function(){return"/"===(arguments.length<=0?void 0:arguments[0])?Array.from(e.keys()):s.readDirectory.apply(s,arguments)})),readFile:f("readFile",(function(t){if(e.has(t))return e.get(t);if(t.startsWith("/lib")){var r=a+"/"+t.replace("/",""),n=s.readFile(r);if(!n){var i=s.readDirectory(a);throw new Error("TSVFS: A request was made for "+r+" but there wasn't a file found in the file map. You likely have a mismatch in the compiler options for the CDN download vs the compiler program. Existing Libs: "+i+".")}return n}return s.readFile(t)})),resolvePath:function(t){return e.has(t)?t:s.resolvePath(t)},newLine:"\n",useCaseSensitiveFileNames:!0,write:function(){return c("write")},writeFile:function(t,r){e.set(t,r)}}}function v(e,t,r){var i=new Map;return{compilerHost:n({},e,{getCanonicalFileName:function(e){return e},getDefaultLibFileName:function(){return"/"+r.getDefaultLibFileName(t)},getDirectories:function(){return[]},getNewLine:function(){return e.newLine},getSourceFile:function(n){return i.get(n)||(o=r.createSourceFile(n,e.readFile(n),t.target||d(r).target,!1),i.set(o.fileName,o),o);var o},useCaseSensitiveFileNames:function(){return e.useCaseSensitiveFileNames}}),updateFile:function(t){var r=i.has(t.fileName);return e.writeFile(t.fileName,t.text),i.set(t.fileName,t),r}}}}).call(this,r("F63i"))},oNVP:function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var i=e[n];"."===i?e.splice(n,1):".."===i?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",i=!1,o=arguments.length-1;o>=-1&&!i;o--){var s=o>=0?arguments[o]:e.cwd();if("string"!=typeof s)throw new TypeError("Arguments to path.resolve must be strings");s&&(t=s+"/"+t,i="/"===s.charAt(0))}return(i?"/":"")+(t=r(n(t.split("/"),(function(e){return!!e})),!i).join("/"))||"."},t.normalize=function(e){var o=t.isAbsolute(e),s="/"===i(e,-1);return(e=r(n(e.split("/"),(function(e){return!!e})),!o).join("/"))||o||(e="."),e&&s&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var i=n(e.split("/")),o=n(r.split("/")),s=Math.min(i.length,o.length),a=s,l=0;l<s;l++)if(i[l]!==o[l]){a=l;break}var u=[];for(l=a;l<i.length;l++)u.push("..");return(u=u.concat(o.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,i=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!i){n=o;break}}else i=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function(e){"string"!=typeof e&&(e+="");var t,r=0,n=-1,i=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!i){r=t+1;break}}else-1===n&&(i=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,r=0,n=-1,i=!0,o=0,s=e.length-1;s>=0;--s){var a=e.charCodeAt(s);if(47!==a)-1===n&&(i=!1,n=s+1),46===a?-1===t?t=s:1!==o&&(o=1):-1!==t&&(o=-1);else if(!i){r=s+1;break}}return-1===t||-1===n||0===o||1===o&&t===n-1&&t===r+1?"":e.slice(t,n)};var i="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r("F63i"))},rwV4:function(e,t){t.debounce=function(e,t,r){var n,i;void 0===t&&(t=50),void 0===r&&(r={});var o=null!=(n=r.isImmediate)&&n,s=r.maxWait,a=Date.now();function l(){if(void 0!==s){var e=Date.now()-a;if(e+t>=s)return s-e}return t}var u=function(){var t=[].slice.call(arguments),r=this,n=function(){i=void 0,a=Date.now(),o||e.apply(r,t)},s=o&&void 0===i;void 0!==i&&clearTimeout(i),i=setTimeout(n,l()),s&&e.apply(r,t)};return u.cancel=function(){void 0!==i&&clearTimeout(i)},u}}}]);
//# sourceMappingURL=17821066377c4486a980330106160c805ea5b4a9-15b40b8d040d73e71af8.js.map