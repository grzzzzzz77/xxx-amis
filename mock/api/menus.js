module.exports = () => {
  return {
    status: 0,
    data: [
      {
        label: "导航",
        children: [
          {
            path: "/hello",
            label: "Hello",
            icon: "fa fa-gauge",
          },
          {
            path: "/demo",
            label: "Demo",
            icon: "fa fa-snapchat",
          },
          // {
          //   path: "/data",
          //   label: "Data",
          //   icon: "fa fa-gauge",
          // },
        ],
      },
    ],
  };
};
