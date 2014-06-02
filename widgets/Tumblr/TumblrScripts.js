(function(scripts)
{
  scripts.tumblr = function()
  {
    window.document.write(this.javascriptLink("http://platform.tumblr.com/v1/share.js"));
    return this;
  };
})(Widgets.scripts());