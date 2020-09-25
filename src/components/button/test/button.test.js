import React from 'react';
import ReactDom from 'react-dom';
import Button from './../button';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

import render2 from "react-test-renderer";

afterEach(cleanup);

it("test button", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div)
})

it("test label du button", () => {
    const { getByTestId } = render(<Button label="Click"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Click")
})

it("test snapshot", () => {
    const tree = render2.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})

