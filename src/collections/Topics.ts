import type { CollectionConfig } from 'payload/types'

const Topics: CollectionConfig = {
    slug: 'topics',
    admin: {
        useAsTitle: 'title'
    },
    access: {
        read: (): boolean => true,
    },
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text'
        }
    ]
}

export default Topics