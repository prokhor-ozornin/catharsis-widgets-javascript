(function(scripts)
{
  scripts.vkontakte = function()
  {
    window.document.write(this.javascriptLink("http://vk.com/js/api/openapi.js"));
    return this;
  };
})(Widgets.scripts());