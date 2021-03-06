import React from "react";
import styled from 'styled-components'

const SVG = styled.svg`
  && {
    width: 11px;
    height: auto;
    margin-left: 3px;
    margin-bottom: 10px;

    @media (min-width: 991.98px) { // Tablets
    }

  }
`;

const SvgExclamation = props => (
  <SVG
    id="exclamation_svg__Laag_1"
    x={0}
    y={0}
    viewBox="0 0 512 512"
    xmlSpace="preserve"
    {...props}
  >
    <style>{".exclamation_svg__st0{fill:#fff}"}</style>
    <path
      className="exclamation_svg__st0"
      d="M256 50c-18.8 0-34.1 15.2-34.1 34.1v204.4c0 18.8 15.2 34.1 34.1 34.1s34.1-15.3 34.1-34.1V84c0-18.8-15.3-34-34.1-34zM287.3 415c-1.7-4.4-4.1-8.2-7.2-11.2-1.7-1.4-3.4-3.1-5.4-4.1-1.7-1.4-3.7-2.4-5.8-3.1-2-1.1-4.1-1.7-6.5-2-10.9-2.4-22.8 1.4-30.6 9.2-3.1 3.1-5.4 6.8-7.2 11.2-1.7 4.1-2.7 8.5-2.7 12.9s1 8.9 2.7 12.9c1.7 4.1 4.1 7.8 7.2 11.2 3.4 3.1 7.2 5.4 11.2 7.2 4.1 1.7 8.5 2.7 12.9 2.7s8.8-1 12.9-2.7c4.1-1.7 7.8-4.1 11.2-7.2 3.1-3.4 5.4-7.2 7.2-11.2 1.7-4.1 2.7-8.5 2.7-12.9s-.9-8.8-2.6-12.9z"
    />
  </SVG>
);

export default SvgExclamation;
