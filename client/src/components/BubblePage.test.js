import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import BubblePage from "./BubblePage";
import * as all from '../utilities/apiUsage'

jest.mock('../utilities/apiTests')

const colorList = {data: [
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
]}

jest.mock('axios')
const axios = require("axios")

jest.mock("axios", () => ({
  create: jest.fn(),
  get: jest.fn()
}))


test("Fetches data and renders the bubbles", async () => {
  // Finish this test
  const mockedAxiosWithAuth = jest.spyOn(all, "axiosWithAuth")

  mockedAxiosWithAuth.mockImplementation(() => {
    return axios
  })

  axios.get.mockResolvedValueOnce(colorList)

  render(<BubblePage />)

  await waitFor(() => {
    const specificBlue = screen.getByText(/aliceblue/i)
    expect(specificBlue).toBeInTheDocument
  })
});
