import React from 'react'

const Cart = ({user}) => {
  return (
    <div>
        {
            user.map((elem,index)=>(
                <ul key={elem.id}>
                    <li>{elem.login}</li>
                    <li>{elem.id}</li>
                    <li><img src={elem.avatar_url} height={100} width={100} alt={elem.login}  /></li>
                    <li><a href={elem.html_url}></a></li>
                    <li><a href={elem.html_url}>{elem.html_url}</a></li>
                </ul>
            ))
        }
    </div>
  )
}

export default Cart