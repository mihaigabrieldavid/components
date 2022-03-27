import "@elastic/eui/dist/eui_theme_light.css";
import "../src/globals.css";
import { EuiContext, EuiProvider } from "@elastic/eui";
import { useGlobals } from "@storybook/client-api";
import { i18nMapping } from "../src";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  locale: "ro",
  locales: {
    en: "English",
    ro: "Română",
  },
};

export const decorators = [
  (Story) => {
    const [{ locale }] = useGlobals();
    return (
      <EuiContext i18n={{ mapping: i18nMapping[locale] }}>
        <EuiProvider colorMode="light">
          <Story />
        </EuiProvider>
      </EuiContext>
    );
  },
];
