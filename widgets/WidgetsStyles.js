(function(Widgets)
{
  var WidgetsStyles = function()
  {
  };

  WidgetsStyles.prototype = new HtmlHelpers();

  WidgetsStyles.prototype.toString = function()
  {
    return "Web Widgets Styles";
  };

  WidgetsStyles.prototype.link = function(url)
  {
    var link = window.document.createElement("link");
    link.href = url;
    link.rel = "stylesheet";
    link.type = "text/css";
    return link;
  };

  WidgetsStyles.prototype.inline = function(code)
  {
    var style = window.document.createElement("style");
    style.type = "text/css";
    style.innerHTML = code;
    return style;
  };

  Widgets._styles = new WidgetsStyles();

  Widgets.styles = function()
  {
    return this._styles;
  };
})(Widgets);