(function(scripts)
{
  scripts.MailRu = function()
  {
    window.document.write(this.javascriptLink("http://cdn.connect.mail.ru/js/loader.js"));
    return this;
  };

})(WebWidgetsScripts);