import React from "react";

const MainCategory = (props) => {
  // const [isClick, setIsClick] = useState(false);
  // const handleClick = () => {
  //   setIsClick(!isClick);
  // };
  return (
    <>
      <div className="main-products">
        <div
          className="main-product-img"
          // onClick={handleClick}
          // style={{ background: isClick ? "#000000" : "none" }}
        >
          <img src={props.img} alt="" />
        </div>

        <div className="main-product-details text-center">
          <h6>{props.name}</h6>
          <p>{props.amount}</p>
        </div>
      </div>
    </>
  );
};

export default MainCategory;
