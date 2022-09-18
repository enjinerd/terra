import { useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme } from "@mantine/core";
import Router from "routes";

function App() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Router />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
