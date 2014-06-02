(function(widgets)
{
  var GoogleWidgetsFactory = function()
  {
  };

  GoogleWidgetsFactory.prototype.PlusOneButtonAlignment = Object.freeze(
  {
    LEFT : "left",
    RIGHT : "right"
  });

  GoogleWidgetsFactory.prototype.PlusOneButtonAnnotation = Object.freeze(
  {
    BUBBLE : "bubble",
    INLINE : "inline",
    NONE : "none"
  });

  GoogleWidgetsFactory.prototype.PlusOneButtonSize = Object.freeze(
  {
    MEDIUM : "medium",
    SMALL : "small",
    STANDARD : "standard",
    TALL : "tall"
  });

  GoogleWidgetsFactory.prototype.toString = function()
  {
    return "Google Widgets Factory";
  };

  widgets._google = new GoogleWidgetsFactory();

  widgets.google = function()
  {
    return this._google;
  };
})(Widgets);