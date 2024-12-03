import schemaComponent from "@/utils/schemaComponent";

const schema = {
    "type": "page",
    "title": "hello",
    "body": {
        "label": "弹框",
        "type": "button",
        "actionType": "dialog",
        "dialog": {
            "title": "弹框",
            "body": "这是个简单的弹框。"
        }
    }
}

export default schemaComponent(schema);