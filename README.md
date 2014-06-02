This library is a JavaScript port of [Catharsis Social Web Widgets](https://github.com/prokhor-ozornin/Catharsis-Social-Web-Widgets) library.

It provides useful social media widgets to include on web pages of your site. 

Web widgets are implemented as JavaScript objects that provide convenient fluent interface to work with. Factory classes for generation of web widgets are also provided for more convenience.

***

**Support**

This project needs your support for further developments ! Please consider donating.

- _Yandex.Money_ : 41001577953208

- _WebMoney (WMR)_ : R399275865890

[![Image](https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=APHM8MU9N76V8 "Donate")

***

**Project directory structure**

_/src_ : Contains all required source code along with .js files.

_--/scripts_ : JavaScript .js files, required by some groups of widgets for rendering.

_--/widgets_ : Source code of widgets, divided by groups. Each subdirectory represents a set of related files for a group of widgets (Cackle, Facebook, YouTube, etc.).

_--/jquery/widgets.jquery.js : Web Widgets JQuery plugin hook. Must be included before _catharsis.web.widgets.min.js_. Alternatively, you can use _catharsis.web.widgets.jquery.min.js_ file, which is essentially _widgets.jquery.js_ + _catharsis.web.widgets.min.js_.

_--/jquery/catharsis.web.widgets.jquery.min.js : Combined & minified production version of Web Widgets JQuery plugin.

_--/catharsis.web.widgets.min.js : Combined & minified production version of Web Widgets library (contents of _/widgets_ directory).

***

**Installation and usage**

1. Copy _scripts_ directory along with _catharsis.web.widgets.min.js_ file to any directory under document root of your web server.
2. If you want to move JavaScript files from former _scripts_ directory to another (for example, a dedicated directory where all JavaScript files in your website reside), please set a new path to it in the `Widgets.scripts().SCRIPTS_PATH` property.
3. You are ready to rock. Read on for detailed code usage examples.
4. If you want to use JQuery plugin, use _/jquery/catharsis.web.widgets.jquery.min.js_ instead of _/catharsis.web.widgets.min.js_ along with JQuery core library and _/scripts_ directory.
This plugin includes a helper utility method (`$.widgets()`) that returns global _Widgets_ object, and can be used as follows : `$.widgets().cackle().comments().account("20049").render()`

***

**Basic Example**

`<html>`

  `<head>`

  `</head>`

  `<body>`
    
    `<script type="text/javascript" src="catharsis.web.widgets.min.js"></script>`

    `<script type="text/javascript">`

      `Widgets.cackle().comments().account("20049").render(); // Render HTML code for Cackle Comments widget.`

      `Widgets.scripts().cackle(); // Include required local Cackle javascript file from /scripts directory. Note : not all widgets require JavaScript files.`

    `</script>`

  `</body>`

`</html>`

**JQuery Plugin Example**

`<html>`

  `<head>`
 
    `<script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>`

  `</head>`

  `<body>`
    
    `<script type="text/javascript" src="catharsis.web.widgets.jquery.min.js"></script>`

    `<script type="text/javascript">`

      `$.widgets().cackle().comments().account("20049").render(); // Render HTML code for Cackle Comments widget.`

      `$.widgets().scripts().cackle(); // Include required local Cackle javascript file from /scripts directory. Note : not all widgets require JavaScript files.`

    `</script>`

  `</body>`

`</html>`

***

**API examples**

**Cackle**

**1. Comments**

_Requirements:_ `Widgets.scripts().cackle()` JavaScript bundle

_Code:_

`Widgets.cackle().comments().account("20049").render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8dece_4254dc0d_orig)

**2. Comments count hyperlink**

_Requirements:_ `Widgets.scripts().cackle()` JavaScript bundle

_Note:_ Hyperlinks must have a specific CSS class for this to work, as described in Cackle documentation.

_Code:_

`Widgets.cackle().commentsCount().account("20049").render()`

**3. Latest comments**

_Requirements:_ `Widgets.scripts().cackle()` JavaScript bundle

_Code:_

`Widgets.cackle().latestComments().account("20049").render()`

`Widgets.cackle().latestComments().account("20049").max(15).avatarSize(32).titleSize(50).textSize(255).render()`

**4. OAuth login**

_Requirements:_ `Widgets.scripts().cackle()` JavaScript bundle

_Code:_

`Widgets.cackle().login().account("20049").render()`

**Disqus**

**1. Comments**

_Requirements:_ `Widgets.scripts().disqus()` JavaScript bundle

_Code:_

`Widgets.disqus().comments().account("v-svete-snov").render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8decd_52c79adf_orig)

**Facebook**

**1. JS API initialization**

_Requirements:_ None

_Code:_

`Widgets.facebook().initialize().appId("1437917246425293").render()`

**2. Activity Feed**

_Requirements:_ Call to `Widgets.facebook().initialize()`

_Code:_

`Widgets.facebook().activityFeed().render()`

`Widgets.facebook().activityFeed().domain("yandex.ru").render()`

`Widgets.facebook().activityFeed().domain("yandex.ru").header(false).recommendations(true).colorScheme(Widgets.Facebook().ColorScheme.DARK).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8decf_7b4f254a_orig)

**3. Recommendations Feed**

_Requirements:_ Call to `Widgets.facebook().initialize()`

_Code:_

`Widgets.facebook().recommendationsFeed().render()`

`Widgets.facebook().recommendationsFeed().domain("yandex.ru").render()`

`Widgets.facebook().recommendationsFeed().domain("yandex.ru").header(false).colorScheme(Widgets.Facebook().ColorScheme.DARK).render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1d/0_8ded5_c2a1df46_orig)

