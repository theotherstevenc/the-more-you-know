function keywordReveal() {
  let code =
  `
let targets = [
  {
    "find": /-gmail/gi,
    "replace": \`u + .body\`
  },
  {
    "find": /-mobilegmail/gi,
    "replace": \`@media screen and (max-width: 480px)\`
  }
]

let css = document.head.innerHTML
  for(let target of targets) {
    css = css.replace(target.find, target.replace)
  }
document.head.innerHTML = css

  `;

  let values = document.getElementsByClassName(`keyword-reveal`)
    for(let value of values) {
      value.innerHTML = code;
    }

  }
keywordReveal()













function superList() {
  let code =
  `
// ##########################################
// ### email media css ####################
// ##########################################
let medias = [
  {
    "find": /-webkit/gi,
    "replace": \`@media screen and (-webkit-device-pixel-ratio)\`
  },
  {
    "find": /-max600/gi,
    "replace": \`@media screen and (max-width: 600px)\`
  },
  {
    "find": /-dark/gi,
    "replace": \`@media (prefers-color-scheme: dark)\`
  },
  {
    "find": /-iphonex/gi,
    "replace": \`@media screen and (device-width : 375px) and (device-height : 812px) and (-webkit-device-pixel-ratio : 3)\`
  }
]

let query = document.head.innerHTML
  for(let media of medias) {
    query = query.replace(media.find, media.replace)
  }
document.head.innerHTML = query

// ##########################################
// ### email clients css ####################
// ##########################################

let targets = [
  {
    "find": /-android/gi,
    "replace": \`@media screen and (pointer)\`
  },
  {
    "find": /-apple10/gi,
    "replace": \`.Singleton\`
  },
  {
    "find": /-apple124/gi,
    "replace": \`.apple-mail-implicit-dark-support\`
  },
  {
    "find": /-gmail/gi,
    "replace": \`u + .body\`
  },
  {
    "find": /-androidgmail/gi,
    "replace": \`div > u + .body\`
  },
  {
    "find": /-mobilegmail/gi,
    "replace": \`@media screen and (max-width: 480px)\`
  },
  {
    "find": /-iOS10/gi,
    "replace": \`@supports (-webkit-overflow-scrolling:touch) and (color:#ffff)\`
  },
  {
    "find": /-yahoo/gi,
    "replace": \`@media screen yahoo\`
  },
  {
    "find": /-weboutlook/gi,
    "replace": \`[class="x_outlook"]\`
  },
  {
    "find": /-appsoutlook/gi,
    "replace": \`body[data-outlook-cycle]\`
  },
  {
    "find": /-iOSoutlook/gi,
    "replace": \`[data-outlook-cycle*="INSERT_STYLES"]\`
  },
  {
    "find": /-outlookmac/gi,
    "replace":\`_:-webkit-full-screen, _::-webkit-full-page-media, _:future,:root .body:not(.Singleton)\`
  }
];

let css = document.head.innerHTML
  for(let target of targets) {
    css = css.replace(target.find, target.replace)
  }
document.head.innerHTML = css

// ##########################################
// ### email clients html ###################
// ##########################################

let microsofts = [
  {
    "find": /<!--msoALL/gi,
    "replace": \`<!--[if true]>\`
  },
  {
    "find": /<!--mso2000/gi,
    "replace": \`<!--[if mso 9]>\`
  },
  {
    "find": /<!--mso2002/gi,
    "replace": \`<!--[if mso 10]>\`
  },
  {
    "find": /<!--mso2003/gi,
    "replace": \`<!--[if mso 11]>\`
  },
  {
    "find": /<!--mso2007/gi,
    "replace": \`<!--[if mso 12]>\`
  },
  {
    "find": /<!--mso2010/gi,
    "replace": \`<!--[if mso 14]>\`
  },
  {
    "find": /<!--mso2013/gi,
    "replace": \`<!--[if mso 15]>\`
  },
  {
    "find": /<!--mso2016/gi,
    "replace": \`<!--[if mso 16]>\`
  },
  {
    "find": /mso-->/gi,
    "replace": \`<![endif]-->\`
  }
];

let mso = document.body.innerHTML
  for(let microsoft of microsofts) {
    mso = mso.replace(microsoft.find, microsoft.replace)
  }
document.body.innerHTML = mso

  `;

  let values = document.getElementsByClassName(`super-list`)
    for(let value of values) {
      value.innerHTML = code;
    }

  }
