(function(factory)
{
  var FacebookFacepileWidget = function()
  {
    this._actions = [];
  };

  FacebookFacepileWidget.prototype = new HtmlWidget();

  FacebookFacepileWidget.prototype.actions = function(actions)
  {
    this._actions = actions;
    return this;
  };

  FacebookFacepileWidget.prototype.getActions = function()
  {
    return this._actions;
  };

  FacebookFacepileWidget.prototype.colorScheme = function(colorScheme)
  {
    this._colorScheme = colorScheme;
    return this;
  };

  FacebookFacepileWidget.prototype.getColorScheme = function()
  {
    return this._colorScheme;
  };

  FacebookFacepileWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  FacebookFacepileWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  FacebookFacepileWidget.prototype.maxRows = function(maxRows)
  {
    this._maxRows = maxRows;
    return this;
  };

  FacebookFacepileWidget.prototype.getMaxRows = function()
  {
    return this._maxRows;
  };

  FacebookFacepileWidget.prototype.photoSize = function(size)
  {
    this._photoSize = size;
    return this;
  };

  FacebookFacepileWidget.prototype.getPhotoSize = function()
  {
    return this._photoSize;
  };

  FacebookFacepileWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  FacebookFacepileWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  FacebookFacepileWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  FacebookFacepileWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  FacebookFacepileWidget.prototype.toString = function()
  {
    return this.htmlTag("div",
    {
      "class" : 'fb-facepile',
      "data-action" : this.getActions().join(","),
      "data-colorscheme" : this.getColorScheme(),
      "data-height" : this.getHeight(),
      "data-href" : this.getUrl() || document.URL,
      "data-max-rows" : this.getMaxRows(),
      "data-size" : this.getPhotoSize(),
      "data-width" : this.getWidth()
    });
  };

  factory.Facepile = function()
  {
    return new FacebookFacepileWidget();
  };
}(Widgets.Facebook()));