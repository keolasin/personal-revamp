import React from "react";
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import Index from "../projectTemplate";

// Mocks and fixate generate className
import { mobileImage, desktopImage } from "../../../__mocks__/file-mock.js";
jest.mock("short-uuid");

beforeEach(() => {
	useStaticQuery.mockImplementation(() => ({
		mobileImage,
		desktopImage,
		site: {
            siteMetadata: {
                title: `MReyes`,
                description: `Personal portfolio and photography site featuring the work of Matthew Reyes`,
                author: `@keolasin`,
            }
        }
	}));

	const uuid = require("short-uuid");
	uuid.generate.mockImplementation(() => "73WakrfVbNJBaAmhQtEeDv");
});

describe("Contact Page", () => {
	// mock data
	const data = {
		markdownRemark: {
			html: "<p>Contact test body</p>",
			frontmatter: {
				title: "Contact test page",
				heading: "Contact test header",
				thumbnailImg: "contactTestImg.jpg",
			},
            childrenFile: [
                {
                    childImageSharp: {
                        fluid: {
                            aspectRatio: 1,
                            originalName: "TestImg",
                        }
                    }
                }
            ]
		}
	};

	it("renders data correctly", () => {
		const { container, getByText } = render(<ContactPage data={data} />);
        expect(getByText('Contact test body')).toBeInTheDocument();
	});

    it("matches the snapshot", () => {
        const { container } = render(<ContactPage data={data} />);
        expect(container).toMatchSnapshot();
    });
});
