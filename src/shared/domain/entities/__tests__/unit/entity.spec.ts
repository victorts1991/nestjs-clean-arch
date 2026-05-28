import { Entity } from '../../entity';

type StubProps = {
    prop1: string;
    prop2: number;
}

function uuidValidate(uuid: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
    return uuidRegex.test(uuid);
}

class StubEntity extends Entity<StubProps> {}

describe('Entity unit tests', () => {

    it('Should set props and id', () => {       
        const props = {
            prop1: 'value1',
            prop2: 42
        };
        const entity = new StubEntity(props);

        expect(entity.props).toStrictEqual(props);
        expect(uuidValidate(entity._id)).toBeTruthy();
    });

    it('Should accept a valid uuid', () => {    
        const id = '123e4567-e89b-12d3-a456-426614174000';   
        const props = {
            prop1: 'value1',
            prop2: 42
        };
        const entity = new StubEntity(props, id);
        expect(entity._id).toBe(id);
    });

    it('Should convert a entity to a json', () => {    
        const id = '123e4567-e89b-12d3-a456-426614174000';   
        const props = {
            prop1: 'value1',
            prop2: 42
        };
        const entity = new StubEntity(props, id);
        const json = entity.toJSON();

        expect(json).toStrictEqual({
            id,
            ...props
        });
    });
 
});