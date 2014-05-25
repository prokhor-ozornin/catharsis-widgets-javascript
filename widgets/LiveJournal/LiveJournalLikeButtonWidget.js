(function(factory)
{
  var LiveJournalLikeButtonWidget = function()
  {
  };

  LiveJournalLikeButtonWidget.prototype.toString = function()
  {
    return "<lj-like buttons=\"repost\"/>";
  };

  factory.LikeButton = function()
  {
    return new LiveJournalLikeButtonWidget();
  };
}
(Widgets.LiveJournal()));