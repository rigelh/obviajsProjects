import { DropDown } from "../../components/DropDown/DropDown.js";
import { Container } from "/obvia/components/Container.js";
import { Link } from "/obvia/components/Link/Link.js";
import { ArrayEx } from "../../lib/ArrayEx.js";
import { Image } from "/obvia/components/Image.js";
import { AutoBrowse } from "../../components/AutoBrowse.js";
import { DataGrid } from "../../components/DataGrid/DataGrid.js";
import { TextInput } from "../../components/TextInput/TextInput.js";

var myContainer = new Container({
  id: "container_1",
  css: {
    display: "flex",
    "justify-content": "space-between",
    "background-color": "#000000",
    color: "white",
    border: "none",
  },

  components: [
    {
      ctor: Image,
      props: {
        id: "Image_nav",
        label: "photo",
        src: "/obvia/assets/images/logo_black.jpg",
        css: {
          border: "none",
          height: " 100%",
          padding: "5px",
          width: "118px",
        },
      },
    },

    {
      ctor: Container,
      props: {
        id: "container_2",
        css: {
          display: "flex",
          "justify-content": "space-evenly",
          "background-color": "#000000",
          color: "white",
          border: "none",
        },

        components: [
          {
            ctor: Link,
            props: {
              id: "label",
              href: "https://www.footlocker.co.uk/en/",
              label: "Home",
              css: {
                "text-align": "center",
                width: "fit-content",
                "font-size": "0.80rem",
                "font-weight": "500",
              },
              classes: ["links_Navbar_webpage"],
            },
          },

          {
            ctor: Link,
            props: {
              id: "labelabout",
              label: "About",
              href: "https://www.footlocker.co.uk/en/About.html",

              css: {
                width: "fit-content",
                "font-size": "0.80rem",
                "font-weight": "500",
              },
              classes: ["links_Navbar_webpage"],
            },
          },

          {
            ctor: DropDown,
            props: {
              id: "Dropdown1",
              valueField: "key",
              labelField: "title",
              label: "Brand  ",

              change: async function () {
                for (let i = 0; i < this.dataProvider.length; i++) {
                  if (this.dataProvider[i].key === i) {
                    this.dataProvider[i].title = this.label;
                  }
                }

                if (this.selectedItem.key === "0") {
                  let response = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                  ).then((response) => response.json());
                  myContainer3.DataGrid.dataProvider = response;
                }
                // if (this.selectedItem.key === "0") {
                //   myContainer.container_2.children.Dropdown2.dataProvider = [
                //     { key: "0", title: "Nike Air Force 1 " },
                //     { key: "1", title: "Nike Air Max " },
                //     { key: "2", title: "Nike Air Jordan  " },
                //     { key: "3", title: "Nike React Element " },
                //   ];
                // } else if (this.selectedItem.key === "1") {
                //   myContainer.container_2.children.Dropdown2.dataProvider = [
                //     { key: "4", title: "Adidas Yeezy " },
                //     { key: "5", title: "Adidas NMD  " },
                //     { key: "6", title: "Adidas Stan Smith  " },
                //     { key: "7", title: "Adidas Superstar " },
                //   ];
                // } else {
                //   myContainer.container_2.children.Dropdown2.dataProvider = [
                //     { key: "8", title: "New Balance 990 " },
                //     { key: "9", title: "New Balance 574  " },
                //     { key: "10", title: "New Balance Fresh Foam " },
                //     { key: "11", title: "New Balance 997 " },
                //   ];
                // }
              },

              dataProvider: new ArrayEx([
                { key: "0", title: "Nike " },
                { key: "1", title: "Adidas " },
                { key: "2", title: "New balance " },
              ]),
            },
          },

          {
            ctor: DropDown,
            props: {
              id: "Dropdown2",
              valueField: "key",
              labelField: "title",
              label: "Model ",

              dataProvider: new ArrayEx([]),
            },
          },
        ],
      },
    },

    {
      ctor: AutoBrowse,
      props: {
        id: "autobrowse1",
        label: "",

        CSS: {
          "background-color": "#000000",
        },
      },
    },
  ],
});

var myContainer3 = new Container({
  id: "container_3",
  css: {
    display: "flex",
    "justify-content": "space-between",
    "background-color": "white",
    color: "black",
    border: "none",
  },
  classes: ["container3"],

  components: [
    {
      ctor: DataGrid,
      props: {
        id: "DataGrid",

        rowCount: 10, //visible rows count - virtual scrolling wil be applied on scroll
        CSS: {
          "background-color": "#000000",
          display: "flex",
          "justify-content": "space-between",
          "background-color": "white",
          color: "white",
          border: "none",
        },
        dataProvider: new ArrayEx([]),
        columns: [
          {
            width: 400,
            name: "name",
            field: "name",
            description: "Name",
            sortable: true,
            sortInfo: {
              sortOrder: 0,
              sortDirection: "ASC",
            },
            editable: true,
          },
          {
            width: 400,
            name: "username",
            field: "username",
            description: "username",
            sortable: true,
            sortInfo: {
              sortOrder: 0,
              sortDirection: "ASC",
            },
            editable: true,
          },
          {
            width: 400,
            name: "email",
            field: "email",
            description: "email",
            sortable: false,
            sortInfo: {
              sortOrder: 0,
              sortDirection: "ASC",
            },
            editable: true,
            itemEditor: {
              ctor: TextInput,
              props: {
                id: "text",
                value: "{email}",
              },
            },
          },
          {
            width: 400,
            name: "phone",
            field: "phone",
            description: "phone ",
            sortable: true,
            sortInfo: {
              sortOrder: 0,
              sortDirection: "ASC",
            },
            editable: true,
            itemEditor: {
              ctor: TextInput,
              props: {
                id: "text",
                value: "{phone}",
              },
            },
          },
          {
            width: 400,
            name: "website",
            field: "website",
            description: "website ",
            sortable: true,
            sortInfo: {
              sortOrder: 0,
              sortDirection: "ASC",
            },
            editable: true,
            itemEditor: {
              ctor: TextInput,
              props: {
                id: "text",
                value: "{website}",
              },
            },
          },
        ],
      },
    },
  ],
});

async function renderAndAppend(container) {
  const cmpInstance = await container.render(); // await ==> ben pause ekzekutimin derisa promise te ekzekutohet
  $("#root").append(cmpInstance.$el); // render => procesi ku shfaq te dhenat nga kodi ne kompjuter
}

async function renderContainersInOrder() {
  await renderAndAppend(myContainer);
  await renderAndAppend(myContainer3);
}

renderContainersInOrder().catch((error) => {
  console.error("Error rendering and appending containers:", error);
});

// myContainer2.render().then(function (cmpInstance) {
//   $("#root").append(cmpInstance.$el);
// });
// myContainer.render().then(function (cmpInstance) {
//   $("#root").append(cmpInstance.$el);
// });

export { myContainer, myContainer3 };
