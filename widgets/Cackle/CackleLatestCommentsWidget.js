(function(factory)
{
  var CackleLatestCommentsWidget = function()
  {
    this._avatarSize = 32;
    this._max = 5;
    this._textSize = 150;
    this._titleSize = 40;
  };

  CackleLatestCommentsWidget.prototype = new HtmlWidget();

  CackleLatestCommentsWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  CackleLatestCommentsWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  CackleLatestCommentsWidget.prototype.avatarSize = function(size)
  {
    this._avatarSize = size;
    return this;
  };

  CackleLatestCommentsWidget.prototype.getAvatarSize = function()
  {
    return this._avatarSize;
  };

  CackleLatestCommentsWidget.prototype.max = function(max)
  {
    this._max = max;
    return this;
  };

  CackleLatestCommentsWidget.prototype.getMax = function()
  {
    return this._max;
  };

  CackleLatestCommentsWidget.prototype.textSize = function(size)
  {
    this._textSize = size;
    return this;
  };

  CackleLatestCommentsWidget.prototype.getTextSize = function()
  {
    return this._textSize;
  };

  CackleLatestCommentsWidget.prototype.titleSize = function(size)
  {
    this._titleSize = size;
    return this;
  };

  CackleLatestCommentsWidget.prototype.getTitleSize = function()
  {
    return this._titleSize;
  };

  CackleLatestCommentsWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    var config =
    {
      "widget" : "CommentRecent",
      "id" : this.getAccount(),
      "size" : this.getMax(),
      "avatarSize" : this.getAvatarSize(),
      "textSize" : this.getTextSize(),
      "titleSize" : this.getTitleSize()
    };

      return "<div id=\"mc-last\"></div><a id=\"mc-link\" href=\"http://cackle.me\">Социальные комментарии <b style=\"color:#4FA3DA\">Cackl</b><b style=\"color:#F65077\">e</b></a>"
             + this.javascriptInline("cackle_widget = window.cackle_widget || []; cackle_widget.push(" + JSON.stringify(config) + ");");
  };

  factory.latestComments = function()
  {
    return new CackleLatestCommentsWidget();
  };
}(Widgets.cackle()));