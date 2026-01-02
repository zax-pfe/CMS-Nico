export default {
  name: 'projectHomePage',
  title: 'Project Home Page',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom du Projet',
      type: 'string',
    },
    {
      name: 'year',
      title: 'Année',
      type: 'string',
      description: 'Ex: 2024',
    },
    {
      name: 'src',
      title: 'Image Principale (Cover)',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'gif',
      title: 'Aperçu GIF',
      type: 'image',
      options: {hotspot: true},
    },
    {
      name: 'technos',
      title: 'Technologies utilisées',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'link',
      title: 'Page Link',
      type: 'string',
      description: 'doit commencer par Project ex: /projects/unep',
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'year',
      media: 'src',
    },
  },
}
