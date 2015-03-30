/**
 * By default converts accented letters to its cleaned form like "Ã" to "A", Spaces to "-" and "&" to "and".
 * Also returns the text in Lower Case
 *
 * New rules that should run before de default cleaning can be passed as a parameter
 *
 * @param	{String}  			str - Text to be cleaned
 * @param	{Object Literal}	replaceRules - Specific rules
 * @return	{String} 			Text cleaned and in lower case
 */
var cleanSpecialChars = function(str, replaceRules) {
	'use strict';

	if (!str)
		return;

	var replaces = {
		"[<$+%>!`*‘|{?“=}/:\]": "",
		"[\\s#,@&]": "-",
		"[àáâãäå]": "a",
		"æ": "ae",
		"ç": "c",
		"[èéêë]": "e",
		"[ìíîï]": "i",
		"ñ": "n",
		"[òóôõö]": "o",
		"œ": "oe",
		"[ùúûü]": "u",
		"[ýÿ]": "y",
		"-+": "-",
		"^-+": "",
		"-+$": ""
	};

	for (var key in replaceRules) {
		str = str.replace(new RegExp(key, "gi"), replaceRules[key]);
	}


	for (var key in replaces) {
		str = str.replace(new RegExp(key, "gi"), replaces[key]);
	}

	return str.toLowerCase();
};

if (typeof module !== 'undefined' && module.exports)
	module.exports = cleanSpecialChars;
