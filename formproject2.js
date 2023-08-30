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

function moveElementright() {
  
  const lengthrightlist = myContainerfirst.container1b.container1b.container_1b3.list2.dataProvider .length;
  const rightlist = myContainerfirst.container1b.container1b.container_1b3.list2.dataProvider;
  const leftlist = myContainerfirst.container1b.container1b.container_1b1.list.dataProvider;
  const clickedleftelement = myContainerfirst.container1b.container1b.container_1b1.list.value[0];
  const clickedleftelementid = myContainerfirst.container1b.container1b.container_1b1.list.value[0].id;
  delete myContainerfirst.container1b.container1b.container_1b1.list.value[0].buttonClass;
// cloning element
  const clonedelement = ObjectUtils.deepCopy(clickedleftelement);
  
  for (let i = 0; i < lengthrightlist; i++) {
    // get the id in each row in the right list
    var rowDataRightList = myContainerfirst.container1b.container1b.container_1b3.list2.dataProvider[i].id;
    // compare row id of the left list with the ones from the right list
    if (clickedleftelementid != rowDataRightList) {
      const indexToRemove = leftlist.findIndex((element) => element.id === clickedleftelement.id);    
      if (indexToRemove !== -1) {
        // Use slice() to remove the element at the found index
        leftlist.splice(indexToRemove, 1);
        rightlist.pushUnique(clonedelement);
  }
}
}
if (lengthrightlist==0){
  const indexToRemove = leftlist.findIndex((element) => element.id === clickedleftelement.id);    
  if (indexToRemove !== -1) {
    leftlist.splice(indexToRemove, 1);
    rightlist.pushUnique(clonedelement);
}
}
}

function moveElementleft() {
  const lengthleftlist = myContainerfirst.container1b.container1b.container_1b1.list.dataProvider.length;
  const rightlist = myContainerfirst.container1b.container1b.container_1b3.list2.dataProvider;
  const leftlist = myContainerfirst.container1b.container1b.container_1b1.list.dataProvider;
  const clickedrightelement = myContainerfirst.container1b.container1b.container_1b3.list2.value[0];
  const clickedrightelementid = myContainerfirst.container1b.container1b.container_1b3.list2.value[0].id;
  delete myContainerfirst.container1b.container1b.container_1b3.list2.value[0].buttonClass;
// cloning element
  const clonedelement = ObjectUtils.deepCopy(clickedrightelement);
  for (let i = 0; i < lengthleftlist; i++) {
    // get the id in each row in the left list
    var rowDataLeftList = myContainerfirst.container1b.container1b.container_1b1.list.dataProvider[i].id;
    // compare row id of the left list with the ones from the left list
    if (clickedrightelementid != rowDataLeftList) {
      const indexToRemove = rightlist.findIndex(
        (element) => element.id === clickedrightelement.id
      );
      if (indexToRemove !== -1) {
        // Use slice() to remove the element at the found index
        rightlist.splice(indexToRemove, 1);
        leftlist.pushUnique(clonedelement);
      }
    }
  }

  if (lengthleftlist == 0){
    const indexToRemove = rightlist.findIndex(
      (element) => element.id === clickedrightelement.id
    );
    if (indexToRemove !== -1) {
      rightlist.splice(indexToRemove, 1);
      leftlist.pushUnique(clonedelement);
    }
  }
}
myContainerfirst.render().then(function (cmpInstance) {
  $("#root").append(cmpInstance.$el);
});

export { myContainerfirst };
