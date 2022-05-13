import React from "react";

import { Link, useRouteMatch } from 'react-router-dom'

export default function ItemsList (props) {
  const { items } = props;
  const { url } = useRouteMatch();

  return (
    <div>
     {items.map(item => {
       <div>
         <Link>
         <img
          src={'https://images.unsplash.com/photo-1651981101695-219fa3653bf1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2942&q=80'}
          alt={'A burger'}
         ></img>
         </Link>
       </div>

     })}
    </div>
  )
}