# cleanSpecialChars

It converts accented letters to its cleaned form like 'Ã' to 'A', Spaces to '-' and '&' to 'and'. The text is returned in Lower Case

## Usage / Examples

```javascript

cleanSpecialChars('ação & reação')
// Output: acao-reacao

cleanSpecialChars('ação & reação', {'&': 'and'});
// Output: acao-and-reacao

```