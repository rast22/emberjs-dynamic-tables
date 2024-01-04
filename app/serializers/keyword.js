import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class KeywordSerializer extends JSONAPISerializer {
  keyForAttribute(key) { return key; }
}
