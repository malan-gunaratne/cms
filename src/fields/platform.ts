import { Field } from 'payload/types'

export const platform: Field = {
    name: 'platform',
    label: 'Platform',
    type: 'group',
    fields: [
        {
            name: 'name',
            label: 'Platform Name',
            type: 'text',
        },
        {
            name: 'link',
            label: 'Link',
            type: 'text',
        },
        {
            name: 'svg',
            label: 'SVG Image',
            type: 'upload',
            relationTo: 'media',
        }
    ]
}

export default platform