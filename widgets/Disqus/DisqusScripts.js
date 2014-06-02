(function(scripts)
{
  scripts.disqus = function()
  {
    window.document.write(this.javascriptLink(scripts.SCRIPTS_PATH + "/disqus.js"));
    return this;
  };
})(Widgets.scripts());