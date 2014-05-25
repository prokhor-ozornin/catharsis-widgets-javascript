(function(widgets)
{
  var SoundCloudWidgetsFactory = function()
  {
  };

  SoundCloudWidgetsFactory.prototype.ProfileIconSize = Object.freeze(
  {
    SIZE_16 : 16,
    SIZE_24 : 24,
    SIZE_32 : 32,
    SIZE_40 : 40,
    SIZE_48 : 48,
    SIZE_56 : 56,
    SIZE_64 : 64
  });

  this.toString = function()
  {
    return "SoundCloud Widgets Factory";
  };

  widgets._soundcloud = new SoundCloudWidgetsFactory();
  widgets.SoundCloud = function()
  {
    return this._soundcloud;
  };

})(Widgets);