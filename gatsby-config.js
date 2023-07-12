/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/indesign/uxp/',
  siteMetadata: {
    pages: [
      {
        title: 'UXP for InDesign',
        path: '/'
      },
      {
        title: 'Introduction',
        path: '/introduction/'
      },
      {
        title: 'Scripts',
        path: '/scripts/'
      },
      {
        title: 'Plugins',
        path: '/plugins/'
      },
      {
        title: 'Resources',
        path: '/resources/'
      },
      {
        title: 'References',
        menu: [
          {
            title: `What's New?`,
            path: '/changelog/',
          },
          {
            title: 'UXP API',
            path: '/indesign/uxp/reference/uxp-api/',
          },
          {
            title: 'InDesign API',
            path: '/indesign/dom/api/',
          }
        ]
      }
    ],
    subPages: [
      {
        title: 'Essentials',
        path: '/introduction/essentials/',
        header: true,
        pages: [
          {
            title: 'Programming languages',
            path: '/introduction/essentials/tech-stack/'
          },
          {
            title: 'Developer Tools',
            path: '/introduction/essentials/dev-tools/'
          }
        ]
      },
      {
        title: 'Next steps',
        path: '/introduction/next-steps/',
        header: true,
        pages: [
          {
            title: 'Scripts & Plugins',
            path: '/introduction/next-steps/script-and-plugin/'
          },
          {
            title: 'Share & Distribute',
            path: '/introduction/next-steps/distribution/',
            pages: [
              {
                title: "Packaging",
                path: "/introduction/next-steps/distribution/packaging/",
              },
              {
                title: "Options for Distribution",
                path: "/introduction/next-steps/distribution/distribution-options/",
              }
            ]
          }
        ]
      },
     /* {
        title: 'Applications',
        path: '/introduction/applications/',
        header: true,
        pages: [
          {
            title: 'InDesign Server',
            path: '/introduction/applications/ids/'
          },
          {
            title: 'InDesign Cloud Service',
            path: '/introduction/applications/idcs/'
          }
        ]
      }, */
      {
        title: 'Scripts',
        path: '/scripts/',
        header: true,
        pages: [
          {
            title: 'Getting started',
            path: '/scripts/getting-started/',
          },
          {
            title: 'Concepts',
            path: '/scripts/concepts/',
            pages: [
              {
                title: 'Script lifespan',
                path: '/scripts/concepts/script-lifespan/'
              },
              {
                title: 'Global await',
                path: '/scripts/concepts/global-await/',
              },
            ]
          },
          {
            title: 'Tutorials',
            path: '/scripts/tutorials/',
            pages: [
              {
                title: 'Passing Arguments to Scripts',
                path: '/scripts/arguments/'
              },
              {
                title: 'Script Result',
                path: '/scripts/script-result/'
              },
              {
                title: 'Debugging Scripts',
                path: '/scripts/debug/'
              },
              {
                title: 'Configure editor',
                path: '/scripts/editor-idjs/'
              },
            ]
          },
          {
            title: 'Advanced topics',
            path: '/scripts/advanced/'
          }
        ]
      },
      {
        title: 'Plugins',
        path: '/plugins/',
        header: true,
        pages: [
          {
            title: 'Getting started',
            path: '/plugins/getting-started/',
          },
          {
            title: 'Concepts',
            path: '/plugins/concepts/',
            pages: [
              {
                title: 'Entry points',
                path: '/plugins/concepts/entry-points/'
              },
              {
                title: 'Manifest',
                path: '/plugins/concepts/manifest/',
              },
            ]
          },
          {
            title: 'Tutorials',
            path: '/plugins/tutorials/',
            pages: [
              {
                title: 'Adding command entrypoints',
                path: '/plugins/tutorials/adding-command-entrypoints/'
              },
              {
                title: "Lifecycle hooks",
                path: "/plugins/tutorials/plugin-lifecycle-hooks/"
              },
              {
                title: "Communicate with other plugins",
                path: "/plugins/tutorials/inter-plugin-comm/"
              },
              {
                title: "Modularizing code",
                path: "/plugins/tutorials/importing-modules/"
              }
            ]
          },
          {
            title: 'Advanced topics',
            path: '/plugins/advanced/'
          },
        ]
      },
      {
        title: "Resources",
        path: "/resources/",
        header: true,
        pages: [
          {
            title: 'Fundamentals',
            path: '/resources/fundamentals/',
            header: true,
            pages: [
              {
                title: 'APIs',
                path: '/resources/fundamentals/apis/'
              },
              {
                title: 'DOM Version',
                path: '/resources/fundamentals/dom-versioning/'
              },
              {
                title: 'Object model',
                path: '/resources/fundamentals/object-model/'
              },
              {
                title: 'Measurement & positioning',
                path: '/resources/fundamentals/measurements-and-positioning/'
              },
              {
                title: "Create UI",
                path: "/resources/fundamentals/create-ui/"
              },
            ]
          },
          {
            title: 'Starters & Samples',
            path: '/resources/starter-kits/',
          },
          {
            title: 'Recipes',
            path: '/resources/recipes/',
            pages: require("./reference-recipes.js"),
          },
          /*{
            title: 'UDT Deep dive',
            path: '/resources/udt/'
          }*/
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};
