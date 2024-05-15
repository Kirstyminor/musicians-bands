const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const band = await Band.create({
            name: 'testband',
            genre: 'testgenre'
        });
        expect(band).toBeDefined();
        expect(band.name).toBe('testband');
        expect(band.genre).toBe('testgenre');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const musician = await Musician.create({
            name: 'testmusician',
            instrument: 'testinstrument'
        });
        expect(musician).toBeDefined();
        expect(musician.name).toBe('testmusician');
        expect(musician.instrument).toBe('testinstrument');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const band = await Band.create({
            name: 'name',
            genre: 'genre',
        });
        expect(band).toBeDefined();
        await band.update({
            genre: 'genre'});
            const updatedBand = await Band.findByPk(band.id);
            expect(updatedBand.genre).toBe('genre');
    })

    test('can update a Musician', async () => {
        // Update an existing musician
        const musician = await Musician.create({ name: 'Initial Name', instrument: 'Initial Instrument' });
        expect(musician).toBeDefined();
        await musician.update({ instrument: 'Updated Instrument' });
        const updatedMusician = await Musician.findByPk(musician.id);
        expect(updatedMusician.instrument).toBe('Updated Instrument');
    })

    test('can delete a Band', async () => {
        // Delete an existing band
        const band = await Band.create({ name: 'To Be Deleted', genre: 'To Be Deleted' });
        expect(band).toBeDefined();
        await band.destroy();
        const deletedBand = await Band.findByPk(band.id);
        expect(deletedBand).toBeNull();
    })

    test('can delete a Musician', async () => {
        // Delete an existing musician
        const musician = await Musician.create({ name: 'To Be Deleted', instrument: 'To Be Deleted' });
        expect(musician).toBeDefined();
        await musician.destroy();
        const deletedMusician = await Musician.findByPk(musician.id);
        expect(deletedMusician).toBeNull();
    })
})