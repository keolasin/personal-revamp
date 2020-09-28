import React from "react";
import { render } from "@testing-library/react";
import { useStaticQuery } from "gatsby";

import Project from "../projectTemplate";

// Mocks and fixate generate className
import { mobileImage, desktopImage } from "../../../__mocks__/file-mock.js";
jest.mock("short-uuid");

beforeEach(() => {
	useStaticQuery.mockImplementation(() => ({
		mobileImage,
		desktopImage,
	}));

	const uuid = require("short-uuid");
	uuid.generate.mockImplementation(() => "73WakrfVbNJBaAmhQtEeDv");
});

describe("Project", () => {
	// mock data
	const data = {
		project: {
			html: "<p>A chatroom app built with create-react-app and firebase.</p>",
			frontmatter: {
				title: "Chatter",
				date: "April 01, 2020",
				link: "https://bloc-chat-react-m1d0mp1ge.now.sh",
				imageAlt: "Riverwalk Talk",
			},
		},
	};

	it("renders correctly", () => {
		const { container } = render(<Project data={data} />);
		expect(container).toMatchSnapshot();
	});
});
