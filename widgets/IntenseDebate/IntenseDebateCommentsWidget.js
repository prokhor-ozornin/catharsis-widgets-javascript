(function(factory)
{
  var IntenseDebateCommentsWidget = function()
  {
  };

  IntenseDebateCommentsWidget.prototype = new HtmlWidget();

  IntenseDebateCommentsWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  IntenseDebateCommentsWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  IntenseDebateCommentsWidget.prototype.postId = function(postId)
  {
    this._postId = postId;
    return this;
  };

  IntenseDebateCommentsWidget.prototype.getPostId = function()
  {
    return this._postId;
  };

  IntenseDebateCommentsWidget.prototype.postTitle = function(postTitle)
  {
    this._postTitle = postTitle;
    return this;
  };

  IntenseDebateCommentsWidget.prototype.getPostTitle = function()
  {
    return this._postTitle;
  };

  IntenseDebateCommentsWidget.prototype.postUrl = function(postUrl)
  {
    this._postUrl = postUrl;
    return this;
  };

  IntenseDebateCommentsWidget.prototype.getPostUrl = function()
  {
    return this._postUrl;
  };

  IntenseDebateCommentsWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    return "<script type=\"text/javascript\">var idcomments_acct = \"" + this.getAccount() + "\"; var idcomments_post_id = \"" + this.getPostId() + "\"; var idcomments_post_url = \"" + this.getPostUrl() + "\"; var idcomments_post_title = \"" + this.getPostTitle() + "\";</script><span id=\"IDCommentsPostTitle\" style=\"display:none\"></span><script src=\"http://www.intensedebate.com/js/genericCommentWrapperV2.js\" type=\"text/javascript\"></script>";
  };

  factory.Comments = function()
  {
    return new IntenseDebateCommentsWidget();
  };
}
(Widgets.IntenseDebate()));