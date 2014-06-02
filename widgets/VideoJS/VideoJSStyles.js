(function(styles)
{
  styles.videojs = function()
  {
    window.document.write(this.cssLink("http://vjs.zencdn.net/4.3/video-js.css"));
    return this;
  };
})(Widgets.styles());