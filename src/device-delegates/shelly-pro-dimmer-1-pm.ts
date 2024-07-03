import { ShellyProDimmer1Pm } from 'shellies-my';

import { DeviceDelegate } from './base';

/**
 * Handles Shelly Pro Dimmer 1PM devices.
 */
export class ShellyProDimmer1PmDelegate extends DeviceDelegate {
  protected setup() {
    const d = this.device as ShellyProDimmer1Pm;

    this.addLight(d.light0, { single: true });
  }
}

DeviceDelegate.registerDelegate(ShellyProDimmer1PmDelegate, ShellyProDimmer1Pm);
