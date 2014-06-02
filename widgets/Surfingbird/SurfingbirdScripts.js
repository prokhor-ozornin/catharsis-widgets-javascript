(function(scripts)
{
  scripts.surfingbird = function()
  {
    window.document.write(this.javascriptLink("http://surfingbird.ru/share/share.min.js"));
    return this;
  };
})(Widgets.scripts());