import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _instances = 0;
 
  constructor(name: string) {
    super(name);
    Warrior._instances += 1;
  }
  
  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._instances;
  }
}
  
export default Warrior;