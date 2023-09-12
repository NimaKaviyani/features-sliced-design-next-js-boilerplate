import CryptoJS from "crypto-js";

class StringEncoderDecoder {
  private readonly secretKey: string;
  private static instance: StringEncoderDecoder;

  private constructor(secretKey: string) {
    this.secretKey = secretKey;
  }

  public static getInstance(secretKey: string): StringEncoderDecoder {
    if (!StringEncoderDecoder.instance) {
      StringEncoderDecoder.instance = new StringEncoderDecoder(secretKey);
    }
    return StringEncoderDecoder.instance;
  }

  public encode(str: string): string {
    return CryptoJS.AES.encrypt(str, this.secretKey).toString();
  }

  public decode(str: string): string {
    const bytes = CryptoJS.AES.decrypt(str, this.secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}

export default StringEncoderDecoder;
