import * as Plural from '../index'

describe('getPlural function test', () => {
    it('should return Boys', () => {
        var result = Plural.getPlural('Boy');
        expect(result).toBe('Boys');
    });
    it('should return Girls', () => {
        var result = Plural.getPlural('Girl');
        expect(result).toBe('Girls');
    });
    it('should return Geese', () => {
        var result = Plural.getPlural('Goose');
        expect(result).toBe('Geese');
    });
    it('should return Toys', () => {
        var result = Plural.getPlural('Toy');
        expect(result).toBe('Toys');
    });
    it('should return Men', () => {
        var result = Plural.getPlural('Man');
        expect(result).toBe('Men');
    });
});