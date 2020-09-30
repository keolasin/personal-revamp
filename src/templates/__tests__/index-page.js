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
        thumbnailImg
	}));

	const uuid = require("short-uuid");
	uuid.generate.mockImplementation(() => "73WakrfVbNJBaAmhQtEeDv");
});

describe("Index Page", () => {
	// mock data
    // templateKey, title, thumbnailImg, heading, body
	const data = {
		indexPage: {
			html: "<p>Test body</p>",
			frontmatter: {
				title: "Index page",
				heading: "Test header",
				thumbnailImg: "testImg.jpg",
			},
		},
	};

	it("renders data correctly", () => {
		const { container, getByText } = render(<IndexPage data={data} />);
        expect(getByText('Test body')).toBeInTheDocument();
	});

    it("matches the snapshot", () => {
        const { container } = render(<IndexPage data={data} />);
        expect(container).toMatchSnapShot();
    });
});
