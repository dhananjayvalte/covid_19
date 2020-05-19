const _ = require('lodash');

module.exports = _.merge({},
    require('./registration/registrationFormHandler'),
    require('./registration/screeningDeatilsHandler.js'),
    require('./registration/ScreeningDetailsFollowup.js')
);