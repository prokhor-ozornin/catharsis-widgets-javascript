(function(factory)
{
  var VimeoVideoWidget = function()
  {
    this._autoPlay = false;
    this._loop = false;
  };

  VimeoVideoWidget.prototype = new HtmlWidget();

  VimeoVideoWidget.prototype.autoPlay = function(enabled)
  {
    this._autoPlay = enabled;
    return this;
  };

  VimeoVideoWidget.prototype.getAutoPlay = function()
  {
    return this._autoPlay;
  };

  VimeoVideoWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  VimeoVideoWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  VimeoVideoWidget.prototype.id = function(id)
  {
    this._id = id;
    return this;
  };

  VimeoVideoWidget.prototype.getId = function()
  {
    return this._id;
  };

  VimeoVideoWidget.prototype.loop = function(enabled)
  {
    this._loop = enabled;
    return this;
  };

  VimeoVideoWidget.prototype.getLoop = function()
  {
    return this._loop;
  };

  VimeoVideoWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  VimeoVideoWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  VimeoVideoWidget.prototype.toString = function()
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
      "src" : "https://player.vimeo.com/video/" + this.getId() + "?badge=0" + (this.getAutoPlay() ? "&autoplay=1" : "") + (this.getLoop() ? "&loop=1" : ""),
      "webkitallowfullscreen" : true,
      "width" : this.getWidth()
    });
  };

  factory.video = function()
  {
    return new VimeoVideoWidget();
  };
}
(Widgets.vimeo()));