import React from "react";

function About(props) {
  
    const lodingbar = ()=>{
        props.setProgress(10);
        props.setProgress(100);
    }

  return (
    <>
    <div className="container my-4" onLoad={lodingbar} style={props.mode}>
     <h1 className="mt-5 mb-2 ">About</h1>
      <div class="accordion" id="accordionPanelsStayOpenExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              1. Product Catalog
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            class="accordion-collapse collapse show"
          >
            <div class="accordion-body" style={props.mode}>
              <strong>The product catalog displays the available items.</strong>
               often categorized for easy navigation. Each product typically has detailed descriptions, images, pricing, reviews, and   <code>.specifications</code>,
               to help customers make informed decisions.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              2. Mobile Responsiveness
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body" style={props.mode}>
              <strong>With a significant amount of traffic coming from mobile devices.</strong>
               it's essential for an e-commerce website to be mobile-friendly. Responsive design ensures that the site adapts to different screen sizes, providing <code>.an-optimal </code>,
               shopping experience on smartphones and tablets.
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              3. SEO and Marketing Tools
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            class="accordion-collapse collapse"
          >
            <div class="accordion-body" style={props.mode}>
              <strong>To attract customers, e-commerce websites.</strong>
               should be optimized for search engines (SEO) and incorporate marketing tools like email newsletters, discounts, and promotions. Social media integration and <code>.Google Analytics help</code>,
               businesses track performance and improve engagement.
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

export default About;
