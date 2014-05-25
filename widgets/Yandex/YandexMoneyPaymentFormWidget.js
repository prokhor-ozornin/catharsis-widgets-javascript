(function(factory)
{
  function YandexMoneyPaymentFormWidget()
  {
    this._askPayerAddress = false;
    this._askPayerComment = false;
    this._askPayerEmail = false;
    this._askPayerFullName = false;
    this._askPayerPhone = false;
    this._askPayerPurpose = false;
    this._cards = true;
    this._text = factory.MoneyPaymentFormText.PAY;
  };

  YandexMoneyPaymentFormWidget.prototype = new HtmlWidget();

  YandexMoneyPaymentFormWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  YandexMoneyPaymentFormWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  YandexMoneyPaymentFormWidget.prototype.askPayerComment = function(ask)
  {
    this._askPayerComment = ask;
    return this;
  };

  YandexMoneyPaymentFormWidget.prototype.getAskPayerComment = function()
  {
    return this._askPayerComment;
  };

  YandexMoneyPaymentFormWidget.prototype.askPayerEmail = function(ask)
  {
    this._askPayerEmail = ask;
    return this;
  };

  YandexMoneyPaymentFormWidget.prototype.getAskPayerEmail = function()
  {
    return this._askPayerEmail;
  };

  YandexMoneyPaymentFormWidget.prototype.askPayerFullName = function(ask)
  {
    this._askPayerFullName = ask;
    return this;
  };

  YandexMoneyPaymentFormWidget.prototype.getAskPayerFullName = function()
  {
    return this._askPayerFullName;
  };

  YandexMoneyPaymentFormWidget.prototype.askPayerPhone = function(ask)
  {
    this._askPayerPhone = ask;
    return this;
  };

  YandexMoneyPaymentFormWidget.prototype.getAskPayerPhone = function()
  {
    return this._askPayerPhone;
  };

  YandexMoneyPaymentFormWidget.prototype.askPayerPurpose = function(ask)
  {
    this._askPayerPurpose = ask;
    return this;
  };

  YandexMoneyPaymentFormWidget.prototype.getAskPayerPurpose = function()
  {
    return this._askPayerPurpose;
  };

  YandexMoneyPaymentFormWidget.prototype.cards = function(accept)
  {
    this._cards = accept;
    return this;
  };

  YandexMoneyPaymentFormWidget.prototype.getCards = function()
  {
    return this._cards;
  };

  YandexMoneyPaymentFormWidget.prototype.description = function(description)
  {
    this._description = description;
    return this;
  };

  YandexMoneyPaymentFormWidget.prototype.getDescription = function()
  {
    return this._description;
  };

  YandexMoneyPaymentFormWidget.prototype.askPayerAddress = function(ask)
  {
    this._askPayerAddress = ask;
    return this;
  };

  YandexMoneyPaymentFormWidget.prototype.getAskPayerAddress = function()
  {
    return this._askPayerAddress;
  };

  YandexMoneyPaymentFormWidget.prototype.sum = function(sum)
  {
    this._sum = sum;
    return this;
  };

  YandexMoneyPaymentFormWidget.prototype.getSum = function()
  {
    return this._sum;
  };

  YandexMoneyPaymentFormWidget.prototype.text = function(text)
  {
    this._text = text;
    return this;
  };

  YandexMoneyPaymentFormWidget.prototype.getText = function()
  {
    return this._text;
  };

  YandexMoneyPaymentFormWidget.prototype.toString = function()
  {
    if (!this.getAccount() || !this.getDescription())
    {
      return "";
    }

    return this.htmlTag("iframe",
    {
      "allowtransparency" : true,
      "frameborder" : 0,
      "height" : this.getAskPayerComment() ? 255 : 200,
      "scrolling" : "no",
      "src" : "https://money.yandex.ru/embed/shop.xml?account=" + this.getAccount() + "&quickpay=shop" + (this.getCards() ? "&payment-type-choice=on" : "") + "&writer=" + (this.getAskPayerPurpose() ? "buyer" : "seller") + "&" + (this.getAskPayerPurpose() ? "targets-hint" : "targets") + "=" + encodeURI(this.getDescription()) + "&default-sum=" + (this.getSum() || "") + "&button-text=0" + this.getText() + (this.getAskPayerComment() ? "&comment=on" : "") + (this.getAskPayerFullName() ? "&fio=on" : "") + (this.getAskPayerEmail() ? "&mail=on" : "") + (this.getAskPayerPhone() ? "&phone=on" : "") + (this.getAskPayerAddress() ? "&address=on" : ""),
      "width" : 450
    });
  };

  factory.MoneyPaymentForm = function()
  {
    return new YandexMoneyPaymentFormWidget();
  };
}
(Widgets.Yandex()));