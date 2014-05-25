(function(factory)
{
  function VkontakteLikeButtonWidget()
  {
  };

  VkontakteLikeButtonWidget.prototype = new HtmlWidget();

  VkontakteLikeButtonWidget.prototype.description = function(description)
  {
    this._description = description;
    return this;
  };

  VkontakteLikeButtonWidget.prototype.getDescription = function()
  {
    return this._description;
  };

  VkontakteLikeButtonWidget.prototype.elementId = function(id)
  {
    this._elementId = id;
    return this;
  };

  VkontakteLikeButtonWidget.prototype.getElementId = function()
  {
    return this._elementId;
  };

  VkontakteLikeButtonWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  VkontakteLikeButtonWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  VkontakteLikeButtonWidget.prototype.image = function(url)
  {
    this._image = url;
    return this;
  };

  VkontakteLikeButtonWidget.prototype.getImage = function()
  {
    return this._image;
  };

  VkontakteLikeButtonWidget.prototype.layout = function(layout)
  {
    this._layout = layout;
    return this;
  };

  VkontakteLikeButtonWidget.prototype.getLayout = function()
  {
    return this._layout;
  };

  VkontakteLikeButtonWidget.prototype.text = function(text)
  {
    this._text = text;
    return this;
  };

  VkontakteLikeButtonWidget.prototype.getText = function()
  {
    return this._text;
  };

  VkontakteLikeButtonWidget.prototype.title = function(title)
  {
    this._title = title;
    return this;
  };

  VkontakteLikeButtonWidget.prototype.getTitle = function()
  {
    return this._title;
  };

  VkontakteLikeButtonWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  VkontakteLikeButtonWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  VkontakteLikeButtonWidget.prototype.verb = function(verb)
  {
    this._verb = verb;
    return this;
  };

  VkontakteLikeButtonWidget.prototype.getVerb = function()
  {
    return this._verb;
  };

  VkontakteLikeButtonWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  VkontakteLikeButtonWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  VkontakteLikeButtonWidget.prototype.toString = function()
  {
    var config =
    {
      "type" : this.getLayout(),
      "width" : this.getWidth(),
      "pageTitle" : this.getTitle(),
      "pageDescription" : this.getDescription(),
      "pageUrl" : this.getUrl(),
      "pageImage" : this.getImage(),
      "text" : this.getText(),
      "height" : this.getHeight(),
      "verb" : this.getVerb()
    };

    var elementId = this.getElementId() || "vk_like";

    return this.htmlTag("div", { "id" : elementId }) + this.javascriptInline("VK.Widgets.Like(\"" + elementId + "\", " + JSON.stringify(config) + ");");
  };

  factory.LikeButton = function()
  {
    return new VkontakteLikeButtonWidget();
  };
}
(Widgets.Vkontakte()));