# cleanSpecialChars

It converts accented letters to its cleaned form like 'Ã' to 'A', 'ç' to 'c', '&!*' to '', etc. All spaces will be converted to '-' and the text is returned in Lower Case

## Usage / Examples

```javascript

cleanSpecialChars('ação & reação')
// Output: acao-reacao

cleanSpecialChars('ação & reação', {'&': 'and'});
// Output: acao-and-reacao

```