(function(scripts)
{
  scripts.mailru = function()
  {
    window.document.write(this.javascriptLink("http://cdn.connect.mail.ru/js/loader.js"));
    return this;
  };
})(Widgets.scripts());