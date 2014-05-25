(function(factory)
{
  var VkontakteRecommendationsWidget = function()
  {
  };

  VkontakteRecommendationsWidget.prototype = new HtmlWidget();

  VkontakteRecommendationsWidget.prototype.elementId = function(id)
  {
    this._elementId = id;
    return this;
  };

  VkontakteRecommendationsWidget.prototype.getElementId = function()
  {
    return this._elementId;
  };

  VkontakteRecommendationsWidget.prototype.limit = function(limit)
  {
    this._limit = limit;
    return this;
  };

  VkontakteRecommendationsWidget.prototype.getLimit = function()
  {
    return this._limit;
  };

  VkontakteRecommendationsWidget.prototype.max = function(max)
  {
    this._max = max;
    return this;
  };

  VkontakteRecommendationsWidget.prototype.getMax = function()
  {
    return this._max;
  };

  VkontakteRecommendationsWidget.prototype.period = function(period)
  {
    this._period = period;
    return this;
  };

  VkontakteRecommendationsWidget.prototype.getPeriod = function()
  {
    return this._period;
  };

  VkontakteRecommendationsWidget.prototype.sorting = function(sorting)
  {
    this._sorting = sorting;
    return this;
  };

  VkontakteRecommendationsWidget.prototype.getSorting = function()
  {
    return this._sorting;
  };

  VkontakteRecommendationsWidget.prototype.target = function(target)
  {
    this._target = target;
    return this;
  };

  VkontakteRecommendationsWidget.prototype.getTarget = function()
  {
    return this._target;
  };

  VkontakteRecommendationsWidget.prototype.verb = function(verb)
  {
    this._verb = verb;
    return this;
  };

  VkontakteRecommendationsWidget.prototype.getVerb = function()
  {
    return this._verb;
  };

  VkontakteRecommendationsWidget.prototype.toString = function()
  {
    var config =
    {
      "limit" : this.getLimit(),
      "max" : this.getMax(),
      "period" : this.getPeriod(),
      "verb" : this.getVerb(),
      "sorting" : this.getSorting(),
      "target" : this.getTarget()
    };

    var elementId = this.getElementId() || "vk_recommendations";

    return this.htmlTag("div", { "id" : elementId })
           + this.javascriptInline("VK.Widgets.Recommended(\"" + elementId + "\", " + JSON.stringify(config) + ");");
  };

  factory.Recommendations = function()
  {
    return new VkontakteRecommendationsWidget();
  };
}
(Widgets.Vkontakte()));