module.exports = {
    "root": true,
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint",
        "prettier"
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "airbnb",
        "prettier"
    ],
    "rules": {
        "no-param-reassign": 1,
        "import/extensions": 1,
        "import/no-unresolved": 1,
        "prettier/prettier": 2
    },
    "parserOptions": {
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname,
    },
}