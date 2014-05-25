(function(factory)
{
  var CackleCommentsCountWidget = function()
  {
  };

  CackleCommentsCountWidget.prototype = new HtmlWidget();

  CackleCommentsCountWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  CackleCommentsCountWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  CackleCommentsCountWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    var config =
    {
      "widget" : "CommentCount",
      "id" : this.getAccount()
    };

    return this.javascriptInline("cackle_widget = window.cackle_widget || []; cackle_widget.push(" + JSON.stringify(config) + ");");
  };

  factory.CommentsCount = function()
  {
    return new CackleCommentsCountWidget();
  };
}
(Widgets.Cackle()));