(function(factory)
{
  var IntenseDebateLinkWidget = function()
  {
  };

  IntenseDebateLinkWidget.prototype = new HtmlWidget();

  IntenseDebateLinkWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  IntenseDebateLinkWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  IntenseDebateLinkWidget.prototype.postId = function(postId)
  {
    this._postId = postId;
    return this;
  };

  IntenseDebateLinkWidget.prototype.getPostId = function()
  {
    return this._postId;
  };

  IntenseDebateLinkWidget.prototype.postTitle = function(postTitle)
  {
    this._postTitle = postTitle;
    return this;
  };

  IntenseDebateLinkWidget.prototype.getPostTitle = function()
  {
    return this._postTitle;
  };

  IntenseDebateLinkWidget.prototype.postUrl = function(postUrl)
  {
    this._postUrl = postUrl;
    return this;
  };

  IntenseDebateLinkWidget.prototype.getPostUrl = function()
  {
    return this._postUrl;
  };

  IntenseDebateLinkWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    return "<script type=\"text/javascript\">var idcomments_acct = \"" + this.getAccount() + "\"; var idcomments_post_id = \"" + this.getPostId() + "\"; var idcomments_post_url = \"" + this.getPostUrl() + "\"; var idcomments_post_title = \"" + this.getPostTitle() + "\";</script><span id=\"IDCommentsPostTitle\" style=\"display:none\"></span><script src=\"http://www.intensedebate.com/js/genericLinkWrapperV2.js\" type=\"text/javascript\"></script>";
  };

  factory.Link = function()
  {
    return new IntenseDebateLinkWidget();
  };
}
(Widgets.IntenseDebate()));