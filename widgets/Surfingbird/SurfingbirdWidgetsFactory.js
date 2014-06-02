(function(widgets)
{
  var SurfingbirdWidgetsFactory = function()
  {
  };

  SurfingbirdWidgetsFactory.prototype.SurfButtonColor = Object.freeze(
  {
    BLUE : "blue",
    GREEN : "green",
    GRAY : "gray"
  });

  SurfingbirdWidgetsFactory.prototype.SurfButtonLayout = Object.freeze(
  {
    COMMON : "common",
    MICRO : "micro",
    VERTICAL : "vert"
  });

  SurfingbirdWidgetsFactory.prototype.toString = function()
  {
    return "Surfingbird Widgets Factory";
  };

  widgets._surfingbird = new SurfingbirdWidgetsFactory();

  widgets.surfingbird = function()
  {
    return this._surfingbird;
  };
})(Widgets);