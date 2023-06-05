import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _instances = 0;
 
  constructor(name: string) {
    super(name);
    Necromancer._instances += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._instances;
  }
}
  
export default Necromancer;