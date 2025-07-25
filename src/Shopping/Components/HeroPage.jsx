import React from 'react'

const HeroPage = () => {
  return (
    <div>
      <div id="BannerImg">ds</div>

      <div className="cardContainer">
        <div className="card">
          <h2 className='ShoeName'> Nike Air Force 1</h2>
          <div className="dsdds">
            <img src="https://file.aiquickdraw.com/imgcompressed/img/compressed_44909a2e5cf110ed53a486ffe779c7a8.webp" alt="" id="shoe" />
            <p className='para'>The Nike Air Force 1 is a timeless classic, originally released in 1982.
              Loved for its clean white look and chunky sole, it's a streetwear icon.
              Whether casual or styled up, it adds instant drip to any fit.</p>
            <button className='buyBtn'>Buy Now</button>
          </div>

        </div>
        <div className="card">
          <h2 className='ShoeName'> Nike Air Max 270</h2>
          <div className="dsdds">
            <img src="https://png.pngtree.com/png-vector/20231230/ourmid/pngtree-dropshipping-men-hole-sole-jogging-shoes-png-image_11389148.png" alt="" id="shoe" />
            <p className='para'>Designed for comfort and style, the Air Max 270 features a bold air unit.
Its lightweight mesh upper and soft foam make it perfect for all-day wear.
A go-to choice for sneakerheads who want both flex and function.</p>
            <button className='buyBtn'>Buy Now</button>
          </div>

        </div>
        <div className="card">
          <h2 className='ShoeName'> Nike Dunk Low</h2>
          <div className="dsdds">
            <img src="https://static.vecteezy.com/system/resources/previews/047/082/969/non_2x/fashion-shoes-on-transparent-background-png.png" alt="" id="shoe" />
            <p className='para'>The Dunk Low made a huge comeback with limited drops and collabs.
Known for its retro basketball roots and endless colorways, it's a must-cop.
From skateparks to IG feeds, it’s a vibe that never dies.

</p>
            <button className='buyBtn'>Buy Now</button>
          </div>

        </div>
      </div>

    </div>
  )
}

export default HeroPage
