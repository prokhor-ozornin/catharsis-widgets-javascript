(function(widgets)
{
  var InlineImageWidget = function()
  {
  };

  InlineImageWidget.prototype = new HtmlWidget();

  InlineImageWidget.prototype.contents = function(contents)
  {
    this._contents = contents;
    return this;
  };

  InlineImageWidget.prototype.getContents = function()
  {
    return this._contents;
  };

  InlineImageWidget.prototype.format = function(format)
  {
    this._format = format;
    return this;
  };

  InlineImageWidget.prototype.getFormat = function()
  {
    return this._format;
  };

  InlineImageWidget.prototype.toString = function()
  {
    if (!this.getContents())
    {
      return "";
    }

    return this.htmlTag("img",
    {
      "src" : "data:" + (this.getFormat() || "image") + ";base64," + (window.btoa(this.getContents()))
    });
  };

  widgets.InlineImage = function()
  {
    return new InlineImageWidget();
  };
}
(Widgets));