# lt-jshint - JSHint for Lighttable

Integrates [jshint](http://jshint.com/) linting in Lighttable.

Alternate implementation to the [JSHint](https://github.com/LightTable/JSHint) plugin, that uses the [Linting plugin](https://github.com/bbbates/lt-lint) to display results.

## JSHint configuration

To customise jshint, as per [the jshint documentation](http://jshint.com/docs/options/), set the options via the ```lt.plugins.lt-lint/register-linter``` behaviour. For example, to [warn on missing curly braces](http://jshint.com/docs/options/#curly):

```
[:js-hinted :lt.plugins.lt-lint/register-linter [:lt.plugins.lt-jshint/js-hinter {:curly true}]]
```


## License

Copyright © 2016 Brendan Bates

Distributed under the Eclipse Public License, the same as Clojure.
