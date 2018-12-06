const http = require('https')

function getPlayerById(PLAYER_ID){
    options = { 
        method: 'GET',
        host : 'www.easports.com',
        port: 443,
        path: `/fifa/ultimate-team/api/fut/item?id=${PLAYER_ID}`,
    };
    
    function handle_response (res ) {
        var bb = '';
        
        res.on('data', chunk => {
            bb += chunk;
        });
        
        res.on('end', () => {
            try {
                var p = JSON.parse(bb);
                var fullPlayerName = p["items"][0]["firstName"]+' '+p["items"][0]["lastName"]
                console.log(fullPlayerName)
                return fullPlayerName
            }
            catch (err) {
                console.log('No results');
            }
        });
    }
    
    req = http.request(options, handle_response);
    req.end();

}
getPlayerById(214100);
