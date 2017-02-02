/* jshint node: true, esversion: 6 */

'use strict';

const express = require('express');
const ipware = require('ipware');
const useragent = require('useragent');

const app = express();
const port = process.env.PORT || 3000;
const get_ip = ipware().get_ip;

app.get('/whoami', (req, res) => {
    const ipaddress = get_ip(req).clientIp;
    const language = req.headers['accept-language'].split(',')[0];
    const agent = useragent.parse(req.headers['user-agent']);
    const os = agent.os.family;
    res.json({ ipaddress, language, os });
});

app.listen(port, () => console.log(`Server running on port ${port}.`));