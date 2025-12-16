// eslint.config.js (Flat config)
import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import prettier from "eslint-config-prettier";

export default [
  // Ignore build & vendor folders (equivalent to "ignorePatterns")
  { ignores: ["dist", "node_modules"] },

  // Base ESLint recommended rules
  js.configs.recommended,

  // Project config: React + Hooks + A11y, with your parser options and settings
  {
    // Register plugins
    plugins: {
      react,
    },

    // Language/Parser options (equivalent to your parserOptions)
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module", // App code uses ES modules
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      // Browser globals and ES environment for application source
      globals: {
        ...globals.browser,
      },
    },

    // React settings (keep version detection)
    settings: {
      react: { version: "detect" },
    },

    // Combine recommended rules from plugin and apply your overrides
    rules: {
      // eslint-plugin-react recommended
      ...(react.configs.recommended?.rules ?? {}),

      // Your custom rules
      "react/prop-types": "off",
    },
  },

  // --- Targeted overrides to address specific files ---

  {
    // Node-based config/build files: CommonJS + Node globals
    files: [
      "webpack.config.js",
      "scripts/**/*.js",
      "scripts/**/*.cjs",
      "webpack.config.cjs",
    ],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "script", // CommonJS, so require/module/__dirname are valid
      globals: {
        ...globals.node,
        __dirname: "readonly",
        module: "readonly",
        require: "readonly",
        process: "readonly",
      },
    },
    // With correct globals, no-undef should stop firing.
  },

  {
    // Disable unescaped entity rule only where you hit the issue
    files: ["src/components/Accordian.js", "src/components/ApodContent.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "react/no-unescaped-entities": "off",
    },
  },

  {
    // Relax no-unused-vars for ApodPage: warn and ignore variables prefixed with _
    files: ["src/pages/ApodPage.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      "no-unused-vars": ["warn", { varsIgnorePattern: "^_" }],
    },
  },

  {
    // Frontend utility files that reference process.env (bundler replaces at build time)
    files: ["src/utilities/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        process: "readonly",
      },
    },
  },

  // Prettier: turn off rules that conflict with Prettier formatting
  // Place last so it can override any stylistic rules above
  prettier,
];
