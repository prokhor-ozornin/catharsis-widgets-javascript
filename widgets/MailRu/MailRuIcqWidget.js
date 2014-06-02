(function(factory)
{
  var MailRuIcqWidget = function()
  {
  };

  MailRuIcqWidget.prototype = new HtmlWidget();

  MailRuIcqWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  MailRuIcqWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  MailRuIcqWidget.prototype.language = function(language)
  {
    this._language = language;
    return this;
  };

  MailRuIcqWidget.prototype.getLanguage = function()
  {
    return this._language;
  };

  MailRuIcqWidget.prototype.toString = function()
  {
    return this.javascriptLink("http://c.icq.com/siteim/icqbar/js/partners/initbar_" + (this.getLanguage() || "ru") + ".js") + (this.getAccount() ? this.javascriptInline("window.ICQ = {siteOwner:'" + this.getAccount() + "'};") : "");
  };

  factory.icq = function()
  {
    return new MailRuIcqWidget();
  };
}
(Widgets.mailru()));