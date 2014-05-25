(function(widgets)
{
  var IntenseDebateWidgetsFactory = function()
  {
  };

  IntenseDebateWidgetsFactory.prototype.toString = function()
  {
    return "IntenseDebate Widgets Factory";
  };

  widgets._intensedebate = new IntenseDebateWidgetsFactory();
  widgets.IntenseDebate = function()
  {
    return this._intensedebate;
  };

})(Widgets);