(function(scripts)
{
  scripts.Cackle = function()
  {
    window.document.write(this.javascriptLink(scripts.SCRIPTS_PATH + "/cackle.js"));
    return this;
  };

})(WebWidgetsScripts);