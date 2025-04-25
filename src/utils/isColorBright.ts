export function isColorBright(hexColor:string) {
  // Remove the '#' if it exists
  hexColor = hexColor.replace('#', '');

  // Parse hex values to RGB
  if(hexColor.length!==3 && hexColor.length!==6) return true;

  const short = hexColor.length===3

  const r = parseInt(hexColor.substring(0, short ? 1 : 2), 16) / 255;
  const g = parseInt(hexColor.substring(short ? 1 : 2, short? 2 : 4), 16) / 255;
  const b = parseInt(hexColor.substring(short ? 2 : 4, short? 3 : 6), 16) / 255;

  // Calculate luminance
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // Determine if bright or dark
  return luminance > 0.5;
}