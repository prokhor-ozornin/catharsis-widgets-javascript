(function(factory)
{
  var CackleCommentsWidget = function()
  {
  };

  CackleCommentsWidget.prototype = new HtmlWidget();

  CackleCommentsWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  CackleCommentsWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  CackleCommentsWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    var config =
    {
      "widget" : "Comment",
      "id" : this.getAccount()
    };

    return "<div id=\"mc-container\"></div>"
           + this.javascriptInline("cackle_widget = window.cackle_widget || []; cackle_widget.push(" + JSON.stringify(config) + ");")
           + "<a id=\"mc-link\" href=\"http://cackle.me\">Социальные комментарии <b style=\"color:#4FA3DA\">Cackl</b><b style=\"color:#F65077\">e</b></a>";
  };

  factory.Comments = function()
  {
    return new CackleCommentsWidget();
  };
}
(Widgets.Cackle()));