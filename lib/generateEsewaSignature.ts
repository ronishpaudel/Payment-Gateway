import CryptoJS from "crypto-js";

export function generateEsewaSignature(
  secretKey: string,
  message: string
): string {
  const hash = CryptoJS.HmacSHA256(message, secretKey);
  return CryptoJS.enc.Base64.stringify(hash);
}
