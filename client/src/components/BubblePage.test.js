import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import { getColors as mockGetColors } from '../utilities/apiTests'
import ColorList from "./ColorList";

jest.mock('../utilities/apiTests')

const colorList = [
  {
    color: 'aliceblue',
    code: {
      hex: '#f0f8ff'
    },
    id: 1
  },
  {
    color: 'limegreen',
    code: {
      hex: '#99ddbc'
    },
    id: 2
  },
  {
    color: 'aqua',
    code: {
      hex: '#00ffff'
    },
    id: 3
  },
  {
    color: 'aquamarine',
    code: {
      hex: '#7fffd4'
    },
    id: 4
  }
]

test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  mockGetColors.mockResolvedValueOnce(colorList)

  render(<BubblePage />)
  render(<ColorList colors={colorList}/>)

  await waitFor(() => {
    const specificBlue = screen.getByText(/aliceblue/i)
    expect(specificBlue).toBeInTheDocument
  })
});
