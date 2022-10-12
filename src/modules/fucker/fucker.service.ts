import { Injectable } from '@nestjs/common';

@Injectable()
export class FuckerService {
  getFuckers(): string {
    return 'Fuckers list';
  }

  getFuckerById(id: number): string {
    return `Fucker ID: ${id}`;
  }
}
