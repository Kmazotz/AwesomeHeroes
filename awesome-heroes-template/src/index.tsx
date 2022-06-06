import "./index.sass"

import {App} from "./app"
import React from "react"
import {render} from "react-dom"

document.addEventListener('DOMContentLoaded', () => {render(<App/>, document.getElementById("root"))});