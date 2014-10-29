# checkbox

Блок `checkbox` («чекбокс», «флажок», «переключатель») позволяет управлять параметром выбора с двумя состояниями – включено и выключено. Используется, когда необходимо выбрать от нуля и более вариантов из предложенных.

Блок создает контейнер, содержащий нативный контрол чекбокс (элемент `control`) `<input class="checkbox__control" type="checkbox">`, который скрывается при использовании модификатора [theme](#theme).

Атрибут `autocomplete` принудительно переведен в состояние `off` для обеспечения корректной работы блока.

```bemjson
{
    block : 'checkbox',
    text : 'Вариант 1',
    name: 'name1',
    val: '1'
}
```

## Специализированные поля блока

Список зарезервированных полей входного BEMJSON:

<table>
    <tr>
        <th>Поле</th>
        <th>Тип</th>
        <th>Описание</th>
    </tr>
    <tr>
        <td>text</td>
        <td>
            <code>String</code>
        </td>
        <td>Задает текст чекбоксу.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>
            <code>String</code>
        </td>
        <td>Имя чекбокса, предназначено для того, чтобы обработчик формы мог его идентифицировать. Преобразуется в HTML-атрибут <code>name</code> вложенного блока <code>input</code>.</td>
    </tr>
    <tr>
        <td>val</td>
        <td>
            <code>String</code>
        </td>
        <td>Определяет значение, которое будет отправлено на сервер или получено с помощью клиентских скриптов. На сервер отправляется пара «имя=значение», где имя задается ключом <code>name</code> тега <code><input></code>, а значение — ключом <code>val</code>. Определяет каждый элемент, с тем, чтобы клиентская или серверная программа могла однозначно установить, какой пункт выбрал пользователь.</td>
    </tr>
    <tr>
        <td>icon</td>
        <td>
            <code>BEMJSON</code>
        </td>
        <td>Иконка, которая отображается с помощью блока <code>icon</code>.</td>
    </tr>
</table>

При необходимости дополнительные HTML-атрибуты блока могут быть заданы в зарезервированном поле `attrs` в BEMJSON.

##  Модификаторы блока

<a name="theme"></a>
### Темы `_theme`

Блок представлен в следующих темах:

 * simple
 * normal (**Важно:** При выборе темы `normal` необходимо указывать обязательный модификатор [size](#size).)

Без указания модификатора темы отображается [нативный](#native) вид контрола.

Наглядно показано на примерах ниже:

<a name="native"></a>
**default**

```bemjson
{
    block : 'checkbox',
    text : 'Default',
    name: 'default',
    val: '1'
}
```

**simple**

```bemjson
{
    block : 'checkbox',
    text : 'Тема simple',
    name: 'simple',
    val: '2',
    mods : { theme : 'simple' }
}
```

**normal**

```bemjson
{
    block : 'checkbox',
    text : 'Тема normal',
    name: 'normal',
    val: '3',
    mods : { theme : 'normal', size : 'm' }
}
```
<a name="size"></a>
### Размеры `_size`

Задает размер шрифта.

Модификатор реализован только в теме *normal*.

Доступно два размера реализации блока: **m**, **l**.

<table>
    <tr>
        <th>Размер<br>блока</th>
        <th>Размер<br>шрифта</th>
        <th>Высота строки<br>элемента <code>__box</code></th>
    </tr>
    <tr>
        <th>m</th>
        <td>13px</td>
        <td>14px</td>
    </tr>
    <tr>
        <th>l</th>
        <td>15px</td>
        <td>17px</td>
    </tr>
</table>

```bemjson
{
    block : 'checkbox',
    text : 'размер M',
    name: 'name2',
    val: '2',
    mods : { theme : 'normal', size : 'm' }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'размер L',
    name: 'name3',
    val: '3',
    mods : { theme : 'normal', size : 'l' }
}
```

### Типы `_type`

Блок может быть представлен в виде кнопки (модификатор `type` в значении `button`). В таком случае выбор элемента происходит нажатием на кнопку.

 Такой тип чекбокса приобретает все доступные модификаторы блока [button](..button/button.ru.md).

```bemjson
{
    block : 'checkbox',
    text : 'Кнопка-чекбокс',
    name: 'button',
    val: '1',
    mods : { theme : 'normal', size : 's', type : 'button' }
}
```

### Состояния

####  Выбран `_checked`

Модификатор `checked` в значении `true` определяет, что чекбокс отмечен (выбран).

Модификатор `checked` может быть применен ко всем чекбоксам в группе.

```bemjson
{
    block : 'checkbox',
    text : 'Отмечен',
    name: 'name1',
    val : 1,
    mods : { theme : 'normal', size : 'm', checked : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Отмечен',
    name: 'name2',
    val : 2,
    mods : { theme : 'normal', size : 'm', type : 'button', checked : true }
}
```
#### Неактивен `_disabled`

В состоянии «неактивен» блок виден, но недоступен для действий пользователя. Такой блок не может получить фокус путем нажатия на клавишу `Tab`, мышью или другими способами. В большинстве случаев к неактивному блоку применяются дополнительные стили, чтобы выделить его на странице.

```bemjson
{
    block : 'checkbox',
    text : 'Неактивен',
    name: 'name1',
    val : 1,
    mods : { theme : 'normal', size : 'm', disabled : true }
}
```

```bemjson
{
    block : 'checkbox',
    text : 'Неактивен',
    name: 'name2',
    val : 2,
    mods : { theme : 'normal', size : 'm', type : 'button', disabled : true }
}
```

#### В фокусе `_focused`

Модификатор `focused` в значении `true` автоматически выставляется блоку в момент, когда он находится в фокусе. Например, по нажатию клавиши `Tab` или при щелчке мышью.

Чекбокс, реализованный с помощью кнопки, при получении модификатора `focused`, приобретает желтую тень.

## Элементы блока

### `__box`

Элемент `box` служит для отрисовки чекбокса, нативный чекбокс скрыт.

Добавляется блоку на уровне шаблонизатора.

### Контрол `__control`

Элемент `control` служит для использования функциональности нативного контрола чекбокса.

Добавляется блоку на уровне шаблонизатора.