superList()










function popuphtml() {
  let code =
  `
&lt;html&gt;
  &lt;head&gt;
    &lt;link rel=&quot;stylesheet&quot; href=&quot;style.css&quot;&gt;
  &lt;/head&gt;
&lt;body&gt;

  &lt;div class=&quot;container&quot;&gt;
    &lt;button id=&quot;gmail&quot;&gt;Email Client Preview&lt;/button&gt;
  &lt;/div&gt;

  &lt;script src=&quot;popup.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;

  `;

  let values = document.getElementsByClassName(`popup-html-ex`)
    for(let value of values) {
      value.innerHTML = code;
    }

  }
popuphtml()
















function varsnippet() {
  let code =
  `
let str = \`abc 12sss3\`;
//string

let num = 100
//integer

let x = true;
//boolean

let y = null;
//empty

let z
//undefined

  `;

  let values = document.getElementsByClassName(`var-snippet`)
    for(let value of values) {
      value.innerHTML = code;
    }

  }
varsnippet()







function manifestsnippet() {
  let code =
  `
{
  "manifest_version":2,
  "name":"Gmail Previewer",
  "version":"1.0",
  "content_scripts":[
    {
      "matches":[
        "&lt;all_urls&gt;"
      ],
      "js": ["content.js"]
    }
  ],
  "permissions":["tabs"],
  "browser_action": {
    "default_icon": "icon.png",
    "default_popup": "popup.html",
    "default_title": "Basic Gmail Preview"
  }
}
  `;

  let values = document.getElementsByClassName(`manifest-snippet`)
    for(let value of values) {
      value.innerHTML = code;
    }

  }
manifestsnippet()










function popupjs() {
  let code =
  `
var params = {
  active: true,
  currentWindow: true
}

let button = document.getElementById(\`gmail\`)

button.addEventListener(\`click\`, function() {
  paintPreview(\`gmail\`);
});

function paintPreview(preview) {
  chrome.tabs.query(params, gotTab);
    function gotTab(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, preview)
    }
}
  `;

  let values = document.getElementsByClassName(`popupjs`)
    for(let value of values) {
      value.innerHTML = code;
    }

  }
popupjs()

















function contentjs() {
  let code =`
chrome.runtime.onMessage.addListener(gotMessage);

  function gotMessage(message, sender, sendResponse) {

    let finders = [
      {
        "find": /u\+ /gi,
        "replace":\`\`
      },
      {
        "find": /u \+ /gi,
        "replace":\`\`
      }
    ];

    let markup = document.querySelector(\`html[lang]\`).innerHTML;
      for(let finder of finders){
        markup = markup.replace(finder.find, finder.replace);
      }

    document.querySelector(\`html[lang]\`).innerHTML = markup;
    document.querySelector(\`style[advanced]\`).remove();

    let values = document.getElementsByTagName(\`input\`);
      for(let value of values) {
        value.checked = false;
      }

  }







  `;

  let values = document.getElementsByClassName(`contentjs`)
    for(let value of values) {
      value.innerHTML = code;
    }

  }
contentjs()






















function forofjs() {
  let code =`
let finders = [
  {
    find:\`omw\`,
    replace:\`on my way\`
  },
  {
    find:\`lol\`,
    replace:\`laughing out loud\`
  }
]

for(let foo of finders) {
  console.log(foo.find)
}
// omw
// lol

  `;

  let values = document.getElementsByClassName(`forofjs`)
    for(let value of values) {
      value.innerHTML = code;
    }

  }
forofjs()
