(function(scripts)
{
  scripts.VideoJS = function()
  {
    window.document.write(this.javascriptLink("http://vjs.zencdn.net/4.3/video.js"));
    return this;
  };

})(WebWidgetsScripts);