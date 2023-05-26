import React, { useEffect, useState } from 'react'
import { CardTitle, CardDescription, CardPrice, Image, Card , ImageOverlay, PaginationNum, PaginationControl, PaginationButtons } from './ProductCardStyle'
import {getProduct} from '../../action/getProductAction'
import { connect } from 'react-redux'
import {updateCartCount} from '../../action/cartAction'

const ProductCard = (props) => {

  const { getProduct, getProductState, featured, selectedButton, filterDataProp } = props

  const [initialProducts, setInitialProducts] = useState([])
  const [products, setProducts] = useState()
  const [featuredId, setFeaturedId] = useState()
  const [currentPage, setCurrentPage] = useState(1);
  const [cartCount, setCartCount] = useState(0)

  const itemPerPage = 6;

  useEffect(() => {
    getProduct();
  }, [getProduct])

  useEffect(() => {
    if (getProductState && getProductState.apiState === "Success"){
      setProducts(getProductState.response)
      setInitialProducts(getProductState.response)
    }
  }, [getProductState])

  useEffect(() => {
    if (featured && featured.apiState === "Success") {
      setFeaturedId(featured.response)
    }
  }, [featured])

  useEffect(() => {
    const filteredProducts = initialProducts?.filter((product) => {
      const colorMatch = !filterDataProp?.color || product.colorId === filterDataProp.color;
      const materialMatch = !filterDataProp?.material || product.materialId === filterDataProp.material;
      return colorMatch && materialMatch;
    });
    setProducts(filteredProducts);
  }, [filterDataProp]);


  useEffect(() => {
    if (selectedButton === 'featured' && featuredId) {
      const filterData = featuredId?.map(featuredProduct => 
        products.find(product => product?.id === featuredProduct.productId));
        setProducts(filterData);
      } else if ( selectedButton === 'all'){
        setProducts(getProductState.response)
      }
  },[selectedButton, getProductState , featuredId])

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
  }
 
  const totalPages = Math.ceil(products?.length / itemPerPage);

  const currentPageItems = products?.slice(
    (currentPage -1) * itemPerPage,
    currentPage * itemPerPage
  );

  const handleAddToCart = (product) => {
    const newCount = cartCount + 1
    setCartCount(newCount)
    props.updateCartCount(newCount);

    localStorage.setItem("cartCount", newCount.toString());
    const existingCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    const isProductInCart = existingCartData.some((item) => item.id === product.id);

    if (!isProductInCart) {
      const updatedCartData = [...existingCartData, product];
      localStorage.setItem("cartData", JSON.stringify(updatedCartData));
    }
  }

  return (
    <>
      {currentPageItems && currentPageItems?.map((product) => (
        <Card className='thsiscard' key = {product?.id}>
      <Image src={product.image} alt="Image" />
      <ImageOverlay onClick={() => handleAddToCart(product)}>
        <span >Add to Cart</span>
      </ImageOverlay>
      <CardTitle>{product?.name}</CardTitle>
            <CardDescription>Product Color</CardDescription>
            <CardPrice>INR {product?.price}</CardPrice>
    </Card>
           ))}
          {/* Pagination */}

          <PaginationControl className='paginationcontroslsls'>
            <PaginationButtons className='paginationbuttonsssss'>
              {Array.from({length: totalPages}, (_, index) => (
                <PaginationNum
                className='paginationnumberueb'
                key={index}
                onClick={() => handlePageChange(index + 1)}
                currentPage={currentPage === index + 1}
                >
                  {index + 1}
                </PaginationNum>
              ))}
            </PaginationButtons>
          </PaginationControl>

    </>
  )
}

const mapStateToProps = (state) => ({
  getProductState: state.products,
  selectedButton: state.selectedButton.selectedButton,
  featured: state.featured,
})

const mapDispatchToProps = (dispatch) => ({
  getProduct : (params) => dispatch(getProduct(params)),
  updateCartCount: (count) => dispatch(updateCartCount(count)),
})

export default connect (mapStateToProps, mapDispatchToProps)(ProductCard)