import { Field } from 'payload/types'

export const link: Field = {
    name: 'link',
    label: 'Link',
    type: 'group',
    fields: [
        {
            name: 'type',
            type: 'radio',
            defaultValue: 'page',
            options: [
                {
                    label: 'Page',
                    value: 'page',
                },
                {
                    label: 'Custom URL',
                    value: 'custom'
                }
            ],
            admin: {
                layout: 'horizontal'
            }
        },
        {
            type: 'row',
            fields: [
                {
                    name: 'label',
                    label: 'Label',
                    type: 'text',
                    required: true,
                    admin: {
                        width: '50%',
                    },
                },
                {
                    name: 'page',
                    label: 'Page to link to',
                    type: 'relationship',
                    relationTo: 'pages',
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'page',
                        width: '50%',
                    },
                },
                {
                    name: 'url',
                    label: 'Custom URL',
                    type: 'text',
                    required: true,
                    admin: {
                        condition: (_, siblingData) => siblingData?.type === 'custom',
                        width: '50%'
                    }
                }
            ]
        }
    ]
}

export default link