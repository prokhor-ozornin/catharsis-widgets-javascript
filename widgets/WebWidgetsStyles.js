var WebWidgetsStyles = function()
{
};

WebWidgetsStyles.prototype = new HtmlHelpers();

WebWidgetsStyles.prototype.toString = function()
{
  return "Web Widgets Styles";
};

WebWidgetsStyles.prototype.link = function(url)
{
  var link = window.document.createElement("link");
  link.href = url;
  link.rel = "stylesheet";
  link.type = "text/css";
  return link;
};

WebWidgetsStyles.prototype.inline = function(code)
{
  var style = window.document.createElement("style");
  style.type = "text/css";
  style.innerHTML = code;
  return style;
};

var WebWidgetsStyles = new WebWidgetsStyles();