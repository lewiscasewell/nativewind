import ReactJSXRuntime from "react/jsx-dev-runtime";
// import { render } from "./render";

export { Fragment } from "react";

export function jsx(type: any, props: any, key: any) {
  return (ReactJSXRuntime as any).jsx(type, props, key);
  // return render((ReactJSXRuntime as any).jsx, type, props, key);
}

export function jsxs(type: any, props: any, key: any) {
  return (ReactJSXRuntime as any).jsxs(type, props, key);
  // return render((ReactJSXRuntime as any).jsxs, type, props, key);
}
