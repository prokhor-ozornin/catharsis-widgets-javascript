(function(factory)
{
  var PinterestPinWidget = function()
  {
  };

  PinterestPinWidget.prototype = new HtmlWidget();

  PinterestPinWidget.prototype.id = function(id)
  {
    this._id = id;
    return this;
  };

  PinterestPinWidget.prototype.getId = function()
  {
    return this._id;
  };

  PinterestPinWidget.prototype.toString = function()
  {
    if (!this.getId())
    {
      return "";
    }

    return this.htmlTag("a",
    {
      "data-pin-do" : "embedPin",
      "href" : "http://www.pinterest.com/pin/" + this.getId()
    });
  };

  factory.pin = function()
  {
    return new PinterestPinWidget();
  };
}
(Widgets.pinterest()));