(function(scripts)
{
  scripts.Vkontakte = function()
  {
    window.document.write(this.javascriptLink("http://vk.com/js/api/openapi.js"));
    return this;
  };

})(WebWidgetsScripts);