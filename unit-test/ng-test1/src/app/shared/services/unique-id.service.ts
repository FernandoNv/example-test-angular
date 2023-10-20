import { Injectable } from "@angular/core";
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UniqueIdService {
  private numberOfGeneratedIds = 0;
  private validId = /^[A-Za-z]+[\w\-\:\.]*$/;

  public generateUniqueIdWithPrefix(prefix: string): string{
    if(!prefix || !this.validId.test(prefix)) 
      throw new Error('Prefix cannot be empty');

    const uniqueId = this.generatedUniqueId();
    this.numberOfGeneratedIds++;

    return `${prefix.trim()}-${uniqueId}`;
  }

  public getNumberOfGeneratedIds(): number{
    return this.numberOfGeneratedIds;
  }

  private generatedUniqueId(){
    return uuidv4();
  }
}