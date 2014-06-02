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

  widgets.cackle = function()
  {
    return this._cackle;
  };
})(Widgets);