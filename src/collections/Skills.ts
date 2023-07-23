import type { CollectionConfig } from 'payload/types'

const Skills: CollectionConfig = {
    slug: 'skills',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'description', 'createdAt']
    },
    access: {
        read: (): boolean => true,
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text'
        },
        {
            name: 'description',
            label: 'Description',
            type: 'textarea'
        },
    ]
}

export default Skills