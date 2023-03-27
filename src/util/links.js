
export default function cleanLink (link) {
  return link
    .replaceAll('æ', 'ae')
    .replaceAll('å', 'aa')
    .replaceAll('ø', 'oe')
    .replaceAll(' ', '%20')
}
