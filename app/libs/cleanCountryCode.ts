export default function cleanCountryCode(code: string) {
  const cleanCode = code.toLowerCase();
  const countryCode = cleanCode === 'eur' ? 'eu' : cleanCode.slice(0, 2);
  return countryCode;
}
