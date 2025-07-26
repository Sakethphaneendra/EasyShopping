import React from 'react'

const Collections = (props) => {
  const { title, image1, image2, image3, image4, name1, name2, name3, name4, price1, price2, price3, price4 } = props.bagsData;
  return (
    <div>
      <div className="collectionsArea">
        <h1> {title}</h1>

        <div className="bag_photos">
         
          <div className="productbox">
            <img src={image1} alt="" className='ProductImg' />
            <h2 className='ProductName'>Name {name1}</h2>
            <h3 className='ProductPrice'> MRP : {price1}</h3>
          </div>

          <div className="productbox">
            <img src={image2} alt="" className='ProductImg' />
            <h2 className='ProductName'>Name {name2}</h2>
            <h3 className='ProductPrice'> MRP : {price2}</h3>
          </div>

          <div className="productbox">
            <img src={image3} alt="" className='ProductImg' />
            <h2 className='ProductName'>Name {name3}</h2>
            <h3 className='ProductPrice'> MRP : {price3}</h3>
          </div>

          <div className="productbox">
            <img src={image4} alt="" className='ProductImg' />
            <h2 className='ProductName'>Name {name4}</h2>
            <h3 className='ProductPrice'> MRP : {price4}</h3>
          </div>

           <div className="productbox">
            <img src={image1} alt="" className='ProductImg' />
            <h2 className='ProductName'>Name {name1}</h2>
            <h3 className='ProductPrice'> MRP : {price1}</h3>
          </div>

          <div className="productbox">
            <img src={image2} alt="" className='ProductImg' />
            <h2 className='ProductName'>Name {name2}</h2>
            <h3 className='ProductPrice'> MRP : {price2}</h3>
          </div>


         

        </div>
      </div>

      
    </div>
  )
}

export default Collections
