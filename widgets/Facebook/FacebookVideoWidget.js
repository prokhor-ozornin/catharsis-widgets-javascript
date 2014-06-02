(function(factory)
{
  var FacebookVideoWidget = function()
  {
  };

  FacebookVideoWidget.prototype = new HtmlWidget();

  FacebookVideoWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  FacebookVideoWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  FacebookVideoWidget.prototype.id = function(id)
  {
    this._id = id;
    return this;
  };

  FacebookVideoWidget.prototype.getId = function()
  {
    return this._id;
  };

  FacebookVideoWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  FacebookVideoWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  FacebookVideoWidget.prototype.toString = function()
  {
    if (!this.getId() || !this.getWidth() || !this.getHeight())
    {
      return "";
    }

    return this.htmlTag("iframe",
    {
      "allowfullscreen" : true,
      "frameborder" : 0,
      "height" : this.getHeight(),
      "mozallowfullscreen" : true,
      "src" : "http://www.facebook.com/video/embed?video_id=" + this.getId(),
      "webkitallowfullscreen" : true,
      "width" : this.getWidth()
    });
  };

  factory.video = function()
  {
    return new FacebookVideoWidget();
  };
}(Widgets.facebook()));