export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'projectTitle',
      title: 'Project Title',
      type: 'string',
    },
    {
      name: 'projectSubtitle',
      title: 'Project Subtitle',
      type: 'string',
    },
    {
      name: 'projectInfos',
      title: 'Project Infos',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Liste de paragraphes décrivant le projet',
    },
    {
      name: 'videoPlaceHolder',
      title: 'Video Placeholder',
      type: 'image',
      options: {hotspot: true},
    },
  ],
  preview: {
    select: {
      title: 'projectTitle',
      media: 'videoPlaceHolder',
    },
  },
}
