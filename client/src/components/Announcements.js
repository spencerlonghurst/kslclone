import React from 'react';

const image = 'data:image/jpeg;base64,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'

export default function Announcements () {

  return (
  <div className='itemsList'>
    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
     <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>


    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
     <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
     <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>


    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
    <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>

    <div className='item'>
    <img src={image} alt={'A Burger'}/>
     <h6>A World</h6>
    <p>$1000</p>
    <p>Park City, UT</p>
    </div>
  </div>
  )
}