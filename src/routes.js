// import { lazy } from "react";
import GlobalLayout from "./pages/_layout";

// const Index = lazy(() => import("./pages/index"));
// const ProductsIndex = lazy(() => import("./pages/products/index"));
// const ProductsId = lazy(() => import("./pages/products/[id]"));
// // const Chartjs = lazy(() => import("./pages/chartjs/index"));
// const D3js = lazy(() => import("./pages/d3js/index"));
// const D3jsExercise = lazy(() => import("./pages/d3js/exercise/[id]"));
// const D3jsPractice = lazy(() => import("./pages/d3js/practice/[id]"));

// export const routes = [
//   {
//     path: "/",
//     element: <GlobalLayout />,
//     children: [
//       { path: "/", element: <Index /> },
//       { path: "/products", element: <ProductsIndex /> },
//       { path: "/products/:id", element: <ProductsId /> },
//       // { path: "/chartjs", element: <Chartjs /> },
//       // { path: "/chartjs/exercise/:id", element: <ChartjsExercise /> },
//       { path: "/d3js", element: <D3js /> },
//       { path: "/d3js/exercise/:id", element: <D3jsExercise /> },
//       { path: "/d3js/practice/:id", element: <D3jsPractice /> },
//     ],
//   },
// ];

// export const pages = [
//   { route: "/" },
//   { route: "/products" },
//   { route: "/products/:id" },
//   // { route: "/chartjs" },
//   // { route: "/chartjs/exercise/:id" },
//   { route: "/d3js" },
//   { route: "/d3js/exercise/:id" },
//   { route: "/d3js/practice/:id" },
// ];

export const routePaths = [
  "/",
  "/canvas",
  "/canvas/exercise",
  "/canvas/exercise/01",
  "/canvas/exercise/02",
  "/canvas/practice",
  "/canvas/practice/01",
  "/canvas/practice/02",
  "/chartjs",
  "/chartjs/exercise",
  "/chartjs/exercise/01",
  "/chartjs/exercise/02",
  "/chartjs/practice",
  "/chartjs/practice/01",
  "/chartjs/practice/02",
  "/d3js",
  "/d3js/exercise/01",
  "/d3js/exercise/02",
  "/d3js/practice",
  "/d3js/practice/01",
  "/d3js/practice/02",
  "/map",
  "/map/exercise",
  "/map/exercise/01",
  "/map/exercise/02",
  "/map/practice",
  "/map/practice/01",
  "/map/practice/02",
];

