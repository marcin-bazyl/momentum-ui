(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{680:function(module,exports){module.exports=function ebnf(hljs){const commentMode=hljs.COMMENT(/\(\*/,/\*\)/);return{name:"Extended Backus-Naur Form",illegal:/\S/,contains:[commentMode,{className:"attribute",begin:/^[ ]*[a-zA-Z]+([\s_-]+[a-zA-Z]+)*/},{begin:/=/,end:/[.;]/,contains:[commentMode,{className:"meta",begin:/\?.*\?/},{className:"string",variants:[hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,{begin:"`",end:"`"}]}]}]}}}}]);
//# sourceMappingURL=51.f4cf3f3c2a7524613809.bundle.js.map