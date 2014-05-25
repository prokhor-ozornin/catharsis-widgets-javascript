(function(factory)
{
  var MailRuLikeButtonWidget = function()
  {
    this._counter = true;
    this._counterPosition = factory.LikeButtonCounterPosition.UPPER;
    this._layout = factory.LikeButtonLayout.FIRST;
    this._size = factory.LikeButtonSize.SIZE_20;
    this._text = true;
    this._textType = factory.LikeButtonTextType.FIRST;
    this._type = factory.LikeButtonType.ALL;
  };

  MailRuLikeButtonWidget.prototype = new HtmlWidget();

  MailRuLikeButtonWidget.prototype.counter = function(show)
  {
    this._counter = show;
    return this;
  };

  MailRuLikeButtonWidget.prototype.getCounter = function()
  {
    return this._counter;
  };

  MailRuLikeButtonWidget.prototype.counterPosition = function(position)
  {
    this._counterPosition = position;
    return this;
  };

  MailRuLikeButtonWidget.prototype.getCounterPosition = function()
  {
    return this._counterPosition;
  };

  MailRuLikeButtonWidget.prototype.layout = function(layout)
  {
    this._layout = layout;
    return this;
  };

  MailRuLikeButtonWidget.prototype.getLayout = function()
  {
    return this._layout;
  };

  MailRuLikeButtonWidget.prototype.size = function(size)
  {
    this._size = size;
    return this;
  };

  MailRuLikeButtonWidget.prototype.getSize = function()
  {
    return this._size;
  };

  MailRuLikeButtonWidget.prototype.text = function(text)
  {
    this._text = text;
    return this;
  };

  MailRuLikeButtonWidget.prototype.getText = function()
  {
    return this._text;
  };

  MailRuLikeButtonWidget.prototype.type = function(type)
  {
    this._type = type;
    return this;
  };

  MailRuLikeButtonWidget.prototype.getType = function()
  {
    return this._type;
  };

  MailRuLikeButtonWidget.prototype.textType = function(type)
  {
    this._textType = type;
    return this;
  };

  MailRuLikeButtonWidget.prototype.getTextType = function()
  {
    return this._textType;
  };

  MailRuLikeButtonWidget.prototype.toString = function()
  {
    var config =
    {
      "sz" : this.getSize(),
      "st" : this.getLayout(),
      "tp" : this.getType()
    };

    if (!this.getCounter())
    {
      config.nc = 1;
    }
    else if (this.getCounterPosition() && this.getCounterPosition().toLowerCase() === factory.LikeButtonCounterPosition.UPPER)
    {
      config.vt = 1;
    }

    if (!this.getText())
    {
      config.nt = 1;
    }
    else
    {
      config.cm = this.getTextType();
      config.ck = this.getTextType();
    }

    return this.htmlTag("a",
    {
      "class" : "mrc__plugin_uber_like_button",
      "data-mrc-config" : JSON.stringify(config),
      "href" : "http://connect.mail.ru/share",
      "target" : "_blank"
    },
    "Нравится");
  };

  factory.LikeButton = function()
  {
    return new MailRuLikeButtonWidget();
  };
}
(Widgets.MailRu()));