**4. Comments**

_Requirements:_ Call to `Widgets.facebook().initialize()`

_Code:_

`Widgets.facebook().comments().render()`

`Widgets.facebook().comments().url("http://yandex.ru").render()`

`Widgets.facebook().comments().url("http://yandex.ru").order(Widgets.Facebook().CommentsOrder.REVERSE_TIME).posts(1).width("500").render()`

![](http://img-fotki.yandex.ru/get/9822/80185211.1d/0_8ded0_864544eb_orig)

**5. Facepile**

_Requirements:_ Call to `Widgets.facebook().initialize()`

_Code:_

`Widgets.facebook().facepile().render()`

`Widgets.facebook().facepile().url("http://yandex.ru").render()`

`Widgets.facebook().facepile().url("http://yandex.ru").maxRows(5).photoSize(Widgets.Facebook().FacepilePhotoSize.LARGE).height("300").render()`

**6. Follow Button**

_Requirements:_ Call to `Widgets.facebook().initialize()`

_Code:_

`Widgets.facebook().followButton().url("http://www.facebook.com/zuck").render()`

`Widgets.facebook().followButton().url("http://www.facebook.com/zuck").kidsMode(true).faces(true).layout(Widgets.Facebook().ButtonLayout.BOX_COUNT).render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1d/0_8ded1_e4885846_orig)

**7. Like Box**

_Requirements:_ Call to `Widgets.facebook().initialize()`

_Code:_

`Widgets.facebook().likeBox().url("https://www.facebook.com/pages/Clear-Words/515749945120070").render()`

`Widgets.facebook().likeBox().url("https://www.facebook.com/pages/Clear-Words/515749945120070").header(false).border(false).faces(false).stream(true).width("500").render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8ded2_e76aa4ec_orig)

**8. Like Button**

_Requirements:_ Call to `Widgets.facebook().initialize()`

_Code:_

`Widgets.facebook().likeButton().url("http://yandex.ru").render()`

`Widgets.facebook().likeButton().url("http://yandex.ru").layout(Widgets.Facebook().ButtonLayout.BOX_COUNT).faces(true).verb(Widgets.Facebook().LikeButtonVerb.RECOMMEND).render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1d/0_8ded3_38a5cbe9_orig)

**9. Embedded post**

_Requirements:_ Call to `Widgets.facebook().initialize()`

_Code:_

`Widgets.facebook().post().url("https://www.facebook.com/prokhor.ozornin/posts/10203109769053557").width(640).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8ded4_d52c9373_orig)

**10. Send Button**

_Requirements:_ Call to `Widgets.facebook().initialize()`

_Code:_

`Widgets.facebook().sendButton().render()`

`Widgets.facebook().sendButton().url("http://yandex.ru").render()`

