(function(widgets)
{
  var RuTubeWidgetsFactory = function()
  {
  };

  RuTubeWidgetsFactory.prototype.toString = function()
  {
    return "RuTube Widgets Factory";
  };

  widgets._rutube = new RuTubeWidgetsFactory();

  widgets.rutube = function()
  {
    return this._rutube;
  };
})(Widgets);