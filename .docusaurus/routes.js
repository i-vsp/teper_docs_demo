import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/teper_docs_demo/HelloWorld',
    component: ComponentCreator('/teper_docs_demo/HelloWorld', '5fd'),
    exact: true
  },
  {
    path: '/teper_docs_demo/markdown-page',
    component: ComponentCreator('/teper_docs_demo/markdown-page', 'fcc'),
    exact: true
  },
  {
    path: '/teper_docs_demo/docs',
    component: ComponentCreator('/teper_docs_demo/docs', '80f'),
    routes: [
      {
        path: '/teper_docs_demo/docs',
        component: ComponentCreator('/teper_docs_demo/docs', 'ee1'),
        routes: [
          {
            path: '/teper_docs_demo/docs',
            component: ComponentCreator('/teper_docs_demo/docs', '256'),
            routes: [
              {
                path: '/teper_docs_demo/docs/category/pero-que-tenemos-aqui',
                component: ComponentCreator('/teper_docs_demo/docs/category/pero-que-tenemos-aqui', 'f96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/teper_docs_demo/docs/category/ya-conoces-los-tacos',
                component: ComponentCreator('/teper_docs_demo/docs/category/ya-conoces-los-tacos', '253'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/teper_docs_demo/docs/examen',
                component: ComponentCreator('/teper_docs_demo/docs/examen', 'e7f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/teper_docs_demo/docs/Hello',
                component: ComponentCreator('/teper_docs_demo/docs/Hello', '57a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/teper_docs_demo/docs/pero_que_es_esto/tambien-tenemos-juegos',
                component: ComponentCreator('/teper_docs_demo/docs/pero_que_es_esto/tambien-tenemos-juegos', '3e9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/teper_docs_demo/docs/ya_conoces_los_tacos/origen-tacos',
                component: ComponentCreator('/teper_docs_demo/docs/ya_conoces_los_tacos/origen-tacos', '5a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/teper_docs_demo/docs/ya_conoces_los_tacos/tipos-tacos',
                component: ComponentCreator('/teper_docs_demo/docs/ya_conoces_los_tacos/tipos-tacos', '2dc'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/teper_docs_demo/',
    component: ComponentCreator('/teper_docs_demo/', 'e60'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
