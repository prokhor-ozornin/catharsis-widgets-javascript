(function(widgets)
{
  var GravatarWidgetsFactory = function()
  {
  };

  GravatarWidgetsFactory.prototype.DefaultImage = Object.freeze(
  {
    NOT_FOUND : "404",
    MYSTERY_MAN : "mm",
    IDENT_ICON : "identicon",
    MONSTER_ID : "monsterid",
    WAVATAR : "wavatar",
    RETRO : "retro",
    BLANK : "blank"
  });

  GravatarWidgetsFactory.prototype.ImageRating = Object.freeze(
  {
    G : "g",
    PG : "pg",
    R : "r",
    X : "x"
  });

  GravatarWidgetsFactory.prototype.toString = function()
  {
    return "Gravatar Widgets Factory";
  };

  widgets._gravatar = new GravatarWidgetsFactory();
  widgets.Gravatar = function()
  {
    return this._gravatar;
  };

})(Widgets);