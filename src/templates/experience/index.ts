import { Block } from 'payload/types'

export const Page: Block = {    
    slug: 'experiencesPage',
    fields: [
        {
            name: 'hero',
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
            name: 'milestones',
            label: 'Career',
            type: 'group',
            fields: [
                {
                    name: 'experiences',
                    label: 'Experiences',
                    type: 'array',
                    fields: [
                        {
                            type: 'row',
                            fields: [
                                {
                                    name: 'title',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'dates',
                                    type: 'text',
                                    required: true,
                                },

                            ],
                        },
                        {
                            name: 'experience',
                            type: 'relationship',
                            relationTo: 'experiences',
                            required: true,
                        },
                        {
                            name: 'descriptions',
                            label: 'Preview Descriptions',
                            type: 'array',
                            fields: [
                                {
                                    name: 'heading',
                                    type: 'text',
                                    required: true,
                                },
                                {
                                    name: 'body',
                                    type: 'textarea',
                                    required: true,
                                }
                            ]
                        },
                    ],
                }
            ]
        }
    ]   
}

