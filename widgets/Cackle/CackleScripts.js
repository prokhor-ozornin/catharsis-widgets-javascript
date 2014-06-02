(function(scripts)
{
  scripts.cackle = function()
  {
    window.document.write(this.javascriptLink(scripts.SCRIPTS_PATH + "/cackle.js"));
    return this;
  };
})(Widgets.scripts());