var WebWidgetsScripts = function()
{
};

WebWidgetsScripts.prototype = new HtmlHelpers();

WebWidgetsScripts.prototype.toString = function()
{
  return "Web Widgets Scripts";
};

WebWidgetsScripts.prototype.link = function(url)
{
  var script = window.document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  return script;
};

WebWidgetsScripts.prototype.inline = function(code)
{
  var script = window.document.createElement("script");
  script.type = "text/javascript";
  script.innerHTML = code;
  return script;
};

var WebWidgetsScripts = new WebWidgetsScripts();

WebWidgetsScripts.SCRIPTS_PATH = "scripts";