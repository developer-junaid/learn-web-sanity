import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'course',
  title: 'Course',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'text',
      title: 'Hero Text',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills Text',
      type: 'string',
    }),
    defineField({
      name: 'tip',
      title: 'Tip',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Course Image (Portrait)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{type: 'reference', to: {type: 'video'}}],
    }),
  ],
})
