import React from 'react'
import { useQuery } from 'react-apollo'
import QUERY_ORDERFORM from './graphql/queryOrderform.gql'

interface OrderForm {
  orderFormId: string
  loggedIn: boolean
  items: { name: string, quantity: number, id: string }[]
}

const ServerContent = () => {
  const { data, error, loading } = useQuery<{ orderForm: OrderForm }>(QUERY_ORDERFORM, { ssr: false })

  return (
    <ul>
      {JSON.stringify({ data, error, loading })}
    </ul>
  )
}

export default ServerContent