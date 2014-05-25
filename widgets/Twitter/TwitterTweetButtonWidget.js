(function(factory)
{
  function TwitterTweetButtonWidget()
  {
    this._relatedAccounts = [];
    this._tags = [];
  };

  TwitterTweetButtonWidget.prototype = new HtmlWidget();

  TwitterTweetButtonWidget.prototype.counterPosition = function(position)
  {
    this._counterPosition = position;
    return this;
  };

  TwitterTweetButtonWidget.prototype.getCounterPosition = function()
  {
    return this._counterPosition;
  };

  TwitterTweetButtonWidget.prototype.countUrl = function(url)
  {
    this._countUrl = url;
    return this;
  };

  TwitterTweetButtonWidget.prototype.getCountUrl = function()
  {
    return this._countUrl;
  };

  TwitterTweetButtonWidget.prototype.hashTags = function(tags)
  {
    this._tags = tags;
    return this;
  };

  TwitterTweetButtonWidget.prototype.getHashTags = function()
  {
    return this._tags;
  };

  TwitterTweetButtonWidget.prototype.language = function(language)
  {
    this._language = language;
    return this;
  };

  TwitterTweetButtonWidget.prototype.getLanguage = function()
  {
    return this._language;
  };

  TwitterTweetButtonWidget.prototype.relatedAccounts = function(accounts)
  {
    this._relatedAccounts = accounts;
    return this;
  };

  TwitterTweetButtonWidget.prototype.getRelatedAccounts = function()
  {
    return this._relatedAccounts;
  };

  TwitterTweetButtonWidget.prototype.size = function(size)
  {
    this._size = size;
    return this;
  };

  TwitterTweetButtonWidget.prototype.getSize = function()
  {
    return this._size;
  };

  TwitterTweetButtonWidget.prototype.suggestions = function(enabled)
  {
    this._suggestions = enabled;
    return this;
  };

  TwitterTweetButtonWidget.prototype.getSuggestions = function()
  {
    return this._suggestions;
  };

  TwitterTweetButtonWidget.prototype.text = function(text)
  {
    this._text = text;
    return this;
  };

  TwitterTweetButtonWidget.prototype.getText = function()
  {
    return this._text;
  };

  TwitterTweetButtonWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  TwitterTweetButtonWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  TwitterTweetButtonWidget.prototype.via = function(via)
  {
    this._via = via;
    return this;
  };

  TwitterTweetButtonWidget.prototype.getVia = function()
  {
    return this._via;
  };

  TwitterTweetButtonWidget.prototype.toString = function()
  {
    return this.htmlTag("a",
    {
      "class" : this.getHashTags().length ? "twitter-hashtag-button" : "twitter-share-button",
      "data-count" : this.getCounterPosition(),
      "data-counturl" : this.getCountUrl(),
      "data-dnt" : this.getSuggestions() !== undefined ? !this.getSuggestions() : null,
      "data-hashtags" : this.getHashTags().join(" "),
      "data-lang" : this.getLanguage(),
      "data-related" : this.getRelatedAccounts().join(","),
      "data-size" : this.getSize(),
      "data-text" : this.getText(),
      "data-url" : this.getUrl(),
      "data-via" : this.getVia(),
      "href" : "https://twitter.com/share"
    });
  };

  factory.TweetButton = function()
  {
    return new TwitterTweetButtonWidget();
  };
}
(Widgets.Twitter()));