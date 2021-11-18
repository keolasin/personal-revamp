/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react";

 // styling imports
 import { css } from "@emotion/core";
import { mediaQuery } from "../styles/global.js";
 
 const Video = ({ videoSrcURL, videoTitle }) => {

    videoSrcURL ="https://res.cloudinary.com/keolasin/video/upload/v1636960796/flowers_ewsvwe.mp4";
    videoTitle = "flowers";

     return (
         <video
             loop
             muted
             autoPlay
             playsInline
             css={videoBackground}
         >
             <source
                 src={videoSrcURL}
                 type="video/mp4"
             />
         </video>
     );
 };

 export default Video;
 
 // css styling
 const videoBackground = css`
    display: none;
    ${mediaQuery[2]} {
        display: block;
        height: 100%;
        width: 100%;
        position: absolute;
        height: 100%;
        width: 100%;
        z-index: -1;
        object-fit: cover;
        object-position: center;
    }
 `;