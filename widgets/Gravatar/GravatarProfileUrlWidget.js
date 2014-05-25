(function(factory)
{
  var GravatarProfileUrlWidget = function()
  {
    this.parameters = {};
  };

  GravatarProfileUrlWidget.prototype = new HtmlWidget();

  GravatarProfileUrlWidget.prototype.format = function(format)
  {
    this._format = format;
    return this;
  };

  GravatarProfileUrlWidget.prototype.getFormat = function()
  {
    return this._format;
  };

  GravatarProfileUrlWidget.prototype.hash = function(hash)
  {
    this._hash = hash;
    return this;
  };

  GravatarProfileUrlWidget.prototype.getHash = function()
  {
    return this._hash;
  };

  GravatarProfileUrlWidget.prototype.json = function(callback)
  {
    if (callback !== undefined)
    {
      this.parameter("callback", callback);
    }

    return this.format("json");
  };

  GravatarProfileUrlWidget.prototype.parameter = function(name, value)
  {
    this._parameters[name] = value;
    return this;
  };

  GravatarProfileUrlWidget.prototype.php = function()
  {
    return this.format("php");
  };

  GravatarProfileUrlWidget.prototype.qr = function(size)
  {
    if (size !== undefined)
    {
      this.parameter("size", size);
    }

    return this.format("qr");
  };

  GravatarProfileUrlWidget.prototype.vcf = function()
  {
    return this.format("vcf");
  };

  GravatarProfileUrlWidget.prototype.xml = function()
  {
    return this.format("xml");
  };

  GravatarProfileUrlWidget.prototype.toString = function()
  {
    if (!this.getHash())
    {
      return "";
    }

    var query = this.urlQuery(this._parameters);
    return "http://www.gravatar.com/" + this.getHash() + (this.getFormat() ? "." + this.getFormat() : "") + (query ? "?" + query : "");
  };

  factory.ProfileUrl = function()
  {
    return new GravatarProfileUrlWidget();
  };
}
(Widgets.Gravatar()));