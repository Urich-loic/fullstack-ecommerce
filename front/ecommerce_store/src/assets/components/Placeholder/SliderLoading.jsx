import React from "react";

export default function SliderLoading({isLoading}) {

  return (
    <div className={isLoading}>
      <div className="ph-item">
        <div className="ph-col-12">
          <div className="ph-picture"></div>
          <div className="ph-row">
          
          </div>
        </div>
      </div>
    </div>
  );
}
