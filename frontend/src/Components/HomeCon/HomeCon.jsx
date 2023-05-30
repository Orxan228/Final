import React, { useEffect, useState } from "react";
import "./HomeCon.scss";
import { Helmet } from "react-helmet";
// import axios from "axios";
import { Link } from "react-router-dom";
import axios from "axios";

const HomeCon = () => {
  // const [data, setData] = useState([]);
  // const [dummy, setDummy] = useState(false);
  // const [searchValue,setSearchValue] = useState("")
  // useEffect(() => {
  //   axios.get("http://localhost:7777/products/").then((res) => {
  //     setData(res.data);
  //   });
  // }, [searchValue === "", dummy]);

  // const handleSearch = (e) => {
  //   const value = e.target.value.toLowerCase();
  //   setSearchValue(value);
  //   const filteredData = data.filter((item) =>
  //     item.name.toLowerCase().includes(value) 
  //   );
  //   setData(filteredData);
  // };

  const [data,setData]=useState([])
  const [dummy,setDummy]=useState(false)
  const [searchValue,setSearchValue]=useState("")

  useEffect(()=>{
    axios.get(`http://localhost:7777/products/`).then((res)=>{
      setData(res.data)
    })
},[searchValue==="",dummy])

const handleSearch = (e)=>{
  const value = e.target.value.toLowerCase()
  setSearchValue(value)
  const filteredData = data.filter((item)=>
  item.name.toLowerCase().includes(value))
  setData(filteredData)
}

  return (
    <div className="content">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <div className="content__inner">
        <p className="content__inner-p1">Latest News</p>
        <p className="content__inner-p2">
          Do not miss anything topic abput the event
        </p>
        <div className="content__inner__vitrine-filter">
          <input
            type="text"
            placeholder="search the name"
            onChange={handleSearch}
          />
          <button
            // onClick={() => {
            //   setData([...data.sort((a, b) => b.price - a.price)]);
            // }}
            onClick={()=>{
              setData([...data.sort((a,b)=>b.price-a.price)])
            }}
          >
            Sort by price
          </button>
        </div>
        <div className="content__inner__vitrine">
          {/* {data.map((item, index) => {
            return (
              <div key={index} className="content__inner__vitrine__item">
                <div className="content__inner__vitrine__item-img">
                  <img
                    src="https://preview.colorlib.com/theme/manup/img/blog/latest-b/latest-1.jpg.webp"
                    alt=""
                  />
                </div>
                <div className="content__inner__vitrine__item-name">
                  {item.name}
                </div>
                <div className="content__inner__vitrine__item-price">
                  {item.price}
                </div>
                <button
                  className="content__inner__vitrine__item-delete"
                  onClick={() => {
                    axios
                      .delete(`http://localhost:7777/products/${item._id}`)
                      .then(() => {
                        setDummy(true);
                      });
                  }}
                >
                  Delete
                </button>
                <button><Link to={`${item._id}`}>Details</Link></button>
              </div>
            );
          })} */}
          {data.map((item,index)=>{
            return(
              <div key={index} className="content__inner__vitrine__item">
                <div className="content__inner__vitrine__item-img">
                  <img
                    src="https://preview.colorlib.com/theme/manup/img/blog/latest-b/latest-1.jpg.webp"
                    alt=""
                  />
                </div>
                <div className="content__inner__vitrine__item-name">
                  {item.name}
                </div>
                <div className="content__inner__vitrine__item-price">
                  {item.price}
                </div>
                <button
                  className="content__inner__vitrine__item-delete"
                  // onClick={() => {
                  //   axios
                  //     .delete(`http://localhost:7777/products/${item._id}`)
                  //     .then(() => {
                  //       setDummy(true);
                  //     });
                  // }}

                  // onClick={()=>{
                  //   axios.delete(`http://localhost:7777/products/${item._id}`).then(()=>{
                  //     setDummy(true)
                  //   })
                  // }}

                  onClick={()=>{
                    axios.delete(`http://localhost:7777/products/${item._id}`).then(()=>{
                      setDummy(true)
                    })
                  }}
                >
                  Delete
                </button>
                <button><Link to={`${item._id}`}>Details</Link></button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCon;
