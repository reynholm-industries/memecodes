/**
 * Created by Silvano on 31/07/14.
 */

var memes = [
    { text : "allthethings"     , value: "../wp-content/plugins/memecodes/images/memes/allthethings.png" },
    { text : "areyoukiddingme"  , value: "../wp-content/plugins/memecodes/images/memes/areyoukiddingme.png" },
    { text : "cerealspit"       , value: "../wp-content/plugins/memecodes/images/memes/cerealspit.png" },
    { text : "challengeaccepted", value: "../wp-content/plugins/memecodes/images/memes/challengeaccepted.png" },
    { text : "dawsoncrying"     , value: "../wp-content/plugins/memecodes/images/memes/dawsoncrying.png" },
    { text : "feellikeasir"     , value: "../wp-content/plugins/memecodes/images/memes/feellikeasir.png" },
    { text : "firstworldproblem", value: "../wp-content/plugins/memecodes/images/memes/firstworldproblem.jpg" },
    { text : "fonzie"           , value: "../wp-content/plugins/memecodes/images/memes/fonzie.png" },
    { text : "foreveralone"     , value: "../wp-content/plugins/memecodes/images/memes/foreveralone.png" },
    { text : "freddie"          , value: "../wp-content/plugins/memecodes/images/memes/freddie.png" },
    { text : "fuckyeah"         , value: "../wp-content/plugins/memecodes/images/memes/fuckyeah.png" },
    { text : "genius"           , value: "../wp-content/plugins/memecodes/images/memes/genius.png" },
    { text : "jackie"           , value: "../wp-content/plugins/memecodes/images/memes/jackie.png" },
    { text : "mentira"          , value: "../wp-content/plugins/memecodes/images/memes/mentira.png" },
    { text : "nothingtodohere"  , value: "../wp-content/plugins/memecodes/images/memes/nothingtodohere.png" },
    { text : "notsureif"        , value: "../wp-content/plugins/memecodes/images/memes/notsureif.png" },
    { text : "okay"             , value: "../wp-content/plugins/memecodes/images/memes/okay.png" },
    { text : "success"          , value: "../wp-content/plugins/memecodes/images/memes/success.png" },
    { text : "trollface"        , value: "../wp-content/plugins/memecodes/images/memes/trollface.png" },
    { text : "yuno"             , value: "../wp-content/plugins/memecodes/images/memes/yuno.png" }
];

var meme_gifs = [
    { text : "boom"             , value: "../wp-content/plugins/memecodes/images/gifs/boom.gif" },
    { text : "chompy"           , value: "../wp-content/plugins/memecodes/images/gifs/chompy.gif" },
    { text : "dance"            , value: "../wp-content/plugins/memecodes/images/gifs/dance.gif" },
    { text : "dealwithit"       , value: "../wp-content/plugins/memecodes/images/gifs/dealwithit.gif" },
    { text : "gangnamstyle"     , value: "../wp-content/plugins/memecodes/images/gifs/gangnamstyle.gif" },
    { text : "gaytroll"         , value: "../wp-content/plugins/memecodes/images/gifs/gaytroll.gif" },
    { text : "happytear"        , value: "../wp-content/plugins/memecodes/images/gifs/happytear.gif" },
    { text : "mindblown"        , value: "../wp-content/plugins/memecodes/images/gifs/mindblown.gif" },
    { text : "timeforthat"      , value: "../wp-content/plugins/memecodes/images/gifs/timeforthat.gif" },
    { text : "winktongue"       , value: "../wp-content/plugins/memecodes/images/gifs/winktongue.gif" },
    { text : "yougotitdude"     , value: "../wp-content/plugins/memecodes/images/gifs/yougotitdude.gif" },
    { text : "zzz"              , value: "../wp-content/plugins/memecodes/images/gifs/zzz.gif" }
];


var small_memes_img_style = "style='width: 50px; height: 50px;'";
var gif_memes_img_style = "style='width: 25px; height: 25px;'";
var big_memes_img_style = "style='margin-top: 10px'";
var h2_style = "style='margin-top: 5px; color: #ffffff'";
var big_memes_div_style = "style='margin: 0 auto; margin-bottom: 5px; background-color:#000000; " +
    "width: 320px; height: 350px; text-align: center;'";


(function() {
    tinymce.PluginManager.add( 'tinymce_meme_button', function( editor, url ) {
        editor.addButton( 'tinymce_meme_button', {
            type: 'menubutton',
            icon: 'icon meme-icon',
            menu: [
                {
                    text: 'Small MeMe',
                    onclick: function() {
                        editor.windowManager.open({
                            title: 'Meme List',
                            body: [
                                {
                                    type: 'listbox',
                                    name: 'level',
                                    values: memes
                                }
                            ],
                            onsubmit: function( e ) {
                                editor.insertContent( "<img src='" + e.data.level + "' " + small_memes_img_style + " >" );
                            }
                        });
                    }
                },

                {
                    text: 'Big MeMe',
                    onclick: function(){
                        editor.windowManager.open({
                            title: 'Meme List',
                            body: [
                                {
                                    type: 'listbox',
                                    name: 'level',
                                    values: memes
                                },
                                {
                                    type: 'textbox',
                                    name: 'title',
                                    label: 'Your message:'
                                }
                            ],
                            onsubmit: function( e ) {
                                editor.insertContent(
                                    "<section " + big_memes_div_style + ">" +
                                        "<img src='" + e.data.level + "' " + big_memes_img_style + ">" +
                                        "<h2 " + h2_style + ">" + e.data.title + "</h2>" +
                                    "</section>" );
                            }
                        });
                    }
                },

                {
                    text: 'Gif MeMe',
                    onclick: function() {
                        editor.windowManager.open({
                            title: 'Meme List',
                            body: [
                                {
                                    type: 'listbox',
                                    name: 'level',
                                    values: meme_gifs
                                }
                            ],
                            onsubmit: function( e ) {
                                editor.insertContent( "<img src='" + e.data.level + "' " + gif_memes_img_style + " >" );
                            }
                        });
                    }
                }
            ]
        });
    });
})();