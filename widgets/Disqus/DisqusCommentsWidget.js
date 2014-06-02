(function(factory)
{
  var DisqusCommentsWidget = function()
  {
  };

  DisqusCommentsWidget.prototype = new HtmlWidget();

  DisqusCommentsWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  DisqusCommentsWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  DisqusCommentsWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    return "<div id=\"disqus_thread\"></div><script type=\"text/javascript\">var disqus_shortname = \"" + this.getAccount() + "\";</script>"
           + "<noscript>Please enable JavaScript to view the <a href=\"http://disqus.com/?ref_noscript\">comments powered by Disqus.</a></noscript><a href=\"http://disqus.com\" class=\"dsq-brlink\">comments powered by <span class=\"logo-disqus\">Disqus</span></a>";
  };

  factory.comments = function()
  {
    return new DisqusCommentsWidget();
  };
}
(Widgets.disqus()));