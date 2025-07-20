import React from 'react'
import StructureProduct from './StructureProduct'

function ProductItem() {
  return (
    <div>
      <StructureProduct name="Laptop" cost="100$" description="Best Laptop for Office Work" />
      <StructureProduct name="Phone" cost="50$" description="Best Phone for phone Call" />
    </div>
  )
}

export default ProductItem
