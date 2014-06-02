(function(factory)
{
  var YandexMoneyDonateFormWidget = function()
  {
    this._askPayerComment = false;
    this._askPayerEmail = false;
    this._askPayerFullName = false;
    this._askPayerPhone = false;
    this._cards = true;
    this._description = false;
    this._text = factory.MoneyDonateFormText.DONATE;
  };

  YandexMoneyDonateFormWidget.prototype = new HtmlWidget();

  YandexMoneyDonateFormWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  YandexMoneyDonateFormWidget.prototype.askPayerComment = function(ask)
  {
    this._askPayerComment = ask;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getAskPayerComment = function()
  {
    return this._askPayerComment;
  };

  YandexMoneyDonateFormWidget.prototype.askPayerEmail = function(ask)
  {
    this._askPayerEmail = ask;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getAskPayerEmail = function()
  {
    return this._askPayerEmail;
  };

  YandexMoneyDonateFormWidget.prototype.askPayerFullName = function(ask)
  {
    this._askPayerFullName = ask;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getAskPayerFullName = function()
  {
    return this._askPayerFullName;
  };

  YandexMoneyDonateFormWidget.prototype.askPayerPhone = function(ask)
  {
    this._askPayerPhone = ask;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getAskPayerPhone = function()
  {
    return this._askPayerPhone;
  };

  YandexMoneyDonateFormWidget.prototype.cards = function(accept)
  {
    this._cards = accept;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getCards = function()
  {
    return this._cards;
  };

  YandexMoneyDonateFormWidget.prototype.commentHint = function(hint)
  {
    this._commentHint = hint;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getCommentHint = function()
  {
    return this._commentHint;
  };

  YandexMoneyDonateFormWidget.prototype.description = function(show)
  {
    this._description = show;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getDescription = function()
  {
    return this._description;
  };

  YandexMoneyDonateFormWidget.prototype.getDescriptionText = function()
  {
    return this._descriptionText;
  };

  YandexMoneyDonateFormWidget.prototype.projectName = function(name)
  {
    this._projectName = name;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getProjectName = function()
  {
    return this._projectName;
  };

  YandexMoneyDonateFormWidget.prototype.projectSite = function(url)
  {
    this._projectSite = url;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getProjectSite = function()
  {
    return this._projectSite;
  };

  YandexMoneyDonateFormWidget.prototype.sum = function(sum)
  {
    this._sum = sum;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getSum = function()
  {
    return this._sum;
  };

  YandexMoneyDonateFormWidget.prototype.text = function(text)
  {
    this._text = text;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getText = function()
  {
    return this._text;
  };

  YandexMoneyDonateFormWidget.prototype.type = function(type)
  {
    this.type = type;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.getType = function()
  {
    return this._type;
  };

  YandexMoneyDonateFormWidget.prototype.descriptionText = function(description)
  {
    this._descriptionText = description;
    return this;
  };

  YandexMoneyDonateFormWidget.prototype.toString = function()
  {
    if (!this.getAccount() || !this.getDescriptionText())
    {
      return "";
    }

    var width = 0;
    switch (this.getText())
    {
      case factory.MoneyDonateFormText.DONATE :
        width = 523;
      break;

      case factory.MoneyDonateFormText.GIVE :
        width = 487;
      break;

      case factory.MoneyDonateFormText.TRANSFER :
        width = 495;
      break;

      case factory.MoneyDonateFormText.SEND :
        $width = 494;
      break;

      case factory.MoneyDonateFormText.SUPPORT :
        width = 507;
      break;

      default :
        width = 523;
      break;
    }
    if (!this.getCards())
    {
      width -= 69;
    }

    return this.htmlTag("iframe",
    {
      "allowtransparency" : true,
      "frameborder" : 0,
      "height" : this.getAskPayerComment() ? 210 : 133,
      "scrolling" : "no",
      "src" : "https://money.yandex.ru/embed/donate.xml?account=" + this.getAccount() + "&quickpay=donate" + (this.getCards() ? "&payment-type-choice=on" : "") + "&default-sum=" + (this.getSum() || "") + "&targets=" + (this.getDescriptionText() || "") + (this.getDescription() ? "&target-visibility=on" : "") + "&project-name=" + (this.getProjectName() || "") + "&project-site=" + (this.getProjectSite() || "") + "&button-text=0" + this.getText() + (this.getAskPayerComment() ? "&comment=on&hint=" + (this.getCommentHint() || "") : "") + (this.getAskPayerFullName() ? "&fio=on" : "") + (this.getAskPayerEmail() ? "&mail=on" : "") + (this.getAskPayerPhone() ? "&phone=on" : ""),
      "width" : width
    });
  };

  factory.moneyDonateForm = function()
  {
    return new YandexMoneyDonateFormWidget();
  };
}
(Widgets.yandex()));