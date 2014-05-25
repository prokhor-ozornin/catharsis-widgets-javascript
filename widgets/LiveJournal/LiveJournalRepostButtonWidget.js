(function(factory)
{
  var LiveJournalRepostButtonWidget = function()
  {
  };

  LiveJournalRepostButtonWidget.prototype = new HtmlWidget();

  LiveJournalRepostButtonWidget.prototype.text = function(text)
  {
    this._text = text;
    return this;
  };

  LiveJournalRepostButtonWidget.prototype.getText = function()
  {
     return this._text;
  };

  LiveJournalRepostButtonWidget.prototype.title = function(title)
  {
    this._title = title;
    return this;
  };

  LiveJournalRepostButtonWidget.prototype.getTitle = function()
  {
    return this._title;
  };

  LiveJournalRepostButtonWidget.prototype.toString = function()
  {
    return this.htmlTag("lj-repost",
    {
      "button" : this.getTitle()
    },
    this.getText());
  };

  factory.RepostButton = function()
  {
    return new LiveJournalRepostButtonWidget();
  };
}
(Widgets.LiveJournal()));