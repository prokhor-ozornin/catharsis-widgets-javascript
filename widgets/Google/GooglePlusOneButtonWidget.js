(function(factory)
{
  var GooglePlusOneButtonWidget = function()
  {
  };

  GooglePlusOneButtonWidget.prototype = new HtmlWidget();

  GooglePlusOneButtonWidget.prototype.alignment = function(alignment)
  {
    this._alignment = alignment;
    return this;
  };

  GooglePlusOneButtonWidget.prototype.getAlignment = function()
  {
    return this._alignment;
  };

  GooglePlusOneButtonWidget.prototype.annotation = function(annotation)
  {
    this._annotation = annotation;
    return this;
  };

  GooglePlusOneButtonWidget.prototype.getAnnotation = function()
  {
    return this._annotation;
  };

  GooglePlusOneButtonWidget.prototype.callback = function(callback)
  {
    this._callback = callback;
    return this;
  };

  GooglePlusOneButtonWidget.prototype.getCallback = function()
  {
    return this._callback;
  };

  GooglePlusOneButtonWidget.prototype.recommendations = function(show)
  {
    this._recommendations = show;
    return this;
  };

  GooglePlusOneButtonWidget.prototype.getRecommendations = function()
  {
    return this._recommendations;
  };

  GooglePlusOneButtonWidget.prototype.size = function(size)
  {
    this._size = size;
    return this;
  };

  GooglePlusOneButtonWidget.prototype.getSize = function()
  {
    return this._size;
  };

  GooglePlusOneButtonWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  GooglePlusOneButtonWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  GooglePlusOneButtonWidget.prototype.width = function(width)
  {
    this._width = width;
    return this._width;
  };

  GooglePlusOneButtonWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  GooglePlusOneButtonWidget.prototype.toString = function()
  {
    return this.htmlTag("g:plusone",
    {
      "align" : this.getAlignment(),
      "annotation" : this.getAnnotation(),
      "data-callback" : this.getCallback(),
      "data-recommendations" : this.getRecommendations(),
      "href" : this.getUrl(),
      "size" : this.getSize(),
      "width" : this.getWidth()
    });
  };

  factory.plusOneButton = function()
  {
    return new GooglePlusOneButtonWidget();
  };
}
(Widgets.google()));