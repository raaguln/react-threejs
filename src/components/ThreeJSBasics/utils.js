export const colorToHex = (colorCode) => {
  if (colorCode[0] === "#") {
    const code = colorCode.split("#")
    return parseInt(`0x${code[1]}`, 16)
  }
  return colorCode
}
