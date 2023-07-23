import { Field } from 'payload/types'

export const link: Field = {
    name: 'link',
    label: 'Link',
    type: 'group',
    fields: [
        {
            name: 'label',
            label: 'Label',
            type: 'text',
            required: true,
        },
        {
            name: 'page',
            label: 'Page to link to',
            type: 'relationship',
            relationTo: 'pages',
        },
    ]
}

export default link