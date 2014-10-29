({
    block: 'page',
    mix: { block: 'sssr', js: true },
    title: 'Hello, World!',
    styles: [
        { elem: 'css', url: '_index.css' }
    ],
    scripts: [
        { elem: 'js', url: '_index.js' }
    ],
    content: [
        {                                                                                                                                         
            elem: 'title', // Элемент блока                                                                                                       
            content: 'содержание заголовка'                                                                                                       
        },
        {                                                                                                                                                 
            block: 'header',                                                                                                                             
            mods: { type: 'simple' }, // Модификатор блока                                                                                                
            content: [    
                {
                    block: 'logo',
                    mix: { block: 'header', elem: 'logo' },
                    content: 'Social Services Search Robot'
                },
                {
                    block: 'form',
                    mix: { block: 'header', elem: 'form' },
                    
                    content: [
                        {
                            elem: 'search'
                        },
                        {
                            block: 'input',
                            mods: { theme: 'normal', size: 'm', 'has-clear' : true },
                            name: 'query',
                            placeholder: 'try me, baby!'
                        },
                        {
                            block : 'button',
                            mods: { theme: 'normal', size: 'm' },
                            type: 'submit',
                            text: 'Найти',
                            attrs: { type: 'submit' }
                        },
                        {
                            block: 'spin',
                            mods: { theme: 'normal', size: 'm' }
                        }

                    ]
                },
                {
                    block: 'island',
                    content: [
                        {
                            elem: 'header',
                            content: [
                                {
                                    block: 'user',
                                    content: [
                                        {
                                            block: 'link',
                                            mix: { block: 'user__name' },
                                            url: 'https://twitter.com/tadatuta',
                                            content: 'The link to freedom'
                                        },
                                        {
                                            elem: 'post-time',
                                            content: 'a second ago'
                                        },
                                        {
                                            block: 'image',
                                            mix: { block: 'user__icon' },
                                            url: 'https://pbs.twimg.com/profile_images/1384848690/image_400x400.jpg',
                                            alt: 'Sample image'
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            elem: 'text',
                            content: 'Simple post #1'
                        },
                        {
                            elem: 'footer',
                            content: [
                                {
                                    block: 'service',
                                    mods: { type: 'twitter' }
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            block: 'content',
            content: [
                "It's amazing and I'm amazed."
            ]
        }  
    ]
});
