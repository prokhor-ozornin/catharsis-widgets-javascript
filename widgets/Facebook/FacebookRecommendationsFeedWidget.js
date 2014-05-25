(function(factory)
{
  var FacebookRecommendationsFeedWidget = function()
  {
    this._actions = [];
  };

  FacebookRecommendationsFeedWidget.prototype = new HtmlWidget();

  FacebookRecommendationsFeedWidget.prototype.actions = function(actions)
  {
    this._actions = actions;
    return this;
  };

  FacebookRecommendationsFeedWidget.prototype.getActions = function()
  {
    return this._actions;
  };

  FacebookRecommendationsFeedWidget.prototype.appId = function(appId)
  {
    this._appId = appId;
    return this;
  };

  FacebookRecommendationsFeedWidget.prototype.getAppId = function()
  {
    return this._appId;
  };

  FacebookRecommendationsFeedWidget.prototype.colorScheme = function(colorScheme)
  {
    this._colorScheme = colorScheme;
    return this;
  };

  FacebookRecommendationsFeedWidget.prototype.getColorScheme = function()
  {
    return this._colorScheme;
  };

  FacebookRecommendationsFeedWidget.prototype.domain = function(domain)
  {
    this._domain = domain;
    return this;
  };

  FacebookRecommendationsFeedWidget.prototype.getDomain = function()
  {
    return this._domain;
  };

  FacebookRecommendationsFeedWidget.prototype.header = function(show)
  {
    this._header = show;
    return this;
  };

  FacebookRecommendationsFeedWidget.prototype.getHeader = function()
  {
    return this._header;
  };

  FacebookRecommendationsFeedWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  FacebookRecommendationsFeedWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  FacebookRecommendationsFeedWidget.prototype.linkTarget = function(target)
  {
    this._linkTarget = target;
    return this;
  };

  FacebookRecommendationsFeedWidget.prototype.getLinkTarget = function()
  {
    return this._linkTarget;
  };

  FacebookRecommendationsFeedWidget.prototype.maxAge = function(maxAge)
  {
    this._maxAge = maxAge;
    return this;
  };

  FacebookRecommendationsFeedWidget.prototype.getMaxAge = function()
  {
    return this._maxAge;
  };

  FacebookRecommendationsFeedWidget.prototype.trackLabel = function(label)
  {
    this._trackLabel = label;
    return this;
  };

  FacebookRecommendationsFeedWidget.prototype.getTrackLabel = function()
  {
    return this._trackLabel;
  };

  FacebookRecommendationsFeedWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  FacebookRecommendationsFeedWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  FacebookRecommendationsFeedWidget.prototype.toString = function()
  {
    return this.htmlTag("div",
    {
      "class" : "fb-recommendations",
      "data-action" : this.getActions().join(","),
      "data-app-id" : this.getAppId(),
      "data-colorscheme" : this.getColorScheme(),
      "data-header" : this.getHeader(),
      "data-height" : this.getHeight(),
      "data-linktarget" : this.getLinkTarget(),
      "data-max-age" : this.getMaxAge(),
      "data-ref" : this.getTrackLabel(),
      "data-site" : this.getDomain(),
      "data-width" : this.getWidth()
    });
  };

  factory.RecommendationsFeed = function()
  {
    return new FacebookRecommendationsFeedWidget();
  };
}(Widgets.Facebook()));