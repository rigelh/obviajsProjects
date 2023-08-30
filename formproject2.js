import { Container } from "/obvia/components/Container.js";
import { ArrayEx } from "../../lib/ArrayEx.js";
import { AutoBrowse } from "../../components/AutoBrowse.js";
import { TextInput } from "../../components/TextInput/TextInput.js";
import { DateCmp } from "../../components/DateTime/DateCmp.js";
import { FormField } from "../../components/Form/FormField.js";
import { List } from "../../components/List.js";
import { Button } from "../../components/Button/Button.js";
import { Label } from "../../components/Label.js";
import { ObjectUtils } from "/obvia/lib/ObjectUtils.js";

var myContainerfirst = new Container({
  id: "container_0",
  classes: ["col-12"],
  css: {
    display: "block",
    "justify-content": "space-between",
    "background-color": "white",
    color: "black",
  },

  components: [
    {
      ctor: Container,
      props: {
        id: "container_1a",
        classes: ["col-12"],

        components: [
          {
            ctor: Container,
            props: {
              id: "container_3",
              classes: ["col-12"],
              type: "form-row",

              components: [
                {
                  ctor: Container,
                  props: {
                    id: "container_3a",
                    classes: ["col-lg-3 col-md-3 col-sm-6"],
                    css: {
                      display: "flex",
                      "justify-content": "space-between",
                      "background-color": "white", // type:form-row
                      color: "black",
                    },

                    components: [
                      {
                        ctor: FormField,
                        props: {
                          classes: ["container special-label"],
                          label: "Code",
                          css: {
                            display: "block",
                            width: "100%",
                          },
                          component: {
                            ctor: AutoBrowse,
                            props: {
                              id: "autobrowse1",
                              css: {
                                width: "100%",
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  ctor: Container,
                  props: {
                    id: "container_3b",
                    classes: ["col-lg-3 col-md-3 col-sm-6"],
                    css: {
                      display: "flex",
                      "justify-content": "space-between",
                      "background-color": "white",
                      color: "black",
                    },
                    components: [
                      {
                        ctor: FormField,
                        props: {
                          label: "Name",
                          classes: ["container special-label"],
                          css: {
                            display: "block",
                          },
                          component: {
                            ctor: TextInput,
                            props: {
                              id: "textField",
                              value: "",
                              type: "password",
                              placeholder: "Name",
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  ctor: Container,
                  props: {
                    id: "container_3c",
                    classes: ["col-lg-3 col-md-3 col-sm-6"],
                    css: {
                      display: "flex",
                      "justify-content": "space-between",
                      "background-color": "white", // type:form-row
                      color: "black",
                    },
                    components: [
                      {
                        ctor: FormField,
                        props: {
                          classes: ["container special-label"],
                          label: "Parent Center",
                          css: {
                            display: "block",
                            width: "100%",
                          },
                          component: {
                            ctor: AutoBrowse,
                            props: {
                              id: "autobrowse1",
                              placeholder: "Select Parent",
                              css: {
                                width: "100%",
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                },
                {
                  ctor: Container,
                  props: {
                    id: "container_3d",
                    classes: ["col-lg-3 col-md-3 col-sm-6"],
                    css: {
                      display: "flex",
                      "justify-content": "space-between",
                      "background-color": "white", // type:form-row
                      color: "black",
                    },
                    components: [
                      {
                        ctor: FormField,
                        props: {
                          label: "Opening Date",
                          classes: ["container special-label"],
                          css: {
                            display: "block",
                          },
                          component: {
                            ctor: DateCmp,
                            props: {},
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },

          {
            ctor: Container,
            props: {
              id: "container_4",
              classes: ["col-lg-3 col-md-3 col-sm-6"],
              type: "form-row",
              components: [
                {
                  ctor: Container,
                  props: {
                    id: "container_4a",
                    classes: ["col-12"],
                    css: {
                      display: "flex",
                      "justify-content": "space-between",
                      "background-color": "white",
                      color: "black",
                    },
                    components: [
                      {
                        ctor: FormField,
                        props: {
                          label: " Account Name",
                          classes: ["col-12"],
                          css: {
                            display: "block",
                            width: "100%",
                          },
                          component: {
                            ctor: TextInput,
                            props: {
                              id: "textField",
                              classes: ["col-12"],
                              value: "",
                              type: "password",
                              placeholder: "Search...",
                              css: {
                                width: "100%",
                              },
                            },
                          },
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },

    {
      ctor: Container,
      props: {
        id: "container_empty",
        classes: ["col-12", "mb-2"],
        type: "form-row",
        css: {
          display: "block",
          height: "40px",
          "justify-content": "space-between",
          "background-color": "white",
          color: "black",
        },
      },
    },
    {
      ctor: Container,
      props: {
        id: "container1b",
        classes: ["col-12 "],
        css: {
          display: "flex",
        },
        components: [
          {
            ctor: Container,
            props: {
              id: "container1b",
              classes: ["col-12 "],
              css: {
                display: "flex",
              },
              components: [
                {
                  ctor: Container,
                  props: {
                    id: "container_1b1",
                    classes: ["col-5"],

                    css: {
                      overflow: "auto",
                      height: "400px",
                      "background-color": "#f8f9fa",
                      "border-radius": "15px",
                    },
                    components: [
                      {
                        ctor: List,
                        props: {
                          id: "list",
                          multiselect: true,
                          rendering: {
                            direction: "vertical",
                          },
                          dataProvider: new ArrayEx([
                            {
                              id: "1",
                              text: "10-Kapitali",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "2",
                              text: "6165-KristoNEWtst ",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "3",
                              text: "101-Kapitali i paguar",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "4",
                              text: "102-Kapitali i nenshkruar i papaguar",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "5",
                              text: "1023-Llogari klienti test",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "6",
                              text: "104-Prime te lidhur me kapitalin",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "7",
                              text: "105-Kapitali i nenshkruar i papaguar",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "8",
                              text: "106-Rezerva nga rivlersimi",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "9",
                              text: "107-Rezerva te tjera",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "10",
                              text: "108-Fitimi/Humbja e pashperndare",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "11",
                              text: "109-Rezultati i ushtrimit",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "12",
                              text: "12-Fitim nga shitja e letrave me vlere",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "13",
                              text: "5524-PrillKristo20233",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "14",
                              text: "1011-KAPIT.PAGUAR NURSENI",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "15",
                              text: "1012-KAPIT.PAGUAR ROGERT",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "16",
                              text: "1073-Rezerva statutore",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "17",
                              text: "1078-Rezerva te tjera",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "18",
                              text: "10915-Kristo TEST",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "19",
                              text: "12084-kk test",
                              buttonClass: ["btn-default"],
                            },
                          ]),
                          valueField: "id",
                          classesField: "buttonClass",
                          defaultClasses: ["btn-default"],
                          selectedClasses: ["btn-success"],

                          components: [
                            {
                              ctor: Label,
                              props: {
                                id: "button",
                                type: "button",
                                value: "{id}",
                                label: "{text}",
                                classes: "{buttonClass}",
                                css: {
                                  display: "block",
                                },
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  ctor: Container,
                  props: {
                    id: "container_1b2",
                    classes: ["col-2"],
                    css: {
                      height: "400px",
                      display: "flex",
                      top: "50%",
                      "justify-content": "center",
                    },
                    components: [
                      {
                        ctor: Container,
                        props: {
                          id: "container_1b21",
                          classes: ["col-12"],
                          css: {
                            display: "flex",
                            "justify-content": "center",
                          },
                          components: [
                            {
                              ctor: Container,
                              props: {
                                id: "container_1b211",
                                classes: ["col-12"],
                                css: {
                                  display: "grid",
                                  "justify-content": "center",
                                  height: "100px",
                                },
                                components: [
                                  {
                                    ctor: Button,
                                    props: {
                                      id: "button1",
                                      type: "",
                                      value: "",
                                      label: "",
                                      css: {
                                        display: "block",
                                        width: "38px",
                                        height: "fit-content",
                                        "background-color": "#f8f9fa",
                                        color: "black",
                                        "border-radius": "100px",
                                      },
                                      click: moveElementleft,
                                      classes: ["btn", "fa fa-arrow-left"],
                                    },
                                  },
                                  {
                                    ctor: Button,
                                    props: {
                                      id: "button2",
                                      type: "",
                                      value: "",
                                      label: "",
                                      css: {
                                        display: "block",
                                        width: "38px",
                                        height: "fit-content",
                                        "background-color": "#f8f9fa",
                                        color: "black",
                                        "border-radius": "100px",
                                      },
                                      click: moveElementright,
                                      classes: [
                                        "btn",
                                        "fa fa-arrow-left fa-rotate-180",
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  ctor: Container,
                  props: {
                    id: "container_1b3",
                    classes: ["col-5"],

                    css: {
                      overflow: "auto",
                      height: "400px",
                      "background-color": "#f8f9fa",
                      "border-radius": "15px",
                    },
                    components: [
                      {
                        ctor: List,
                        props: {
                          classes: ["col-12"],
                          css: { width: "100%" },

                          id: "list2",
                          multiselect: true,
                          rendering: {
                            direction: "vertical",
                          },
                          dataProvider: new ArrayEx([
                            {
                              id: "80",
                              text: "100-KK test2",
                              buttonClass: ["btn-default"],
                            },
                            {
                              id: "81",
                              text: "103-Aksione te thesarit ",
                              buttonClass: ["btn-default"],
                            },
                          ]),
                          valueField: "id",
                          classesField: "buttonClass",
                          defaultClasses: ["btn-default"],
                          selectedClasses: ["btn-success"],
                          components: [
                            {
                              ctor: Container,
                              props: {
                                id: "1b31",
                                classes: ["col-12"],
                                css: {
                                  display: "flex",
                                  "justify-content": "space-between",
                                  "align-items": "center",
                                  "margin-left": "-35px",
                                },
                                components: [
                                  {
                                    ctor: Label,
                                    props: {
                                      classes: ["col-6"],
                                      css: { width: "100%" },
                                      id: "button",
                                      type: "button",
                                      value: "{id}",
                                      label: "{text}",
                                      classes: "{buttonClass}",
                                      css: {
                                        display: "block",
                                      },
                                    },
                                  },
                                  {
                                    ctor: TextInput,
                                    props: {
                                      classes: ["col-6"],
                                      css: { width: "100%", float: "right" },
                                      id: "textField",
                                      value: "",
                                      type: "number",
                                      placeholder: "0.0 %",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
});

// prettier-ignore
function moveElementright() {
  const len1 = myContainerfirst.container1b.container1b.container_1b1.list.dataProvider.length;
  const len2 = myContainerfirst.container1b.container1b.container_1b3.list2.dataProvider.length;
  const clickedelement1 = myContainerfirst.container1b.container1b.container_1b1.list.value[0];
  const clickedelement1a = myContainerfirst.container1b.container1b.container_1b1.list.value[0].id;
  const listadjathtas = myContainerfirst.container1b.container1b.container_1b3.list2.dataProvider;
  const listamajtas = myContainerfirst.container1b.container1b.container_1b1.list.dataProvider;
  delete myContainerfirst.container1b.container1b.container_1b1.list.value[0].buttonClass;
  var clonedelement = ObjectUtils.deepCopy(clickedelement1);
  // loopi i te dytes
  for (let i = 0; i < len2; i++) {
    // shko te cdo row i listes dhe kapi id
    const comparemetdyten = myContainerfirst.container1b.container1b.container_1b3.list2.dataProvider[i].id;
    // id e row te listes se par a eshte e ndryshme me id e listes se dyt
    if (clickedelement1a != comparemetdyten) {
      const indexToRemove = listamajtas.findIndex((element) => element.id === clickedelement1.id);    
      if (indexToRemove !== -1) {
        // Use slice() to remove the element at the found index
        listamajtas.splice(indexToRemove, 1);

      listadjathtas.pushUnique(clonedelement);
  }
}}}

// prettier-ignore
function moveElementleft() {
  const len1 =
    myContainerfirst.container1b.container1b.container_1b1.list.dataProvider
      .length;
  const len2 =
    myContainerfirst.container1b.container1b.container_1b3.list2.dataProvider
      .length;
  const clickedelement2 =
    myContainerfirst.container1b.container1b.container_1b3.list2.value[0];
  const clickedelement2a =
    myContainerfirst.container1b.container1b.container_1b3.list2.value[0].id;
  const listadjathtas =
    myContainerfirst.container1b.container1b.container_1b3.list2.dataProvider;
  const listamajtas =
    myContainerfirst.container1b.container1b.container_1b1.list.dataProvider;
  delete myContainerfirst.container1b.container1b.container_1b3.list2.value[0]
    .buttonClass;
  var clonedelement = ObjectUtils.deepCopy(clickedelement2);
  // loopi i te dytes
  for (let i = 0; i < len1; i++) {
    // shko te cdo row i listes dhe kapi id
    const comparemetparen =
      myContainerfirst.container1b.container1b.container_1b1.list.dataProvider[i].id;
    // id e row te listes se par a eshte e ndryshme me id e listes se dyt
    if (clickedelement2a != comparemetparen) {
      // myContainerfirst.container1b.container1b.container_1b1.list.value[0].buttonClass[0].removeClass("btn-success");
      const indexToRemove = listadjathtas.findIndex(
        (element) => element.id === clickedelement2.id
      );
      if (indexToRemove !== -1) {
        // Use slice() to remove the element at the found index
        listadjathtas.splice(indexToRemove, 1);
      }
      listamajtas.pushUnique(clonedelement);
    }
  }
}
myContainerfirst.render().then(function (cmpInstance) {
  $("#root").append(cmpInstance.$el);
});

export { myContainerfirst };
