# loopback-mixins-example

```
$ git clone https://github.com/clarkbw/loopback-mixins-example
$ cd loopback-mixins-example
$ npm install
$ npm test
$ npm start
```

This example is a loopback project that uses the mixin functionality available in [loopback-boot](https://github.com/strongloop/loopback-boot/) as of [v2.8.0](https://github.com/strongloop/loopback-boot/tree/v2.8.0).


* It shows how to load a mixin from another npm module:

  ```js
    { // this is the server/model-config.json file
      "_meta": {
        ...
        "mixins": [
          ...
          "../node_modules/loopback-ds-timestamp-mixin"
        ]
      }
    }
  ```
* It shows mixins being loaded via the following directories:
  * loopback-mixins-example/common/mixins/

    ```js
    { // this is the server/model-config.json file
      "_meta": {
        ...
        "mixins": [
          ...
          "../common/mixins"
        ]
      }
    }
    ```
  * loopback-mixins-example/server/mixins/

    ```js
    { // this is the server/model-config.json file
      "_meta": {
        ...
        "mixins": [
          ...
          "../server/mixins" //default directory for a mixin
        ]
      }
    }
    ```
* It does **NOT** show mixins being loaded via:
  * loopback-mixins-example/mixins/
* *To be determined*: What is the individual merit of these 3 separate directories?
