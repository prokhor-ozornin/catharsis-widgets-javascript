(function(factory)
{
  var SurfingbirdSurfButtonWidget = function()
  {
    this._counter = false;
    this._label = "Surf";
    this._layout = factory.SurfButtonLayout.COMMON;
  };

  SurfingbirdSurfButtonWidget.prototype = new HtmlWidget();

  SurfingbirdSurfButtonWidget.prototype.color = function(color)
  {
    this._color = color;
    return this;
  };

  SurfingbirdSurfButtonWidget.prototype.getColor = function()
  {
    return this._color;
  };

  SurfingbirdSurfButtonWidget.prototype.counter = function(show)
  {
    this._counter = show;
    return this;
  };

  SurfingbirdSurfButtonWidget.prototype.getCounter = function()
  {
    return this._counter;
  };

  SurfingbirdSurfButtonWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  SurfingbirdSurfButtonWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  SurfingbirdSurfButtonWidget.prototype.label = function(label)
  {
    this._label = label;
    return this;
  };

  SurfingbirdSurfButtonWidget.prototype.getLabel = function()
  {
    return this._label;
  };

  SurfingbirdSurfButtonWidget.prototype.layout = function(layout)
  {
    this._layout = layout;
    return this;
  };

  SurfingbirdSurfButtonWidget.prototype.getLayout = function()
  {
    return this._layout;
  };

  SurfingbirdSurfButtonWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  SurfingbirdSurfButtonWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  SurfingbirdSurfButtonWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  SurfingbirdSurfButtonWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  SurfingbirdSurfButtonWidget.prototype.toString = function()
  {
    var config =
    {
      "layout" : this.getLayout() + (this.getCounter() ? "" : "-nocount") + (this.getColor() ? "-" + this.getColor() : ""),
      "url" : this.getUrl(),
      "width" : this.getWidth(),
      "height" : this.getHeight()
    };

    return this.htmlTag("a",
    {
      "class" : "surfinbird__like_button",
      "data-surf-config" : JSON.stringify(config),
      "href" : "http://surfingbird.ru/share",
      "target" : "_blank"
    },
    this.getLabel());
  };

  factory.SurfButton = function()
  {
    return new SurfingbirdSurfButtonWidget();
  };
}
(Widgets.Surfingbird()));