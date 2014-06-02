(function(widgets)
{
  var FacebookWidgetsFactory = function()
  {
  };

  FacebookWidgetsFactory.prototype.ButtonLayout = Object.freeze(
  {
    BOX_COUNT : "box_count",
    BUTTON_COUNT : "button_count",
    STANDARD : "standard"
  });

  FacebookWidgetsFactory.prototype.ColorScheme = Object.freeze(
  {
    DARK : "dark",
    LIGHT : "light"
  });

  FacebookWidgetsFactory.prototype.CommentsOrder = Object.freeze(
  {
    SOCIAL : "social",
    REVERSE_TIME : "reverse_time",
    TIME : "time"
  });

  FacebookWidgetsFactory.prototype.FacepilePhotoSize = Object.freeze(
  {
    SMALL : "small",
    MEDIUM : "medium",
    LARGE : "large"
  });

  FacebookWidgetsFactory.prototype.LikeButtonVerb = Object.freeze(
  {
    LIKE : "like",
    RECOMMEND : "recommend"
  });

  FacebookWidgetsFactory.prototype.toString = function()
  {
    return "Facebook Widgets Factory";
  };

  widgets._facebook = new FacebookWidgetsFactory();

  widgets.facebook = function()
  {
    return this._facebook;
  };
})(Widgets);