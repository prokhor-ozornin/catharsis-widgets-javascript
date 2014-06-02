(function(factory)
{
  var LiveJournalLikeButtonWidget = function()
  {
  };

  LiveJournalLikeButtonWidget.prototype.toString = function()
  {
    return "<lj-like buttons=\"repost\"/>";
  };

  factory.likeButton = function()
  {
    return new LiveJournalLikeButtonWidget();
  };
}
(Widgets.livejournal()));