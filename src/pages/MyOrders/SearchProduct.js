import React from "react";

const SearchProduct = () => {
  return (
    <div className="add-products  d-flex mb-5 ">
      <div className="add-product-form d-flex">
        <div>
          <input type="text" placeholder="Search Item" />
        </div>
        <div>
          <select name="" id="">
            <option>Filter</option>
            <option value="">Medicine</option>
            <option value="">Suppliments</option>
            <option value="">Medical Equipments</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SearchProduct;
