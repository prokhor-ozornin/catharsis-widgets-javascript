(function(factory)
{
  var GravatarImageUrlWidget = function()
  {
    this._parameters = {};
  };

  GravatarImageUrlWidget.prototype = new HtmlWidget();

  GravatarImageUrlWidget.prototype.defaultImage = function(image)
  {
    return this.parameter("default", image);
  };

  GravatarImageUrlWidget.prototype.extension = function(extension)
  {
    this._extension = extension;
    return this;
  };

  GravatarImageUrlWidget.prototype.getExtension = function()
  {
    return this._extension;
  };

  GravatarImageUrlWidget.prototype.forceDefault = function()
  {
    return this.parameter("forcedefault", "y");
  };

  GravatarImageUrlWidget.prototype.hash = function(hash)
  {
    this._hash = hash;
    return this;
  };

  GravatarImageUrlWidget.prototype.getHash = function()
  {
    return this._hash;
  };

  GravatarImageUrlWidget.prototype.parameter = function(name, value)
  {
    this._parameters[name] = value;
    return this;
  };

  GravatarImageUrlWidget.prototype.rating = function(rating)
  {
    return this.parameter("rating", rating);
  };

  GravatarImageUrlWidget.prototype.size = function(size)
  {
    return this.parameter("size", size);
  };

  GravatarImageUrlWidget.prototype.toString = function()
  {
    if (!this.getHash())
    {
      return "";
    }

    var query = this.urlQuery(this._parameters);
    return "http://www.gravatar.com/avatar/" + this.getHash() + (this.getExtension() ? "." + this.getExtension() : "") + (query ? "?" + query : "");
 };

  factory.imageUrl = function()
  {
    return new GravatarImageUrlWidget();
  };
}
(Widgets.gravatar()));