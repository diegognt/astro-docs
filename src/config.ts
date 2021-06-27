export const sidebar = [
  {
    text: 'Start Here',
    link: '',
    children: [
      { text: 'Installation', link: 'installation' },
      { text: 'Quickstart', link: 'quick-start' },
      { text: 'Examples', link: 'examples' },
    ],
  },
  {
    text: 'Core Concepts',
    link: 'core-concepts',
    children: [
      { text: 'Project Structure', link: 'core-concepts/project-structure' },
      { text: 'Astro Components', link: 'core-concepts/astro-components' },
      { text: 'Astro Pages', link: 'core-concepts/astro-pages' },
      { text: 'Astro Layouts', link: 'core-concepts/layouts' },
      { text: 'Collections', link: 'core-concepts/collections' },
      { text: 'React, Svelte, Vue, etc.', link: 'core-concepts/component-hydration' },
    ],
  },
  {
    text: 'Guides',
    link: 'guides',
    children: [
      { text: 'Styling & CSS', link: 'guides/styling' },
      { text: 'Data Fetching', link: 'guides/data-fetching' },
      { text: 'Markdown', link: 'guides/markdown-content' },
      { text: 'Imports', link: 'guides/imports' },
      // To be written when https://github.com/snowpackjs/astro/issues/501 is completed
      // { text: 'Pagination', link: 'guides/pagination' },
      { text: 'Deploy Your Website', link: 'guides/deploy' },
      { text: 'Publish NPM Components', link: 'guides/publish-to-npm' },
    ],
  },
  {
    text: 'Reference',
    link: 'reference',
    children: [
      { text: 'API Reference', link: 'reference/api-reference' },
      { text: 'CLI Reference', link: 'reference/cli-reference' },
      {
        text: 'Configuration Reference',
        link: 'reference/configuration-reference',
      },
      { text: 'Renderer Reference', link: 'reference/renderer-reference' },
    ],
  },
  // To add once rest of the site is complete
  // see https://github.com/snowpackjs/astro-docs/issues/9
  // {
  //   text: 'Integrations',
  //   link: 'integrations',
  //   children: [
  //     { text: 'Deploy Astro', link: 'integrations/deploy-astro' },
  //     { text: 'Data Sources / CMS', link: 'integrations/data-sources-cms' },
  //     { text: 'State Management', link: 'integrations/state-management' },
  //     {
  //       text: 'Styles & CSS Libraries',
  //       link: 'integrations/styles-and-css-libraries',
  //     },
  //     { text: 'Developer Tools', link: 'integrations/developer-tools' },
  //   ],
  // },
];