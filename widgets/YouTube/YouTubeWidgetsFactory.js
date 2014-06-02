(function(widgets)
{
  var YouTubeWidgetsFactory = function()
  {
  };

  YouTubeWidgetsFactory.prototype.toString = function()
  {
    return "YouTube Widgets Factory";
  };

  widgets._youtube = new YouTubeWidgetsFactory();

  widgets.youtube = function()
  {
    return this._youtube;
  };
})(Widgets);