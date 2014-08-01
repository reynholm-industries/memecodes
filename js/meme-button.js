/**
 * Created by Silvano on 31/07/14.
 */
var memes = [
    { text : "allthethings"     , value: "../wp-content/plugins/memecodes/images/medium/allthethings.png" },
    { text : "areyoukiddingme"  , value: "../wp-content/plugins/memecodes/images/medium/areyoukiddingme.png" },
    { text : "cerealspit"       , value: "../wp-content/plugins/memecodes/images/medium/cerealspit.png" },
    { text : "challengeaccepted", value: "../wp-content/plugins/memecodes/images/medium/challengeaccepted.png" },
    { text : "feellikeasir"     , value: "../wp-content/plugins/memecodes/images/medium/feellikeasir.png" },
    { text : "firstworldproblem", value: "../wp-content/plugins/memecodes/images/medium/firstworldproblem.png" }
];

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
                                editor.insertContent( "<img src='" + e.data.level + "'>" );
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
                                editor.insertContent( "<img src='" + e.data.level + "'>" );
                            }
                        });
                    }
                },

                {
                    text: 'Gif MeMe'
                }
            ]
        });
    });
})();