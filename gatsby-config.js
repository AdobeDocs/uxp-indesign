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
      },
      {
        title: 'Tutorials',
        path: '/scripts/',
        header: true,
        pages: [
          {
            title: 'Getting started',
            path: '/scripts/getting-started/',
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
            title: 'Passing Arguments to Scripts',
            path: '/scripts/arguments/'
          },
          {
            title: 'Script Result',
            path: '/scripts/script-result/'
          },
          {
            title: 'Tips & tricks',
            path: '/scripts/tips-and-tricks/'
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
            title: 'Plugin operations in UDT',
            path: '/plugins/udt/'
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
              }
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
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};