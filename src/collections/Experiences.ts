import type { CollectionConfig } from 'payload/types'
import slug from '../fields/slug'

const Experiences: CollectionConfig = {
    slug: 'experiences',
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
        },
        {
            name: 'featurePost',
            label: 'Feature Post',
            type: 'relationship',
            relationTo: 'posts',
            hasMany: false,
        },
        {
            name: 'stack',
            label: 'Stack',
            type: 'relationship',
            relationTo: 'stacks',
            hasMany: true,
        },
        slug,
        {
            name: 'layout',
            label: 'Layout',
            type: 'blocks',
            blocks: [

            ]
        },
        {
            name: 'startDate',
            label: 'Start Date',
            type: 'date',
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'monthOnly',
                    displayFormat: 'MMMM yyyy'
                }
            }
        },
        {
            name: 'endDate',
            label: 'End Date',
            type: 'date',
            admin: {
                position: 'sidebar',
                date: {
                    pickerAppearance: 'monthOnly',
                    displayFormat: 'MMMM yyyy'
                }
            }
        },
    ]
}

export default Experiences