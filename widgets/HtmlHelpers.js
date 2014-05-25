var HtmlHelpers = function()
{
};

HtmlHelpers.prototype.toString = function()
{
  return "Html Helpers";
};

HtmlHelpers.prototype.cssInline = function(code)
{
  return this.htmlTag("style", { "type" : "text/css" }, code);
};

HtmlHelpers.prototype.cssLink = function(url)
{
  if (!url)
  {
    return "";
  }

  return this.htmlTag("link", { "href" : url, "rel" : "stylesheet", "type" : "text/css" });
};

HtmlHelpers.prototype.htmlEntities = function(html)
{
  if (!html)
  {
    return "";
  }

  /*return html.replace(/[\u00A0-\u2666<>\&]/g, function(c)
  {
    return "&" + (this.HTML_ENTITIES[c.charCodeAt(0)] || ("#" + c.charCodeAt(0))) + ";";
  });*/

  return html.replace(/"/g, "&quot;").replace(/'/g, "&apos;");
};

HtmlHelpers.prototype.htmlTag = function(tag, attributes, body)
{
  if (!tag)
  {
    return "";
  }

  var attributesPairs = [];
  for (var name in attributes)
  {
    var value = attributes[name];
    if (value === undefined || value === null || value === "")
    {
      continue;
    }

    attributesPairs.push(this.htmlEntities(name) + "=\"" + this.htmlEntities(value + "") + "\"");
  }

  var attributesString = (attributesPairs ? " " : "") + attributesPairs.join(" ");

  return body === null || body === ""
    ? "<" + tag + attributesString + "/>"
    : "<" + tag + attributesString + ">" + (body === undefined ? "" : body) + "</" + tag + ">";
};

HtmlHelpers.prototype.javascriptInline = function(code)
{
  return this.htmlTag("script", { "type" : "text/javascript" }, code);
};

HtmlHelpers.prototype.javascriptLink = function(url)
{
  if (!url)
  {
    return "";
  }

  return this.htmlTag("script", { "src" : url, "type" : "text/javascript"  });
};

HtmlHelpers.prototype.urlQuery = function(parameters)
{
  var parametersPairs = [];

  for (var name in parameters)
  {
    var value = parameters[value];

    if (value === undefined || value === null || value === "")
    {
      continue;
    }

    parametersPairs.push(encodeURI(name) + "=" + encodeURI(parameters[name]));
  };

  return parametersPairs.join("&");
};