(function(factory)
{
  var FacebookInitializationWidget = function()
  {
  };

  FacebookInitializationWidget.prototype = new HtmlWidget();

  FacebookInitializationWidget.prototype.appId = function(appId)
  {
    this._appId = appId;
    return this;
  };

  FacebookInitializationWidget.prototype.getAppId = function()
  {
    return this._appId;
  };

  FacebookInitializationWidget.prototype.toString = function()
  {
    if (!this.getAppId())
    {
      return "";
    }

    return this.htmlTag("div", { "id" : "fb-root" })
           + "<script type=\"text/javascript\">(function(d, s, id) {{ var js, fjs = d.getElementsByTagName(s)[0]; if (d.getElementById(id)) return; js = d.createElement(s); js.id = id; js.src = \"//connect.facebook.net/en_US/all.js#xfbml=1&appId="
           + this.getAppId()
           + "\";  fjs.parentNode.insertBefore(js, fjs); }}(document, 'script', 'facebook-jssdk'));</script>";
  };

  factory.Initialize = function()
  {
    return new FacebookInitializationWidget();
  };
}(Widgets.Facebook()));