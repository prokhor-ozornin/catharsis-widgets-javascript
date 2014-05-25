(function(factory)
{
  var VkontaktePostWidget = function()
  {
  };

  VkontaktePostWidget.prototype = new HtmlWidget();

  VkontaktePostWidget.prototype.elementId = function(id)
  {
    this._elementId = id;
    return this;
  };

  VkontaktePostWidget.prototype.getElementId = function()
  {
    return this._elementId;
  };

  VkontaktePostWidget.prototype.hash = function(hash)
  {
    this._hash = hash;
    return this;
  };

  VkontaktePostWidget.prototype.getHash = function()
  {
    return this._hash;
  };

  VkontaktePostWidget.prototype.id = function(id)
  {
    this._id = id;
    return this;
  };

  VkontaktePostWidget.prototype.getId = function()
  {
    return this._id;
  };

  VkontaktePostWidget.prototype.owner = function(id)
  {
    this._owner = id;
    return this;
  };

  VkontaktePostWidget.prototype.getOwner = function()
  {
    return this._owner;
  };

  VkontaktePostWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  VkontaktePostWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  VkontaktePostWidget.prototype.toString = function()
  {
    if (!this.getId() || !this.getOwner() || !this.getHash())
    {
      return "";
    }

    var config =
    {
      "width" : this.getWidth()
    };

    var elementId = this.getElementId() || "vk_post_" + this.getOwner() + "_" + this.getId();

    return this.htmlTag("div", { "id" : elementId })
           + this.javascriptInline("(function() { window.VK && VK.Widgets && VK.Widgets.Post && VK.Widgets.Post(\"" + elementId + "\", " + this.getOwner() + " ," + this.getId() + ", \"" + this.getHash() + "\", " + JSON.stringify(config) + ") || setTimeout(arguments.callee, 50);  }());");
  };

  factory.Post = function()
  {
    return new VkontaktePostWidget();
  };
}
(Widgets.Vkontakte()));