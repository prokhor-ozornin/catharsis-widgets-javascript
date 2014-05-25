(function(factory)
{
  function VkontakteCommentsWidget()
  {
    this._attach = [];
    this._limit = factory.CommentsLimit.LIMIT_5;
  };

  VkontakteCommentsWidget.prototype = new HtmlWidget();

  VkontakteCommentsWidget.prototype.attach = function(types)
  {
    if (types instanceof Array)
    {
      this._attach = types;
    }
    else
    {
      this._attach.push(types);
    }

    return this;
  };

  VkontakteCommentsWidget.prototype.getAttach = function()
  {
    return this._attach;
  };

  VkontakteCommentsWidget.prototype.autoPublish = function(enabled)
  {
    this._autoPublish = enabled;
    return this;
  };

  VkontakteCommentsWidget.prototype.getAutoPublish = function()
  {
    return this._autoPublish;
  };

  VkontakteCommentsWidget.prototype.autoUpdate = function(enabled)
  {
    this._autoUpdate = enabled;
    return this;
  };

  VkontakteCommentsWidget.prototype.getAutoUpdate = function()
  {
    return this._autoUpdate;
  };

  VkontakteCommentsWidget.prototype.elementId = function(id)
  {
    this._elementId = id;
    return this;
  };

  VkontakteCommentsWidget.prototype.getElementId = function()
  {
    return this._elementId;
  };

  VkontakteCommentsWidget.prototype.limit = function(limit)
  {
    this._limit = limit;
    return this;
  };

  VkontakteCommentsWidget.prototype.getLimit = function()
  {
    return this._limit;
  };

  VkontakteCommentsWidget.prototype.mini = function(enabled)
  {
    this._mini = enabled;
    return this;
  };

  VkontakteCommentsWidget.prototype.getMini = function()
  {
    return this._mini;
  };

  VkontakteCommentsWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  VkontakteCommentsWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  VkontakteCommentsWidget.prototype.toString = function()
  {
    var config =
    {
      "limit" : this.getLimit(),
      "attach" : this.getAttach() ? this.getAttach().join(",") : false,
      "width" : this.getWidth()
    };
    if (this.getAutoPublish() !== undefined)
    {
      config.autoPublish = this.getAutoPublish() ? 1 : 0;
    }
    if (this.getAutoUpdate() !== undefined)
    {
      config.norealtime = this.getAutoUpdate() ? 0 : 1;
    }
    if (this.getMini() !== undefined)
    {
      config.mini = this.getMini() ? 1 : 0;
    }

    var elementId = this.getElementId() || "vk_comments";

    return this.htmlTag("div", { "id" : elementId }) + this.javascriptInline("VK.Widgets.Comments(\"" + elementId + "\", " + JSON.stringify(config) + ");");
  };

  factory.Comments = function()
  {
    return new VkontakteCommentsWidget();
  };
}
(Widgets.Vkontakte()));