(function(factory)
{
  var PinterestBoardWidget = function()
  {
  };

  PinterestBoardWidget.prototype = new HtmlWidget();

  PinterestBoardWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  PinterestBoardWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  PinterestBoardWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  PinterestBoardWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  PinterestBoardWidget.prototype.header = function()
  {
    return this.image(115).height(120).width(900);
  };

  PinterestBoardWidget.prototype.id = function(id)
  {
    this._id = id;
    return this;
  };

  PinterestBoardWidget.prototype.getId = function()
  {
    return this._id;
  };

  PinterestBoardWidget.prototype.image = function(width)
  {
    this._image = width;
    return this;
  };

  PinterestBoardWidget.prototype.getImage = function()
  {
    return this._image;
  };

  PinterestBoardWidget.prototype.sidebar = function()
  {
    return this/*.image(60).height(800).*/.width(150);
  };

  PinterestBoardWidget.prototype.square = function()
  {
    return this.image(80).height(320).width(400);
  };

  PinterestBoardWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  PinterestBoardWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  PinterestBoardWidget.prototype.toString = function()
  {
    if (!this.getAccount() || !this.getId())
    {
      return "";
    }

    return this.htmlTag("a",
    {
      "data-pin-board-width" : this.getWidth(),
      "data-pin-do" : "embedBoard",
      "data-pin-scale-height" : this.getHeight(),
      "data-pin-scale-width" : this.getImage(),
      "href" : "http://www.pinterest.com/" + this.getAccount() + "/" + this.getId()
    });
  };

  factory.Board = function()
  {
    return new PinterestBoardWidget();
  };
}
(Widgets.Pinterest()));