`Widgets.facebook().sendButton().url("http://yandex.ru").colorScheme(Widgets.Facebook().ColorScheme.DARK).kidsMode(true).render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1d/0_8ded6_4da589ba_orig)

**11. Embedded video**

_Requirements:_ None

_Code:_

`Widgets.facebook().video().height("480").width("640").id("10203121281421359").render()`

![](http://img-fotki.yandex.ru/get/9491/80185211.1e/0_8df01_d86a4cce_orig)

**Google**

**1. Analytics**

_Requirements:_ None

_Code:_

`Widgets.google().analytics().domain("v-svete-snov.ru").account("UA-27123759-16").render()`

![](http://img-fotki.yandex.ru/get/9822/80185211.1d/0_8ded7_a5f7153d_orig)

**2. +1 Button**

_Requirements:_ `Widgets.scripts().google()` JavaScript bundle

_Code:_

`Widgets.google().plusOneButton().render()`

`Widgets.google().plusOneButton().url("http://yandex.ru").alignment(Widgets.Google().PlusOneButtonAlignment.RIGHT).size(Widgets.Google().PlusOneButtonSize.TALL).annotation(Widgets.Google().PlusOneButtonAnnotation.INLINE).recommendations(false).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8ded8_426fde9_orig)

**Gravatar**

**1. Avatar image URL**

_Requirements:_ None

_Code:_

`Widgets.gravatar().imageUrl().hash("61b98d241eaa1ce237c979e7a8181d13").render()`

`Widgets.gravatar().imageUrl().hash("61b98d241eaa1ce237c979e7a8181d13").extension("jpg").forceDefault(true).size(320).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8ded9_af2ee96e_orig)

**2. User profile URL**

_Requirements:_ None

_Code:_

`Widgets.gravatar().profileUrl().hash("61b98d241eaa1ce237c979e7a8181d13").render()`

`Widgets.gravatar().profileUrl().hash("61b98d241eaa1ce237c979e7a8181d13").xml().render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8deda_4837ca1b_orig)

**IntenseDebate**

**1. Comments**

_Requirements:_ None

_Code:_

`Widgets.intensedebate().comments().account("a639ec3507d53023d4f213666651b6c2").render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8dedb_af15dfff_orig)

**2. Comments count hyperlink**

_Requirements:_ None

_Code:_

`Widgets.intensedebate().link().account("a639ec3507d53023d4f213666651b6c2").render()`

**LiveJournal**

**1. Like Button**

_Requirements:_ None

_Code:_

`Widgets.livejournal().likeButton().render()`

**2. Repost Button**

_Requirements:_ None

_Code:_

`Widgets.livejournal().repostButton().render()`

`Widgets.livejournal().repostButton().title("title").text("text").render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8dedc_e64cb946_orig)

**Mail.ru**

**1. ICQ On-Site**

_Requirements:_ None

_Code:_

`Widgets.mailru().icq().render()`

`Widgets.mailru().icq().account("12345678").language("en").render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8dedf_48c0f729_orig)

**2. Embedded video**

_Requirements:_ None

_Code:_

`Widgets.mailru().video().id("i.v.sosnin62/3023/3027.html").height("480").width("640").render()`

**3. Like Button**

_Requirements:_ `Widgets.scripts().mailru()` JavaScript bundle (_body_ section)

_Code:_

`Widgets.mailru().likeButton().render()`

`Widgets.mailru().likeButton().layout(Widgets.MailRu().LikeButtonLayout.SECOND).text(false).counterPosition(Widgets.MailRu().LikeButtonCounterPosition.UPPER).size(30).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8dee0_ab70e64f_orig)

**4. Faces**

_Requirements:_ `Widgets.scripts().mailru()` JavaScript bundle (_body_ section)

_Code:_

`Widgets.mailru().faces().domain("mail.ru").width(640).height(480).render()`

`Widgets.mailru().faces().domain("mail.ru").width(640).height(480).font(Widgets.MailRu().FacesFont.TAHOMA).title(false).backgroundColor("aaffaa").hyperlinkColor("ffaaff").borderColor("aaaaaa").render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8dedd_1e4bea58_orig)

**5. Groups**

_Requirements:_ `Widgets.scripts().mailru()` JavaScript bundle (_body_ section)

_Code:_

`Widgets.mailru().groups().account("mail_ru").width(640).height(480).render()`

`Widgets.mailru().groups().account("mail_ru").width(640).height(480).backgroundColor("aaffaa").buttonColor("ffaaff").subscribers(false).textColor("aaaadd").render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1d/0_8dede_dcf4ba5a_orig)

