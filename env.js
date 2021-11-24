const allEnv = {
  'sandbox': {
    deviceId: '13c83f6e-94d6-4dfe-869d-bff8b0199805',
    clientId :'m2Ve4ziGsAqyzkueVcMJnOOg3iwa',
    clientSecret: 'SeFLDKA04xif6EB3eKB9fIiFsWAa',
    authorizeEndpoint: 'https://wso2apim-is.101digital.io/oauth2/authorize',
    tokenEndpoint: 'https://sandbox.101digital.io/token'
  },

  'sandbox-pin': {
    deviceId: '13c83f6e-94d6-4dfe-869d-bff8b0199806',
    clientId :'vMYGUMl5OF6kyNIh8kMdgMhWGrIa',
    clientSecret: 'uzO6Kd9cT0SsqdgEiswGYd1_af4a',
    authorizeEndpoint: 'https://wso2apim-is.101digital.io/oauth2/authorize',
    tokenEndpoint: 'https://sandbox.101digital.io/token'
  },


  'local': {
    deviceId: '13c83f6e-94d6-4dfe-869d-bff8b0199805',
    clientId :'sj_dnhidsiV0j1tf1g3wGTPBb5Ea',
    clientSecret: 'xXwkErM0qfL_1cZUrkcShgdCs1Aa',
    authorizeEndpoint: 'https://is-dev/oauth2/authorize',
    tokenEndpoint: 'https://is-dev/oauth2/token'
  },

  'local-1': {
    deviceId: '13c83f6e-94d6-4dfe-869d-bff8b0199805',
    clientId :'2dr8reZ7yWirh6HbCFOOqARfXwAa',
    clientSecret: 'Mf_Jw7H9Xe2VHc6gvOMjy874_NUa',
    authorizeEndpoint: 'https://is-dev/oauth2/authorize',
    tokenEndpoint: 'https://is-dev/oauth2/token'
  }
}

const getEnv = (envName) => {
  return allEnv.hasOwnProperty(envName) ? allEnv[envName] : allEnv['sandbox']
}

const env = {
  get:(envName) => getEnv(process.env.ENVIRONMENT)
}


module.exports = env
