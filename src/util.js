export const getStyle = (oElm, strCssRule) => {
  let strValue = ""

  if ( document.defaultView && document.defaultView.getComputedStyle ) {
    strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule)
  }
  else if (oElm.currentStyle ) {
    strCssRule = strCssRule.replace(/-(\w)/g, function (strMatch, p1) {
      return p1.toUpperCase()
    })
    strValue = oElm.currentStyle[strCssRule]
  }
  return strValue
}