**Pinterest**

**1. Follow Button**

_Requirements:_ `Widgets.scripts().pinterest()` JavaScript bundle

_Code:_

`Widgets.pinterest().followButton().account("pinterest").render()`

`Widgets.pinterest().followButton().account("pinterest").label("Pinterest").render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1d/0_8dee2_b4b37dac_orig)

**2. Embedded Pin**

_Requirements:_ `Widgets.scripts().pinterest()` JavaScript bundle

_Code:_

`Widgets.pinterest().pin().id("99360735500167749").render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1d/0_8dee3_be322660_orig)

**3. Board**

_Requirements:_ `Widgets.scripts().pinterest()` JavaScript bundle

_Code:_

`Widgets.pinterest().board().account("pinterest").id("pin-pets").render()`

`Widgets.pinterest().board().account("pinterest").id("pin-pets").sidebar().render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8dee1_71b1ce7d_orig)

**4. Profile**

_Requirements:_ `Widgets.scripts().pinterest()` JavaScript bundle

_Code:_

`Widgets.pinterest().profile().account("pinterest").render()`

`Widgets.pinterest().profile().account("pinterest").sidebar().render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8dee5_6a6520e5_orig)

**5. Pin It Button**

_Requirements:_ `Widgets.scripts().pinterest()` JavaScript bundle

_Code:_

`Widgets.pinterest().pinItButton().url("http://www.flickr.com/photos/kentbrew/6851755809").image("http://farm8.staticflickr.com/7027/6851755809_df5b2051c9_z.jpg").description("Next stop: Pinterest").render()`

`Widgets.pinterest().pinItButton().url("http://www.flickr.com/photos/kentbrew/6851755809").image("http://farm8.staticflickr.com/7027/6851755809_df5b2051c9_z.jpg").description("Next stop: Pinterest").counter(Widgets.Pinterest().PinItButtonPinCountPosition.NONE).size(Widgets.Pinterest().PinItButtonSize.LARGE).red().shape(Widgets.Pinterest().PinItButtonShape.RECTANGULAR).language("ja").render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1d/0_8dee4_3a2af139_orig)

**RuTube**

**1. Embedded video**

_Requirements:_ None

_Code:_

`Widgets.rutube().video().id("6785018").height("480").width("640").render()`

![](http://img-fotki.yandex.ru/get/9822/80185211.1d/0_8dee6_43358fbd_orig)

**SoundCloud**

**1. User's profile icon**

_Requirements:_ None

_Code:_

`Widgets.soundcloud().profileIcon().account("prokhor-ozornin").render()`

`Widgets.soundcloud().profileIcon().account("prokhor-ozornin").blackWhite().size(Widgets.SoundCloud().ProfileIconSize.SIZE_64).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8deed_d181e855_orig)

**Surfingbird**

**1. Surf Button**

_Requirements:_ `Widgets.scripts().surfingbird()` JavaScript bundle

_Code:_

`Widgets.surfingbird().surfButton().render()`

`Widgets.surfingbird().surfButton().color(Widgets.Surfingbird().SurfButtonColor.BLUE).counter(true).label("Share").url("http://yandex.ru").layout(Widgets.Surfingbird().SurfButtonLayout.COMMON).render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1d/0_8dee7_74e3c86c_orig)

**Tumblr**

**1. Follow Button**

_Requirements:_ None

_Code:_

`Widgets.tumblr().followButton().account("clear-words-en").render()`

`Widgets.tumblr().followButton().account("clear-words-en").colorScheme(Widgets.Tumblr().FollowButtonColorScheme.DARK).type(Widgets.Tumblr().FollowButtonType.SECOND).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8deea_60c1333d_orig)

**2. Share Button**

_Requirements:_ `Widgets.scripts().tumblr()` JavaScript bundle

_Code:_

`Widgets.tumblr().shareButton().render()`

`Widgets.tumblr().shareButton().colorScheme(Widgets.Tumblr().ShareButtonColorScheme.GRAY).type(Widgets.Tumblr().ShareButtonType.THIRD).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8dee8_5fd0a553_orig)

**Twitter**

**1. Tweet Button**

_Requirements:_ `Widgets.scripts().twitter()` JavaScript bundle

_Code:_

`Widgets.twitter().tweetButton().render()`

`Widgets.twitter().tweetButton().hashTags(["first", "second", "third"]).url("http://yandex.ru").text("Let's share it !").via("Prokhor").suggestions(false).render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1d/0_8deeb_cd475dfc_orig)

