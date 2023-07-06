import type { CollectionConfig } from 'payload/types'
import slug from '../fields/slug'

const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'topics', 'createdAt']
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
            type: 'textarea',
        },
        slug,
        {
            name: 'topics',
            label: 'Topics',
            type: 'relationship',
            relationTo: 'topics',
            hasMany: true,
            admin: {
                position: 'sidebar',
            }
        },
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [

            ],
        },
    ]
}

export default Posts