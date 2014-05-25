(function(factory)
{
  var TumblrShareButtonWidget = function()
  {
    this._type = factory.ShareButtonType.FIRST;
  };

  TumblrShareButtonWidget.prototype = new HtmlWidget();

  TumblrShareButtonWidget.prototype.colorScheme = function(colorScheme)
  {
    this._colorScheme = colorScheme;
    return this;
  };

  TumblrShareButtonWidget.prototype.getColorScheme = function()
  {
    return this._colorScheme;
  };

  TumblrShareButtonWidget.prototype.type = function(type)
  {
    this._type = type;
    return this;
  };

  TumblrShareButtonWidget.prototype.getType = function()
  {
    return this._type;
  };

  TumblrShareButtonWidget.prototype.toString = function()
  {
    var width = 0;
    switch (this.getType())
    {
      case factory.ShareButtonType.FIRST :
        width = 80;
      break;

      case factory.ShareButtonType.SECOND :
        width = 70;
      break;

      case factory.ShareButtonType.THIRD :
        width = 130;
      break;

      case factory.ShareButtonType.FORTH :
        width = 20;
      break;

      default:
        width = 80;
      break;
    }

    return this.htmlTag("a",
    {
      "href" : "http://www.tumblr.com/share",
      "style" : "display:inline-block; text-indent:-9999px; overflow:hidden; width:" + width + "px; height:20px; background:url('http://platform.tumblr.com/v1/share_" + this.getType() + (this.getColorScheme() && this.getColorScheme().toLowerCase() === factory.ShareButtonColorScheme.GRAY ? "T" : "") + ".png') top left no-repeat transparent;",
      "title" : "Share on Tumblr"
    },
    "Share on Tumblr");
  };

  factory.ShareButton = function()
  {
    return new TumblrShareButtonWidget();
  };
}
(Widgets.Tumblr()));