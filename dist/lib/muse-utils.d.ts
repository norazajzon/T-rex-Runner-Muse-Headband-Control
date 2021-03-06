/// <reference types="web-bluetooth" />
import { Observable } from 'rxjs';
export declare function decodeResponse(bytes: Uint8Array): string;
export declare function encodeCommand(cmd: string): Uint8Array;
export declare function observableCharacteristic(characteristic: BluetoothRemoteGATTCharacteristic): Promise<Observable<DataView>>;
