import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ProductExpanded,
  ResourceExpanded,
} from "../../redux/actions/landing_actions";
import ResourcesDropdown from "../navbar/resources_dropdown/resources_dropdown";
import ProductDropdown from "../navbar/product_dropdown/product_dropdown";

function NavDropdown(props) {
  const productExpanded = useSelector((state) => state.productExpanded);
  const resourceExpanded = useSelector((state) => state.resourceExpanded);
  const dispatch = useDispatch();

  return (
    <li
      className=""
      onClick={
        props.navDropdownText === "Resource"
          ? () => dispatch(ResourceExpanded())
          : () => dispatch(ProductExpanded())
      }
      id={props.navDropdownText}
      aria-expanded={
        props.navDropdownText === "Resource"
          ? resourceExpanded
          : productExpanded
      }
      aria-controls={
        props.navDropdownText === "Resource" ? "ResourceMenu" : "ProductMenu"
      }
    >
      <button className="text-base flex items-center gap-1">
        {props.navDropdownText}
        <svg
          className="h-3 w-3"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.5 7.5L10 15L17.5 7.5"
            stroke="#667085"
            strokeWidth="1.67"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {props.navDropdownText === "Resource" && resourceExpanded && (
        <ResourcesDropdown hidden={!resourceExpanded} />
      )}
      {props.navDropdownText === "Product" && productExpanded && (
        <ProductDropdown hidden={!productExpanded} />
      )}
    </li>
  );
}

export default NavDropdown;
