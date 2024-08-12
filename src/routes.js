export const routePaths = [
  "/",
  "/canvas",
  "/canvas/01",
  "/canvas/02",
  "/chartjs",
  "/chartjs/01",
  "/chartjs/02",
  "/d3js",
  "/d3js/01",
  "/d3js/02",
  "/map",
  "/map/01",
  "/map/02",
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
    children: ["/canvas/01", "/canvas/02"],
  },

  "/canvas/01": {
    key: "/canvas/01",
    link: "/canvas/01",
    name: "01",
  },

  "/canvas/02": {
    key: "/canvas/02",
    link: "/canvas/02",
    name: "02",
  },

  "/chartjs": {
    key: "/chartjs",
    link: "/chartjs",
    name: "Chart.js",
    children: ["/chartjs/01", "/chartjs/02"],
  },

  "/chartjs/01": {
    key: "/chartjs/01",
    link: "/chartjs/01",
    name: "01",
  },

  "/chartjs/02": {
    key: "/chartjs/02",
    link: "/chartjs/02",
    name: "02",
  },

  "/d3js": {
    key: "/d3js",
    link: "/d3js",
    name: "D3.js",
    children: ["/d3js/01", "/d3js/02"],
  },

  "/d3js/01": {
    key: "/d3js/01",
    link: "/d3js/01",
    name: "01",
  },

  "/d3js/02": {
    key: "/d3js/02",
    link: "/d3js/02",
    name: "02",
  },

  "/map": {
    key: "/map",
    link: "/map",
    name: "Map",
    children: ["/map/01", "/map/02"],
  },

  "/map/01": {
    key: "/map/01",
    link: "/map/01",
    name: "01",
  },

  "/map/02": {
    key: "/map/02",
    link: "/map/02",
    name: "02",
  },
};

export const isParentRoute = (route) => Array.isArray(route.children);

export const gnbRootList = routes["/"].children.map((r) => routes[r]);
