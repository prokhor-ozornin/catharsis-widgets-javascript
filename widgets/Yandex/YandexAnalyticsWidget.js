(function(factory)
{
  var YandexAnalyticsWidget = function()
  {
    this._accurate = true;
    this._clickMap = true;
    this._language = 'ru';
    this._trackHash = true;
    this._trackLinks = true;
    this._webVisor = true;
  };

  YandexAnalyticsWidget.prototype = new HtmlWidget();

  YandexAnalyticsWidget.prototype.account = function(account)
  {
    this._account = account;
    return this;
  };

  YandexAnalyticsWidget.prototype.getAccount = function()
  {
    return this._account;
  };

  YandexAnalyticsWidget.prototype.accurate = function(enabled)
  {
    this._accurate = enabled;
    return this;
  };

  YandexAnalyticsWidget.prototype.getAccurate = function()
  {
    return this._accurate;
  };

  YandexAnalyticsWidget.prototype.clickMap = function(enabled)
  {
    this._clickMap = enabled;
    return this;
  };

  YandexAnalyticsWidget.prototype.getClickMap = function()
  {
    return this._clickMap;
  };

  YandexAnalyticsWidget.prototype.language = function(language)
  {
    $this._language = language;
    return this;
  };

  YandexAnalyticsWidget.prototype.getLanguage = function()
  {
    return this._language;
  };

  YandexAnalyticsWidget.prototype.noIndex = function(enabled)
  {
    this._noIndex = enabled;
    return this;
  };

  YandexAnalyticsWidget.prototype.getNoIndex = function()
  {
    return this._noIndex;
  };

  YandexAnalyticsWidget.prototype.trackHash = function(enabled)
  {
    this._trackHash = enabled;
    return this;
  };

  YandexAnalyticsWidget.prototype.getTrackHash = function()
  {
    return this._trackHash;
  };

  YandexAnalyticsWidget.prototype.trackLinks = function(enabled)
  {
    this._trackLinks = enabled;
    return this;
  };

  YandexAnalyticsWidget.prototype.getTrackLinks = function()
  {
    return this._trackLinks;
  };

  YandexAnalyticsWidget.prototype.webVisor = function(enabled)
  {
    this._webVisor = enabled;
    return this;
  };

  YandexAnalyticsWidget.prototype.getWebVisor = function()
  {
    return this._webVisor;
  };

  YandexAnalyticsWidget.prototype.toString = function()
  {
    if (!this.getAccount())
    {
      return "";
    }

    var config =
    {
      "id" : this.getAccount(),
      "webvisor" : this.getWebVisor(),
      "clickmap" : this.getClickMap(),
      "trackLinks" : this.getTrackLinks(),
      "accurateTrackBounce" : this.getAccurate(),
      "trackHash" : this.getTrackHash()
    };
    if (this.getNoIndex())
    {
      config.ut = "noindex";
    }

    language = this.getLanguage();

    return '<!-- Yandex.Metrika informer -->'
           + '<a href="http://metrika.yandex.ru/stat/?id=12066574&amp;from=informer" target="_blank" rel="nofollow">'
           + '<img src="//bs.yandex.ru/informer/12066574/3_1_FFFFFFFF_EFEFEFFF_0_pageviews" style="width:88px; height:31px; border:0;" alt="Яндекс.Метрика" title="Яндекс.Метрика: данные за сегодня (просмотры, визиты и уникальные посетители)" onclick="try'
           +' { Ya.Metrika.informer({i: this, id: ' + this.getAccount() + ', lang: ' + this.getLanguage() + '}); return false } catch (e) { }"/></a>'
           + '<!-- /Yandex.Metrika informer -->'
           + '<!-- Yandex.Metrika counter -->'
           + '<script type="text/javascript">'
           + '(function (d, w, c) { (w[c] = w[c] || []).push(function () { try { w.yaCounter' + this.getAccount() + ' = new Ya.Metrika(' + JSON.stringify(config) + ')';
           + '} catch (e) { } });'
           + 'var n = d.getElementsByTagName("script")[0], s = d.createElement("script"), f = function () { n.parentNode.insertBefore(s, n); }; s.type = "text/javascript"; s.async = true; s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";'
           + 'if (w.opera == "[object Opera]") { d.addEventListener("DOMContentLoaded", f, false); } else { f(); } })(document, window, "yandex_metrika_callbacks");</script>'
           + '<noscript><div><img src="//mc.yandex.ru/watch/12066574" style="position:absolute; left:-9999px;" alt=""/></div></noscript>'
           + '<!-- /Yandex.Metrika counter -->'
  };

  factory.analytics = function()
  {
    return new YandexAnalyticsWidget();
  };
}
(Widgets.yandex()));