import schemaComponent from "@/utils/schemaComponent";

const schema = {
    "type": "page",
    "title": "hello",
    "body": [
      {
        "type": "button",
        "label": "弹框",
        "id": "u:66f5e1a1de63",
        "actionType": "dialog",
        "dialog": {
          "title": "弹框",
          "body": "这是个简单的弹框。"
        }
      },
      {
        "type": "button",
        "label": "参数传值",
        "onEvent": {
          "click": {
            "actions": [
              {
                "ignoreError": false,
                "actionType": "url",
                "args": {
                  "blank": false,
                  "url": "http://localhost:4000/data",
                  "params": {
                    "data1": "123123"
                  }
                }
              }
            ]
          }
        },
        "id": "u:e4a667dd5a77"
      }
    ],
    "id": "u:ea9914ec4da4",
    "asideResizor": false,
    "pullRefresh": {
      "disabled": true
    }
  }

export default schemaComponent(schema);