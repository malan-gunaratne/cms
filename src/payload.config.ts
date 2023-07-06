import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Media from './collections/Media';
import Pages from './collections/Pages';
import Experiences from './collections/Experiences';
import Projects from './collections/Projects';
import Posts from './collections/Posts';
import Topics from './collections/Topics';
import Stacks from './collections/Stacks';

export default buildConfig({
  serverURL: 'http://localhost:8000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Media,
    Pages,
    Experiences,
    Projects,
    Posts,
    Topics,
    Stacks
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
})
