(function(scripts)
{
  scripts.pinterest = function()
  {
    window.document.write(this.javascriptLink("http://assets.pinterest.com/js/pinit.js"));
    return this;
  };
})(Widgets.scripts());