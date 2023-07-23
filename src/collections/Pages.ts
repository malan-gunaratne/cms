import type { CollectionConfig } from 'payload/types'
import { Page as HomePage } from '../templates/home' 
import { Page as ExperiencesPage } from '../templates/experience' 
import { Page as ProjectsPage } from '../templates/projects' 
import { Page as ResourcesPage } from '../templates/resources' 
import slug from '../fields/slug'

const Pages: CollectionConfig = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'loadTemplate', 'slug']
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
            name: 'loadTemplate',
            label: 'Load Template',
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
                },
            ],
        },
        {
            name: 'template',
            label: 'Choose Template',
            type: 'blocks',
            blocks: [
                HomePage,
                ExperiencesPage,
                ProjectsPage,
                ResourcesPage,
            ],
            maxRows: 1,
            admin: {
                condition: (_, siblingData) => siblingData?.loadTemplate === 'yes'
            }
        },
        slug
    ]
}

export default Pages