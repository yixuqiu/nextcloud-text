(window.textWebpackJsonp=window.textWebpackJsonp||[]).push([[81],{456:function(e,n){e.exports=function(e){var n={className:"number",relevance:0,variants:[{begin:/([\+\-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]},a=e.COMMENT();a.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];var s={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)}/}]},i={className:"literal",begin:/\bon|off|true|false|yes|no\b/},t={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]};return{aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[a,{className:"section",begin:/\[+/,end:/\]+/},{begin:/^[a-z0-9\[\]_\.-]+(?=\s*=\s*)/,className:"attr",starts:{end:/$/,contains:[a,{begin:/\[/,end:/\]/,contains:[a,i,s,t,n,"self"],relevance:0},i,s,t,n]}}]}}}}]);
//# sourceMappingURL=ini.js.map?v=59ffe1dc82108c81a678