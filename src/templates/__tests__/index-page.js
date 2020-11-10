import React from "react";
import { render, screen } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import IndexPage from "../index-page";

// Mocks and fixate generate className
import { mobileImage, desktopImage, thumbnailImg } from "../../../__mocks__/file-mock.js";
jest.mock("short-uuid");

beforeEach(() => {
	useStaticQuery.mockImplementation(() => ({
		mobileImage,
		desktopImage,
        thumbnailImg,
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

describe("Index Page", () => {
	// mock data
    // templateKey, title, thumbnailImg, heading, body
	const data = {
		markdownRemark: {
			html: "<p>Test body</p>",
			frontmatter: {
				title: "Index page",
				heading: "Test header",
				thumbnailImg: "testImg.jpg",
			},
            childrenFile: [
                {
                    childImageSharp: {
                        fluid: {
                            aspectRatio: 1,
                            base64: "data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAQFAgP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAa5NLNxv3EUxlnYP/8QAGhAAAgMBAQAAAAAAAAAAAAAAAREAAgMxIv/aAAgBAQABBQLTlStC2QxVDc3D7D6KE//EABYRAQEBAAAAAAAAAAAAAAAAAAIQMf/aAAgBAwEBPwE5DP/EABYRAQEBAAAAAAAAAAAAAAAAAAEQMf/aAAgBAgEBPwF2M//EABoQAAICAwAAAAAAAAAAAAAAAAERABACITH/2gAIAQEABj8C6oAMm73Rjr//xAAZEAEAAwEBAAAAAAAAAAAAAAABABExIRD/2gAIAQEAAT8h4OK9YL+NC35C6wM5KzyMWhBWy7Sf/9oADAMBAAIAAwAAABCwAH3/xAAYEQADAQEAAAAAAAAAAAAAAAAAARExcf/aAAgBAwEBPxCW4uGGU//EABgRAQEAAwAAAAAAAAAAAAAAAAEAEBFh/9oACAECAQE/ECgk7jov/8QAGxABAAIDAQEAAAAAAAAAAAAAAQARITFBYXH/2gAIAQEAAT8QCbVD2FOojJqTwTf2IKOAHkQKmXBYUSyqW2DgE87BJwvUDiN1P//Z",
                            originalImg: "/static/b1cb549c6d70b9d75525fb6e7fb3ac08/06655/portrait.jpg",
                            src: "/static/b1cb549c6d70b9d75525fb6e7fb3ac08/724c8/portrait.jpg",
                            srcSet: "/static/b1cb549c6d70b9d75525fb6e7fb3ac08/84d81/portrait.jpg 250w,\n/static/b1cb549c6d70b9d75525fb6e7fb3ac08/f0719/portrait.jpg 500w,\n/static/b1cb549c6d70b9d75525fb6e7fb3ac08/724c8/portrait.jpg 1000w,\n/static/b1cb549c6d70b9d75525fb6e7fb3ac08/d79bd/portrait.jpg 1500w,\n/static/b1cb549c6d70b9d75525fb6e7fb3ac08/06655/portrait.jpg 1600w"
                        }
                    }
                }
            ]
		}
	};

	it("renders data correctly", () => {
		const { container, getByText } = render(<IndexPage data={data} />);
        expect(getByText('Test body')).toBeInTheDocument();
	});

    it("matches the snapshot", () => {
        const { container } = render(<IndexPage data={data} />);
        expect(container).toMatchSnapshot();
    });
});