export const routes = {
  "/": {
    key: "/",
    link: "/",
    name: "Home",
    children: ["/canvas", "/chartjs", "/d3js", "/map"],
  },
  "/canvas": {
    key: "/canvas",
    link: "/canvas",
    name: "Canvas",
    children: ["/canvas/exercise", "/canvas/practice"],
  },

  "/canvas/exercise": {
    key: "/canvas/exercise",
    link: "/canvas/exercise",
    name: "Canvas Exercise",
    children: ["/canvas/exercise/01", "/canvas/exercise/02"],
  },

  "/canvas/exercise/01": {
    key: "/canvas/exercise/01",
    link: "/canvas/exercise/01",
    name: "Canvas Exercise 01",
  },

  "/canvas/exercise/02": {
    key: "/canvas/exercise/02",
    link: "/canvas/exercise/02",
    name: "Canvas Exercise 02",
  },

  "/canvas/practice": {
    key: "/canvas/practice",
    link: "/canvas/practice",
    name: "Canvas Practice",
    children: ["/canvas/practice/01", "/canvas/practice/02"],
  },

  "/canvas/practice/01": {
    key: "/canvas/practice/01",
    link: "/canvas/practice/01",
    name: "Canvas Practice 01",
  },

  "/canvas/practice/02": {
    key: "/canvas/practice/02",
    link: "/canvas/practice/02",
    name: "Canvas Practice 02",
  },

  "/chartjs": {
    key: "/chartjs",
    link: "/chartjs",
    name: "Chart.js",
    children: [
      "/chartjs/exercise/01",
      "/chartjs/exercise/02",
      "/chartjs/practice",
    ],
  },
  "/chartjs/exercise": {
    key: "/chartjs/exercise",
    link: "/chartjs/exercise",
    name: "Chart.js Exercise",
    children: ["/chartjs/exercise/01", "/chartjs/exercise/02"],
  },

  "/chartjs/exercise/01": {
    key: "/chartjs/exercise/01",
    link: "/chartjs/exercise/01",
    name: "Chart.js Exercise 01",
  },

  "/chartjs/exercise/02": {
    key: "/chartjs/exercise/02",
    link: "/chartjs/exercise/02",
    name: "Chart.js Exercise 02",
  },

  "/chartjs/practice": {
    key: "/chartjs/practice",
    link: "/chartjs/practice",
    name: "Chart.js Practice",
    children: ["/chartjs/practice/01", "/chartjs/practice/02"],
  },

  "/chartjs/practice/01": {
    key: "/chartjs/practice/01",
    link: "/chartjs/practice/01",
    name: "Chart.js Practice 01",
  },

  "/chartjs/practice/02": {
    key: "/chartjs/practice/02",
    link: "/chartjs/practice/02",
    name: "Chart.js Practice 02",
  },

  "/d3js": {
    key: "/d3js",
    link: "/d3js",
    name: "D3.js",
    children: ["/d3js/exercise/01", "/d3js/exercise/02", "/d3js/practice"],
  },

  "/d3js/exercise/01": {
    key: "/d3js/exercise/01",
    link: "/d3js/exercise/01",
    name: "D3.js Exercise 01",
  },

  "/d3js/exercise/02": {
    key: "/d3js/exercise/02",
    link: "/d3js/exercise/02",
    name: "D3.js Exercise 02",
  },

  "/d3js/practice": {
    key: "/d3js/practice",
    link: "/d3js/practice",
    name: "D3.js Practice",
    children: ["/d3js/practice/01", "/d3js/practice/02"],
  },

  "/d3js/practice/01": {
    key: "/d3js/practice/01",
    link: "/d3js/practice/01",
    name: "D3.js Practice 01",
  },

  "/d3js/practice/02": {
    key: "/d3js/practice/02",
    link: "/d3js/practice/02",
    name: "D3.js Practice 02",
  },

  "/map": {
    key: "/map",
    link: "/map",
    name: "Map",
    children: ["/map/exercise", "/map/practice"],
  },

  "/map/exercise": {
    key: "/map/exercise",
    link: "/map/exercise",
    name: "Map Exercise",
    children: ["/map/exercise/01", "/map/exercise/02"],
  },

  "/map/exercise/01": {
    key: "/map/exercise/01",
    link: "/map/exercise/01",
    name: "Map Exercise 01",
  },

  "/map/exercise/02": {
    key: "/map/exercise/02",
    link: "/map/exercise/02",
    name: "Map Exercise 02",
  },

  "/map/practice": {
    key: "/map/practice",
    link: "/map/practice",
    name: "Map Practice",
    children: ["/map/practice/01", "/map/practice/02"],
  },

  "/map/practice/01": {
    key: "/map/practice/01",
    link: "/map/practice/01",
    name: "Map Practice 01",
  },

  "/map/practice/02": {
    key: "/map/practice/02",
    link: "/map/practice/02",
    name: "Map Practice 02",
  },
};

export const isParentRoute = (route) => Array.isArray(route.children);

export const gnbRootList = routes["/"].children.map((r) => routes[r]);

console.log(gnbRootList);
// export const routes = [
//   {
//     path: "/",
//     element: <GlobalLayout />,
//     children: [
//       { path: "/", element: <Index /> },
//       { path: "/products", element: <ProductsIndex /> },
//       { path: "/products/:id", element: <ProductsId /> },
//       {
//         path: "/d3js",
//         element: <D3js />,
//         children: [
//           {
//             path: "exercise",
//             element: <D3jsExercise />,
//             ids: ["01", "02", "03"], // 동적으로 생성할 ID 목록
//           },
//           {
//             path: "practice",
//             element: <D3jsPractice />,
//             ids: ["01", "02"], // 동적으로 생성할 ID 목록
//           },
//         ],
//       },
//     ],
//   },
// ];
