// Use `doc` instead of `d` to avoid conflicts with tabi scripts.
var doc=document,w="https://tally.so/widgets/embed.js",v=function(){"undefined"!=typeof Tally?Tally.loadEmbeds():doc.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((function(e){e.src=e.dataset.tallySrc}))};if("undefined"!=typeof Tally)v();else if(doc.querySelector('script[src="'+w+'"]')==null){var s=doc.createElement("script");s.src=w,s.onload=v,s.onerror=v,doc.body.appendChild(s);}
