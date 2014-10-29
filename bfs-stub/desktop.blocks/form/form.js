/**
* Created with do-it-yourself-workshop.
* User: tema4ka
* Date: 2014-10-29
* Time: 11:13 AM
* To change this template use Tools | Templates.
*/

modules.define(
    'form', // имя блока
    ['i-bem__dom'], // массив зависимостей
    function(provide, BEMDOM) { // callback, в который передаем provide и модули, которые будем использовать (указали в зависимостях)
        provide(BEMDOM.decl(this.name, { // декларация блока. this.name = 'form'
            onSetMod: { // конструктор для описания реакции на изменение значений модификаторов
                js: {
                    inited: function() {                        
                        
                        this.bindTo('submit', this._onSubmit);
                        this.on('submit', function() {
                            console.log('BEM-event fired');
                            console.log(this.getVal());
                        });
                        
                        
                        console.log('block FORM inited');                        
                    }
                }
            },
            _onSubmit : function(e) {
                e.preventDefault();
                console.log("prevented");
                this.emit('submit');
            },
            getVal: function() {
                return this.domElem.serialize();
            }
        }
    ));
});

/*
BEMDOM.decl('form', {
        onSetMod : {
            'js' : {
                'inited': function() {
                    this.bindTo('submit', 'click', function(e) {
                        var domElem = $(e.currentTarget); // DOM-элемент, на котором слушается событие
                                                          // в данном случае то же, что this.elem('submit')
                        this._onSubmit(domElem);
                    });
                }
            }
        },

        _onSubmit : function(el) {
            el.preventDefault();
            console.log("prevented");
        }
    });
*/