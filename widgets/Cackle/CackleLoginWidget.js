(function(factory)
{
  var CackleLoginWidget = function()
  {
  };

  CackleLoginWidget.prototype = new HtmlWidget();

  CackleLoginWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  CackleLoginWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  CackleLoginWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    var config =
    {
      "widget" : "Login",
      "id" : this.getAccount()
    };

    return "<div id=\"mc-login\"></div>"
           + this.javascriptInline("cackle_widget = window.cackle_widget || []; cackle_widget.push(" + JSON.stringify(config) + ";");
  };

  factory.Login = function()
  {
    return new CackleLoginWidget();
  };
}
(Widgets.Cackle()));