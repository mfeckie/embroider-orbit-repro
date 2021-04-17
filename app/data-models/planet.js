import { Model, attr, hasOne, hasMany, key } from 'ember-orbit';

export default class Planet extends Model {
  @attr('string') name;
  @hasMany('moon', { inverse: 'planet' }) moons;
  @hasOne('star') sun;
}
