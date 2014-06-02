(function(factory)
{
  var FacebookPostWidget = function()
  {
  };

  FacebookPostWidget.prototype = new HtmlWidget();

  FacebookPostWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  FacebookPostWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  FacebookPostWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  FacebookPostWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  FacebookPostWidget.prototype.toString = function()
  {
    if (!this.getUrl())
    {
      return "";
    }

    return this.htmlTag("div",
    {
      "class" : "fb-post",
      "data-href" : this.getUrl(),
      "data-width" : this.getWidth()
    });
  };

  factory.post = function()
  {
    return new FacebookPostWidget();
  };
}(Widgets.facebook()));