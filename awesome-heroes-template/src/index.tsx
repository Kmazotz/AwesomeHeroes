import "./index.sass";

import {App} from "./app";
import {render} from "react-dom";

document.addEventListener('DOMContentLoaded', () => {render(<App/>, document.getElementById("root"))});
