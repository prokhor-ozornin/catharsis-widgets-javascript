(function(factory)
{
  var PinterestPinItButtonWidget = function()
  {
    this._color = "gray";
    this._counter = factory.PinItButtonPinCountPosition.NONE;
    this._language = "en";
    this._shape = factory.PinItButtonShape.RECTANGULAR;
    this._size = factory.PinItButtonSize.SMALL;
  };

  PinterestPinItButtonWidget.prototype = new HtmlWidget();

  PinterestPinItButtonWidget.prototype.color = function(color)
  {
    this._color = color;
    return this;
  };

  PinterestPinItButtonWidget.prototype.getColor = function()
  {
    return this._color;
  };

  PinterestPinItButtonWidget.prototype.counter = function(position)
  {
    this._counter = position;
    return this;
  };

  PinterestPinItButtonWidget.prototype.getCounter = function()
  {
    return this._counter;
  };

  PinterestPinItButtonWidget.prototype.description = function(description)
  {
    this._description = description;
    return this;
  };

  PinterestPinItButtonWidget.prototype.getDescription = function()
  {
    return this._description;
  };

  PinterestPinItButtonWidget.prototype.gray = function()
  {
    return this.color("gray");
  };

  PinterestPinItButtonWidget.prototype.image = function(image)
  {
    this._image = image;
    return this;
  };

  PinterestPinItButtonWidget.prototype.getImage = function()
  {
    return this._image;
  };

  PinterestPinItButtonWidget.prototype.language = function(language)
  {
    this._language = language;
    return this;
  };

  PinterestPinItButtonWidget.prototype.getLanguage = function()
  {
    return this._language;
  };

  PinterestPinItButtonWidget.prototype.red = function()
  {
    return this.color("red");
  };

  PinterestPinItButtonWidget.prototype.shape = function(shape)
  {
    this._shape = shape;
    return this;
  };

  PinterestPinItButtonWidget.prototype.getShape = function()
  {
    return this._shape;
  };

  PinterestPinItButtonWidget.prototype.size = function(size)
  {
    this._size = size;
    return this;
  };

  PinterestPinItButtonWidget.prototype.getSize = function()
  {
    return this._size;
  };

  PinterestPinItButtonWidget.prototype.url = function(url)
  {
    this._url = url;
    return this;
  };

  PinterestPinItButtonWidget.prototype.getUrl = function()
  {
    return this._url;
  };

  PinterestPinItButtonWidget.prototype.white = function()
  {
    return this.color("white");
  };

  PinterestPinItButtonWidget.prototype.toString = function()
  {
    if (!this.getUrl() || !this.getImage() || !this.getDescription())
    {
      return "";
    }

    var height = 0;
    switch (this.getSize())
    {
      case factory.PinItButtonSize.LARGE :
        switch (this.getShape())
        {
          case factory.PinItButtonShape.CIRCULAR :
            height = 32;
          break;

          default :
            height = 28;
          break;
        }
      break;

      case factory.PinItButtonSize.SMALL :
        switch (this.getShape())
        {
          case factory.PinItButtonShape.CIRCULAR:
            height = 16;
          break;

          default:
            height = 20;
           break;
         }
       break;
    }

    var shape = "";
    switch (this.getShape())
    {
      case factory.PinItButtonShape.CIRCULAR :
        shape = "round";
      break;

      default :
        shape = "rect";
      break;
    }

    return this.htmlTag("a",
    {
      "data-pin-color" : this.getShape() === factory.PinItButtonShape.RECTANGULAR ? this.getColor() : null,
      "data-pin-config" : this.getShape() === factory.PinItButtonShape.RECTANGULAR ? this.getCounter() : null,
      "data-pin-do" : "buttonPin",
      "data-pin-height" : height,
      "data-pin-lang" : this.getShape() === factory.PinItButtonShape.RECTANGULAR ? this.getLanguage() : null,
      "data-pin-shape" : shape,
      "href" : "http://www.pinterest.com/pin/create/button/?url=" + encodeURI(this.getUrl()) + "&media=" + encodeURI(this.getImage()) + "&description=" + encodeURI(this.getDescription())
    },
    "<img src=\"http://assets.pinterest.com/images/pidgets/pinit_fg_" + this.getLanguage() + "_" + shape + "_" + this.getColor() + "_" + height + ".png\"/>");
  };

  factory.PinItButton = function()
  {
    return new PinterestPinItButtonWidget();
  };
}
(Widgets.Pinterest()));