(function(factory)
{
  var VkontakteInitializationWidget = function()
  {
  };

  VkontakteInitializationWidget.prototype = new HtmlWidget();

  VkontakteInitializationWidget.prototype.apiId = function(apiId)
  {
    this._apiId = apiId;
    return this;
  };

  VkontakteInitializationWidget.prototype.getApiId = function()
  {
    return this._apiId;
  };

  VkontakteInitializationWidget.prototype.toString = function()
  {
    if (!this.getApiId())
    {
      return "";
    }

    return this.javascriptInline("VK.init({apiId:" + this.getApiId() + ", onlyWidgets:true});");
  };

  factory.initialize = function()
  {
    return new VkontakteInitializationWidget();
  };
}
(Widgets.vkontakte()));