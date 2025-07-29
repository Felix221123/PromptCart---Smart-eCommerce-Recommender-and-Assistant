import { CapitaliseFirstLetter } from "./CapitaliseFirstLetter";

export const ReplaceDashTAndCapitalise = (str: string | undefined) => {
  str = CapitaliseFirstLetter(str);
  str = str?.replace(/-/g, ' ');
  return str;
};