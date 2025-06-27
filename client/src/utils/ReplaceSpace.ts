export const ReplaceSpaceInWords = (str: string) => {
  // convert all letters to lowercase
  str = str.toLowerCase();
  return str.replace(/ /g, '-');
};