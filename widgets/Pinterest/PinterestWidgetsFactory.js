(function(widgets)
{
  var PinterestWidgetsFactory = function()
  {
  };

  PinterestWidgetsFactory.prototype.PinItButtonPinCountPosition = Object.freeze(
  {
    ABOVE : "above",
    BESIDE : "beside",
    NONE : "none"
  });

  PinterestWidgetsFactory.prototype.PinItButtonShape = Object.freeze(
  {
    RECTANGULAR : "rect",
    CIRCULAR : "round"
  });

  PinterestWidgetsFactory.prototype.PinItButtonSize = Object.freeze(
  {
    SMALL : "small",
    LARGE : "large"
  });

  PinterestWidgetsFactory.prototype.toString = function()
  {
    return "Pinterest Widgets Factory";
  };

  widgets._pinterest = new PinterestWidgetsFactory();
  widgets.Pinterest = function()
  {
    return this._pinterest;
  };

})(Widgets);