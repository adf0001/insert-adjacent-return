# insert-adjacent-return
call insertAdjacentHTML/Text/Element() and return the first inserted element/node

# Install
```
npm install insert-adjacent-return
```

# Usage & Api
```javascript

var insert_adjacent_return = require("insert-adjacent-return");

document.getElementById('divResult3').innerHTML = "";

//insertAdjacent(target, position, data [, isText] )
var a = insert_adjacent_return('divResult3', "afterbegin", '<span>aa</span> <span>bb</span> ');
var c = insert_adjacent_return('divResult3', "beforeend", '<span>cc</span> ', true);	//text content
var d = insert_adjacent_return(a, "afterend", '<span>dd</span> ');
var e = insert_adjacent_return('divResult3', "beforeend", '');		//insert empty

a.textContent == 'aa' &&
	c.textContent == "<span>cc</span> " &&
	d.textContent == "dd" &&
	e == null
	;

document.getElementById('divResult3').innerHTML = "";

//.append(target, data [, isText] )
var a = insert_adjacent_return.append('divResult3', '<span>aa</span> <span>bb</span> ');
//.appendOut(target, data [, isText] )
var c = insert_adjacent_return.appendOut(a, '<span>cc</span>');
a.parentNode.textContent == 'aacc bb ';

document.getElementById('divResult3').innerHTML = "";

//.prepend(target, data [, isText] )
var a = insert_adjacent_return.prepend('divResult3', '<span>aa</span> <span>bb</span> ');
//.prependOut(target, data [, isText] )
var c = insert_adjacent_return.prependOut(a, '<span>cc</span>');
a.parentNode.textContent == 'ccaa bb ';

```
