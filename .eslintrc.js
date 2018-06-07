module.exports = {
  "env": {
    "mocha": true,
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "sourceType": "module"
  },
  "rules": {
    "unicode-bom": [ "error", "never" ],
    "indent": [ "error", 2 ],
    "linebreak-style": [ "error", "unix" ],
    "quotes": [ "error", "single" ],
    "no-console": [ "warn" ],
    "semi": [ "error", "always" ]
  }
};
