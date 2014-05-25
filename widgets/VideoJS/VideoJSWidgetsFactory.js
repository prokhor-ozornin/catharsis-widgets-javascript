(function(widgets)
{
  var VideoJSWidgetsFactory = function()
  {
  };


  VideoJSWidgetsFactory.prototype.toString = function()
  {
    return "VideoJS Widgets Factory";
  };

  widgets._videojs = new VideoJSWidgetsFactory();
  widgets.VideoJS = function()
  {
    return this._videojs;
  };

})(Widgets);