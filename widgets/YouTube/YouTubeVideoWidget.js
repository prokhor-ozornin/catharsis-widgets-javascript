(function(factory)
{
  var YouTubeVideoWidget = function()
  {
    this._privateMode = false;
    this._secureMode = false;
  };

  YouTubeVideoWidget.prototype = new HtmlWidget();

  YouTubeVideoWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  YouTubeVideoWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  YouTubeVideoWidget.prototype.id = function(id)
  {
    this._id = id;
    return this;
  };

  YouTubeVideoWidget.prototype.getId = function()
  {
    return this._id;
  };

  YouTubeVideoWidget.prototype.privateMode = function(enabled)
  {
    this._privateMode = enabled;
    return this;
  };

  YouTubeVideoWidget.prototype.getPrivateMode = function()
  {
    return this._privateMode;
  };

  YouTubeVideoWidget.prototype.secureMode = function(enabled)
  {
    this._secureMode = enabled;
    return this;
  };

  YouTubeVideoWidget.prototype.getSecureMode = function()
  {
    return this._secureMode;
  };

  YouTubeVideoWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  YouTubeVideoWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  YouTubeVideoWidget.prototype.toString = function()
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
      "src" : (this.getSecureMode() ? "https" : "http") + "://" + (this.getPrivateMode() ? "www.youtube-nocookie.com" : "www.youtube.com") + "/embed/" + this.getId(),
      "webkitallowfullscreen" : true,
      "width" : this.getWidth()
    });
  };

  factory.Video = function()
  {
    return new YouTubeVideoWidget();
  };
}
(Widgets.YouTube()));