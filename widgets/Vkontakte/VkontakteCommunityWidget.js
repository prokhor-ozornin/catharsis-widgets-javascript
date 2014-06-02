(function(factory)
{
  var VkontakteCommunityWidget = function()
  {
    this._mode = factory.CommunityMode.PARTICIPANTS;
  };

  VkontakteCommunityWidget.prototype = new HtmlWidget();

  VkontakteCommunityWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  VkontakteCommunityWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  VkontakteCommunityWidget.prototype.backgroundColor = function(color)
  {
    this._backgroundColor = color;
    return this;
  };

  VkontakteCommunityWidget.prototype.getBackgroundColor = function()
  {
    return this._backgroundColor;
  };

  VkontakteCommunityWidget.prototype.buttonColor = function(color)
  {
    this._buttonColor = color;
    return this;
  };

  VkontakteCommunityWidget.prototype.getButtonColor = function()
  {
    return this._buttonColor;
  };

  VkontakteCommunityWidget.prototype.elementId = function(id)
  {
    this._elementId = id;
    return this;
  };

  VkontakteCommunityWidget.prototype.getElementId = function()
  {
    return this._elementId;
  };

  VkontakteCommunityWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  VkontakteCommunityWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  VkontakteCommunityWidget.prototype.mode = function(mode)
  {
    this._mode = mode;
    return this;
  };

  VkontakteCommunityWidget.prototype.getMode = function()
  {
    return this._mode;
  };

  VkontakteCommunityWidget.prototype.textColor = function(color)
  {
    this._textColor = color;
    return this;
  };

  VkontakteCommunityWidget.prototype.getTextColor = function()
  {
    return this._textColor;
  };

  VkontakteCommunityWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  VkontakteCommunityWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  VkontakteCommunityWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    var config =
    {
      "mode" : this.getMode(),
      "width" : this.getWidth(),
      "height" : this.getHeight(),
      "color1" : this.getBackgroundColor(),
      "color2" : this.getTextColor(),
      "color3" : this.getButtonColor()
    };
    if (this.getMode() === factory.CommunityMode.NEWS)
    {
      config.wide = 1;
    }

    var elementId = this.getElementId() || "vk_groups_" + this.getAccount();

    return this.htmlTag("div", { "id" : elementId }) + this.javascriptInline("VK.Widgets.Group(\"" + elementId + "\", " + JSON.stringify(config) + ", \"" + this.getAccount() + "\");");
  };

  factory.community = function()
  {
    return new VkontakteCommunityWidget();
  };
}
(Widgets.vkontakte()));