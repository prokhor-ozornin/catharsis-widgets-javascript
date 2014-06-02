(function(widgets)
{
  var YandexWidgetsFactory = function()
  {
  };

  YandexWidgetsFactory.prototype.LikeButtonLayout = Object.freeze(
  {
    BUTTON : "button",
    ICON : "icon"
  });

  YandexWidgetsFactory.prototype.LikeButtonSize = Object.freeze(
  {
    LARGE : "large",
    SMALL : "small"
  });

  YandexWidgetsFactory.prototype.MoneyButtonColor = Object.freeze(
  {
    ORANGE : "orange",
    WHITE : "white",
    BLACK : "black"
  });

  YandexWidgetsFactory.prototype.MoneyButtonSize = Object.freeze(
  {
    SMALL : "s",
    MEDIUM : "m",
    LARGE : "l"
  });

  YandexWidgetsFactory.prototype.MoneyButtonText = Object.freeze(
  {
    PAY : 1,
    BUY : 2,
    TRANSFER : 3,
    DONATE : 4,
    GIVE : 5,
    SUPPORT : 6
  });

  YandexWidgetsFactory.prototype.MoneyButtonType = Object.freeze(
  {
    CARD : "any-card-payment-type",
    WALLET : "yamoney-payment-type"
  });

  YandexWidgetsFactory.prototype.MoneyDonateFormText = Object.freeze(
  {
    DONATE : 1,
    GIVE : 2,
    TRANSFER : 3,
    SEND : 4,
    SUPPORT : 5
  });

  YandexWidgetsFactory.prototype.MoneyPaymentFormText = Object.freeze(
  {
    PAY : 1,
    BUY : 2,
    TRANSFER : 3,
    GIVE : 4
  });

  YandexWidgetsFactory.prototype.SharePanelLayout = Object.freeze(
  {
    BUTTON : "button",
    ICON : "icon",
    LINK : "link",
    NONE : "none"
  });

  YandexWidgetsFactory.prototype.toString = function()
  {
    return "Yandex Widgets Factory";
  };

  widgets._yandex = new YandexWidgetsFactory();

  widgets.yandex = function()
  {
    return this._yandex;
  };
})(Widgets);