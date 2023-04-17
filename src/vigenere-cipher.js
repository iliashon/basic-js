const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message[i];
      const keyChar = key[keyIndex];

      if (messageChar.match(/[A-Z]/)) {
        const messageCharCode = messageChar.charCodeAt(0);
        const keyCharCode = keyChar.charCodeAt(0);
        const encryptedCharCode = ((messageCharCode + keyCharCode - 130) % 26) + 65;
        result += String.fromCharCode(encryptedCharCode);

        keyIndex = (keyIndex + 1) % key.length;
      } else {
        result += messageChar;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let result = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage[i];
      const keyChar = key[keyIndex];

      if (encryptedChar.match(/[A-Z]/)) {
        const encryptedCharCode = encryptedChar.charCodeAt(0);
        const keyCharCode = keyChar.charCodeAt(0);
        const messageCharCode = ((encryptedCharCode - keyCharCode + 26) % 26) + 65;
        result += String.fromCharCode(messageCharCode);

        keyIndex = (keyIndex + 1) % key.length;
      } else {
        result += encryptedChar;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
