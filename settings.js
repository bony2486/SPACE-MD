require('dotenv').config();

module.exports = {
  //Enter your session id here (optional)
  SESSION_ID: process.env.SESSION_ID || 'CYPHER-X:~UEsDBBQAAAgIAKh7DVtQkFovVAQAAHIHAAAKAAAAY3JlZHMuanNvbpVV27KiOBT9l7xqtVwFrDpVAxwRVLwgqDg1DxEChLsheOvy36fQPn36YabnDE8h2bX32muvlXwHZYUbNEM3MPoOaoLPkKJuSW81AiOgtVGECOiDEFIIRqCw0Z3lqvOQOw8zs8Eht40Tdmrdq5DXcxKWhjZOELM0GfsNPPqgbo85Dn6T0HENHCrLeQ9Tl*QuHC1MVSf8Wp5Mj05eYNmijprxU3NvvYFHlxFigst4XCeoQATmM3RbQUy+Bn+tsc5dqde7c5xMe*Zd0HrpTcCaVwdykJrVUTsWWcyhFeN*DT4vD+aDMA5nmr57H4*jq5IGUpzv4wV38VZOj8s9HCiakd+qF*wGxyUKrRCVFNPbl3kXbIQOW3XixqZy5XsMjqa1rBnuToHDnnTfW*tb6RiQq3fC14Bfg*3GjGZEyKT3gNiywrqJlNt3Dm+kgbLT5zthFsvW+shnvwJfkQ+tZP+H91ZHMhJXxmJ*X5seww3lwWJ3wakSplJzKOIF0laip9RoK38N*jBs3WCeXtmZSNYrfN8f9pJNxqogXHJ4XEzcRgp2ubNoY*8TPqQt+R1K35J1HHluthlHa23LDpfNfRuf8vnu5A2ux*cx65mnyplE00VyLmc+j8V1tjp7WYIGKnMNSy6unZQZl5zrHLNgBk1hqa7fnh1l6GaFYMQ++oCgGDeUQIqrstvjuGEfwPC8QQFB9EkviM9F41zjzUo7RPI7F7hterSOR83eGqHKRbkNl8m5DSaibr2BPqhJFaCmQaGJG1qRm42aBsaoAaM**+qDEl3pa3BdOZ7tgwiThnplW+cVDD+m+nEIg6BqS7q5lYHeLRABI+ZzG1GKy7jpeGxLSIIEn5GeQNqAUQTzBv3sEBEUghElLfrpWr0KO+K3a3++HW7moA+K50BwCEaAEwVJYFiJkxlmJAt*NN8uXVpY199KREEf5K8wRpREkZEVjpEE*hnZHTx+IuwShohCnDdgBHSrrNKDb4ztCMnNejJRx7Gqxyr47OhDGi*qy7busT0+NC*vxm2b+6v6vo8EbVXAaXZjsz2sPJ*kyGuT6u0fkoARUPDOl2KGWTZF4PupNd15zsDwtSw5ndwUtYm3PtBqxZdukLmz6XHpi3Ft8BsXG+RS9VbirgnXHk8v6RgGxLz7dSbonY76IERnHKBfi1XuCeuZs2S3br1mlXtdipBsilNUWUec5DY5DMtUDRbh1bOC5eayN23VbrPtxmdn2cSfpHjplabb463z9LJzpXqSh7r6Eu3TNPmPywo*5dTNqvuNMHp6v4TdBP97di*gncSYR*+XHD9uk39xpHaQThGNKO*I6jXID7v3YcDyPdUVC3yw6cHgTsZkJu7zeQXB4*FXH9Q5pFFFCjACsAxJhUPQB6RqO81aZVT9ppiuepYavzrPYUPVTx+4uEANhUUNRmwnPkVWRPEVtSJVbcIm6R4DRznwSifqm1rXGwrph62A2n3akAWPvwFQSwECFAMUAAAICACoew1bUJBaL1QEAAByBwAACgAAAAAAAAAAAAAAgIEAAAAAY3JlZHMuanNvblBLBQYAAAAAAQABADgAAAB8BAAAAAA=',
  
  //Enter your number here for administrative access to the bot
  BOT_ADMIN: process.env.BOT_ADMIN || '254740172800',
  
  //Bot web server port
  PORT: parseInt(process.env.PORT) || 2605,
  
  //Enter your Github username here (Compulsory unless you have a valid premium key)
  GITHUB_USERNAME: process.env.GITHUB_USERNAME || 'bony2486',
  
  //Enter your desired bot password here. Users will be asked for this password when they try to connect to your bot via telegram or web
  //Must be numbers only and a total of 8 digits
  BOT_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 12345678,
  
  //Enter the desired password for accessing administrative access to the bot 
  //⚠️ Do not share with anyone as they can use it to control your bot
   //Must be numbers only and a total of 8 digits
  ADMIN_PASSWORD: parseInt(process.env.BOT_PASSWORD) || 11223344,
  
  //Enter telegram bot token for interaction with this bot via telegram (optional)
  TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN || '',
  
   //Antidelete and Antiedit functionality, set true to enable and false to disable. (⚠️ This function consumes a lot of memory + storage, only enable if you have enough resources ⚠️)
   ANTI_DELETE: process.env.ANTI_DELETE || 'true',
  
  
  //⚠️ Premium users settings ⚠️
   PREMIUM_KEY: process.env.PREMIUM_KEY || '',
   MAX_SESSIONS: parseInt(process.env.MAX_SESSIONS) || 3,
   EXPIRY: process.env.EXPIRY || ''
};

// You must set GITHUB_USERNAME to use the bot unless you are a premium user
// You must fork SPACE-MD repo in order to use the bot unless you're a premium user
