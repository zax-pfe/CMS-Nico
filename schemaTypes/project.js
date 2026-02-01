export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'projectID',
      title: 'Project ID',
      type: 'string',
    },
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
    {
      name: 'videoURL',
      title: 'Video URL',
      type: 'string',
    },
    {
      name: 'thumbnailURL',
      title: 'Thumbnail URL',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'projectTitle',
      media: 'videoPlaceHolder',
    },
  },
}
