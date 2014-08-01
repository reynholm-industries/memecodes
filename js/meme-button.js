/**
 * Created by Silvano on 31/07/14.
 */
(function() {
    tinymce.PluginManager.add( 'tinymce_meme_button', function( editor, url ) {
        editor.addButton( 'tinymce_meme_button', {
            type: 'menubutton',
            icon: 'icon meme-icon',
            menu: [{
                text: 'Small MeMe',
                onclick: function() {
                    editor.windowManager.open( {
                        title: 'Meme List',
                        body: [{
                            type: 'listbox',
                            name: 'level',
                            'values': [
                                { icon: 'icon meme-icon', text: 'allthethings', value: 'icon meme-icon' },
                                { text: 'areyoukiddingme', value: '4' },
                                { text: 'cerealspit', value: '5' },
                                { text: 'challengeaccepted', value: '6' }
                            ]
                        }],
                        onsubmit: function( e ) {
                            editor.insertContent( e.data.level );
                        }
                    }
                    );
                }
            },
            {
                text: 'Big MeMe'
            },
            {
                text: 'Gif MeMe'
            }]
        });
    });
})();