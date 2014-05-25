(function(facebook)
{
  var FacebookSendButtonWidget = function()
  {
  };

  FacebookSendButtonWidget.prototype = new HtmlWidget();

  FacebookSendButtonWidget.prototype.colorScheme = function(colorScheme)
  {
    this._colorScheme = colorScheme;
    return this;
  };

  FacebookSendButtonWidget.prototype.getColorScheme = function()
  {
    return this._colorScheme;
  };

  FacebookSendButtonWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  FacebookSendButtonWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  FacebookSendButtonWidget.prototype.kidsMode = function(enabled)
  {
    this._kidsMode = enabled;
    return this;
  };

  FacebookSendButtonWidget.prototype.getKidsMode = function()
  {
    return this._kidsMode;
  };

  FacebookSendButtonWidget.prototype.trackLabel = function(label)
  {
    this._trackLabel = label;
    return this;
  };

  FacebookSendButtonWidget.prototype.getTrackLabel = function()
  {
    return this._trackLabel;
  };

  FacebookSendButtonWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  FacebookSendButtonWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  FacebookSendButtonWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  FacebookSendButtonWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  FacebookSendButtonWidget.prototype.toString = function()
  {
     return this.htmlTag("div",
     {
        "class" : "fb-send",
        "data-colorscheme" : this.getColorScheme(),
        "data-height" : this.getHeight(),
        "data-href" : this.getUrl(),
        "data-kid-directed-site" : this.getKidsMode(),
        "data-ref" : this.getTrackLabel(),
        "data-width" : this.getWidth()
     });
  };

  facebook.SendButton = function()
  {
    return new FacebookSendButtonWidget();
  };
}(Widgets.Facebook()));