**2. Follow Button**

_Requirements:_ `Widgets.scripts().twitter()` JavaScript bundle

_Code:_

`Widgets.twitter().followButton().account("prokhor_ozornin").render()`

`Widgets.twitter().followButton().account("prokhor_ozornin").suggestions(true).counter(false).screenName(false).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1d/0_8dee9_39fe8a8c_orig)

**Vimeo**

**1. Embedded video**

_Requirements:_ None

_Code:_

`Widgets.vimeo().video().id("55456906").width("640").height("480").render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1d/0_8deec_a89cc026_orig)

**Vkontakte**

**1. Embedded video**

_Requirements:_ None

_Code:_

`Widgets.vkontakte().video().id("167533148").hash("7a0cdf6ef7a69e67").user("5707198").width("607").height("360").hd(true).render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1e/0_8def8_8c281838_orig)

**2. JS API initialization**

_Requirements:_ `Widgets.scripts().vkontakte()` JavaScript bundle (_head_ section).

_Code:_

`Widgets.vkontakte().initialize().apiId("3816272").render()`

**3. OAuth Button**

_Requirements:_ Call to `Widgets.vkontakte().initialize()`

_Code:_

`Widgets.vkontakte().authButton().standard("http://yandex.ru").render()`

`Widgets.vkontakte().authButton().dynamic("onAuth").width(640).render()`

![](http://img-fotki.yandex.ru/get/5204/80185211.1e/0_8ee77_efa1aeb_orig)

**4. Comments**

_Requirements:_ Call to `Widgets.vkontakte().initialize()`

_Code:_

`Widgets.vkontakte().comments().render()`

`Widgets.vkontakte().comments().attach(Widgets.Vkontakte().CommentsAttach.ALL).limit(Widgets.Vkontakte().CommentsLimit.LIMIT_15).autoPublish(true).autoUpdate(true).mini(true).render()`

![](http://img-fotki.yandex.ru/get/9822/80185211.1d/0_8deef_1d93c587_orig)

**5. Community**

_Requirements:_ Call to `Widgets.vkontakte().initialize()`

_Code:_

`Widgets.vkontakte().community().account("44545550").render()`

`Widgets.vkontakte().community().account("44545550").mode(Widgets.Vkontakte().CommunityMode.NEWS).height(400).width(600).backgroundColor("AABBCC").textColor("FF0000").buttonColor("00FF00").render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1e/0_8def1_155d6ab8_orig)

**6. Like Button**

_Requirements:_ Call to `Widgets.vkontakte().initialize()`

_Code:_

`Widgets.vkontakte().likeButton().render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1e/0_8def2_6a491b94_orig)

**7. Poll**

_Requirements:_ Call to `Widgets.vkontakte().initialize()`

_Code:_

`Widgets.vkontakte().poll().id("6564504_c2a6ccb7df15aff473").render()`

`Widgets.vkontakte().poll().id("6564504_c2a6ccb7df15aff473").width(640).render()`

![](http://img-fotki.yandex.ru/get/5204/80185211.1e/0_8ee78_e69406c8_orig)

**8. Wall Post**

_Requirements:_ Call to `Widgets.vkontakte().initialize()`

_Code:_

`Widgets.vkontakte().post().id(45616).owner(1).hash("Yss6aNhrrQhOL5FfXZeuga8yKA").render()`

`Widgets.vkontakte().post().id(45616).owner(1).hash("Yss6aNhrrQhOL5FfXZeuga8yKA").width(640).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1e/0_8def5_d36b01d0_orig)

**9. Recommendations Feed**

_Requirements:_ Call to `Widgets.vkontakte().initialize()`

_Code:_

`Widgets.vkontakte().recommendations().render()`

`Widgets.vkontakte().recommendations().limit(Widgets.Vkontakte().RecommendationsLimit.TEN).max(50).period(Widgets.Vkontakte().RecommendationsPeriod.MONTH).sorting(Widgets.Vkontakte().RecommendationsSorting.LIKES).verb(Widgets.Vkontakte().RecommendationsVerb.LIKE).target("_blank").render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1e/0_8def6_9a22aa7c_orig)

**10. Subscription**

_Requirements:_ Call to `Widgets.vkontakte().initialize()`

_Code:_

`Widgets.vkontakte().subscription().account("5707198").render()`

`Widgets.vkontakte().subscription().account("5707198").onlyButton(true).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1e/0_8def7_62688243_orig)

