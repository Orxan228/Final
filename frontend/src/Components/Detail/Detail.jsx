// import React, { useEffect, useState } from "react";
// import "./Detail.scss";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// const Detail = () => {
//   const { id } = useParams();
//   const [item, setData] = useState({});

//   useEffect(() => {
//     axios.get(`http://localhost:7777/products/${id}`).then((res) => {
//       setData(res.data);
//     });
//   });
//   return (
//     <div className="detail">
//       <div className="detail__item">
//         <div className="detail__item-img">
//           <img
//             src="https://preview.colorlib.com/theme/manup/img/blog/latest-b/latest-1.jpg.webp"
//             alt=""
//           />
//         </div>
//         <div className="detail__item-name">{item.name}</div>
//         <div className="detail__item-price">{item.price}</div>
//       </div>
//     </div>
//   );
// };

// export default Detail;

import React, { useEffect, useState } from 'react'
import "./Detail.scss"
import axios from 'axios'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const {id} = useParams()
  const [item,setData]=useState({})
  
  useEffect(()=>{
    axios.get(`http://localhost:7777/products/${id}`).then((res)=>{
      setData(res.data)
    })
  },[])
  return (
    <div className="detail">
    <div className="detail__item">
      <div className="detail__item-img">
        <img
          src="https://preview.colorlib.com/theme/manup/img/blog/latest-b/latest-1.jpg.webp"
          alt=""
        />
      </div>
      <div className="detail__item-name">{item.name}</div>
      <div className="detail__item-price">{item.price}</div>
    </div>
  </div>
  )
}

export default Detail

