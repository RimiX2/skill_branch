var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZGE2MTJmYjc0ZDAwMTFiZTgwNzgiLCJ1c2VybmFtZSI6ImNqX3JpbWl4QHJhbWJsZXIucnUiLCJyb2xlIjoidXNlciIsImlhdCI6MTQ3ODAyMzc3OX0.P_e4YROkf5KNDnsLlLaZb1BsEPnvgseMsIWbueGyAIE';
var skb = new Skb(token);
skb.taskHelloWorld('Text text text');