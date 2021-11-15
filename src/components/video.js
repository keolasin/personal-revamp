/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

 import React from "react";

 // gatsby
 import { useStaticQuery, graphql } from "gatsby";
 
 // styling imports
 import { css } from "@emotion/core";
 
 const Video = ({ videoSrcURL, videoTitle }) => {

    videoSrcURL ="https://res.cloudinary.com/keolasin/video/upload/v1636956625/test_eugurq.mp4";
    videoTitle ="test";

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
             {videoTitle}
         </video>
     );
 };

 export default Video;
 
 // css styling
 const videoBackground = css`
    position: absolute;
     height: 100vh;
     width: 100vw;
     z-index: -1;
     object-fit: cover;
     object-position: center;
 `;

 