(function(factory)
{
  var YandexMoneyButtonWidget = function()
  {
    this._askPayerAddress = false;
    this._askPayerEmail = false;
    this._askPayerFulName = false;
    this._askPayerPhone = false;
    this._color = factory.MoneyButtonColor.ORANGE;
    this._size = factory.MoneyButtonSize.LARGE;
    this._text = factory.MoneyButtonText.PAY;
    this._type = factory.MoneyButtonType.WALLET;
  };

  YandexMoneyButtonWidget.prototype = new HtmlWidget();

  YandexMoneyButtonWidget.prototype.askPayerAddress = function(ask)
  {
    this._askPayerAddress = ask;
    return this;
  };

  YandexMoneyButtonWidget.prototype.getAskPayerAddress = function()
  {
    return this._askPayerAddress;
  };

  YandexMoneyButtonWidget.prototype.askPayerEmail = function(ask)
  {
    this._askPayerEmail = ask;
    return this;
  };

  YandexMoneyButtonWidget.prototype.getAskPayerEmail = function()
  {
    return this._askPayerEmail;
  };

  YandexMoneyButtonWidget.prototype.askPayerFullName = function(ask)
  {
    this._askPayerFullName = ask;
    return this;
  };

  YandexMoneyButtonWidget.prototype.getAskPayerFullName = function()
  {
    return this._askPayerFullName;
  };

  YandexMoneyButtonWidget.prototype.askPayerPhone = function(ask)
  {
    this._askPayerPhone = ask;
    return this;
  };

  YandexMoneyButtonWidget.prototype.getAskPayerPhone = function()
  {
    return this._askPayerPhone;
  };

  YandexMoneyButtonWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  YandexMoneyButtonWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  YandexMoneyButtonWidget.prototype.color = function(color)
  {
    this._color = color;
    return this;
  };

  YandexMoneyButtonWidget.prototype.getColor = function()
  {
    return this._color;
  };

  YandexMoneyButtonWidget.prototype.description = function(description)
  {
    this._description = description;
    return this;
  };

  YandexMoneyButtonWidget.prototype.getDescription = function()
  {
    return this._description;
  };

  YandexMoneyButtonWidget.prototype.size = function(size)
  {
    this._size = size;
    return this;
  };

  YandexMoneyButtonWidget.prototype.getSize = function()
  {
    return this._size;
  };

  YandexMoneyButtonWidget.prototype.sum = function(sum)
  {
    this._sum = sum;
    return this;
  };

  YandexMoneyButtonWidget.prototype.getSum = function()
  {
    return this._sum;
  };

  YandexMoneyButtonWidget.prototype.text = function(text)
  {
    this._text = text;
    return this;
  };

  YandexMoneyButtonWidget.prototype.getText = function()
  {
    return this._text;
  };

  YandexMoneyButtonWidget.prototype.type = function(type)
  {
    this._type = type;
    return this;
  };

  YandexMoneyButtonWidget.prototype.getType = function()
  {
    return this._type;
  };

  YandexMoneyButtonWidget.prototype.toString = function()
  {
    if (!this.getAccount() || !this.getSum() || !this.getDescription() )
    {
      return "";
    }

    var width = 0;
    switch (this.getText())
    {
      case factory.MoneyButtonText.PAY :
        width = 229;
      break;

      case factory.MoneyButtonText.BUY :
        width = 197;
      break;

      case factory.MoneyButtonText.TRANSFER :
        width = 242;
      break;

      case factory.MoneyButtonText.DONATE :
        width = 283;
      break;

      case factory.MoneyButtonText.GIVE :
        width = 231;
      break;

      case factory.MoneyButtonText.SUPPORT :
        width = 262;
      break;

      default :
        width = 283;
      break;
    }

    return this.htmlTag("iframe",
    {
      "allowtransparency" : true,
      "frameborder" : 0,
      "height" : 54,
      "scrolling" : "no",
      "src" : "https://money.yandex.ru/embed/small.xml?account=" + this.getAccount() + "&quickpay=small&" + this.getType() + "=on&button-text=0" + this.getText() + "&button-size=" + this.getSize() + "&button-color=" + this.getColor() + "&targets=" + this.getDescription() + "&default-sum=" + this.getSum() + (this.getAskPayerFullName() ? "&fio=on" : "") + (this.getAskPayerEmail() ? "&mail=on" : "") + (this.getAskPayerPhone() ? "&phone=on" : "") + (this.getAskPayerAddress() ? "&address=on" : ""),
      "width" : width
    });
  };

  factory.moneyButton = function()
  {
    return new YandexMoneyButtonWidget();
  };
}
(Widgets.yandex()));