import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  // Required
  framework: '@storybook/react-webpack5',
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  // Optional
  addons: [
	"@storybook/addon-webpack5-compiler-swc",
	"@storybook/addon-onboarding",
	"@storybook/addon-links",
	"@storybook/addon-essentials",
	"@chromatic-com/storybook",
	"@storybook/addon-interactions",
	],
  docs: {
    autodocs: 'tag',
  },
  swc: () => ({
    jsc: {
      transform: {
        react: {
          runtime: "automatic",
        },
      },
    },
  }),
};

export default config;