**Yandex**

**1. Metrika**

_Requirements:_ None

_Code:_

`Widgets.yandex().analytics().account("12066574").render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1e/0_8defa_a0bc72d8_orig)

**2. Like Button**

_Requirements:_ None

_Code:_

`Widgets.yandex().likeButton().render()`

`Widgets.yandex().likeButton().title("Yandex Main Page").text("Share").url("http://yandex.ru").size(Widgets.Yandex().LikeButtonSize.SMALL).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1e/0_8def9_dcb28653_orig)

**3. Embedded video**

_Requirements:_ None

_Code:_

`Widgets.yandex().video().id("6ea0ugstkx.2528").user("leonevskiy").width("450").height("253").render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1e/0_8deff_387a5ec2_orig)

**4. Yandex.Money payment button**

_Requirements:_ None

_Code:_

`Widgets.yandex().moneyButton().account("41001577953208").sum(15.5).description("Test Payment").render()`

`Widgets.yandex().moneyButton().account("41001577953208").sum(15.5).description("Test Payment").type(Widgets.Yandex().MoneyButtonType.CARD).text(Widgets.Yandex().MoneyButtonText.BUY).size(Widgets.Yandex().MoneyButtonSize.MEDIUM).color(Widgets.Yandex().MoneyButtonColor.WHITE).askPayerAddress(true).askPayerEmail(true).askPayerFullName(true).askPayerPhone(true).render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1e/0_8defb_508fd66c_orig)

**5. Yandex.Money donation form**

_Requirements:_ None

_Code:_

`Widgets.yandex().moneyDonateForm().account("41001577953208").descriptionText("Test Donation").render()`

`Widgets.yandex().moneyDonateForm().account("41001577953208").descriptionText("Test Donation").description().sum(15.5).cards(true).projectName("Yandex").projectSite("http://yandex.ru").text(Widgets.Yandex().MoneyDonateFormText.GIVE).askPayerPhone(true).askPayerFullName(true).askPayerComment(true).askPayerEmail(true).render()`

![](http://img-fotki.yandex.ru/get/5203/80185211.1e/0_8defc_3a3f4bf0_orig)

**6. Yandex.Money payment form**

_Requirements:_ None

_Code:_

`Widgets.yandex().moneyPaymentForm().account("41001577953208").description("Test Payment").render()`

`Widgets.yandex().moneyPaymentForm().account("41001577953208").description("Test Payment").sum(15.5).cards(false).text(Widgets.Yandex().MoneyPaymentFormText.TRANSFER).askPayerComment(true).askPayerEmail(true).askPayerFullName(true).askPayerAddress(true).askPayerPhone(true).askPayerPurpose(true).render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1e/0_8defd_154be7bd_orig)

**7. Share Button**

_Requirements:_ `Widgets.scripts().yandex()` JavaScript bundle

_Code:_

`Widgets.yandex().sharePanel().render()`

`Widgets.yandex().sharePanel().services(["facebook"]).language("en").render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1e/0_8defe_9ec5f03a_orig)

**YouTube**

**1. Embedded video**

_Requirements:_ None

_Code:_

`Widgets.youtube().video().id("eYJSlHiXegI").width("100%").height("480").render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1e/0_8df00_839c0d10_orig)

**VideoJS**

**1. Media Player**

_Requirements:_ 

- `Widgets.scripts().videojs()` JavaScript bundle

- `Widgets.styles().videojs()` CSS bundle  (_head_ section)

_Code:_

`Widgets.videojs().player().width("640").height("480").videos({"http://vjs.zencdn.net/v/oceans.mp4" : Widgets.VideoContentTypes.MP4, "http://vjs.zencdn.net/v/oceans.webm" : Widgets.VideoContentTypes.WEBM}).extra('<track kind="captions" src="http://www.videojs.com/vtt/captions.vtt" srclang="en" label="English"/>').render()`

![](http://img-fotki.yandex.ru/get/9489/80185211.1e/0_8deee_352bf71e_orig)