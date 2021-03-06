const { inputSlots, validatableEvents } = require('../helpers/variables')

module.exports = {
  'v-radio-group': {
    slots: inputSlots.concat(['label']),
    events: [
      {
        name: 'change',
        value: 'any',
      },
    ].concat(validatableEvents),
  },
}
