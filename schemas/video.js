import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'document',
  fields: [
    defineField({
      name: 'number',
      title: 'Number',
      type: 'string',
    }),
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'channel',
      title: 'Channel',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Channel Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
    }),
    defineField({
      name: 'href',
      title: 'Video URL',
      type: 'string',
    }),
    defineField({
      name: 'skills',
      title: 'Skills',
      type: 'array',
      of: [{type: 'reference', to: {type: 'skill'}}],
    }),
  ],

  preview: {
    select: {
      title: 'number',
      author: 'author.name',
      media: 'image',
    },
    prepare(selection) {
      const {author} = selection
      return {...selection, subtitle: author && `by ${author}`}
    },
  },
})
