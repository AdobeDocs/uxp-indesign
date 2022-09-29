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
  pathPrefix: process.env.PATH_PREFIX || '/indesign/uxp/scripting/',
  siteMetadata: {
    versions: [
      {
        title: 'v18.0',
        selected: true
      },
      {
        title: 'v19.0',
        path: 'https://github.com/AdobeDocs/dev-site'
      }
    ],
    pages: [
      {
        title: 'UXP for InDesign',
        path: '/'
      },
      {
        title: 'Scripting',
        menu: [
          {
            title: 'Guides',
            //description: 'Cat Reporting API',
            path: '/guides/'
          },
          {
            title: 'Getting Started',
            description: 'Hello World',
            path: '/omv/'
          },
          {
            title: 'Samples',
            description: 'Script sample repo',
            path: '/omv/'
          },
        ]
      },
      {
        title: 'Plugins',
        path: '/comingsoon/'
      },
      {
        title: 'InDesign Server',
        menu: [
          {
            title: 'IDS 18.0',
            //description: 'Cat Reporting API',
            path: '/omv/'
          },
          {
            title: 'IDS v19.0',
           // description: 'Cat API Spec',
            path: '/omv/'
          }
        ]
      },
      {
        title: 'OMV',
        menu: [
          {
            title: 'OMV 18.0',
            //description: 'Cat Reporting API',
            path: '/omv/'
          },
          {
            title: 'OMV v19.0',
           // description: 'Cat API Spec',
            path: '/omv/'
          }
        ]
      },
      {
        title: 'Support',
        path: '/support/'
      },
          {
        title: 'Community',
        path: '/support/'
      }
    ],
    subPages: [
      {
        title: 'Get Started',
        path: '/guides/',
        pages: [
          {
            title: 'Dummy an OAuth Client',
            path: '/guides/dummy_oauth_client/'
          },
        
          {
            title: 'Dummy OAuth using POSTMAN',
            path: '/guides/dummy_using_postman/'
          }
        ]
      },
      {
        title: 'Cat Metrics API',
        path: '/guides/dummy_metrics_api/'
      },
      {
        title: 'Migrating',
        path: '/guides/migrating/'
      },
      {
        title: 'Overview',
        path: '/support/',
        header: true,
        pages: [
          {
            title: 'Help',
            path: '/support/'
          },
          {
            title: 'FAQ',
            path: '/support/FAQ/'
          },
          {
            title: 'How to contribute',
            path: '/support/contribute/'
          }
        ]
      },
      {
        title: 'Community',
        path: '/support/community/',
        header: true,
        pages: [
          {
            title: 'Information',
            path: '/support/community/'
          }
        ]
      }
    ]
  },
  plugins: [`@adobe/gatsby-theme-aio`]
};
