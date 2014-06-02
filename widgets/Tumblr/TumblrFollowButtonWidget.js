(function(factory)
{
  function TumblrFollowButtonWidget()
  {
    this._colorScheme = factory.FollowButtonColorScheme.LIGHT;
    this._type = factory.FollowButtonType.FIRST;
  };

  TumblrFollowButtonWidget.prototype = new HtmlWidget();

  TumblrFollowButtonWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  TumblrFollowButtonWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  TumblrFollowButtonWidget.prototype.colorScheme = function(colorScheme)
  {
    this._colorScheme = colorScheme;
    return this;
  };

  TumblrFollowButtonWidget.prototype.getColorScheme = function()
  {
    return this._colorScheme;
  };

  TumblrFollowButtonWidget.prototype.type = function(type)
  {
    this._type = type;
    return this;
  };

  TumblrFollowButtonWidget.prototype.getType = function()
  {
    return this._type;
  };

  TumblrFollowButtonWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    var width = 189;
    switch (this.getType())
    {
      case factory.FollowButtonType.SECOND :
        width = 113;
      break;

      case factory.FollowButtonType.THIRD :
        width = 18;
      break;
    }

    return this.htmlTag("iframe",
    {
      "allowtransparency" : true,
      "border" : 0,
      "class" : "btn",
      "frameborder" : 0,
      "height" : 25,
      "scrolling" : "no",
      "src" : "http://platform.tumblr.com/v1/follow_button.html?button_type=" + this.getType() + "&tumblelog=" + this.getAccount() + "&color_scheme=" + this.getColorScheme(),
      "width" : width
    });
  };

  factory.followButton = function()
  {
    return new TumblrFollowButtonWidget();
  };
}
(Widgets.tumblr()));