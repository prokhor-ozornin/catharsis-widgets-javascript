(function(scripts)
{
  scripts.Google = function()
  {
    window.document.write(this.javascriptLink(scripts.SCRIPTS_PATH + "/google_analytics.js"));
    window.document.write(this.javascriptLink(scripts.SCRIPTS_PATH + "/google_plusone.js"));
    return this;
  };

})(WebWidgetsScripts);