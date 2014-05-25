(function(factory)
{
  var VkontakteVideoWidget = function()
  {
  };

  VkontakteVideoWidget.prototype = new HtmlWidget();

  VkontakteVideoWidget.prototype.hash = function(hash)
  {
    this._hash = hash;
    return this;
  };

  VkontakteVideoWidget.prototype.getHash = function()
  {
    return this._hash;
  };

  VkontakteVideoWidget.prototype.hd = function(enabled)
  {
    this._hd = enabled;
    return this;
  };

  VkontakteVideoWidget.prototype.getHd = function()
  {
    return this._hd;
  };

  VkontakteVideoWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  VkontakteVideoWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  VkontakteVideoWidget.prototype.id = function(id)
  {
    this._id = id;
    return this;
  };

  VkontakteVideoWidget.prototype.getId = function()
  {
    return this._id;
  };

  VkontakteVideoWidget.prototype.user = function(user)
  {
    this._user = user;
    return this;
  };

  VkontakteVideoWidget.prototype.getUser = function()
  {
    return this._user;
  };

  VkontakteVideoWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  VkontakteVideoWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  VkontakteVideoWidget.prototype.toString = function()
  {
    if (!this.getId() || !this.getUser() || !this.getHash() || !this.getWidth() || !this.getHeight())
    {
      return "";
    }

    return this.htmlTag("iframe",
    {
      "allowfullscreen" : true,
      "frameborder" : 0,
      "height" : this.getHeight(),
      "mozallowfullscreen" : true,
      "src" : "http://vk.com/video_ext.php?oid=" + this.getUser() + "&id=" + this.getId() + "&hash=" + this.getHash() + "&hd=" + (this.getHd() ? 1 : 0),
      "webkitallowfullscreen" : true,
      "width" : this.getWidth()
    });
  };

  factory.Video = function()
  {
    return new VkontakteVideoWidget();
  };
}
(Widgets.Vkontakte()));