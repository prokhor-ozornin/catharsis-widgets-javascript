(function(factory)
{
  var TwitterFollowButtonWidget = function()
  {
  };

  TwitterFollowButtonWidget.prototype = new HtmlWidget();

  TwitterFollowButtonWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  TwitterFollowButtonWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  TwitterFollowButtonWidget.prototype.alignment = function(alignment)
  {
    this._alignment = alignment;
    return this;
  };

  TwitterFollowButtonWidget.prototype.getAlignment = function()
  {
    return this._alignment;
  };

  TwitterFollowButtonWidget.prototype.counter = function(show)
  {
    this._counter = show;
    return this;
  };

  TwitterFollowButtonWidget.prototype.getCounter = function()
  {
    return this._counter;
  };

  TwitterFollowButtonWidget.prototype.language = function(language)
  {
    this._language = language;
    return this;
  };

  TwitterFollowButtonWidget.prototype.getLanguage = function()
  {
    return this._language;
  };

  TwitterFollowButtonWidget.prototype.screenName = function(screenName)
  {
    this._screenName = screenName;
    return this;
  };

  TwitterFollowButtonWidget.prototype.getScreenName = function()
  {
    return this._screenName;
  };

  TwitterFollowButtonWidget.prototype.size = function(size)
  {
    this._size = size;
    return this;
  };

  TwitterFollowButtonWidget.prototype.getSize = function()
  {
    return this._size;
  };

  TwitterFollowButtonWidget.prototype.suggestions = function(enabled)
  {
    this._suggestions = enabled;
    return this;
  };

  TwitterFollowButtonWidget.prototype.getSuggestions = function()
  {
    return this._suggestions;
  };

  TwitterFollowButtonWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  TwitterFollowButtonWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  TwitterFollowButtonWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    return this.htmlTag("a",
    {
      "class" : "twitter-follow-button",
      "data-align" : this.getAlignment(),
      "data-dnt" : this.getSuggestions() !== undefined ? !this.getSuggestions() : null,
      "data-lang" : this.getLanguage(),
      "data-show-count" : this.getCounter(),
      "data-show-screen-name" : this.getScreenName(),
      "data-size" : this.getSize(),
      "data-width" : this.getWidth(),
      "href" : "https://twitter.com/" + this.getAccount()
    });
  };

  factory.FollowButton = function()
  {
    return new TwitterFollowButtonWidget();
  };
}
(Widgets.Twitter()));