System.register('beeta-dev/ext-ads/main', ['flarum/extend', 'flarum/app', 'flarum/components/WelcomeHero', 'flarum/components/DiscussionList', 'flarum/components/HeaderPrimary'], function (_export) {
    'use strict';

    var extend, app, WelcomeHero, DiscussionList, HeaderPrimary;
    return {
        setters: [function (_flarumExtend) {
            extend = _flarumExtend.extend;
        }, function (_flarumApp) {
            app = _flarumApp['default'];
        }, function (_flarumComponentsWelcomeHero) {
            WelcomeHero = _flarumComponentsWelcomeHero['default'];
        }, function (_flarumComponentsDiscussionList) {
            DiscussionList = _flarumComponentsDiscussionList['default'];
        }, function (_flarumComponentsHeaderPrimary) {
            HeaderPrimary = _flarumComponentsHeaderPrimary['default'];
        }],
        execute: function () {

            app.initializers.add('beeta-dev-ext-ads', function () {
                extend(HeaderPrimary.prototype, 'init', function () {
                    var script = '<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><script>(adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-3763973333557675", enable_page_level_ads: true });</script>';
                    setTimeout(function () {
                        $("body").prepend(script);
                    }, 300);
                });
                extend(WelcomeHero.prototype, 'init', function () {
                    var ads1 = '<div class="ads1" style="width:100%;text-align:center;margin: 0 0 10px 0;"><!-- Beeta 2.0 --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3763973333557675" data-ad-slot="1731508684" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>';
                    setTimeout(function () {
                        if ($(".UserPage").html() == undefined) {
                            $(".WelcomeHero .container").prepend(ads1);
                        }
                    }, 300);
                });
                extend(DiscussionList.prototype, 'init', function () {
                    var ads1 = '<div class="ads1" style="width:100%;text-align:center;margin: 0 0 10px 0;"><!-- Beeta 2.0 --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3763973333557675" data-ad-slot="1731508684" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>';
                    var ads2 = '<div class="ads2" style="width:100%;text-align:center;margin: 0 0 10px 0;"><!-- Beeta 2.0 --><ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-3763973333557675" data-ad-slot="1731508684" data-ad-format="auto"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></div>';
                    setTimeout(function () {
                        if ($(".UserPage").html() == undefined && $(".WelcomeHero").html() == undefined) {
                            $(".Hero .container").prepend(ads1);
                        }
                        if ($(".TagsPage-nav").html() == undefined && $(".UserPage-nav").html() == undefined) {
                            $(".sideNav").append(ads2);
                        }
                    }, 300);
                });
            });
        }
    };
});