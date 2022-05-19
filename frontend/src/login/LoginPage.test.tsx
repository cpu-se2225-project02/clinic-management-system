import React from "react"
import {render} from "@testing-library/react"
import LoginPage from "./LoginPage"

it("renders correctly", () => {
    const {queryByPlaceholderText} = render(<LoginPage/>)

    expect(queryByPlaceholderText("Enter email address")).toBeTruthy()
    expect(queryByPlaceholderText("Enter password")).toBeTruthy()
})
