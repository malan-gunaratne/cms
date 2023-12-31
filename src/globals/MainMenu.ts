import type { GlobalConfig } from 'payload/types'

import link from '../fields/link'

export const MainMenu: GlobalConfig = {
    slug: 'main-menu',
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'menuItems',
            type: 'array',
            fields: [
                link
            ],
        }
    ]
}