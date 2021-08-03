/**
 * Credits : https://github.com/tailwindlabs/headlessui/blob/main/packages/%40headlessui-react/src/hooks/use-server-handoff-complete.ts
 */

import { useState, useEffect } from "react";

const state = { serverHandoffComplete: false };

export function useServerHandoffComplete() {
  const [serverHandoffComplete, setServerHandoffComplete] = useState(
    state.serverHandoffComplete
  );

  useEffect(() => {
    if (serverHandoffComplete === true) return;

    setServerHandoffComplete(true);
  }, [serverHandoffComplete]);

  useEffect(() => {
    if (state.serverHandoffComplete === false)
      state.serverHandoffComplete = true;
  }, []);

  return serverHandoffComplete;
}
