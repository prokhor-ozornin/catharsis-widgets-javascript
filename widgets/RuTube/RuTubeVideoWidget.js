(function(factory)
{
  var RuTubeVideoWidget = function()
  {
  };

  RuTubeVideoWidget.prototype = new HtmlWidget();

  RuTubeVideoWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  RuTubeVideoWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  RuTubeVideoWidget.prototype.id = function(id)
  {
    this._id = id;
    return this;
  };

  RuTubeVideoWidget.prototype.getId = function()
  {
    return this._id;
  };

  RuTubeVideoWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  RuTubeVideoWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  RuTubeVideoWidget.prototype.toString = function()
  {
    if (!this.getId() || !this.getHeight() || !this.getWidth())
    {
      return "";
    }

    return this.htmlTag("iframe",
    {
      "allowfullscreen" : true,
      "frameborder" : 0,
      "height" : this.getHeight(),
      "mozallowfullscreen" : true,
      "scrolling" : "no",
      "src" : "http://rutube.ru/embed/" + this.getId(),
      "webkitallowfullscreen" : true,
      "width" : this.getWidth()
    });
  };

  factory.video = function()
  {
    return new RuTubeVideoWidget();
  };
}
(Widgets.rutube()));