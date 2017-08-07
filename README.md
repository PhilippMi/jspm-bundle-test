This test runs a bunch of different bundle expressions for [jspm](https://github.com/jspm/jspm-cli/). 
The first batch of bundle expressions tests how to exclude a dependency loaded via a plugin. 
The second batch are expressions which are excluding dependencies not loaded via a plugin.
### Output
```
./src/test                              [ 'src/test.js', 'src/dependency!lib/plugin.js' ]
./src/test - src/dependency!plugin      [ 'src/test.js' ]
./src/test - src/dependency             [ 'src/test.js', 'src/dependency!lib/plugin.js' ]
./src/test - src/**/*!plugin            [ 'src/test.js', 'src/dependency!lib/plugin.js' ]
./src/test - src/*!plugin               [ 'src/test.js', 'src/dependency!lib/plugin.js' ]
./src/test - **/something!plugin        [ 'src/test.js', 'src/dependency!lib/plugin.js' ]
./src/test2                             [ 'src/test2.js', 'src/dependency.js' ]
./src/test2 - src/dependency            [ 'src/test2.js' ]
./src/test2 - src/**/*                  []
./src/test2 - src/*                     []
./src/test2 - **/dependency             [ 'src/test2.js' ]
```
As you can see, excluding a dependency loaded via plugin only works if the dependency is explicitly excluded - globs don't seem to work.

## How to run it

1. `yarn`
2. `node bundle.js`
