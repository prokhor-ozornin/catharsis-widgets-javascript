(function(factory)
{
  var FacebookActivityFeedWidget = function()
  {
    this._actions = [];
  };

  FacebookActivityFeedWidget.prototype = new HtmlWidget();

  FacebookActivityFeedWidget.prototype.actions = function(actions)
  {
    this._actions = actions;
    return this;
  };

  FacebookActivityFeedWidget.prototype.getActions = function()
  {
    return this._actions;
  };

  FacebookActivityFeedWidget.prototype.appId = function(appId)
  {
    this._appId = appId;
    return this;
  };

  FacebookActivityFeedWidget.prototype.getAppId = function()
  {
    return this._appId;
  };

  FacebookActivityFeedWidget.prototype.colorScheme = function(colorScheme)
  {
    this._colorScheme = colorScheme;
    return this;
  };

  FacebookActivityFeedWidget.prototype.getColorScheme = function()
  {
    return this._colorScheme;
  };

  FacebookActivityFeedWidget.prototype.domain = function(domain)
  {
    this._domain = domain;
    return this;
  };

  FacebookActivityFeedWidget.prototype.getDomain = function()
  {
    return this._domain;
  };

  FacebookActivityFeedWidget.prototype.header = function(show)
  {
    this._header = show;
    return this;
  };

  FacebookActivityFeedWidget.prototype.getHeader = function()
  {
    return this._header;
  };

  FacebookActivityFeedWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  FacebookActivityFeedWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  FacebookActivityFeedWidget.prototype.linkTarget = function(target)
  {
    this._linkTarget = target;
    return this;
  };

  FacebookActivityFeedWidget.prototype.getLinkTarget = function()
  {
    return this._linkTarget;
  };

  FacebookActivityFeedWidget.prototype.maxAge = function(maxAge)
  {
    this._maxAge = maxAge;
    return this;
  };

  FacebookActivityFeedWidget.prototype.getMaxAge = function()
  {
    return this._maxAge;
  };

  FacebookActivityFeedWidget.prototype.recommendations = function(show)
  {
    this._recommendations = show;
    return this;
  };

  FacebookActivityFeedWidget.prototype.getRecommendations = function()
  {
    return this._recommendations;
  };

  FacebookActivityFeedWidget.prototype.trackLabel = function(label)
  {
    this._trackLabel = label;
    return this;
  };

  FacebookActivityFeedWidget.prototype.getTrackLabel = function()
  {
    return this._trackLabel;
  };

  FacebookActivityFeedWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  FacebookActivityFeedWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  FacebookActivityFeedWidget.prototype.toString = function()
  {
    return this.htmlTag("div",
    {
      "class" : "fb-activity",
      "data-action" : this.getActions().join(","),
      "data-app-id" : this.getAppId(),
      "data-colorscheme" : this.getColorScheme(),
      "data-header" : this.getHeader(),
      "data-height" : this.getHeight(),
      "data-linktarget" : this.getLinkTarget(),
      "data-max-age" : this.getMaxAge(),
      "data-recommendations" : this.getRecommendations(),
      "data-ref" : this.getTrackLabel(),
      "data-site" : this.getDomain(),
      "data-width" : this.getWidth()
    });
  };

  factory.ActivityFeed = function()
  {
    return new FacebookActivityFeedWidget();
  };
})(Widgets.Facebook());