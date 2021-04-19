export default {
  //
  name: 'metadata',
  title: 'General Settings',
  type: 'document',
  icon: () => `⚙️`,
  fields: [
    {
      name: 'title',
      title: ' Site Title',
      type: 'textField',
    },
    {
      name: 'description',
      title: ' General description',
      type: 'textAreaLocale'
    },
    {
      name: 'address',
      title: 'Adress',
      type: 'string'
    },
    {
      name: 'mail',
      title: 'E-Mail',
      type: 'string'
    },
    {
      name: 'tel',
      title: 'Tel',
      type: 'string'
    },
    {
      name: 'socialMedia',
      title: 'Social Media',
      type: 'array',
      of: [
        {
          name: 'socialNetwork',
          title: 'Social Network',
          type: 'socialNetwork',
        }
      ]
    }
  ]
}
