(function(factory)
{
  var FacebookLikeBoxWidget = function()
  {
  };

  FacebookLikeBoxWidget.prototype = new HtmlWidget();

  FacebookLikeBoxWidget.prototype.border = function(show)
  {
    this._border = show;
    return this;
  };

  FacebookLikeBoxWidget.prototype.getBorder = function()
  {
    return this._border;
  };

  FacebookLikeBoxWidget.prototype.colorScheme = function(colorScheme)
  {
    this._colorScheme = colorScheme;
    return this;
  };

  FacebookLikeBoxWidget.prototype.getColorScheme = function()
  {
    return this._colorScheme;
  };

  FacebookLikeBoxWidget.prototype.faces = function(show)
  {
    this._faces = show;
    return this;
  };

  FacebookLikeBoxWidget.prototype.getFaces = function()
  {
    return this._faces;
  };

  FacebookLikeBoxWidget.prototype.header = function(show)
  {
    this._header = show;
    return this;
  };

  FacebookLikeBoxWidget.prototype.getHeader = function()
  {
    return this._header;
  };

  FacebookLikeBoxWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  FacebookLikeBoxWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  FacebookLikeBoxWidget.prototype.stream = function(show)
  {
    this._stream = show;
    return this;
  };

  FacebookLikeBoxWidget.prototype.getStream = function()
  {
    return this._stream;
  };

  FacebookLikeBoxWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  FacebookLikeBoxWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  FacebookLikeBoxWidget.prototype.wall = function(include)
  {
    this._wall = include;
    return this;
  };

  FacebookLikeBoxWidget.prototype.getWall = function()
  {
    return this._wall;
  };

  FacebookLikeBoxWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  FacebookLikeBoxWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  FacebookLikeBoxWidget.prototype.toString = function()
  {
    if (!this.getUrl())
    {
      return "";
    }

    return this.htmlTag("div",
    {
      "class" : "fb-like-box",
      "data-colorscheme" : this.getColorScheme(),
      "data-force-wall" : this.getWall(),
      "data-header" : this.getHeader(),
      "data-height" : this.getHeight(),
      "data-href" : this.getUrl(),
      "data-show-border" : this.getBorder(),
      "data-show-faces" : this.getFaces(),
      "data-stream" : this.getStream(),
      "data-width" : this.getWidth()
    });
  };

  factory.LikeBox = function()
  {
    return new FacebookLikeBoxWidget();
  };
}(Widgets.Facebook()));