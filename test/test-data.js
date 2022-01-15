
//global variable, for html page, refer tpsvr @ npm.
insert_adjacent_return = require("../insert-adjacent-return.js");

module.exports = {

	"insert_adjacent_return": function (done) {
		document.getElementById('divResult3').innerHTML = "";

		//insertAdjacent(target, position, data [, isText] )
		var a = insert_adjacent_return('divResult3', "afterbegin", '<span>aa</span> <span>bb</span> ');
		var c = insert_adjacent_return('divResult3', "beforeend", '<span>cc</span> ', true);	//text content
		var d = insert_adjacent_return(a, "afterend", '<span>dd</span> ');
		var e = insert_adjacent_return('divResult3', "beforeend", '');		//insert empty

		return a.textContent == 'aa' &&
			c.textContent == "<span>cc</span> " &&
			d.textContent == "dd" &&
			e == null
			;
	},
	".append/appendOut()": function (done) {
		document.getElementById('divResult3').innerHTML = "";

		//.append(target, data [, isText] )
		var a = insert_adjacent_return.append('divResult3', '<span>aa</span> <span>bb</span> ');
		//.appendOut(target, data [, isText] )
		var c = insert_adjacent_return.appendOut(a, '<span>cc</span>');
		return a.parentNode.textContent == 'aacc bb ';
	},
	".prepend/prependOut()": function (done) {
		document.getElementById('divResult3').innerHTML = "";

		//.prepend(target, data [, isText] )
		var a = insert_adjacent_return.prepend('divResult3', '<span>aa</span> <span>bb</span> ');
		//.prependOut(target, data [, isText] )
		var c = insert_adjacent_return.prependOut(a, '<span>cc</span>');
		return a.parentNode.textContent == 'ccaa bb ';
	},

};

// for html page
//if (typeof setHtmlPage === "function") setHtmlPage("title", "10em", 1);	//page setting
if (typeof showResult !== "function") showResult = function (text) { console.log(text); }

//for mocha
if (typeof describe === "function") describe('insert_adjacent_return', function () { for (var i in module.exports) { it(i, module.exports[i]).timeout(5000); } });
