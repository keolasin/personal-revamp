import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Thumbnail from "./thumbnail"

import styled from "@emotion/styled"
import { css } from "@emotion/core"

const Galleries = (props) => {
  const getGalleriesQuery = useStaticQuery(graphql`
    query {
      allDirectory(filter: {relativeDirectory: {eq: "galleries"}}) {
        nodes {
          id
          name
        }
      }
    }
  `)

  return (
    <section>
      {getGalleriesQuery.allDirectory.nodes.map((gallery, index) => (
        <>
        <h3 key={index}>{gallery.name[0].toUpperCase() + gallery.name.slice(1)}</h3>
        <Thumbnail gallery={gallery.name}/>
        </>
      ))}
    </section>
  )
}

export default Galleries
