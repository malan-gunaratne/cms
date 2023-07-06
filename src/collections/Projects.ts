import type { CollectionConfig } from 'payload/types'
import slug from '../fields/slug'

const Projects: CollectionConfig = {
    slug: 'projects',
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
            name: 'isComplete',
            label: 'Completed',
            type: 'radio',
            defaultValue: 'no',
            options: [
                {
                    label: 'No',
                    value: 'no',
                },
                {
                    label: 'Yes',
                    value: 'yes',
                }
            ],
            admin: {
                position: 'sidebar',
            }
        },
        {
            name: 'completionDate',
            label: 'Date Completed',
            type: 'date',
            admin: {
                condition: (_, siblingData) => siblingData?.isComplete === 'yes',
                position: 'sidebar',
                date: {
                    pickerAppearance: 'monthOnly',
                    displayFormat: 'MMMM yyyy'
                }
            }
        }
    ]
}

export default Projects