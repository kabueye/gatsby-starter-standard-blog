'use strict';

module.exports = {
  url: 'https://gatsby-starter-standard-blog.netlify.app',
  pathPrefix: '/',
  title: 'Blog by John Doe',
  subtitle: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
  copyright: '© All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-73379983-2',
  useKatex: false,
  menu: [
    {
      label: 'Articles',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'Contact me',
      path: '/pages/contacts'
    }
  ],
  author: {
    name: 'John Doe',
    photo: '/photo.jpg',
    bio: 'Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.',
    contacts: {
      email: '',
      facebook: '#',
      telegram: '#',
      twitter: '#',
      github: '#',
      rss: '',
      vkontakte: '',
      linkedin: '#',
      instagram: '#',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      soundcloud: '',
      medium: '',
    }
  },
  labelReadMore: 'Read More',
  labelPublished: 'Published on',
  dateFormat: 'MMMM D, YYYY',
  isShowCategoriesInSidebar: true,
  isShowTagsInSidebar: true,
};
