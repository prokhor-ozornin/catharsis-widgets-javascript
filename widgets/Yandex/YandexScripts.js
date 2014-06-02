(function(scripts)
{
  scripts.yandex = function()
  {
    window.document.write(this.javascriptLink("http://yandex.st/share/share.js"));
    return this;
  };
})(Widgets.scripts());