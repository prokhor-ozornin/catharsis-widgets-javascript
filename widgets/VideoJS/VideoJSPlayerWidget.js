(function(factory)
{
  var VideoJSPlayerWidget = function()
  {
  };

  VideoJSPlayerWidget.prototype = new HtmlWidget();

  VideoJSPlayerWidget.prototype.extra = function(extra)
  {
    this._extra = extra;
    return this;
  };

  VideoJSPlayerWidget.prototype.getExtra = function()
  {
    return this._extra;
  };

  VideoJSPlayerWidget.prototype.height = function(height)
  {
    this._height = height;
    return this;
  };

  VideoJSPlayerWidget.prototype.getHeight = function()
  {
    return this._height;
  };

  VideoJSPlayerWidget.prototype.videos = function(videos)
  {
    this._videos = videos;
    return this;
  };

  VideoJSPlayerWidget.prototype.getVideos = function()
  {
    return this._videos;
  };

  VideoJSPlayerWidget.prototype.width = function(width)
  {
    this._width = width;
    return this;
  };

  VideoJSPlayerWidget.prototype.getWidth = function()
  {
    return this._width;
  };

  VideoJSPlayerWidget.prototype.toString = function()
  {
    if (!this.getWidth() || !this.getHeight())
    {
      return "";
    }

    var videos = this.getVideos();
    var videoSources = [];
    for (var videoUrl in videos)
    {
      var videoContentType = videos[videoUrl];
      videoSources.push(this.htmlTag("source", { "src" : videoUrl, "type" : videoContentType }, null));
    }
    if (!videoSources.length)
    {
      return "";
    }

    return this.htmlTag("video",
    {
      "class" : "video-js vjs-default-skin",
      "controls" : "controls",
      "data-setup" : "{}",
      "height" : this.getHeight(),
      "preload" : "auto",
      "width" : this.getWidth()
    },
    videoSources.join() + this.getExtra());
  };

  factory.player = function()
  {
    return new VideoJSPlayerWidget();
  };
}
(Widgets.videojs()));