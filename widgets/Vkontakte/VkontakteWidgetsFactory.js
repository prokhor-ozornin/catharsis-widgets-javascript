(function(widgets)
{
  var VkontakteWidgetsFactory = function()
  {
  };

  VkontakteWidgetsFactory.prototype.AuthButtonType = Object.freeze(
  {
    DYNAMIC : 1,
    STANDARD : 2
  });

  VkontakteWidgetsFactory.prototype.CommentsAttach = Object.freeze(
  {
    ALL : "*",
    GRAFITTI : "graffiti",
    PHOTO : "photo",
    VIDEO : "video",
    AUDIO : "audio",
    LINK : "link"
  });

  VkontakteWidgetsFactory.prototype.CommentsLimit = Object.freeze(
  {
    LIMIT_5 : 5,
    LIMIT_10 : 10,
    LIMIT_15 : 15,
    LIMIT_20 : 20
  });

  VkontakteWidgetsFactory.prototype.CommunityMode = Object.freeze(
  {
    PARTICIPANTS : 0,
    TITLE : 1,
    NEWS : 2
  });

  VkontakteWidgetsFactory.prototype.LikeButtonHeight = Object.freeze(
  {
    HEIGHT_18 : 18,
    HEIGHT_20 : 20,
    HEIGHT_22 : 22,
    HEIGHT_24 : 24
  });

  VkontakteWidgetsFactory.prototype.LikeButtonLayout = Object.freeze(
  {
    BUTTON : "button",
    FULL : "full",
    MINI : "mini",
    VERTICAL : "vertical"
  });

  VkontakteWidgetsFactory.prototype.LikeButtonVerb = Object.freeze(
  {
    LIKE : 0,
    INTEREST : 1
  });

  VkontakteWidgetsFactory.prototype.RecommendationsLimit = Object.freeze(
  {
    THREE : 3,
    FIVE : 5,
    TEN : 10
  });

  VkontakteWidgetsFactory.prototype.RecommendationsPeriod = Object.freeze(
  {
    DAY : "day",
    WEEK : "week",
    MONTH : "month"
  });

  VkontakteWidgetsFactory.prototype.RecommendationsSorting = Object.freeze(
  {
    FRIEND_LIKES : "friend_likes",
    LIKES : "likes"
  });

  VkontakteWidgetsFactory.prototype.RecommendationsVerb = Object.freeze(
  {
    LIKE : 0,
    INTEREST : 1
  });

  VkontakteWidgetsFactory.prototype.SubscriptionButtonLayout = Object.freeze(
  {
    FIRST : 1,
    SECOND : 2
  });

  VkontakteWidgetsFactory.prototype.toString = function()
  {
    return "Vkontakte Widgets Factory";
  };

  widgets._vkontakte = new VkontakteWidgetsFactory();

  widgets.vkontakte = function()
  {
    return this._vkontakte;
  };
})(Widgets);