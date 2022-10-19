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
        title: 'Guides',
        path: '/guides/'
      },

      {
        title: 'Plugins',
        path: '/plugins/'
      },
      {
        title: 'InDesign Server',
        path: '/server/'
      },
      {
        title: 'References',
        menu: [
          {
            title: 'UXP API',
            path: '/uxp/',
          },
          {
            title: 'InDesign API',
            path: '/omv/',
          },
          {
            title: 'Recipes',
            path: '/reference/recipes'
          }
        ]
      },
      {
        title: 'Code Samples',
        path: '/reference/reference/uxp-scripting-samples/'
      },
      {
        title: 'Support',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Guides overview',
        path: '/guides/',
        pages: [
          {
            title: 'Getting Started',
            path: '/guides/getting-started/'
          },
          {
            title: 'Platform Concepts', 
            path: '/guides/platform-concepts/'
          },
          {
            title: 'Debugging a Script',
            path: '/guides/debugging/'
          },
          {
            title: 'Migrating',
            path: '/guides/migrating-to-UXPScript/'
          },
          {
            title: 'Object Model',
            path: '/guides/object-modal/'
          },
          {
            title: 'Right to Left Scripting',
            path: '/guides/rtl-scripting/'
          },
          {
            title: 'IDJS File Association',
            path: '/guides/text-editor-association/'
          }
        ]
      },

      // {
      //   title: 'Reference',
      //   path: '/reference/',
      //   pages: [
      //     // {
      //     //   title: 'InDesign API',
      //     //   path: '/reference/API-reference/' todo: remove reference API
      //     // },
      //     // {
      //     //   title: 'InDesign API',
      //     //   path: '/omv/',
      //     //   pages: require('./omv.js'),
      //     // },
      //     {
      //       title: 'Recipes',
      //       path: '/reference/recipes/'
      //     },
      //     {
      //       title: 'Code samples',
      //       path: '/reference/uxp-scripting-samples/'
      //     }
        
        
      //   ]
      // },


      {
        title: 'InDesign Server',
        path: '/server/',
        pages: [
          {
            title: 'Get started',
            path: '/server/guides/'
          },
          {
            title: 'Reference',
            path: '/server/reference/'
          }        
        ]
      },
      {
        title: "UXP API",
        path: "/uxp/reference-js/",
        header: true,
        pages: [
          {
            title: "JavaScript Reference",
            path: "/uxp/reference-js/",
            pages: require("./reference-js.js"),
          },
          {
            title: "CSS Reference",
            path: "/uxp/reference-css/",
            pages: require("./reference-css.js"),
          },
          {
            title: "HTML Reference",
            path: "/uxp/reference-html/",
            pages: require("./reference-html.js"),
          },
          {
            title: "Spectrum UXP Reference",
            path: "/uxp/reference-spectrum/",
            pages: require("./reference-spectrum.js"),
          },
          {
            title: "Known Issues",
            path: "/uxp/known-issues/",
          },
        ],
      },

      {
        title: "InDesign API",
        path: "./omv.js",
        header: true,
        // pages: [
        //   {
        //     title: "InDesign API",
        //     path: "/omv/",
        //     pages: require("./omv.js"),
        //   },
        // ],
      },
    ]
  },
    plugins: [`@adobe/gatsby-theme-aio`]
};