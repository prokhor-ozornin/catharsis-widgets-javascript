(function(factory)
{
  var GoogleAnalyticsWidget = function()
  {
  };

  GoogleAnalyticsWidget.prototype = new HtmlWidget();

  GoogleAnalyticsWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  GoogleAnalyticsWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  GoogleAnalyticsWidget.prototype.domain = function(domain)
  {
    this._domain = domain;
    return this;
  };

  GoogleAnalyticsWidget.prototype.getDomain = function()
  {
    return this._domain;
  };

  GoogleAnalyticsWidget.prototype.toString = function()
  {
    if (!this.getAccount() || !this.getDomain())
    {
      return "";
    }

    return "<script type=\"text/javascript\">(function (i, s, o, g, r, a, m) {{ i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {{ (i[r].q = i[r].q || []).push(arguments) }}, i[r].l = 1 * new Date(); a = s.createElement(o), m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m) }})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga'); ga(\"create\", \"" + this.getAccount() + "\", \"" + this.getDomain() + "\"); ga(\"send\", \"pageview\"); </script>";
  };

  factory.analytics = function()
  {
    return new GoogleAnalyticsWidget();
  };
}
(Widgets.google()));