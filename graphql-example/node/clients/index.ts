import { IOClients } from '@vtex/api'

import { BookClient } from './book'
import { MarkdownClient } from './markdown'
import { PokemonClient } from './pokemon'

export class Clients extends IOClients {
  public get book() {
    return this.getOrSet('book', BookClient)
  }

  public get markdown() {
    return this.getOrSet('markdown', MarkdownClient)
  }

  public get pokemon() {
    return this.getOrSet('pokemon', PokemonClient)
  }
}
