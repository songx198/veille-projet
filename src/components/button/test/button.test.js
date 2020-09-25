import React from 'react';
import ReactDom from 'react-dom';
import Button from './../button';

import { render, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

afterEach(cleanup);

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<Button></Button>, div)
})

it("renders button correctly", () => {
    const { getByTestId } = render(<Button label="Click"></Button>)
    expect(getByTestId('button')).toHaveTextContent("Click")
})

