import type { CollectionConfig } from 'payload/types'

const Stacks: CollectionConfig = {
    slug: 'stacks',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'description', 'createdAt']
    },
    access: {
        read: (): boolean => true,
    },
    fields: [
        {
            name: 'icon',
            label: 'Skill Icon',
            type: 'upload',
            relationTo: 'media',
            required: true,
            admin: {
                position: 'sidebar'
            }
        },
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

export default Stacks