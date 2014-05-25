(function(widgets)
{
  var CackleWidgetsFactory = function()
  {
  };

  CackleWidgetsFactory.prototype.toString = function()
  {
    return "Cackle Widgets Factory";
  };

  widgets._cackle = new CackleWidgetsFactory();
  widgets.Cackle = function()
  {
    return this._cackle;
  };

})(Widgets);