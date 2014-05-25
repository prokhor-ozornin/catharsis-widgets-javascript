(function(scripts)
{
  scripts.Disqus = function()
  {
    window.document.write(this.javascriptLink(scripts.SCRIPTS_PATH + "/disqus.js"));
    return this;
  };

})(WebWidgetsScripts);