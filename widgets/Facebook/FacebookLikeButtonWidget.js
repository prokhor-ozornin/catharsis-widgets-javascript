(function(factory)
{
  var FacebookLikeButtonWidget = function()
  {
  };

  FacebookLikeButtonWidget.prototype = new HtmlWidget();

  FacebookLikeButtonWidget.prototype.colorScheme = function(colorScheme)
  {
    this._colorScheme = colorScheme;
    return this;
  };

  FacebookLikeButtonWidget.prototype.getColorScheme = function()
  {
    return this._colorScheme;
  };

  FacebookLikeButtonWidget.prototype.faces = function(show)
  {
    this._faces = show;
    return this;
  };

  FacebookLikeButtonWidget.prototype.getFaces = function()
  {
    return this._faces;
  };

  FacebookLikeButtonWidget.prototype.kidsMode = function(enabled)
  {
    this._kidsMode = enabled;
    return this;
  };

  FacebookLikeButtonWidget.prototype.getKidsMode = function()
  {
    return this._kidsMode;
  };

  FacebookLikeButtonWidget.prototype.layout = function(layout)
  {
    this._layout = layout;
    return this;
  };

  FacebookLikeButtonWidget.prototype.getLayout = function()
  {
    return this._layout;
  };

  FacebookLikeButtonWidget.prototype.trackLabel = function(label)
  {
    this._trackLabel = label;
    return this;
  };

  FacebookLikeButtonWidget.prototype.getTrackLabel = function()
  {
    return this._trackLabel;
  };

  FacebookLikeButtonWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  FacebookLikeButtonWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  FacebookLikeButtonWidget.prototype.verb = function(verb)
  {
    this._verb = verb;
    return this;
  };

  FacebookLikeButtonWidget.prototype.getVerb = function()
  {
    return this._verb;
  };

  FacebookLikeButtonWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  FacebookLikeButtonWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  FacebookLikeButtonWidget.prototype.toString = function()
  {
    return this.htmlTag("div",
    {
      "class" : "fb-like",
      "data-action" : this.getVerb(),
      "data-colorscheme" : this.getColorScheme(),
      "data-href" : this.getUrl(),
      "data-kid-directed-site" : this.getKidsMode(),
      "data-layout" : this.getLayout(),
      "data-ref" : this.getTrackLabel(),
      "data-show-faces" : this.getFaces(),
      "data-width" : this.getWidth()
    });
  };

  factory.likeButton = function()
  {
    return new FacebookLikeButtonWidget();
  };
}(Widgets.facebook()));