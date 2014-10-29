/**
* Created with do-it-yourself-workshop.
* User: tema4ka
* Date: 2014-10-29
* Time: 01:12 PM
* To change this template use Tools | Templates.
*/



modules.define(
    'sssr', // имя блока
    ['i-bem__dom', 'jquery'], // массив зависимостей
    function(provide, BEMDOM, $) { // callback, в который передаем provide и модули, которые будем использовать (указали в зависимостях)
        provide(BEMDOM.decl(this.name, { // декларация блока
            onSetMod: { // конструктор для описания реакции на изменение значений модификаторов
                js: {
                    inited: function() {
                        
                        this._form = this.findBlockInside('form').on('submit', function() {
                            this.setMod('loading');
                            this._sendRequest();
                        }, this);                   
                    }
                },
                loading: function(modName, modVal){
                    this.findBlockInside('spin').setMod('progress', modVal);
                }
            },
            _sendRequest : function() {
                var formVal = this._form.getVal();
                this._xhr = $.ajax({
                    type: 'GET',
                    dataType: 'html',
                    cache: false,
                    url: 'https://sssr.bem.yandex.net/search/', //наша заготовленная "ручка"
                    data: formVal + '&twitter=on', // в переменной formVal должна храниться сериализованная форма, полученная с помощью публичного метода getVal() блока `form`
                    success: this._onSuccess,
                    context: this
                });    
               
            },
            _onSuccess: function(result) {
                console.log('ajax loaded');
                this.delMod('loading');
                BEMDOM.update(this.findBlockInside('content').domElem, result);
            }
        }
    ));
});