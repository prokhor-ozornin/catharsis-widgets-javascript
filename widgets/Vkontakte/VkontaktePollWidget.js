(function(factory)
{
  var VkontaktePollWidget = function()
  {
  };

  VkontaktePollWidget.prototype = new HtmlWidget();

  VkontaktePollWidget.prototype.elementId = function(id)
  {
    this._elementId = id;
    return this;
  };

  VkontaktePollWidget.prototype.getElementId = function()
  {
    return this._elementId;
  };

  VkontaktePollWidget.prototype.id = function(id)
  {
    this._id = id;
    return this;
  };

  VkontaktePollWidget.prototype.getId = function()
  {
    return this._id;
  };

  VkontaktePollWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  VkontaktePollWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  VkontaktePollWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  VkontaktePollWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  VkontaktePollWidget.prototype.toString = function()
  {
    if (!this.getId())
    {
      return "";
    }

    var config =
    {
      "pageUrl" : this.getUrl(),
      "width" : this.getWidth()
    };

    var elementId = this.getElementId() || "vk_poll_" + this.getId();

    return this.htmlTag("div", { "id" : elementId })
           + this.javascriptInline("VK.Widgets.Poll(\"" + elementId + "\", " + JSON.stringify(config) + ", \"" + this.getId() + "\");");
  };

  factory.poll = function()
  {
    return new VkontaktePollWidget();
  };
}
(Widgets.vkontakte()));