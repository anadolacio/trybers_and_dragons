import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private _energyType: EnergyType = 'mana';
  private static _instances = 0;
 
  constructor(name: string) {
    super(name);
    Mage._instances += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Mage._instances;
  }
}
  
export default Mage;