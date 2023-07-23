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
            name: 'description',
            label: 'Description',
            type: 'textarea',
        },
        {
            name: 'skills',
            label: 'Skills',
            type: 'relationship',
            relationTo: 'skills',
            hasMany: true,
        },
        slug,
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