import React from "react";

export default function SliderLoading({isLoading}) {

  return (
    <div className={isLoading}>
      <div class="ph-item">
        <div class="ph-col-12">
          <div class="ph-picture"></div>
          <div class="ph-row">
          
          </div>
        </div>
      </div>
    </div>
  );
}
