import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useEffect, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
// import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import ColorCheckboxGroup from "../components/ColorCheckboxGroup";
import GenderCheckboxGroup from "../components/GenderCheckboxGroup";
import PriceFilter from "../components/PriceFilter";
import "../index.css";

const Shop = () => {
  const [filterList, setFilterList] = useState(products.filter((item) => item.avgRating >= 4.5));
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedGenders, setSelectedGenders] = useState([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState([0, 100000]);
  
  useWindowScrollToTop();

  useEffect(() => {
    let filteredProducts = products.filter((item) => item.avgRating >= 0);

    if (selectedColors.length > 0) {
      filteredProducts = products.filter((product) => selectedColors.includes(product.color) );
    }

    if (selectedGenders.length > 0) {
      filteredProducts = products.filter((product) => selectedGenders.includes(product.gender) );
    }

    filteredProducts = filteredProducts.filter((product) =>
      product.price*80 >= selectedPriceRange[0] && product.price*80 <= selectedPriceRange[1]
    );

    setFilterList(filteredProducts);
  }, [selectedColors, selectedGenders, selectedPriceRange]);

  return (
    <Fragment>
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col md={8}>
              <SearchBar setFilterList={setFilterList} />
            </Col>
          </Row>
          <Row className="justify-content-center gap-top">
            <Col md={4} id="select-color">
              <ColorCheckboxGroup selectedColors={selectedColors} setSelectedColors={setSelectedColors} />
            </Col>
            <Col md={4} id="select-color">
            <GenderCheckboxGroup selectedGenders={selectedGenders} setSelectedGenders={setSelectedGenders} />
            </Col>
            <Col md={4}>
              <div className="horizontal">
                <PriceFilter selectedPriceRange={selectedPriceRange} setSelectedPriceRange={setSelectedPriceRange} />
              </div>
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={filterList} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
