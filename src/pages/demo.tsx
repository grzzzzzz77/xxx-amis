import schemaComponent from "@/utils/schemaComponent";

const schema = {
    "type": "page",
    "title": "这是一个demo",
    "body": [
      {
        "type": "table",
        "columns": [
          {
            "label": "用户名",
            "name": "name",
            "type": "text",
            "id": "u:f71d570fe52b"
          },
          {
            "type": "text",
            "label": "邮箱",
            "name": "email",
            "id": "u:96d425d45bae"
          },
          {
            "type": "text",
            "label": "电话",
            "name": "phone",
            "id": "u:3314c33f5ed3"
          },
          {
            "type": "text",
            "label": "网址",
            "name": "website",
            "id": "u:af970e02933b"
          }
        ],
        "id": "u:c092d62dffc4"
      }
    ],
    "id": "u:88d4588e2ba1",
    "asideResizor": false,
    "pullRefresh": {
      "disabled": true
    },
    "initApi": {
      "url": "https://jsonplaceholder.typicode.com/users",
      "method": "get",
      "requestAdaptor": "",
      "adaptor": "",
      "messages": {},
      "dataType": "json"
    }
  }

export default schemaComponent(schema);