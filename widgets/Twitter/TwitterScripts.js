(function(scripts)
{
  scripts.Twitter = function()
  {
    window.document.write(this.javascriptLink(scripts.SCRIPTS_PATH + "/twitter_initialize.js"));
    return this;
  };

})(WebWidgetsScripts);