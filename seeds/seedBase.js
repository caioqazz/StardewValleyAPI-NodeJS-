const circulationRepo = require('./weaponSeed');
const mongoose = require('mongoose');

async function run() {
    const db = mongoose.connect(
        'mongodb+srv://stard3wv4lleyuser:t9dpiIzSUFfLg3OB@cluster0-ackzz.gcp.mongodb.net/Test?retryWrites=true&w=majority',
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log('connected to database!')
    );
    await circulationRepo.init();

}


run();