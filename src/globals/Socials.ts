import type { GlobalConfig } from 'payload/types'

import platform from '../fields/platform'

export const Socials: GlobalConfig = {
    slug: 'socials',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'socials',
            type: 'array',
            fields: [
                platform
            ]
        }
    ]
}