export type StylesFactoryFn = <S = {}>(styles: S, globalStyles: S) => S;

export const createStyles: StylesFactoryFn = <S>(
  styles: S,
  globalStyles: S
) => {
  return { ...globalStyles, ...styles };
};
