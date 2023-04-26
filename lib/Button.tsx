import { useState } from "react";
import { MantineProvider, Button as MantineButton } from "@mantine/core";

export function Button() {
  let [count, setCount] = useState(0);

  return (
    <MantineProvider>
      <MantineButton onClick={() => setCount((count) => count + 1)}>
        Count is {count}
      </MantineButton>
    </MantineProvider>
  );
}
