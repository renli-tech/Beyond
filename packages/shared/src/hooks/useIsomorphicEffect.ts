/**
 * Credits:
 * https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-react/src/hooks/use-iso-morphic-effect.ts
 */

import { useLayoutEffect, useEffect } from "react";

export const useIsoMorphicEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
