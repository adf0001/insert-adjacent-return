
// insert-adjacent-return @ npm, call insertAdjacentHTML/Text/Element() and return the first inserted element/node.

//var insertAdjacent = function (target, position, data [, isText] )
var insertAdjacent = function (target, position, data, isText) {
	//id to element
	if (typeof target === "string") target = document.getElementById(target);

	//directly return for insertAdjacentElement()
	if (data instanceof Element) return target.insertAdjacentElement(position, data);

	var el;		//for return and fail checking
	if (position == "beforebegin") el = target.previousSibling;
	else if (position == "afterbegin") el = target.firstChild;
	else if (position == "beforeend") el = target.lastChild;
	else if (position == "afterend") el = target.nextSibling;

	isText ? target.insertAdjacentText(position, data)
		: target.insertAdjacentHTML(position, data);

	if (position == "beforebegin") {
		el = el ? el.nextSibling : target.parentNode.firstChild;
		return (el === target) ? null : el;		//fail checking
	}
	else if (position == "afterbegin") {
		return (target.firstChild === el) ? null : target.firstChild;		//fail checking
	}
	else if (position == "beforeend") {
		return el ? el.nextSibling : target.firstChild;		//null if fail
	}
	else if (position == "afterend") {
		return (target.nextSibling === el) ? null : target.nextSibling;		//fail checking
	}
}

// module

module.exports = exports = insertAdjacent;

//shortcut
exports.prependOut = function (target, data, isText) { return insertAdjacent(target, 'beforebegin', data, isText); }
exports.prepend = function (target, data, isText) { return insertAdjacent(target, 'afterbegin', data, isText); }
exports.append = function (target, data, isText) { return insertAdjacent(target, 'beforeend', data, isText); }
exports.appendOut = function (target, data, isText) { return insertAdjacent(target, 'afterend', data, isText); }
