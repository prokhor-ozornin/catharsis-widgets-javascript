(function(factory)
{
  var MailRuFacesWidget = function()
  {
    this._font = factory.FacesFont.ARIAL;
    this._title = true;
  };

  MailRuFacesWidget.prototype = new HtmlWidget();

  MailRuFacesWidget.prototype.backgroundColor = function(color)
  {
    this._backgroundColor = color;
    return this;
  };

  MailRuFacesWidget.prototype.getBackgroundColor = function()
  {
    return this._backgroundColor;
  };

  MailRuFacesWidget.prototype.borderColor = function(color)
  {
    this._borderColor = color;
    return this;
  };

  MailRuFacesWidget.prototype.getBorderColor = function()
  {
    return this._borderColor;
  };

  MailRuFacesWidget.prototype.domain = function(domain)
  {
    this._domain = domain;
    return this;
  };

  MailRuFacesWidget.prototype.getDomain = function()
  {
    return this._domain;
  };

  MailRuFacesWidget.prototype.font = function(font)
  {
    this._font = font;
    return this;
  };

  MailRuFacesWidget.prototype.getFont = function()
  {
    return this._font;
  };

  MailRuFacesWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  MailRuFacesWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  MailRuFacesWidget.prototype.hyperlinkColor = function(color)
  {
    this._hyperlinkColor = color;
    return this;
  };

  MailRuFacesWidget.prototype.getHyperlinkColor = function()
  {
    return this._hyperlinkColor;
  };

  MailRuFacesWidget.prototype.textColor = function(color)
  {
    this._textColor = color;
    return this;
  };

  MailRuFacesWidget.prototype.getTextColor = function()
  {
    return this._textColor;
  };

  MailRuFacesWidget.prototype.title = function(show)
  {
    this._title = show;
    return this;
  };

  MailRuFacesWidget.prototype.getTitle = function()
  {
    return this._title;
  };

  MailRuFacesWidget.prototype.titleColor = function(color)
  {
    this._titleColor = color;
    return this;
  };

  MailRuFacesWidget.prototype.getTitleColor = function()
  {
    return this._titleColor;
  };

  MailRuFacesWidget.prototype.titleText = function(title)
  {
    this._titleText = title;
    return this;
  };

  MailRuFacesWidget.prototype.getTitleText = function()
  {
    return this._titleText;
  };

  MailRuFacesWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  MailRuFacesWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  MailRuFacesWidget.prototype.toString = function()
  {
    if (!this.getDomain() || !this.getWidth() || !this.getHeight())
    {
      return "";
    }

    var config =
    {
      "domain" : this.getDomain(),
      "font" : this.getFont(),
      "width" : this.getWidth(),
      "height" : this.getHeight(),
      "title" : this.getTitleText(),
      "title-color" : this.getTitleColor(),
      "background" : this.getBackgroundColor(),
      "border" : this.getBorderColor(),
      "color" : this.getTextColor(),
      "link-color" : this.getHyperlinkColor()
    };
    if (!this.getTitle())
    {
      config.notitle = true;
    }

    return this.htmlTag("a",
    {
      "class" : "mrc__plugin_share_friends",
      "href" :  "http://connect.mail.ru/share_friends?" + this.urlQuery(config),
      "rel" : JSON.stringify(config)
    },
    "Друзья");
  };

  factory.Faces = function()
  {
    return new MailRuFacesWidget();
  };
}
(Widgets.MailRu()));