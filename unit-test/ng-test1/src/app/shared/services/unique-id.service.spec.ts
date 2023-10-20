import { UniqueIdService } from "./unique-id.service";

describe(UniqueIdService.name, ()=> {
  let service: UniqueIdService = undefined;

  beforeEach(() => {
    service = new UniqueIdService();
  })

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should generate id when called with prefix`, ()=>{
    const id = service.generateUniqueIdWithPrefix('app');

    expect(id.startsWith('app-')).toBeTrue();
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should not generate duplicate IDs when called multiple times`, ()=>{
    const ids = new Set();
    const times = 100;

    for(let i = 0; i < times; i++){
      const id = service.generateUniqueIdWithPrefix('app');
      ids.add(id);
    }

    expect(ids.size).toBe(times);
  });

  it(`#${UniqueIdService.prototype.getNumberOfGeneratedIds.name} should return the number of generateIds when called`, ()=>{
    service.generateUniqueIdWithPrefix('app-');
    service.generateUniqueIdWithPrefix('app-');
    const numberOfGeneratedIds = service.getNumberOfGeneratedIds();

    expect(numberOfGeneratedIds).toBe(2);
  });

  it(`#${UniqueIdService.prototype.generateUniqueIdWithPrefix.name} should throw an Error when called with empty value`, ()=>{
    const emptyValues = [undefined, null, '', '0', '1'];

    emptyValues.forEach(emptyValue => {
      expect(() => service.generateUniqueIdWithPrefix(emptyValue))
      .withContext(`Empty value: ${emptyValue}`)
      .toThrowError('Prefix cannot be empty');
    });
    
  });
});