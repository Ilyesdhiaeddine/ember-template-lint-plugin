module.exports = {
  name: 'zestia',

  configurations: {
    recommended: {
      extends: 'recommended',
      rules: {
        'eol-last': 'never',
        'img-alt-attributes': false,
        'link-href-attributes': true,
        'link-rel-noopener': 'strict',
        'no-abstract-roles': true,
        'no-action': true,
        'no-action-modifiers': true,
        'no-args-paths': true,
        'no-element-event-actions': true,
        'no-extra-mut-helper-argument': true,
        'no-implicit-this': true,
        'no-negated-condition': true,
        'no-obsolete-elements': true,
        'no-positive-tabindex': true,
        'no-trailing-spaces': true,
        'require-button-type': true
      }
    }
  }
};

