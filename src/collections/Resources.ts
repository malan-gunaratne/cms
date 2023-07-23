import type { CollectionConfig } from 'payload/types'
import slug from '../fields/slug'

const Resources: CollectionConfig = {
    slug: 'resources',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'createdAt']
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
            label: 'Resource Description',
            type: 'textarea',
        },
        {
            name: 'source',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text'
                },
                {
                    name: 'link',
                    label: 'Resource Link',
                    type: 'text'
                },
            ]
        },
        slug,
    ]
}

export default Resources