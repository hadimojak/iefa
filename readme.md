setup depenceies: npm i

run the server: npm start


privoders: behsa and enyak

provider1.txt is for behsa
provider2.txt is for enyak


statusCode 0 in for inactive and 1 for active


proper body for set active provider :
```
{
    "provider": "behsa",
    "status": 1
}
```

proper body for send sms :
```
{
    "message": "asdasd",
    "phoneNumber": "09123143243"
}
```