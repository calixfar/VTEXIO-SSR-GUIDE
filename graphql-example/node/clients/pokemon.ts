import type { InstanceOptions, IOContext } from '@vtex/api'
import { ExternalClient } from '@vtex/api'

export class PokemonClient extends ExternalClient {

  constructor(context: IOContext, options?: InstanceOptions) {
    super('https://pokeapi.co', context, options)
  }

  public get = () => {
    return this.http.get('/api/v2/pokemon')
  }
}
