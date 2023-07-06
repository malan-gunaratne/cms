import { Block } from 'payload/types'

export const Page: Block = {    
    slug: 'homePage',
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
                {
                    name: 'introductionHeading',
                    label: 'Introduction Heading',
                    type: 'text',
                },
                {
                    name: 'introductionBody',
                    label: 'Introduction Body',
                    type: 'textarea',
                },
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'pageLinkLabel',
                            label: 'Page Link Label',
                            type: 'text',
                        },
                        {
                            name: 'pageLink',
                            label: 'Page Link',
                            type: 'relationship',
                            relationTo: 'pages',
                        }
                    ]
                }
            ]
        },
        {
            name: 'posts',
            label: 'Posts Section',
            type: 'group',
            fields: [
                {
                    name: 'heading',
                    label: 'Heading',
                    type: 'text',
                },
                {
                    name: 'subheading',
                    label: 'Subheading',
                    type: 'textarea',

                },
                {
                    name: 'viewAllBtn',
                    label: 'View All Button Label',
                    type: 'text',
                    admin: {
                        width: '50%'
                    }
                }
            ]
        },
        {
            name: 'projects',
            label: 'Featured Projects Section',
            type: 'group',
            fields: [
                {
                    name: 'heading',
                    label: 'Heading',
                    type: 'text',
                },
                {
                    name: 'subheading',
                    label: 'Subheading',
                    type: 'textarea',
                },
                {
                    type: 'row',
                    fields: [
                        {
                            name: 'featuredProjects',
                            label: 'Featured Projects',
                            type: 'relationship',
                            relationTo: 'projects',
                        },
                        {
                            name: 'viewAllBtn',
                            label: 'View All Button Label',
                            type: 'text',
                        }
                    ]
                }
            ]
        }
    ]   
}

export default Page