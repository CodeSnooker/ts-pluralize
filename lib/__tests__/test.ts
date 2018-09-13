import * as Plural from '../index'

describe('getPlural function test', () => {
    it('should return Boys', () => {
        const result = Plural.getPlural('Boy');
        expect(result).toBe('Boys');
    });
    it('should return Girls', () => {
        const result = Plural.getPlural('Girl');
        expect(result).toBe('Girls');
    });
    it('should return Geese', () => {
        const result = Plural.getPlural('Goose');
        expect(result).toBe('Geese');
    });
    it('should return Toys', () => {
        const result = Plural.getPlural('Toy');
        expect(result).toBe('Toys');
    });
    it('should return Men', () => {
        const result = Plural.getPlural('Man');
        expect(result).toBe('Men');
    });
});