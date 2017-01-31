{
    "name": "Article",
    "fields": [{
      "id": "title",
      "name": "Title",
      "required": 1,
      "localized": 1,
      "type": "Text"
    },
    {
      "id": "body",
      "name": "Body",
      "required": 1,
      "localized": 1,
      "type": "Text"
    },
    {
      "id": "category",
      "name": "Category",
      "type": "Text",
      "validations": {
      	"in": ["News", "Event"]
      }
    },
    {
      "id": "mobile",
      "name": "Mobile",
      "type": "Text",
      "validations": {
      	"regexp": {
      		"pattern": "^(\+66|0)(-|\s)?\d{2}(-|\s)?\d{3}(-|\s)?\d{4}$",
      		"flags": "ig"
      	}
      }
    }]
}
