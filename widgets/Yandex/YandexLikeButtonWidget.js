(function(factory)
{
  var YandexLikeButtonWidget = function()
  {
    this._layout = factory.LikeButtonLayout.BUTTON;
    this._size = factory.LikeButtonSize.LARGE;
  };

  YandexLikeButtonWidget.prototype = new HtmlWidget();

  YandexLikeButtonWidget.prototype.layout = function(layout)
  {
    this._layout = layout;
    return this;
  };

  YandexLikeButtonWidget.prototype.getLayout = function()
  {
    return this._layout;
  };

  YandexLikeButtonWidget.prototype.size = function(size)
  {
    this._size = size;
    return this;
  };

  YandexLikeButtonWidget.prototype.getSize = function()
  {
    return this._size;
  };

  YandexLikeButtonWidget.prototype.text = function(text)
  {
    this._text = text;
    return this;
  };

  YandexLikeButtonWidget.prototype.getText = function()
  {
    return this._text;
  };

  YandexLikeButtonWidget.prototype.title = function(title)
  {
    this._title = title;
    return this;
  };

  YandexLikeButtonWidget.prototype.getTitle = function()
  {
    return this._title;
  };

  YandexLikeButtonWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  YandexLikeButtonWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  YandexLikeButtonWidget.prototype.toString = function()
  {
    return this.htmlTag("a",
    {
      "name" : "ya-share",
      "share_text" : this.getText(),
      "share_title" : this.getTitle(),
      "share_url" : this.getUrl(),
      "size" : this.getSize(),
      "type" : this.getLayout()
    })
    +
    '<script type="text/javascript">'
    + 'if (window.Ya && window.Ya.Share) { Ya.Share.update(); } else { (function () { if (!window.Ya) { window.Ya = {} };'
    + 'Ya.STATIC_BASE = "http:\/\/yandex.st\/wow\/2.15.3\/static"; Ya.START_BASE = "http:\/\/my.ya.ru\/"; var shareScript = document.createElement("script"); shareScript.type = "text/javascript"; shareScript.async = "true"; shareScript.charset = "utf-8"; shareScript.src = Ya.STATIC_BASE + "/js/api/Share.js";'
    + '(document.getElementsByTagName("head")[0] || document.body).appendChild(shareScript); })(); }'
    + '</script>';
  };

  factory.likeButton = function()
  {
    return new YandexLikeButtonWidget();
  };
}
(Widgets.yandex()));