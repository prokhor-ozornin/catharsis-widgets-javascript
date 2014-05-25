(function(factory)
{
  var MailRuGroupsWidget = function()
  {
    this._subscribers = true;
  };

  MailRuGroupsWidget.prototype = new HtmlWidget();

  MailRuGroupsWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  MailRuGroupsWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  MailRuGroupsWidget.prototype.backgroundColor = function(color)
  {
    this._backgroundColor = color;
    return this;
  };

  MailRuGroupsWidget.prototype.getBackgroundColor = function()
  {
    return this._backgroundColor;
  };

  MailRuGroupsWidget.prototype.buttonColor = function(color)
  {
    this._buttonColor = color;
    return this;
  };

  MailRuGroupsWidget.prototype.getButtonColor = function()
  {
    return this._buttonColor;
  };

  MailRuGroupsWidget.prototype.domain = function(domain)
  {
    this._domain = domain;
    return this;
  };

  MailRuGroupsWidget.prototype.getDomain = function()
  {
    return this._domain;
  };

  MailRuGroupsWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  MailRuGroupsWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  MailRuGroupsWidget.prototype.subscribers = function(show)
  {
    this._subscribers = show;
    return this;
  };

  MailRuGroupsWidget.prototype.getSubscribers = function()
  {
    return this._subscribers;
  };

  MailRuGroupsWidget.prototype.textColor = function(color)
  {
    this._textColor = color;
    return this;
  };

  MailRuGroupsWidget.prototype.getTextColor = function()
  {
    return this._textColor;
  };

  MailRuGroupsWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  MailRuGroupsWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  MailRuGroupsWidget.prototype.toString = function()
  {
    if (!this.getAccount() || !this.getWidth() || !this.getHeight())
    {
      return "";
    }

    var config =
    {
      "group" : this.getAccount(),
      "max_sub" : 50,
      "width" : this.getWidth(),
      "height" : this.getHeight(),
      "background" : this.getBackgroundColor(),
      "color" : this.getTextColor(),
      "button_background" : this.getButtonColor(),
      "domain" : this.getDomain()
    };
    if (this.getSubscribers())
    {
      config.show_subscribers = true;
    }

    return this.htmlTag("a",
    {
      "class" : "mrc__plugin_groups_widget",
      "href" : "http://connect.mail.ru/groups_widget?" + this.urlQuery(config),
      "rel" : JSON.stringify(config),
      "target" : "_blank"
    },
    "Группы");
  };

  factory.Groups = function()
  {
    return new MailRuGroupsWidget();
  };
}
(Widgets.MailRu()));