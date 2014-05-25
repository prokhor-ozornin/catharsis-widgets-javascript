(function(factory)
{
  var FacebookCommentsWidget = function()
  {
  };

  FacebookCommentsWidget.prototype = new HtmlWidget();

  FacebookCommentsWidget.prototype.colorScheme = function(colorScheme)
  {
    this._colorScheme = colorScheme;
    return this;
  };

  FacebookCommentsWidget.prototype.getColorScheme = function()
  {
    return this._colorScheme;
  };

  FacebookCommentsWidget.prototype.mobile = function(mobile)
  {
    this._mobile = mobile;
    return this;
  };

  FacebookCommentsWidget.prototype.getMobile = function()
  {
    return this._mobile;
  };

  FacebookCommentsWidget.prototype.order = function(order)
  {
    this._order = order;
    return this;
  };

  FacebookCommentsWidget.prototype.getOrder = function()
  {
    return this._order;
  };

  FacebookCommentsWidget.prototype.posts = function(posts)
  {
    this._posts = posts;
    return this;
  };

  FacebookCommentsWidget.prototype.getPosts = function()
  {
    return this._posts;
  };

  FacebookCommentsWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  FacebookCommentsWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  FacebookCommentsWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  FacebookCommentsWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  FacebookCommentsWidget.prototype.toString = function()
  {
    return this.htmlTag("div",
    {
      "class" : "fb-comments",
      "data-colorscheme" : this.getColorScheme(),
      "data-href" : this.getUrl(),
      "data-mobile" : this.getMobile(),
      "data-num-posts" : this.getPosts(),
      "data-order-by" : this.getOrder(),
      "data-width" : this.getWidth()
    });
  };

  factory.Comments = function()
  {
    return new FacebookCommentsWidget();
  };
})(Widgets.Facebook());