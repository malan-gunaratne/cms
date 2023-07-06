import { Block } from 'payload/types'

export const Page: Block = {    
    slug: 'postsPage',
    fields: [
        {
            name: 'title',
            label: 'Title',
            type: 'text'
        }
    ]   
}
