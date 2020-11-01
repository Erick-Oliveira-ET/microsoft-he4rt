const msalConfig = {
    auth: {
      clientId: 'CLIENT_ID',
      redirectUri: 'http://localhost:3000/'
    },
    scopes: [
      "user.read",
      'mailboxsettings.read',
      'calendars.readwrite'
    ]
};

export default msalConfig; 