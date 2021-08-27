import { SystemProps } from ".";
import { Token } from "./types";

export const pseudoSelectors = {
  hover: ":hover",
  active: ":active",
  focus: ":focus",
  first: ":first",
  last: ":last",
  odd: ":odd",
  even: ":even",
  visited: ":visited"
};
export interface PseudoProps {
  /**
   * css `hover` property
   */
  hover?: Token<SystemProps | {}>;
  /**
   * css `active` property
   */
  active?: Token<SystemProps | {}>;
  /**
   * css `focus` property
   */
  focus?: Token<SystemProps | {}>;
  /**
   * css `first` property
   */
  first?: Token<SystemProps | {}>;
  /**
   * css `last` property
   */
  last?: Token<SystemProps | {}>;
  /**
   * css `even` property
   */
  odd?: Token<SystemProps | {}>;
  /**
   * css `even` property
   */
  even?: Token<SystemProps | {}>;
  /**
   * css `even` property
   */
  visited?: Token<SystemProps | {}>;
}
