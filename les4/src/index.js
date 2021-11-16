import Cleave from 'cleave.js';
require('cleave.js/dist/addons/cleave-phone.be');

  var cleave = new Cleave('.input-phone', {
    phone: true,
    phoneRegionCode: '{country}'
});

                  