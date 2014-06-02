(function(widgets)
{
  var MailRuWidgetsFactory = function()
  {
  };

  MailRuWidgetsFactory.prototype.FacesFont = Object.freeze(
  {
    ARIAL : "Arial",
    TAHOMA : "Tahoma",
    GEORGIA : "Georgia"
  });

  MailRuWidgetsFactory.prototype.LikeButtonCounterPosition = Object.freeze(
  {
    RIGHT : "right",
    UPPER : "upper"
  });

  MailRuWidgetsFactory.prototype.LikeButtonLayout = Object.freeze(
  {
    FIRST : 1,
    SECOND : 2,
    THIRD : 3
  });

  MailRuWidgetsFactory.prototype.LikeButtonSize = Object.freeze(
  {
    SIZE_12 : 10,
    SIZE_20 : 20,
    SIZE_30 : 30,
    SIZE_45 : 45,
    SIZE_70 : 70,
    SIZE_100 : 100,
    SIZE_150 : 150
  });

  MailRuWidgetsFactory.prototype.LikeButtonTextType = Object.freeze(
  {
    FIRST : 1,
    SECOND : 2,
    THIRD : 3
  });

  MailRuWidgetsFactory.prototype.LikeButtonType = Object.freeze(
  {
    ALL : "combo",
    MAILRU : "mm",
    ODNOKLASSNIKI : "ok"
  });

  MailRuWidgetsFactory.prototype.toString = function()
  {
    return "MailRu Widgets Factory";
  };

  widgets._mailru = new MailRuWidgetsFactory();

  widgets.mailru = function()
  {
    return this._mailru;
  };
})(Widgets);