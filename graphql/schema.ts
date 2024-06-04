import { connectionPlugin, makeSchema } from 'nexus';
import { join } from 'path';
import * as resolvers from './resolvers';
import * as types from './types';

export const schema = makeSchema({
  plugins: [connectionPlugin()],
  types: {...types, ...resolvers},
  outputs: {
    typegen: join(process.cwd(), 'generated/nexus-typegen.ts'),
    schema: join(process.cwd(), 'generated/schema.graphql')
  }
})