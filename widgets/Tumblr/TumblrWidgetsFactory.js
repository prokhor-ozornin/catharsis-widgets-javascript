(function(widgets)
{
  var TumblrWidgetsFactory = function()
  {
  };

  TumblrWidgetsFactory.prototype.FollowButtonColorScheme = Object.freeze(
  {
    DARK : "dark",
    LIGHT : "light"
  });

  TumblrWidgetsFactory.prototype.FollowButtonType = Object.freeze(
  {
    FIRST : 1,
    SECOND : 2,
    THIRD : 3
  });

  TumblrWidgetsFactory.prototype.ShareButtonColorScheme = Object.freeze(
  {
    GRAY : "gray",
    LIGHT : "light"
  });

  TumblrWidgetsFactory.prototype.ShareButtonType = Object.freeze(
  {
    FIRST : 1,
    SECOND : 2,
    THIRD : 3,
    FORTH : 4
  });

  TumblrWidgetsFactory.prototype.toString = function()
  {
    return "Tumblr Widgets Factory";
  };

  widgets._tumblr = new TumblrWidgetsFactory();
  widgets.Tumblr = function()
  {
    return this._tumblr;
  };

})(Widgets);