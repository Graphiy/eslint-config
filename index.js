module.exports = {
  extends: 'airbnb-base',
  rules: {
    // array1[i] = array2[j] should be possible
    'prefer-destructuring': ['error', { AssignmentExpression: { array: false } }],
    // Automatic semicolon insertion saves time and symbols
    semi: ['error', 'never'],
    'func-names': 0,
    // 4 symbols is too much for max 100 string length
    indent: ['error', 2],
    'vars-on-top': 0,
    'comma-dangle': ['error', 'always-multiline'],
    'space-before-function-paren': ['error', 'always'],
    // clean after debugging
    'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
    // it is necessary to document what is passed to callback
    'no-unused-vars': ['error', { args: 'none' }],
    // undefined is pretty usefull by itself
    'no-undefined': 0,
    // no need in empty parentheses after self-explanatory new tagKeysword
    'new-parens': 0,
    // let's deprecate C++ than
    'no-plusplus': 0,
    'no-loop-func': 0,
    // mutational functions are a great feature of JS
    'no-param-reassign': 0,
    // linting is a bad way to fix language
    'no-continue': 0,
    // naming convention for private methods and params
    'no-underscore-dangle': 0,
    // non-critical errors can be just catched
    'no-empty': ['error', { allowEmptyCatch: true }],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
  },
  parserOptions: {
    sourceType: 'module',
  },
}
