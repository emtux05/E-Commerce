import React, { useEffect, useState } from 'react'
import { FilterContainer, FilterOption, FilterHead } from './FilterSectionStyle'
import {getProductColor} from '../../action/getProductColorAction'
import {getProductMaterial} from '../../action/getProductMaterialAction'
import {connect} from 'react-redux'


const FilterSection = (props) => {

  const {getProductColor, getProductColorState, getProductMaterial, getProductMaterialState, onFilterChange} = props
  const [productColor, setProductColor] = useState()
  const [productMaterial, setProductMaterial] = useState()
  const [selectedMaterial, setSelectedMaterial] = useState()
  const [selectedColor, setSelectedColor] = useState()

  const handleSelectedmaterial = (materialId) => {
    setSelectedMaterial(materialId)
    onFilterChange({material: materialId, color: selectedColor })
  }

  const handleSelectedColor = (colorId) => {
    setSelectedColor(colorId)
    onFilterChange({color: colorId, material: selectedMaterial})
  }

  useEffect(() => {
    getProductColor();
    getProductMaterial();
  }, [
    getProductColor, 
    getProductMaterial,
  ])
  

  useEffect(() => {
    if (getProductColorState && getProductColorState.apiState === "Success"){
      setProductColor(getProductColorState.response)
    }
  }, [getProductColorState])

  useEffect(() => {
    if (getProductMaterialState && getProductMaterialState.apiState === "Success") {
      setProductMaterial(getProductMaterialState.response)
    }
  })

  return (
    <FilterContainer>
    <FilterHead key= 'filter'>Filter</FilterHead>
    <FilterOption key = 'material'>Material</FilterOption>
    {productMaterial && productMaterial.map((material) => (
      <FilterOption onClick={() => handleSelectedmaterial(material.id)} key={material.id}>{material.name}</FilterOption>
    ))}
    <FilterHead key= 'color'>Color</FilterHead>
    {productColor && productColor.map((color) => (
      <FilterOption onClick={() => handleSelectedColor(color.id)} key={color.id}>{color.name}</FilterOption>
    ))}
    </FilterContainer>
  )
}


const mapStateToProps = (state) => ({
  getProductColorState: state.colors,
  getProductMaterialState: state.material,
})

const mapDispatchToProps = (dispatch) => ({
  getProductColor: (params) => dispatch(getProductColor(params)),
  getProductMaterial: (params) => dispatch(getProductMaterial(params)),
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterSection)