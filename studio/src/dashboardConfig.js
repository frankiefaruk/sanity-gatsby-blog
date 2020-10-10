export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8154841433d5e7e9f7ff28',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-aqjcbyb6',
                  apiId: '4665eeae-3d24-4b44-b30d-225667fd242b'
                },
                {
                  buildHookId: '5f815484005db8ec40ecc5ad',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-321ygq6h',
                  apiId: '86d446d7-0521-4b14-a775-72b632830c1c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/frankiefaruk/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-321ygq6h.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
