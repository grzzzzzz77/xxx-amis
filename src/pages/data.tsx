import schemaComponent from "@/utils/schemaComponent";

const schema = {
    "type": "page",
    "title": "data",
    "body": [
      {
        "type": "input-text",
        "label": "文本",
        "name": "text",
        "id": "u:7f7d404105dd",
        "value": "${data1}"
      }
    ],
    "id": "u:ea9914ec4da4",
    "asideResizor": false,
    "pullRefresh": {
      "disabled": true
    }
  }

export default schemaComponent(schema);