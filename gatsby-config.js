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
        title: 'References',
        menu: [
          {
            title: `What's new?`,
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
      },
      {
        title: 'Resources',
        path: '/resources/'
      }
    ],
    subPages: [
      {
        title: 'Topics',
        path: '/introduction/',
        header: true,
        pages: [
          {
            title: 'Overview',
            path: '/introduction/overview/'
          },
          {
            title: 'Scripts & Plugins',
            path: '/introduction/script-and-plugin/'
          },
          {
            title: 'APIs',
            path: '/introduction/dom-and-uxp/'
          },
          {
            title: 'Developer Tools',
            path: '/introduction/dev-tools/'
          },
          {
            title: 'Share & Distribute',
            path: '/introduction/distribution/'
          }
        ]
      },
      {
        title: 'Other products',
        path: '/introduction/other-products/',
        header: true,
        pages: [
          {
            title: 'InDesign Server',
            path: '/introduction/other-products/ids/'
          },
          {
            title: 'InDesign Cloud Service',
            path: '/introduction/other-products/idcs/'
          }
        ]
      },
      {
        title: 'Tutorials',
        path: '/scripts/',
        header: true,
        pages: [
          {
            title: 'Getting started',
            path: '/scripts/getting-started/',
            header: true,
            pages: [
              {
                title: 'Write your first script',
                path: '/scripts/getting-started/first-script/',
              },
              {
                title: 'Install and run',
                path: '/scripts/getting-started/run/'
              },
              {
                title: 'Debug',
                path: '/scripts/getting-started/debug/'
              }
            ]
          },
          {
            title: 'Concepts',
            path: '/scripts/concepts/'
          },
          {
            title: 'Migration guides',
            path: '/scripts/migration/'
          }
        ]
      },
      {
        title: 'Tutorials',
        path: '/plugins/',
        header: true,
        pages: [
          {
            title: 'Getting started',
            path: '/plugins/getting-started/',
            header: true,
            pages: [
              {
                title: 'Write your first plugin',
                path: '/plugins/getting-started/first-plugin/',
              },
              {
                title: 'Install and run',
                path: '/plugins/getting-started/run/'
              },
              {
                title: 'Debug',
                path: '/plugins/getting-started/debug/'
              }
            ]
          },
          {
            title: 'Concepts',
            path: '/plugins/concepts/',
            pages: [
              {
                title: 'Manifest',
                path: '/plugins/concepts/manifest/',
              },
              {
                title: 'Entry points',
                path: '/plugins/concepts/entry-points/'
              }
            ]
          },
          {
            title: 'Advanced topics',
            path: '/plugins/advanced/'
          },
          {
            title: 'Migration guides',
            path: '/plugins/migration/'
          }
        ]
      },
      {
        title: "Tutorials",
        path: "/resources/",
        header: true,
        pages: [
          {
            title: 'Best practices',
            path: '/resources/best-practices/',
          },
          {
            title: 'Starter kits',
            path: '/resources/starter-kits/',
          },
          {
            title: 'Recipes',
            path: '/resources/recipes/',
            pages: require("./reference-recipes.js"),
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};