(function(factory)
{
  var VkontakteSubscriptionWidget = function()
  {
    this._layout = factory.SubscriptionButtonLayout.FIRST;
    this._onlyButton = false;
  };

  VkontakteSubscriptionWidget.prototype = new HtmlWidget();

  VkontakteSubscriptionWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  VkontakteSubscriptionWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  VkontakteSubscriptionWidget.prototype.elementId = function(id)
  {
    this._elementId = id;
    return this;
  };

  VkontakteSubscriptionWidget.prototype.getElementId = function()
  {
    return this._elementId;
  };

  VkontakteSubscriptionWidget.prototype.layout = function(layout)
  {
    this._layout = layout;
    return this;
  };

  VkontakteSubscriptionWidget.prototype.getLayout = function()
  {
    return this._layout;
  };

  VkontakteSubscriptionWidget.prototype.onlyButton = function(onlyButton)
  {
    this._onlyButton = onlyButton;
    return this;
  };

  VkontakteSubscriptionWidget.prototype.getOnlyButton = function()
  {
    return this._onlyButton;
  };

  VkontakteSubscriptionWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    var config =
    {
      "mode" : this.getLayout()
    };
    if (this.getOnlyButton())
    {
      config.soft = 1;
    }

    var elementId = this.getElementId() || "vk_subscribe_" + this.getAccount();

    return this.htmlTag("div", { "id" : elementId })
           + this.javascriptInline("VK.Widgets.Subscribe(\"" + elementId + "\", " + JSON.stringify(config) + ", \"" + this.getAccount() + "\");");
  };

  factory.Subscription = function()
  {
    return new VkontakteSubscriptionWidget();
  };
}
(Widgets.Vkontakte()));