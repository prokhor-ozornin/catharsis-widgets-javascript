var HtmlWidget = function()
{
};

HtmlWidget.prototype = new HtmlHelpers();

HtmlWidget.prototype.toString = function()
{
  return "Html Widget";
};

HtmlWidget.prototype.render = function()
{
  window.document.write(this);
};

