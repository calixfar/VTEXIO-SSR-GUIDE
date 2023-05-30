import React from 'react'
import { useQuery } from 'react-apollo'
import QUERY_POKEMONS from './graphql/queryPokemons.gql'
import styles from './styles.css'

interface Pokemon {
  name: string
  url: string
}

const ServerContent = () => {
  const { data, error, loading } = useQuery<{ pokemons: Pokemon[] }>(QUERY_POKEMONS)

  if (loading) return <p>Loading...</p>

  if (error) return <p>It happened an error</p>

  if (!data?.pokemons?.length) return <p>There is no data</p>

  return (
    <ul className={styles['b-list']}>
      {data?.pokemons?.map((item, index) => (
        <li key={item.name} className={styles['b-list__item']}>
          <a href={item.url} target="_blank" className={styles['b-list__link']}>
            <span className={styles['b-list__identifier']}>{index + 1}</span>
            <span className={styles['b-list__name']}>{item.name}</span>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default ServerContent