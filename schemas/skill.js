import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skills',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'name',
      type: 'string',
    }),
  ],
})
