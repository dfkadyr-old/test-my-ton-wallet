export const shortAddress = (address: string, numOfLettersStart: number, numOfLettersEnd: number) => {
  return `${address.slice(0, numOfLettersStart)}...${address.slice(-numOfLettersEnd)}`
}
