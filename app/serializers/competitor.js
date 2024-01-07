import JSONAPISerializer from '@ember-data/serializer/json-api';

export default class CompetitorSerializer extends JSONAPISerializer {
  keyForAttribute(key) { return key; }
}
