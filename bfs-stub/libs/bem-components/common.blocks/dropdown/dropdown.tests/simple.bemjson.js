({
    block : 'page',
    title : 'bem-components: dropdown',
    mods : { theme : 'normal' },
    head : [
        { elem : 'css', url : '_simple.css' },
        { elem : 'js', url : '_simple.js' }
    ],
    content : [

        { tag : 'h2', content : 'default' },
        {
            block : 'test',
            content : [
                {
                    block : 'dropdown',
                    mods : { switcher : 'link' },
                    switcher : 'link',
                    popup : 'bemjson'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button' },
                    switcher : 'button',
                    popup : 'bemjson'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', disabled : true },
                    switcher : 'disabled',
                    popup : 'bemjson'
                }
            ].map(function(content) { return { tag : 'p', content : content }; })
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'simple' },
        {
            block : 'test',
            content : [
                {
                    block : 'dropdown',
                    mods : { switcher : 'link', theme : 'simple' },
                    switcher : 'link',
                    popup : 'bemjson'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'link', theme : 'simple' },
                    switcher : { block : 'link', mods : { pseudo : true, bla : 'bla' }, content : 'custom link' },
                    popup : { block : 'button', mods : { theme : 'simple' }, text : 'popup button' }
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'simple' },
                    switcher : 'button',
                    popup : { block : 'popup', mods : { autoclosable : true, theme : 'simple' }, content : 'custom popup' }
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'simple', disabled : true },
                    switcher : 'disabled',
                    popup : 'bemjson'
                }
            ].map(function(content) { return { tag : 'p', content : content }; })
        },

        { tag : 'hr' },

        { tag : 'h2', content : 'normal' },
        {
            block : 'test',
            content : [
                {
                    block : 'dropdown',
                    mods : { switcher : 'link', theme : 'normal' },
                    switcher : 'link',
                    popup : 'bemjson'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'link', theme : 'normal' },
                    switcher : { block : 'link', mods : { pseudo : true, bla : 'bla' }, content : 'custom link' },
                    popup : { block : 'button', mods : { theme : 'normal', size : 'xl' }, text : 'popup button' }
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'normal', size : 's' },
                    switcher : 'button',
                    popup : { block : 'popup', mods : { autoclosable : true, theme : 'normal' }, content : 'custom popup' }
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'normal' },
                    switcher : {
                        block : 'bla',
                        content : { block : 'button', mods : { theme : 'normal', size : 'm' }, text : 'wrapped button' }
                    },
                    popup : 'bemjson'
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'normal', size : 'l' },
                    switcher : { block : 'button', mods : { togglable : 'check' }, text : 'custom button' },
                    popup : {
                        block : 'popup',
                        directions : ['top-center'],
                        mainOffset : 20,
                        secondaryOffset : 20,
                        content : 'custom popup'
                    }
                },
                {
                    block : 'dropdown',
                    mods : { switcher : 'button', theme : 'normal', size : 'xl', disabled : true },
                    switcher : 'disabled',
                    popup : 'bemjson'
                }
            ].map(function(content) { return { tag : 'div', attrs : { style : 'margin: 1em 0' }, content : content }; })
        }
    ]
});
