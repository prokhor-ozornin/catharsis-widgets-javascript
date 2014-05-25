(function(widgets)
{
  var TwitterWidgetsFactory = function()
  {
  };

  TwitterWidgetsFactory.prototype.FollowButtonAlignment = Object.freeze(
  {
    LEFT : "left",
    RIGHT : "right"
  });

  TwitterWidgetsFactory.prototype.FollowButtonSize = Object.freeze(
  {
    LARGE : "large",
    MEDIUM : "medium"
  });

  TwitterWidgetsFactory.prototype.TweetButtonCountBoxPosition = Object.freeze(
  {
    HORIZONTAL : "horizontal",
    NONE : "none",
    VERTICAL : "vertical"
  });

  TwitterWidgetsFactory.prototype.FollowButtonSize = Object.freeze(
  {
    LARGE : "large",
    MEDIUM : "medium"
  });

  TwitterWidgetsFactory.prototype.TweetButtonSize = Object.freeze(
  {
    LARGE : "large",
    MEDIUM : "medium"
  });

  TwitterWidgetsFactory.prototype.toString = function()
  {
    return "Twitter Widgets Factory";
  };

  widgets._twitter = new TwitterWidgetsFactory();
  widgets.Twitter = function()
  {
    return this._twitter;
  };

})(Widgets);