import React, { useState } from "react";
import ProviderCard from "./ProviderCard";
import { Pagination } from "react-bootstrap";
import "../../styles/Health.css";

function ProviderList({ providers }) {
  const itemsPerPage = 8;
  const [activePage, setActivePage] = useState(1);

  const startIndex = (activePage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const totalPages = 2; // Set to 2 pages

  const handlePageSelect = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const imageUrls = [
    require("../../images/doctors/images (1).jpeg"),
    require("../../images/doctors/images (2).jpeg"),
    require("../../images/doctors/images (3).jpeg"),
    require("../../images/doctors/images (4).jpeg"),
    require("../../images/doctors/images (4).jpeg"),
    require("../../images/doctors/images (5).jpeg"),
    require("../../images/doctors/images (6).jpeg"),
    require("../../images/doctors/images (25).jpeg"),
    require("../../images/doctors/images (7).jpeg"),
    require("../../images/doctors/images (8).jpeg"),
    require("../../images/doctors/images (9).jpeg"),
    require("../../images/doctors/images (23).jpeg"),
    require("../../images/doctors/images (18).jpeg"),
    require("../../images/doctors/images (10).jpeg"),
    require("../../images/doctors/images (22).jpeg"),
    // require("../../images/doctors/images (11).jpeg"),
    // require("../../images/doctors/images (12).jpeg"),
    // require("../../images/doctors/images (13).jpeg"),
    // require("../../images/doctors/images (21).jpeg"),
    // require("../../images/doctors/images (14).jpeg"),
    // require("../../images/doctors/images (20).jpeg"),
    // require("../../images/doctors/images (15).jpeg"),
    // require("../../images/doctors/images (16).jpeg"),
  ];

  return (
    <div className="providerlist-ctnr">
      <div className="provider-list">
        {providers.slice(startIndex, endIndex).map((provider) => (
          <ProviderCard
            key={provider.id}
            name={provider.name}
            specialty={provider.specialty}
            gender={provider.gender}
            availability={provider.availability}
            imageUrl={require(`../../images/doctors/images (${provider.id}).jpeg`)}
          />
        ))}
      </div>
      <Pagination className="custom-pagination">
        {Array.from({ length: totalPages }).map((_, index) => (
          <Pagination.Item
            key={index}
            active={index + 1 === activePage}
            onClick={() => handlePageSelect(index + 1)}
            className={index + 1 === activePage ? "active" : ""}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </div>
  );
}

export default ProviderList;
