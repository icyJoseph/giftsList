import requestAnimationFrame from "./tempPolyfills";
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adpter: new Adapter(), disableLifecycleMethods: true });
