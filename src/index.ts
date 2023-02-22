import { NhostClient } from '@nhost/nhost-js'

import schema from './schema'

const nhost = new NhostClient({ schema, subdomain: 'localhost' })

nhost.graphql.query.users({ select: { locale: true } })

nhost.graphql.mutation.insertUsers({
    variables: { objects: [{ locale: 'en' }] },
    select: { affected_rows: true }
})
