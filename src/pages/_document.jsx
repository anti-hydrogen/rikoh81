import { ColorModeScript } from "@chakra-ui/react";
import Document, { Html, Head, Main, NextScript } from "next/document";

import colorMode from "@/theme/colorMode";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="shortcut icon"
            href="/favicon/favicon.ico"
            type="image/x-icon"
          />
        </Head>
        <body>
          <ColorModeScript
            initialColorMode={colorMode.config.initialColorMode}
          />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
