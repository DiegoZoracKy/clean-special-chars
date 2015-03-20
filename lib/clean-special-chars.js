var cleanSpecialChars = function(str, replaceRules) {
	'use strict';

	/**
	 * By default converts accented letters to its cleaned form like "Ã" to "A", Spaces to "-" and "&" to "and".
	 * Also returns the text in Lower Case
	 *
	 * New rules that should run before de default cleaning can be passed as a parameter
	 *
	 * @param {String}  str - Text to be cleaned
	 * @param {JSON}    replaceRules - Specific rules
	 * @return {String} Text cleaned and in lower case
	 */

	if (!str)
		return;

	var replaces = {
		"[:'!@#$%^&*()_+-=]": "",
		"\\s": "-",
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
		"#": "-",
		",": "-",
		"\\?": "-",
		"-+": "-",
		"^-+": "",
		"-+$": ""
	};

	// if(replaceRules)
	//     extend(replaces, replaceRules);
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