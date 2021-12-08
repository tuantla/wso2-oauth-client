let express     = require('express');
let env         = require('../env')
let querystring = require('querystring');
let axios       = require('axios')
let router      = express.Router();


let {
     deviceId,
     clientId,
     clientSecret,
     authorizeEndpoint,
     tokenEndpoint
} = env.get('local')

let oauth2Callback = 'http://localhost:5000/oauth/callback'

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';


const buildAuthorizeUrl = ()=> {
    let extras =
        {
            response_type: 'code',
            scope: 'openid account transaction',
            tenantDomain:'carbon.super',
            prompt: 'login',
        }

    return  `${authorizeEndpoint}?client_id=${clientId}&redirect_uri=${oauth2Callback}&${querystring.stringify(extras)}`
}


const buildAuthorizeEndpoint = (req, regPin)=> {
    let extras =
        {
            response_type: 'code',
            scope: 'openid',
            pinAuth: 'true',
            deviceid: deviceId,
            prompt: 'login',
        }
    if (!req.session) {
        req.session = {}
    }

    if (!req.session.regDevice) {
        extras.regDevice = true
    }

    if (req.session.sub) {
        extras.sub = req.session.sub
    }

    return  `${authorizeEndpoint}?client_id=${clientId}&redirect_uri=${oauth2Callback}&${querystring.stringify(extras)}`
}


router.get('/', (req, res) => {
    if (!req.session) {
        req.session = {}
    }
    let url = buildAuthorizeEndpoint(req)

    res.render("oauth/index",
        {
         url:url,
         authorizeUrl: buildAuthorizeUrl(),
         session: JSON.stringify(req.session, null, 4),
         deviceId,
        },);
});

router.get('/pin', function(req, res) {
   let extras =
   {
        response_type: 'code',
        scope: 'openid',
        pinAuth: 'true',
        deviceid: deviceId,
        prompt: 'login',
   }
   if (!req.session) {
        req.session = {}
   }
  console.log(req.session.regDevice)
  console.log(req.session)
  if (!req.session.regDevice) {
      extras.regDevice = true
      req.session.regDevice = true
  }

  if (req.session.sub) {
       extras.sub = req.session.sub
  }

  let url = buildAuthorizeEndpoint(req)
  console.log(url)
  res.writeHead(302,{Location: url})
  res.end();
});

router.get('/callback', async (req, res) => {
    try {
        let data = {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'authorization_code',
            redirect_uri: oauth2Callback,
            code: req.query.code
        }
        //console.log(data)
        let response = await axios.post(tokenEndpoint,
            querystring.stringify(data));
        let {id_token} = response.data

        let payload = JSON.parse(Buffer.from(id_token.split('.')[1],"base64").toString('ascii'))
        let sub = payload.sub
        req.session.sub = sub
        req.session.regDevice = true

        res.render('oauth/authenticated', {token: JSON.stringify(response.data, null, 4)});
    } catch (e) {
        console.log(e)
        res.send('error');
    }


});


module.exports = router;
