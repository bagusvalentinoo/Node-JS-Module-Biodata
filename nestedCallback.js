var fs = require('fs');

fs.rename('sample.txt', 'sample_old.txt',
    function (err) {
        if (err) throw err;
        console.log('File renamed.');
        fs.unlink('sample_old.txt',
            function (err) {
                if (err) throw err;
                console.log('File deleted.');
            }
        )
    }
)