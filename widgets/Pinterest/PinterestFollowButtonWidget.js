(function(factory)
{
  var PinterestFollowButtonWidget = function()
  {
    this._label = "Follow";
  };

  PinterestFollowButtonWidget.prototype = new HtmlWidget();

  PinterestFollowButtonWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  PinterestFollowButtonWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  PinterestFollowButtonWidget.prototype.label = function(label)
  {
    this._label = label;
    return this;
  };

  PinterestFollowButtonWidget.prototype.getLabel = function()
  {
    return this._label;
  };

  PinterestFollowButtonWidget.prototype.toString = function()
  {
    if (!this.getAccount() || !this.getLabel())
    {
      return "";
    }

    return this.htmlTag("a",
    {
      "data-pin-do" : "buttonFollow",
      "href" : "http://www.pinterest.com/" + this.getAccount()
    },
    this.getLabel());
  };

  factory.followButton = function()
  {
    return new PinterestFollowButtonWidget();
  };
}
(Widgets.pinterest()));