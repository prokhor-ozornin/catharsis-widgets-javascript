(function(factory)
{
  var MailRuVideoWidget = function()
  {
  };

  MailRuVideoWidget.prototype = new HtmlWidget();

  MailRuVideoWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  MailRuVideoWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  MailRuVideoWidget.prototype.id = function(id)
  {
    this._id = id;
    return this;
  };

  MailRuVideoWidget.prototype.getId = function()
  {
    return this._id;
  };

  MailRuVideoWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  MailRuVideoWidget.prototype.getWidth = function()
  {
    return this._width;
  } ;

  MailRuVideoWidget.prototype.toString = function()
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
      "src" : "http://api.video.mail.ru/videos/embed/mail/" + this.getId(),
      "webkitallowfullscreen" : true,
      "width" : this.getWidth()
    });
  };

  factory.Video = function()
  {
    return new MailRuVideoWidget();
  };
}
(Widgets.MailRu()));