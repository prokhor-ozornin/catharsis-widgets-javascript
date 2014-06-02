(function(factory)
{
  var FacebookFollowButtonWidget = function()
  {
  };

  FacebookFollowButtonWidget.prototype = new HtmlWidget();

  FacebookFollowButtonWidget.prototype.colorScheme = function(colorScheme)
  {
    this._colorScheme = colorScheme;
    return this;
  };

  FacebookFollowButtonWidget.prototype.getColorScheme = function()
  {
    return this._colorScheme;
  };

  FacebookFollowButtonWidget.prototype.faces = function(show)
  {
    this._faces = show;
    return this;
  };

  FacebookFollowButtonWidget.prototype.getFaces = function()
  {
    return this._faces;
  };

  FacebookFollowButtonWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  FacebookFollowButtonWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  FacebookFollowButtonWidget.prototype.kidsMode = function(enabled)
  {
    this._kidsMode = enabled;
    return this;
  };

  FacebookFollowButtonWidget.prototype.getKidsMode = function()
  {
    return this._kidsMode;
  };

  FacebookFollowButtonWidget.prototype.layout = function(layout)
  {
    this._layout = layout;
    return this;
  };

  FacebookFollowButtonWidget.prototype.getLayout = function()
  {
    return this._layout;
  };

  FacebookFollowButtonWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  FacebookFollowButtonWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  FacebookFollowButtonWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  FacebookFollowButtonWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  FacebookFollowButtonWidget.prototype.toString = function()
  {
    if (!this.getUrl())
    {
      return "";
    }

    return this.htmlTag("div",
    {
      "class" : "fb-follow",
      "data-colorscheme" : this.getColorScheme(),
      "data-height" : this.getHeight(),
      "data-href" : this.getUrl(),
      "data-kid-directed-site" : this.getKidsMode(),
      "data-layout" : this.getLayout(),
      "data-show-faces" : this.getFaces(),
      "data-width" : this.getWidth()
    });
  };

  factory.followButton = function()
  {
    return new FacebookFollowButtonWidget();
  };
}(Widgets.facebook()));