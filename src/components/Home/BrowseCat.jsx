import React from 'react';
import { BrowseItem } from '../../data/data';

function BrowseCat() {
  return (
    <section className="browse">
      <div className="container">
        <div className="browse-wrap">
          <h1 className="browse-title">Browse By Category</h1>
          <div className="browse-categoria-swiper">
            {
              BrowseItem.map((item) => (
                <div className="browse-categoria-item" key={item.id}>
                  <div className="browsse-item-svg">{item.svg}</div>
                  <p className="browse-item-title">{item.title}</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrowseCat