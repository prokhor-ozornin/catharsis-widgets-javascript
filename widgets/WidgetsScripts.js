(function(Widgets)
{
  var WidgetsScripts = function()
  {
  };

  WidgetsScripts.prototype = new HtmlHelpers();

  WidgetsScripts.prototype.toString = function()
  {
    return "Web Widgets Scripts";
  };

  WidgetsScripts.prototype.link = function(url)
  {
    var script = window.document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    return script;
  };

  WidgetsScripts.prototype.inline = function(code)
  {
    var script = window.document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = code;
    return script;
  };

  Widgets._scripts = new WidgetsScripts();

  Widgets._scripts.SCRIPTS_PATH = "scripts";

  Widgets.scripts = function()
  {
    return this._scripts;
  };
})(Widgets);