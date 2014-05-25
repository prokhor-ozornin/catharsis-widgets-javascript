(function(widgets)
{
  var VimeoWidgetsFactory = function()
  {
  };

  VimeoWidgetsFactory.prototype.toString = function()
  {
    return "Vimeo Widgets Factory";
  };

  widgets._vimeo = new VimeoWidgetsFactory();
  widgets.Vimeo = function()
  {
    return this._vimeo;
  };

})(Widgets);