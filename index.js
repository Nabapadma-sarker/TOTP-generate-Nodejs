const totp = require('otplib').totp;
const secret = '<input your secret here>';

/* settings
digits is 10 digit
HMAC algorithm is HMAC-SHA512
Time step 30 second
*/
totp.options = {
  digits: 10,
  algorithm: 'sha512',
  epoch: Date.now(),
  step: 30
};

try {
  const password = totp.generate(secret);
  const isValid = totp.check(password, secret);
  console.log("generated Password: ", password);
  console.log('validate: ', isValid);
} catch (err) {
  console.error(err);
}