import { Block } from 'payload/types'

export const Page: Block = {    
    slug: 'workExperiencePage',
    fields: [
        {
            name: 'heroContent',
            label: 'Hero Section',
            type: 'group',
            fields: [
                {
                    name: 'heading',
                    label: 'Heading',
                    type: 'textarea',
                },
                {
                    name: 'subheading',
                    label: 'Subheading',
                    type: 'textarea',
                },
            ]
        },
        {
            name: 'experiences',
            label: 'Experiences',
            type: 'array',
            fields: [
                {
                    name: 'experience',
                    type: 'relationship',
                    relationTo: 'experiences',
                    required: true,
                },
            ]
        },
    ]   
}

