(function(factory)
{
  var VkontakteAuthButtonWidget = function()
  {
    this._type = factory.AuthButtonType.STANDARD;
  };

  VkontakteAuthButtonWidget.prototype = new HtmlWidget();

  VkontakteAuthButtonWidget.prototype.callback = function(callback)
  {
    this._callback = callback;
    return this;
  };

  VkontakteAuthButtonWidget.prototype.getCallback = function()
  {
    return this._callback;
  };

  VkontakteAuthButtonWidget.prototype.elementId = function(id)
  {
    this._elementId = id;
    return this;
  };

  VkontakteAuthButtonWidget.prototype.getElementId = function()
  {
    return this._elementId;
  };

  VkontakteAuthButtonWidget.prototype.type = function(type)
  {
    this._type = type;
    return this;
  };

  VkontakteAuthButtonWidget.prototype.getType = function()
  {
    return this._type;
  };

  VkontakteAuthButtonWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  VkontakteAuthButtonWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  VkontakteAuthButtonWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  VkontakteAuthButtonWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  VkontakteAuthButtonWidget.prototype.standard = function(url)
  {
    return this.type(factory.AuthButtonType.STANDARD).url(url);
  };

  VkontakteAuthButtonWidget.prototype.dynamic = function(callback)
  {
    return this.type(factory.AuthButtonType.DYNAMIC).callback(callback);
  };

  VkontakteAuthButtonWidget.prototype.toString = function()
  {
    if (this.getType() === factory.AuthButtonType.DYNAMIC && !this.getCallback())
    {
      return "";
    }

    if (this.getType() === factory.AuthButtonType.STANDARD && !this.getUrl())
    {
      return "";
    }

    var config =
    {
      "onAuth" : this.getCallback(),
      "authUrl" : this.getUrl(),
      "width" : this.getWidth()
    };

    var elementId = this.getElementId() || "vk_auth";

    return this.htmlTag("div", { "id" : elementId })
           + this.javascriptInline("VK.Widgets.Auth(\"" + elementId + "\", " + JSON.stringify(config) + ");");
  };

  factory.authButton = function()
  {
    return new VkontakteAuthButtonWidget();
  };
}
(Widgets.vkontakte()));