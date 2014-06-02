(function(widgets)
{
  var LiveJournalWidgetsFactory = function()
  {
  };

  LiveJournalWidgetsFactory.prototype.toString = function()
  {
    return "LiveJournal Widgets Factory";
  };

  widgets._livejournal = new LiveJournalWidgetsFactory();

  widgets.livejournal = function()
  {
    return this._livejournal;
  };
})(Widgets);