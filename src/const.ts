export const REG = {
  singleLineComments: /\/\/.+\n/g,
  multiLineComments: /\/\*[^\1]*\*(\/)/g,
  htmlComments: /\<!\-\-[^\1]*?(\-\-\>)/g,
  jsComments: /\/\/.+\n|\/\*[^\1]*\*(\/)/g,
  quoteBodyReg: /(?<=\=[\s]*)('|").*\1/g,
  scriptBodyReg: /\<script.*?\>[^\1]*?(\<\/script[\s]*\>)/g,
  importReg: /import(\s)+(\{([^\5]*)?(\})|.*)?\1+from\1+)?('|")(.*)?\6;?/g,
}
