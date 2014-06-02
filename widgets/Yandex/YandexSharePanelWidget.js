(function(factory)
{
  function YandexSharePanelWidget()
  {
    this._layout = factory.SharePanelLayout.BUTTON;
    this._services = ["yaru", "vkontakte", "facebook", "twitter", "odnoklassniki", "moimir", "lj", "friendfeed", "moikrug", "gplus", "pinterest", "surfingbird"];
  };

  YandexSharePanelWidget.prototype = new HtmlWidget();

  YandexSharePanelWidget.prototype.language = function(language)
  {
    this._language = language;
    return this;
  };

  YandexSharePanelWidget.prototype.getLanguage = function()
  {
    return this._language;
  };

  YandexSharePanelWidget.prototype.layout = function(layout)
  {
    this._layout = layout;
    return this;
  };

  YandexSharePanelWidget.prototype.getLayout = function()
  {
    return this._layout;
  };

  YandexSharePanelWidget.prototype.services = function(services)
  {
    this._services = services;
    return this;
  };

  YandexSharePanelWidget.prototype.getServices = function()
  {
    return this._services;
  };

  YandexSharePanelWidget.prototype.toString = function()
  {
    return this.htmlTag("div",
    {
      "class" : "yashare-auto-init",
      "data-yashareL10n" : this.getLanguage(),
      "data-yashareQuickServices" : this.getServices().join(","),
      "data-yashareType" : this.getLayout()
    });
  };

  factory.sharePanel = function()
  {
    return new YandexSharePanelWidget();
  };
}
(Widgets.yandex()));