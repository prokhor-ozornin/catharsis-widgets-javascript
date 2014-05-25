(function(factory)
{
  var SoundCloudProfileIconWidget = function()
  {
    this._color = "orange_white";
    this._size = factory.ProfileIconSize.SIZE_32;
  };

  SoundCloudProfileIconWidget.prototype = new HtmlWidget();

  SoundCloudProfileIconWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  SoundCloudProfileIconWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  SoundCloudProfileIconWidget.prototype.blackWhite = function()
  {
    return this.color("black_white");
  };

  SoundCloudProfileIconWidget.prototype.color = function(color)
  {
    this._color = color;
    return this;
  };

  SoundCloudProfileIconWidget.prototype.getColor = function()
  {
    return this._color;
  };

  SoundCloudProfileIconWidget.prototype.orangeTransparent = function()
  {
    return this.color("orange_transparent");
  };

  SoundCloudProfileIconWidget.prototype.orangeWhite = function()
  {
    return this.color("orange_white");
  };

  SoundCloudProfileIconWidget.prototype.size = function(size)
  {
    this._size = size;
    return this;
  };

  SoundCloudProfileIconWidget.prototype.getSize = function()
  {
    return this._size;
  };

  SoundCloudProfileIconWidget.prototype.whiteOrange = function()
  {
    return this.color("white_orange");
  };

  SoundCloudProfileIconWidget.prototype.whiteTransparent = function()
  {
    return this.color("white_transparent");
  };

  SoundCloudProfileIconWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    return this.htmlTag("iframe",
    {
      "allowtransparency" : true,
      "frameborder" : 0,
      "scrolling" : "no",
      "src" : "https://w.soundcloud.com/icon/?url=http://soundcloud.com/" + this.getAccount() + "&color=" + this.getColor() + "&size=" + this.getSize(),
      "style" : "width: " + this.getSize() + "px; height: " + this.getSize() + "px;"
    });
  };

  factory.ProfileIcon = function()
  {
    return new SoundCloudProfileIconWidget();
  };
}
(Widgets.SoundCloud()));