(function(factory)
{
  var YandexVideoWidget = function()
  {
  };

  YandexVideoWidget.prototype = new HtmlWidget();

  YandexVideoWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  YandexVideoWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  YandexVideoWidget.prototype.id = function(id)
  {
    this._id = id;
    return this;
  };

  YandexVideoWidget.prototype.getId = function()
  {
    return this._id;
  };

  YandexVideoWidget.prototype.user = function(user)
  {
    this._user = user;
    return this;
  };

  YandexVideoWidget.prototype.getUser = function()
  {
    return this._user;
  };

  YandexVideoWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  YandexVideoWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  YandexVideoWidget.prototype.toString = function()
  {
    if (!this.getId() || !this.getUser() || !this.getHeight() || !this.getWidth())
    {
      return "";
    }

    return this.htmlTag("iframe",
    {
      "allowfullscreen" : true,
      "frameborder" : 0,
      "height" : this.getHeight(),
      "mozallowfullscreen" : true,
      "src" : "http://video.yandex.ru/iframe/" + this.getUser() + "/" + this.getId(),
      "webkitallowfullscreen" : true,
      "width" : this.getWidth()
    });
  };

  factory.Video = function()
  {
    return new YandexVideoWidget();
  };
}
(Widgets.Yandex()));