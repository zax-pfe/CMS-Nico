export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'aboutID',
      title: 'About ID',
      type: 'string',
      description: 'Id de la section About - laisser a About',
    },
    {
      name: 'aboutParagraphs',
      title: 'About Paragraphs',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Liste de paragraphes de la section About',
    },
  ],
}
