(function(factory)
{
  var PinterestProfileWidget = function()
  {
  };

  PinterestProfileWidget.prototype = new HtmlWidget();

  PinterestProfileWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  PinterestProfileWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  PinterestProfileWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  PinterestProfileWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  PinterestProfileWidget.prototype.header = function()
  {
    return this.image(115).height(120).width(900);
  };

  PinterestProfileWidget.prototype.image = function(width)
  {
    this._image = width;
    return this;
  };

  PinterestProfileWidget.prototype.getImage = function()
  {
    return this._image;
  };

  PinterestProfileWidget.prototype.sidebar = function()
  {
    return this.image(60).height(800).width(150);
  };

  PinterestProfileWidget.prototype.square = function()
  {
    return this.image(80).height(320).width(400);
  };

  PinterestProfileWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  PinterestProfileWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  PinterestProfileWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    return this.htmlTag("a",
    {
      "data-pin-board-width" : this.getWidth(),
      "data-pin-do" : "embedUser",
      "data-pin-scale-height" : this.getHeight(),
      "data-pin-scale-width" : this.getImage(),
      "href" : "http://www.pinterest.com/" + this.getAccount()
    });
  };

  factory.Profile = function()
  {
    return new PinterestProfileWidget();
  };
}
(Widgets.Pinterest()));